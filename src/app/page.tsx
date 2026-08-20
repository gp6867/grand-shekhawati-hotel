"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rooms = [
    {
      name: "Standard Room",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
      features: ["🛏️ Double Bed", "❄️ AC", "📺 LED TV", "🚿 Attached Bathroom"]
    },
    {
      name: "Deluxe Room",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
      features: ["🛏️ Queen Bed", "❄️ AC", "📺 Smart TV", "❄️ Mini Fridge"]
    },
    {
      name: "Suite Room",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
      features: ["👑 King Bed", "❄️ Premium AC", "📺 55\" TV", "🛁 Bathtub"]
    }
  ];

  const amenities = [
    { icon: "📶", title: "Free WiFi", desc: "High-speed internet" },
    { icon: "🚗", title: "Parking", desc: "Free secure parking" },
    { icon: "🍽️", title: "Restaurant", desc: "Multi-cuisine dining" },
    { icon: "❄️", title: "AC Rooms", desc: "All weather comfort" },
    { icon: "🕐", title: "24x7 Service", desc: "Round the clock staff" },
    { icon: "🔒", title: "Safe & Secure", desc: "CCTV surveillance" }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#FFF8F0" }}>
      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s ease", background: isScrolled ? "rgba(44, 24, 16, 0.95)" : "transparent", padding: isScrolled ? "12px 0" : "24px 0", boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.3)" : "none" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #D4AF37, #B8860B)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>👑</div>
            <div>
              <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white", fontFamily: "'Playfair Display', serif" }}>Grand Shekhawati</h1>
              <p style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "2px" }}>HOTEL & RESORT</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-menu">
            {["Home", "Rooms", "Amenities", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "14px", fontWeight: "500", transition: "color 0.3s" }}>{item}</a>
            ))}
          </div>

          <button style={{ display: "flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#2C1810", padding: "12px 20px", borderRadius: "50px", fontWeight: "bold", fontSize: "14px", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 5px 15px rgba(212,175,55,0.4)" }}>
            📞 Book Now
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </motion.div>
        
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.7))" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "10px 20px", borderRadius: "50px", marginBottom: "24px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span>⭐</span>
            <span style={{ color: "white", fontSize: "14px" }}>Premium Heritage Hotel in Churu</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: "bold", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif", lineHeight: "1.1" }}>
            Welcome to <span className="gold-text">Grand Shekhawati</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ fontSize: "clamp(16px, 3vw, 24px)", color: "rgba(255,255,255,0.8)", marginBottom: "32px", maxWidth: "600px" }}>
            Experience Royal Rajasthan Hospitality with Modern Comfort
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#2C1810", padding: "16px 32px", borderRadius: "50px", fontWeight: "bold", fontSize: "18px", border: "none", cursor: "pointer", boxShadow: "0 10px 30px rgba(212,175,55,0.5)" }}>
              📞 Book Your Stay
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ display: "flex", alignItems: "center", gap: "8px", border: "2px solid rgba(255,255,255,0.5)", color: "white", padding: "16px 32px", borderRadius: "50px", fontWeight: "bold", fontSize: "18px", background: "transparent", cursor: "pointer", backdropFilter: "blur(5px)" }}>
              📍 View Location
            </motion.button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)" }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: "24px", height: "40px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "20px", display: "flex", justifyContent: "center", paddingTop: "8px" }}>
            <div style={{ width: "4px", height: "8px", background: "white", borderRadius: "2px" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section style={{ background: "#2C1810", padding: "60px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
          <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", position: "relative", zIndex: 1 }}>
          {[
            { number: "25+", label: "Premium Rooms" },
            { number: "10,000+", label: "Happy Guests" },
            { number: "4.5/5", label: "Guest Rating" },
            { number: "15+", label: "Years of Service" }
          ].map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
              style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "36px", fontWeight: "bold", color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}>{stat.number}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginTop: "8px" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section id="rooms" style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#D4AF37", fontWeight: "600", letterSpacing: "3px", marginBottom: "8px" }}>ACCOMMODATION</p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold", color: "#2C1810", fontFamily: "'Playfair Display', serif" }}>Our Premium Rooms</h2>
            <div style={{ width: "80px", height: "4px", background: "#D4AF37", margin: "16px auto 0" }} />
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {rooms.map((room, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }} style={{ background: "white", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", transition: "box-shadow 0.3s" }}>
                <div style={{ position: "relative", height: "250px", overflow: "hidden" }}>
                  <img src={room.image} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }} className="room-img" />
                  <div style={{ position: "absolute", top: "16px", right: "16px", background: "#D4AF37", color: "#2C1810", padding: "6px 16px", borderRadius: "50px", fontSize: "14px", fontWeight: "bold" }}>
                    {room.price}/night
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#2C1810", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>{room.name}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                    {room.features.map((feature, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#666", fontSize: "14px" }}>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button style={{ width: "100%", background: "#2C1810", color: "white", padding: "14px", borderRadius: "50px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "all 0.3s" }}>
                    Book This Room
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section id="amenities" style={{ padding: "80px 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#D4AF37", fontWeight: "600", letterSpacing: "3px", marginBottom: "8px" }}>FACILITIES</p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold", color: "#2C1810", fontFamily: "'Playfair Display', serif" }}>World-Class Amenities</h2>
            <div style={{ width: "80px", height: "4px", background: "#D4AF37", margin: "16px auto 0" }} />
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "24px" }}>
            {amenities.map((amenity, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, background: "#2C1810" }} style={{ background: "#FFF8F0", padding: "32px 24px", borderRadius: "16px", textAlign: "center", cursor: "pointer", transition: "all 0.3s" }}>
                <div style={{ width: "64px", height: "64px", background: "rgba(212,175,55,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "32px", transition: "all 0.3s" }}>
                  {amenity.icon}
                </div>
                <h3 style={{ fontWeight: "bold", color: "#2C1810", marginBottom: "4px", transition: "all 0.3s" }}>{amenity.title}</h3>
                <p style={{ fontSize: "12px", color: "#999", transition: "all 0.3s" }}>{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1920" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(44, 24, 16, 0.85)" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
          <div style={{ fontSize: "48px", marginBottom: "24px" }}>✨</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold", color: "white", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>Ready for a Royal Stay?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
            Experience the perfect blend of heritage and modern luxury at Grand Shekhawati Hotel
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ background: "#D4AF37", color: "#2C1810", padding: "16px 32px", borderRadius: "50px", fontWeight: "bold", fontSize: "18px", border: "none", cursor: "pointer", boxShadow: "0 10px 30px rgba(212,175,55,0.5)" }}>
              📞 Call Now
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white", padding: "16px 32px", borderRadius: "50px", fontWeight: "bold", fontSize: "18px", background: "transparent", cursor: "pointer" }}>
              📍 Get Directions
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2C1810", color: "white", padding: "60px 0 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", fontFamily: "'Playfair Display', serif" }}>Grand Shekhawati</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>Experience royal Rajasthan hospitality with modern amenities</p>
          </div>
          <div>
            <h4 style={{ color: "#D4AF37", marginBottom: "16px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
              <li><a href="#home" style={{ color: "inherit", textDecoration: "none" }}>Home</a></li>
              <li><a href="#rooms" style={{ color: "inherit", textDecoration: "none" }}>Rooms</a></li>
              <li><a href="#amenities" style={{ color: "inherit", textDecoration: "none" }}>Amenities</a></li>
              <li><a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#D4AF37", marginBottom: "16px" }}>Contact Us</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
              <li>📍 Churu, Rajasthan</li>
              <li>📞 +91-XXXXXXXXXX</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "40px", paddingTop: "20px", textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
          © 2024 Grand Shekhawati Hotel. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        .desktop-menu a:hover { color: #D4AF37 !important; }
        .room-img:hover { transform: scale(1.1); }
      `}</style>
    </main>
  );
}
