import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function EditButton({ openMenu, handleOpenMenu }) {
  return (
    <div className="flex gap-5 justify-center items-center pt-2">
      <div
        className="group self-start flex items-center gap-2 group"
        onClick={() => handleOpenMenu()}
      >
        <span className="h-fit p-2 rounded-md hidden bg-white  opacity-0 group-hover:opacity-100  duration-500 group-hover:block ">
          {openMenu ? "Click to Close " : "Click to Edit"}
        </span>
        <FontAwesomeIcon
          icon={openMenu ? faXmark : faPencil}
          className=" bg-slate-200 text-4xl p-3 rounded-md shadow-md transition-all hover:shadow-lg hover:rounded-2xl w-8 h-8"
        />
      </div>
    </div>
  );
}
