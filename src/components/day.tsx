export default function Day({
  date,
  childrens,
}: {
  date: string;
  childrens: React.ReactElement;
}) {
  return (
    <div>
      <div className="m-1 text-center">
        {[date[0], date[1]]}/{[date[2], date[3]]}/{[date[4], date[5]]}
      </div>
      <div className="m-1 gap-1 grid grid-col-1">{childrens}</div>
    </div>
  );
}
