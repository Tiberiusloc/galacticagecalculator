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
}