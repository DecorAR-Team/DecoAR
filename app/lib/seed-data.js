const categories = [
  { name: 'Kitchen' },
  { name: 'Living Room' },
  { name: 'Bathroom' },
  { name: 'Bedroom' },
  { name: 'Outdoor' },
  { name: 'Office' },
  { name: 'Kids & Baby' },
  { name: 'Dining' },
  { name: 'Decor' },
  { name: 'Storage & Organization' },
];

const subcategories = [
  {
    subcategory_ikea_id: '10475',
    category_id: { $oid: '66798198ee251e9881be4047' },
    name: 'TV & media furniture',
  },
  {
    subcategory_ikea_id: '10659',
    category_id: { $oid: '66798198ee251e9881be4047' },
    name: 'Decorative pillows & cushion covers',
  },
  {
    subcategory_ikea_id: '10653',
    category_id: { $oid: '66798198ee251e9881be4047' },
    name: 'Rugs',
  },
  {
    subcategory_ikea_id: '30454',
    category_id: { $oid: '66798198ee251e9881be4047' },
    name: 'Living room & entryway tables',
  },
  {
    subcategory_ikea_id: 'fu003',
    category_id: { $oid: '66798198ee251e9881be4047' },
    name: 'Sofas & sectionals',
  },
  {
    subcategory_ikea_id: '10555',
    category_id: { $oid: '66798198ee251e9881be4048' },
    name: 'Bathroom accessories',
  },
  {
    subcategory_ikea_id: '10736',
    category_id: { $oid: '66798198ee251e9881be4048' },
    name: 'Bathroom lighting',
  },
  {
    subcategory_ikea_id: '20719',
    category_id: { $oid: '66798198ee251e9881be4048' },
    name: 'Bathroom vanities',
  },
  {
    subcategory_ikea_id: '20723',
    category_id: { $oid: '66798198ee251e9881be4048' },
    name: 'Bathroom sinks',
  },
  {
    subcategory_ikea_id: 'ba002',
    category_id: { $oid: '66798198ee251e9881be4048' },
    name: 'Bathroom storage',
  },
  {
    subcategory_ikea_id: '19053',
    category_id: { $oid: '66798198ee251e9881be4049' },
    name: 'Armoires & wardrobes',
  },
  {
    subcategory_ikea_id: '20656',
    category_id: { $oid: '66798198ee251e9881be4049' },
    name: 'Nightstands',
  },
  {
    subcategory_ikea_id: '700513',
    category_id: { $oid: '66798198ee251e9881be4049' },
    name: 'Beds with mattresses included',
  },
  {
    subcategory_ikea_id: 'tl004',
    category_id: { $oid: '66798198ee251e9881be4049' },
    name: 'Bedding',
  },
  {
    subcategory_ikea_id: 'st004',
    category_id: { $oid: '66798198ee251e9881be4049' },
    name: 'Dressers & storage drawers',
  },
  {
    subcategory_ikea_id: '17887',
    category_id: { $oid: '66798198ee251e9881be404a' },
    name: 'Outdoor umbrellas, canopies, gazebos & more',
  },
  {
    subcategory_ikea_id: '17893',
    category_id: { $oid: '66798198ee251e9881be404a' },
    name: 'Outdoor cushions',
  },
  {
    subcategory_ikea_id: '17897',
    category_id: { $oid: '66798198ee251e9881be404a' },
    name: 'Outdoor lighting',
  },
  {
    subcategory_ikea_id: '34204',
    category_id: { $oid: '66798198ee251e9881be404a' },
    name: 'Outdoor rugs',
  },
  {
    subcategory_ikea_id: '700349',
    category_id: { $oid: '66798198ee251e9881be404a' },
    name: 'Outdoor kitchen & accessories',
  },
  {
    subcategory_ikea_id: 'fu004',
    category_id: { $oid: '66798198ee251e9881be404b' },
    name: 'Tables & desks',
  },
  {
    subcategory_ikea_id: 'fu002',
    category_id: { $oid: '66798198ee251e9881be404b' },
    name: 'Chairs',
  },

  {
    subcategory_ikea_id: '46052',
    category_id: { $oid: '66798198ee251e9881be404b' },
    name: 'Storage solution systems',
  },
  {
    subcategory_ikea_id: '10574',
    category_id: { $oid: '66798198ee251e9881be404b' },
    name: 'Bulletin boards, peg boards, pin boards & more',
  },
  {
    subcategory_ikea_id: '16195',
    category_id: { $oid: '66798198ee251e9881be404b' },
    name: 'Cable management & cord organizers',
  },

  {
    subcategory_ikea_id: '18690',
    category_id: { $oid: '66798198ee251e9881be404c' },
    name: 'Baby textiles',
  },
  {
    subcategory_ikea_id: '18767',
    category_id: { $oid: '66798198ee251e9881be404c' },
    name: 'Kids furniture',
  },
  {
    subcategory_ikea_id: '45780',
    category_id: { $oid: '66798198ee251e9881be404c' },
    name: 'Nursery furniture',
  },
  {
    subcategory_ikea_id: '18706',
    category_id: { $oid: '66798198ee251e9881be404c' },
    name: 'Kids storage & organization',
  },
  {
    subcategory_ikea_id: '18714',
    category_id: { $oid: '66798198ee251e9881be404c' },
    name: 'Kids tableware & dinnerware',
  },

  {
    subcategory_ikea_id: '10550',
    category_id: { $oid: '66798198ee251e9881be404f' },
    name: 'Storage boxes & organization bins',
  },
  {
    subcategory_ikea_id: '19059',
    category_id: { $oid: '66798198ee251e9881be404f' },
    name: 'Underbed storage bags & bins',
  },

  {
    subcategory_ikea_id: '24255',
    category_id: { $oid: '66798198ee251e9881be404f' },
    name: 'Kitchen drawer organization',
  },
  {
    subcategory_ikea_id: '48925',
    category_id: { $oid: '66798198ee251e9881be404f' },
    name: 'Laundry cabinets & shelving',
  },

  {
    subcategory_ikea_id: '10471',
    category_id: { $oid: '66798544ee251e9881be4060' },
    name: 'Kitchen islands & carts',
  },
  {
    subcategory_ikea_id: '15934',
    category_id: { $oid: '66798544ee251e9881be4060' },
    name: 'Knives & cutting boards',
  },
  {
    subcategory_ikea_id: '15937',
    category_id: { $oid: '66798544ee251e9881be4060' },
    name: 'Food storage & organizing',
  },
  {
    subcategory_ikea_id: '15938',
    category_id: { $oid: '66798544ee251e9881be4060' },
    name: 'Dishwashing accessories',
  },
  {
    subcategory_ikea_id: '18850',
    category_id: { $oid: '66798544ee251e9881be4060' },
    name: 'Kitchen linens & textiles',
  },

  {
    subcategory_ikea_id: '18850',
    category_id: { $oid: '66798198ee251e9881be404e' },
    name: 'Wall décor',
  },
  {
    subcategory_ikea_id: '18850',
    category_id: { $oid: '66798198ee251e9881be404e' },
    name: 'Clocks',
  },
  {
    subcategory_ikea_id: '18850',
    category_id: { $oid: '66798198ee251e9881be404e' },
    name: 'Candle holders & candles',
  },
  {
    subcategory_ikea_id: '18850',
    category_id: { $oid: '66798198ee251e9881be404e' },
    name: 'Vases & decorating bowls',
  },
  {
    subcategory_ikea_id: '18850',
    category_id: { $oid: '66798198ee251e9881be404e' },
    name: 'Table decor & decorative accessories',
  },
];

module.exports = { categories, subcategories };
