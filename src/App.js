import MainWindow from "./components/MainWindow/MainWindow";
import AddNews from "./components/AddNews/AddNews";
import AddDateset from "./components/AddDateset";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Polibian from "./components/Polibian";
import Atbash from "./components/Atbash";
import Tricimus from "./components/Tricimus";
import Bigrammami from "./components/Bigrammami";
import Gronsfeld from "./components/Gronsfeld";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <p><b>Шифр</b>Данных</p>
        </div>
        <Routes>
          <Route path="/AiNews/" element={<MainWindow />} />
          <Route path="/AiNews/news" element={<AddNews />} />
          <Route path="/AiNews/dataset" element={<AddDateset />} />
          <Route path="/AiNews/pol" element={<Polibian />} />
          <Route path="/AiNews/atb" element={<Atbash />} />
          <Route path="/AiNews/tri" element={<Tricimus />} />
          <Route path="/AiNews/big" element={<Bigrammami />} />
          <Route path="/AiNews/gron" element={<Gronsfeld />} />
          <Route path="*" element={<MainWindow />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
