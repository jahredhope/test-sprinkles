import { createTheme, style } from "@vanilla-extract/css";
import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

const colors = {
  red100: "#ff0000",
  black100: "#000000",
};

const badStyles = createAtomicStyles({
  properties: {
    // Comment out to create invalid CSS
    gridAutoColumns: ["minmax(min-content, max-content)"],
  },
});

/**
 * main.css - WITH above minmax property
atoms_gridAutoColumns_minmax(min-content, max-content)__s09okq0 {
  grid-auto-columns: minmax(min-content, max-content);
}
.atoms_color_red100_default__s09okq1 {
  color: #ff0000;
}
..atoms_color_red100_hover__s09okq2:hover {
  color: #ff0000;
}

...
 */

/**
 * main.css - WITHOUT above minmax property
.atoms_color_red100_default__s09okq0 {
  color: #ff0000;
}
.atoms_color_red100_hover__s09okq1:hover {
  color: #ff0000;
}

...
 */

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

export const atoms = createAtomsFn(styles, badStyles);
