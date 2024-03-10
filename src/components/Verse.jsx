import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import AyahData from "./AyahData";
const Verse = () => {
  const Fetching = useSelector((store) => store.AyahData.fetching);
  return (
    <div className="bg-danger VerseHeight d-flex justify-content-center align-items-center flex-column">
      {Fetching ? <Spinner /> : <AyahData />}
    </div>
  );
};
export default Verse;
