# Pokemon TCG SDK TypeScript

This is the TypeScript SDK for the [Pokemon TCG API](https://pokemontcg.io).

## Installation 

```
npm install --save pokemon-tcg-sdk-typescript
```

## Class Definitions

### Card

```typescript
id: number;
name: string;
imageUrl: string;
imageUrlHighRes: string;
subType: ISubType;
superType: ISuperType;
ability: IAbility;
hp: number;
number: number;
artist: string;
rarity: string;
series: string;
set: ISet;
setCode: string;
retreatCost: string;
text: string;
types: IType[];
attacks: IAttack[];
weaknesses: string[];
resistances: string[];
nationalPokedexNumber: number;
ancientTrait: string;
evolvesFrom: string;
```

### Set

```typescript
code: string;
name: string;
series: string;
totalCards: number;
standardLegal: boolean;
expandedLegal: boolean;
releaseDate: string;
symbolUrl: string;
ptcgoCode: string;
```

### Type, SubType, SuperType

```typescript
type: string;
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

Set.find(id: string): Promise<Set>
Set.where(params: IQuery[]): Promise<Set[]>
Set.all(): Promise<Set[]>

Type.all(): Promise<Type[]>
SuperType.all(): Promise<SuperType[]>
SubType.all(): Promise<SubType[]>
```

## Usage

All of the calls return generic promises like `Promise<T>` or `Promise<T[]>`. The type is determined from the class making the call. The examples here are using the `Card` class but the usage for the other classes are the same.

```typescript
import { Card, Set, Type, SuperType, SubType, IQuery } from 'pokemon-tcg-sdk-typescript'

Card.find('xy1')
  .then(card => {
    // do stuff with the card
  })
  .catch(error => {
    // do something with the error
  });

let params: IQuery[] = [{ name: 'name', value: 'Charizard' }];
Card.where(params)
  .then(cards => {
    // do stuff with the cards
  })
  .catch(error => {
    // do something with the error
  });

Card.all()
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