import React, { useState } from "react";
import Home from "./Home.tsx";
import About from "./About.tsx"
import Work from "./Work.tsx"
import Support from "./Support.tsx"
import Team from "./Team.tsx"
import "./App.css";

const App: React.FC = () => {
  // Change this to useState(true) to bypass login
  const [pageOn, setPage] = useState("home");

  const handleNavigation = (page: string) => {
   switch (page) {
      case "home":
       return <Home setPage={setPage}/>;
     case "about":
      return <About setPage={setPage}/>;
     case "work":
      return <Work setPage={setPage}/>;
      case "team":
        return <Team setPage={setPage}/>;
    case "support":
      return <Support setPage={setPage}/>;
      default:
       return null;
   }
  };

  return (
    <div className="App">
      {handleNavigation(pageOn)}
    </div>
  );
};

export default App