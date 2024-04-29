import EditButton from "./EditButton";

export default function EditMenu({ openMenu, handleOpenMenu }) {
  return (
    <div
      className={`flex fixed top-0 right-0 gap-3 transition-all ${
        openMenu ? "translate-x-0" : "translate-x-60"
      }
      }`}
    >
      <EditButton openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      <div
        id="menu"
        className="bg-white bg-opacity-80 backdrop-blur-sm p-2 w-60 max-w-60 overflow-hidden h-dvh"
      >
        <h2>Please select the following</h2>
      </div>
    </div>
  );
}
