import axios from "axios";

export interface AccessDatabase {
  getData<T>(url: string): Promise<T>;
}

export class HttpService implements AccessDatabase {
  // 1. Blueprint for classes
  constructor() {}

  async getData(url: string) {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
    return data;
  }
}

export class GraphQLService implements AccessDatabase {
  // GraphQL query logic
  async getData(url: string) {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
    return data;
  }
}
