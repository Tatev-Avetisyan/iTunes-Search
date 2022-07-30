import { createContext } from "react";

const Context = createContext({
  list: { resultCount: null, results: [] },
  setList: () => {},
  value: "",
  setValue: () => {},
  onChange: () => {},
  termParams: "",
});
export default Context;
