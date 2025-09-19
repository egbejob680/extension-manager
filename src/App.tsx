import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import "./App.css";
import FilterPage from "./components/Filter";
import ExtensionList from "./components/ExtensionList";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state: RootState) => state.extension.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <div className="app">
      <Header/>
      <FilterPage  />
      <ExtensionList />
    </div>
  );
}

export default App;
