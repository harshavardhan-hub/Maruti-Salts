import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Maruti Salts";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #111111, #0a0a0a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          borderTop: "8px solid #c9a96e", // accent color
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
          {/* We will just use elegant text instead of fetching an external image, which is faster and guaranteed to work on Vercel */}
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "bold",
              margin: 0,
              padding: 0,
              letterSpacing: "-2px",
            }}
          >
            Maruti Salts
          </h1>
        </div>
        <p
          style={{
            fontSize: "40px",
            color: "#c9a96e",
            margin: 0,
            padding: 0,
            fontStyle: "italic",
          }}
        >
          Born from Earth. Refined by Time.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
