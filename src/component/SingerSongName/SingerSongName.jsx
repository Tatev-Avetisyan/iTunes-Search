const SingerSongName = ({item,key})=>{
    return (
      <div key={key} className="song-list-wrapper">
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
          <Link to={`/details/${item.artistId}`}>More details</Link>
        </div>
      </div>
    );
}
export default SingerSongName;