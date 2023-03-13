import { instances } from "./api";

export const getAllSinger = async () => {
  return await instances.get("singer");
};
