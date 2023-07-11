import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={HomePage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
