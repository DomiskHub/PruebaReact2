import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./views/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
