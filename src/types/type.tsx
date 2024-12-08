import common from "../../public/locales/ko/common.json";

export const LABELS = {
  RED: "RED",
  BLUE: "BLUE",
  ORANGE: "ORANGE",
  PURPLE: "PURPLE",
  GREEN: "GREEN",
  PINK: "PINK",
  WINE: "WINE",
  GRAY: "GRAY",
  BROWN: "BROWN",
  WHITE: "WHITE",
};

export type TLABEL = keyof typeof LABELS;

export type LABEL_INFO = {
  color: string;
  value: string;
};

export const LabelRecord: Record<TLABEL, LABEL_INFO> = {
  RED: {
    color: "#C20504",
    value: common.RED,
  },
  BLUE: {
    color: "#0324A0",
    value: common.BLUE,
  },
  ORANGE: {
    color: "#FF8800",
    value: common.ORANGE,
  },
  PURPLE: {
    color: "#780085",
    value: common.PURPLE,
  },
  GREEN: {
    color: "#374E3F",
    value: common.GREEN,
  },
  PINK: {
    color: "#D600AE",
    value: common.PINK,
  },
  WINE: {
    color: "#6A0024",
    value: common.WINE,
  },
  GRAY: {
    color: "#5B5B5B",
    value: common.GRAY,
  },
  BROWN: {
    color: "#432C22",
    value: common.BROWN,
  },
  WHITE: {
    color: "#E5E5E5",
    value: common.WHITE,
  },
};

export type TLINES = {
  type: TLABEL;
  time: string;
  people?: string;
  value: string;
};
