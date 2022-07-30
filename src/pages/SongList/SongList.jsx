import "./style.css";
import InitialContext from "../../store/context";
import { useContext, useMemo } from "react";
import SongListItem from "./SongListItem";

const SongList = () => {
  const { list, value } = useContext(InitialContext);

  const avtor = useMemo(() => {
    if (list.results) {
      return list.results.filter((item) =>
        item.artistName.toLowerCase().includes(value.toLowerCase())
      );
    }
  }, [list.results, value]);
  return (
    <div>
      {avtor.length ? (
        avtor.map((item, index) => {
          return <SongListItem item={item} key={index} />;
        })
      ) : value.length ? (
        <h1>Not found</h1>
      ) : (
        <></>
      )}
    </div>
  );
};
export default SongList;
