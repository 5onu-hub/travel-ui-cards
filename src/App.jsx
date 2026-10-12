import { useEffect, useRef } from "react";
import TravelCards from "./components/TravelCards";
import "./App.css";

function App() {
  const cursorRef=useRef(null)

  useEffect(()=>{ 
    const moveCursor=(e)=>{
    if(cursorRef.current){
      cursorRef.current.style.left=`${e.clientX-15}px`;
      cursorRef.current.style.top=`${e.clientY-15}px`;
    }
  };
  window.addEventListener("mousemove",moveCursor)
    return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
},[])
  return (
    <main className="text-container">
      <div className="cursor" ref={cursorRef}>
        <div className="inner-circle"></div>
      </div>
      <h1 className="text">
  {"Explore the World".split("").map((letter, index) => (
    <span className="letter" key={index}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h1>

      <p className="subtitle">
        Discover beautiful places around the world
      </p>

      <TravelCards />
    </main>
  );
}

export default App;