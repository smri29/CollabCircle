"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { orbitQuickPrompts, orbitWelcomeMessage } from "@/data/orbit-content";
import styles from "./orbit-assistant.module.css";

type OrbitMessage = {
  id: string;
  role: "orbit" | "user";
  content: string;
};

const initialMessages: OrbitMessage[] = [
  {
    id: "orbit-welcome",
    role: "orbit",
    content: orbitWelcomeMessage,
  },
];

function buildOrbitReply(input: string) {
  const normalized = input.toLowerCase();

  if (normalized.includes("contact") || normalized.includes("email")) {
    return "Use the Contact page for official channels. Email is the main path for direct collaboration and formal communication.";
  }

  if (normalized.includes("team") || normalized.includes("executive")) {
    return "The Team page shows the executive panel first and keeps the researcher directory ready for future expansion.";
  }

  if (normalized.includes("research") || normalized.includes("ml") || normalized.includes("dl")) {
    return "CollabCircle focuses on machine learning and deep learning work with publication-ready structure, disciplined experimentation, and clear documentation.";
  }

  if (normalized.includes("collaborate") || normalized.includes("join")) {
    return "The best first message is short and specific: introduce your background, mention your research area, and explain what you can contribute consistently.";
  }

  if (normalized.includes("publication") || normalized.includes("paper")) {
    return "The Publications page explains the emphasis on original contribution, reproducible methods, and reviewer-ready presentation.";
  }

  return "I can help with CollabCircle's team, research areas, publications, and contact channels. Try asking about collaboration, the executive panel, or how to reach the organization.";
}

export function OrbitAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<OrbitMessage[]>(initialMessages);

  function appendConversation(prompt: string) {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: `${Date.now()}-user`,
        role: "user",
        content: trimmedPrompt,
      },
      {
        id: `${Date.now()}-orbit`,
        role: "orbit",
        content: buildOrbitReply(trimmedPrompt),
      },
    ]);
    setDraft("");
    setIsOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    appendConversation(draft);
  }

  return (
    <div className={styles.wrap}>
      <button
        aria-controls="orbit-panel"
        aria-expanded={isOpen}
        className={isOpen ? styles.fabOpen : styles.fab}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <CollabCircleLogo className={styles.fabMark} height={44} width={44} />
        <span className={styles.fabText}>
          <strong>Orbit</strong>
          <small>Ask about CollabCircle</small>
        </span>
      </button>

      <section
        className={isOpen ? styles.panelOpen : styles.panel}
        id="orbit-panel"
        aria-label="Orbit assistant"
      >
        <div className={styles.panelHeader}>
          <div>
            <p>Orbit</p>
            <h2>CollabCircle guide</h2>
          </div>
          <button
            aria-label="Close Orbit"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Close
          </button>
        </div>

        <div className={styles.messageList}>
          {messages.map((message) => (
            <article
              className={message.role === "orbit" ? styles.orbitBubble : styles.userBubble}
              key={message.id}
            >
              {message.content}
            </article>
          ))}
        </div>

        <div className={styles.promptGroup}>
          {orbitQuickPrompts.map((prompt) => (
            <button
              className={styles.promptButton}
              key={prompt}
              onClick={() => appendConversation(prompt)}
              type="button"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form className={styles.composer} onSubmit={handleSubmit}>
          <label className={styles.srOnly} htmlFor="orbit-input">
            Ask Orbit
          </label>
          <input
            id="orbit-input"
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask Orbit about team, research, or contact..."
            value={draft}
          />
          <button type="submit">Send</button>
        </form>

        <div className={styles.panelFooter}>
          <span>Static assistant for now.</span>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Go to Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
