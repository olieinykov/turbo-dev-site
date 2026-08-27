import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b101b",
        color: "#ffffff",
        fontSize: 218,
        fontWeight: 800,
        letterSpacing: "-0.1em"
      }}
    >
      <span>T</span><span style={{ color: "#1769ff" }}>D</span>
    </div>,
    size
  );
}
