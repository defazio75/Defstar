// components/CTA.js
export default function CTA() {
  return (
    <section className="card" style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:20}}>
      <div>
        <h2 style={{margin:0}}>Want a free revenue estimate?</h2>
        <p className="muted" style={{marginTop:6}}>
          We’ll run a no-cost analysis of your property and show realistic revenue, occupancy, and fees.
          Perfect if you’re thinking of switching managers or trying STR for the first time.
        </p>
      </div>

      <div style={{display:"flex", gap:10}}>
        <a className="btn btn-primary" href="mailto:info@defstarmanagement.com?subject=Free%20Revenue%20Estimate">Email Request</a>
        <a className="btn" href="/contact">Contact</a>
      </div>
    </section>
  );
}
