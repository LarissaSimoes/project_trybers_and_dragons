import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static RangerInstances = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'stamina';
    Ranger.incrementInstances();
  }

  static incrementInstances(): void {
    Ranger.RangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.RangerInstances;
  }
}