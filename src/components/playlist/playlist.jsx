import Tracks from "../tracks/tracks"
import "./playlist.css" 
import arrTrack from "../../data"

export default function PlayList () {
    return (
        <div className="content__playlist playlist">
{arrTrack.map((item) => (
    <Tracks
    title = {item.title}
    titleSpan = {item.titleSpan}
    author = {item.author}
    album = {item.album}
    time = {item.time}
    />
))}
        </div>
    )
}