import { fetchData, url } from "./api";

export const featchInputResult = async(cityName) => {
  try {
    if (cityName.trim()==="") {
      throw new Error("Please enter city name");
    } else {

      const data = await fetchData(url.geo(cityName))
      return data;
    }
  } catch (error) {

    return { status: "error", data: error.message || "Something went worong" };

  }
}