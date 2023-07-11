import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  static WarriorInstances = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'stamina';
    Warrior.incrementInstances();
  }

  static incrementInstances(): void {
    Warrior.WarriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.WarriorInstances;
  }
}