import axios from "axios";

export async function getPersonDetail(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching pilot:", error);
    return null;
  }
}
