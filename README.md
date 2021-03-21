# Pokémon TCG TypeScript SDK

*Now supporting Version 2 of the Pokémon TCG API! Please refer to the [V1 to V2 Migration](https://docs.pokemontcg.io/#documentationmigration) section of the 
official API docs for more information.*

***See the [migration guide](MIGRATING.md) for steps to update your app to use the latest supported version of the SDK***

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
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.findCardByID('xy7-54').then((card: PokemonTCG.Card) => {
    console.log(card.name) // Gardevoir
})
```

It is recommended to use an API key for version 2 of the API. By default, requests are limited to 20,000/day. Requests are rate limited to 1000 requests a day, and a maximum of 30 per minute. 

To use the SDK with an API key, create an account at https://dev.pokemontcg.io to grab an API key.
Then set your API key to the environment variable `POKEMONTCG_API_KEY` in a `.env` file. 
**Make sure to use this exact environment variable, otherwise the SDK will not be able to read the API key.** 

# Usage
All function calls return generic promises like `Promise<T>` or `Promise<T[]>`

## Card Methods
* [findCardByID()](#findcardbyid)
* [findCardsByQueries()](#findcardbyqueries)
* [getAllCards()](#getallcards)
* [getTypes()](#gettypes)
* [getSupertypes()](#getsupertypes)
* [getSubtypes()](#getsubtypes)
* [getRarities()](#getrarities)

## Set Methods
* [findSetByID()](#findsetbyid)
* [findSetsByQueries()](#findsetbyqueries)
* [getAllSets()](#getallsets)

### findCardByID()
Returns a single Pokémon card given an ID. 
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.findCardByID('xy7-54').then((card: PokemonTCG.Card) => {
    console.log(card.name) // Gardevoir
});
```

### findCardByQueries()
Returns an array of cards filtered through a search query.
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

const params: PokemonTCG.Query[] = { q: 'id:xy7-54' };

PokemonTCG.findCardsByQueries(params).then((cards: PokemonTCG.Card[]) => {
   console.log(card[0].name) // Gardevoir
});
```
### getAllCards()
Returns all Pokémon cards available through recursive pagination.
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getAllCards();
```

### getTypes()
Returns all Energy Types
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getTypes();
```

### getSupertypes()
Returns all Super Types
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getSupertypes();
```

### getSubtypes()
Returns all Sub Types
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getSubtypes();
```

### getRarities()
Returns all card Rarities
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getRarities();
```
### findSetByID()
Returns a single Pokémon card given an ID.
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.findSetByID('base1').then((set: PokemonTCG.Set) => {
    console.log(set.name) // Base
});
```

### findSetByQueries()
Returns an array of cards filtered through a search query.
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

const params: PokemonTCG.Query[] = { q: 'name:Base' };

PokemonTCG.findSetsByQueries(params).then((sets: PokemonTCG.Set[]) => {
   console.log(sets[0].name) // Base
});
```
### getAllSets()
Returns all Pokémon sets available through recursive pagination.
```typescript
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

PokemonTCG.getAllSets();
```

## Contributing
Contributions are welcome! If you want to contribute, feel free to fork the repository, open and issue, then submit a pull request. 
ESLint and Prettier are used to enforce a consistent coding style. 

### Setup
Raring to code your heart out? Awesome! Here's how to get started:
1. Open and issue with a bug or feature. Ensure the change is not already being worked on. 
2. Fork and clone the repository from the `master` branch.
3. Create a feature branch.
4. Run `npm ci` to install exact versions specified in the `package-lock.json`.
5. Code your heart out!
6. Run `npm run test` to run ESLint and Jest tests. 
7. (OPTIONAL) Test your changes in a project of yours:
   1. Create a link with `npm` or `yarn` (depending on what tool you installed this SDK with)
   2. In your project that uses the SDK, install the linked package with `yarn/npm link pokemon-tcg-sdk-typescript`
   3. Verify the SDK behaves as expected, and your changes took effect
8. Submit a [pull request](https://github.com/PokemonTCG/pokemon-tcg-sdk-typescript/compare)! 🎉

