import axios from "axios";
import { AccessDatabase } from "./services/HttpService";

export class User {
  // 2. Composition
  // 2. Delegating logic
  // 2. Contract between classes (dependency injection)
  constructor(private httpService: AccessDatabase) {}

  async getUserProfile(userId: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.httpService.getData(url);
  }
}

// Inheritance: Animal => Dog : Dog "is an" Animal
// Composition: User => HttpService : User "has a" HttpService
