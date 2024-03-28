import React from "react";
import Navbar from "../src/components/Navbar.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "../src/Home.tsx";
import About from "../src/About.tsx";
import Team from "../src/Team.tsx";
import Work from "../src/Work.tsx";
import Support from "../src/Support.tsx";
import Join from "../src/Join.tsx";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/team" element={<Team />} />
                <Route path="/support" element={<Support />} />
                <Route path="/join" element={<Join />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    );
}
 
export default App;