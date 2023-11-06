/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeButton from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const val = document.querySelector("html").classList;
    val.remove("light", "dark");
    val.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {/* <h1 className="p-4 bg-pink-400 text-3xl">Hello World</h1> */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
