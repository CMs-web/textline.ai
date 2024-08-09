import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputField from "./components/InputField";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppLayout from "./components/AppLayout";
import ResponsePage from "./components/ResponsePage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<AppLayout />}>
            </Route>
            <Route path="*" element={<h1 className="text-center text-xl ">Page Not Found</h1> } />
          </Routes>
          <InputField />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
