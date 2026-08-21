import React, { useState } from "react";
import SheetHeader from "../components/SheetHeader";
import TitleBlock from "../components/TitleBlock";
import "./Contact.css";

const CHANNELS = [
  {
    label: "Email",
    value: "rishimbhavsar@gmail.com",
    href: "mailto:rishimbhavsar@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 99879 25400",
    href: "tel:+919987925400",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rishi-bhavsar",
    href: "https://www.linkedin.com/in/rishi-bhavsar-a5b2413a6/",
  },
  {
    label: "GitHub",
    value: "github.com/Gliched-Userxx",
    href: "https://github.com/Gliched-Userxx",
  },
];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Add a short message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Wire this up to your backend or a service like Formspree / Resend.
      setStatus("sent");
      setForm(initialForm);
    }
  }

  return (
    <section aria-labelledby="contact-title">
      <SheetHeader num="04" eyebrow="Sheet 04 — Details" title="Contact" />

      <div className="contact-grid">
        <div>
          <p className="contact-intro">
            Open to internships and entry-level opportunities, and always
            happy to talk shop. The fastest way to reach me is email —
            I'll usually reply within a day or two.
          </p>

          <ul className="contact-channels">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <span className="contact-channel-label">
                  {channel.label}
                </span>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {channel.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Send a message"
        >
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="contact-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="contact-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="contact-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button className="contact-submit" type="submit">
            Send message
          </button>

          <p role="status" className="contact-status">
            {status === "sent"
              ? "Thanks — your message is queued. I'll reply by email shortly."
              : ""}
          </p>
        </form>
      </div>

      <TitleBlock sheetNum="04" sheetTitle="Contact" />
    </section>
  );
}
