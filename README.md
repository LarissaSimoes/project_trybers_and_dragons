# Trybers and Dragons - RPG 

## Sobre o Projeto

Bem-vindo(a) ao universo de Trybers and Dragons (T&D)! Este projeto foi desenvolvido para aplicar os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG.

### Contextualização

No universo de T&D, cada ser pertence a uma raça e possui um arquétipo que define suas habilidades e visão de mundo. Raças, arquétipos e a capacidade de lutar são elementos fundamentais neste cenário.

Agora, prepare-se para explorar terras desconhecidas, enfrentar monstros e cumprir quests épicas nesta incrível jornada!

## Estrutura do Projeto

### 1 - Classe Race

Na pasta `src/Races/`, você encontrará a classe abstrata `Race`. Essa classe define atributos como `name` e `dexterity`, influenciando as características das personagens no jogo. Além disso, cada raça possui um número máximo de instâncias.

### 2 - Classes que herdam de Race

Na mesma pasta, encontram-se as classes que herdam de `Race`, como `Dwarf`, `Elf`, `Halfling` e `Orc`. Cada uma dessas raças possui características específicas, como pontos de vida e habilidades.

### 3 - Interface Energy

A interface `Energy` (em `src/Energy.ts`) permite o uso de dois tipos de energia: "stamina" e "mana". Ela define atributos como `type_` e `amount` para representar esses tipos de energia.

### 4 - Classe Archetype

A classe abstrata `Archetype` (em `src/Archetypes/`) representa os talentos especiais das personagens, incluindo nome, potência do ataque especial e custo energético. Cada arquétipo possui seu tipo de energia específico.

### 5 - Classes que herdam de Archetype

Dentro do diretório `src/Archetypes/`, você encontrará classes como `Mage`, `Necromancer`, `Warrior` e `Ranger`, cada uma representando um arquétipo com habilidades únicas.

### 6 - Interface Fighter

A interface `Fighter` (em `src/Fighter/`) é crucial para todos os seres de T&D, definindo atributos como `lifePoints`, `strength`, `defense` e `energy`. Ela também inclui métodos como `attack()`, `special()`, `levelUp()`, e `receiveDamage()`.

### 7 - Classe Character

A classe `Character` (em `src/Character.ts`) combina uma raça e um arquétipo para criar uma personagem única. Ela implementa a interface `Fighter` e possui atributos como `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity`, e `energy`.

### 8 - Interface SimpleFighter

A interface `SimpleFighter` (em `src/Fighter/`) é destinada aos lutadores mais simples, que não possuem habilidades avançadas. Ela define atributos como `lifePoints` e `strength`, juntamente com métodos como `attack()` e `receiveDamage()`.

## Como Contribuir

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades! Basta seguir os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua contribuição: `git checkout -b sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Faça push para a branch: `git push origin sua-feature`.
5. Abra um Pull Request.

Espero que você aproveite explorando e aprimorando este universo de Trybers and Dragons! Boa jornada, nobre dev! 🐉🛡️🔮
