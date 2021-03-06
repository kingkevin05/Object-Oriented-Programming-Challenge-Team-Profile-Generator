const Engineer = require("../lib/Engineer");

test("set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Kev", 1, "test@test.com", testValue);
  expect(engineer.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Kev", 1, "test@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

test("get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Kev", 1, "test@test.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});
