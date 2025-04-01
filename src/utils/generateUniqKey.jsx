import { v4 as uuidv4 } from "uuid";

export const generateUniqKey = () => {
  return `$${uuidv4()}`;
};
