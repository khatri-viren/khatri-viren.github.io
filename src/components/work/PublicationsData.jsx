export const publicationsData = [
  {
    id: "mex-2025-hydroponics",
    title: "AI-powered automated hydroponic system for smart agriculture",
    venue: "MethodsX (Elsevier)",
    year: 2025,
    dateLabel: "Aug 22, 2025",
    authors: "T. Baraskar, V. Khatri, et al.",
    abstract:
      "Protocol for an AI-assisted automated hydroponic system: real-time environmental monitoring, automated nutrient management, and vision-based disease detection to support plant health and reduce manual work. Sensing, connectivity, backend processing, and a web dashboard work together with relay-driven automation; plant imagery supports early detection of common spinach diseases. Evaluation highlights strong disease-detection performance and system robustness; methodology emphasizes reproducibility.",
    href: "https://doi.org/10.1016/j.mex.2025.103579",
    relatedProjectId: 3,
  },
  {
    id: "springer-2025-grape-cnn",
    title:
      "Disease Detection in Grape Leaves Using Convolutional Neural Networks",
    venue: "Springer (LNNS / ICISA 2023)",
    year: 2025,
    dateLabel: "Feb 1, 2025",
    authors: "V. Naik, T. Baraskar, V. Khatri, P. Kolhe, M. Katyarmal",
    abstract:
      "Conference chapter on a CNN for grapevine leaf disease identification—healthy versus black rot, esca, and leaf blight—using a collected, pre-processed, and augmented image dataset. The model is built and trained with standard deep-learning tooling and layer stacks; reported accuracy, precision, recall, and F1 support effectiveness across disease classes. Positions CNN-based inspection as a practical aid for earlier, more consistent decisions in viticulture.",
    href: "https://doi.org/10.1007/978-981-97-9839-1_1",
    relatedProjectId: null,
  },
  {
    id: "ieee-2023-stock-prediction",
    title:
      "Prediction of Stock Market Closing Rates Using Deep Learning and Machine Learning Algorithms",
    venue: "IEEE",
    year: 2023,
    dateLabel: "Dec 18, 2023",
    authors: "V. Khatri, et al.",
    abstract:
      "Comparative study of SVM, Random Forest, and LSTM for predicting closing prices of major Indian bank equities (HDFC, Axis, ICICI) across multiple datasets. Models are assessed with R² and MAPE; in the reported experiments, Random Forest delivers the strongest predictive accuracy, with implications for how practitioners choose methods under volatile, high-volume market data.",
    href: "https://ieeexplore.ieee.org/document/10346622",
    relatedProjectId: null,
  },
];

export function getPublicationById(id) {
  return publicationsData.find((p) => p.id === id) ?? null;
}
