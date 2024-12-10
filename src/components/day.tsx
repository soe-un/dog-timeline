"use client";
import { useState } from "react";

export default function Day({
  date,
  childrens,
}: {
  date: string;
  childrens: React.ReactElement;
}) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div
        className="m-1 text-center"
        onClick={(e) => setShow((prev) => !prev)}
      >
        {[date[0], date[1]]}/{[date[2], date[3]]}/{[date[4], date[5]]}
      </div>

      {show && <div className="m-1 gap-1 grid grid-col-1">{childrens}</div>}
    </div>
  );
}
