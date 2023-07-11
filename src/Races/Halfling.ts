import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  static HalflingInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.incrementInstances();
  }
  
  static incrementInstances(): void {
    Halfling.HalflingInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.HalflingInstances;
  }
}