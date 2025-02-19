import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Menu from "./pages/menu.tsx";
import Contact from "./pages/contactUs.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/menu"} element={<Menu />} />
              <Route path={"/contact"} element={<Contact />} />
          </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
