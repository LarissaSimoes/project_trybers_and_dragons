import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: EnergyType;
  static MageInstances = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'mana';
    Mage.incrementInstances();
  }

  static incrementInstances(): void {
    Mage.MageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.MageInstances;
  }
}