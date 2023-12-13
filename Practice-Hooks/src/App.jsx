/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect } from "react";

function App() {
  const [len, setLen] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [passWord, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "~!@#$%^&*(){}[]";
    for (let i = 0; i < len; i++) {
      const ind = Math.random() * str.length;
      pass += str.charAt(ind);
    }
    setPassword(pass);
  }, [len, numAllow, charAllow, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [len, numAllow, charAllow, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-500  ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={passWord}
            className="outlind-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none text-white bg-blue-500 px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={10}
              max={61}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label> Length : {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="CharInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="CharInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
