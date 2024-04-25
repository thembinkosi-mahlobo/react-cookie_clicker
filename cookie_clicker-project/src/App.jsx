import { useState, useEffect } from "react";
import MyComponent from "./MyComponent";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);

  function addCookies() {
    setCookies((currentCookies) => {
      return currentCookies + 1;
    });
  }

  function buyUpgrade() {
    if (cookies >= 20) {
      setCps(cps + 4);
      setCookies(-20);
    } else {
      alert("You need more cookies to by Upgrade");
    }
  }

  function earnReward() {
    if (cookies >= 200) {
      setCps(cps + 10);
      setCookies(-200);
    } else {
      alert("You need more cookies to by Upgrade");
    }

    useEffect(() => {
      const interval = setInterval(()=>{
        setCookies((currentCookies)=>currentCookies + cps), 1000/cps);
      return ()=>{
        clearInterval(interval);
      };
    },[cps]);
  }

  
  return (
    <>
      <div className="App">
        <img src="./src/MyImages/mario backgroung.png" alt="Click the Cookie" />
        <h1>Cookie Clicker</h1>
        <p>Cookies {cookies}</p>
        <p>Cookies per Second {cps}</p>
        <button onClick={addCookies}>click me</button>
        <button onClick={buyUpgrade}>Upgrade 20 cookies for 4cps</button>
        <button onClick={earnReward}>Reward 200 cookies for 10cps</button>
      </div>
      <div id="board"></div>
      <MyComponent count={cookies} />
    </>
  );
}
