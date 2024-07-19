# React + Vite
 This is the main code that we need to understand
```javascript
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#212121");
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="w-full flex flex-wrap justify-center align-middle fixed bottom-8">
        <div className="flex flex-wrap justify-center gap-4 align-middle bg-white p-4 rounded-xl">
          <button className="p-2 px-8 rounded-xl font-bold" style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >RED</button>
          <button className="p-2 px-8 rounded-xl font-bold" style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >GREEN</button>
          <button className="p-2 px-8 rounded-xl font-bold" style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >OLIVE</button>
          <button className="p-2 px-8 rounded-xl font-bold" style={{ backgroundColor: "skyblue" }}
            onClick={() => setColor("skyblue")}
          >SKY BLUE</button>
          <button className="p-2 px-8 rounded-xl font-bold" style={{ backgroundColor: "gray" }}
            onClick={() => setColor("blue")}
          >BLUE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
