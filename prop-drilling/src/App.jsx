import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1>Prop drilling</h1>
      </div>
    </>
  );
}
// example of prop drilling
// const TopComponent = () => {
//   const [state, setState] = useState(0);
//   return (
//     <div>
//       <MiddleComponent state={state} />
//     </div>
//   );
// };

// const MiddleComponent = (state) => {
//   return (
//     <div>
//       <BottomComponent state={state} />
//     </div>
//   );
// };

// const BottomComponent = (state) => {
//   return <div>Bottom Component {state}</div>;
// };

export default App;
