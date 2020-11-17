import * as chai from 'chai';
import { Client } from '../src/client';
import { IQuery } from '../src/interfaces/query';

const expect = chai.expect;
describe('Client', () => {
  it('should get a single using the cards resource and query params' , () => {
    const params: IQuery[] = [{
      name: 'id',
      value: 'xy7-54'
    }];

    Client.get('cards', params)
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0].name).to.equal('Gardevoir');
      });
  });

  it('should get a default list of cards using the cards resource with no query params', () => {
    Client.get('cards')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response.length).to.equal(100);
      });
  });

  it('should get sets using the sets resource and query params', () => {
    const params: IQuery[] = [{
      name: 'name',
      value: 'Base'
    }];

    Client.get('sets', params)
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('object');
      });
  });

  it('should get a single set using the sets resource and query params', () => {
    const params: IQuery[] = [{
      name: 'id',
      value: 'base1'
    }];

    Client.get('sets', params)
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0].name).to.equal('Base');
      });
  });

  it('should get a default list of sets using the sets resource with no query params', () => {
    Client.get('sets')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('object');
        expect(response[0].code).to.equal('base1');
      });
  });

  it('should get a list of types using the types resource', () => {
    Client.get('types')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('string');
      });
  });

  it('should get a list of supertypes using the supertypes resource', () => {
    Client.get('supertypes')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('string');
      });
  });

  it('should get a list of subtypes using the subtypes resource', () => {
    Client.get('subtypes')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('string');
      });
  });
});