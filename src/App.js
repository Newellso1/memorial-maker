import EditButton from "./Components/EditButton";
function App() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center bg-slate-400 text-slate-800">
      <EditButton />
      <h1 className="text-2xl font-semibold border-solid border-2 shadow-md border-slate-500 p-2 px-4 bg-slate-200 rounded-md ">
        Memorial Maker
      </h1>
    </div>
  );
}

export default App;
