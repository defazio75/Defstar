"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";

export default function RevenueEstimatePage() {
  const [status, setStatus] = useState({ type: "", msg: "" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "FL",
    zip: "",
    bedrooms: "",
    bathrooms: "",
    sleeps: "",
    notes: "",
  });

  const emailTo = "info@defstarmanagement.com"; // change if needed

  const mailtoHref = useMemo(() => {
    const subject = `FREE Revenue Estimate Request — ${form.address || "New Property"}`;
    const lines = [
      "Free Revenue Estimate Request",
      "--------------------------------",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `Property Address: ${form.address}`,
      `City/State/ZIP: ${form.city}, ${form.state} ${form.zip}`,
      `Beds/Baths: ${form.bedrooms} / ${form.bathrooms}`,
      `Sleeps: ${form.sleeps}`,
      "",
      `Notes: ${form.notes}`,
      "",
      "Sent from defstarmanagement.com",
    ];

    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [form]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.address) {
      setStatus({
        type: "error",
        msg: "Please fill in Name, Email, Phone, and Property Address.",
      });
      return;
    }

    setStatus({
      type: "success",
      msg: "Opening your email app with the pre-filled request…",
    });

    window.location.href = mailtoHref;
  }

  return (
    <div className="grid" style={{ gap: 22 }}>
      <Navbar />

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Free Revenue Estimate</h2>
        <p className="muted">
          Send us your property details and we’ll estimate revenue, pricing strategy, and what we’d
          do to optimize performance in Tampa Bay / St. Pete.
        </p>

        {status.msg ? (
          <div
            className="card"
            style={{
              marginTop: 12,
              border: "1px solid rgba(15,23,32,0.10)",
            }}
          >
            <strong>{status.type === "error" ? "Fix needed:" : "Ready:"}</strong>
            <div className="muted small">{status.msg}</div>
          </div>
        ) : null}

        <form onSubmit={onSubmit} style={{ marginTop: 14 }}>
          <div className="grid grid-3" style={{ gap: 12 }}>
            <Field label="Name *">
              <input name="name" value={form.name} onChange={onChange} placeholder="Dave DeFazio" />
            </Field>

            <Field label="Email *">
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                type="email"
              />
            </Field>

            <Field label="Phone *">
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="(555) 555-5555"
              />
            </Field>

            <Field label="Property Address *">
              <input
                name="address"
                value={form.address}
                onChange={onChange}
                placeholder="123 Beach Ave"
              />
            </Field>

            <Field label="City">
              <input name="city" value={form.city} onChange={onChange} placeholder="St. Pete" />
            </Field>

            <Field label="State">
              <input name="state" value={form.state} onChange={onChange} placeholder="FL" />
            </Field>

            <Field label="ZIP">
              <input name="zip" value={form.zip} onChange={onChange} placeholder="33706" />
            </Field>

            <Field label="Bedrooms">
              <input
                name="bedrooms"
                value={form.bedrooms}
                onChange={onChange}
                placeholder="2"
              />
            </Field>

            <Field label="Bathrooms">
              <input
                name="bathrooms"
                value={form.bathrooms}
                onChange={onChange}
                placeholder="2"
              />
            </Field>

            <Field label="Sleeps">
              <input name="sleeps" value={form.sleeps} onChange={onChange} placeholder="6" />
            </Field>
          </div>

          <div style={{ marginTop: 12 }}>
            <Field label="Notes (optional)">
              <textarea
                name="notes"
                value={form.notes}
                onChange={onChange}
                placeholder="Anything we should know? (HOA restrictions, parking, views, pool, etc.)"
                rows={5}
              />
            </Field>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <button className="btn btn-primary" type="submit">
              Send Request
            </button>

            <a className="btn btn-ghost" href={mailtoHref}>
              Email Instead
            </a>

            <a className="btn" href="tel:+15555555555" style={{ border: "1px solid rgba(15,23,32,0.10)" }}>
              Call
            </a>
          </div>

          <div className="muted small" style={{ marginTop: 10 }}>
            This form opens your email app with a pre-filled message (fast + reliable while we keep
            the site simple). Later we can swap this for an on-site submit + email delivery.
          </div>
        </form>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <div className="muted small">
        <strong>{label}</strong>
      </div>
      {children}
    </label>
  );
}
