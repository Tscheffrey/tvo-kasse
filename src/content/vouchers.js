import Shortid from 'shortid'

const vouchers = [
  {
    title: 'Maultaschen gebr.',
    color: '#BADA55',
    price: 6.5,
    deposit: 2.5,
    depositMark: true,
  },
  {
    title: 'Maultaschen Brühe',
    color: '#BADA55',
    price: 5.5,
    deposit: 2.5,
    depositMark: true,
    others: [
      'Maultaschen ohne Kartoffelsalat',
    ],
  },
  {
    title: 'Bier',
    color: 'red',
    price: 2.5,
    deposit: 2,
    others: [
      'Export',
      'Radler',
    ],
  },
  {
    title: 'Kräusen',
    color: 'green',
    price: 2.3,
    deposit: 2,
    depositMark: true,
    others: [
      'Alkoholfrei',
    ],
  },
  {
    title: 'Wein',
    color: 'orange',
    price: 2.5,
    deposit: 2,
  },
  {
    title: 'Weinschorle',
    color: 'orange',
    price: 2,
    deposit: 2,
  },
  {
    title: 'Cola',
    color: 'orange',
    price: 1.5,
    deposit: 0,
    others: [
      'Sprudel',
      'MezzoMix',
    ],
  },
]

for (let voucher of vouchers) {
  voucher.key = Shortid.generate()
}


module.exports = vouchers
