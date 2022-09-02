export class UserAge {
  constructor(name, earth,) {
    this.name = name
    this.earth = earth
    this.mercury = 0; 
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
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
    
  }

}