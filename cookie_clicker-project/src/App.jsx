import { useState, useEffect } from "react";
// import cookieBackground from "/cookieBackground.png";
import cookieClicker from "/cookieClicker.png";
// import MainCookie from "/Component/images/cookie_clicker.png";
// import BackgroundCookie from "/Component/images/cookie_background-img.png";
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
      setCookies((currentCookies) => currentCookies - 20);
    } else {
      alert("You need more cookies to buy Upgrade");
    }
  }

  function earnReward() {
    if (cookies >= 200) {
      setCps(cps + 10);
      setCookies((currentCookies) => currentCookies - 200);
    } else {
      alert("You need more cookies to buy Upgrade");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((currentCookies) =>
        Math.round(((currentCookies + cps) * 20) / 4)
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [cps]);

  return (
    <>
      <div className="App">
        {/* <MainCookie />
        <BackgroundCookie /> */}
        <img src={cookieClicker} alt="Main Cookie" />
        {/* <img src={cookieBackground} alt="Background Cookie" /> */}
        <h1>Cookie Clicker</h1>
        <p>Cookies {cookies}</p>
        <p>Cookies per Second {cps}</p>
        <button onClick={addCookies}>click me</button>
        <button onClick={buyUpgrade}>Upgrade 20 cookies for 4cps</button>
        <button onClick={earnReward}>Reward 200 cookies for 10cps</button>
      </div>
    </>
  );
}
