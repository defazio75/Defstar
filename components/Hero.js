// components/Hero.js
export default function Hero() {
  return (
    <section className="hero" style={{display:"flex", gap:20, alignItems:"center"}}>
      <div style={{flex:1}}>
        <h1 style={{margin:0}}>Local. Reliable. Revenue-driven.</h1>
        <p className="muted" style={{marginTop:8, marginBottom:14}}>
          DefStar Management helps owners in Tampa Bay maximize rental revenue with hands-on management,
          guest communication, and professional turnovers. Book direct, or request a free revenue estimate.
        </p>

        <div style={{display:"flex", gap:10}}>
          <a className="btn btn-primary" href="tel:+1-555-555-5555">Call / Text: (555) 555-5555</a>
          <a className="btn" href="/properties">View Properties</a>
        </div>
      </div>

      <div style={{width:320, borderRadius:12, overflow:"hidden", boxShadow:"0 10px 30px rgba(0,0,0,0.4)"}}>
        <img src="/images/hero.jpg" alt="Tampa waterfront" style={{width:"100%", height:"100%", display:"block", objectFit:"cover"}}/>
      </div>
    </section>
  );
}
