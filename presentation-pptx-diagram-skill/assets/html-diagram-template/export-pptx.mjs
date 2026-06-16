import pptxgen from "pptxgenjs";
import { readFile } from "node:fs/promises";
import { diagram } from "./diagram-data.mjs";

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Presentation PPTX Diagram Skill";
pptx.company = "";
pptx.subject = "Editable process diagram";
pptx.title = diagram.title;
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Century Gothic",
  bodyFontFace: "Century Gothic",
  lang: "en-US"
};

const slideW = 13.333;
const slideH = 7.5;
const diagramBox = { x: 0.267, y: 1.05, w: 12.8, h: 5.85 };
const fontFace = "Century Gothic";

const cssText = await readFile(new URL("./theme.css", import.meta.url), "utf8");
const cssVars = Object.fromEntries(
  [...cssText.matchAll(/--([a-z0-9-]+):\s*([^;]+);/gi)].map((match) => [match[1], match[2].trim()])
);

function hex(name, fallback) {
  return (cssVars[name] || fallback).replace("#", "").trim();
}

const colors = {
  primary: hex("primary", "#9333EA"),
  secondary: hex("secondary", "#A855F7"),
  success: hex("success", "#10B981"),
  warning: hex("warning", "#F59E0B"),
  danger: hex("danger", "#EF4444"),
  surface: hex("surface", "#FFFFFF"),
  text: hex("text", "#09090B"),
  muted: hex("muted", "#71717A"),
  line: hex("line", "#8A8A93"),
  panel: hex("panel", "#F8F5FF"),
  process: hex("process", "#D8C6F7"),
  data: hex("data", "#4B4B4F"),
  guardrail: hex("guardrail", "#0B7FCB"),
  note: hex("note", "#FCE7F3")
};

function shapeType(name) {
  return pptx.ShapeType?.[name] || name;
}

function sx(percent) {
  return diagramBox.x + (percent / 100) * diagramBox.w;
}

function sy(percent) {
  return diagramBox.y + (percent / 100) * diagramBox.h;
}

function sw(percent) {
  return (percent / 100) * diagramBox.w;
}

function sh(percent) {
  return (percent / 100) * diagramBox.h;
}

function rect(item) {
  return { x: sx(item.x), y: sy(item.y), w: sw(item.w), h: sh(item.h) };
}

function addText(slide, text, box, options = {}) {
  slide.addText(text, {
    x: box.x,
    y: box.y,
    w: box.w,
    h: box.h,
    margin: options.margin ?? 0.04,
    fontFace,
    fontSize: options.fontSize ?? 8,
    bold: options.bold ?? false,
    color: options.color ?? colors.text,
    align: options.align ?? "center",
    valign: options.valign ?? "mid",
    fit: "shrink",
    breakLine: false
  });
}

function variantStyle(variant) {
  const base = {
    fill: colors.primary,
    text: colors.surface,
    line: colors.primary,
    dashType: undefined,
    radius: true
  };
  const map = {
    source: base,
    process: { ...base, fill: colors.process, line: colors.process },
    data: { ...base, fill: colors.data, line: colors.data },
    guardrail: { ...base, fill: colors.guardrail, line: colors.guardrail },
    engine: { ...base, fill: "4C2887", line: "4C2887" },
    dashed: {
      fill: colors.surface,
      text: "4C2887",
      line: "4C2887",
      dashType: "dash",
      radius: true
    }
  };
  return map[variant] || base;
}

function addNode(slide, node) {
  const box = rect(node);
  const style = variantStyle(node.variant);
  slide.addShape(shapeType(style.radius ? "roundRect" : "rect"), {
    ...box,
    rectRadius: 0.08,
    fill: { color: style.fill, transparency: node.variant === "dashed" ? 8 : 0 },
    line: { color: style.line, width: 1.1, dashType: style.dashType },
    shadow: node.variant === "dashed" ? undefined : { type: "outer", color: "000000", opacity: 0.11, blur: 1, angle: 45, offset: 1 }
  });

  addText(slide, node.label, { x: box.x + 0.05, y: box.y + 0.06, w: box.w - 0.1, h: Math.min(0.28, box.h * 0.28) }, {
    color: style.text,
    bold: true,
    fontSize: node.variant === "engine" ? 8.8 : 8.2
  });

  if (node.variant === "engine") {
    const count = node.items?.length || 0;
    const gap = 0.08;
    const childW = (box.w - 0.34 - gap * Math.max(count - 1, 0)) / Math.max(count, 1);
    for (const [index, item] of (node.items || []).entries()) {
      const childBox = {
        x: box.x + 0.17 + index * (childW + gap),
        y: box.y + 0.62,
        w: childW,
        h: box.h - 0.8
      };
      slide.addShape(shapeType("roundRect"), {
        ...childBox,
        rectRadius: 0.05,
        fill: { color: colors.secondary },
        line: { color: colors.secondary, width: 0.6 }
      });
      addText(slide, item, childBox, { color: colors.surface, bold: true, fontSize: 7.4 });
    }
    return;
  }

  const items = node.items || [];
  if (!items.length) return;
  const itemText = items.join("\n");
  addText(slide, itemText, { x: box.x + 0.08, y: box.y + Math.min(0.38, box.h * 0.32), w: box.w - 0.16, h: box.h - Math.min(0.45, box.h * 0.35) }, {
    color: style.text,
    fontSize: 6.6
  });
}

