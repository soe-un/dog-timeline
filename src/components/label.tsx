"use client";

import { LabelRecord, TLABEL } from "@/types/type";
import clsx from "clsx";
import common from "../../public/locales/ko/common.json";

export default function Label({ type }: { type: TLABEL }) {
  const getBranch = () => {
    switch (type) {
      case "RED":
      case "BLUE":
      case "ORANGE":
        return common["(legislative)"];
      case "PURPLE":
      case "GREEN":
      case "PINK":
      case "WINE":
        return common["(judicial)"];
      case "GRAY":
        return common["(executive)"];
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-1">
      <div
        style={{ backgroundColor: LabelRecord[type].color }}
        className={clsx(`w-4 h-4`)}
      />
      <p>{LabelRecord[type].value}</p>
      {getBranch() && <p>{getBranch()}</p>}
    </div>
  );
}
