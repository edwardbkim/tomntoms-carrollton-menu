"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-[color:var(--color-espresso)]">
          Name
          <input
            required
            name="name"
            type="text"
            className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-4 text-base outline-none transition focus:border-[color:var(--color-red)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[color:var(--color-espresso)]">
          Email
          <input
            required
            name="email"
            type="email"
            className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-4 text-base outline-none transition focus:border-[color:var(--color-red)]"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[color:var(--color-espresso)]">
          Message
          <textarea
            required
            name="message"
            rows={6}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--color-red)]"
            placeholder="Tell us how we can help."
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-red)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_16px_40px_rgba(88,28,32,0.24)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-red-hover)]"
        >
          Send Message
        </button>
        {submitted ? (
          <p className="rounded-2xl bg-[color:var(--color-cream)] px-4 py-3 text-sm leading-7 text-[color:var(--color-muted)]">
            Thanks for reaching out. This placeholder form is ready to connect to your email or CRM provider.
          </p>
        ) : null}
      </div>
    </form>
  );
}
