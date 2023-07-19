import axiosApi from "./Api";

const getAllSongs = () => axiosApi.get("songs");

const getSongById = (id: string) => axiosApi.get(`songs/${id}`);

interface ICreateSongBody {
  title: string;
  artist: string;
  genre: string;
  album: string;
  albumImageUrl: string;
  youtubeId: string;
  lyrics: string;
  tab: string;
}

const postCreateSong = (data: ICreateSongBody) => axiosApi.post("songs", data);

export default { getAllSongs, getSongById, postCreateSong };
