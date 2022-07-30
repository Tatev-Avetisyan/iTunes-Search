import { useContext, useMemo } from "react";
import "./style.css";
import debounce from "lodash.debounce";
import Context from "../store/context";

const Input = () => {
  const { setValue } = useContext(Context);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );
  return (
    <>
      <input type="text" className="inp" onChange={debouncedChangeHandler} />
    </>
  );
};

export default Input;
