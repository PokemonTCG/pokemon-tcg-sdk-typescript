# Pokemon TCG SDK TypeScript

This is the TypeScript SDK for the [Pokemon TCG API](https://pokemontcg.io).

## Installation

**npm**

    npm install --save pokemon-tcg-sdk-typescript

**yarn**

    yarn add pokemon-tcg-sdk-typescript

## Class Definitions

### Card

```typescript
ability: IAbility;
artist: string;
attacks: IAttack[];
convertedRetreatCost: number;
evolvesFrom: string;
hp: string;
id: string;
imageUrl: string;
imageUrlHiRes: string;
name: string;
nationalPokedexNumber: number;
number: string;
rarity: string;
resistances: IResistance[];
retreatCost: string[];
series: string;
set: string;
setCode: string;
subtype: string;
supertype: string;
text: string[];
types: string[];
weaknesses: IWeakness[];
```

### IAbility

```typescript
name: string;
text: string;
type: string;
```

### IAttack

```typescript
cost: string[];
name: string;
text: string;
damage: string;
convertedEnergyCost: string;
```

### IResistance, IWeakness

```typescript
type: string;
value: string;
```

### Set

```typescript
code: string;
expandedLegal: boolean;
logoUrl: string;
name: string;
ptcgoCode: string;
releaseDate: string;
series: string;
standardLegal: boolean;
symbolUrl: string;
totalCards: number;
updatedAt: string;
```

### IQuery

```typescript
{ name: string, value: string | number }
```

## Method Definitions

```typescript
Card.find(id: string): Promise<Card>
Card.where(params: IQuery[]): Promise<Card[]>
Card.all(): Promise<Card[]>

Set.find(name: string): Promise<Set>
Set.where(params: IQuery[]): Promise<Set[]>
Set.all(): Promise<Set[]>

Type.all(): Promise<Type[]>  // TODO
```

## Usage

All of the calls return generic promises like `Promise<T>` or `Promise<T[]>`. The type is determined from the class making the call. The examples here are using the `Card` class but the usage for the other classes are the same.

```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

PokemonTCG.Card.find('xy1')
  .then(card => {
    // do stuff with the card
  })
  .catch(error => {
    // do something with the error
  });

let params: PokemonTCG.IQuery[] = [{ name: 'name', value: 'Charizard' }];
PokemonTCG.Card.where(params)
  .then(cards => {
    // do stuff with the cards
  })
  .catch(error => {
    // do something with the error
  });

PokemonTCG.Card.all()
  .then(cards => {
    // do stuff with the cards
  })
  .catch(error => {
    // do something with the error
  });
```

## Contributing
 * Fork it (click the Fork button at the top of the page)
 * Create your feature branch (git checkout -b my-new-feature)
 * Commit your changes (git commit -am 'Add some feature')
 * Push to the branch (git push origin my-new-feature)
 * Create a new Pull Request

## TODO
* Add more testing?
* Update package name for easier use?