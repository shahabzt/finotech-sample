import { styled } from "@mui/system";

const ContentsLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  background: "#FEFEFE",
  borderRadius: "1rem",
  border: "1px solid #FEFEFE",
  width: "64vw",
  position: "absolute",
  top: "64px",
  right: "7.5vw",
  bottom: 32,
  overflow: "auto",
  padding: "32px",
  boxSizing: "border-box",
  "&::-webkit-scrollbar": {
    width: "0.4em",
    position: "fixed",
    left: 0,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "1px solid white",
    borderRadius: "8px",
  },
});

export default ContentsLayout;
