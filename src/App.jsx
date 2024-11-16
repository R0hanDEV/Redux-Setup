import { useDispatch, useSelector } from "react-redux";
import { DecrementValue, incrementValue, setName } from "./redux/action/action";
import { FetchAPIthunk } from "./redux/thunk/fetchAPIThunk";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const useDetail = useSelector((state) => state.userDetail);
  const apiData = useSelector((state) => state.apiData);

  const handleFetchData = () => {
    dispatch(FetchAPIthunk());
  };
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

      <h1>fetch User data</h1>
      <button onClick={handleFetchData}> Click</button>
      {JSON.stringify(apiData)}
    </>
  );
}

export default App;
