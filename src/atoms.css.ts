import { createTheme, style } from "@vanilla-extract/css";
import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

const colors = {
  red100: "#ff0000",
  black100: "#000000",
};

const styles = createAtomicStyles({
  conditions: {
    default: {},
    hover: {
      selector: "&:hover",
    },
  },
  defaultCondition: "default",
  properties: {
    color: colors,
    background: colors,
  },
});

export const atoms = createAtomsFn(styles);
