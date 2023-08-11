import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./castom.css";

import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Projects from "./pages/main/Projects";
import ContactUs from "./pages/main/Contact";
import NotFound from "./pages/main/NotFound";

const navLinks = [
  { name: Home, path: "/" },
  { name: About, path: "about" },
  { name: Projects, path: "projects" },
  { name: ContactUs, path: "contact-us" },
];
function App() {
  return (
    <>
      <Header />
      <Routes>
        {navLinks.map((elm, i) => (
          <Route key={i} exact path={elm.path} Component={elm.name} />
        ))}
        <Route exact={true} path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
