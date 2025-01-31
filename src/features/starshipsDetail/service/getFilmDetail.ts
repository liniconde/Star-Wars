import axios from "axios";

export async function getFilmDetail(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching film:", error);
    return null;
  }
}
