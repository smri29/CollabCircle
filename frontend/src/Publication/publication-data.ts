export type PublicationRecord = {
  title: string;
  venue: string;
  doi: string;
  link: string;
  authors: string[];
};

export const journalPublications: PublicationRecord[] = [];

export const conferencePublications: PublicationRecord[] = [
  {
    title:
      "LENS-Guard: A Lightweight Hybrid VAE-CNN for High-Recall Detection of Known and Unknown Network Intrusions",
    venue: "Conference paper",
    doi: "10.1109/ICECTE69292.2026.11429313",
    link: "https://doi.org/10.1109/ICECTE69292.2026.11429313",
    authors: [],
  },
  {
    title:
      "Clinical vs. Ultrasound for PCOS Detection: A Calibrated, Leakage-Safe, Real-Time Benchmark",
    venue: "Conference paper",
    doi: "10.1109/ICCIT68739.2025.11552594",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11552594",
    authors: [],
  },
  {
    title:
      "Reproducible Machine Learning Pipeline for Predicting Cosmetic Chemical Carcinogenicity and Reproductive Toxicity Using Molecular Descriptors and Fingerprints",
    venue: "Conference paper",
    doi: "10.1109/ICCIT68739.2025.11490467",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11490467",
    authors: [],
  },
  {
    title: "Voice-Based Parkinson Disease Detection Using SVM & XGBoost",
    venue: "Conference paper",
    doi: "10.1109/QPAIN66474.2025.11172195",
    link: "https://doi.org/10.1109/QPAIN66474.2025.11172195",
    authors: [],
  },
];
