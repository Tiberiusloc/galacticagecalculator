import {UserAge} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Tiberius", 23, 80);
  });
  test('should create a new user object with correct properties from UserAge class constructor', () => { 
    expect(user.name).toEqual("Tiberius");
    expect(user.earth).toEqual(23);
    expect(user.mercury).toEqual(0);
    expect(user.venus).toEqual(0);
    expect(user.mars).toEqual(0);
    expect(user.jupiter).toEqual(0);
  });
  test('should add the different age to user.mercury', () => {
    user.mercuryAge();
    expect(user.mercury).toBeCloseTo(95.83, 0.1);
  });
  test('should add the different age to user.venus', () => {
    user.venusAge();
    expect(user.venus).toBeCloseTo(37.09, 0.1);
  });
  test('should add the different age to user.mars', () => {
    user.marsAge();
    expect(user.mars).toBeCloseTo(12.23, 0.1);
  });
  test('should add the different age to user.jupiter', () => {
    user.jupiterAge();
    expect(user.jupiter).toBeCloseTo(1.93, 0.1)
  });
  test('should use prototypes to create user age for planets specified in user age object', () => {
    user.spaceAgeCalculator();
    expect(user.name).toEqual("Tiberius");
    expect(user.earth).toEqual(23);
    expect(user.mercury).toBeCloseTo(95.83, 0.1);
    expect(user.venus).toBeCloseTo(37.09, 0.1);
    expect(user.mars).toBeCloseTo(12.23, 0.1);
    expect(user.jupiter).toBeCloseTo(1.93, 0.1);
  });
  test('should calculate life expectancy on mercury and add it to the user.mercuryExp', () => {

  });
});