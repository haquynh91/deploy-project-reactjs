import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Nopages from "./pages/Nopages";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Streams from "./pages/Streams";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="details" element={<Details />} />
          <Route path="streams" element={<Streams />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Nopages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
