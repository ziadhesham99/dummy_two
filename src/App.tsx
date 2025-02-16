import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />} />
          </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
