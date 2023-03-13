import { instances } from "./api";

export const login = async (user) => {
  return await instances.post("login", user);
};
