import axios from "axios";

const REACT_APP_RAPID_API_KEY =
  "5733988e9fmsh1ad79f61449d8ecp1e5415jsna35d8687ca9f";
const REACT_APP_RAPID_API_HOST = "youtube-v31.p.rapidapi.com";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
