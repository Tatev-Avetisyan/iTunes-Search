import { useState } from "react";
import { Outlet } from "react-router-dom";
import Input from "../../component/Input";
import "./style.css";
import { useContext, useEffect } from "react";
import InitialContext from "../../store/context";
import SongList from "../SongList/SongList";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const {
    list,
    setList,
    value,
    termParams,
  } = useContext(InitialContext);

  async function findSinger() {
    if (termParams !== "") {
      fetch(`https://itunes.apple.com/search?term=${termParams}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(true);
          setList(data);
        })
        .then(() => setLoading(false))
        .catch((error) => console.error(error));
    } else {
      setList({ resultCount: null, results: [] });
    }
  }
  useEffect(() => {
    findSinger();
  }, [value]);

 
  return (
    <div className="home">
      <div>
        <Input />
      </div>

      {loading
        ? list.results.length && <h1> Loading...</h1>
        : list.results.length === 0 && <p> Please type in a filter...</p>}
      <SongList />
      <Outlet />
    </div>
  );
};
export default Home;
