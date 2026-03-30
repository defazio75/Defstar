"use client";

import { useMemo, useState } from "react";

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

  const emailTo = "info@defstarmanagement.com";

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

    return `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [form]);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      setStatus({
        type: "error",
        msg: "Please fill in Name, Email, Phone, and Property Address before sending.",
      });
      return;
    }

    setStatus({
      type: "success",
      msg: "Opening your email app with the pre-filled estimate request.",
    });

    window.location.href = mailtoHref;
  }

  return (
    <div className="page-stack">
      <section className="grid grid-2">
        <div className="card card-dark">
          <div
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#eef7fb",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            Free estimate
          </div>

          <h2 className="section-title" style={{ marginTop: 18 }}>
            Get a clean, owner-friendly revenue estimate for your property.
          </h2>

          <p className="lead" style={{ marginTop: 16 }}>
            Send us the basics and we’ll review your home, pricing potential, and where it could fit
            in the market.
          </p>

          <div className="highlight-list" style={{ marginTop: 24 }}>
            <div className="highlight-item">
              <div className="check-badge">✓</div>
              <div>
                <strong>Revenue potential</strong>
                <div className="small muted">A realistic estimate, not inflated fluff.</div>
              </div>
            </div>

            <div className="highlight-item">
              <div className="check-badge">✓</div>
              <div>
                <strong>Positioning ideas</strong>
                <div className="small muted">
                  How the property could be presented more effectively.
                </div>
              </div>
            </div>

            <div className="highlight-item">
              <div className="check-badge">✓</div>
              <div>
                <strong>Next-step recommendations</strong>
                <div className="small muted">Useful whether you hire DefStar or not.</div>
              </div>
            </div>
          </div>
        </div>

        <section className="card">
          <h3 style={{ marginTop: 0, fontSize: "1.75rem" }}>Property details</h3>

          <p className="section-copy" style={{ marginTop: 10 }}>
            This form opens your email app with a pre-filled request. It keeps the site simple while
            still making owner outreach easy.
          </p>

          {status.msg ? (
            <div className={`notice ${status.type}`} style={{ marginTop: 18 }}>
              <strong>{status.type === "error" ? "Fix needed" : "Ready to send"}</strong>
              <div className="small muted">{status.msg}</div>
            </div>
          ) : null}

          <form onSubmit={onSubmit} style={{ marginTop: 18 }}>
            <div className="form-grid-3">
              <Field label="Name *">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Dave DeFazio"
                />
              </Field>

              <Field label="Email *">
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  placeholder="you@email.com"
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
            </div>

            <div className="form-grid-3" style={{ marginTop: 14 }}>
              <Field label="Property Address *">
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder="123 Beach Ave"
                />
              </Field>

              <Field label="City">
                <input
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  placeholder="St. Petersburg"
                />
              </Field>

              <Field label="State">
                <input
                  name="state"
                  value={form.state}
                  onChange={onChange}
                  placeholder="FL"
                />
              </Field>
            </div>

            <div className="form-grid-3" style={{ marginTop: 14 }}>
              <Field label="ZIP">
                <input
                  name="zip"
                  value={form.zip}
                  onChange={onChange}
                  placeholder="33706"
                />
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
            </div>

            <div className="form-grid" style={{ marginTop: 14 }}>
              <Field label="Sleeps">
                <input
                  name="sleeps"
                  value={form.sleeps}
                  onChange={onChange}
                  placeholder="6"
                />
              </Field>

              <div className="field" style={{ alignSelf: "end" }}>
                <span>Prefer email?</span>
                <a className="btn btn-secondary" href={mailtoHref}>
                  Open email app
                </a>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <Field label="Notes (optional)">
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={onChange}
                  placeholder="HOA rules, parking, pool, water views, recent upgrades, goals for the property, or anything else helpful."
                />
              </Field>
            </div>

            <div className="btn-row" style={{ marginTop: 18 }}>
              <button className="btn btn-primary" type="submit">
                Send Request
              </button>
              <a className="btn btn-ghost" href="tel:+15555555555">
                Call Instead
              </a>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}
