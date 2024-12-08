import Label from "@/components/label";
import common from "../../public/locales/ko/common.json";
import { LABELS, TLABEL, TLINES } from "@/types/type";
import Lines from "@/components/lines";
import Day from "@/components/day";
import { dates } from "@/data";

export default function Home() {
  const ko = common;

  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start m-4">
        <h1>{ko.title}</h1>
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
          {dates.map(async (d) => {
            const data = await import(`../data/${d}`).then((res) => {
              return (
                <Day
                  date={d}
                  childrens={res.default.map((data: TLINES) => {
                    return (
                      <Lines
                        type={data.type}
                        time={data.time}
                        people={data.people}
                        value={data.value}
                      />
                    );
                  })}
                />
              );
            });
            return data;
          })}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        출처
      </footer>
    </>
  );
}
