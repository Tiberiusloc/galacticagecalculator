import {UserAge} from './../src/userAge'

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Tiberius", "23")
  });
  test('should create a new user object with correct properties from UserAge class constructor', () => { 
  expect(user.name).toEqual("Tiberius")
  expect(user.ageEarth).toEqual('23')
  expect(user.ageMercury).toBeGreaterThanOrEqualTo(0)
  expect(user.ageVenus).toBeGreaterThanOrEqualTo(0)
  expect(user.ageMars).toBeGreaterThanOrEqualTo(0)
  expect(user.ageJupiter).toBeGreaterThanOrEqualTo(0)
  });
});