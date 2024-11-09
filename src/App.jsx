import { useDispatch, useSelector } from "react-redux";
import { DecrementValue, incrementValue, setName } from "./redux/action/action";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const useDetail = useSelector((state) => state.userDetail);

  return (
    <>
      <h1>Vite + React</h1>
      <button
        onClick={() => {
          dispatch(incrementValue());
        }}
      >
        Increment
      </button>
      <h1>value : {value}</h1>
      <button
        onClick={() => {
          if (value != 0) {
            dispatch(DecrementValue());
          }
        }}
      >
        decrement
      </button>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => {
          dispatch(setName(e.target.value));
        }}
      />
      {useDetail.name}
    </>
  );
}

export default App;
