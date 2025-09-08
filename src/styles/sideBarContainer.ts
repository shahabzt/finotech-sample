import { styled } from "@mui/system";

const SideBarContainer = styled("div")({
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "16px",
  background: "#FEFEFE",
  display: "flex",
  flexDirection: "column",
  width: "20vw",
  position: "fixed",
  top: "64px",
  left: "7.5vw",
  bottom: "32px",
  boxSizing: "border-box",
  padding: "16px",
});

export default SideBarContainer;
