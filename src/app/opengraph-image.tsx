import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Roam China — mapped for travelers";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FBFAF6",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 9999,
            background: "#D85A30",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: 56,
            fontStyle: "italic",
            marginBottom: 32,
          }}
        >
          R
        </div>
        <div
          style={{
            fontSize: 96,
            fontStyle: "italic",
            color: "#2C2C2A",
            lineHeight: 1,
          }}
        >
          Roam China
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#5F5E5A",
            marginTop: 20,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Mapped for travelers
        </div>
      </div>
    ),
    size
  );
}
