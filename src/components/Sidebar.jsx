function Sidebar() {
  return (
    <div className="Sidebar h-auto bg-purple-50 hidden w-20 md:flex flex-col justify-between items-center gap-6 py-8">
      <div>
        <img src="src\assets\menu.png" alt="" />
      </div>
      <div>
        <img src="src\assets\history.png" alt="setting" className="mb-5" />
        <img src="src\assets\setting.png" alt="setting" />
      </div>
    </div>
  );
}

export default Sidebar;
