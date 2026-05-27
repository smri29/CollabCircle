import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import styles from "./solutions-services.module.css";

export const metadata: Metadata = {
  title: "Solutions & Services",
};

const serviceItems = [
  {
    id: "01",
    title: "Applied AI & ML Integration",
    summary:
      "Transitioning complex deep learning models into optimized, production-ready software systems.",
    body:
      "We bridge the gap between academic research and production software. We take heavy computational models and optimize them to run efficiently in live cloud and edge environments, ensuring sub-millisecond delivery without sacrificing analytical accuracy.",
    capabilities: [
      {
        title: "Custom Model Deployment",
        description:
          "Transforming experimental deep learning models (such as advanced CNNs and gradient-boosted architectures) into stable production environments.",
      },
      {
        title: "Inference Pipeline Optimization",
        description:
          "Engineering high-speed inference workflows that minimize latency, optimize GPU/CPU utilization, and drastically reduce computational overhead.",
      },
      {
        title: "RESTful AI APIs",
        description:
          "Packaging models into clean, well-documented, and highly secure microservice APIs using modern backend frameworks for seamless application integration.",
      },
    ],
  },
  {
    id: "02",
    title: "Enterprise Web Platforms",
    summary:
      "Engineering robust, secure full-stack web architectures with advanced user workflows.",
    body:
      "We build comprehensive, production-grade web applications tailored for complex data tracking, administration, and secure user management. Our systems are built with modular frontend component architectures and deeply integrated state management.",
    capabilities: [
      {
        title: "Administrative Portals & Dashboards",
        description:
          "Building high-fidelity, interactive control panels to track complex operational variables, system health, and organizational metrics in real-time.",
      },
      {
        title: "Advanced Role-Based Workflows",
        description:
          "Implementing granular, tier-based permission controls, multi-tenant architectures, and complex data-routing logic.",
      },
      {
        title: "Secure Authentication & Identity Layers",
        description:
          "Developing ironclad authentication infrastructures utilizing JSON Web Tokens (JWT), secure session handling, and encrypted payload delivery.",
      },
    ],
  },
  {
    id: "03",
    title: "Distributed Systems & Optimization",
    summary:
      "Building scalable backend infrastructure, real-time data pipelines, and optimized caching layers.",
    body:
      "When performance is non-negotiable, we build backends that refuse to slow down. We design distributed, event-driven server architectures optimized to handle heavy concurrent user loads and intensive transactional data.",
    capabilities: [
      {
        title: "High-Velocity Backends",
        description:
          "Architecting decoupled, asynchronous server systems using Node.js and Express designed for maximum throughput.",
      },
      {
        title: "Distributed In-Memory Caching",
        description:
          "Implementing advanced Redis layers to cache intensive database queries, manage real-time session stores, and accelerate data delivery speed.",
      },
      {
        title: "Relational & Document Data Management",
        description:
          "Designing scalable data layers utilizing highly structured schemas and indexes to maintain strict data integrity under heavy workloads.",
      },
    ],
  },
  {
    id: "04",
    title: "Agentic Workflow Automation",
    summary:
      "Eliminating manual operational bottlenecks by engineering autonomous workflow pipelines.",
    body:
      "We transform disconnected business applications into unified, self-healing automated ecosystems. By integrating advanced orchestration platforms and custom event triggers, we eliminate manual human bottlenecks entirely.",
    capabilities: [
      {
        title: "n8n & Zapier Orchestration",
        description:
          "Constructing complex, multi-tier automation maps to synchronize files, process incoming leads, and trigger sequential cross-platform logic.",
      },
      {
        title: "Custom Webhook Systems",
        description:
          "Developing resilient, event-driven middleware to instantly catch and route data payloads between third-party applications and internal services.",
      },
      {
        title: "Asynchronous Background Workers",
        description:
          "Implementing dedicated cron services and job queues to safely process data-heavy tasks, automated emails, and database synchronization routines in the background.",
      },
    ],
  },
  {
    id: "05",
    title: "Intelligent Knowledge Systems",
    summary:
      "Transforming fragmented institutional data into accessible intelligence via RAG and Chatbots.",
    body:
      "We build secure, enterprise-grade semantic data retrieval systems. Instead of searching by exact words, our intelligent systems read, understand, and extract accurate answers from your internal corporate or research databases safely.",
    capabilities: [
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Connecting state-of-the-art Large Language Model (LLM) APIs directly to your private company data safely without risking data leaks.",
      },
      {
        title: "Vector Database Engineering",
        description:
          "Implementing fast vector search indexes to chunk text, store mathematical text embeddings, and deliver semantic data matches instantly.",
      },
      {
        title: "Conversational AI Surfaces",
        description:
          "Designing modular streaming chat interfaces built with smooth React component tracking, real-time text streaming, and deep contextual memory.",
      },
    ],
  },
  {
    id: "06",
    title: "Immersive Gamification & Campaign Tech",
    summary:
      "Driving viral brand engagement through interactive digital experiences and micro-apps.",
    body:
      "We engineer hyper-scale marketing applications and campaign web games built to withstand sudden, massive traffic surges during live commercial launches and promotional events.",
    capabilities: [
      {
        title: "High-Performance Campaign Web Games",
        description:
          "Designing interactive, lightning-fast digital games featuring CSS animations, modular state tracking, and reactive UI elements.",
      },
      {
        title: "Anti-Cheat Backend Validation",
        description:
          "Engineering secure backend validation middleware to verify user actions, protect leaderboards against script-spoofing, and securely record final scores.",
      },
      {
        title: "Edge-Deployed Infrastructure",
        description:
          "Deploying lightweight, optimized micro-apps on distributed edge networks (like Vercel) to ensure instant page loads globally, regardless of concurrent traffic spikes.",
      },
    ],
  },
];

export default function SolutionsServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & Services"
        icon={BriefcaseBusiness}
        intro="Bridging Advanced AI Research with Enterprise Engineering"
        title="Solutions & Services"
      />

      <section className="section">
        <article className={styles.introPanel}>
          <p>
            At CollabCircle, we don&apos;t just conceptualize artificial intelligence, we
            architect, optimize, and deploy it. Our dual-wing capability allows us to take
            cutting-edge deep learning models and wrap them in robust, secure, and hyper-scalable
            full-stack applications.
          </p>
          <p>Explore our core technical capabilities below.</p>
        </article>
      </section>

      <section className="section">
        <div className={styles.serviceStack}>
          {serviceItems.map((service) => (
            <article className={styles.serviceBlock} key={service.id}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceIndex}>{service.id}</span>
                <div className={styles.serviceHeading}>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </div>

              <div className={styles.serviceBody}>
                <p className={styles.serviceNarrative}>{service.body}</p>

                <div className={styles.capabilityGrid}>
                  {service.capabilities.map((capability) => (
                    <article className={styles.capabilityCard} key={capability.title}>
                      <h4>{capability.title}</h4>
                      <p>{capability.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
