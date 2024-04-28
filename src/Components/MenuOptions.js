export default function MenuOptions({ menuTitle = "Menu Title" }) {
  return (
    <div>
      <h3>{menuTitle}</h3>
      <div className="flex justify-center gap-2">
        <div className=" border-solid border-2 border-slate-400 w-20 h-20"></div>
        <div className=" border-solid border-2 border-slate-400 w-20 h-20"></div>
        <div className=" border-solid border-2 border-slate-400 w-20 h-20"></div>
      </div>
    </div>
  );
}
