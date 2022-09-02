import {UserAge, UserLife} from './../src/userAge';

describe ('UserAge', () => {
  let user;
  beforeEach(() => {
    user = new UserAge("Tiberius", 23);
    user = new UserLife('Tiberius', 23, 80)
  });
  test('should create a new user object with correct properties from UserAge class constructor', () => { 
    expect(user.name).toEqual("Tiberius");
    expect(user.earth).toEqual(23);
  });
  test('should add the different age to user.mercury', () => {
    expect(user.mercury).toBeCloseTo(95.83, 0.1);
  });
  test('should add the different age to user.venus', () => {
    expect(user.venus).toBeCloseTo(37.09, 0.1);
  });
  test('should add the different age to user.mars', () => {
    expect(user.mars).toBeCloseTo(12.23, 0.1);
  });
  test('should add the different age to user.jupiter', () => {
    expect(user.jupiter).toBeCloseTo(1.93, 0.1)
  });
  test('should calculate life expectancy on mercury and add it to the user.mercuryExp', () => {
    expect(user.mercuryExp).toBeCloseTo(333.33, 0.1);
  });
});
  describe('UserLife', () => {
    let user;
    beforeEach(() => {
      user = new UserLife('Tiberius', 23, 80)
    });
    test('should determine the life expectancy of the user for all planets', () => {
      expect(user.mercuryExp).toBeCloseTo(333.33, 0.1);
      expect(user.venusExp).toBeCloseTo(129.03, 0.1);
      expect(user.marsExp).toBeCloseTo(42.55, 0.1);
      expect(user.jupiterExp).toBeCloseTo(6.74, 0.1);
    });
    test('should determine how many years the user has left on mercury', () => {
      expect(user.mercuryLifeExp()).toBeCloseTo(237.5, 0.1)
    });
    test('should determine how many years the user has left on venus', () => {
      expect(user.venusLifeExp()).toBeCloseTo(91.94, 0.1)
    });
    test('should determine how many years the user has left on mars', () => {
      expect(user.marsLifeExp()).toBeCloseTo(30.32, 0.1)
    });
    test('should determine how many years the user has left on jupiter', () => {
      expect(user.jupiterLifeExp()).toBeCloseTo(4.81, 0.1)
    });
    test('should determine how many years the user has left on earth', () => {
      expect(user.earthLifeExp()).toBeCloseTo(57, 0.1)
    });
    test('should determine if lived over life expectancy if life lived > life expectancy', () => {
      let userOver = new UserLife('Malcolm', 70, 60);
      expect(userOver.earthTime()).toBeCloseTo(10, 0.1);
      expect(userOver.mercuryTime()).toBeCloseTo(41.66, 0.1);
      expect(userOver.venusTime()).toBeCloseTo(16.12, 0.1);
      expect(userOver.jupiterTime()).toBeCloseTo(0.84, 0.1);

    });
  });