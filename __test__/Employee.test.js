const Employee = require("../lib/Employee");

test("instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("set name via constructor arguments", () => {
  const name = "Kevin";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("set id via constructor argument", () => {
  const testValue = 100;
  const employee = new Employee("Kev", testValue);
  expect(employee.id).toBe(testValue);
});

test("set email via constructor argument", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Kev", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("get name via getName()", () => {
  const testValue = "Kevin";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("get id via getId()", () => {
  const testValue = 100;
  const employee = new Employee("Kev", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("get email via getEmail()", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Kev", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const employee = new Employee("Kevin", 1, "test@test.com");
  expect(employee.getRole()).toBe(testValue);
});
