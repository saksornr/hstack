export const diagram = {
  title: "Integrated Decision Flow",
  subtitle: "Neutral example showing source intake, feature preparation, decisioning, guardrails, and activation",
  footer: "Editable diagram template",
  legend: [
    { label: "Source", variant: "source" },
    { label: "Process", variant: "process" },
    { label: "Data store", variant: "data" },
    { label: "Future or external", variant: "dashed" }
  ],
  lanes: [
    { id: "intake", label: "Intake Layer", x: 2, y: 14, w: 28, h: 24 },
    { id: "decision", label: "Decision Layer", x: 31, y: 14, w: 45, h: 55 },
    { id: "activation", label: "Activation Layer", x: 77, y: 14, w: 21, h: 55 },
    { id: "feedback", label: "Feedback Layer", x: 2, y: 72, w: 96, h: 18 }
  ],
  nodes: [
    {
      id: "source-hub",
      label: "Source Hub",
      variant: "source",
      x: 4,
      y: 20,
      w: 15,
      h: 15,
      items: ["Customer signals", "Product events", "Service history"]
    },
    {
      id: "profile-store",
      label: "Profile Store",
      variant: "data",
      x: 22,
      y: 19,
      w: 10,
      h: 17,
      items: ["Unified records", "Consent flags"]
    },
    {
      id: "feature-builder",
      label: "Feature Builder",
      variant: "process",
      x: 35,
      y: 18,
      w: 16,
      h: 18,
      items: ["Normalize inputs", "Create aggregates", "Publish features"]
    },
    {
      id: "eligibility-rules",
      label: "Eligibility Rules",
      variant: "dashed",
      x: 55,
      y: 18,
      w: 16,
      h: 12,
      items: ["Policy checks", "Suppression logic"]
    },
    {
      id: "decision-engine",
      label: "Decision Engine",
      variant: "engine",
      x: 35,
      y: 40,
      w: 37,
      h: 24,
      items: ["Priority score", "Propensity model", "Value optimizer"]
    },
    {
      id: "ranker",
      label: "Ranked Actions",
      variant: "process",
      x: 79,
      y: 20,
      w: 16,
      h: 13,
      items: ["Next best offer", "Service prompt"]
    },
    {
      id: "guardrails",
      label: "Guardrails",
      variant: "guardrail",
      x: 80,
      y: 41,
      w: 14,
      h: 10,
      items: ["Policy", "Capacity", "Fairness"]
    },
    {
      id: "channel-router",
      label: "Channel Router",
      variant: "source",
      x: 79,
      y: 56,
      w: 16,
      h: 10,
      items: ["Delivery rules"]
    },
    {
      id: "outcomes",
      label: "Outcome Signals",
      variant: "data",
      x: 5,
      y: 78,
      w: 17,
      h: 8,
      items: ["Responses", "Conversions"]
    },
    {
      id: "monitoring",
      label: "Monitoring",
      variant: "dashed",
      x: 31,
      y: 77,
      w: 18,
      h: 10,
      items: ["Drift checks", "Quality alerts"]
    },
    {
      id: "learning-loop",
      label: "Learning Loop",
      variant: "process",
      x: 55,
      y: 77,
      w: 18,
      h: 10,
      items: ["Refresh features", "Tune thresholds"]
    }
  ],
  connectors: [
    { from: "source-hub", to: "profile-store", points: [[19, 27.5], [22, 27.5]], label: "curated inputs" },
    { from: "profile-store", to: "feature-builder", points: [[32, 27.5], [35, 27.5]] },
    { from: "feature-builder", to: "eligibility-rules", points: [[51, 27], [55, 27]], label: "candidate set" },
    { from: "feature-builder", to: "decision-engine", points: [[43, 36], [43, 40]] },
    { from: "eligibility-rules", to: "decision-engine", points: [[63, 30], [63, 36], [58, 36], [58, 40]] },
    { from: "decision-engine", to: "ranker", points: [[72, 52], [75, 52], [75, 26.5], [79, 26.5]], label: "ranked list" },
    { from: "ranker", to: "guardrails", points: [[87, 33], [87, 41]] },
    { from: "guardrails", to: "channel-router", points: [[87, 51], [87, 56]] },
    { from: "channel-router", to: "outcomes", points: [[79, 61], [68, 61], [68, 82], [22, 82]], dashed: true, label: "response feedback" },
    { from: "outcomes", to: "monitoring", points: [[22, 82], [31, 82]], dashed: true },
    { from: "monitoring", to: "learning-loop", points: [[49, 82], [55, 82]], dashed: true },
    { from: "learning-loop", to: "feature-builder", points: [[64, 77], [64, 70], [43, 70], [43, 58]], dashed: true, label: "model update" }
  ],
  notes: [
    { text: "Use dashed areas for future, optional, or externally owned work.", x: 5, y: 39, w: 22, h: 6 },
    { text: "Keep the main engine visually dominant and route long arrows through clear corridors.", x: 37, y: 65, w: 30, h: 5 }
  ]
};
