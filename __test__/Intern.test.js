const Intern = require("../lib/Intern");

test("set school via constructor", () => {
  const testValue = "UCLA";
  const intern = new Intern("Kev", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const intern = new Intern("Kev", 1, "test@test.com", "UCLA");
  expect(intern.getRole()).toBe(testValue);
});

test("get school via getSchool()", () => {
  const testValue = "UCLA";
  const intern = new Intern("Kev", 1, "test@test.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});
