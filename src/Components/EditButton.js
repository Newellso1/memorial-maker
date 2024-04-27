import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import EditMenu from "./EditMenu";
export default function EditButton() {
  return (
    <div className="group fixed top-4 right-4 flex gap-5 justify-center items-center bg-white bg-opacity-50">
      <div className=" flex justify-center items-center bg-slate-300 h-10 w-28 py-2 scale-0 transition-all rounded-lg group-hover:scale-100 ">
        <p>Click to edit</p>
      </div>
      <FontAwesomeIcon
        icon={faPencil}
        className="bg-slate-300 text-4xl p-3 rounded-md shadow-md transition-all hover:shadow-lg hover:rounded-2xl "
      />
      <EditMenu />
    </div>
  );
}
