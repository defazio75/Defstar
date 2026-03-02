// components/PropertyCard.js
import Link from "next/link";

export default function PropertyCard({ property }) {
  const { id, name, location, nightsMin, priceFrom, guests, image } = property;

  return (
    <article className="card" style={{borderRadius:12, overflow:"hidden"}}>
      <div style={{height:160, overflow:"hidden"}}>
        <img src={image} alt={name} style={{width:"100%", height:"100%", objectFit:"cover"}} />
      </div>

      <div style={{padding:14}}>
        <h3 style={{margin:0}}>{name}</h3>
        <div className="muted" style={{fontSize:13, marginTop:6}}>{location}</div>

        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:12}}>
          <div className="muted" style={{fontSize:13}}>
            {guests} guest{guests > 1 ? "s" : ""} • {nightsMin}+ nights
          </div>

          <div style={{textAlign:"right"}}>
            <div style={{fontWeight:700}}>${priceFrom}</div>
            <div className="muted" style={{fontSize:12}}>from / night</div>
          </div>
        </div>

        <div style={{display:"flex", gap:8, marginTop:12}}>
          {/* Call link */}
          <a className="btn" href="tel:+15555555555">Call to Book</a>

          {/* Mail link prefilled with property name */}
          <a
            className="btn btn-primary"
            href={`mailto:info@defstarmanagement.com?subject=Booking%20Inquiry%20-%20${encodeURIComponent(name)}`}
          >
            Email Inquiry
          </a>
        </div>
      </div>
    </article>
  );
}
