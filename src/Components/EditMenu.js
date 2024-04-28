import MenuOptions from "./MenuOptions";

export default function EditMenu({ openMenu }) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm flex-col justify-center items-center text-center p-3 max-h-display space-y-4 rounded-md">
      <h2>Please select from the following</h2>
      <div className="flex-col space-y-4">
        <MenuOptions menuTitle="Headstone Style" />
        <MenuOptions menuTitle="Headstone Colour" />
        <div>
          <h3>Heading</h3>
          <input placeholder="Heading" className="placeholder:text-center" />
        </div>
        <div>
          <input placeholder="name" className=" placeholder:text-center" />
          <input placeholder="surname" className=" placeholder:text-center" />
        </div>
        <div>
          <h3>Inscription</h3>
          <input
            type="text-area"
            placeholder="inscription"
            className=" placeholder:text-center"
          />
        </div>
      </div>
    </div>
  );
}
