import { Card } from '../classes/card';
import { QueryBuilder } from '../queryBuilder';
import * as chai from 'chai';
import * as mocha from 'mocha';
import { IQuery } from '../interfaces/query';

const expect = chai.expect;
describe('QueryBuilder', () => {
  it('should use find to get a single instance', () => {
    QueryBuilder.find<Card>(Card, 'xy7-54')
      .then(card => {
        expect(card).to.be.a('object');
        expect(card.name).to.equal('Gardevoir');
      })
      .catch(error => console.error(error));
  });

  it('should use where to filter data', () => {
    const params: IQuery[] = [
      {
        name: 'name',
        value: 'Charizard'
  
      },
      {
        name: 'setCode',
        value: 'base1'
      }
    ];

    QueryBuilder.where<Card>(Card, params)
      .then(cards => {
        expect(cards.length).to.equal(1);
        expect(cards[0].id).to.equal('base1-4');
        expect(cards[0].set).to.equal('Base');
      })
      .catch(error => console.error(error));
  });

  it('should use all to get all cards', () => {
    QueryBuilder.all<Card>(Card)
      .then(cards => {
        expect(cards.length).to.equal(1000);
      })
      .catch(error => console.error(error));
  });
});