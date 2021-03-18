import { findSetByID, findSetsByQueries, getAllSets } from '../src/services/setService';
import { Parameter } from "../src/interfaces/parameter";
import { Set } from "../src/interfaces/set";

describe('Set Service', () => {
    it('should get a single set using query parameters', async () => {
        const params: Parameter = { q: 'name:Base' };

        const result: Set[] = await findSetsByQueries(params);
        expect(result[0].name).toEqual('Base');
    })

    it('should get a single set using a set id', async () => {
        const result: Set = await findSetByID('base1');
        expect(result.name).toEqual('Base');
    })

    it('should get a default list of sets using the sets resource with no query params', async () => {
        const results: Set[] = await getAllSets();
        expect(results.length).toBeLessThanOrEqual(250);
    });
})