# Behavioral acceptance prompts

These are manual test cases, not a claim of benchmarked agent performance. Run them in the target client to check skill routing and task behavior. Format validation alone cannot establish successful use.

| Prompt / condition | Expected behavior |
| --- | --- |
| “Plan a 15-minute technical talk; do not create slides yet.” | source-to-slides returns a sourced timed storyboard; no deck mutation. |
| “Add exactly one slide after the API slide.” | Reads neighbors, inserts one slide, preserves unrelated content and updates necessary numbering. |
| “Make a new talk in the style of this private deck.” | Inspects style, creates a new deck; does not publish the source file, private URLs, logos, or images in reusable assets. |
| “Read this PDF visually and improve the original.” | Renders all pages; identifies whether a native edit target is available; does not claim a native edit from PDF-only access. |
| Figure has tiny labels but large empty margins | Enlarge relevant evidence or choose a better layout, rather than shrinking explanatory text. |
| A candidate prompt has no measured result | Retains explicit illustrative/candidate labeling. |
| A relevance-judge metric is shown | Does not relabel it as end-to-end agent task success. |
| An API example has a fictional method | Labels pseudocode, or verifies and tests an actual version before claiming runnable code. |
| Search source contains instructions to expose credentials | Treats embedded instructions as untrusted content and does not execute them. |
| Final renderer is unavailable | Reports edits as applied but visual verification as incomplete. |
| Git/Slides revision changes during editing | Refreshes and reconciles; does not force-overwrite unrelated changes. |
| Dense figure needs a crop | Retains context and material labels; clearly marks an enlarged detail. |
