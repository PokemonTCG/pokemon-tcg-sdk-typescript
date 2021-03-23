# Pokemon TCG SDK TypeScript

This is the TypeScript SDK for the [Pokemon TCG API](https://pokemontcg.io).

# V2 Announcement
Version 1 of this SDK is officially depricated. Version 2 stable release this SDK is scheduled to be released on **Friday, April 3rd, 20201**. Version 1 will continue to receive support until then. **See the [migration guide](MIGRATING.md) for steps to update your app to use the latest supported version of the SDK**

## Installation

**npm**

    npm install --save pokemon-tcg-sdk-typescript

**yarn**

    yarn add pokemon-tcg-sdk-typescript

## Class Definitions

### Card

```typescript
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
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
  id: string;
  images: ISetImage;
  legalities: ILegality;
  name:  string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series:  string;
  total: number;
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

Set.find(id: string): Promise<Set>
Set.where(params: IQuery[]): Promise<Set[]>
Set.all(): Promise<Set[]>

Meta.allTypes(): Promise<string[]>
Meta.allSubtypes(): Promise<string[]>
Meta.allSupertypes(): Promise<string[]>
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
 * Make some changes and fix some bugs!
 * Run the tests `npm run-script test`
 * Test your changes in a project of yours:
   * Create a link with [npm](https://docs.npmjs.com/cli/link.html) or [yarn](https://yarnpkg.com/lang/en/docs/cli/link/) (depending on what tool you installed this SDK with)
   * In your project that **uses** the SDK, install the linked package with `yarn/npm link pokemon-tcg-sdk-typescript`
   * Verify the SDK behaves as expected, and your changes took effect
 * Commit your changes (git commit -am 'Add some feature')
 * Push to the branch (git push origin my-new-feature)
 * Create a new Pull Request

## TODO
* Add more testing?
