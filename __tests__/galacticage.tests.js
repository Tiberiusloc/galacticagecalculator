import {UserAge} from './../src/userAge'

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Tiberius", "23")
  });
  test('should create a new user object with correct properties from UserAge class constructor', () => { 
    expect(user.name).toEqual("Tiberius")
    expect(user.earth).toEqual('23')
    expect(user.mercury).toEqual(0)
    expect(user.venus).toEqual(0)
    expect(user.mars).toEqual(0)
    expect(user.jupiter).toEqual(0)
  });
});