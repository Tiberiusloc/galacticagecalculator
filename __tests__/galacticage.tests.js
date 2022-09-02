import {UserAge} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Tiberius", "23");
  });
  test('should create a new user object with correct properties from UserAge class constructor', () => { 
    expect(user.name).toEqual("Tiberius");
    expect(user.earth).toEqual('23');
    expect(user.mercury).toEqual(0);
    expect(user.venus).toEqual(0);
    expect(user.mars).toEqual(0);
    expect(user.jupiter).toEqual(0);
  });
  test('should add the different age to user.mercury', () => {
    user.mercuryAge();
    expect(user.mercury).toEqual(5.52);
  });
  test('should add the different age to user.venus', () => {
    user.venusAge();
    expect(user.venus).toEqual(14.26);
  });
  test('should add the different age to user.mars', () => {
    user.marsAge();
      expect(user.mars).toEqual(43.239999999999995);
  });
});