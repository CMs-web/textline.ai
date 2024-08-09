import { useFetchedData } from "../store";

function DemoText() {
  const setInput = useFetchedData((state) => state.setInput);
  const handleClick = (e) => {
    setInput(e.target.innerText)
  }
    return (
      <div className="flex justify-center mb-16">
        <ul className="logo_Img max-w-[60rem] flex items-center justify-center flex-wrap gap-4 px-5">
          <li onClick={handleClick}>
            <img src="src\assets\lamp.png" alt="lamp" />
            <p>Morning routine for productivity</p>
          </li>
          <li onClick={handleClick}>
            <img src="src/assets/code.png" alt="" />
            <p>Make a personal webpage</p>
          </li>
          <li onClick={handleClick}>
            <img src="src/assets/notes.png" alt="" />
            <p>Text inviting friend to wedding</p>
          </li>
          <li onClick={handleClick}>
            <img src="src/assets/graduate.png" alt="" />
            <p>Explain conductors</p>
          </li>
        </ul>
      </div>
    );
}

export default DemoText
