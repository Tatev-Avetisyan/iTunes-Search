import "./App.css";
import Home from "./pages/Home/Home";
import SongList from "./pages/SongList/SongList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <h1 className="header">iTunes Music Searcher</h1>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="song-list" element={<SongList />} />
        </Route>
        <Route path="/details/:id" element={<Details />} />
        {/* <Route path="details" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
