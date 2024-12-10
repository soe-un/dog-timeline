"use client";
import Label from "@/components/label";
import common from "../../public/locales/ko/common.json";
import { LABELS, TLABEL, TLINES } from "@/types/type";
import Lines from "@/components/lines";
import Day from "@/components/day";
import { dates } from "@/data";
import { Hahmlet } from "next/font/google";
import clsx from "clsx";
import { useEffect, useState } from "react";

const hahmlet = Hahmlet({ subsets: ["latin"] });

export default function Home() {
  const ko = common;
  const [isLoading, setIsLoading] = useState(true);
  const [childrens, setChildrens] = useState<React.ReactElement>();

  const getData = () => {
    dates.map(async (d) => {
      await import(`../data/${d}`)
        .then((res) => {
          return (
            <Day
              key={d}
              date={d}
              childrens={res.default.map((data: TLINES) => {
                return (
                  <Lines
                    key={data.time + data.value}
                    type={data.type}
                    time={data.time}
                    people={data.people}
                    value={data.value}
                  />
                );
              })}
            />
          );
        })
        .then((res) => {
          setChildrens((prev) => (
            <>
              {prev}
              {res}
            </>
          ));
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main
        className={clsx(
          `flex flex-col items-start gap-8 row-start-2 items-center m-4`,
          hahmlet.className
        )}
      >
        <h1 className="font-bold text-center w-full text-xl">{ko.title}</h1>
        <div className="grid grid-cols-4 gap-1 w-full">
          <Label type={LABELS.RED as TLABEL} />
          <Label type={LABELS.BLUE as TLABEL} />
          <Label type={LABELS.ORANGE as TLABEL} />
          <Label type={LABELS.PURPLE as TLABEL} />
          <Label type={LABELS.GREEN as TLABEL} />
          <Label type={LABELS.PINK as TLABEL} />
          <Label type={LABELS.WINE as TLABEL} />
          <Label type={LABELS.GRAY as TLABEL} />
          <Label type={LABELS.BROWN as TLABEL} />
          <Label type={LABELS.WHITE as TLABEL} />
        </div>
        <div className="grid gird-cols-1 w-full">
          {isLoading ? "Loading ..." : childrens}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        출처
      </footer>
    </>
  );
}
