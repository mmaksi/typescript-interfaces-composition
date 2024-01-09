import { User } from "./User";
import { GraphQLService, HttpService } from "./services/HttpService";

const service1 = new HttpService();
const service2 = new GraphQLService();

const user = new User(service1);
const user2 = new User(service2);
user.getUserProfile(1);
