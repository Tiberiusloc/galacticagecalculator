export class UserAge {
  constructor(name, earth, life) {
    this.name = name
    this.earth = earth
    this.mercury = 0; 
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
    this.earthExp = life
    this.mercuryExp = 0;
    this.venusExp = 0;
    this.marsExp = 0;
    this.jupiterExp = 0;
  }
  mercuryAge() {
    let ageMercury = this.earth * 0.24
    this.mercury += ageMercury
  }
  venusAge() {
    let ageVenus = this.earth * 0.62
    this.venus = ageVenus
  }
  marsAge() {
    let ageMars = this.earth * 1.88
    this.mars = ageMars
  }
  jupiterAge() {
    let ageJupiter = this.earth * 11.86
    this.jupiter = ageJupiter
  }
  spaceAgeCalculator() {
    this.mercuryAge();
    this.venusAge();
    this.marsAge();
    this.jupiterAge();
  }

}