import { useState } from "react";
import { Box } from "@mantine/core";
import CursorLabel from "./CursorLabel";

/**
 * Full-width interactive surface that:
 * - tracks hover + cursor position (desktop)
 * - shows a cursor-following label
 * - behaves like an accessible link (click + Enter/Space)
 *
 * Mobile: disable hover/follower + disable click-to-navigate by passing isMobile=true.
 */
export default function HoverLinkSection({
  children,
  onNavigate,
  isMobile,
  followerLabel = "CONTACT US",
  bg = 
  "radial-gradient(800px 500px at 20% 25%, rgba(0, 102, 255, 0.12), transparent 60%)," +
  "radial-gradient(600px 400px at 85% 40%, rgba(51, 133, 255, 0.10), transparent 55%)," +
  "linear-gradient(180deg, #f5f9ff 0%, #e5f0ff 60%, #d9eaff 100%)",
  minHeight = "min(520px, 85vh)",
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleNavigate = () => {
    if (isMobile) return;
    onNavigate?.();
  };

  return (
    <Box
      component="section"
      bg={bg}
      mih={minHeight}
      style={{
        display: "grid",
        placeItems: "center",
        position: "relative",
        cursor: isMobile ? "default" : "pointer",
      }}
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={(e) => {
        if (isMobile) return;
        setPos({ x: e.clientX, y: e.clientY });
      }}
      onClick={handleNavigate}
      role={isMobile ? undefined : "link"}
      tabIndex={isMobile ? undefined : 0}
      aria-label={isMobile ? undefined : "Go to Contact Us"}
      onKeyDown={(e) => {
        if (isMobile) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onNavigate?.();
        }
      }}
      sx={{
        "&:focus-visible": {
          outline: "3px solid rgba(11, 29, 57, 0.35)",
          outlineOffset: 6,
        },
      }}
    >
      {!isMobile && isHovering && (
        <CursorLabel x={pos.x} y={pos.y} label={followerLabel} />
      )}

      {children}
    </Box>
  );
}
