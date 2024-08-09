import menu from "/src/assets/menu.png";
import history from "/src/assets/history.png";
import setting from "/src/assets/setting.png";

function Sidebar() {
  return (
    <div className="Sidebar h-auto bg-purple-50 hidden w-20 md:flex flex-col justify-between items-center gap-6 py-8">
      <div>
        <img src={menu} alt="" />
      </div>
      <div>
        <img src={history} alt="setting" className="mb-5" />
        <img src={setting} alt="setting" />
      </div>
    </div>
  );
}

export default Sidebar;
