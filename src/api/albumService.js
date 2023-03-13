import { instances } from "./api";

export const getALLAlbums = async () => {
  return await instances.get("album");
};
