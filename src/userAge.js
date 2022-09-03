export class UserAge {
  constructor(name, earth) {
    this.name = name
    this.earth = earth
    this.mercury = (this.earth / 0.24); 
    this.venus = (this.earth / 0.62);
    this.mars = (this.earth / 1.88);
    this.jupiter = (this.earth / 11.86);
  }
}

export class UserLife extends UserAge {
  constructor(name, earth, life) {
    super(name,earth);
    this.earthExp = life
    this.mercuryExp = (this.earthExp / 0.24)
    this.venusExp = (this.earthExp / 0.62)
    this.marsExp = (this.earthExp / 1.88)
    this.jupiterExp = (this.earthExp / 11.86)
  }
  earthLifeExp() {
    let earthAge = this.earthExp - this.earth
    if (earthAge < 0 ) {
      return Math.abs(earthAge);
    } else {
      return earthAge
    }
  }
  mercuryLifeExp() {
    let mercAge = this.mercuryExp - this.mercury;
    if (mercAge < 0 ) {
    return "Congratulations you're " + Math.round(Math.abs(mercAge)) + " Over your life expectancy!";
    } else {
      return mercAge
    }
  }
  venusLifeExp() {
    let venusAge = this.venusExp - this.venus
    if (venusAge < 0 ) {
    return "Congratulations you're " + Math.round(Math.abs(venusAge)) + " over your life expectancy!";
  } else { 
    return venusAge
  }
}
  marsLifeExp() {
    let marsAge =  this.marsExp - this.mars
    if (marsAge < 0 ) {
    return "Congratulations you're " + Math.round(Math.abs(marsAge)) + " over your life expectancy!";
    } else {
      return marsAge
    }
  }
  jupiterLifeExp() {
    let jupiterAge = this.jupiterExp - this.jupiter
    if (jupiterAge < 0) {
    return "Congratulations you're " + Math.round(Math.abs(jupiterAge)) + " over your life expectancy!";
    } else {
    return jupiterAge
    }
  }
}