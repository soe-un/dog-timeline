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
      <div className="w-[15%] lg:w-[10%] px-2 py-1 break-all">{time}</div>
      {people ? (
        <>
          <div className="w-[35%] lg:w-[30%] px-2 py-1 break-all">{people}</div>
          <div className="w-[50%] lg:w-[60%] px-2 py-1 break-all">{value}</div>
        </>
      ) : (
        <div className="w-[80%] lg:w-[90%] px-2 py-1 break-all">{value}</div>
      )}
    </div>
  );
}
