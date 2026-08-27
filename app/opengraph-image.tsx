import { ImageResponse } from "next/og";

export const alt = "Turbo Dev — AI, automation and product development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        padding: "68px 74px",
        background: "#ffffff",
        color: "#111318",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.5, backgroundImage: "linear-gradient(#e7eefb 1px, transparent 1px), linear-gradient(90deg, #e7eefb 1px, transparent 1px)", backgroundSize: "54px 54px" }} />
      <div style={{ position: "absolute", right: 70, top: 82, width: 390, height: 390, display: "flex", borderRadius: 18, background: "#0b101b", boxShadow: "0 28px 65px rgba(15, 37, 75, .2)" }}>
        <div style={{ position: "absolute", left: 48, top: 164, width: 92, height: 62, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #33445e", borderRadius: 8, color: "#9eabc0", fontSize: 18 }}>CRM</div>
        <div style={{ position: "absolute", left: 150, top: 70, width: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #1769ff", borderRadius: 8, background: "#14213a", color: "#ffffff", fontSize: 18 }}>AI</div>
        <div style={{ position: "absolute", right: 42, bottom: 78, width: 110, height: 68, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #33445e", borderRadius: 8, color: "#9eabc0", fontSize: 17 }}>Product</div>
        <div style={{ position: "absolute", left: 132, top: 137, width: 70, height: 2, display: "flex", background: "#3a4c67", transform: "rotate(-38deg)" }} />
        <div style={{ position: "absolute", left: 235, top: 196, width: 88, height: 2, display: "flex", background: "#3a4c67", transform: "rotate(42deg)" }} />
        <div style={{ position: "absolute", right: 28, top: 25, display: "flex", alignItems: "center", gap: 8, color: "#65e4a7", fontSize: 14, letterSpacing: 2 }}><span style={{ width: 7, height: 7, display: "flex", borderRadius: 999, background: "#65e4a7" }} />LIVE</div>
      </div>
      <div style={{ position: "relative", width: 650, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 800, letterSpacing: -2 }}>
          <span>Turbo</span><span style={{ color: "#1769ff" }}>dev</span>
        </div>
        <div style={{ display: "flex", marginTop: 76, color: "#1769ff", fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>AI · AUTOMATION · PRODUCT ENGINEERING</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 65, lineHeight: 1.02, fontWeight: 800, letterSpacing: -4 }}>
          <span>Systems that move</span>
          <span style={{ display: "flex" }}><span>business</span><span style={{ color: "#1769ff", marginLeft: 12 }}>forward.</span></span>
        </div>
        <div style={{ display: "flex", marginTop: 30, color: "#626978", fontSize: 22, lineHeight: 1.45 }}>CRM ecosystems, intelligent automation, web platforms, mobile apps and SaaS.</div>
      </div>
    </div>,
    size
  );
}
