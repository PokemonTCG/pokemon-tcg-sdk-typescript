import { findCardByID, findCardsByQueries, getAllCards, getSupertypes, getSubtypes, getTypes, getRarities } from "../src/services/cardService";
import { Parameter } from "../src/interfaces/parameter";
import { Card } from "../src/interfaces/card";
import { Type } from '../src/enums/type';
import { Supertype } from '../src/enums/supertype';
import { Subtype } from '../src/enums/subtype';
import { Rarity } from '../src/enums/rarity';

describe('Card Service', () => {
    it('should get a single card using query parameters', async () => {
        const params: Parameter = { q: 'id:xy7-54' }

        const result: Card[] = await findCardsByQueries(params);
        expect(result[0].name).toEqual('Gardevoir');
    })

    it('should get a single card using a card id', async () => {
        const result: Card = await findCardByID('xy7-54');
        expect(result.name).toEqual('Gardevoir');
    })

    it('should get a default list of cards using the cards resource with no query params', async () => {
        const totalCards = 13438;
        const results: Card[] = await getAllCards();
        expect(results).toHaveLength(totalCards);
    });

    it('should get a list of card supertypes', async () => {
        const expected: Supertype[] = Object.values(Supertype);
        const result: Supertype[] = await getSupertypes();

        expect(expected.sort()).toEqual(result.sort());
    });

    it('should get a list of card subtypes', async () => {
        const expected: Subtype[] = Object.values(Subtype);
        const result: Subtype[] = await getSubtypes();

        expect(expected.sort()).toEqual(result.sort());
    });

    it('should get a list of card rarities', async () => {
        const expected: Rarity[] = Object.values(Rarity);
        const result: Rarity[] = await getRarities();

        expect(expected.sort()).toEqual(result.sort());
    });

    it('should get a list of card types', async () => {
        const expected: Type[] = Object.values(Type);
        const result: Type[] = await getTypes();

        expect(expected.sort()).toEqual(result.sort());
    });
})