function addConnector(slide, connector) {
  for (let i = 1; i < connector.points.length; i += 1) {
    const [x1, y1] = connector.points[i - 1];
    const [x2, y2] = connector.points[i];
    const isLast = i === connector.points.length - 1;
    slide.addShape(shapeType("line"), {
      x: sx(x1),
      y: sy(y1),
      w: sx(x2) - sx(x1),
      h: sy(y2) - sy(y1),
      line: {
        color: colors.line,
        width: 1,
        dashType: connector.dashed ? "dash" : undefined,
        endArrowType: isLast ? "triangle" : undefined
      }
    });
  }

  if (connector.label) {
    const [lx, ly] = connector.points[Math.floor(connector.points.length / 2)];
    const labelBox = { x: sx(lx) - 0.43, y: sy(ly) - 0.11, w: 0.86, h: 0.22 };
    slide.addShape(shapeType("roundRect"), {
      ...labelBox,
      rectRadius: 0.03,
      fill: { color: colors.surface, transparency: 3 },
      line: { color: colors.surface, transparency: 100 }
    });
    addText(slide, connector.label, labelBox, {
      color: colors.muted,
      fontSize: 5.8
    });
  }
}

const slide = pptx.addSlide();
slide.background = { color: colors.surface };

slide.addText(diagram.title, {
  x: 0.33,
  y: 0.2,
  w: 7.3,
  h: 0.42,
  margin: 0,
  fontFace,
  fontSize: 23,
  color: "4C2887",
  bold: false,
  fit: "shrink"
});

slide.addText(diagram.subtitle, {
  x: 0.36,
  y: 0.72,
  w: 7.8,
  h: 0.22,
  margin: 0,
  fontFace,
  fontSize: 7.5,
  color: "4C2887",
  fit: "shrink"
});

slide.addShape(shapeType("rect"), {
  x: 0,
  y: 0.91,
  w: slideW,
  h: 0.04,
  fill: { color: colors.primary },
  line: { color: colors.primary, transparency: 100 }
});

let legendX = 9.55;
for (const item of diagram.legend) {
  const style = variantStyle(item.variant);
  slide.addShape(shapeType("roundRect"), {
    x: legendX,
    y: 0.58,
    w: 0.24,
    h: 0.13,
    rectRadius: 0.02,
    fill: { color: item.variant === "dashed" ? colors.surface : style.fill },
    line: { color: style.line, width: 0.6, dashType: style.dashType }
  });
  addText(slide, item.label, { x: legendX + 0.29, y: 0.545, w: 0.92, h: 0.2 }, {
    color: "4C2887",
    align: "left",
    fontSize: 5.9
  });
  legendX += 1.18;
}

for (const lane of diagram.lanes) {
  const box = rect(lane);
  slide.addShape(shapeType("rect"), {
    ...box,
    fill: { color: colors.panel, transparency: 35 },
    line: { color: "E7E0F7", width: 0.8 }
  });
  const labelW = Math.min(1.45, box.w);
  slide.addShape(shapeType("rect"), {
    x: box.x,
    y: Math.max(diagramBox.y + 0.01, box.y - 0.23),
    w: labelW,
    h: 0.22,
    fill: { color: "4C2887" },
    line: { color: "4C2887", transparency: 100 }
  });
  addText(slide, lane.label, { x: box.x + 0.03, y: Math.max(diagramBox.y + 0.015, box.y - 0.215), w: labelW - 0.06, h: 0.18 }, {
    color: colors.surface,
    bold: true,
    fontSize: 6.4
  });
}

for (const connector of diagram.connectors) {
  addConnector(slide, connector);
}

for (const node of diagram.nodes) {
  addNode(slide, node);
}

for (const note of diagram.notes || []) {
  const box = rect(note);
  slide.addShape(shapeType("rect"), {
    ...box,
    fill: { color: colors.note },
    line: { color: colors.secondary, width: 1 }
  });
  addText(slide, note.text, { x: box.x + 0.05, y: box.y + 0.04, w: box.w - 0.1, h: box.h - 0.08 }, {
    align: "left",
    color: "52525B",
    fontSize: 6
  });
}

slide.addText(diagram.footer, {
  x: 0,
  y: 7.18,
  w: slideW,
  h: 0.14,
  margin: 0,
  fontFace,
  fontSize: 5.8,
  color: colors.muted,
  align: "center"
});

await pptx.writeFile({ fileName: "diagram-deck.pptx" });
console.log("Wrote diagram-deck.pptx");
