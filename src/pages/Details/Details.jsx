import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Context from "../../store/context";

const Details = () => {
  const navigate = useNavigate();
  const { item } = useContext(Context);
  return (
    <div className="details-wrapper">
      <button onClick={() => navigate(-1)}>Go Back</button>

      <div className="detail-img">
        <img src={item.artworkUrl100} alt="img" />
      </div>
      <div className="name-detail">
        <span> {item.artistName}</span>:<span>{item.trackName}</span>
      </div>

      <div>
        <audio controls className="audio">
          <source src={item.previewUrl} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};
export default Details;
