import { User } from "../User";

const mockHttpService: jest.Mocked<AccessDatabase> = {
  getData: jest.fn(),
  addData: jest.fn(),
};

const userService = new User(mockHttpService);

describe("User Object", () => {
  it("should get user profile using HTTP GET", async () => {
    const userId = 1;
    const userProfileData = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    mockHttpService.getData.mockResolvedValue(userProfileData);

    // Act
    const result = await userService.getUserProfile(userId);
    // Assert
    expect(result).toEqual(userProfileData);
    expect(mockHttpService.getData).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  });
});
