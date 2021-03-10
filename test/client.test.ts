import * as chai from 'chai';
import { Client } from '../src/client';
import { Query } from '../src/interfaces/query';
import { Card } from "../src/interfaces/card";
import { Set } from "../src/interfaces/set";

const expect = chai.expect;
const client: Client = Client.getInstance();

describe('Client', () => {
    it('should get a single using the cards resource and query params' , () => {
        const params: Query[] = [{
            name: 'id',
            value: 'xy7-54'
        }];

        client.get<Card[]>('cards', params)
            .then(response => {
                expect(response).to.be.a('array');
                expect(response[0].name).to.equal('Ampharos');
            });
    });

    it('should get a default list of cards using the cards resource with no query params', () => {
        client.get<Card[]>('cards')
            .then(response => {
                expect(response).to.be.a('array');
                expect(response.length).to.equal(250);
            });
    });

    it('should get sets using the sets resource and query params', () => {
        const params: Query[] = [{
            name: 'name',
            value: 'Base'
        }];

        client.get<Set[]>('sets', params)
            .then(response => {
                expect(response).to.be.a('array');
                expect(response[0]).to.be.a('object');
            });
    });

    it('should get a single set using the sets resource and query params', () => {
        const params: Query[] = [{
            name: 'id',
            value: 'base1'
        }];

        client.get<Set[]>('sets', params)
            .then(response => {
                expect(response).to.be.a('array');
                expect(response[0].name).to.equal('Base');
            });
    });

    it('should get a default list of sets using the sets resource with no query params', () => {
        client.get<Set[]>('sets')
            .then(response => {
                expect(response).to.be.a('array');
                expect(response[0]).to.be.a('object');
                expect(response[0].id).to.equal('base1');
            });
    });
});