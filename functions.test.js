const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("Checking Names...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is John", () => {
    const user = "John";
    expect(user).toBe("John");
  });
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

//toEqual for objects and arrays
//toBe only for primitive types
test("User should be John Doe object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Doe",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;

  expect(load1 + load2).toBeLessThan(1600);
  //   expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "maria", "admin"];
  expect(usernames).toContain("admin");
});

// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
