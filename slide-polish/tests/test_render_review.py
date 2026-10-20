"""Local renderer checks. These tests do not establish presentation quality.

Run from the repository root:
  python -m unittest discover -s slide-polish/tests -v
"""
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

import pymupdf as fitz

SCRIPT = Path(__file__).resolve().parents[1] / 'scripts' / 'render_review.py'
SPEC = importlib.util.spec_from_file_location('render_review', SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class RenderReviewTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.pdf = self.root / 'example.pdf'
        with fitz.open() as doc:
            for _ in range(3):
                page = doc.new_page(width=960, height=540)
                page.insert_text((50, 60), 'Synthetic test page', fontsize=25)
            doc.save(self.pdf)

    def tearDown(self):
        self.temp.cleanup()

    def test_manifest_pages_and_multiple_sheets(self):
        out = self.root / 'review'
        manifest = MODULE.render_review(self.pdf, out, dpi=36, per_sheet=2)
        self.assertEqual(manifest['page_count'], 3)
        self.assertEqual(len(manifest['contact_sheets']), 2)
        self.assertFalse(manifest['visually_reviewed'])
        self.assertEqual(len(manifest['input_sha256']), 64)
        self.assertEqual(manifest['pages'][0]['width_px'], 480)
        for record in manifest['pages']:
            self.assertTrue((out / record['file']).is_file())
            self.assertFalse(record['visually_reviewed'])
        self.assertEqual(json.loads((out / 'manifest.json').read_text())['page_count'], 3)

    def test_nonempty_output_is_refused(self):
        out = self.root / 'existing'
        out.mkdir()
        (out / 'keep.txt').write_text('unchanged')
        with self.assertRaises(ValueError):
            MODULE.render_review(self.pdf, out)
        self.assertEqual((out / 'keep.txt').read_text(), 'unchanged')

    def test_invalid_parameters(self):
        for settings in ({'dpi': 0}, {'columns': 0}, {'per_sheet': 40}, {'thumb_width': 100}):
            with self.subTest(settings=settings), self.assertRaises(ValueError):
                MODULE.render_review(self.pdf, self.root / 'invalid', **settings)

    def test_missing_input(self):
        with self.assertRaises(ValueError):
            MODULE.render_review(self.root / 'missing.pdf', self.root / 'out')

    def test_encrypted_input_is_refused(self):
        encrypted = self.root / 'encrypted.pdf'
        with fitz.open(self.pdf) as doc:
            doc.save(encrypted, encryption=fitz.PDF_ENCRYPT_AES_256,
                     owner_pw='owner-example', user_pw='reader-example')
        with self.assertRaises(ValueError):
            MODULE.render_review(encrypted, self.root / 'out')


if __name__ == '__main__':
    unittest.main()
