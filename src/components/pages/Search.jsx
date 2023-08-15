import axios from "axios";

const KEY = "Kwbv4nMTG1Y1xGb49e62HmnD2ocCuHDpuURrxyFTssg";
const URL = "https://api.unsplash.com";

const Search = async (category) => {
  try {
    const response = await axios.get(`${URL}/search/photos`, {
      headers: {
        Authorization: `Client-ID ${KEY}`,
      },
      params: {
        query: category,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching pictures:", error);
    return [];
  }
};

export default Search;
