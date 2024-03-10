import "./App.css";
import Header from "./components/Header";
import Verse from "./components/Verse";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonArea from "./components/ButtonArea";
import FetchData from "./store/FetchData";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchData());
  }, []);
  return (
    <>
      <Header />
      <Verse />
      <ButtonArea />
    </>
  );
}

export default App;
