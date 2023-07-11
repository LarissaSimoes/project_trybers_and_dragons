import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  static OrcInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.incrementInstances();
  }
  
  static incrementInstances(): void {
    Orc.OrcInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc.OrcInstances;
  }
}