# Migrating from v1 to v2

The functions and typings in V2 the SDK have been re-named to improve developer experience. 
The guide will provide you with the steps to help you migrate your application.

## Type Changes
Interfaces are no longer prefixed with the letter `I`. **Interfaces in the TypeScript compile are used solely for type-checking purposes.**
Originally, `ICard` and `ISet` existed to be implemented with the `Card` and `Set` classes respectively. Because each function is now an independently exported function,
the TypeScript interfaces can be used as intended, which is to simply describe the shape of the data from the API:

`IQuery` was also changed to `Parameter` to complement the [new parameter syntax](https://docs.pokemontcg.io/#api_v2cards_list) in V2 of the API.

* `ICard` -> `Card`
* `ISet` -> `Set`
* `IAbility` -> `Ability`
* `IResistance` -> `Resistance`
* `IWeakness` -> `Weakness`
* `IAttack` -> `Attack`
* `IQuery` -> `Parameter`

## Function Changes
The API functions are no longer abstracted in classes. Instead, each function is an individual export which still returns
data of type `Card` or `Set` to reduce redundancy in the SDK. The function names were renamed to reveal intent as clearly as possible. This results
in code that is self documenting, and enforces a convention where the API functionality is described
thoroughly for developers. 

There is no change in the function return types, nor underlying functionality. Functions will continue to return a generic promised based on the resource (i.e. `Promise<Card>`, `Promise<Set>`).

It is recommended to refactor the function names with the find-and-replace tool in your IDE or text editor in order for your project
to be compatible with V2 of the SDK. 

## Card Functions
### `PokemonTCG.Card.all()` -> `PokemonTCG.getAllCards()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Card.all();

// V2
PokemonTCG.getAllCards();
```

### `PokemonTCG.Card.find()` -> `PokemonTCG.findCardByID()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Card.find('xy7-54').then((card: PokemonTCG.Card) => {
  console.log(card.name) // Gardevoir
});

// V2
PokemonTCG.findCardByID('xy7-54').then((card: PokemonTCG.Card) => {
    console.log(card.name) // Gardevoir
});
```

### `PokemonTCG.Card.where()` -> `PokemonTCG.findCardsByQueries()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
const paramsV1: PokemonTCG.IQuery[] = [{ name: 'name', value: 'Gardevoir' }];

PokemonTCG.Card.where(paramsV1).then((cards: PokemonTCG.Card[]) => {
  console.log(card[0].name) // Gardevoir
});

// V2
const paramsV2: PokemonTCG.Parameter[] = { q: 'id:xy7-54' };

PokemonTCG.findCardsByQueries(paramsV2).then((cards: PokemonTCG.Card[]) => {
   console.log(card[0].name) // Gardevoir
});
```
## Set Functions
### `PokemonTCG.Set.all()` -> `PokemonTCG.getAllSets()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Set.all();

// V2
PokemonTCG.getAllSets();
```
### `PokemonTCG.Set.find()` -> `PokemonTCG.findSetByID()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Set.find('base1').then((set: PokemonTCG.Set) => {
  console.log(set.name) // Base
});

// V2
PokemonTCG.findSetByID('base1').then((set: PokemonTCG.Set) => {
    console.log(set.name) // Base
});
```

### `PokemonTCG.Set.where()` -> `PokemonTCG.findSetsByQueries()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
const paramsV1: PokemonTCG.IQuery[] = [{ name: 'name', value:'Base' }];

PokemonTCG.Set.where(paramsV1).then((sets: PokemonTCG.Set[]) => {
  console.log(sets[0].name) // Base
});

// V2
const paramsV2: PokemonTCG.Parameter[] = { q: 'name:Base' };

PokemonTCG.findSetsByQueries(paramsV2).then((sets: PokemonTCG.Set[]) => {
   console.log(sets[0].name) // Base
});
```

## Meta Functions 

### `PokemonTCG.Meta.allTypes()` -> `PokemonTCG.getTypes()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Meta.getAllTypes();

// V2
PokemonTCG.getTypes();
```

### `PokemonTCG.Meta.allSupertypes()` -> `PokemonTCG.getSupertypes()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Meta.allSupertypes();

// V2
PokemonTCG.getSupertypes();
```

### `PokemonTCG.Meta.allSubtypes()` -> `PokemonTCG.getSubtypes()`
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// V1
PokemonTCG.Meta.allSubtypes();

// V2
PokemonTCG.getSubtypes();
```


