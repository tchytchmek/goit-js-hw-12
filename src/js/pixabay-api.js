import axios from "axios";

export function getImagesByQuery(query) {
  return axios
    .get("https://pixabay.com/api/", {
      params: {
        key: "56434957-1ee9963b6aa14410bfffd2ce8",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
}
