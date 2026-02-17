import { Box, Portal } from "@mantine/core";

export default function CursorLabel({
  x,
  y,
  label = "CONTACT US",
  offset = { x: 12, y: 12 },
}) {
  return (
    <Portal>
      <Box
        style={{
          position: "fixed",
          left: x + offset.x,
          top: y + offset.y,
          pointerEvents: "none",
          zIndex: 9999,
          padding: "10px 12px",
          background: "#0B1D39",
          color: "#EAF2FF",
          fontWeight: 700,
          letterSpacing: "0.08em",
          fontSize: 12,
          fontFamily: "Outfit",
          textTransform: "uppercase",
          boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Box>
    </Portal>
  );
}
