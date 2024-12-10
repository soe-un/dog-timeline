"use client";

import { LabelRecord, TLINES } from "@/types/type";
import clsx from "clsx";

export default function Lines({ type, time, people, value }: TLINES) {
  return (
    <div
      style={{
        backgroundColor: LabelRecord[type].color,
        color: type === "WHITE" ? "black" : "white",
      }}
      className={clsx(
        `flex rounded-sm px-2 py-1  divide-x`,
        `hover:shadow-inner hover:shadow-black`,
        type === "WHITE" ? "divide-black" : "divide-white"
      )}
    >
      <div className="w-[10%] px-2 py-1">{time}</div>
      {people ? (
        <>
          <div className="w-[30%] px-2 py-1">{people}</div>
          <div className="w-[60%] px-2 py-1">{value}</div>
        </>
      ) : (
        <div className="w-[90%] px-2 py-1">{value}</div>
      )}
    </div>
  );
}
