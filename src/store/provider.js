import React, { useState } from "react";
import Context from "./context";

const SearchProvider = ({ children }) => {
  const [list, setList] = useState({ resultCount: null, results: [] });
  const [value, setValue] = useState("");
  const [item, setItem] = useState({});
  let termParams = value.replace(/ /g, "+");

  return (
    <Context.Provider
      value={{
        list,
        setList,
        value,
        setValue,
        termParams,
        item,
        setItem,
      }}
    >
      <div>{children}</div>
    </Context.Provider>
  );
};

export default SearchProvider;
