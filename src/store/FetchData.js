import { createAsyncThunk } from "@reduxjs/toolkit";
const FetchData = createAsyncThunk("FetchData", async () => {
  //Random Key Fetch:
  const Verseresponse = await fetch(
    "https://api.quran.com/api/v4/verses/random?translations=22"
  );
  const JsonResponse = await Verseresponse.json();
  const TranslationVerse = JsonResponse.verse.translations[0].text;
  const RandomKey = JsonResponse.verse.verse_key;
  //Arabic Verse:
  const ArabicResponse = await fetch(
    `https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=${RandomKey}`
  );
  const ArabicJsonResponse = await ArabicResponse.json();
  const ArabicVerse = ArabicJsonResponse.verses[0].text_uthmani;
  return [RandomKey, ArabicVerse, TranslationVerse];
});
export default FetchData;
