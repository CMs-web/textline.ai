import { useFetchedData } from "../store";
import ResponsePage from "./ResponsePage";
import Hero from "../pages/Hero";
import DemoText from "./DemoText";

function AppLayout() {
  const data = useFetchedData((state) => state.data);
  return (
    <>
      {data.length > 0 ? (
        <ResponsePage />
      ) : (
        <>
          <Hero />
          <DemoText />
        </>
      )}
    </>
  );
}

export default AppLayout;
