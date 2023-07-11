import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static NecromancerInstances = 0;  

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = 'mana';
    Necromancer.incrementInstances();
  }

  static incrementInstances(): void {
    Necromancer.NecromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.NecromancerInstances;
  }
}