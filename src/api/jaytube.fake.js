import axios from "axios";

export default class FakeYoutbe {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopulard();
  }

  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopulard() {
    return axios.get(`/videos/pupulard.json`).then((res) => res.data.items);
  }
}
