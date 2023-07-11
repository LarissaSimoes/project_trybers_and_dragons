import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  static DwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.incrementInstances();
  }

  static incrementInstances(): void {
    Dwarf.DwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.DwarfInstances;
  }
}