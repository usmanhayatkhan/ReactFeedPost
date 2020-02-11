import { colorPalette } from "./theme/colors";

export const customAppBarStyle = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  appBar: {
    backgroundColor: colorPalette.primaryColor
  },
  toolbar: {
    paddingRight: 24
  },
  title: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  appBarSpacer: theme.mixins.toolbar
});
