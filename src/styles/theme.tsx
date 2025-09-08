import { createTheme } from "@mui/material/styles";

import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",

    typography: {
      fontFamily: "inherit !important",
      h1: {
        fontSize: "48px",
        lineHeight: "70px",
      },
      h2: {
        fontSize: "32px",
        lineHeight: "50px",
      },

      h3: {
        fontSize: "24px",
        lineHeight: "36px",
      },

      h4: {},

      h5: {},

      subtitle1: {
        fontSize: "20px",
        lineHeight: "29px",
      },

      subtitle2: {
        fontSize: "18px",
        lineHeight: "29px",
      },

      body1: {
        fontSize: "16px",
        lineHeight: "26px",
      },

      body2: {
        fontSize: "14px",
        lineHeight: "21px",
      },

      caption: {
        fontSize: "12px",
        lineHeight: "18px",
      },

      overline: {
        fontSize: "10px",
        lineHeight: "16px",
      },
    },

    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            color: "black",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
          },
        },
      },

      MuiInput: {
        styleOverrides: {
          root: {},
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          root: {
            background: "transparent !important",
            "&.MuiInputLabel-shrink.Mui-focused": {
              color: "#007BFF !important",
              "&.Mui-error": {
                color: "red !important",
              },
            },
            color: "#B6B6B6 !important",
            "&.MuiFormLabel-filled.Mui-error": {
              color: "red !important",
            },
            "&.MuiFormLabel-filled.Mui-focused": {
              color: "#007BFF !important",
            },
          },
          colorSecondary: {
            color: "#fff !important",
            borderRadius: 8,
            "&.Mui-focused": {
              color: "white",
            },
            "&.Mui-error": {
              color: "red !important",
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            color: "#292D32 !important",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: "#B6B6B6",
            borderRadius: 8,
            height: "56px",
            "&.Mui-focused": {
              color: "#202428",
              background: "transparent",
            },
          },

          colorSecondary: {
            color: "#fff !important",
            borderRadius: 8,
            height: "56px",

            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#B6B6B6",
            },
            ":hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },

            "&.Mui-error": {
              ":hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "red",
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            height: "56px",
            borderRadius: "8px",
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "rgba(121, 175, 255, 0.2)",
              borderRadius: "8px",
            },
          },
        },
      },
      MuiStepLabel: {
        styleOverrides: {
          label: {
            color: "#808080",
            "&.Mui-completed": {
              color: "#007BFF",
            },
            "&.Mui-active": {
              color: "#808080",
            },
          },
        },
      },
    },
  },
  faIR
);

export default theme;
