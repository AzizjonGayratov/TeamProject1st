export default function Muradov() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }}>

      <div style={{ background: "#F7F3E3", padding: "60px", display: "flex", gap: "40px", alignItems: "center" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>

          <div style={{ textAlign: "center", width: "140px" }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Amy" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid #2D5A4B" }} />
            <p style={{ fontWeight: "bold", fontSize: "13px", color: "#1a3a2a", margin: "8px 0 4px" }}>Amy · 27 yrs</p>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5" }}>Concerned about her struggle with anxiety & depression.</p>
          </div>

          <div style={{ textAlign: "center", width: "140px" }}>
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Leah" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid #C07A3A" }} />
            <p style={{ fontWeight: "bold", fontSize: "13px", color: "#1a3a2a", margin: "8px 0 4px" }}>Leah · 35 yrs</p>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5" }}>Concerned about managing relationships & self esteem.</p>
          </div>

          <div style={{ textAlign: "center", width: "140px" }}>
            <img src="https://randomuser.me/api/portraits/women/29.jpg" alt="Rachael" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid #7B9BB5" }} />
            <p style={{ fontWeight: "bold", fontSize: "13px", color: "#1a3a2a", margin: "8px 0 4px" }}>Rachael · 32 yrs</p>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5" }}>Concerned about being a new mom with postpartum depression.</p>
          </div>

          <div style={{ textAlign: "center", width: "140px" }}>
            <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="Nadia" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "3px solid #2D3A6B" }} />
            <p style={{ fontWeight: "bold", fontSize: "13px", color: "#1a3a2a", margin: "8px 0 4px" }}>Nadia · 29 yrs</p>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5" }}>Concerned about isolation from a chronic condition.</p>
          </div>

        </div>

        <div style={{ fontSize: "24px", color: "#999" }}>∞</div>

        <div style={{ maxWidth: "450px" }}>
          <h2 style={{ fontSize: "36px", color: "#1a3a2a", fontWeight: "400", lineHeight: "1.3", margin: "0 0 20px" }}>
            Your mind is unique. Your mental health care should be too.
          </h2>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", margin: "0 0 30px" }}>
            Superbloom provides one-on-one therapy sessions geared toward your specific needs,
            letting you select your package based on number of sessions and budget. We are
            community-oriented and offer mind-body resources with articles, forums and workshops
            to support your journey of finding your frequency. Whether you suffer from anxiety,
            depression, a chronic condition or are seeking to elevate your emotional wellness,
            you'll find a way to shine with Superbloom.
          </p>
          <button style={{ background: "#1a3a2a", color: "white", border: "none", padding: "14px 28px", fontSize: "12px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px" }}>
            JOIN THE CONVERSATION
          </button>
        </div>

      </div>

      <div style={{ background: "white", padding: "80px 60px", textAlign: "center" }}>
        <p style={{ fontSize: "30px", color: "#1a3a2a", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto 50px" }}>
          "We believe in the power of mind-body solutions for emotional wellbeing.
          Our personalized, clinically-backed approach is built to empower our members."
        </p>
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Erin Berman" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover" }} />
        <p style={{ fontSize: "13px", fontWeight: "bold", color: "#333", margin: "10px 0 4px" }}>Erin Berman</p>
        <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>Founder</p>
      </div>

    </div>
  );
}