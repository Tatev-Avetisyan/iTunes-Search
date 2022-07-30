import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../store/context";

const SongListItem = ({ item }) => {
  const { setItem } = useContext(Context);

  const sendItem = (item) => {
    setItem(item);
  };
  return (
    <div className="song-list-wrapper">
      <div className="img">
        <img src={item.artworkUrl100} alt="img" />
      </div>
      <div className="name-div">
        <span>{item.artistName}</span>
      </div>
      <div className="song-name">
        <span>{item.trackName}</span>
      </div>

      <div className="more-details">
        <Link to={`/details/${item.artistId}`} onClick={() => sendItem(item)}>
          More details
        </Link>
      </div>
    </div>
  );
};
export default SongListItem;
