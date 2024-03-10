import { useSelector } from "react-redux";
const AyahData = () => {
  const Data = useSelector((store) => store.AyahData);
  const AyahArabic = Data.Arabic;
  const Translation = Data.Translation;
  const VerseNo = Data.VerseNo;
  return (
    <>
      <div className="Ayaat fs-1 mt-4 mx-4 ">{AyahArabic}</div>
      <div className="Translation fs-2 mt-3 mx-4 mb-4  ">
        <strong className="mx-2">{VerseNo}</strong>
        {Translation}
      </div>
    </>
  );
};
export default AyahData;
