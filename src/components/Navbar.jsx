import logo from "/src/assets/icons8-simplified-ai.svg";
import rightArrow from "/src/assets/arrowright.png"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-7 md:px-16 py-5">
      <div className="flex items-center gap-2">
        <img
          className="w-10"
          src={logo}
          alt="logo"
        />
        <h1 className="font-semibold text-xl">textline.ai</h1>
    </div>
      <div className="flex gap-12 items-center">
        <ul className="hidden md:flex md:gap-10 font-medium">
          <li className="underline">Home</li>
          <li className="underline">Jobs</li>
          <li className="underline">About</li>
          <li className="underline">Contact</li>
        </ul>
        <button className="flex items-center gap-3 font-medium bg-slate-200 px-4  rounded-md  ">
          <img
            className="w-10 hidden md:inline-block "
            src={rightArrow}
            alt="hire now"
          />
          <h1 className="py-2 md:p-0">Get Started !</h1>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
