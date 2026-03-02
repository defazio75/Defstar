// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 48, paddingTop: 22}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, flexWrap:"wrap"}}>
        <div style={{display:"flex", gap:12, alignItems:"center"}}>
          <img src="/images/logo.png" alt="logo" style={{width:40, height:40}}/>
          <div>
            <div style={{fontWeight:700}}>DefStar Management</div>
            <div className="muted" style={{fontSize:12}}>Reliable local management — Tampa Bay</div>
          </div>
        </div>

        <div className="muted" style={{fontSize:13}}>
          © {year} DefStar Management • <Link href="/contact"><a className="muted">Contact</a></Link>
        </div>
      </div>
    </footer>
  );
}
