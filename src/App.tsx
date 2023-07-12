import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
