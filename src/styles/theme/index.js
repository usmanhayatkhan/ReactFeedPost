import { createMuiTheme } from "@material-ui/core/styles";
import { colorPalette } from "./colors";

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      centerRipple: true
    },
    MuiFormControl: {
      fullWidth: true,
      margin: "normal"
    }
  },
  palette: {
    primary: { main: colorPalette.primaryColor },
    secondary: { A400: colorPalette.secondaryColor }
  },
  typography: {
    useNextVariants: true,
    h4: {
      fontSize: "24px",
      fontWeight: "bold",
      color: colorPalette.secondaryColor
    },
    h5: {
      fontSize: "18px",
      fontWeight: "normal",
      color: colorPalette.secondaryColor
    },
    h6: {
      fontSize: "22px",
      fontWeight: "normal",
      color: colorPalette.secondaryColor
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "normal",
      color: colorPalette.secondaryColor
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "normal",
      color: colorPalette.secondaryColor
    }
  },
  overrides: {
    MuiToolbar: {
      root: {
        minHeight: 100
      }
    },
    MuiInputLabel: {
      root: {
        color: "#000"
      }
    },

    MuiFilledInput: {
      underline: {
        "&:after": {
          borderBottom: `2px solid ${colorPalette.primaryColor}`
        }
      }
    },
    MuiButton: {
      root: {
        textTransform: "initial",
        border: `1px solid ${colorPalette.primaryColor}`,
        padding: "6px 31px",
        minHeight: "initial"
      },
      contained: {
        color: colorPalette.primaryColor,
        backgroundColor: "transparent",
        fontSize: 16,
        boxShadow: "none"
      },
      text: {
        border: "none",
        padding: "6px 8px",
        fontSize: 14,
        minWidth: 50
      }
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0
      }
    }
  }
});
