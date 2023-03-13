import { instances } from "./api";

export const getAllSong = async () => {
  return await instances.get("song");
};
