import { findCardByID, findCardsByQueries, getAllCards } from '../src/services/cardService';
import { Query } from "../src/interfaces/query";
import { Card } from "../src/interfaces/card";

describe('Card Service', () => {
    it('should get a single card using query parameters', async () => {
        const params: Query[] = [{
            name: 'id',
            value: 'xy7-54'
        }]

        const result: Card[] = await findCardsByQueries(params);
        expect(result[0].name).toEqual('Gardevoir');
    })

    it('should get a single card using a card id', async () => {
        const result: Card = await findCardByID('xy7-54');
        expect(result.name).toEqual('Gardevoir');
    })

    it('should get a default list of cards using the cards resource with no query params', async () => {
        const results: Card[] = await getAllCards();
        expect(results).toHaveLength(250);
    });
})