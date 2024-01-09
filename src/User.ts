import axios from "axios";

export class User {
  constructor() {}

  async getUserProfile(userId: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
}
