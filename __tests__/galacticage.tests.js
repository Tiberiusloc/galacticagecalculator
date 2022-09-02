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
  test('should add the different age to user.jupiter', () => {
    user.jupiterAge();
    expect(user.jupiter).toEqual(272.78)
  });
  test('should use prototypes to create user age for planets specified in user age object', () => {
    user.spaceAgeCalculator();
    expect(user.name).toEqual("Tiberius");
    expect(user.earth).toEqual("23");
    expect(user.mercury).toBeCloseTo(5.52, 1);
    expect(user.venus).toBeCloseTo(14.26, 1);
    expect(user.mars).toBeCloseTo(43.24, 1);
    expect(user.jupiter).toBeCloseTo(272.78, 1);
  });
});