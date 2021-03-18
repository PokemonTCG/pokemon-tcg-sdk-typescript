# Pokeemon TCG SDK TypeScript

*Now supporting Version 2 of the Pokémon TCG API! Please refer to the [V1 to V2 Migration](https://docs.pokemontcg.io/#documentationmigration) section of the 
official API docs for more information.*

[![pokemontcg-developers on discord](https://img.shields.io/badge/discord-pokemontcg--developers-738bd7.svg)](https://discord.gg/dpsTCvg)
![pokemon-tcg-sdk-typescript build status](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/actions/workflows/sdk_test.yaml/badge.svg
)

This is the TypeScript SDK for the [Pokémon Trading Card Game API](https://docs.pokemontcg.io).

## Installation

**npm**

    npm install pokemon-tcg-sdk-typescript

**yarn**

    yarn add pokemon-tcg-sdk-typescript

# Configuration
The SDK works out of the box! Simply import the SDK, and you're ready to go:
```typescript
import PokemonTCG from 'pokemon-tcg-sdk-typescript';

PokemonTCG.findCardByID('xy7-54').then((card: PokemonTCG.Card) => {
    console.log(card.name) // Gardevoir
})
```

It is recommended to use an API key for version 2 of the API. An API key unlocks higher race limits, and can 
be adjusted to meet your needs if necessary. Create an account at https://dev.pokemontcg.io to grab an API key.

To use the SDK with an API key, set your API key to the environment variable `POKEMONTCG_API_KEY` in a `.env` file. 

# Usage

## Card methods
* findCardByID()
* findCardsByQueries()
* getAllCards()
* getTypes()
* getSupertypes()
* getSubtypes()
* getRarities()

## Set methods
* findSetByID()
* findSetsByQueries()
* getAllSets()

### findCardByID()
Returns a single Pokémon card given an ID. 
```typescript
import PokemonTCG from 'pokemon-tcg-sdk-typescript';

PokemonTCG.findCardByID('xy7-54').then((card: PokemonTCG.Card) => {
    console.log(card.name) // Gardevoir
})
```

### findCardByQueries()
Returns an array of cards filtered through a search query.
```typescript
import PokemonTCG from 'pokemon-tcg-sdk-typescript';

const params: PokemonTCG.Query[] = [{
   name: 'id',
   value: 'xy7-54'
}]

PokemonTCG.findCardsByQueries(params).then((cards: PokemonTCG.Card[]) => {
   console.log(card[0].name) // Gardevoir
})
```
### getAllCards()
Returns all Pokémon cards available through recursive pagination
```typescript
import PokemonTCG from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getAllCards();
```

```typescript
ability: IAbility;
ancientTrait?: IAncientTrait;
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

