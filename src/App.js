import { useState } from "react";

import EditMenu from "./Components/EditMenu";
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="h-dvh w-dvw flex justify-center items-center bg-gradient-to-tr from-slate-500 to-blue-200 text-slate-800">
      <EditMenu handleOpenMenu={handleOpenMenu} openMenu={openMenu} />
      <h1 className="text-2xl font-semibold border-solid border-2 shadow-md border-slate-500 p-2 px-4 bg-slate-200 rounded-md ">
        Memorial Maker
      </h1>
    </div>
  );
}

export default App;
