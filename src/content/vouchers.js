import Shortid from 'shortid'

const vouchers = [
  {
    key: Shortid.generate(),
    title: 'Maultaschen gebr.',
    color: '#BADA55',
    price: 6.5,
    deposit: 2.5,
    depositMark: true,
    others: [
      'test1',
      'test2',
      'test3',
    ]
  },
  {
    key: Shortid.generate(),
    title: 'Bier',
    color: 'red',
    price: 2.5,
    deposit: 2,
  },
  {
    key: Shortid.generate(),
    title: 'Kräusen',
    color: 'green',
    price: 2.3,
    deposit: 2,
    depositMark: true,
    deposit: 2,
  },
  {
    key: Shortid.generate(),
    title: 'Wein',
    color: 'orange',
    price: 2.5,
    deposit: 0,
  },
]


module.exports = vouchers
