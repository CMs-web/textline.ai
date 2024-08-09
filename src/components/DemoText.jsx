import { useFetchedData } from "../store";

import lamp from '../assets/lamp.png';
import code from '../assets/code.png';
import notes from '../assets/lamp.png';
import graduate from '../assets/graduate.png';

function DemoText() {
  const setInput = useFetchedData((state) => state.setInput);
  const handleClick = (e) => {
    setInput(e.target.innerText)
  }
    return (
      <div className="flex justify-center mb-16">
        <ul className="logo_Img max-w-[60rem] flex items-center justify-center flex-wrap gap-4 px-5">
          <li onClick={handleClick}>
            <img src={lamp} alt="lamp" />
            <p>Morning routine for productivity</p>
          </li>
          <li onClick={handleClick}>
            <img src={code} alt="" />
            <p>Make a personal webpage</p>
          </li>
          <li onClick={handleClick}>
            <img src={notes} alt="" />
            <p>Text inviting friend to wedding</p>
          </li>
          <li onClick={handleClick}>
            <img src={graduate} alt="" />
            <p>Explain conductors</p>
          </li>
        </ul>
      </div>
    );
}

export default DemoText
