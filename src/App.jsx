import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./castom.css";

import Main from "./Main";

import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Main />} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}
export default App;
