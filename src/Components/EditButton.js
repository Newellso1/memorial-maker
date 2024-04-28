import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import EditMenu from "./EditMenu";
import { useState } from "react";
export default function EditButton() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed top-4 right-4 flex gap-5 justify-center items-center">
      <div
        className="group self-start flex items-center gap-2 group"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className="h-fit p-2 rounded-md hidden bg-white  opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:block ">
          {openMenu ? "Click to Close " : "Click to Edit"}
        </span>
        <FontAwesomeIcon
          icon={openMenu ? faXmark : faPencil}
          className=" bg-slate-300 text-4xl p-3 rounded-md shadow-md transition-all hover:shadow-lg hover:rounded-2xl w-8 h-8"
        />
      </div>
      {openMenu && <EditMenu openMenu={openMenu} />}
    </div>
  );
}
