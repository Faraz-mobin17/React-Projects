import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(fn, [
    length,
    numberAllowed,
    characterAllowed,
    setPassword,
  ]);

  const passwordRef = useRef(null);

  function fn() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*";
    }
    for (let i = 1; i <= length; i += 1) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyPass = useCallback(copyToClip, [password]);
  function copyToClip() {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="bg-slate-900 w-full max-w-md mx-auto shadow-xl rounded-lg px-4 py-3 my-8 ">
        <div className="flex flex-col shadow  overflow-hidden mb-4 p-10">
          <h1 className="text-white text-3xl">Password Generator</h1>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 rounded-lg px-3 mt-6"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="mt-4 bg-purple-500 text-white p-2 rounded-lg"
            onClick={copyPass}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <label htmlFor="slider" className="text-white">
              Length
            </label>
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              id="slider"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label htmlFor="numberInput" className="text-white">
              Numbers:
            </label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label htmlFor="characterInput" className="text-white">
              Special Char:
            </label>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterAllowed"
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
