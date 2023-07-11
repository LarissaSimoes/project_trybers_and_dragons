import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  static ElfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.incrementInstances();
  }

  static incrementInstances(): void {
    Elf.ElfInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf.ElfInstances;
  }
}