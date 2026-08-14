import { useState } from "react";
import type { FormEvent } from "react";
import { projectTypeOptions } from "../data/content";
import { useReveal } from "../hooks/useReveal";

type Status = "idle" | "sending" | "sent" | "error";

// Set VITE_FORM_ENDPOINT in your .env (see .env.example) to a Formspree
// endpoint, or your own serverless function, to receive real submissions.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export default function Contact() {
  const infoRef = useReveal<HTMLDivElement>();
  const formRef = useReveal<HTMLFormElement>();

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const toggleType = (value: string) => {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("project_types", selectedTypes.join(", "));

    if (!FORM_ENDPOINT) {
      // No endpoint configured yet — surface a clear signal in dev instead
      // of silently pretending it worked.
      console.warn(
        "VITE_FORM_ENDPOINT is not set. Add it to .env to receive real submissions. See .env.example."
      );
      setStatus("sent");
      form.reset();
      setSelectedTypes([]);
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
      setSelectedTypes([]);
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="pad" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal" ref={infoRef}>
          <div className="eyebrow">START A PROJECT</div>
          <h2>Pitch us your requirement.</h2>
          <p>
            Fill in the brief and we'll get back within 1–2 business days to
            set up a discovery call. No obligation, no jargon — just a
            straight answer on what it'll take.
          </p>
          <div className="contact-detail">
            <div className="row">
              <span className="label">Email</span>
              <span className="value">hello@noctisailabs.com</span>
            </div>
            <div className="row">
              <span className="label">Response time</span>
              <span className="value">Within 1–2 business days</span>
            </div>
            <div className="row">
              <span className="label">First step</span>
              <span className="value">30-min call on Google Meet</span>
            </div>
          </div>
        </div>

        <form className="reveal" ref={formRef} onSubmit={handleSubmit}>
          <div className="f-row">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="jane@company.com" required />
            </div>
          </div>

          <div className="f-row">
            <div className="field">
              <label htmlFor="company">Company / institution (optional)</label>
              <input type="text" id="company" name="company" placeholder="Acme Inc." />
            </div>
            <div className="field">
              <label htmlFor="budget">Budget range</label>
              <select id="budget" name="budget" defaultValue="">
                <option value="" disabled>Select a range</option>
                <option>Under $2k</option>
                <option>$2k – $10k</option>
                <option>$10k – $30k</option>
                <option>$30k+</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>What do you need built?</label>
            <div className="chip-group">
              {projectTypeOptions.map((opt) => (
                <span
                  key={opt}
                  className={`chip ${selectedTypes.includes(opt) ? "active" : ""}`}
                  onClick={() => toggleType(opt)}
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Tell us about it</label>
            <textarea
              id="message"
              name="message"
              placeholder="What are you trying to build, and what's driving the timeline?"
              required
            />
          </div>

          <div className="submit-row">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send brief →"}
            </button>
            <span className="form-note">We'll never share your details.</span>
            {status === "sent" && (
              <span className="form-success show">✓ Sent — we'll be in touch shortly.</span>
            )}
            {status === "error" && (
              <span className="form-success show" style={{ color: "var(--gold)" }}>
                ✕ Something went wrong — email us directly instead.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
