import Shortid from 'shortid'

const vouchers = [
  {
    title: 'Maultaschen gebr.',
    color: '#e68568',
    price: 6.5,
    deposit: 2.5,
    depositMark: true,
  },
  {
    title: 'Maultaschen Brühe',
    color: '#c9cab6',
    price: 5.5,
    deposit: 2.5,
    depositMark: true,
    others: [
      'Maultaschen ohne Kartoffelsalat',
    ],
  },
  {
    title: 'Bier',
    color: '#fbee4f',
    price: 2.5,
    deposit: 2,
    others: [
      'Export',
      'Radler',
    ],
  },
  {
    title: 'Kräusen',
    color: '#fff',
    price: 2.3,
    deposit: 2,
    depositMark: true,
    others: [
      'Alkoholfrei',
    ],
  },
  {
    title: 'Apfelschorle',
    color: '#e9e7e7',
    price: 2,
    deposit: 0,
    depositMark: true,
    others: [
      'Alkoholfrei',
    ],
  },
  {
    title: 'Wein',
    color: '#b0cb8b',
    price: 2.5,
    deposit: 2,
  },
  {
    title: 'Weinschorle',
    color: '#fffba8',
    price: 2,
    deposit: 2,
  },
  {
    title: 'Cola',
    color: '#c0deec',
    price: 1.5,
    deposit: 0,
    others: [
      'Sprudel',
      'MezzoMix',
    ],
  },
  {
    title: 'Portion Kartoffelsalat',
    color: '#ec9696',
    price: 1.5,
    deposit: 0,
    others: [
      'leeres Glas',
      'Schnaps',
    ],
  },
]

for (let voucher of vouchers) {
  voucher.key = Shortid.generate()
}


module.exports = vouchers
