import { useState } from "react";


function App() {
const [color, setcolor] = useState("#212121");
  return (
    <div className="h-screen w-ful" style={{backgroundColor: color}}>
      <div className="w-full flex flex-wrap justify-center align-middle fixed bottom-8">
      <div className="flex flex-wrap justify-center gap-4 align-middle bg-white p-4 rounded-xl">
        <button className="p-2 px-8 rounded-xl font-bold" style={{backgroundColor : "red"}}
        onClick={() => setcolor("red")}
        >RED</button>
        <button className="p-2 px-8 rounded-xl font-bold" style={{backgroundColor : "green"}}
        onClick={() => setcolor("green")}
        >GREEN</button>
        <button className="p-2 px-8 rounded-xl font-bold" style={{backgroundColor : "olive"}}
        onClick={() => setcolor("olive")}
        >OLIVE</button>
        <button className="p-2 px-8 rounded-xl font-bold" style={{backgroundColor : "skyblue"}}
        onClick={() => setcolor("skyblue")}
        >SKY BLUE</button>
        <button className="p-2 px-8 rounded-xl font-bold" style={{backgroundColor : "gray"}}
        onClick={() => setcolor("gray")}
        >GRAY</button>

        </div>
      </div>
    </div>
  )
}

export default App
