import { Loader } from '@mantine/core';

export default function AppLoader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.85)",
        zIndex: 9999,
      }}    
    >
      <Loader color="blue" size="lg" type="bars" />
    </div>
  )
}