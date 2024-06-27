const categories = [
  {
    _id: {
      $oid: '66798544ee251e9881be4060',
    },
    name: 'Kitchen',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be4047',
    },
    name: 'Living Room',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be4048',
    },
    name: 'Bathroom',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be4049',
    },
    name: 'Bedroom',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be404a',
    },
    name: 'Outdoor',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be404b',
    },
    name: 'Office',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be404c',
    },
    name: 'Kids & Baby',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be404e',
    },
    name: 'Decor',
  },
  {
    _id: {
      $oid: '66798198ee251e9881be404f',
    },
    name: 'Storage & Organization',
  },
];

const subcategories = [
  {
    _id: {
      $oid: '667aac74547fb73491fc8ce4',
    },
    subcategory_ikea_id: '10475',
    category_id: {
      $oid: '66798198ee251e9881be4047',
    },
    name: 'TV & media furniture',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-hedeviken-stubbarp-oak-veneer__0999553_pe823672_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ce5',
    },
    subcategory_ikea_id: '10659',
    category_id: {
      $oid: '66798198ee251e9881be4047',
    },
    name: 'Decorative pillows & cushion covers',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-dark-blue__0888821_pe623735_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ce6',
    },
    subcategory_ikea_id: '10653',
    category_id: {
      $oid: '66798198ee251e9881be4047',
    },
    name: 'Rugs',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ce7',
    },
    subcategory_ikea_id: '30454',
    category_id: {
      $oid: '66798198ee251e9881be4047',
    },
    name: 'Living room & entryway tables',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0427715_pe583066_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ce8',
    },
    subcategory_ikea_id: 'fu003',
    category_id: {
      $oid: '66798198ee251e9881be4047',
    },
    name: 'Sofas & sectionals',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-light-beige__1124121_pe875025_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ce9',
    },
    subcategory_ikea_id: '10555',
    category_id: {
      $oid: '66798198ee251e9881be4048',
    },
    name: 'Bathroom accessories',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-black__1278772_pe944164_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cea',
    },
    subcategory_ikea_id: '10736',
    category_id: {
      $oid: '66798198ee251e9881be4048',
    },
    name: 'Bathroom lighting',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-anthracite__0969496_pe810801_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ceb',
    },
    subcategory_ikea_id: '20719',
    category_id: {
      $oid: '66798198ee251e9881be4048',
    },
    name: 'Bathroom vanities',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cec',
    },
    subcategory_ikea_id: '20723',
    category_id: {
      $oid: '66798198ee251e9881be4048',
    },
    name: 'Bathroom sinks',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8ced',
    },
    subcategory_ikea_id: 'ba002',
    category_id: {
      $oid: '66798198ee251e9881be4048',
    },
    name: 'Bathroom storage',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/finningen-shower-shelf-black__0981045_pe815248_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cee',
    },
    subcategory_ikea_id: '19053',
    category_id: {
      $oid: '66798198ee251e9881be4049',
    },
    name: 'Armoires & wardrobes',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-white__1268954_pe928893_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cef',
    },
    subcategory_ikea_id: '20656',
    category_id: {
      $oid: '66798198ee251e9881be4049',
    },
    name: 'Nightstands',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-nightstand-black__1326549_pe944271_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf0',
    },
    subcategory_ikea_id: '700513',
    category_id: {
      $oid: '66798198ee251e9881be4049',
    },
    name: 'Beds with mattresses included',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-vesteroey-medium-firm__1101514_pe866693_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf1',
    },
    subcategory_ikea_id: 'tl004',
    category_id: {
      $oid: '66798198ee251e9881be4049',
    },
    name: 'Bedding',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-green-stripe__0883243_pe692782_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf2',
    },
    subcategory_ikea_id: 'st004',
    category_id: {
      $oid: '66798198ee251e9881be4049',
    },
    name: 'Dressers & storage drawers',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white__1154585_pe886214_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf3',
    },
    subcategory_ikea_id: '17887',
    category_id: {
      $oid: '66798198ee251e9881be404a',
    },
    name: 'Outdoor umbrellas, canopies, gazebos & more',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-beige-tilting__1216882_pe912540_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf4',
    },
    subcategory_ikea_id: '17893',
    category_id: {
      $oid: '66798198ee251e9881be404a',
    },
    name: 'Outdoor cushions',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf5',
    },
    subcategory_ikea_id: '17897',
    category_id: {
      $oid: '66798198ee251e9881be404a',
    },
    name: 'Outdoor lighting',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-floor-lamp-battery-operated-outdoor__1237050_pe917802_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf6',
    },
    subcategory_ikea_id: '34204',
    category_id: {
      $oid: '66798198ee251e9881be404a',
    },
    name: 'Outdoor rugs',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf7',
    },
    subcategory_ikea_id: '700349',
    category_id: {
      $oid: '66798198ee251e9881be404a',
    },
    name: 'Outdoor kitchen & accessories',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf8',
    },
    subcategory_ikea_id: 'fu004',
    category_id: {
      $oid: '66798198ee251e9881be404b',
    },
    name: 'Tables & desks',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-yellow__1295983_pe935638_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cf9',
    },
    subcategory_ikea_id: 'fu002',
    category_id: {
      $oid: '66798198ee251e9881be404b',
    },
    name: 'Chairs',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-light-beige__0837298_pe666936_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cfa',
    },
    subcategory_ikea_id: '46052',
    category_id: {
      $oid: '66798198ee251e9881be404b',
    },
    name: 'Storage solution systems',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/ivar-shelf-unit-pine__1288311_pe934155_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cfb',
    },
    subcategory_ikea_id: '10574',
    category_id: {
      $oid: '66798198ee251e9881be404b',
    },
    name: 'Bulletin boards, peg boards, pin boards & more',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__1165860_pe890993_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cfc',
    },
    subcategory_ikea_id: '16195',
    category_id: {
      $oid: '66798198ee251e9881be404b',
    },
    name: 'Cable management & cord organizers',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/signum-cable-management-horizontal-silver-color__0256614_pe400752_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cfd',
    },
    subcategory_ikea_id: '18690',
    category_id: {
      $oid: '66798198ee251e9881be404c',
    },
    name: 'Baby textiles',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/droemslott-baby-blanket-puppy-pattern-dot-pattern-multicolor__1056642_pe848442_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cfe',
    },
    subcategory_ikea_id: '18767',
    category_id: {
      $oid: '66798198ee251e9881be404c',
    },
    name: 'Kids furniture',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8cff',
    },
    subcategory_ikea_id: '45780',
    category_id: {
      $oid: '66798198ee251e9881be404c',
    },
    name: 'Nursery furniture',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0876101_pe649630_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d00',
    },
    subcategory_ikea_id: '18706',
    category_id: {
      $oid: '66798198ee251e9881be404c',
    },
    name: 'Kids storage & organization',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d01',
    },
    subcategory_ikea_id: '18714',
    category_id: {
      $oid: '66798198ee251e9881be404c',
    },
    name: 'Kids tableware & dinnerware',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/kalas-tumbler-mixed-colors__0998032_pe822923_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d02',
    },
    subcategory_ikea_id: '10550',
    category_id: {
      $oid: '66798198ee251e9881be404f',
    },
    name: 'Storage boxes & organization bins',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/tigerfink-storage-with-compartments-turquoise__1092598_pe862931_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d03',
    },
    subcategory_ikea_id: '19059',
    category_id: {
      $oid: '66798198ee251e9881be404f',
    },
    name: 'Underbed storage bags & bins',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-blue__1330508_pe945707_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d04',
    },
    subcategory_ikea_id: '24255',
    category_id: {
      $oid: '66798198ee251e9881be404f',
    },
    name: 'Kitchen drawer organization',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/stoedja-flatware-tray-white__0260314_pe404031_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d05',
    },
    subcategory_ikea_id: '48925',
    category_id: {
      $oid: '66798198ee251e9881be404f',
    },
    name: 'Laundry cabinets & shelving',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d06',
    },
    subcategory_ikea_id: '10471',
    category_id: {
      $oid: '66798544ee251e9881be4060',
    },
    name: 'Kitchen islands & carts',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/vesken-cart-white__0832010_pe777549_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d07',
    },
    subcategory_ikea_id: '15934',
    category_id: {
      $oid: '66798544ee251e9881be4060',
    },
    name: 'Knives & cutting boards',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/aptitlig-cutting-board-bamboo__0896405_pe609820_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d08',
    },
    subcategory_ikea_id: '15937',
    category_id: {
      $oid: '66798544ee251e9881be4060',
    },
    name: 'Food storage & organizing',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-large-rectangular-stainless-steel-plastic__1301433_pe937427_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d09',
    },
    subcategory_ikea_id: '15938',
    category_id: {
      $oid: '66798544ee251e9881be4060',
    },
    name: 'Dishwashing accessories',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/staemling-dish-drainer-off-white__1274936_pe930496_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d0a',
    },
    subcategory_ikea_id: '18850',
    category_id: {
      $oid: '66798544ee251e9881be4060',
    },
    name: 'Kitchen linens & textiles',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/mariatheres-childrens-apron-beige__0918057_pe786117_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d0b',
    },
    subcategory_ikea_id: '10757',
    category_id: {
      $oid: '66798198ee251e9881be404e',
    },
    name: 'Wall décor',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/knoppaeng-frame-with-poster-set-of-8-flower-market__1244657_pe921235_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d0c',
    },
    subcategory_ikea_id: '10759',
    category_id: {
      $oid: '66798198ee251e9881be404e',
    },
    name: 'Clocks',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/pluttis-wall-clock-black__1013115_pe829056_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d0d',
    },
    subcategory_ikea_id: '10760',
    category_id: {
      $oid: '66798198ee251e9881be404e',
    },
    name: 'Candle holders & candles',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/finsmak-tealight-holder-clear-glass__0966528_pe809828_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d0e',
    },
    subcategory_ikea_id: '10769',
    category_id: {
      $oid: '66798198ee251e9881be404e',
    },
    name: 'Vases & decorating bowls',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/stilren-vase-white__1091034_pe862271_s5.jpg',
  },
  {
    _id: {
      $oid: '667aac74547fb73491fc8d0f',
    },
    subcategory_ikea_id: '24924',
    category_id: {
      $oid: '66798198ee251e9881be404e',
    },
    name: 'Table decor & decorative accessories',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/traedgraensen-wall-decoration-set-of-2-ceramic-stones-beige__1168084_pe891772_s5.jpg',
  },
];

const products = [
  {
    id: 's19566512',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 256,
      discounted: false,
    },
    measurement: '47 1/4x16 1/2x18 7/8 "',
    typeName: 'TV bench with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-hedeviken-stubbarp-oak-veneer__0992038_pe819771_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-hedeviken-stubbarp-oak-veneer__0999553_pe823672_s5.jpg',
    imageAlt:
      'BESTÅ TV bench with doors, black-brown/Hedeviken/Stubbarp oak veneer, 47 1/4x16 1/2x18 7/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-black-brown-hedeviken-stubbarp-oak-veneer-s19566512/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: 's09566541',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 256,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x18 7/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bjoerkoeviken-stubbarp-birch-veneer__0992040_pe819770_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bjoerkoeviken-stubbarp-birch-veneer__0999588_pe823638_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white Björköviken/Stubbarp/birch veneer, 47 1/4x16 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bjoerkoeviken-stubbarp-birch-veneer-s09566541/',
      },
      {
        id: 's59566505',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 276,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x18 7/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-oesarp-beige__0985440_pe816778_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-oesarp-beige__0999618_pe823652_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Bergsviken/Ösarp beige, 47 1/4x16 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bergsviken-oesarp-beige-s59566505/',
      },
      {
        id: 's19566507',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 256,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x18 7/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-stubbarp-brown-stained-oak-veneer__0992037_pe819767_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-stubbarp-brown-stained-oak-veneer__0999549_pe823617_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, black-brown Björköviken/Stubbarp/brown stained oak veneer, 47 1/4x16 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-stubbarp-brown-stained-oak-veneer-s19566507/',
      },
      {
        id: 's19564198',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 242,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x18 7/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-dark-gray-moertviken-stubbarp-dark-gray__1209169_pe909077_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-dark-gray-moertviken-stubbarp-dark-gray__1255236_pe924457_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, dark gray/Mörtviken/Stubbarp dark gray, 47 1/4x16 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-dark-gray-moertviken-stubbarp-dark-gray-s19564198/',
      },
      {
        id: 's09566503',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 276,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x18 7/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-oesarp-black__0985423_pe816795_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-oesarp-black__0999584_pe823670_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white Bergsviken/Ösarp/black, 47 1/4x16 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bergsviken-oesarp-black-s09566503/',
      },
      {
        id: 's59566548',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 246,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x18 7/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-laxviken-stubbarp-white__0985443_pe816776_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-laxviken-stubbarp-white__0999604_pe823686_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white Laxviken/Stubbarp/white, 47 1/4x16 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-laxviken-stubbarp-white-s59566548/',
      },
    ],
  },
  {
    id: 's49568048',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 200,
      discounted: false,
    },
    measurement: '70 7/8x16 1/2x15 "',
    typeName: 'TV unit with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-lappviken-white__0719188_pe731908_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-lappviken-white__0723576_pe734034_s5.jpg',
    imageAlt:
      'BESTÅ TV unit with doors, white/Lappviken white, 70 7/8x16 1/2x15 "',
    url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-doors-white-lappviken-white-s49568048/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: 's29568054',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 185,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 "',
        typeName: 'TV unit with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-stained-oak-effect-lappviken-white-stained-oak-effect__0719192_pe731910_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-stained-oak-effect-lappviken-white-stained-oak-effect__0843366_pe535714_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with doors, white stained oak effect/Lappviken white stained oak effect, 70 7/8x16 1/2x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-doors-white-stained-oak-effect-lappviken-white-stained-oak-effect-s29568054/',
      },
      {
        id: 's39568044',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 320,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-beige__0993145_pe820443_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-beige__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Bergsviken beige, 70 7/8x16 1/2x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bergsviken-beige-s39568044/',
      },
      {
        id: 's09568026',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 320,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-brown-stained-oak-veneer__0993133_pe820433_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-brown-stained-oak-veneer__0843438_pe535720_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, black-brown Björköviken/brown stained oak veneer, 70 7/8x16 1/2x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-brown-stained-oak-veneer-s09568026/',
      },
      {
        id: 's59575171',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 284,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-moertviken-dark-gray__1356810_pe953440_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-moertviken-dark-gray__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Mörtviken dark gray, 70 7/8x16 1/2x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-moertviken-dark-gray-s59575171/',
      },
      {
        id: 's59568043',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 320,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-black__0993144_pe820442_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-black__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Bergsviken black, 70 7/8x16 1/2x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bergsviken-black-s59568043/',
      },
      {
        id: 's29568049',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 284,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-moertviken-white__0993154_pe820422_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-moertviken-white__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Mörtviken white, 70 7/8x16 1/2x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-moertviken-white-s29568049/',
      },
    ],
  },
  {
    id: '40565775',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 80,
      discounted: false,
    },
    measurement: '70 7/8x15 3/4x15 "',
    typeName: 'TV unit',
    image:
      'https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0316226_pe516834_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0843438_pe535720_s5.jpg',
    imageAlt: 'BESTÅ TV unit, black-brown, 70 7/8x15 3/4x15 "',
    url: 'https://www.ikea.com/us/en/p/besta-tv-unit-black-brown-40565775/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: '00576002',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 65,
          discounted: false,
        },
        measurement: '47 1/4x15 3/4x15 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-white-stained-oak-effect__0316213_pe516848_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-white-stained-oak-effect__0843366_pe535714_s5.jpg',
        imageAlt: 'BESTÅ TV unit, white stained oak effect, 47 1/4x15 3/4x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-white-stained-oak-effect-00576002/',
      },
      {
        id: '20576001',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: false,
        },
        measurement: '70 7/8x15 3/4x15 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-white-stained-oak-effect__0316235_pe516838_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-white-stained-oak-effect__0843366_pe535714_s5.jpg',
        imageAlt: 'BESTÅ TV unit, white stained oak effect, 70 7/8x15 3/4x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-white-stained-oak-effect-20576001/',
      },
      {
        id: '50566034',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: false,
        },
        measurement: '47 1/4x15 3/4x25 1/4 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0316215_pe516839_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0843438_pe535720_s5.jpg',
        imageAlt: 'BESTÅ TV unit, black-brown, 47 1/4x15 3/4x25 1/4 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-black-brown-50566034/',
      },
      {
        id: '90566032',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 65,
          discounted: false,
        },
        measurement: '47 1/4x15 3/4x15 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0316202_pe516844_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0843438_pe535720_s5.jpg',
        imageAlt: 'BESTÅ TV unit, black-brown, 47 1/4x15 3/4x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-black-brown-90566032/',
      },
      {
        id: '20575228',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 130,
          discounted: false,
        },
        measurement: '70 7/8x15 3/4x25 1/4 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-dark-gray__1219611_pe913488_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-dark-gray__1255236_pe924457_s5.jpg',
        imageAlt: 'BESTÅ TV unit, dark gray, 70 7/8x15 3/4x25 1/4 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-dark-gray-20575228/',
      },
      {
        id: '00565777',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: false,
        },
        measurement: '70 7/8x15 3/4x15 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-white__0376997_pe516837_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-white__0843389_pe535717_s5.jpg',
        imageAlt: 'BESTÅ TV unit, white, 70 7/8x15 3/4x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-white-00565777/',
      },
    ],
  },
  {
    id: 's99567225',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 205,
      discounted: false,
    },
    measurement: '70 7/8x16 1/2x15 3/8 "',
    typeName: 'TV unit with drawers and door',
    image:
      'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-stained-oak-effect-lappviken-white-stained-oak-effect__0343350_pe535930_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-stained-oak-effect-lappviken-white-stained-oak-effect__0761024_pe751049_s5.jpg',
    imageAlt:
      'BESTÅ TV unit with drawers and door, white stained oak effect/Lappviken white stained oak effect, 70 7/8x16 1/2x15 3/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-white-stained-oak-effect-lappviken-white-stained-oak-effect-s99567225/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: 's09567197',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 215,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 3/8 "',
        typeName: 'TV unit with drawers and door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-stained-oak-effect-lappviken-white-stained-oak-effect__0343350_pe535930_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-stained-oak-effect-lappviken-white-stained-oak-effect__0761024_pe751049_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with drawers and door, white stained oak effect/Lappviken white stained oak effect, 70 7/8x16 1/2x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-white-stained-oak-effect-lappviken-white-stained-oak-effect-s09567197/',
      },
      {
        id: 's09567178',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 336,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 3/8 "',
        typeName: 'TV unit with drawers and door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-black-brown-hedeviken-dark-brown-stained-oak-veneer__0994256_pe820914_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-black-brown-hedeviken-dark-brown-stained-oak-veneer__0843438_pe535720_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with drawers and door, black-brown Hedeviken/dark brown stained oak veneer, 70 7/8x16 1/2x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-black-brown-hedeviken-dark-brown-stained-oak-veneer-s09567178/',
      },
      {
        id: 's09572981',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 230,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 3/8 "',
        typeName: 'TV unit with drawers and door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-lappviken-dark-gray__1356799_pe953435_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-lappviken-dark-gray__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with drawers and door, white/Lappviken dark gray, 70 7/8x16 1/2x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-white-lappviken-dark-gray-s09572981/',
      },
      {
        id: 's19567187',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 336,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 3/8 "',
        typeName: 'TV unit with drawers and door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-bergsviken-black__0988819_pe818244_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-bergsviken-black__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with drawers and door, white/Bergsviken black, 70 7/8x16 1/2x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-white-bergsviken-black-s19567187/',
      },
      {
        id: 's09567220',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 311,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 3/8 "',
        typeName: 'TV unit with drawers and door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-laxviken-white__1012784_pe828994_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-white-laxviken-white__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with drawers and door, white/Laxviken white, 70 7/8x16 1/2x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-white-laxviken-white-s09567220/',
      },
      {
        id: 's79567207',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 230,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x15 3/8 "',
        typeName: 'TV unit with drawers and door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-black-brown-lappviken-black-brown__0334631_pe527586_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-unit-with-drawers-and-door-black-brown-lappviken-black-brown__0761020_pe751034_s5.jpg',
        imageAlt:
          'BESTÅ TV unit with drawers and door, black-brown/Lappviken black-brown, 70 7/8x16 1/2x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-unit-with-drawers-and-door-black-brown-lappviken-black-brown-s79567207/',
      },
    ],
  },
  {
    id: '40569486',
    name: 'BRIMNES',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '70 7/8x16 1/8x20 7/8 "',
    typeName: 'TV unit',
    image:
      'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0704610_pe725291_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg',
    imageAlt: 'BRIMNES TV unit, black, 70 7/8x16 1/8x20 7/8 "',
    url: 'https://www.ikea.com/us/en/p/brimnes-tv-unit-black-40569486/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: '70409873',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '70 7/8x16 1/8x20 7/8 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0704610_pe725291_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg',
        imageAlt: 'BRIMNES TV unit, black, 70 7/8x16 1/8x20 7/8 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-tv-unit-black-70409873/',
      },
      {
        id: '20569487',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '70 7/8x16 1/8x20 7/8 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-white__0601754_pe681623_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-white__0850789_pe725297_s5.jpg',
        imageAlt: 'BRIMNES TV unit, white, 70 7/8x16 1/8x20 7/8 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-tv-unit-white-20569487/',
      },
    ],
  },
  {
    id: 's29494666',
    name: 'SKRUVBY',
    price: {
      currency: 'USD',
      currentPrice: 198.99,
      discounted: false,
    },
    measurement: '85x15x55 1/8 "',
    typeName: 'TV storage combination',
    image:
      'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-black-blue__1130672_pe877919_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-black-blue__1142309_pe881229_s5.jpg',
    imageAlt: 'SKRUVBY TV storage combination, black-blue, 85x15x55 1/8 "',
    url: 'https://www.ikea.com/us/en/p/skruvby-tv-storage-combination-black-blue-s29494666/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV & media storage',
        key: '14885',
      },
    ],
    variants: [
      {
        id: 's99494658',
        name: 'SKRUVBY',
        price: {
          currency: 'USD',
          currentPrice: 188.99,
          discounted: false,
        },
        measurement: '89x15x35 3/8 "',
        typeName: 'TV storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-black-blue__1130675_pe877921_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-black-blue__1142308_pe881228_s5.jpg',
        imageAlt: 'SKRUVBY TV storage combination, black-blue, 89x15x35 3/8 "',
        url: 'https://www.ikea.com/us/en/p/skruvby-tv-storage-combination-black-blue-s99494658/',
      },
      {
        id: 's59494660',
        name: 'SKRUVBY',
        price: {
          currency: 'USD',
          currentPrice: 188.99,
          discounted: false,
        },
        measurement: '89x15x35 3/8 "',
        typeName: 'TV storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-white__1130676_pe877922_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-white__1142306_pe881226_s5.jpg',
        imageAlt: 'SKRUVBY TV storage combination, white, 89x15x35 3/8 "',
        url: 'https://www.ikea.com/us/en/p/skruvby-tv-storage-combination-white-s59494660/',
      },
      {
        id: 's89494668',
        name: 'SKRUVBY',
        price: {
          currency: 'USD',
          currentPrice: 198.99,
          discounted: false,
        },
        measurement: '85x15x55 1/8 "',
        typeName: 'TV storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-white__1130674_pe877920_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skruvby-tv-storage-combination-white__1142307_pe881231_s5.jpg',
        imageAlt: 'SKRUVBY TV storage combination, white, 85x15x55 1/8 "',
        url: 'https://www.ikea.com/us/en/p/skruvby-tv-storage-combination-white-s89494668/',
      },
    ],
  },
  {
    id: 's19572749',
    name: 'BRIMNES',
    price: {
      currency: 'USD',
      currentPrice: 477.99,
      discounted: false,
    },
    measurement: '126x16 1/8x74 3/4 "',
    typeName: 'TV storage combination/glass doors',
    image:
      'https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-white__0619452_pe689095_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-white__0850809_pe689096_s5.jpg',
    imageAlt:
      'BRIMNES TV storage combination/glass doors, white, 126x16 1/8x74 3/4 "',
    url: 'https://www.ikea.com/us/en/p/brimnes-tv-storage-combination-glass-doors-white-s19572749/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV & media storage',
        key: '14885',
      },
    ],
    variants: [
      {
        id: 's19278229',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 477.99,
          discounted: false,
        },
        measurement: '126x16 1/8x74 3/4 "',
        typeName: 'TV storage combination/glass doors',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-black__0724175_pe734355_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-black__0849973_pe725295_s5.jpg',
        imageAlt:
          'BRIMNES TV storage combination/glass doors, black, 126x16 1/8x74 3/4 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-tv-storage-combination-glass-doors-black-s19278229/',
      },
      {
        id: 's39572748',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 477.99,
          discounted: false,
        },
        measurement: '126x16 1/8x74 3/4 "',
        typeName: 'TV storage combination/glass doors',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-black__0724175_pe734355_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-black__0849973_pe725295_s5.jpg',
        imageAlt:
          'BRIMNES TV storage combination/glass doors, black, 126x16 1/8x74 3/4 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-tv-storage-combination-glass-doors-black-s39572748/',
      },
    ],
  },
  {
    id: '10413528',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 249.99,
      discounted: false,
    },
    measurement: '58 1/4x18 1/2x22 1/2 "',
    typeName: 'TV unit',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-white-stain-light-brown__0583377_pe671187_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-white-stain-light-brown__0850139_pe671188_s5.jpg',
    imageAlt: 'HEMNES TV unit, white stain/light brown, 58 1/4x18 1/2x22 1/2 "',
    url: 'https://www.ikea.com/us/en/p/hemnes-tv-unit-white-stain-light-brown-10413528/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: '10566050',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 249.99,
          discounted: false,
        },
        measurement: '58 1/4x18 1/2x22 1/2 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-black-brown-light-brown__0806989_pe770202_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-black-brown-light-brown__0834415_pe778300_s5.jpg',
        imageAlt:
          'HEMNES TV unit, black-brown/light brown, 58 1/4x18 1/2x22 1/2 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-tv-unit-black-brown-light-brown-10566050/',
      },
      {
        id: '30334506',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 249.99,
          discounted: false,
        },
        measurement: '58 1/4x18 1/2x22 1/2 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-black-brown__0625361_pe692211_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-black-brown__0679553_pe719634_s5.jpg',
        imageAlt: 'HEMNES TV unit, black-brown, 58 1/4x18 1/2x22 1/2 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-tv-unit-black-brown-30334506/',
      },
      {
        id: '90381731',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 229.99,
          discounted: true,
        },
        measurement: '58 1/4x18 1/2x22 1/2 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-dark-gray-stained__0531274_pe647229_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-dark-gray-stained__0851330_pe647231_s5.jpg',
        imageAlt: 'HEMNES TV unit, dark gray stained, 58 1/4x18 1/2x22 1/2 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-tv-unit-dark-gray-stained-90381731/',
      },
      {
        id: '40349569',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 249.99,
          discounted: false,
        },
        measurement: '58 1/4x18 1/2x22 1/2 "',
        typeName: 'TV unit',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-white-stain__0644455_pe702706_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-tv-unit-white-stain__0679567_pe719638_s5.jpg',
        imageAlt: 'HEMNES TV unit, white stain, 58 1/4x18 1/2x22 1/2 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-tv-unit-white-stain-40349569/',
      },
    ],
  },
  {
    id: 's99568569',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 420,
      discounted: false,
    },
    measurement: '94 1/2x16 1/2x29 1/8 "',
    typeName: 'TV bench with doors and drawers',
    image:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-lappviken-stubbarp-white__0719167_pe731896_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-lappviken-stubbarp-white__0843389_pe535717_s5.jpg',
    imageAlt:
      'BESTÅ TV bench with doors and drawers, white/Lappviken/Stubbarp white, 94 1/2x16 1/2x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-white-lappviken-stubbarp-white-s99568569/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: 's59568571',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 355,
          discounted: false,
        },
        measurement: '94 1/2x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors and drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0719169_pe731895_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0843366_pe535714_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors and drawers, white stained oak effect/Lappviken/Stubbarp white stained oak effect, 94 1/2x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect-s59568571/',
      },
      {
        id: 's59568585',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 365,
          discounted: false,
        },
        measurement: '94 1/2x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors and drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0719169_pe731895_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0843366_pe535714_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors and drawers, white stained oak effect/Lappviken/Stubbarp white stained oak effect, 94 1/2x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect-s59568585/',
      },
      {
        id: 's09568578',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 600,
          discounted: false,
        },
        measurement: '94 1/2x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors and drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-hedeviken-stubbarp-oak-veneer__0992636_pe820154_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-hedeviken-stubbarp-oak-veneer__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors and drawers, white/Hedeviken/Stubbarp oak veneer, 94 1/2x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-white-hedeviken-stubbarp-oak-veneer-s09568578/',
      },
      {
        id: 's19568573',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 470,
          discounted: false,
        },
        measurement: '94 1/2x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors and drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-black-brown-hanviken-stubbarp-black-brown__0719163_pe731892_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-black-brown-hanviken-stubbarp-black-brown__0843438_pe535720_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors and drawers, black-brown/Hanviken/Stubbarp black-brown, 94 1/2x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-black-brown-hanviken-stubbarp-black-brown-s19568573/',
      },
      {
        id: 's39568591',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 450,
          discounted: false,
        },
        measurement: '94 1/2x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors and drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-dark-gray-lappviken-stubbarp-dark-gray__1209494_pe909259_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-dark-gray-lappviken-stubbarp-dark-gray__1240318_pe919298_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors and drawers, dark gray/Lappviken/Stubbarp dark gray, 94 1/2x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-dark-gray-lappviken-stubbarp-dark-gray-s39568591/',
      },
      {
        id: 's09568564',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 560,
          discounted: false,
        },
        measurement: '94 1/2x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors and drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-smeviken-kabbarp-white__0895710_pe782383_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-and-drawers-white-smeviken-kabbarp-white__0917083_pe785573_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors and drawers, white/Smeviken/Kabbarp white, 94 1/2x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-and-drawers-white-smeviken-kabbarp-white-s09568564/',
      },
    ],
  },
  {
    id: 's39567997',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 191,
      discounted: false,
    },
    measurement: '47 1/4x16 1/2x29 1/8 "',
    typeName: 'TV bench with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0345797_pe536028_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0843366_pe535714_s5.jpg',
    imageAlt:
      'BESTÅ TV bench with doors, white stained oak effect/Lappviken/Stubbarp white stained oak effect, 47 1/4x16 1/2x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect-s39567997/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'TV & media furniture',
        key: '10475',
      },
      {
        name: 'TV stands & benches',
        key: '10810',
      },
    ],
    variants: [
      {
        id: 's19567979',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 301,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-stubbarp-beige__0994297_pe820940_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-stubbarp-beige__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Bergsviken/Stubbarp beige, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bergsviken-stubbarp-beige-s19567979/',
      },
      {
        id: 's59567996',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 271,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-stained-oak-effect-kallviken-stubbarp-dark-gray-concrete-effect__0632524_pe695439_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-stained-oak-effect-kallviken-stubbarp-dark-gray-concrete-effect__0848466_pe695437_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white stained oak effect Kallviken/Stubbarp/dark gray concrete effect, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-stained-oak-effect-kallviken-stubbarp-dark-gray-concrete-effect-s59567996/',
      },
      {
        id: 's09567102',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 291,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-selsviken-stubbarp-dark-olive-green__0994294_pe820950_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-selsviken-stubbarp-dark-olive-green__0843438_pe535720_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, black-brown/Selsviken/Stubbarp dark olive-green, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-black-brown-selsviken-stubbarp-dark-olive-green-s09567102/',
      },
      {
        id: 's39567978',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 301,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-kallviken-stubbarp-dark-gray-concrete-effect__0632530_pe695443_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-kallviken-stubbarp-dark-gray-concrete-effect__0848370_pe695442_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white Kallviken/Stubbarp/dark gray concrete effect, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-kallviken-stubbarp-dark-gray-concrete-effect-s39567978/',
      },
      {
        id: 's99567980',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 301,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-stubbarp-black__0994298_pe820937_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-stubbarp-black__0843389_pe535717_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Bergsviken/Stubbarp black, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-bergsviken-stubbarp-black-s99567980/',
      },
      {
        id: 's19567998',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 241,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'TV bench with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-hanviken-stubbarp-white__0345791_pe536022_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-hanviken-stubbarp-white__0844428_pe591172_s5.jpg',
        imageAlt:
          'BESTÅ TV bench with doors, white/Hanviken/Stubbarp white, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-tv-bench-with-doors-white-hanviken-stubbarp-white-s19567998/',
      },
    ],
  },
  {
    id: '60343646',
    name: 'SANELA',
    price: {
      currency: 'USD',
      currentPrice: 5.99,
      discounted: true,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-dark-blue__0600213_pe678602_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-dark-blue__0888821_pe623735_s5.jpg',
    imageAlt: 'SANELA Cushion cover, dark blue, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-dark-blue-60343646/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '90321030',
        name: 'SANELA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-light-beige__0387498_pe558963_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-light-beige__0889221_pe576105_s5.jpg',
        imageAlt: 'SANELA Cushion cover, light beige, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-light-beige-90321030/',
      },
      {
        id: '20565390',
        name: 'SANELA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-light-brown__1171761_pe893196_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-light-brown__1171760_pe893197_s5.jpg',
        imageAlt: 'SANELA Cushion cover, light brown, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-light-brown-20565390/',
      },
      {
        id: '80471732',
        name: 'SANELA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-dark-gray__0672139_pe716493_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-dark-gray__0772705_pe756077_s5.jpg',
        imageAlt: 'SANELA Cushion cover, dark gray, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-dark-gray-80471732/',
      },
      {
        id: '70507406',
        name: 'SANELA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-gray-green__0387502_pe558962_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-gray-green__0980840_pe815120_s5.jpg',
        imageAlt: 'SANELA Cushion cover, gray-green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-gray-green-70507406/',
      },
      {
        id: '80370163',
        name: 'SANELA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-golden-brown__0504866_pe633588_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-golden-brown__0889238_pe633589_s5.jpg',
        imageAlt: 'SANELA Cushion cover, golden brown, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-golden-brown-80370163/',
      },
      {
        id: '70490199',
        name: 'SANELA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-pink__0914848_pe784346_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sanela-cushion-cover-pink__0914849_pe784347_s5.jpg',
        imageAlt: 'SANELA Cushion cover, pink, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/sanela-cushion-cover-pink-70490199/',
      },
    ],
  },
  {
    id: '60543004',
    name: 'SVARTPOPPEL',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: true,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-off-white__1118258_pe872990_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-off-white__1118257_pe872991_s5.jpg',
    imageAlt: 'SVARTPOPPEL Cushion cover, off-white, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-off-white-60543004/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '00543016',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-pale-gray-green__1117923_pe872829_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-pale-gray-green__1117922_pe872828_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, pale gray-green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-pale-gray-green-00543016/',
      },
      {
        id: '30543010',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-yellow__1117914_pe872820_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-yellow__1117913_pe872819_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, yellow, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-yellow-30543010/',
      },
      {
        id: '70543013',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-pale-blue__1117917_pe872823_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-pale-blue__1117916_pe872822_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, pale blue, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-pale-blue-70543013/',
      },
      {
        id: '90543007',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-gray-green__1117934_pe872833_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-gray-green__1117933_pe872834_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, gray-green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-gray-green-90543007/',
      },
      {
        id: '20542997',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-light-pink__1117937_pe872836_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-light-pink__1117935_pe872835_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, light pink, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-light-pink-20542997/',
      },
    ],
  },
  {
    id: '20395821',
    name: 'GURLI',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-golden-yellow__0544894_pe655202_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-golden-yellow__1283297_pe932429_s5.jpg',
    imageAlt: 'GURLI Cushion cover, golden-yellow, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-golden-yellow-20395821/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '10562877',
        name: 'GURLI',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-bright-green__1157565_pe887760_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-bright-green__1157562_pe887757_s5.jpg',
        imageAlt: 'GURLI Cushion cover, bright green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-bright-green-10562877/',
      },
      {
        id: '60489587',
        name: 'GURLI',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-deep-green__0933080_pe791731_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-deep-green__1283303_pe932435_s5.jpg',
        imageAlt: 'GURLI Cushion cover, deep green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-deep-green-60489587/',
      },
      {
        id: '90562878',
        name: 'GURLI',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-pink__1157557_pe887752_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-pink__1157554_pe887749_s5.jpg',
        imageAlt: 'GURLI Cushion cover, pink, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-pink-90562878/',
      },
      {
        id: '70281148',
        name: 'GURLI',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-red__0214008_pe369627_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-red__1283307_pe932439_s5.jpg',
        imageAlt: 'GURLI Cushion cover, red, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-red-70281148/',
      },
      {
        id: '80281138',
        name: 'GURLI',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-black__0600217_pe678606_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-black__1283309_pe932441_s5.jpg',
        imageAlt: 'GURLI Cushion cover, black, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-black-80281138/',
      },
      {
        id: '30281150',
        name: 'GURLI',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-white__0214010_pe369632_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gurli-cushion-cover-white__0889215_pe567488_s5.jpg',
        imageAlt: 'GURLI Cushion cover, white, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gurli-cushion-cover-white-30281150/',
      },
    ],
  },
  {
    id: '40561800',
    name: 'LAGERPOPPEL',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-off-white__1259185_pe926590_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-off-white__1259184_pe926591_s5.jpg',
    imageAlt: 'LAGERPOPPEL Cushion cover, off-white, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/lagerpoppel-cushion-cover-off-white-40561800/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '50561809',
        name: 'LAGERPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-yellow-beige__1265209_pe927527_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-yellow-beige__1265208_pe927528_s5.jpg',
        imageAlt: 'LAGERPOPPEL Cushion cover, yellow-beige, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/lagerpoppel-cushion-cover-yellow-beige-50561809/',
      },
      {
        id: '50561814',
        name: 'LAGERPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-light-blue-gray__1259177_pe926582_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-light-blue-gray__1259176_pe926583_s5.jpg',
        imageAlt: 'LAGERPOPPEL Cushion cover, light blue-gray, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/lagerpoppel-cushion-cover-light-blue-gray-50561814/',
      },
      {
        id: '80561803',
        name: 'LAGERPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-blue-gray__1259165_pe926566_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-blue-gray__1259164_pe926567_s5.jpg',
        imageAlt: 'LAGERPOPPEL Cushion cover, blue-gray, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/lagerpoppel-cushion-cover-blue-gray-80561803/',
      },
      {
        id: '10561811',
        name: 'LAGERPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-gray-green__1259173_pe926576_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-gray-green__1259172_pe926577_s5.jpg',
        imageAlt: 'LAGERPOPPEL Cushion cover, gray-green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/lagerpoppel-cushion-cover-gray-green-10561811/',
      },
      {
        id: '20561801',
        name: 'LAGERPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-light-pink__1259181_pe926586_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagerpoppel-cushion-cover-light-pink__1259180_pe926587_s5.jpg',
        imageAlt: 'LAGERPOPPEL Cushion cover, light pink, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/lagerpoppel-cushion-cover-light-pink-20561801/',
      },
    ],
  },
  {
    id: '20572376',
    name: 'SANDMOTT',
    price: {
      currency: 'USD',
      currentPrice: 7.99,
      discounted: false,
    },
    measurement: '12x23 "',
    typeName: 'Cushion',
    image:
      'https://www.ikea.com/us/en/images/products/sandmott-cushion-black-white__1225068_pe915122_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sandmott-cushion-black-white__1270186_pe929227_s5.jpg',
    imageAlt: 'SANDMOTT Cushion, black/white, 12x23 "',
    url: 'https://www.ikea.com/us/en/p/sandmott-cushion-black-white-20572376/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillows',
        key: '18902',
      },
    ],
    variants: [
      {
        id: '30572390',
        name: 'SANDMOTT',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '12x23 "',
        typeName: 'Cushion',
        image:
          'https://www.ikea.com/us/en/images/products/sandmott-cushion-green-yellow__1270183_pe933717_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sandmott-cushion-green-yellow__1270182_pe933718_s5.jpg',
        imageAlt: 'SANDMOTT Cushion, green/yellow, 12x23 "',
        url: 'https://www.ikea.com/us/en/p/sandmott-cushion-green-yellow-30572390/',
      },
      {
        id: '80562058',
        name: 'SANDMOTT',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '12x23 "',
        typeName: 'Cushion',
        image:
          'https://www.ikea.com/us/en/images/products/sandmott-cushion-black-white__1187196_pe899093_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sandmott-cushion-black-white__1191822_pe900717_s5.jpg',
        imageAlt: 'SANDMOTT Cushion, black/white, 12x23 "',
        url: 'https://www.ikea.com/us/en/p/sandmott-cushion-black-white-80562058/',
      },
    ],
  },
  {
    id: '70570959',
    name: 'VALLKRASSING',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-off-white__1338072_pe948186_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-off-white__1212910_pe910829_s5.jpg',
    imageAlt: 'VALLKRASSING Cushion cover, off-white, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/vallkrassing-cushion-cover-off-white-70570959/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '40570965',
        name: 'VALLKRASSING',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-light-blue-gray__1204905_pe906872_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-light-blue-gray__1212908_pe910827_s5.jpg',
        imageAlt: 'VALLKRASSING Cushion cover, light blue-gray, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/vallkrassing-cushion-cover-light-blue-gray-40570965/',
      },
      {
        id: '90570963',
        name: 'VALLKRASSING',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-light-gray-brown__1204908_pe906873_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-light-gray-brown__1212911_pe910828_s5.jpg',
        imageAlt: 'VALLKRASSING Cushion cover, light gray-brown, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/vallkrassing-cushion-cover-light-gray-brown-90570963/',
      },
      {
        id: '50570955',
        name: 'VALLKRASSING',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-gray-green__1204906_pe906875_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vallkrassing-cushion-cover-gray-green__1257680_pe925963_s5.jpg',
        imageAlt: 'VALLKRASSING Cushion cover, gray-green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/vallkrassing-cushion-cover-gray-green-50570955/',
      },
    ],
  },
  {
    id: '80572241',
    name: 'JÄTTEGRAN',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/jaettegran-cushion-cover-off-white__1249566_pe923386_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jaettegran-cushion-cover-off-white__1270157_pe929221_s5.jpg',
    imageAlt: 'JÄTTEGRAN Cushion cover, off-white, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/jaettegran-cushion-cover-off-white-80572241/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '60572261',
        name: 'JÄTTEGRAN',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/jaettegran-cushion-cover-green__1249561_pe923385_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/jaettegran-cushion-cover-green__1270154_pe929218_s5.jpg',
        imageAlt: 'JÄTTEGRAN Cushion cover, green, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/jaettegran-cushion-cover-green-60572261/',
      },
      {
        id: '20572263',
        name: 'JÄTTEGRAN',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/jaettegran-cushion-cover-red-orange__1249567_pe923387_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/jaettegran-cushion-cover-red-orange__1270162_pe929224_s5.jpg',
        imageAlt: 'JÄTTEGRAN Cushion cover, red-orange, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/jaettegran-cushion-cover-red-orange-20572263/',
      },
    ],
  },
  {
    id: '00572419',
    name: 'ÅSVEIG',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '16x23 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-light-beige__1207685_pe908134_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-light-beige__1212933_pe910842_s5.jpg',
    imageAlt: 'ÅSVEIG Cushion cover, light beige, 16x23 "',
    url: 'https://www.ikea.com/us/en/p/asveig-cushion-cover-light-beige-00572419/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '60572421',
        name: 'ÅSVEIG',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '16x23 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-gray-brown__1207679_pe908140_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-gray-brown__1207678_pe908133_s5.jpg',
        imageAlt: 'ÅSVEIG Cushion cover, gray-brown, 16x23 "',
        url: 'https://www.ikea.com/us/en/p/asveig-cushion-cover-gray-brown-60572421/',
      },
      {
        id: '20572423',
        name: 'ÅSVEIG',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '16x23 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-dark-green__1207676_pe908131_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-dark-green__1212931_pe910841_s5.jpg',
        imageAlt: 'ÅSVEIG Cushion cover, dark green, 16x23 "',
        url: 'https://www.ikea.com/us/en/p/asveig-cushion-cover-dark-green-20572423/',
      },
      {
        id: '70572425',
        name: 'ÅSVEIG',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '16x23 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-dark-gray-turquoise__1207682_pe908137_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/asveig-cushion-cover-dark-gray-turquoise__1212932_pe910843_s5.jpg',
        imageAlt: 'ÅSVEIG Cushion cover, dark gray-turquoise, 16x23 "',
        url: 'https://www.ikea.com/us/en/p/asveig-cushion-cover-dark-gray-turquoise-70572425/',
      },
    ],
  },
  {
    id: '30576703',
    name: 'SVARTPOPPEL',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: true,
    },
    measurement: '26x26 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-off-white__1235547_pe917322_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-off-white__1118257_pe872991_s5.jpg',
    imageAlt: 'SVARTPOPPEL Cushion cover, off-white, 26x26 "',
    url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-off-white-30576703/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '10543025',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '26x26 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-light-red__1118020_pe872879_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-light-red__1118019_pe872880_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, light red, 26x26 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-light-red-10543025/',
      },
      {
        id: '80543022',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '26x26 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-green-yellow__1127633_pe876282_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-green-yellow__1127632_pe876283_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, green-yellow, 26x26 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-green-yellow-80543022/',
      },
      {
        id: '40543019',
        name: 'SVARTPOPPEL',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '26x26 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-blue__1127622_pe876279_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/svartpoppel-cushion-cover-blue__1127621_pe876280_s5.jpg',
        imageAlt: 'SVARTPOPPEL Cushion cover, blue, 26x26 "',
        url: 'https://www.ikea.com/us/en/p/svartpoppel-cushion-cover-blue-40543019/',
      },
    ],
  },
  {
    id: '80568965',
    name: 'TESAMMANS',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/tesammans-cushion-cover-multicolor__1231556_pe915906_s5.jpg',
    imageAlt: 'TESAMMANS Cushion cover, multicolor, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/tesammans-cushion-cover-multicolor-80568965/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [],
  },
  {
    id: '40559166',
    name: 'TIPHEDE',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '7 \' 3 "x9 \' 2 "',
    typeName: 'Rug, flatwoven',
    image:
      'https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-natural-black__0772066_pe755879_s5.jpg',
    imageAlt: 'TIPHEDE Rug, flatwoven, natural/black, 7 \' 3 "x9 \' 2 "',
    url: 'https://www.ikea.com/us/en/p/tiphede-rug-flatwoven-natural-black-40559166/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '40456757',
        name: 'TIPHEDE',
        price: {
          currency: 'USD',
          currentPrice: 12.99,
          discounted: false,
        },
        measurement: '3 \' 11 "x5 \' 11 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-natural-black__0772066_pe755879_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-natural-black__0772105_pe755880_s5.jpg',
        imageAlt: 'TIPHEDE Rug, flatwoven, natural/black, 3 \' 11 "x5 \' 11 "',
        url: 'https://www.ikea.com/us/en/p/tiphede-rug-flatwoven-natural-black-40456757/',
      },
      {
        id: '20470047',
        name: 'TIPHEDE',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '5 \' 1 "x7 \' 3 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-black-natural__0772070_pe755883_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-black-natural__0772067_pe755884_s5.jpg',
        imageAlt: 'TIPHEDE Rug, flatwoven, black/natural, 5 \' 1 "x7 \' 3 "',
        url: 'https://www.ikea.com/us/en/p/tiphede-rug-flatwoven-black-natural-20470047/',
      },
    ],
  },
  {
    id: '50578107',
    name: 'HOTELLRUM',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '5 \' 3 "x7 \' 7 "',
    typeName: 'Rug, high pile',
    image:
      'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-white__1237897_pe918217_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-white__1237901_pe918224_s5.jpg',
    imageAlt: 'HOTELLRUM Rug, high pile, blue/green white, 5 \' 3 "x7 \' 7 "',
    url: 'https://www.ikea.com/us/en/p/hotellrum-rug-high-pile-blue-green-white-50578107/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '30578028',
        name: 'HOTELLRUM',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '7 \' 10 "x9 \' 10 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-white__1237896_pe918218_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-white__1237900_pe918221_s5.jpg',
        imageAlt:
          'HOTELLRUM Rug, high pile, blue/green white, 7 \' 10 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/hotellrum-rug-high-pile-blue-green-white-30578028/',
      },
      {
        id: '40571154',
        name: 'HOTELLRUM',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-yellow__1242451_pe920247_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-yellow__1246385_pe922128_s5.jpg',
        imageAlt:
          'HOTELLRUM Rug, high pile, blue/green yellow, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/hotellrum-rug-high-pile-blue-green-yellow-40571154/',
      },
      {
        id: '50577650',
        name: 'HOTELLRUM',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '7 \' 10 "x9 \' 10 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-yellow__1242452_pe920249_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hotellrum-rug-high-pile-blue-green-yellow__1246386_pe922131_s5.jpg',
        imageAlt:
          'HOTELLRUM Rug, high pile, blue/green yellow, 7 \' 10 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/hotellrum-rug-high-pile-blue-green-yellow-50577650/',
      },
    ],
  },
  {
    id: '80537281',
    name: 'VEDBÄK',
    price: {
      currency: 'USD',
      currentPrice: 139.99,
      discounted: true,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug, low pile',
    image:
      'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084810_pe859887_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084832_pe859897_s5.jpg',
    imageAlt: 'VEDBÄK Rug, low pile, blue, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/vedbaek-rug-low-pile-blue-80537281/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '20533610',
        name: 'VEDBÄK',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: true,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084810_pe859887_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084814_pe859892_s5.jpg',
        imageAlt: 'VEDBÄK Rug, low pile, blue, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/vedbaek-rug-low-pile-blue-20533610/',
      },
      {
        id: '40534661',
        name: 'VEDBÄK',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: true,
        },
        measurement: '5 \' 7 "x7 \' 7 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084810_pe859887_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084816_pe859894_s5.jpg',
        imageAlt: 'VEDBÄK Rug, low pile, blue, 5 \' 7 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/vedbaek-rug-low-pile-blue-40534661/',
      },
      {
        id: '20528897',
        name: 'VEDBÄK',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: true,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1072491_pe855183_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1080043_pe857842_s5.jpg',
        imageAlt: 'VEDBÄK Rug, low pile, light gray, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/vedbaek-rug-low-pile-light-gray-20528897/',
      },
      {
        id: '40528900',
        name: 'VEDBÄK',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: true,
        },
        measurement: '5 \' 7 "x7 \' 7 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1072491_pe855183_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1080044_pe857843_s5.jpg',
        imageAlt: 'VEDBÄK Rug, low pile, light gray, 5 \' 7 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/vedbaek-rug-low-pile-light-gray-40528900/',
      },
      {
        id: '80528903',
        name: 'VEDBÄK',
        price: {
          currency: 'USD',
          currentPrice: 139.99,
          discounted: true,
        },
        measurement: '6 \' 7 "x9 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1072491_pe855183_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1205470_pe907102_s5.jpg',
        imageAlt: 'VEDBÄK Rug, low pile, light gray, 6 \' 7 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/vedbaek-rug-low-pile-light-gray-80528903/',
      },
    ],
  },
  {
    id: '70560031',
    name: 'LANGSTED',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '5 \' 7 "x7 \' 10 "',
    typeName: 'Rug, low pile',
    image:
      'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-yellow__0708105_pe726548_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-yellow__1182095_pe896987_s5.jpg',
    imageAlt: 'LANGSTED Rug, low pile, yellow, 5 \' 7 "x7 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-yellow-70560031/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '60495178',
        name: 'LANGSTED',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-blue__0936206_pe793169_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-blue__0936209_pe793172_s5.jpg',
        imageAlt: 'LANGSTED Rug, low pile, light blue, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-light-blue-60495178/',
      },
      {
        id: '90495172',
        name: 'LANGSTED',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-blue__0936206_pe793169_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-blue__0936207_pe793170_s5.jpg',
        imageAlt: 'LANGSTED Rug, low pile, light blue, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-light-blue-90495172/',
      },
      {
        id: '40532563',
        name: 'LANGSTED',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-brown__1080058_pe857845_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-brown__1080059_pe857846_s5.jpg',
        imageAlt: 'LANGSTED Rug, low pile, light brown, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-light-brown-40532563/',
      },
      {
        id: '70528866',
        name: 'LANGSTED',
        price: {
          currency: 'USD',
          currentPrice: 53.99,
          discounted: true,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-brown__1080058_pe857845_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-brown__1080060_pe857847_s5.jpg',
        imageAlt: 'LANGSTED Rug, low pile, light brown, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-light-brown-70528866/',
      },
      {
        id: '20445939',
        name: 'LANGSTED',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-gray__0777951_pe759301_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-gray__0777950_pe759302_s5.jpg',
        imageAlt: 'LANGSTED Rug, low pile, light gray, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-light-gray-20445939/',
      },
      {
        id: '30423946',
        name: 'LANGSTED',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-yellow__0708105_pe726548_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-yellow__0661980_pe711674_s5.jpg',
        imageAlt: 'LANGSTED Rug, low pile, yellow, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/langsted-rug-low-pile-yellow-30423946/',
      },
    ],
  },
  {
    id: '60492542',
    name: 'VOLLERSLEV',
    price: {
      currency: 'USD',
      currentPrice: 249.99,
      discounted: false,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug, high pile',
    image:
      'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-white__0933663_pe792171_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-white__1099927_pe866002_s5.jpg',
    imageAlt: 'VOLLERSLEV Rug, high pile, white, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/vollerslev-rug-high-pile-white-60492542/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '10492549',
        name: 'VOLLERSLEV',
        price: {
          currency: 'USD',
          currentPrice: 249.99,
          discounted: false,
        },
        measurement: '6 \' 7 "x9 \' 10 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-dark-blue__0933595_pe792162_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-dark-blue__1290833_pe934761_s5.jpg',
        imageAlt: 'VOLLERSLEV Rug, high pile, dark blue, 6 \' 7 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/vollerslev-rug-high-pile-dark-blue-10492549/',
      },
      {
        id: '60492561',
        name: 'VOLLERSLEV',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-dark-blue__0933595_pe792162_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-dark-blue__1085423_pe860102_s5.jpg',
        imageAlt: 'VOLLERSLEV Rug, high pile, dark blue, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/vollerslev-rug-high-pile-dark-blue-60492561/',
      },
      {
        id: '60519160',
        name: 'VOLLERSLEV',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-gray__1021434_pe832115_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-gray__1021439_pe832118_s5.jpg',
        imageAlt: 'VOLLERSLEV Rug, high pile, gray, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/vollerslev-rug-high-pile-gray-60519160/',
      },
      {
        id: '80519159',
        name: 'VOLLERSLEV',
        price: {
          currency: 'USD',
          currentPrice: 249.99,
          discounted: false,
        },
        measurement: '6 \' 7 "x9 \' 10 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-gray__1021443_pe832119_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-gray__1021445_pe832121_s5.jpg',
        imageAlt: 'VOLLERSLEV Rug, high pile, gray, 6 \' 7 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/vollerslev-rug-high-pile-gray-80519159/',
      },
      {
        id: '30492572',
        name: 'VOLLERSLEV',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug, high pile',
        image:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-white__0933663_pe792171_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vollerslev-rug-high-pile-white__1290832_pe934760_s5.jpg',
        imageAlt: 'VOLLERSLEV Rug, high pile, white, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/vollerslev-rug-high-pile-white-30492572/',
      },
    ],
  },
  {
    id: '70507915',
    name: 'STARREKLINTE',
    price: {
      currency: 'USD',
      currentPrice: 69.99,
      discounted: false,
    },
    measurement: '6 \' 1 "x9 \' 2 "',
    typeName: 'Rug, flatwoven',
    image:
      'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-light-green__1074496_pe856211_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-light-green__1080101_pe857863_s5.jpg',
    imageAlt:
      'STARREKLINTE Rug, flatwoven, natural/light green, 6 \' 1 "x9 \' 2 "',
    url: 'https://www.ikea.com/us/en/p/starreklinte-rug-flatwoven-natural-light-green-70507915/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '00507909',
        name: 'STARREKLINTE',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: false,
        },
        measurement: '5 \' 1 "x7 \' 3 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-light-green__1074496_pe856211_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-light-green__1080098_pe857861_s5.jpg',
        imageAlt:
          'STARREKLINTE Rug, flatwoven, natural/light green, 5 \' 1 "x7 \' 3 "',
        url: 'https://www.ikea.com/us/en/p/starreklinte-rug-flatwoven-natural-light-green-00507909/',
      },
      {
        id: '20569133',
        name: 'STARREKLINTE',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '3 \' 11 "x5 \' 11 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-black__1205718_pe907217_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-black__1215787_pe912184_s5.jpg',
        imageAlt:
          'STARREKLINTE Rug, flatwoven, natural/black, 3 \' 11 "x5 \' 11 "',
        url: 'https://www.ikea.com/us/en/p/starreklinte-rug-flatwoven-natural-black-20569133/',
      },
      {
        id: '30507917',
        name: 'STARREKLINTE',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '3 \' 11 "x5 \' 11 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-light-green__1074496_pe856211_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-light-green__1080091_pe857858_s5.jpg',
        imageAlt:
          'STARREKLINTE Rug, flatwoven, natural/light green, 3 \' 11 "x5 \' 11 "',
        url: 'https://www.ikea.com/us/en/p/starreklinte-rug-flatwoven-natural-light-green-30507917/',
      },
      {
        id: '30569137',
        name: 'STARREKLINTE',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: false,
        },
        measurement: '6 \' 1 "x9 \' 2 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-black__1205718_pe907217_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-black__1215789_pe912186_s5.jpg',
        imageAlt:
          'STARREKLINTE Rug, flatwoven, natural/black, 6 \' 1 "x9 \' 2 "',
        url: 'https://www.ikea.com/us/en/p/starreklinte-rug-flatwoven-natural-black-30569137/',
      },
      {
        id: '70569135',
        name: 'STARREKLINTE',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: false,
        },
        measurement: '5 \' 1 "x7 \' 3 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-black__1205718_pe907217_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/starreklinte-rug-flatwoven-natural-black__1215791_pe912188_s5.jpg',
        imageAlt:
          'STARREKLINTE Rug, flatwoven, natural/black, 5 \' 1 "x7 \' 3 "',
        url: 'https://www.ikea.com/us/en/p/starreklinte-rug-flatwoven-natural-black-70569135/',
      },
    ],
  },
  {
    id: '00277395',
    name: 'LOHALS',
    price: {
      currency: 'USD',
      currentPrice: 119.99,
      discounted: true,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug, flatwoven',
    image:
      'https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__0280230_pe419175_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__1139963_pe880601_s5.jpg',
    imageAlt: 'LOHALS Rug, flatwoven, natural, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-00277395/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '30511288',
        name: 'LOHALS',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: true,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__0280221_pe419173_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__0737684_pe560550_s5.jpg',
        imageAlt: 'LOHALS Rug, flatwoven, natural, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-30511288/',
      },
      {
        id: '50277393',
        name: 'LOHALS',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__0280221_pe419173_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__0737684_pe560550_s5.jpg',
        imageAlt: 'LOHALS Rug, flatwoven, natural, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-50277393/',
      },
    ],
  },
  {
    id: '10559894',
    name: 'ONSEVIG',
    price: {
      currency: 'USD',
      currentPrice: 169.99,
      discounted: false,
    },
    measurement: '7 \' 10 "x9 \' 10 "',
    typeName: 'Rug, low pile',
    image:
      'https://www.ikea.com/us/en/images/products/onsevig-rug-low-pile-multicolor__0941458_pe795476_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/onsevig-rug-low-pile-multicolor__1182107_pe896990_s5.jpg',
    imageAlt: 'ONSEVIG Rug, low pile, multicolor, 7 \' 10 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/onsevig-rug-low-pile-multicolor-10559894/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '60497078',
        name: 'ONSEVIG',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 9 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/onsevig-rug-low-pile-multicolor__0941458_pe795476_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/onsevig-rug-low-pile-multicolor__0941459_pe795477_s5.jpg',
        imageAlt: 'ONSEVIG Rug, low pile, multicolor, 5 \' 3 "x7 \' 9 "',
        url: 'https://www.ikea.com/us/en/p/onsevig-rug-low-pile-multicolor-60497078/',
      },
    ],
  },
  {
    id: '20426808',
    name: 'STOENSE',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug, low pile',
    image:
      'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624402_pe691814_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624401_pe691815_s5.jpg',
    imageAlt: 'STOENSE Rug, low pile, off-white, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-off-white-20426808/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '10425526',
        name: 'STOENSE',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624373_pe691791_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624372_pe691792_s5.jpg',
        imageAlt: 'STOENSE Rug, low pile, off-white, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-off-white-10425526/',
      },
      {
        id: '50425529',
        name: 'STOENSE',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624386_pe691799_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624385_pe691800_s5.jpg',
        imageAlt: 'STOENSE Rug, low pile, off-white, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-off-white-50425529/',
      },
      {
        id: '10556008',
        name: 'STOENSE',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-dark-blue__1154322_pe885986_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-dark-blue__1170214_pe892722_s5.jpg',
        imageAlt: 'STOENSE Rug, low pile, dark blue, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-dark-blue-10556008/',
      },
      {
        id: '10556013',
        name: 'STOENSE',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '6 \' 7 "x9 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-dark-blue__1154322_pe885986_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-dark-blue__1170215_pe892723_s5.jpg',
        imageAlt: 'STOENSE Rug, low pile, dark blue, 6 \' 7 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-dark-blue-10556013/',
      },
      {
        id: '00426828',
        name: 'STOENSE',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-medium-gray__0624384_pe691797_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-medium-gray__0624383_pe691798_s5.jpg',
        imageAlt: 'STOENSE Rug, low pile, medium gray, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-medium-gray-00426828/',
      },
      {
        id: '30426836',
        name: 'STOENSE',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '6 \' 7 "x9 \' 10 "',
        typeName: 'Rug, low pile',
        image:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-medium-gray__0624399_pe691812_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-medium-gray__0624398_pe691813_s5.jpg',
        imageAlt: 'STOENSE Rug, low pile, medium gray, 6 \' 7 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/stoense-rug-low-pile-medium-gray-30426836/',
      },
    ],
  },
  {
    id: '20566587',
    name: 'HALVED',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: true,
    },
    measurement: '5 \' 7 "x7 \' 10 "',
    typeName: 'Rug, flatwoven',
    image:
      'https://www.ikea.com/us/en/images/products/halved-rug-flatwoven-multicolor-dark__1189543_pe899904_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/halved-rug-flatwoven-multicolor-dark__1189542_pe899905_s5.jpg',
    imageAlt: 'HALVED Rug, flatwoven, multicolor, dark, 5 \' 7 "x7 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/halved-rug-flatwoven-multicolor-dark-20566587/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '20328228',
        name: 'HALVED',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: true,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug, flatwoven',
        image:
          'https://www.ikea.com/us/en/images/products/halved-rug-flatwoven-handmade-multicolor__0603024_pe680632_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/halved-rug-flatwoven-handmade-multicolor__0891754_pe609762_s5.jpg',
        imageAlt:
          'HALVED Rug, flatwoven, handmade multicolor, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/halved-rug-flatwoven-handmade-multicolor-20328228/',
      },
      {
        id: '50557077',
        name: 'HALVED',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: true,
        },
        measurement: '7 \' 10 "x9 \' 10 "',
        typeName: 'Rug',
        image:
          'https://www.ikea.com/us/en/images/products/halved-rug-handmade-multicolor__0603024_pe680632_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/halved-rug-handmade-multicolor__0891754_pe609762_s5.jpg',
        imageAlt: 'HALVED Rug, handmade/multicolor, 7 \' 10 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/halved-rug-handmade-multicolor-50557077/',
      },
    ],
  },
  {
    id: 's49139722',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 260,
      discounted: false,
    },
    measurement: '70 7/8x16 1/2x29 1/8 "',
    typeName: 'Storage combination with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0415037_pe574376_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0427715_pe583066_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with doors, white stained oak effect/Lappviken/Stubbarp white stained oak effect, 70 7/8x16 1/2x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect-s49139722/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: 's09139903',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 365,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-laxviken-stubbarp-white__0415199_pe574482_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-laxviken-stubbarp-white__0427750_pe583058_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white stained oak effect/Laxviken/Stubbarp white, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-stained-oak-effect-laxviken-stubbarp-white-s09139903/',
      },
      {
        id: 's09139724',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 251.5,
          discounted: true,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-lappviken-stubbarp-walnut-effect-light-gray__0415030_pe574370_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-lappviken-stubbarp-walnut-effect-light-gray__0427712_pe583075_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray/Lappviken/Stubbarp walnut effect light gray, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-lappviken-stubbarp-walnut-effect-light-gray-s09139724/',
      },
      {
        id: 's39508069',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 500,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-dark-gray-bergsviken-oesarp-black__1209697_pe909389_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-dark-gray-bergsviken-oesarp-black__0990433_pe818948_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, dark gray Bergsviken/Ösarp/black, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-dark-gray-bergsviken-oesarp-black-s39508069/',
      },
      {
        id: 's09488812',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 415,
          discounted: true,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-glassvik-stubbarp-white-light-green-frosted-glass__1114271_pe871729_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-glassvik-stubbarp-white-light-green-frosted-glass__1139594_pe880382_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray Glassvik/Stubbarp/white/light green frosted glass, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-glassvik-stubbarp-white-light-green-frosted-glass-s09488812/',
      },
      {
        id: 's29421750',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 460,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-bergsviken-stubbarp-black-marble-effect__0996719_pe822460_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-bergsviken-stubbarp-black-marble-effect__1035492_pe838102_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white Bergsviken/Stubbarp/black marble effect, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-bergsviken-stubbarp-black-marble-effect-s29421750/',
      },
      {
        id: 's29139718',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 325,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-stubbarp-white__0415034_pe574374_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-stubbarp-white__0427714_pe583077_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Lappviken/Stubbarp white, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-lappviken-stubbarp-white-s29139718/',
      },
    ],
  },
  {
    id: 's69325191',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 280,
      discounted: false,
    },
    measurement: '70 7/8x16 1/2x25 5/8 "',
    typeName: 'Storage combination with drawers',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-white__0781778_pe760923_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-white__0993914_pe821169_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with drawers, white/Lappviken white, 70 7/8x16 1/2x25 5/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-white-s69325191/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: 's09195588',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 448,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-beige__0389986_pe559574_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-beige__0394286_pe561109_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown/Selsviken/Stubbarp high-gloss/beige, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-beige-s09195588/',
      },
      {
        id: 's09325165',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 315,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x25 5/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-hanviken-black-brown__0781753_pe760932_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-hanviken-black-brown__0993896_pe821214_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown/Hanviken black-brown, 70 7/8x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-hanviken-black-brown-s09325165/',
      },
      {
        id: 's09508099',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 400,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers__1209717_pe909408_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers__1240318_pe919298_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-s09508099/',
      },
      {
        id: 's19421859',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 488,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-bergsviken-stubbarp-black-marble-effect__0996752_pe822500_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-bergsviken-stubbarp-black-marble-effect__0993978_pe821180_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, white Bergsviken/Stubbarp/black marble effect, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-bergsviken-stubbarp-black-marble-effect-s19421859/',
      },
      {
        id: 's09195625',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 355,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-hanviken-stubbarp-white__0350117_pe535200_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-hanviken-stubbarp-white__0394239_pe561062_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, white/Hanviken/Stubbarp white, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-hanviken-stubbarp-white-s09195625/',
      },
      {
        id: 's29508084',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 488,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers__1209696_pe909411_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers__0748365_pe744953_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-s29508084/',
      },
    ],
  },
  {
    id: 's89209826',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 216,
      discounted: false,
    },
    measurement: '47 1/4x16 1/2x29 1/8 "',
    typeName: 'Storage combination with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-stubbarp-white__0494338_pe626953_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-stubbarp-white__0750403_pe746671_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with doors, white/Lappviken/Stubbarp white, 47 1/4x16 1/2x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-lappviken-stubbarp-white-s89209826/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: 's09209849',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 289,
          discounted: true,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-selsviken-high-gloss-beige__0494310_pe626942_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-selsviken-high-gloss-beige__1055391_pe847967_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray/Selsviken high-gloss/beige, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-selsviken-high-gloss-beige-s09209849/',
      },
      {
        id: 's19421425',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 306,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-hedeviken-stubbarp-oak-veneer__0994433_pe821085_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-hedeviken-stubbarp-oak-veneer__0999271_pe823355_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Hedeviken/Stubbarp oak veneer, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-hedeviken-stubbarp-oak-veneer-s19421425/',
      },
      {
        id: 's19209995',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 251,
          discounted: true,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-laxviken-stubbarp-white__0494309_pe626974_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-laxviken-stubbarp-white__0750395_pe746633_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray/Laxviken/Stubbarp white, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-laxviken-stubbarp-white-s19209995/',
      },
      {
        id: 's09508037',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 326,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-dark-gray-bergsviken-oesarp-black-marble-effect__1209688_pe909375_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-dark-gray-bergsviken-oesarp-black-marble-effect__0990433_pe818948_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, dark gray Bergsviken/Ösarp/black marble effect, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-dark-gray-bergsviken-oesarp-black-marble-effect-s09508037/',
      },
      {
        id: 's49421438',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 306,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-bergsviken-stubbarp-black-marble-effect__0994426_pe821077_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-bergsviken-stubbarp-black-marble-effect__0999256_pe823350_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white Bergsviken/Stubbarp/black marble effect, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-bergsviken-stubbarp-black-marble-effect-s49421438/',
      },
      {
        id: 's49209989',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 286,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x29 1/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-laxviken-stubbarp-white__0494339_pe626990_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-laxviken-stubbarp-white__0750404_pe746622_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Laxviken/Stubbarp white, 47 1/4x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-laxviken-stubbarp-white-s49209989/',
      },
    ],
  },
  {
    id: 's59278307',
    name: 'KALLAX',
    price: {
      currency: 'USD',
      currentPrice: 129.99,
      discounted: true,
    },
    measurement: '30 3/8x57 7/8 "',
    typeName: 'Shelf unit with 4 inserts',
    image:
      'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-white__0754627_pe747994_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-white__1102291_pe866900_s5.jpg',
    imageAlt: 'KALLAX Shelf unit with 4 inserts, white, 30 3/8x57 7/8 "',
    url: 'https://www.ikea.com/us/en/p/kallax-shelf-unit-with-4-inserts-white-s59278307/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: 's29197572',
        name: 'KALLAX',
        price: {
          currency: 'USD',
          currentPrice: 129.99,
          discounted: true,
        },
        measurement: '57 7/8x30 3/8 "',
        typeName: 'Shelf unit with 4 inserts',
        image:
          'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-white-stained-oak-effect__0480295_pe618865_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-white-stained-oak-effect__1102541_pe867020_s5.jpg',
        imageAlt:
          'KALLAX Shelf unit with 4 inserts, white stained oak effect, 57 7/8x30 3/8 "',
        url: 'https://www.ikea.com/us/en/p/kallax-shelf-unit-with-4-inserts-white-stained-oak-effect-s29197572/',
      },
      {
        id: 's29278304',
        name: 'KALLAX',
        price: {
          currency: 'USD',
          currentPrice: 129.99,
          discounted: true,
        },
        measurement: '57 7/8x30 3/8 "',
        typeName: 'Shelf unit with 4 inserts',
        image:
          'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-black-brown__0754623_pe747987_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-black-brown__1052064_pe845908_s5.jpg',
        imageAlt:
          'KALLAX Shelf unit with 4 inserts, black-brown, 57 7/8x30 3/8 "',
        url: 'https://www.ikea.com/us/en/p/kallax-shelf-unit-with-4-inserts-black-brown-s29278304/',
      },
      {
        id: 's89278301',
        name: 'KALLAX',
        price: {
          currency: 'USD',
          currentPrice: 179.99,
          discounted: true,
        },
        measurement: '30 3/8x57 7/8 "',
        typeName: 'Shelf unit with 4 inserts',
        image:
          'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-high-gloss-white__0754626_pe747989_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-high-gloss-white__1102468_pe866995_s5.jpg',
        imageAlt:
          'KALLAX Shelf unit with 4 inserts, high-gloss/white, 30 3/8x57 7/8 "',
        url: 'https://www.ikea.com/us/en/p/kallax-shelf-unit-with-4-inserts-high-gloss-white-s89278301/',
      },
    ],
  },
  {
    id: '90491720',
    name: 'VIHALS',
    price: {
      currency: 'USD',
      currentPrice: 199,
      discounted: false,
    },
    measurement: '55 1/8x18 1/2x29 1/2 "',
    typeName: 'Sideboard',
    image:
      'https://www.ikea.com/us/en/images/products/vihals-sideboard-white__1035578_pe838113_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vihals-sideboard-white__1055145_pe847944_s5.jpg',
    imageAlt: 'VIHALS Sideboard, white, 55 1/8x18 1/2x29 1/2 "',
    url: 'https://www.ikea.com/us/en/p/vihals-sideboard-white-90491720/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: '90542927',
        name: 'VIHALS',
        price: {
          currency: 'USD',
          currentPrice: 149,
          discounted: false,
        },
        measurement: '55 1/8x18 1/2x29 1/2 "',
        typeName: 'Sideboard',
        image:
          'https://www.ikea.com/us/en/images/products/vihals-sideboard-dark-gray__1203691_pe906387_s5.jpg',
        imageAlt: 'VIHALS Sideboard, dark gray, 55 1/8x18 1/2x29 1/2 "',
        url: 'https://www.ikea.com/us/en/p/vihals-sideboard-dark-gray-90542927/',
      },
    ],
  },
  {
    id: '30574351',
    name: 'LACK',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: false,
    },
    measurement: '55 1/8x15 3/8 "',
    typeName: 'Console table',
    image:
      'https://www.ikea.com/us/en/images/products/lack-console-table-white-stained-oak__1258135_pe926258_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lack-console-table-white-stained-oak__1258132_pe926257_s5.jpg',
    imageAlt: 'LACK Console table, white stained oak, 55 1/8x15 3/8 "',
    url: 'https://www.ikea.com/us/en/p/lack-console-table-white-stained-oak-30574351/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Console, sofa & entryway tables',
        key: '16246',
      },
    ],
    variants: [
      {
        id: '10574352',
        name: 'LACK',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '55 1/8x15 3/8 "',
        typeName: 'Console table',
        image:
          'https://www.ikea.com/us/en/images/products/lack-console-table-black-brown__1258140_pe926263_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lack-console-table-black-brown__1258136_pe926261_s5.jpg',
        imageAlt: 'LACK Console table, black-brown, 55 1/8x15 3/8 "',
        url: 'https://www.ikea.com/us/en/p/lack-console-table-black-brown-10574352/',
      },
    ],
  },
  {
    id: '70568720',
    name: 'SKRUVBY',
    price: {
      currency: 'USD',
      currentPrice: 149,
      discounted: false,
    },
    measurement: '47 1/4x14 3/4x35 3/8 "',
    typeName: 'Sideboard',
    image:
      'https://www.ikea.com/us/en/images/products/skruvby-sideboard-black-blue__1241238_pe919728_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skruvby-sideboard-black-blue__1279235_pe931445_s5.jpg',
    imageAlt: 'SKRUVBY Sideboard, black-blue, 47 1/4x14 3/4x35 3/8 "',
    url: 'https://www.ikea.com/us/en/p/skruvby-sideboard-black-blue-70568720/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Display & storage cabinets',
        key: 'st003',
      },
      {
        name: 'Cabinets, hutches & cupboards',
        key: '10409',
      },
    ],
    variants: [
      {
        id: '60568725',
        name: 'SKRUVBY',
        price: {
          currency: 'USD',
          currentPrice: 149,
          discounted: false,
        },
        measurement: '47 1/4x14 3/4x35 3/8 "',
        typeName: 'Sideboard',
        image:
          'https://www.ikea.com/us/en/images/products/skruvby-sideboard-white__1241237_pe919729_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skruvby-sideboard-white__1279237_pe931447_s5.jpg',
        imageAlt: 'SKRUVBY Sideboard, white, 47 1/4x14 3/4x35 3/8 "',
        url: 'https://www.ikea.com/us/en/p/skruvby-sideboard-white-60568725/',
      },
    ],
  },
  {
    id: 's09421949',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 508,
      discounted: false,
    },
    measurement: '70 7/8x16 1/2x29 1/8 "',
    typeName: 'Storage combination with drawers',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-oesarp-dark-olive-green-clear-glass__0996743_pe822499_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-oesarp-dark-olive-green-clear-glass__0996263_pe822207_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with drawers, black-brown Selsviken/Ösarp/dark olive-green clear glass, 70 7/8x16 1/2x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-oesarp-dark-olive-green-clear-glass-s09421949/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Display & storage cabinets',
        key: 'st003',
      },
      {
        name: 'Display cabinets',
        key: '10410',
      },
    ],
    variants: [
      {
        id: 's19421944',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 468,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-dark-olive-green-clear-glass__0996742_pe822501_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-dark-olive-green-clear-glass__0996261_pe822197_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown Selsviken/Stubbarp/dark olive-green clear glass, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-dark-olive-green-clear-glass-s19421944/',
      },
      {
        id: 's79440280',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 498,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-oesarp-dark-olive-green-clear-glass__0996743_pe822499_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-oesarp-dark-olive-green-clear-glass__0996263_pe822207_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown Selsviken/Ösarp/dark olive-green clear glass, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-oesarp-dark-olive-green-clear-glass-s79440280/',
      },
      {
        id: 's99440279',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 458,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-dark-olive-green-clear-glass__0996742_pe822501_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-dark-olive-green-clear-glass__0996261_pe822197_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown Selsviken/Stubbarp/dark olive-green clear glass, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-dark-olive-green-clear-glass-s99440279/',
      },
    ],
  },
  {
    id: 's69324530',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 185,
      discounted: false,
    },
    measurement: '47 1/4x16 1/2x25 5/8 "',
    typeName: 'Storage combination with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-white__0780578_pe760072_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-white__1046648_pe843086_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with doors, white/Lappviken white, 47 1/4x16 1/2x25 5/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-lappviken-white-s69324530/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: 's09324590',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 255,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x25 5/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-black-brown-selsviken-high-gloss-beige__0780534_pe760111_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-black-brown-selsviken-high-gloss-beige__0999169_pe823308_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, black-brown/Selsviken high-gloss/beige, 47 1/4x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-black-brown-selsviken-high-gloss-beige-s09324590/',
      },
      {
        id: 's19324556',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 225,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x25 5/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-laxviken-white__0780570_pe760101_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-stained-oak-effect-laxviken-white__0999207_pe823328_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white stained oak effect/Laxviken white, 47 1/4x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-stained-oak-effect-laxviken-white-s19324556/',
      },
      {
        id: 's19324518',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 250,
          discounted: true,
        },
        measurement: '47 1/4x16 1/2x25 5/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-kallviken-dark-gray-concrete-effect__0780540_pe760113_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-kallviken-dark-gray-concrete-effect__0999174_pe823311_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray Kallviken/dark gray concrete effect, 47 1/4x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-kallviken-dark-gray-concrete-effect-s19324518/',
      },
      {
        id: 's29324551',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 230,
          discounted: true,
        },
        measurement: '47 1/4x16 1/2x25 5/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-laxviken-white__0780544_pe760117_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-laxviken-white__0999180_pe823314_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray/Laxviken white, 47 1/4x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-laxviken-white-s29324551/',
      },
      {
        id: 's79324520',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 275,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x25 5/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-kallviken-dark-gray-concrete-effect__0780559_pe760075_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-kallviken-dark-gray-concrete-effect__0999193_pe823257_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white Kallviken/dark gray concrete effect, 47 1/4x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-kallviken-dark-gray-concrete-effect-s79324520/',
      },
      {
        id: 's19324599',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 255,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x25 5/8 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-selsviken-high-gloss-white__0780564_pe760114_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-selsviken-high-gloss-white__0999198_pe823323_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Selsviken high-gloss/white, 47 1/4x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-selsviken-high-gloss-white-s19324599/',
      },
    ],
  },
  {
    id: 's29195672',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 265,
      discounted: false,
    },
    measurement: '70 7/8x15 3/4x29 1/8 "',
    typeName: 'Storage combination with drawers',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-white__0350143_pe535224_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-white__0352885_pe537259_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with drawers, white stained oak effect/Lappviken white, 70 7/8x15 3/4x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-white-s29195672/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Living room & entryway tables',
        key: '30454',
      },
      {
        name: 'Buffet tables, sideboards & buffet cabinets',
        key: '10412',
      },
    ],
    variants: [
      {
        id: 's29195648',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 448,
          discounted: false,
        },
        measurement: '70 7/8x15 3/4x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-laxviken-white-selsviken-high-gloss-beige__0379388_pe554381_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-laxviken-white-selsviken-high-gloss-beige__0352869_pe537243_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, Laxviken white/Selsviken high-gloss/beige, 70 7/8x15 3/4x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-laxviken-white-selsviken-high-gloss-beige-s29195648/',
      },
      {
        id: 's29302691',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 325,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass__0741375_pe742336_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass__0996283_pe822219_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, white stained oak effect Lappviken/Sindvik/Stubbarp wht stained oak effect clear glass, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass-s29302691/',
      },
      {
        id: 's19302696',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 468,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass__0741367_pe742333_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass__0996265_pe822184_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown/Selsviken/Stubbarp high gloss/black smoked glass, 70 7/8x16 1/2x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass-s19302696/',
      },
      {
        id: 's39325102',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 350,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x25 5/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-black-brown-clear-glass__0781754_pe760942_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-black-brown-clear-glass__0996244_pe822224_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, black-brown Lappviken/Sindvik black-brown clear glass, 70 7/8x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-black-brown-clear-glass-s39325102/',
      },
      {
        id: 's89195645',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 438,
          discounted: true,
        },
        measurement: '70 7/8x15 3/4x29 1/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-laxviken-black-selsviken-high-gloss-black__0379386_pe554379_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-laxviken-black-selsviken-high-gloss-black__0352867_pe537241_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, Laxviken black/Selsviken high-gloss/black, 70 7/8x15 3/4x29 1/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-laxviken-black-selsviken-high-gloss-black-s89195645/',
      },
      {
        id: 's09325108',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 350,
          discounted: false,
        },
        measurement: '70 7/8x16 1/2x25 5/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-white-clear-glass__0781776_pe760921_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-white-clear-glass__0996250_pe822206_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with drawers, white Lappviken/Sindvik white clear glass, 70 7/8x16 1/2x25 5/8 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-white-clear-glass-s09325108/',
      },
    ],
  },
  {
    id: 's29482847',
    name: 'KIVIK',
    price: {
      currency: 'USD',
      currentPrice: 1299,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sofa with chaise',
    image:
      'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-light-beige__1124123_pe875030_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-light-beige__1124121_pe875025_s5.jpg',
    imageAlt: 'KIVIK Sofa with chaise, Tresund light beige',
    url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-tresund-light-beige-s29482847/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: 's09499702',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1299,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa with chaise',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-beige__0781552_pe760858_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-beige__0781550_pe760859_s5.jpg',
        imageAlt: 'KIVIK Sofa with chaise, Gunnared beige',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-gunnared-beige-s09499702/',
      },
      {
        id: 's29499701',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1299,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa with chaise',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-blue__0781556_pe760860_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-blue__0781555_pe760861_s5.jpg',
        imageAlt: 'KIVIK Sofa with chaise, Gunnared blue',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-gunnared-blue-s29499701/',
      },
      {
        id: 's89499699',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1299,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa with chaise',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-light-brown-pink__0781558_pe760862_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-light-brown-pink__0781557_pe760863_s5.jpg',
        imageAlt: 'KIVIK Sofa with chaise, Gunnared light brown-pink',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-gunnared-light-brown-pink-s89499699/',
      },
      {
        id: 's09482848',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1299,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa with chaise',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-anthracite__1124126_pe875027_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-anthracite__1124124_pe875028_s5.jpg',
        imageAlt: 'KIVIK Sofa with chaise, Tresund anthracite',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-tresund-anthracite-s09482848/',
      },
      {
        id: 's49499700',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1299,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa with chaise',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-light-green__0781560_pe760864_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-gunnared-light-green__0781559_pe760865_s5.jpg',
        imageAlt: 'KIVIK Sofa with chaise, Gunnared light green',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-gunnared-light-green-s49499700/',
      },
      {
        id: 's39499692',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1399,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa with chaise',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tallmyra-white-black__0781578_pe760882_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tallmyra-white-black__0781577_pe760883_s5.jpg',
        imageAlt: 'KIVIK Sofa with chaise, Tallmyra white/black',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-tallmyra-white-black-s39499692/',
      },
    ],
  },
  {
    id: 's69216757',
    name: 'FRIHETEN',
    price: {
      currency: 'USD',
      currentPrice: 899,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sleeper sectional,3 seat w/storage',
    image:
      'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray__0175610_pe328883_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray__1089881_pe861727_s5.jpg',
    imageAlt: 'FRIHETEN Sleeper sectional,3 seat w/storage, Skiftebo dark gray',
    url: 'https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray-s69216757/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Sleeper sofas & sofa beds',
        key: '10663',
      },
      {
        name: 'Convertible sofa beds & futons',
        key: '20874',
      },
    ],
    variants: [
      {
        id: 's59297565',
        name: 'FRIHETEN',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sectional,3 seat w/storage',
        image:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige__0690253_pe723174_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige__0690251_pe723175_s5.jpg',
        imageAlt: 'FRIHETEN Sleeper sectional,3 seat w/storage, Hyllie beige',
        url: 'https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige-s59297565/',
      },
      {
        id: 's69297560',
        name: 'FRIHETEN',
        price: {
          currency: 'USD',
          currentPrice: 899,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sectional,3 seat w/storage',
        image:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue__0690243_pe723167_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue__0690241_pe723168_s5.jpg',
        imageAlt: 'FRIHETEN Sleeper sectional,3 seat w/storage, Skiftebo blue',
        url: 'https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue-s69297560/',
      },
      {
        id: 's59297570',
        name: 'FRIHETEN',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sectional,3 seat w/storage',
        image:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray__0690261_pe723182_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray__0690259_pe723183_s5.jpg',
        imageAlt:
          'FRIHETEN Sleeper sectional,3 seat w/storage, Hyllie dark gray',
        url: 'https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray-s59297570/',
      },
      {
        id: 's49216819',
        name: 'FRIHETEN',
        price: {
          currency: 'USD',
          currentPrice: 999,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sectional,3 seat w/storage',
        image:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black__0727225_pe735670_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black__0829726_pe600308_s5.jpg',
        imageAlt: 'FRIHETEN Sleeper sectional,3 seat w/storage, Bomstad black',
        url: 'https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black-s49216819/',
      },
    ],
  },
  {
    id: 's19384116',
    name: 'UPPLAND',
    price: {
      currency: 'USD',
      currentPrice: 849,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sofa',
    image:
      'https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818565_pe774487_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818564_pe774486_s5.jpg',
    imageAlt: 'UPPLAND Sofa, Blekinge white',
    url: 'https://www.ikea.com/us/en/p/uppland-sofa-blekinge-white-s19384116/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: 's39442484',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 849,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-kilanda-light-beige__1194853_pe902103_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-kilanda-light-beige__1194852_pe902102_s5.jpg',
        imageAlt: 'UPPLAND Sofa, Kilanda light beige',
        url: 'https://www.ikea.com/us/en/p/uppland-sofa-kilanda-light-beige-s39442484/',
      },
      {
        id: 's39499965',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 949,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-hillared-beige__0779493_pe759535_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-hillared-beige__0779492_pe759536_s5.jpg',
        imageAlt: 'UPPLAND Sofa, Hillared beige',
        url: 'https://www.ikea.com/us/en/p/uppland-sofa-hillared-beige-s39499965/',
      },
      {
        id: 's19499966',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 949,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-hillared-dark-blue__0779496_pe759538_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-hillared-dark-blue__0779495_pe759539_s5.jpg',
        imageAlt: 'UPPLAND Sofa, Hillared dark blue',
        url: 'https://www.ikea.com/us/en/p/uppland-sofa-hillared-dark-blue-s19499966/',
      },
      {
        id: 's79442482',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 849,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-kilanda-dark-blue__1194843_pe902111_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-kilanda-dark-blue__1194842_pe902092_s5.jpg',
        imageAlt: 'UPPLAND Sofa, Kilanda dark blue',
        url: 'https://www.ikea.com/us/en/p/uppland-sofa-kilanda-dark-blue-s79442482/',
      },
      {
        id: 's39499970',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 899,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-kelinge-rust__1194883_pe902133_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-kelinge-rust__1194882_pe902132_s5.jpg',
        imageAlt: 'UPPLAND Sofa, Kelinge rust',
        url: 'https://www.ikea.com/us/en/p/uppland-sofa-kelinge-rust-s39499970/',
      },
      {
        id: 's19442480',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 799,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-hakebo-gray-green__1194851_pe902101_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-sofa-hakebo-gray-green__1194850_pe902100_s5.jpg',
        imageAlt: 'UPPLAND Sofa, Hakebo gray/green',
        url: 'https://www.ikea.com/us/en/p/uppland-sofa-hakebo-gray-green-s19442480/',
      },
    ],
  },
  {
    id: 's89318321',
    name: 'MORABO',
    price: {
      currency: 'USD',
      currentPrice: 699,
      discounted: true,
    },
    measurement: '',
    typeName: 'Sofa',
    image:
      'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0602117_pe680186_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0815940_pe773127_s5.jpg',
    imageAlt: 'MORABO Sofa, Gunnared dark gray/wood',
    url: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-dark-gray-wood-s89318321/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: 's19416508',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 799,
          discounted: true,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-wood__0990602_pe819086_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-wood__0990603_pe819087_s5.jpg',
        imageAlt: 'MORABO Sofa, Djuparp dark blue/wood',
        url: 'https://www.ikea.com/us/en/p/morabo-sofa-djuparp-dark-blue-wood-s19416508/',
      },
      {
        id: 's39416507',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 799,
          discounted: true,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-metal__0990600_pe819084_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-metal__0990601_pe819085_s5.jpg',
        imageAlt: 'MORABO Sofa, Djuparp dark blue/metal',
        url: 'https://www.ikea.com/us/en/p/morabo-sofa-djuparp-dark-blue-metal-s39416507/',
      },
      {
        id: 's09318320',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: true,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-metal__0602115_pe680184_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-metal__0815939_pe773126_s5.jpg',
        imageAlt: 'MORABO Sofa, Gunnared dark gray/metal',
        url: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-dark-gray-metal-s09318320/',
      },
      {
        id: 's09318339',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: true,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-wood__0602122_pe680191_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-wood__0815942_pe773129_s5.jpg',
        imageAlt: 'MORABO Sofa, Gunnared light green/wood',
        url: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-wood-s09318339/',
      },
      {
        id: 's29318338',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: true,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-metal__0602120_pe680189_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-metal__0815941_pe773128_s5.jpg',
        imageAlt: 'MORABO Sofa, Gunnared light green/metal',
        url: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-metal-s29318338/',
      },
    ],
  },
  {
    id: '70512243',
    name: 'LINANÄS',
    price: {
      currency: 'USD',
      currentPrice: 399,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sofa',
    image:
      'https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-dark-gray__1013908_pe829460_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-dark-gray__1013909_pe829463_s5.jpg',
    imageAlt: 'LINANÄS Sofa, with chaise/Vissle dark gray',
    url: 'https://www.ikea.com/us/en/p/linanaes-sofa-with-chaise-vissle-dark-gray-70512243/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: '60512234',
        name: 'LINANÄS',
        price: {
          currency: 'USD',
          currentPrice: 399,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-beige__1013903_pe829455_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-beige__1013905_pe829459_s5.jpg',
        imageAlt: 'LINANÄS Sofa, with chaise/Vissle beige',
        url: 'https://www.ikea.com/us/en/p/linanaes-sofa-with-chaise-vissle-beige-60512234/',
      },
    ],
  },
  {
    id: 's19389468',
    name: 'PÄRUP',
    price: {
      currency: 'USD',
      currentPrice: 499,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sofa',
    image:
      'https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-gray__1041907_pe841187_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-gray__0985836_pe816822_s5.jpg',
    imageAlt: 'PÄRUP Sofa, Vissle gray',
    url: 'https://www.ikea.com/us/en/p/paerup-sofa-vissle-gray-s19389468/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: 's29389463',
        name: 'PÄRUP',
        price: {
          currency: 'USD',
          currentPrice: 599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-beige__1041904_pe841184_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-beige__0950178_pe800193_s5.jpg',
        imageAlt: 'PÄRUP Sofa, Gunnared beige',
        url: 'https://www.ikea.com/us/en/p/paerup-sofa-gunnared-beige-s29389463/',
      },
      {
        id: 's99514246',
        name: 'PÄRUP',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-fridtuna-dark-gray-blue__1213939_pe911384_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-fridtuna-dark-gray-blue__1213938_pe911411_s5.jpg',
        imageAlt: 'PÄRUP Sofa, Fridtuna dark gray-blue',
        url: 'https://www.ikea.com/us/en/p/paerup-sofa-fridtuna-dark-gray-blue-s99514246/',
      },
      {
        id: 's49389476',
        name: 'PÄRUP',
        price: {
          currency: 'USD',
          currentPrice: 599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-dark-gray__1041905_pe841185_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-dark-gray__0950180_pe800199_s5.jpg',
        imageAlt: 'PÄRUP Sofa, Gunnared dark gray',
        url: 'https://www.ikea.com/us/en/p/paerup-sofa-gunnared-dark-gray-s49389476/',
      },
      {
        id: 's19514274',
        name: 'PÄRUP',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-kelinge-rust__1213914_pe911387_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-kelinge-rust__1213913_pe911386_s5.jpg',
        imageAlt: 'PÄRUP Sofa, Kelinge rust',
        url: 'https://www.ikea.com/us/en/p/paerup-sofa-kelinge-rust-s19514274/',
      },
      {
        id: 's39514268',
        name: 'PÄRUP',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-kelinge-gray-turquoise__1213919_pe911390_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-kelinge-gray-turquoise__1213918_pe911389_s5.jpg',
        imageAlt: 'PÄRUP Sofa, Kelinge gray-turquoise',
        url: 'https://www.ikea.com/us/en/p/paerup-sofa-kelinge-gray-turquoise-s39514268/',
      },
      {
        id: 's49514263',
        name: 'PÄRUP',
        price: {
          currency: 'USD',
          currentPrice: 499,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-yellow-brown__1213924_pe911394_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-yellow-brown__1213923_pe911405_s5.jpg',
        imageAlt: 'PÄRUP Sofa, Vissle yellow-brown',
        url: 'https://www.ikea.com/us/en/p/paerup-sofa-vissle-yellow-brown-s49514263/',
      },
    ],
  },
  {
    id: 's39440593',
    name: 'KIVIK',
    price: {
      currency: 'USD',
      currentPrice: 749,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sofa',
    image:
      'https://www.ikea.com/us/en/images/products/kivik-sofa-tibbleby-beige-gray__1056144_pe848277_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kivik-sofa-tibbleby-beige-gray__1056143_pe848278_s5.jpg',
    imageAlt: 'KIVIK Sofa, Tibbleby beige/gray',
    url: 'https://www.ikea.com/us/en/p/kivik-sofa-tibbleby-beige-gray-s39440593/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: 's19482838',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 849,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-light-beige__1124111_pe875024_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-light-beige__1124110_pe875021_s5.jpg',
        imageAlt: 'KIVIK Sofa, Tresund light beige',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-tresund-light-beige-s19482838/',
      },
      {
        id: 's59499709',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 899,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tallmyra-blue__0781525_pe760839_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tallmyra-blue__0781522_pe760838_s5.jpg',
        imageAlt: 'KIVIK Sofa, Tallmyra blue',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-tallmyra-blue-s59499709/',
      },
      {
        id: 's39499705',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 849,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-gunnared-light-brown-pink__0781499_pe760807_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-gunnared-light-brown-pink__0781496_pe760806_s5.jpg',
        imageAlt: 'KIVIK Sofa, Gunnared light brown-pink',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-gunnared-light-brown-pink-s39499705/',
      },
      {
        id: 's39482837',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 849,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-anthracite__1124113_pe875022_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-anthracite__1124112_pe875023_s5.jpg',
        imageAlt: 'KIVIK Sofa, Tresund anthracite',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-tresund-anthracite-s39482837/',
      },
      {
        id: 's19499706',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 849,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-gunnared-light-green__0781505_pe760811_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-gunnared-light-green__0781502_pe760810_s5.jpg',
        imageAlt: 'KIVIK Sofa, Gunnared light green',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-gunnared-light-green-s19499706/',
      },
      {
        id: 's79499713',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 899,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tallmyra-white-black__0781544_pe760855_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sofa-tallmyra-white-black__0781541_pe760854_s5.jpg',
        imageAlt: 'KIVIK Sofa, Tallmyra white/black',
        url: 'https://www.ikea.com/us/en/p/kivik-sofa-tallmyra-white-black-s79499713/',
      },
    ],
  },
  {
    id: 's99319099',
    name: 'FINNALA',
    price: {
      currency: 'USD',
      currentPrice: 1599,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sofa',
    image:
      'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-beige__0514360_pe639436_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-beige__0778309_pe758882_s5.jpg',
    imageAlt: 'FINNALA Sofa, with chaise/Gunnared beige',
    url: 'https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-gunnared-beige-s99319099/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Three-seat sofas',
        key: '10670',
      },
    ],
    variants: [
      {
        id: 's49319105',
        name: 'FINNALA',
        price: {
          currency: 'USD',
          currentPrice: 1699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-beige__0570252_pe666204_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-beige__0778312_pe758888_s5.jpg',
        imageAlt: 'FINNALA Sofa, with chaise/Tallmyra beige',
        url: 'https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-tallmyra-beige-s49319105/',
      },
      {
        id: 's99319103',
        name: 'FINNALA',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-orrsta-black-blue__0514246_pe639388_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-orrsta-black-blue__0778311_pe758885_s5.jpg',
        imageAlt: 'FINNALA Sofa, with chaise/Orrsta black-blue',
        url: 'https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-orrsta-black-blue-s99319103/',
      },
      {
        id: 's09319107',
        name: 'FINNALA',
        price: {
          currency: 'USD',
          currentPrice: 1699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-black-gray__0570233_pe666196_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-black-gray__0778313_pe758886_s5.jpg',
        imageAlt: 'FINNALA Sofa, with chaise/Tallmyra black/gray',
        url: 'https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-tallmyra-black-gray-s09319107/',
      },
      {
        id: 's39319101',
        name: 'FINNALA',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-medium-gray__0514362_pe639437_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-medium-gray__0778310_pe758883_s5.jpg',
        imageAlt: 'FINNALA Sofa, with chaise/Gunnared medium gray',
        url: 'https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-gunnared-medium-gray-s39319101/',
      },
      {
        id: 's09319428',
        name: 'FINNALA',
        price: {
          currency: 'USD',
          currentPrice: 1549,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sofa',
        image:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-dalstorp-multicolor__0725530_pe734922_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-dalstorp-multicolor__0725581_pe734959_s5.jpg',
        imageAlt: 'FINNALA Sofa, with chaise/Dalstorp multicolor',
        url: 'https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-dalstorp-multicolor-s09319428/',
      },
    ],
  },
  {
    id: 's79440478',
    name: 'KIVIK',
    price: {
      currency: 'USD',
      currentPrice: 1449,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sectional, 5-seat corner',
    image:
      'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tibbleby-beige-gray__1056106_pe848241_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tibbleby-beige-gray__1056105_pe848242_s5.jpg',
    imageAlt: 'KIVIK Sectional, 5-seat corner, Tibbleby beige/gray',
    url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-tibbleby-beige-gray-s79440478/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Fabric sofas',
        key: '10661',
      },
      {
        name: 'Sectionals',
        key: '10671',
      },
    ],
    variants: [
      {
        id: 's39499606',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sectional, 5-seat corner',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-beige__1025039_pe833773_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-beige__0781488_pe760798_s5.jpg',
        imageAlt: 'KIVIK Sectional, 5-seat corner, Gunnared beige',
        url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-gunnared-beige-s39499606/',
      },
      {
        id: 's19499607',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sectional, 5-seat corner',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-blue__1025040_pe833774_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-blue__0781492_pe760802_s5.jpg',
        imageAlt: 'KIVIK Sectional, 5-seat corner, Gunnared blue',
        url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-gunnared-blue-s19499607/',
      },
      {
        id: 's99499608',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sectional, 5-seat corner',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-light-brown-pink__1025041_pe833775_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-light-brown-pink__0781496_pe760806_s5.jpg',
        imageAlt: 'KIVIK Sectional, 5-seat corner, Gunnared light brown-pink',
        url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-gunnared-light-brown-pink-s99499608/',
      },
      {
        id: 's09482867',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sectional, 5-seat corner',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tresund-anthracite__1124074_pe874995_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tresund-anthracite__1124073_pe874990_s5.jpg',
        imageAlt: 'KIVIK Sectional, 5-seat corner, Tresund anthracite',
        url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-tresund-anthracite-s09482867/',
      },
      {
        id: 's79499609',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1599,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sectional, 5-seat corner',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-light-green__1025042_pe833776_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-gunnared-light-green__0781502_pe760810_s5.jpg',
        imageAlt: 'KIVIK Sectional, 5-seat corner, Gunnared light green',
        url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-gunnared-light-green-s79499609/',
      },
      {
        id: 's29499616',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 1699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sectional, 5-seat corner',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tallmyra-white-black__0919539_pe786654_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tallmyra-white-black__0781541_pe760854_s5.jpg',
        imageAlt: 'KIVIK Sectional, 5-seat corner, Tallmyra white/black',
        url: 'https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-tallmyra-white-black-s29499616/',
      },
    ],
  },
  {
    id: 's39491323',
    name: 'MORABO',
    price: {
      currency: 'USD',
      currentPrice: 1699,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sleeper sofa',
    image:
      'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-golden-brown-wood__1170151_pe892700_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-golden-brown-wood__1170148_pe892686_s5.jpg',
    imageAlt: 'MORABO Sleeper sofa, Grann/Bomstad golden brown/wood',
    url: 'https://www.ikea.com/us/en/p/morabo-sleeper-sofa-grann-bomstad-golden-brown-wood-s39491323/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Sofas & sectionals',
        key: 'fu003',
      },
      {
        name: 'Leather & faux leather sofas',
        key: '10662',
      },
      {
        name: 'Leather sofas',
        key: '10691',
      },
    ],
    variants: [
      {
        id: 's19491324',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 1699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-black-wood__1170146_pe892698_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-black-wood__1170143_pe892683_s5.jpg',
        imageAlt: 'MORABO Sleeper sofa, Grann/Bomstad black/wood',
        url: 'https://www.ikea.com/us/en/p/morabo-sleeper-sofa-grann-bomstad-black-wood-s19491324/',
      },
      {
        id: 's99491320',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 1699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-golden-brown-metal__1170136_pe892676_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-golden-brown-metal__1170133_pe892674_s5.jpg',
        imageAlt: 'MORABO Sleeper sofa, Grann/Bomstad golden brown/metal',
        url: 'https://www.ikea.com/us/en/p/morabo-sleeper-sofa-grann-bomstad-golden-brown-metal-s99491320/',
      },
      {
        id: 's19491319',
        name: 'MORABO',
        price: {
          currency: 'USD',
          currentPrice: 1699,
          discounted: false,
        },
        measurement: '',
        typeName: 'Sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-black-metal__1170131_pe892694_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-grann-bomstad-black-metal__1170128_pe892695_s5.jpg',
        imageAlt: 'MORABO Sleeper sofa, Grann/Bomstad black/metal',
        url: 'https://www.ikea.com/us/en/p/morabo-sleeper-sofa-grann-bomstad-black-metal-s19491319/',
      },
    ],
  },
  {
    id: '60579229',
    name: 'SKOGHALL',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '3 pack',
    typeName: 'Hook, self-adhesive',
    image:
      'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-black__1271386_pe929453_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-black__1278772_pe944164_s5.jpg',
    imageAlt: 'SKOGHALL Hook, self-adhesive, black',
    url: 'https://www.ikea.com/us/en/p/skoghall-hook-self-adhesive-black-60579229/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom accessories',
        key: '10555',
      },
      {
        name: 'Towel rails & towel holders',
        key: '10650',
      },
    ],
    variants: [
      {
        id: '30207075',
        name: 'SKOGHALL',
        price: {
          currency: 'USD',
          currentPrice: 4.79,
          discounted: true,
        },
        measurement: '3 pack',
        typeName: 'Hook, self-adhesive',
        image:
          'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-chrome-plated__0583461_pe671221_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-chrome-plated__0863285_pe616006_s5.jpg',
        imageAlt: 'SKOGHALL Hook, self-adhesive, chrome plated',
        url: 'https://www.ikea.com/us/en/p/skoghall-hook-self-adhesive-chrome-plated-30207075/',
      },
      {
        id: '50567830',
        name: 'SKOGHALL',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '3 pack',
        typeName: 'Hook, self-adhesive',
        image:
          'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-chrome-plated__0583461_pe671221_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skoghall-hook-self-adhesive-chrome-plated__1293464_pe935189_s5.jpg',
        imageAlt: 'SKOGHALL Hook, self-adhesive, chrome plated',
        url: 'https://www.ikea.com/us/en/p/skoghall-hook-self-adhesive-chrome-plated-50567830/',
      },
    ],
  },
  {
    id: '60303363',
    name: 'DOPPA',
    price: {
      currency: 'USD',
      currentPrice: 9.49,
      discounted: false,
    },
    measurement: '13x33 "',
    typeName: 'Bathtub mat',
    image:
      'https://www.ikea.com/us/en/images/products/doppa-bathtub-mat-light-gray__0372006_pe553646_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/doppa-bathtub-mat-light-gray__0863771_pe615335_s5.jpg',
    imageAlt: 'DOPPA Bathtub mat, light gray, 13x33 "',
    url: 'https://www.ikea.com/us/en/p/doppa-bathtub-mat-light-gray-60303363/',
    categoryPath: [
      {
        name: 'Home improvement',
        key: 'hi001',
      },
      {
        name: 'Home safety locks, latches & more',
        key: 'sp001',
      },
      {
        name: 'Home safety',
        key: '16256',
      },
    ],
    variants: [
      {
        id: '00549985',
        name: 'DOPPA',
        price: {
          currency: 'USD',
          currentPrice: 9.49,
          discounted: false,
        },
        measurement: '13x33 "',
        typeName: 'Bathtub mat',
        image:
          'https://www.ikea.com/us/en/images/products/doppa-bathtub-mat-beige__1168862_pe892270_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/doppa-bathtub-mat-beige__1168865_pe892273_s5.jpg',
        imageAlt: 'DOPPA Bathtub mat, beige, 13x33 "',
        url: 'https://www.ikea.com/us/en/p/doppa-bathtub-mat-beige-00549985/',
      },
      {
        id: '80549986',
        name: 'DOPPA',
        price: {
          currency: 'USD',
          currentPrice: 9.49,
          discounted: false,
        },
        measurement: '13x33 "',
        typeName: 'Bathtub mat',
        image:
          'https://www.ikea.com/us/en/images/products/doppa-bathtub-mat-gray-green__1168866_pe892274_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/doppa-bathtub-mat-gray-green__1168869_pe892277_s5.jpg',
        imageAlt: 'DOPPA Bathtub mat, gray-green, 13x33 "',
        url: 'https://www.ikea.com/us/en/p/doppa-bathtub-mat-gray-green-80549986/',
      },
    ],
  },
  {
    id: '30587037',
    name: 'GANSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '',
    typeName: '3-piece bathroom set',
    image:
      'https://www.ikea.com/us/en/images/products/gansjoen-3-piece-bathroom-set-bright-yellow__1270424_pe929372_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gansjoen-3-piece-bathroom-set-bright-yellow__1276225_pe930834_s5.jpg',
    imageAlt: 'GANSJÖN 3-piece bathroom set, bright yellow',
    url: 'https://www.ikea.com/us/en/p/gansjoen-3-piece-bathroom-set-bright-yellow-30587037/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom accessories',
        key: '10555',
      },
      {
        name: 'Soap dispensers & soap dishes',
        key: '10656',
      },
    ],
    variants: [
      {
        id: '60555389',
        name: 'GANSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 13.99,
          discounted: true,
        },
        measurement: '',
        typeName: '3-piece bathroom set',
        image:
          'https://www.ikea.com/us/en/images/products/gansjoen-3-piece-bathroom-set-light-gray-blue__1167767_pe891686_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gansjoen-3-piece-bathroom-set-light-gray-blue__1188496_pe899481_s5.jpg',
        imageAlt: 'GANSJÖN 3-piece bathroom set, light gray-blue',
        url: 'https://www.ikea.com/us/en/p/gansjoen-3-piece-bathroom-set-light-gray-blue-60555389/',
      },
      {
        id: '50498889',
        name: 'GANSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '',
        typeName: '3-piece bathroom set',
        image:
          'https://www.ikea.com/us/en/images/products/gansjoen-3-piece-bathroom-set-black__0981044_pe815247_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gansjoen-3-piece-bathroom-set-black__0984938_pe816459_s5.jpg',
        imageAlt: 'GANSJÖN 3-piece bathroom set, black',
        url: 'https://www.ikea.com/us/en/p/gansjoen-3-piece-bathroom-set-black-50498889/',
      },
    ],
  },
  {
    id: '70433364',
    name: 'BROGRUND',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '1 gallon',
    typeName: 'Touch top trash can',
    image:
      'https://www.ikea.com/us/en/images/products/brogrund-touch-top-trash-can-stainless-steel__0733267_pe738907_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brogrund-touch-top-trash-can-stainless-steel__0733264_pe738906_s5.jpg',
    imageAlt: 'BROGRUND Touch top trash can, stainless steel, 1 gallon',
    url: 'https://www.ikea.com/us/en/p/brogrund-touch-top-trash-can-stainless-steel-70433364/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Trash & recycling',
        key: '16213',
      },
      {
        name: 'Bathroom trash cans',
        key: '48940',
      },
    ],
    variants: [
      {
        id: '60524656',
        name: 'BROGRUND',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '1 gallon',
        typeName: 'Touch top trash can',
        image:
          'https://www.ikea.com/us/en/images/products/brogrund-touch-top-trash-can-black__1080381_pe858001_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brogrund-touch-top-trash-can-black__1147629_pe897363_s5.jpg',
        imageAlt: 'BROGRUND Touch top trash can, black, 1 gallon',
        url: 'https://www.ikea.com/us/en/p/brogrund-touch-top-trash-can-black-60524656/',
      },
    ],
  },
  {
    id: '70429003',
    name: 'STORAVAN',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '',
    typeName: '3-piece bathroom set',
    image:
      'https://www.ikea.com/us/en/images/products/storavan-3-piece-bathroom-set-white__0833216_pe777987_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/storavan-3-piece-bathroom-set-white__0915517_pe784784_s5.jpg',
    imageAlt: 'STORAVAN 3-piece bathroom set, white',
    url: 'https://www.ikea.com/us/en/p/storavan-3-piece-bathroom-set-white-70429003/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom accessories',
        key: '10555',
      },
      {
        name: 'Soap dispensers & soap dishes',
        key: '10656',
      },
    ],
    variants: [],
  },
  {
    id: '50523271',
    name: 'BLECKSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '12 ¼x22 "',
    typeName: 'Shower caddy, two tiers',
    image:
      'https://www.ikea.com/us/en/images/products/blecksjoen-shower-caddy-two-tiers-black__1169545_pe896440_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/blecksjoen-shower-caddy-two-tiers-black__1169546_pe892489_s5.jpg',
    imageAlt: 'BLECKSJÖN Shower caddy, two tiers, black, 12 ¼x22 "',
    url: 'https://www.ikea.com/us/en/p/blecksjoen-shower-caddy-two-tiers-black-50523271/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Showers',
        key: '40690',
      },
      {
        name: 'Shower accessories',
        key: '10658',
      },
    ],
    variants: [],
  },
  {
    id: '90498260',
    name: 'FINNINGEN',
    price: {
      currency: 'USD',
      currentPrice: 27.99,
      discounted: true,
    },
    measurement: '',
    typeName: 'Shower shelf',
    image:
      'https://www.ikea.com/us/en/images/products/finningen-shower-shelf-black__0970332_pe811044_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/finningen-shower-shelf-black__0981045_pe815248_s5.jpg',
    imageAlt: 'FINNINGEN Shower shelf, black',
    url: 'https://www.ikea.com/us/en/p/finningen-shower-shelf-black-90498260/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelves',
        key: '20615',
      },
    ],
    variants: [],
  },

  {
    id: '30408979',
    name: 'BROGRUND',
    price: {
      currency: 'USD',
      currentPrice: 22.99,
      discounted: false,
    },
    measurement: '7 ½x22 ¾ "',
    typeName: 'Corner wall shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/brogrund-corner-wall-shelf-unit-stainless-steel__0749048_pe745411_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brogrund-corner-wall-shelf-unit-stainless-steel__0720001_pe732357_s5.jpg',
    imageAlt: 'BROGRUND Corner wall shelf unit, stainless steel, 7 ½x22 ¾ "',
    url: 'https://www.ikea.com/us/en/p/brogrund-corner-wall-shelf-unit-stainless-steel-30408979/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Showers',
        key: '40690',
      },
      {
        name: 'Shower accessories',
        key: '10658',
      },
    ],
    variants: [],
  },
  {
    id: '30501920',
    name: 'SILVTJÄRN',
    price: {
      currency: 'USD',
      currentPrice: 6.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Container',
    image:
      'https://www.ikea.com/us/en/images/products/silvtjaern-container__1140110_pe880634_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/silvtjaern-container__1150132_pe884373_s5.jpg',
    imageAlt: 'SILVTJÄRN Container',
    url: 'https://www.ikea.com/us/en/p/silvtjaern-container-30501920/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom countertop & drawer organizers',
        key: '16233',
      },
    ],
    variants: [],
  },
  {
    id: '10489820',
    name: 'KABOMBA',
    price: {
      currency: 'USD',
      currentPrice: 74.99,
      discounted: false,
    },
    measurement: '19x6 "',
    typeName: 'LED wall lamp',
    image:
      'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-dimmable-matte-black__0990238_pe818810_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-dimmable-matte-black__1032924_pe837058_s5.jpg',
    imageAlt: 'KABOMBA LED wall lamp, dimmable matte/black, 19x6 "',
    url: 'https://www.ikea.com/us/en/p/kabomba-led-wall-lamp-dimmable-matte-black-10489820/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Wall lights',
        key: '20503',
      },
      {
        name: 'Wall lamps',
        key: '20504',
      },
    ],
    variants: [
      {
        id: '80502494',
        name: 'KABOMBA',
        price: {
          currency: 'USD',
          currentPrice: 44.99,
          discounted: true,
        },
        measurement: '19x6 "',
        typeName: 'LED wall lamp',
        image:
          'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-dimmable-chrome-plated-glossy__0990219_pe818790_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-dimmable-chrome-plated-glossy__1032921_pe837057_s5.jpg',
        imageAlt:
          'KABOMBA LED wall lamp, dimmable chrome plated/glossy, 19x6 "',
        url: 'https://www.ikea.com/us/en/p/kabomba-led-wall-lamp-dimmable-chrome-plated-glossy-80502494/',
      },
    ],
  },
  {
    id: '70328626',
    name: 'LEDSJÖ',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '24 "',
    typeName: 'LED wall lamp',
    image:
      'https://www.ikea.com/us/en/images/products/ledsjoe-led-wall-lamp-stainless-steel__0554069_pe659641_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ledsjoe-led-wall-lamp-stainless-steel__0881471_pe659640_s5.jpg',
    imageAlt: 'LEDSJÖ LED wall lamp, stainless steel, 24 "',
    url: 'https://www.ikea.com/us/en/p/ledsjoe-led-wall-lamp-stainless-steel-70328626/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Wall lights',
        key: '20503',
      },
      {
        name: 'Wall lamps',
        key: '20504',
      },
    ],
    variants: [],
  },
  {
    id: '80306940',
    name: 'VALLMORA',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Wall lamp, 3-spots',
    image:
      'https://www.ikea.com/us/en/images/products/vallmora-wall-lamp-3-spots-nickel-plated__0367798_pe549407_s5.jpg',
    imageAlt: 'VALLMORA Wall lamp, 3-spots, nickel plated',
    url: 'https://www.ikea.com/us/en/p/vallmora-wall-lamp-3-spots-nickel-plated-80306940/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Wall lights',
        key: '20503',
      },
      {
        name: 'Wall lamps',
        key: '20504',
      },
    ],
    variants: [],
  },
  {
    id: 's19516824',
    name: 'FAXÄLVEN',
    price: {
      currency: 'USD',
      currentPrice: 358,
      discounted: false,
    },
    measurement: '30x6x37 "',
    typeName: 'Mirror cabinet w built-in lighting',
    image:
      'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect__1198703_pe904178_s5.jpg',
    imageAlt:
      'FAXÄLVEN Mirror cabinet w built-in lighting, oak effect, 30x6x37 "',
    url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect-s19516824/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Mirrors',
        key: '20489',
      },
      {
        name: 'Medicine cabinets with mirror',
        key: '20500',
      },
    ],
    variants: [
      {
        id: 's39516823',
        name: 'FAXÄLVEN',
        price: {
          currency: 'USD',
          currentPrice: 318,
          discounted: false,
        },
        measurement: '24x6x37 "',
        typeName: 'Mirror cabinet w built-in lighting',
        image:
          'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect__1198705_pe904180_s5.jpg',
        imageAlt:
          'FAXÄLVEN Mirror cabinet w built-in lighting, oak effect, 24x6x37 "',
        url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect-s39516823/',
      },
      {
        id: 's59516822',
        name: 'FAXÄLVEN',
        price: {
          currency: 'USD',
          currentPrice: 388,
          discounted: false,
        },
        measurement: '36x6x37 "',
        typeName: 'Mirror cabinet w built-in lighting',
        image:
          'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect__1198701_pe904182_s5.jpg',
        imageAlt:
          'FAXÄLVEN Mirror cabinet w built-in lighting, brown oak effect, 36x6x37 "',
        url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect-s59516822/',
      },
      {
        id: 's79516821',
        name: 'FAXÄLVEN',
        price: {
          currency: 'USD',
          currentPrice: 358,
          discounted: false,
        },
        measurement: '30x6x37 "',
        typeName: 'Mirror cabinet w built-in lighting',
        image:
          'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect__1198700_pe904175_s5.jpg',
        imageAlt:
          'FAXÄLVEN Mirror cabinet w built-in lighting, brown oak effect, 30x6x37 "',
        url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect-s79516821/',
      },
      {
        id: 's29516828',
        name: 'FAXÄLVEN',
        price: {
          currency: 'USD',
          currentPrice: 368,
          discounted: false,
        },
        measurement: '36x6x37 "',
        typeName: 'Mirror cabinet w built-in lighting',
        image:
          'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-white__1198702_pe904177_s5.jpg',
        imageAlt:
          'FAXÄLVEN Mirror cabinet w built-in lighting, white, 36x6x37 "',
        url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-white-s29516828/',
      },
      {
        id: 's49516827',
        name: 'FAXÄLVEN',
        price: {
          currency: 'USD',
          currentPrice: 328,
          discounted: false,
        },
        measurement: '30x6x37 "',
        typeName: 'Mirror cabinet w built-in lighting',
        image:
          'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-white__1198697_pe904172_s5.jpg',
        imageAlt:
          'FAXÄLVEN Mirror cabinet w built-in lighting, white, 30x6x37 "',
        url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-white-s49516827/',
      },
      {
        id: 's69516826',
        name: 'FAXÄLVEN',
        price: {
          currency: 'USD',
          currentPrice: 298,
          discounted: false,
        },
        measurement: '24x6x37 "',
        typeName: 'Mirror cabinet w built-in lighting',
        image:
          'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-white__1198706_pe904181_s5.jpg',
        imageAlt:
          'FAXÄLVEN Mirror cabinet w built-in lighting, white, 24x6x37 "',
        url: 'https://www.ikea.com/us/en/p/faxaelven-mirror-cabinet-w-built-in-lighting-white-s69516826/',
      },
    ],
  },
  {
    id: '90439671',
    name: 'SILVERGLANS',
    price: {
      currency: 'USD',
      currentPrice: 21.99,
      discounted: false,
    },
    measurement: '24 "',
    typeName: 'LED bathroom lighting strip',
    image:
      'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-anthracite__0869953_pe781546_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-anthracite__0969496_pe810801_s5.jpg',
    imageAlt:
      'SILVERGLANS LED bathroom lighting strip, dimmable anthracite, 24 "',
    url: 'https://www.ikea.com/us/en/p/silverglans-led-bathroom-lighting-strip-dimmable-anthracite-90439671/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom lighting',
        key: '10736',
      },
      {
        name: 'Bathroom vanity lights',
        key: '55010',
      },
    ],
    variants: [
      {
        id: '20439679',
        name: 'SILVERGLANS',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '18 "',
        typeName: 'LED bathroom lighting strip',
        image:
          'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-anthracite__0869950_pe781544_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-anthracite__0969453_pe810783_s5.jpg',
        imageAlt:
          'SILVERGLANS LED bathroom lighting strip, dimmable anthracite, 18 "',
        url: 'https://www.ikea.com/us/en/p/silverglans-led-bathroom-lighting-strip-dimmable-anthracite-20439679/',
      },
      {
        id: '00439642',
        name: 'SILVERGLANS',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '18 "',
        typeName: 'LED bathroom lighting strip',
        image:
          'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-white__0869951_pe781545_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-white__0969471_pe810792_s5.jpg',
        imageAlt:
          'SILVERGLANS LED bathroom lighting strip, dimmable white, 18 "',
        url: 'https://www.ikea.com/us/en/p/silverglans-led-bathroom-lighting-strip-dimmable-white-00439642/',
      },
      {
        id: '30439650',
        name: 'SILVERGLANS',
        price: {
          currency: 'USD',
          currentPrice: 21.99,
          discounted: false,
        },
        measurement: '24 "',
        typeName: 'LED bathroom lighting strip',
        image:
          'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-white__0869954_pe781547_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/silverglans-led-bathroom-lighting-strip-dimmable-white__0969505_pe810802_s5.jpg',
        imageAlt:
          'SILVERGLANS LED bathroom lighting strip, dimmable white, 24 "',
        url: 'https://www.ikea.com/us/en/p/silverglans-led-bathroom-lighting-strip-dimmable-white-30439650/',
      },
    ],
  },
  {
    id: '20431635',
    name: 'FRIHULT',
    price: {
      currency: 'USD',
      currentPrice: 34.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Wall lamp',
    image:
      'https://www.ikea.com/us/en/images/products/frihult-wall-lamp-brass-color__0689523_pe723017_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/frihult-wall-lamp-brass-color__0689548_pe723038_s5.jpg',
    imageAlt: 'FRIHULT Wall lamp, brass color',
    url: 'https://www.ikea.com/us/en/p/frihult-wall-lamp-brass-color-20431635/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Wall lights',
        key: '20503',
      },
      {
        name: 'Wall lamps',
        key: '20504',
      },
    ],
    variants: [
      {
        id: '70431628',
        name: 'FRIHULT',
        price: {
          currency: 'USD',
          currentPrice: 34.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Wall lamp',
        image:
          'https://www.ikea.com/us/en/images/products/frihult-wall-lamp-stainless-steel-color__0689525_pe723019_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/frihult-wall-lamp-stainless-steel-color__0689556_pe723048_s5.jpg',
        imageAlt: 'FRIHULT Wall lamp, stainless steel color',
        url: 'https://www.ikea.com/us/en/p/frihult-wall-lamp-stainless-steel-color-70431628/',
      },
      {
        id: '80431642',
        name: 'FRIHULT',
        price: {
          currency: 'USD',
          currentPrice: 34.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Wall lamp',
        image:
          'https://www.ikea.com/us/en/images/products/frihult-wall-lamp-black__0689521_pe723015_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/frihult-wall-lamp-black__0689552_pe723044_s5.jpg',
        imageAlt: 'FRIHULT Wall lamp, black',
        url: 'https://www.ikea.com/us/en/p/frihult-wall-lamp-black-80431642/',
      },
    ],
  },
  {
    id: '10250084',
    name: 'STORJORM',
    price: {
      currency: 'USD',
      currentPrice: 159.99,
      discounted: false,
    },
    measurement: '31 1/2x23 5/8 "',
    typeName: 'Mirror with built-in light',
    image:
      'https://www.ikea.com/us/en/images/products/storjorm-mirror-with-built-in-light-white__0637661_pe698451_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/storjorm-mirror-with-built-in-light-white__0863556_pe567224_s5.jpg',
    imageAlt: 'STORJORM Mirror with built-in light, white, 31 1/2x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/storjorm-mirror-with-built-in-light-white-10250084/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Mirrors',
        key: '20489',
      },
      {
        name: 'Vanity mirrors',
        key: '20498',
      },
    ],
    variants: [],
  },
  {
    id: '20499258',
    name: 'HAVSDUN',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'LED wall lamp',
    image:
      'https://www.ikea.com/us/en/images/products/havsdun-led-wall-lamp-dimmable-white-frosted-glass-white__1034602_pe837794_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/havsdun-led-wall-lamp-dimmable-white-frosted-glass-white__1167874_pe891715_s5.jpg',
    imageAlt: 'HAVSDUN LED wall lamp, dimmable white/frosted glass white',
    url: 'https://www.ikea.com/us/en/p/havsdun-led-wall-lamp-dimmable-white-frosted-glass-white-20499258/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Wall lights',
        key: '20503',
      },
      {
        name: 'Wall lamps',
        key: '20504',
      },
    ],
    variants: [],
  },
  {
    id: '80488370',
    name: 'STYRBAR',
    price: {
      currency: 'USD',
      currentPrice: 13.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Remote control',
    image:
      'https://www.ikea.com/us/en/images/products/styrbar-remote-control-smart-white__0956695_pe804773_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/styrbar-remote-control-smart-white__0959555_pe806080_s5.jpg',
    imageAlt: 'STYRBAR Remote control, smart white',
    url: 'https://www.ikea.com/us/en/p/styrbar-remote-control-smart-white-80488370/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Integrated lighting',
        key: '16280',
      },
      {
        name: 'Bookcase & cabinet lighting',
        key: '16281',
      },
    ],
    variants: [
      {
        id: '50463615',
        name: 'STYRBAR',
        price: {
          currency: 'USD',
          currentPrice: 17.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Remote control',
        image:
          'https://www.ikea.com/us/en/images/products/styrbar-remote-control-smart-stainless-steel__0944238_pe797204_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/styrbar-remote-control-smart-stainless-steel__0975193_pe812671_s5.jpg',
        imageAlt: 'STYRBAR Remote control, smart stainless steel',
        url: 'https://www.ikea.com/us/en/p/styrbar-remote-control-smart-stainless-steel-50463615/',
      },
    ],
  },
  {
    id: '00502501',
    name: 'KABOMBA',
    price: {
      currency: 'USD',
      currentPrice: 37.99,
      discounted: true,
    },
    measurement: '8 "',
    typeName: 'LED wall lamp with mirror',
    image:
      'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-chrome-plated-glossy__1013466_pe829206_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-chrome-plated-glossy__1032938_pe837063_s5.jpg',
    imageAlt:
      'KABOMBA LED wall lamp with mirror, dimmable chrome plated/glossy, 8 "',
    url: 'https://www.ikea.com/us/en/p/kabomba-led-wall-lamp-with-mirror-dimmable-chrome-plated-glossy-00502501/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Wall lights',
        key: '20503',
      },
      {
        name: 'Wall lamps',
        key: '20504',
      },
    ],
    variants: [
      {
        id: '00489806',
        name: 'KABOMBA',
        price: {
          currency: 'USD',
          currentPrice: 64.99,
          discounted: false,
        },
        measurement: '8 "',
        typeName: 'LED wall lamp with mirror',
        image:
          'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-matte-black__1013471_pe829208_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-matte-black__1032942_pe837066_s5.jpg',
        imageAlt:
          'KABOMBA LED wall lamp with mirror, dimmable matte/black, 8 "',
        url: 'https://www.ikea.com/us/en/p/kabomba-led-wall-lamp-with-mirror-dimmable-matte-black-00489806/',
      },
    ],
  },
  {
    id: 's39530715',
    name: 'ÄNGSJÖN / ORRSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 439,
      discounted: false,
    },
    measurement: '31x21 3/4x27 5/8 "',
    typeName: 'Bathroom vanity with sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect__1217229_pe912625_s5.jpg',
    imageAlt:
      'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, oak effect, 31x21 3/4x27 5/8 "',
    url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect-s39530715/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's19530716',
        name: 'ÄNGSJÖN / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 439,
          discounted: false,
        },
        measurement: '31x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1217226_pe912622_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, brown oak effect, 31x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect-s19530716/',
      },
      {
        id: 's49530748',
        name: 'ÄNGSJÖN / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 489,
          discounted: false,
        },
        measurement: '37x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1217241_pe912644_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, brown oak effect, 37x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect-s49530748/',
      },
      {
        id: 's59530762',
        name: 'ÄNGSJÖN / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 569,
          discounted: false,
        },
        measurement: '49x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1217254_pe912649_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, brown oak effect, 49x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect-s59530762/',
      },
      {
        id: 's69530714',
        name: 'ÄNGSJÖN / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 459,
          discounted: false,
        },
        measurement: '31x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1217233_pe912629_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, high gloss white, 31x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white-s69530714/',
      },
      {
        id: 's89530746',
        name: 'ÄNGSJÖN / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 519,
          discounted: false,
        },
        measurement: '37x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1217246_pe912642_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, high gloss white, 37x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white-s89530746/',
      },
      {
        id: 's99530760',
        name: 'ÄNGSJÖN / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 599,
          discounted: false,
        },
        measurement: '49x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1217256_pe912647_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / ORRSJÖN Bathroom vanity with sink & faucet, high gloss white, 49x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white-s99530760/',
      },
    ],
  },
  {
    id: 's59536844',
    name: 'HEMNES / ORRSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 519,
      discounted: false,
    },
    measurement: '37x21 3/4x34 7/8 "',
    typeName: 'Bathroom vanity with sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-gray__1072423_pe855180_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-gray__1072422_pe855179_s5.jpg',
    imageAlt:
      'HEMNES / ORRSJÖN Bathroom vanity with sink & faucet, gray, 37x21 3/4x34 7/8 "',
    url: 'https://www.ikea.com/us/en/p/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-gray-s59536844/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's69536749',
        name: 'HEMNES / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 459,
          discounted: false,
        },
        measurement: '31x21 3/4x34 7/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-gray__1072432_pe855169_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-gray__1072431_pe855168_s5.jpg',
        imageAlt:
          'HEMNES / ORRSJÖN Bathroom vanity with sink & faucet, gray, 31x21 3/4x34 7/8 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-gray-s69536749/',
      },
      {
        id: 's29536845',
        name: 'HEMNES / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 519,
          discounted: false,
        },
        measurement: '37x21 3/4x34 7/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-white__1072420_pe855177_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-white__1072419_pe855176_s5.jpg',
        imageAlt:
          'HEMNES / ORRSJÖN Bathroom vanity with sink & faucet, white, 37x21 3/4x34 7/8 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-white-s29536845/',
      },
      {
        id: 's49536750',
        name: 'HEMNES / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 459,
          discounted: false,
        },
        measurement: '31x21 3/4x34 7/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-white__1072426_pe855172_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-white__1072425_pe855165_s5.jpg',
        imageAlt:
          'HEMNES / ORRSJÖN Bathroom vanity with sink & faucet, white, 31x21 3/4x34 7/8 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-orrsjoen-bathroom-vanity-with-sink-faucet-white-s49536750/',
      },
    ],
  },
  {
    id: 's39530744',
    name: 'HAVBÄCK / ORRSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 529,
      discounted: false,
    },
    measurement: '37 1/8x21 3/4x27 5/8 "',
    typeName: 'Bathroom vanity with sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-dark-gray__1217240_pe912638_s5.jpg',
    imageAlt:
      'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, dark gray, 37 1/8x21 3/4x27 5/8 "',
    url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-dark-gray-s39530744/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's09530745',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 529,
          discounted: false,
        },
        measurement: '37x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-beige__1217248_pe912643_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, beige, 37x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-beige-s09530745/',
      },
      {
        id: 's49530687',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 359,
          discounted: false,
        },
        measurement: '25x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-beige__1217219_pe912616_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, beige, 25x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-beige-s49530687/',
      },
      {
        id: 's69530686',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 359,
          discounted: false,
        },
        measurement: '25x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-dark-gray__1217220_pe912619_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, dark gray, 25x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-dark-gray-s69530686/',
      },
      {
        id: 's69530709',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 409,
          discounted: false,
        },
        measurement: '31x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-dark-gray__1342678_pe949086_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, dark gray, 31x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-dark-gray-s69530709/',
      },
      {
        id: 's29530688',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 339,
          discounted: false,
        },
        measurement: '25x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-white__1217217_pe912614_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, white, 25x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-white-s29530688/',
      },
      {
        id: 's59530743',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 509,
          discounted: false,
        },
        measurement: '37 1/8x21 3/4x27 5/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-white__1217243_pe912635_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Bathroom vanity with sink & faucet, white, 37 1/8x21 3/4x27 5/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-bathroom-vanity-with-sink-faucet-white-s59530743/',
      },
    ],
  },
  {
    id: 's99536390',
    name: 'ÄNGSJÖN / BACKSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 649,
      discounted: false,
    },
    measurement: '49x21 1/2x28 1/4 "',
    typeName: 'Bathroom vanity wtih sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-oak-effect-white-marble-effect__1217564_pe912890_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
    imageAlt:
      'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, oak effect/white marble effect, 49x21 1/2x28 1/4 "',
    url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-oak-effect-white-marble-effect-s99536390/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's19536394',
        name: 'ÄNGSJÖN / BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '49x21 1/2x28 1/4 "',
        typeName: 'Bathroom vanity wtih sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-black-marble-effect__1217554_pe912886_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-black-marble-effect__1094918_pe863670_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, brown oak effect/black marble effect, 49x21 1/2x28 1/4 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-black-marble-effect-s19536394/',
      },
      {
        id: 's39536393',
        name: 'ÄNGSJÖN / BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '49x21 1/2x28 1/4 "',
        typeName: 'Bathroom vanity wtih sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-oak-effect-black-marble-effect__1217557_pe912889_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-oak-effect-black-marble-effect__1094918_pe863670_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, oak effect/black marble effect, 49x21 1/2x28 1/4 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-oak-effect-black-marble-effect-s39536393/',
      },
      {
        id: 's59536392',
        name: 'ÄNGSJÖN / BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '49x21 1/2x28 1/4 "',
        typeName: 'Bathroom vanity wtih sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-white-marble-effect__1217558_pe912896_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, brown oak effect/white marble effect, 49x21 1/2x28 1/4 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-white-marble-effect-s59536392/',
      },
      {
        id: 's69536396',
        name: 'ÄNGSJÖN / BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '49x21 1/2x28 1/4 "',
        typeName: 'Bathroom vanity wtih sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-gray-stone-effect__1217560_pe912892_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-gray-stone-effect__1195618_pe902544_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, brown oak effect/gray stone effect, 49x21 1/2x28 1/4 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-brown-oak-effect-gray-stone-effect-s69536396/',
      },
      {
        id: 's39536388',
        name: 'ÄNGSJÖN / BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 669,
          discounted: false,
        },
        measurement: '49x21 1/2x28 1/4 "',
        typeName: 'Bathroom vanity wtih sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-high-gloss-white-oak-effect-white-marble-effect__1217556_pe912888_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-high-gloss-white-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, high-gloss white/oak effect/white marble effect, 49x21 1/2x28 1/4 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-high-gloss-white-oak-effect-white-marble-effect-s39536388/',
      },
      {
        id: 's79536391',
        name: 'ÄNGSJÖN / BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 669,
          discounted: false,
        },
        measurement: '49x21 1/2x28 1/4 "',
        typeName: 'Bathroom vanity wtih sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-high-gloss-white-brown-oak-effect-white-marble-effect__1217561_pe912893_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-high-gloss-white-brown-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'ÄNGSJÖN / BACKSJÖN Bathroom vanity wtih sink & faucet, high-gloss white/brown oak effect/white marble effect, 49x21 1/2x28 1/4 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-backsjoen-bathroom-vanity-wtih-sink-faucet-high-gloss-white-brown-oak-effect-white-marble-effect-s79536391/',
      },
    ],
  },
  {
    id: '20535355',
    name: 'ÄNGSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 269,
      discounted: false,
    },
    measurement: '36x21x25 1/8 "',
    typeName: 'Bathroom vanity with drawers',
    image:
      'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-oak-effect__1256025_pe924861_s5.jpg',
    imageAlt:
      'ÄNGSJÖN Bathroom vanity with drawers, oak effect, 36x21x25 1/8 "',
    url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-oak-effect-20535355/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets without sink',
        key: '54989',
      },
    ],
    variants: [
      {
        id: '00535337',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: false,
        },
        measurement: '24x21x25 1/8 "',
        typeName: 'Bathroom vanity with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-oak-effect__1256050_pe924886_s5.jpg',
        imageAlt:
          'ÄNGSJÖN Bathroom vanity with drawers, oak effect, 24x21x25 1/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-oak-effect-00535337/',
      },
      {
        id: '10535346',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 229,
          discounted: false,
        },
        measurement: '30x21x25 1/8 "',
        typeName: 'Bathroom vanity with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-oak-effect__1256019_pe924855_s5.jpg',
        imageAlt:
          'ÄNGSJÖN Bathroom vanity with drawers, oak effect, 30x21x25 1/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-oak-effect-10535346/',
      },
      {
        id: '10535365',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 319,
          discounted: false,
        },
        measurement: '48x21x25 1/8 "',
        typeName: 'Bathroom vanity with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-oak-effect__1256020_pe924856_s5.jpg',
        imageAlt:
          'ÄNGSJÖN Bathroom vanity with drawers, oak effect, 48x21x25 1/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-oak-effect-10535365/',
      },
      {
        id: '00535361',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 349,
          discounted: false,
        },
        measurement: '48x21x25 1/8 "',
        typeName: 'Bathroom vanity with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-high-gloss-white__1197664_pe903650_s5.jpg',
        imageAlt:
          'ÄNGSJÖN Bathroom vanity with drawers, high gloss white, 48x21x25 1/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-high-gloss-white-00535361/',
      },
      {
        id: '50535325',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 189,
          discounted: false,
        },
        measurement: '18x21x25 1/8 "',
        typeName: 'Bathroom vanity with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-high-gloss-white__1197650_pe903661_s5.jpg',
        imageAlt:
          'ÄNGSJÖN Bathroom vanity with drawers, high gloss white, 18x21x25 1/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-high-gloss-white-50535325/',
      },
      {
        id: '70535334',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 219,
          discounted: false,
        },
        measurement: '24x21x25 1/8 "',
        typeName: 'Bathroom vanity with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-bathroom-vanity-with-drawers-high-gloss-white__1197655_pe903666_s5.jpg',
        imageAlt:
          'ÄNGSJÖN Bathroom vanity with drawers, high gloss white, 24x21x25 1/8 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-bathroom-vanity-with-drawers-high-gloss-white-70535334/',
      },
    ],
  },
  {
    id: 's29534295',
    name: 'TÄNNFORSEN / RUTSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 679,
      discounted: false,
    },
    measurement: '37x21 1/2x30 1/8 "',
    typeName: 'Bathroom vanity with sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-brown-walnut-effect__1217377_pe912759_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-brown-walnut-effect__1195620_pe902543_s5.jpg',
    imageAlt:
      'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, white/brown walnut effect, 37x21 1/2x30 1/8 "',
    url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-brown-walnut-effect-s29534295/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's09532080',
        name: 'TÄNNFORSEN / RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 614,
          discounted: false,
        },
        measurement: '31x21 1/2x37 1/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-brown-walnut-effect__1217369_pe912734_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-brown-walnut-effect__1195620_pe902543_s5.jpg',
        imageAlt:
          'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, light gray/brown walnut effect, 31x21 1/2x37 1/8 "',
        url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-brown-walnut-effect-s09532080/',
      },
      {
        id: 's29532079',
        name: 'TÄNNFORSEN / RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 614,
          discounted: false,
        },
        measurement: '31x21 1/2x37 1/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-brown-walnut-effect__1217343_pe912723_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-brown-walnut-effect__1195620_pe902543_s5.jpg',
        imageAlt:
          'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, white/brown walnut effect, 31x21 1/2x37 1/8 "',
        url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-brown-walnut-effect-s29532079/',
      },
      {
        id: 's09532075',
        name: 'TÄNNFORSEN / RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 624,
          discounted: false,
        },
        measurement: '31x21 1/2x37 1/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-white-marble-effect__1217370_pe912722_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, light gray/white marble effect, 31x21 1/2x37 1/8 "',
        url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-white-marble-effect-s09532075/',
      },
      {
        id: 's19532070',
        name: 'TÄNNFORSEN / RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 574,
          discounted: false,
        },
        measurement: '25x21 1/2x37 1/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-black-marble-effect__1217308_pe912704_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-black-marble-effect__1094918_pe863670_s5.jpg',
        imageAlt:
          'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, white/black marble effect, 25x21 1/2x37 1/8 "',
        url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-black-marble-effect-s19532070/',
      },
      {
        id: 's39532074',
        name: 'TÄNNFORSEN / RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 624,
          discounted: false,
        },
        measurement: '31x21 1/2x37 1/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-white-marble-effect__1217344_pe912739_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, white/white marble effect, 31x21 1/2x37 1/8 "',
        url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-white-white-marble-effect-s39532074/',
      },
      {
        id: 's39534290',
        name: 'TÄNNFORSEN / RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 669,
          discounted: false,
        },
        measurement: '37x21 1/2x30 1/8 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-white-marble-effect__1217381_pe912778_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'TÄNNFORSEN / RUTSJÖN Bathroom vanity with sink & faucet, light gray/white marble effect, 37x21 1/2x30 1/8 "',
        url: 'https://www.ikea.com/us/en/p/taennforsen-rutsjoen-bathroom-vanity-with-sink-faucet-light-gray-white-marble-effect-s39534290/',
      },
    ],
  },
  {
    id: 's39557837',
    name: 'ENHET / TVÄLLEN',
    price: {
      currency: 'USD',
      currentPrice: 237,
      discounted: false,
    },
    measurement: '19 5/8x19 1/8x26 "',
    typeName: 'Bathroom vanity with sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white__1273152_pe929906_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white__1049627_pe844291_s5.jpg',
    imageAlt:
      'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, white, 19 5/8x19 1/8x26 "',
    url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-s39557837/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's59557841',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 303,
          discounted: false,
        },
        measurement: '25 1/2x19 1/8x26 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-oak-effect__1273157_pe929911_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-oak-effect__1049628_pe844288_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, white/oak effect, 25 1/2x19 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-oak-effect-s59557841/',
      },
      {
        id: 's79557835',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 273,
          discounted: false,
        },
        measurement: '19 5/8x19 1/8x26 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-oak-effect__1273153_pe929905_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-oak-effect__1049622_pe844286_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, white/oak effect, 19 5/8x19 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-oak-effect-s79557835/',
      },
      {
        id: 's29557833',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 288,
          discounted: false,
        },
        measurement: '19 5/8x19 1/8x26 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-gray-gray-frame__1273151_pe929907_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-gray-gray-frame__1049623_pe844287_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, gray/gray frame, 19 5/8x19 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-gray-gray-frame-s29557833/',
      },
      {
        id: 's59551523',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 320,
          discounted: false,
        },
        measurement: '25 1/2x19 1/8x26 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-gray-gray-frame__1273156_pe929912_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-gray-gray-frame__1049621_pe844285_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, gray/gray frame, 25 1/2x19 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-gray-gray-frame-s59551523/',
      },
      {
        id: 's49557813',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 320,
          discounted: false,
        },
        measurement: '25 1/2x19 1/8x26 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-white-frame__1273155_pe929909_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-white-frame__1049624_pe844292_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, white/white frame, 25 1/2x19 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-white-frame-s49557813/',
      },
      {
        id: 's89557811',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 288,
          discounted: false,
        },
        measurement: '19 5/8x19 1/8x26 "',
        typeName: 'Bathroom vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-white-frame__1273154_pe929908_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-white-frame__1049625_pe844289_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity with sink & faucet, white/white frame, 19 5/8x19 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-with-sink-faucet-white-white-frame-s89557811/',
      },
    ],
  },
  {
    id: 's79557821',
    name: 'ENHET / TVÄLLEN',
    price: {
      currency: 'USD',
      currentPrice: 284,
      discounted: false,
    },
    measurement: '25 1/2x13 1/8x26 "',
    typeName: 'Bathroom vanity w doors/sink/faucet',
    image:
      'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-gray-gray-frame__1273144_pe929900_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-gray-gray-frame__1049616_pe844275_s5.jpg',
    imageAlt:
      'ENHET / TVÄLLEN Bathroom vanity w doors/sink/faucet, gray/gray frame, 25 1/2x13 1/8x26 "',
    url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-gray-gray-frame-s79557821/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's39557823',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 272,
          discounted: false,
        },
        measurement: '25 1/2x13 1/8x26 "',
        typeName: 'Bathroom vanity w doors/sink/faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-oak-effect__1273143_pe929897_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-oak-effect__1049613_pe844281_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity w doors/sink/faucet, white/oak effect, 25 1/2x13 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-oak-effect-s39557823/',
      },
      {
        id: 's89557806',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 282,
          discounted: false,
        },
        measurement: '25 1/2x13 1/8x26 "',
        typeName: 'Bathroom vanity w doors/sink/faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-white-frame__1273145_pe929899_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-white-frame__1049610_pe844279_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity w doors/sink/faucet, white/white frame, 25 1/2x13 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-white-frame-s89557806/',
      },
      {
        id: 's89557825',
        name: 'ENHET / TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 224,
          discounted: false,
        },
        measurement: '25 1/2x13 1/8x26 "',
        typeName: 'Bathroom vanity w doors/sink/faucet',
        image:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white__1273146_pe929898_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white__1049618_pe844283_s5.jpg',
        imageAlt:
          'ENHET / TVÄLLEN Bathroom vanity w doors/sink/faucet, white, 25 1/2x13 1/8x26 "',
        url: 'https://www.ikea.com/us/en/p/enhet-tvaellen-bathroom-vanity-w-doors-sink-faucet-white-s89557825/',
      },
    ],
  },
  {
    id: '30180995',
    name: 'GODMORGON',
    price: {
      currency: 'USD',
      currentPrice: 349,
      discounted: true,
    },
    measurement: '31 1/2x18 1/2x22 7/8 "',
    typeName: 'Bathroom vanity with 2 drawers',
    image:
      'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white__0485992_pe621760_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white__0862204_pe624146_s5.jpg',
    imageAlt:
      'GODMORGON Bathroom vanity with 2 drawers, high gloss white, 31 1/2x18 1/2x22 7/8 "',
    url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white-30180995/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets without sink',
        key: '54989',
      },
    ],
    variants: [
      {
        id: '90482749',
        name: 'GODMORGON',
        price: {
          currency: 'USD',
          currentPrice: 389,
          discounted: false,
        },
        measurement: '39 3/8x18 1/2x22 7/8 "',
        typeName: 'Bathroom vanity with 2 drawers',
        image:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-gillburen-dark-gray__0830802_pe776899_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-gillburen-dark-gray__0831545_pe777222_s5.jpg',
        imageAlt:
          'GODMORGON Bathroom vanity with 2 drawers, Gillburen dark gray, 39 3/8x18 1/2x22 7/8 "',
        url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-gillburen-dark-gray-90482749/',
      },
      {
        id: '00281104',
        name: 'GODMORGON',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: false,
        },
        measurement: '31 1/2x18 1/2x22 7/8 "',
        typeName: 'Bathroom vanity with 2 drawers',
        image:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-white__0275669_pe413906_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-white__0869146_pe652592_s5.jpg',
        imageAlt:
          'GODMORGON Bathroom vanity with 2 drawers, white, 31 1/2x18 1/2x22 7/8 "',
        url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-white-00281104/',
      },
      {
        id: '00344106',
        name: 'GODMORGON',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: true,
        },
        measurement: '39 3/8x18 1/2x22 7/8 "',
        typeName: 'Bathroom vanity with 2 drawers',
        image:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-white__0275665_pe413904_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-white__0861551_pe623866_s5.jpg',
        imageAlt:
          'GODMORGON Bathroom vanity with 2 drawers, white, 39 3/8x18 1/2x22 7/8 "',
        url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-white-00344106/',
      },
      {
        id: '40281102',
        name: 'GODMORGON',
        price: {
          currency: 'USD',
          currentPrice: 179,
          discounted: false,
        },
        measurement: '23 5/8x18 1/2x22 7/8 "',
        typeName: 'Bathroom vanity with 2 drawers',
        image:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-white__0275667_pe413905_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-white__0859745_pe624125_s5.jpg',
        imageAlt:
          'GODMORGON Bathroom vanity with 2 drawers, white, 23 5/8x18 1/2x22 7/8 "',
        url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-white-40281102/',
      },
      {
        id: '80195536',
        name: 'GODMORGON',
        price: {
          currency: 'USD',
          currentPrice: 289,
          discounted: true,
        },
        measurement: '23 5/8x18 1/2x22 7/8 "',
        typeName: 'Bathroom vanity with 2 drawers',
        image:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white__0485978_pe621754_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white__0756606_pe748980_s5.jpg',
        imageAlt:
          'GODMORGON Bathroom vanity with 2 drawers, high gloss white, 23 5/8x18 1/2x22 7/8 "',
        url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white-80195536/',
      },
      {
        id: '80344094',
        name: 'GODMORGON',
        price: {
          currency: 'USD',
          currentPrice: 409,
          discounted: true,
        },
        measurement: '39 3/8x18 1/2x22 7/8 "',
        typeName: 'Bathroom vanity with 2 drawers',
        image:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white__0483794_pe621673_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white__0862095_pe647888_s5.jpg',
        imageAlt:
          'GODMORGON Bathroom vanity with 2 drawers, high gloss white, 39 3/8x18 1/2x22 7/8 "',
        url: 'https://www.ikea.com/us/en/p/godmorgon-bathroom-vanity-with-2-drawers-high-gloss-white-80344094/',
      },
    ],
  },
  {
    id: 's19535931',
    name: 'HAVBÄCK / ORRSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 958,
      discounted: false,
    },
    measurement: '67x21 1/2x28 3/8 "',
    typeName: 'Double vanity with sink & faucet',
    image:
      'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-beige-oak-effect-white-marble-effect__1217700_pe912984_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-beige-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
    imageAlt:
      'HAVBÄCK / ORRSJÖN Double vanity with sink & faucet, beige/oak effect/white marble effect, 67x21 1/2x28 3/8 "',
    url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-double-vanity-with-sink-faucet-beige-oak-effect-white-marble-effect-s19535931/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom vanities',
        key: '20719',
      },
      {
        name: 'Vanity cabinets with sink',
        key: '20720',
      },
    ],
    variants: [
      {
        id: 's59535929',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 958,
          discounted: false,
        },
        measurement: '67x21 1/2x28 3/8 "',
        typeName: 'Double vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-beige-brown-oak-effect-white-marble-effect__1217703_pe912990_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-beige-brown-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Double vanity with sink & faucet, beige/brown oak effect/white marble effect, 67x21 1/2x28 3/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-double-vanity-with-sink-faucet-beige-brown-oak-effect-white-marble-effect-s59535929/',
      },
      {
        id: 's79535933',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 958,
          discounted: false,
        },
        measurement: '67x21 1/2x28 3/8 "',
        typeName: 'Double vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-dark-gray-oak-effect-white-marble-effect__1217705_pe912987_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-dark-gray-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Double vanity with sink & faucet, dark gray/oak effect/white marble effect, 67x21 1/2x28 3/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-double-vanity-with-sink-faucet-dark-gray-oak-effect-white-marble-effect-s79535933/',
      },
      {
        id: 's99535932',
        name: 'HAVBÄCK / ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 958,
          discounted: false,
        },
        measurement: '67x21 1/2x28 3/8 "',
        typeName: 'Double vanity with sink & faucet',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-dark-gray-brown-oak-effect-white-marble-effect__1217706_pe912991_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/havbaeck-orrsjoen-double-vanity-with-sink-faucet-dark-gray-brown-oak-effect-white-marble-effect__0859784_pe661622_s5.jpg',
        imageAlt:
          'HAVBÄCK / ORRSJÖN Double vanity with sink & faucet, dark gray/brown oak effect/white marble effect, 67x21 1/2x28 3/8 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-orrsjoen-double-vanity-with-sink-faucet-dark-gray-brown-oak-effect-white-marble-effect-s99535932/',
      },
    ],
  },
  {
    id: 's89516905',
    name: 'ORRSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 140,
      discounted: false,
    },
    measurement: '31x21 3/4 "',
    typeName: 'Sink with water trap',
    image:
      'https://www.ikea.com/us/en/images/products/orrsjoen-sink-with-water-trap-white__1203190_pe906260_s5.jpg',
    imageAlt: 'ORRSJÖN Sink with water trap, white, 31x21 3/4 "',
    url: 'https://www.ikea.com/us/en/p/orrsjoen-sink-with-water-trap-white-s89516905/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: 's29516908',
        name: 'ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 120,
          discounted: false,
        },
        measurement: '25x21 3/4 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/orrsjoen-sink-with-water-trap-white__1203179_pe906251_s5.jpg',
        imageAlt: 'ORRSJÖN Sink with water trap, white, 25x21 3/4 "',
        url: 'https://www.ikea.com/us/en/p/orrsjoen-sink-with-water-trap-white-s29516908/',
      },
      {
        id: 's49516907',
        name: 'ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 190,
          discounted: false,
        },
        measurement: '49x21 3/4 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/orrsjoen-sink-with-water-trap-white__1203183_pe906246_s5.jpg',
        imageAlt: 'ORRSJÖN Sink with water trap, white, 49x21 3/4 "',
        url: 'https://www.ikea.com/us/en/p/orrsjoen-sink-with-water-trap-white-s49516907/',
      },
      {
        id: 's69516906',
        name: 'ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 160,
          discounted: false,
        },
        measurement: '37x21 3/4 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/orrsjoen-sink-with-water-trap-white__1203187_pe906263_s5.jpg',
        imageAlt: 'ORRSJÖN Sink with water trap, white, 37x21 3/4 "',
        url: 'https://www.ikea.com/us/en/p/orrsjoen-sink-with-water-trap-white-s69516906/',
      },
    ],
  },
  {
    id: 's79517024',
    name: 'RUTSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 180,
      discounted: false,
    },
    measurement: '37 3/8x21 7/8 "',
    typeName: 'Sink with water trap',
    image:
      'https://www.ikea.com/us/en/images/products/rutsjoen-sink-with-water-trap-white__1203189_pe906259_s5.jpg',
    imageAlt: 'RUTSJÖN Sink with water trap, white, 37 3/8x21 7/8 "',
    url: 'https://www.ikea.com/us/en/p/rutsjoen-sink-with-water-trap-white-s79517024/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: 's19517022',
        name: 'RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 130,
          discounted: false,
        },
        measurement: '25 1/4x21 7/8 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/rutsjoen-sink-with-water-trap-white__1203178_pe906250_s5.jpg',
        imageAlt: 'RUTSJÖN Sink with water trap, white, 25 1/4x21 7/8 "',
        url: 'https://www.ikea.com/us/en/p/rutsjoen-sink-with-water-trap-white-s19517022/',
      },
      {
        id: 's99517023',
        name: 'RUTSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 160,
          discounted: false,
        },
        measurement: '31 3/8x21 7/8 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/rutsjoen-sink-with-water-trap-white__1203192_pe906261_s5.jpg',
        imageAlt: 'RUTSJÖN Sink with water trap, white, 31 3/8x21 7/8 "',
        url: 'https://www.ikea.com/us/en/p/rutsjoen-sink-with-water-trap-white-s99517023/',
      },
    ],
  },
  {
    id: 's79443090',
    name: 'TVÄLLEN',
    price: {
      currency: 'USD',
      currentPrice: 85,
      discounted: false,
    },
    measurement: '19 5/8x19 1/8 "',
    typeName: 'Sink with water trap',
    image:
      'https://www.ikea.com/us/en/images/products/tvaellen-sink-with-water-trap-white__1079115_pe857437_s5.jpg',
    imageAlt: 'TVÄLLEN Sink with water trap, white, 19 5/8x19 1/8 "',
    url: 'https://www.ikea.com/us/en/p/tvaellen-sink-with-water-trap-white-s79443090/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: 's89443080',
        name: 'TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 90,
          discounted: false,
        },
        measurement: '25 1/2x13 1/8 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/tvaellen-sink-with-water-trap-white__1079117_pe857441_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tvaellen-sink-with-water-trap-white__1079116_pe857438_s5.jpg',
        imageAlt: 'TVÄLLEN Sink with water trap, white, 25 1/2x13 1/8 "',
        url: 'https://www.ikea.com/us/en/p/tvaellen-sink-with-water-trap-white-s89443080/',
      },
      {
        id: 's99443089',
        name: 'TVÄLLEN',
        price: {
          currency: 'USD',
          currentPrice: 105,
          discounted: false,
        },
        measurement: '25 1/2x19 1/8 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/tvaellen-sink-with-water-trap-white__1079119_pe857439_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tvaellen-sink-with-water-trap-white__1079118_pe857440_s5.jpg',
        imageAlt: 'TVÄLLEN Sink with water trap, white, 25 1/2x19 1/8 "',
        url: 'https://www.ikea.com/us/en/p/tvaellen-sink-with-water-trap-white-s99443089/',
      },
    ],
  },
  {
    id: '80195555',
    name: 'ODENSVIK',
    price: {
      currency: 'USD',
      currentPrice: 50,
      discounted: true,
    },
    measurement: '24 3/4x19 1/4x2 3/8 "',
    typeName: 'Sink',
    image:
      'https://www.ikea.com/us/en/images/products/odensvik-sink__0756214_pe748825_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/odensvik-sink__0380428_pe555349_s5.jpg',
    imageAlt: 'ODENSVIK Sink, 24 3/4x19 1/4x2 3/8 "',
    url: 'https://www.ikea.com/us/en/p/odensvik-sink-80195555/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: '40193940',
        name: 'ODENSVIK',
        price: {
          currency: 'USD',
          currentPrice: 160,
          discounted: false,
        },
        measurement: '40 1/2x19 1/4x2 3/8 "',
        typeName: 'Sink',
        image:
          'https://www.ikea.com/us/en/images/products/odensvik-sink__0756212_pe748826_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/odensvik-sink__0379850_pe554892_s5.jpg',
        imageAlt: 'ODENSVIK Sink, 40 1/2x19 1/4x2 3/8 "',
        url: 'https://www.ikea.com/us/en/p/odensvik-sink-40193940/',
      },
      {
        id: '70180804',
        name: 'ODENSVIK',
        price: {
          currency: 'USD',
          currentPrice: 130,
          discounted: false,
        },
        measurement: '32 5/8x19 1/4x2 3/8 "',
        typeName: 'Sink',
        image:
          'https://www.ikea.com/us/en/images/products/odensvik-sink__0756215_pe748823_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/odensvik-sink__0380347_pe555268_s5.jpg',
        imageAlt: 'ODENSVIK Sink, 32 5/8x19 1/4x2 3/8 "',
        url: 'https://www.ikea.com/us/en/p/odensvik-sink-70180804/',
      },
    ],
  },
  {
    id: 's29517007',
    name: 'BACKSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 150,
      discounted: false,
    },
    measurement: '24 1/8x21 "',
    typeName: 'Sink with water trap',
    image:
      'https://www.ikea.com/us/en/images/products/backsjoen-sink-with-water-trap-white__1203181_pe906253_s5.jpg',
    imageAlt: 'BACKSJÖN Sink with water trap, white, 24 1/8x21 "',
    url: 'https://www.ikea.com/us/en/p/backsjoen-sink-with-water-trap-white-s29517007/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: 's09517008',
        name: 'BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 180,
          discounted: false,
        },
        measurement: '30 1/8x21 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/backsjoen-sink-with-water-trap-white__1203193_pe906262_s5.jpg',
        imageAlt: 'BACKSJÖN Sink with water trap, white, 30 1/8x21 "',
        url: 'https://www.ikea.com/us/en/p/backsjoen-sink-with-water-trap-white-s09517008/',
      },
      {
        id: 's69517010',
        name: 'BACKSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 200,
          discounted: false,
        },
        measurement: '36 1/8x21 "',
        typeName: 'Sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/backsjoen-sink-with-water-trap-white__1203188_pe906258_s5.jpg',
        imageAlt: 'BACKSJÖN Sink with water trap, white, 36 1/8x21 "',
        url: 'https://www.ikea.com/us/en/p/backsjoen-sink-with-water-trap-white-s69517010/',
      },
    ],
  },
  {
    id: '20223698',
    name: 'RÄTTVIKEN',
    price: {
      currency: 'USD',
      currentPrice: 80,
      discounted: true,
    },
    measurement: '24 3/8x19 1/4x2 3/8 "',
    typeName: 'Sink',
    image:
      'https://www.ikea.com/us/en/images/products/raettviken-sink-white__0756219_pe748830_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/raettviken-sink-white__0380895_pe555758_s5.jpg',
    imageAlt: 'RÄTTVIKEN Sink, white, 24 3/8x19 1/4x2 3/8 "',
    url: 'https://www.ikea.com/us/en/p/raettviken-sink-white-20223698/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: '40223701',
        name: 'RÄTTVIKEN',
        price: {
          currency: 'USD',
          currentPrice: 160,
          discounted: false,
        },
        measurement: '32 1/4x19 1/4x2 3/8 "',
        typeName: 'Sink',
        image:
          'https://www.ikea.com/us/en/images/products/raettviken-sink-white__0756220_pe748829_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/raettviken-sink-white__0379932_pe554974_s5.jpg',
        imageAlt: 'RÄTTVIKEN Sink, white, 32 1/4x19 1/4x2 3/8 "',
        url: 'https://www.ikea.com/us/en/p/raettviken-sink-white-40223701/',
      },
    ],
  },
  {
    id: '50499025',
    name: 'OXMYREN',
    price: {
      currency: 'USD',
      currentPrice: 190,
      discounted: false,
    },
    measurement: '22x13 ¾ "',
    typeName: 'Countertop sink',
    image:
      'https://www.ikea.com/us/en/images/products/oxmyren-countertop-sink-glass-dark-gray__1166612_pe891193_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/oxmyren-countertop-sink-glass-dark-gray__1148753_pe883813_s5.jpg',
    imageAlt: 'OXMYREN Countertop sink, glass/dark gray, 22x13 ¾ "',
    url: 'https://www.ikea.com/us/en/p/oxmyren-countertop-sink-glass-dark-gray-50499025/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [],
  },
  {
    id: 's89516910',
    name: 'ORRSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 200,
      discounted: false,
    },
    measurement: '49x21 3/4 "',
    typeName: 'Double sink with water trap',
    image:
      'https://www.ikea.com/us/en/images/products/orrsjoen-double-sink-with-water-trap-white__1203191_pe906248_s5.jpg',
    imageAlt: 'ORRSJÖN Double sink with water trap, white, 49x21 3/4 "',
    url: 'https://www.ikea.com/us/en/p/orrsjoen-double-sink-with-water-trap-white-s89516910/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [
      {
        id: 's09516909',
        name: 'ORRSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 170,
          discounted: false,
        },
        measurement: '37x21 3/4 "',
        typeName: 'Double sink with water trap',
        image:
          'https://www.ikea.com/us/en/images/products/orrsjoen-double-sink-with-water-trap-white__1203194_pe906247_s5.jpg',
        imageAlt: 'ORRSJÖN Double sink with water trap, white, 37x21 3/4 "',
        url: 'https://www.ikea.com/us/en/p/orrsjoen-double-sink-with-water-trap-white-s09516909/',
      },
    ],
  },
  {
    id: '70358944',
    name: 'KATTEVIK',
    price: {
      currency: 'USD',
      currentPrice: 120,
      discounted: false,
    },
    measurement: '15 3/4 "',
    typeName: 'Countertop sink',
    image:
      'https://www.ikea.com/us/en/images/products/kattevik-countertop-sink-white__0756184_pe748810_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kattevik-countertop-sink-white__0864234_pe658663_s5.jpg',
    imageAlt: 'KATTEVIK Countertop sink, white, 15 3/4 "',
    url: 'https://www.ikea.com/us/en/p/kattevik-countertop-sink-white-70358944/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [],
  },
  {
    id: '60193944',
    name: 'ODENSVIK',
    price: {
      currency: 'USD',
      currentPrice: 210,
      discounted: false,
    },
    measurement: '48 3/8x19 1/4x2 3/8 "',
    typeName: 'Sink',
    image:
      'https://www.ikea.com/us/en/images/products/odensvik-sink__0756213_pe748824_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/odensvik-sink__0380134_pe555079_s5.jpg',
    imageAlt: 'ODENSVIK Sink, 48 3/8x19 1/4x2 3/8 "',
    url: 'https://www.ikea.com/us/en/p/odensvik-sink-60193944/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom sinks',
        key: '20723',
      },
    ],
    variants: [],
  },
  {
    id: '60574905',
    name: 'FRÖSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 44.99,
      discounted: false,
    },
    measurement: '25 5/8x61 3/8 "',
    typeName: 'Over-the-toilet shelf',
    image:
      'https://www.ikea.com/us/en/images/products/froesjoen-over-the-toilet-shelf-black__1253945_pe924374_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/froesjoen-over-the-toilet-shelf-black__1288804_pe934276_s5.jpg',
    imageAlt: 'FRÖSJÖN Over-the-toilet shelf, black, 25 5/8x61 3/8 "',
    url: 'https://www.ikea.com/us/en/p/froesjoen-over-the-toilet-shelf-black-60574905/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelving units',
        key: '20804',
      },
    ],
    variants: [],
  },

  {
    id: '80535319',
    name: 'ÄNGSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 249,
      discounted: false,
    },
    measurement: '18x15x77 "',
    typeName: 'High cabinet with doors',
    image:
      'https://www.ikea.com/us/en/images/products/aengsjoen-high-cabinet-with-doors-oak-effect__1197657_pe903668_s5.jpg',
    imageAlt: 'ÄNGSJÖN High cabinet with doors, oak effect, 18x15x77 "',
    url: 'https://www.ikea.com/us/en/p/aengsjoen-high-cabinet-with-doors-oak-effect-80535319/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom cabinets',
        key: '20802',
      },
      {
        name: 'Bathroom tall cabinets',
        key: '20806',
      },
    ],
    variants: [
      {
        id: '20535322',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 249,
          discounted: false,
        },
        measurement: '18x15x77 "',
        typeName: 'High cabinet with doors',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-high-cabinet-with-doors-brown-oak-effect__1197642_pe903653_s5.jpg',
        imageAlt:
          'ÄNGSJÖN High cabinet with doors, brown oak effect, 18x15x77 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-high-cabinet-with-doors-brown-oak-effect-20535322/',
      },
      {
        id: '40535316',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 279,
          discounted: false,
        },
        measurement: '18x15x77 "',
        typeName: 'High cabinet with doors',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-high-cabinet-with-doors-high-gloss-white__1197647_pe903658_s5.jpg',
        imageAlt:
          'ÄNGSJÖN High cabinet with doors, high gloss white, 18x15x77 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-high-cabinet-with-doors-high-gloss-white-40535316/',
      },
    ],
  },
  {
    id: '20535181',
    name: 'HAVBÄCK',
    price: {
      currency: 'USD',
      currentPrice: 189,
      discounted: false,
    },
    measurement: '18x15x77 "',
    typeName: 'High cabinet with doors',
    image:
      'https://www.ikea.com/us/en/images/products/havbaeck-high-cabinet-with-doors-white__1197621_pe903637_s5.jpg',
    imageAlt: 'HAVBÄCK High cabinet with doors, white, 18x15x77 "',
    url: 'https://www.ikea.com/us/en/p/havbaeck-high-cabinet-with-doors-white-20535181/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom cabinets',
        key: '20802',
      },
      {
        name: 'Bathroom tall cabinets',
        key: '20806',
      },
    ],
    variants: [
      {
        id: '80574004',
        name: 'HAVBÄCK',
        price: {
          currency: 'USD',
          currentPrice: 209,
          discounted: false,
        },
        measurement: '18x15x77 "',
        typeName: 'High cabinet with doors',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-high-cabinet-with-doors-beige__1200738_pe905012_s5.jpg',
        imageAlt: 'HAVBÄCK High cabinet with doors, beige, 18x15x77 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-high-cabinet-with-doors-beige-80574004/',
      },
      {
        id: '30535190',
        name: 'HAVBÄCK',
        price: {
          currency: 'USD',
          currentPrice: 209,
          discounted: false,
        },
        measurement: '18x15x77 "',
        typeName: 'High cabinet with doors',
        image:
          'https://www.ikea.com/us/en/images/products/havbaeck-high-cabinet-with-doors-dark-gray__1197622_pe903638_s5.jpg',
        imageAlt: 'HAVBÄCK High cabinet with doors, dark gray, 18x15x77 "',
        url: 'https://www.ikea.com/us/en/p/havbaeck-high-cabinet-with-doors-dark-gray-30535190/',
      },
    ],
  },
  {
    id: '30574902',
    name: 'FRÖSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 44.99,
      discounted: false,
    },
    measurement: '15 3/4x61 3/8 "',
    typeName: 'Shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/froesjoen-shelf-unit-black__1253930_pe924359_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/froesjoen-shelf-unit-black__1288639_pe934242_s5.jpg',
    imageAlt: 'FRÖSJÖN Shelf unit, black, 15 3/4x61 3/8 "',
    url: 'https://www.ikea.com/us/en/p/froesjoen-shelf-unit-black-30574902/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelving units',
        key: '20804',
      },
    ],
    variants: [],
  },
  {
    id: '90554538',
    name: 'VISSLAÅN',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Box with lid, set of 5',
    image:
      'https://www.ikea.com/us/en/images/products/visslaan-box-with-lid-set-of-5-gray__1194337_pe901891_s5.jpg',
    imageAlt: 'VISSLAÅN Box with lid, set of 5, gray',
    url: 'https://www.ikea.com/us/en/p/visslaan-box-with-lid-set-of-5-gray-90554538/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom countertop & drawer organizers',
        key: '16233',
      },
    ],
    variants: [],
  },
  {
    id: '40307866',
    name: 'VESKEN',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '14 1/2x9 1/8x39 5/8 "',
    typeName: 'Shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/vesken-shelf-unit-white__0419316_pe576206_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vesken-shelf-unit-white__0419320_pe576209_s5.jpg',
    imageAlt: 'VESKEN Shelf unit, white, 14 1/2x9 1/8x39 5/8 "',
    url: 'https://www.ikea.com/us/en/p/vesken-shelf-unit-white-40307866/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelving units',
        key: '20804',
      },
    ],
    variants: [
      {
        id: '30450807',
        name: 'VESKEN',
        price: {
          currency: 'USD',
          currentPrice: 11.99,
          discounted: false,
        },
        measurement: '14 1/2x9 1/8x39 5/8 "',
        typeName: 'Shelf unit',
        image:
          'https://www.ikea.com/us/en/images/products/vesken-shelf-unit-black__0717495_pe731272_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vesken-shelf-unit-black__0717494_pe731271_s5.jpg',
        imageAlt: 'VESKEN Shelf unit, black, 14 1/2x9 1/8x39 5/8 "',
        url: 'https://www.ikea.com/us/en/p/vesken-shelf-unit-black-30450807/',
      },
    ],
  },
  {
    id: '30564333',
    name: 'MOSSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 169.99,
      discounted: false,
    },
    measurement: '23 5/8x13 3/8x57 1/2 "',
    typeName: 'Glass-door cabinet with 2 doors',
    image:
      'https://www.ikea.com/us/en/images/products/mossjoen-glass-door-cabinet-with-2-doors-anthracite__1239710_pe919027_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mossjoen-glass-door-cabinet-with-2-doors-anthracite__1248942_pe923300_s5.jpg',
    imageAlt:
      'MOSSJÖN Glass-door cabinet with 2 doors, anthracite, 23 5/8x13 3/8x57 1/2 "',
    url: 'https://www.ikea.com/us/en/p/mossjoen-glass-door-cabinet-with-2-doors-anthracite-30564333/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom cabinets',
        key: '20802',
      },
      {
        name: 'Bathroom tall cabinets',
        key: '20806',
      },
    ],
    variants: [],
  },
  {
    id: '30535307',
    name: 'ÄNGSJÖN',
    price: {
      currency: 'USD',
      currentPrice: 129,
      discounted: false,
    },
    measurement: '18x6x37 "',
    typeName: 'Wall cabinet with door',
    image:
      'https://www.ikea.com/us/en/images/products/aengsjoen-wall-cabinet-with-door-high-gloss-white__1197645_pe903656_s5.jpg',
    imageAlt: 'ÄNGSJÖN Wall cabinet with door, high gloss white, 18x6x37 "',
    url: 'https://www.ikea.com/us/en/p/aengsjoen-wall-cabinet-with-door-high-gloss-white-30535307/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom cabinets',
        key: '20802',
      },
      {
        name: 'Bathroom wall cabinets',
        key: '20808',
      },
    ],
    variants: [
      {
        id: '10535313',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 119,
          discounted: false,
        },
        measurement: '18x6x37 "',
        typeName: 'Wall cabinet with door',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-wall-cabinet-with-door-brown-oak-effect__1197638_pe903649_s5.jpg',
        imageAlt: 'ÄNGSJÖN Wall cabinet with door, brown oak effect, 18x6x37 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-wall-cabinet-with-door-brown-oak-effect-10535313/',
      },
      {
        id: '70535310',
        name: 'ÄNGSJÖN',
        price: {
          currency: 'USD',
          currentPrice: 119,
          discounted: false,
        },
        measurement: '18x6x37 "',
        typeName: 'Wall cabinet with door',
        image:
          'https://www.ikea.com/us/en/images/products/aengsjoen-wall-cabinet-with-door-oak-effect__1197654_pe903665_s5.jpg',
        imageAlt: 'ÄNGSJÖN Wall cabinet with door, oak effect, 18x6x37 "',
        url: 'https://www.ikea.com/us/en/p/aengsjoen-wall-cabinet-with-door-oak-effect-70535310/',
      },
    ],
  },
  {
    id: '00562104',
    name: 'VISSLAÅN',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '12 ¾x12 ¼x3 ¼ "',
    typeName: 'Box with compartments',
    image:
      'https://www.ikea.com/us/en/images/products/visslaan-box-with-compartments-gray__1194095_pe901802_s5.jpg',
    imageAlt: 'VISSLAÅN Box with compartments, gray, 12 ¾x12 ¼x3 ¼ "',
    url: 'https://www.ikea.com/us/en/p/visslaan-box-with-compartments-gray-00562104/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom countertop & drawer organizers',
        key: '16233',
      },
    ],
    variants: [],
  },
  {
    id: '90574800',
    name: 'BRIMNES',
    price: {
      currency: 'USD',
      currentPrice: 199.99,
      discounted: true,
    },
    measurement: '46x74 3/4 "',
    typeName: 'Wardrobe with 3 doors',
    image:
      'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-white__1268958_pe928897_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-white__1268954_pe928893_s5.jpg',
    imageAlt: 'BRIMNES Wardrobe with 3 doors, white, 46x74 3/4 "',
    url: 'https://www.ikea.com/us/en/p/brimnes-wardrobe-with-3-doors-white-90574800/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [
      {
        id: '20470293',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 199.99,
          discounted: false,
        },
        measurement: '46 1/8x74 3/4 "',
        typeName: 'Wardrobe with 3 doors',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-gray__0824299_pe776046_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-gray__0818126_pe774311_s5.jpg',
        imageAlt: 'BRIMNES Wardrobe with 3 doors, gray, 46 1/8x74 3/4 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-wardrobe-with-3-doors-gray-20470293/',
      },
      {
        id: '00576139',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 199.99,
          discounted: true,
        },
        measurement: '46x74 3/4 "',
        typeName: 'Wardrobe with 3 doors',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-black__1268962_pe928901_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-black__0746971_pe744297_s5.jpg',
        imageAlt: 'BRIMNES Wardrobe with 3 doors, black, 46x74 3/4 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-wardrobe-with-3-doors-black-00576139/',
      },
    ],
  },
  {
    id: '20441757',
    name: 'KLEPPSTAD',
    price: {
      currency: 'USD',
      currentPrice: 179.99,
      discounted: true,
    },
    measurement: '46 1/8x69 1/4 "',
    typeName: 'Wardrobe with 3 doors',
    image:
      'https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-3-doors-white__0753595_pe748783_s5.jpg',
    imageAlt: 'KLEPPSTAD Wardrobe with 3 doors, white, 46 1/8x69 1/4 "',
    url: 'https://www.ikea.com/us/en/p/kleppstad-wardrobe-with-3-doors-white-20441757/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [],
  },
  {
    id: '30574799',
    name: 'BRIMNES',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: true,
    },
    measurement: '30 3/4x74 3/4 "',
    typeName: 'Wardrobe with 2 doors',
    image:
      'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-2-doors-white__1268948_pe928889_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-2-doors-white__1268944_pe928902_s5.jpg',
    imageAlt: 'BRIMNES Wardrobe with 2 doors, white, 30 3/4x74 3/4 "',
    url: 'https://www.ikea.com/us/en/p/brimnes-wardrobe-with-2-doors-white-30574799/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [
      {
        id: '40470292',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '30 3/4x74 3/4 "',
        typeName: 'Wardrobe with 2 doors',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-2-doors-gray__0820669_pe775103_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-2-doors-gray__0818123_pe774307_s5.jpg',
        imageAlt: 'BRIMNES Wardrobe with 2 doors, gray, 30 3/4x74 3/4 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-wardrobe-with-2-doors-gray-40470292/',
      },
      {
        id: '40576137',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: true,
        },
        measurement: '30 3/4x74 3/4 "',
        typeName: 'Wardrobe with 2 doors',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-2-doors-black__1268953_pe928892_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-2-doors-black__1268949_pe928888_s5.jpg',
        imageAlt: 'BRIMNES Wardrobe with 2 doors, black, 30 3/4x74 3/4 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-wardrobe-with-2-doors-black-40576137/',
      },
    ],
  },
  {
    id: '60453767',
    name: 'RAKKESTAD',
    price: {
      currency: 'USD',
      currentPrice: 249.99,
      discounted: false,
    },
    measurement: '46 1/8x69 1/4 "',
    typeName: 'Wardrobe with sliding doors',
    image:
      'https://www.ikea.com/us/en/images/products/rakkestad-wardrobe-with-sliding-doors-black-brown__0823992_pe776023_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rakkestad-wardrobe-with-sliding-doors-black-brown__0998401_pe823024_s5.jpg',
    imageAlt:
      'RAKKESTAD Wardrobe with sliding doors, black-brown, 46 1/8x69 1/4 "',
    url: 'https://www.ikea.com/us/en/p/rakkestad-wardrobe-with-sliding-doors-black-brown-60453767/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [],
  },
  {
    id: '90586803',
    name: 'KLEPPSTAD',
    price: {
      currency: 'USD',
      currentPrice: 129.99,
      discounted: false,
    },
    measurement: '31 1/4x69 1/4 "',
    typeName: 'Wardrobe with 2 doors',
    image:
      'https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733324_pe748781_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg',
    imageAlt: 'KLEPPSTAD Wardrobe with 2 doors, white, 31 1/4x69 1/4 "',
    url: 'https://www.ikea.com/us/en/p/kleppstad-wardrobe-with-2-doors-white-90586803/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [],
  },
  {
    id: '90437238',
    name: 'KLEPPSTAD',
    price: {
      currency: 'USD',
      currentPrice: 179.99,
      discounted: true,
    },
    measurement: '46 1/8x69 1/4 "',
    typeName: 'Wardrobe with sliding doors',
    image:
      'https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-sliding-doors-white__0823547_pe775917_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-sliding-doors-white__0823548_pe775916_s5.jpg',
    imageAlt: 'KLEPPSTAD Wardrobe with sliding doors, white, 46 1/8x69 1/4 "',
    url: 'https://www.ikea.com/us/en/p/kleppstad-wardrobe-with-sliding-doors-white-90437238/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [],
  },
  {
    id: 's29555103',
    name: 'HAUGA',
    price: {
      currency: 'USD',
      currentPrice: 629.98,
      discounted: false,
    },
    measurement: '100 3/4x21 5/8x78 3/8 "',
    typeName: 'Storage combination with drawers',
    image:
      'https://www.ikea.com/us/en/images/products/hauga-storage-combination-with-drawers-white__1259827_pe926788_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hauga-storage-combination-with-drawers-white__1265585_pe927743_s5.jpg',
    imageAlt:
      'HAUGA Storage combination with drawers, white, 100 3/4x21 5/8x78 3/8 "',
    url: 'https://www.ikea.com/us/en/p/hauga-storage-combination-with-drawers-white-s29555103/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [
      {
        id: 's59555106',
        name: 'HAUGA',
        price: {
          currency: 'USD',
          currentPrice: 629.98,
          discounted: false,
        },
        measurement: '100 3/4x21 5/8x78 3/8 "',
        typeName: 'Storage combination with drawers',
        image:
          'https://www.ikea.com/us/en/images/products/hauga-storage-combination-with-drawers-gray__1259829_pe926790_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hauga-storage-combination-with-drawers-gray__1265589_pe927747_s5.jpg',
        imageAlt:
          'HAUGA Storage combination with drawers, gray, 100 3/4x21 5/8x78 3/8 "',
        url: 'https://www.ikea.com/us/en/p/hauga-storage-combination-with-drawers-gray-s59555106/',
      },
    ],
  },
  {
    id: '40586805',
    name: 'RAKKESTAD',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '31 1/8x69 1/4 "',
    typeName: 'Wardrobe with 2 doors',
    image:
      'https://www.ikea.com/us/en/images/products/rakkestad-wardrobe-with-2-doors-black-brown__0780372_pe760493_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rakkestad-wardrobe-with-2-doors-black-brown__0780434_pe760492_s5.jpg',
    imageAlt: 'RAKKESTAD Wardrobe with 2 doors, black-brown, 31 1/8x69 1/4 "',
    url: 'https://www.ikea.com/us/en/p/rakkestad-wardrobe-with-2-doors-black-brown-40586805/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [],
  },
  {
    id: '10394558',
    name: 'SONGESAND',
    price: {
      currency: 'USD',
      currentPrice: 299.99,
      discounted: false,
    },
    measurement: '47 1/8x23 5/8x75 1/4 "',
    typeName: 'Wardrobe',
    image:
      'https://www.ikea.com/us/en/images/products/songesand-wardrobe-white__0555120_pe660185_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/songesand-wardrobe-white__1358621_pe953903_s5.jpg',
    imageAlt: 'SONGESAND Wardrobe, white, 47 1/8x23 5/8x75 1/4 "',
    url: 'https://www.ikea.com/us/en/p/songesand-wardrobe-white-10394558/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [
      {
        id: '90394559',
        name: 'SONGESAND',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '47 1/8x23 5/8x75 1/4 "',
        typeName: 'Wardrobe',
        image:
          'https://www.ikea.com/us/en/images/products/songesand-wardrobe-brown__0555114_pe660180_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/songesand-wardrobe-brown__1358617_pe953899_s5.jpg',
        imageAlt: 'SONGESAND Wardrobe, brown, 47 1/8x23 5/8x75 1/4 "',
        url: 'https://www.ikea.com/us/en/p/songesand-wardrobe-brown-90394559/',
      },
    ],
  },
  {
    id: '20458837',
    name: 'IDANÄS',
    price: {
      currency: 'USD',
      currentPrice: 449.99,
      discounted: false,
    },
    measurement: '47 5/8x83 1/8 "',
    typeName: 'Wardrobe',
    image:
      'https://www.ikea.com/us/en/images/products/idanaes-wardrobe-white__0898873_pe782674_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/idanaes-wardrobe-white__0931763_pe791240_s5.jpg',
    imageAlt: 'IDANÄS Wardrobe, white, 47 5/8x83 1/8 "',
    url: 'https://www.ikea.com/us/en/p/idanaes-wardrobe-white-20458837/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Narrow wardrobes',
        key: '43631',
      },
    ],
    variants: [
      {
        id: '10458833',
        name: 'IDANÄS',
        price: {
          currency: 'USD',
          currentPrice: 549,
          discounted: false,
        },
        measurement: '47 5/8x83 1/8 "',
        typeName: 'Wardrobe',
        image:
          'https://www.ikea.com/us/en/images/products/idanaes-wardrobe-dark-brown-stained__0898871_pe782673_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/idanaes-wardrobe-dark-brown-stained__0931761_pe791238_s5.jpg',
        imageAlt: 'IDANÄS Wardrobe, dark brown stained, 47 5/8x83 1/8 "',
        url: 'https://www.ikea.com/us/en/p/idanaes-wardrobe-dark-brown-stained-10458833/',
      },
    ],
  },
  {
    id: '80214549',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 89.99,
      discounted: false,
    },
    measurement: '15 3/4x21 5/8 "',
    typeName: '2-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white__0626822_pe693007_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white__1154585_pe886214_s5.jpg',
    imageAlt: 'MALM 2-drawer chest, white, 15 3/4x21 5/8 "',
    url: 'https://www.ikea.com/us/en/p/malm-2-drawer-chest-white-80214549/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '10178601',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: '15 3/4x21 5/8 "',
        typeName: '2-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white-stained-oak-veneer__1154592_pe886219_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white-stained-oak-veneer__1154590_pe886216_s5.jpg',
        imageAlt:
          'MALM 2-drawer chest, white stained oak veneer, 15 3/4x21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-2-drawer-chest-white-stained-oak-veneer-10178601/',
      },
      {
        id: '00103343',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: '15 3/4x21 5/8 "',
        typeName: '2-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-black-brown__1154559_pe886158_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-black-brown__1154561_pe886159_s5.jpg',
        imageAlt: 'MALM 2-drawer chest, black-brown, 15 3/4x21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-2-drawer-chest-black-brown-00103343/',
      },
      {
        id: '50454908',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: '15 3/4x21 5/8 "',
        typeName: '2-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-gray-stained__0750582_pe746779_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-gray-stained__1154576_pe886208_s5.jpg',
        imageAlt: 'MALM 2-drawer chest, gray stained, 15 3/4x21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-2-drawer-chest-gray-stained-50454908/',
      },
    ],
  },
  {
    id: '20576322',
    name: 'KNARREVIK',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '14 5/8x11 "',
    typeName: 'Nightstand',
    image:
      'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-yellow__1262969_pe927179_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-yellow__1295983_pe935638_s5.jpg',
    imageAlt: 'KNARREVIK Nightstand, bright yellow, 14 5/8x11 "',
    url: 'https://www.ikea.com/us/en/p/knarrevik-nightstand-bright-yellow-20576322/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Accent tables',
        key: '10705',
      },
      {
        name: 'End tables & side tables',
        key: '10717',
      },
    ],
    variants: [
      {
        id: '50564134',
        name: 'KNARREVIK',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '14 5/8x11 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-blue__1172595_pe893387_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-blue__1188895_pe899609_s5.jpg',
        imageAlt: 'KNARREVIK Nightstand, bright blue, 14 5/8x11 "',
        url: 'https://www.ikea.com/us/en/p/knarrevik-nightstand-bright-blue-50564134/',
      },
      {
        id: '60576320',
        name: 'KNARREVIK',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '16 1/2x13 1/4 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-yellow__1262968_pe927178_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-bright-yellow__1295978_pe935635_s5.jpg',
        imageAlt: 'KNARREVIK Nightstand, bright yellow, 16 1/2x13 1/4 "',
        url: 'https://www.ikea.com/us/en/p/knarrevik-nightstand-bright-yellow-60576320/',
      },
      {
        id: '00576318',
        name: 'KNARREVIK',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '14 5/8x11 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__1255280_pe924479_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__1295970_pe935630_s5.jpg',
        imageAlt: 'KNARREVIK Nightstand, black, 14 5/8x11 "',
        url: 'https://www.ikea.com/us/en/p/knarrevik-nightstand-black-00576318/',
      },
      {
        id: '20569977',
        name: 'KNARREVIK',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '16 1/2x13 1/4 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__1255278_pe924478_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__1295966_pe935626_s5.jpg',
        imageAlt: 'KNARREVIK Nightstand, black, 16 1/2x13 1/4 "',
        url: 'https://www.ikea.com/us/en/p/knarrevik-nightstand-black-20569977/',
      },
      {
        id: '30381183',
        name: 'KNARREVIK',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '14 5/8x11 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__0578634_pe669464_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg',
        imageAlt: 'KNARREVIK Nightstand, black, 14 5/8x11 "',
        url: 'https://www.ikea.com/us/en/p/knarrevik-nightstand-black-30381183/',
      },
    ],
  },
  {
    id: '80242627',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '21 1/4x26 "',
    typeName: '2-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-white-stain__0651108_pe706676_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-white-stain__0380806_pe555685_s5.jpg',
    imageAlt: 'HEMNES 2-drawer chest, white stain, 21 1/4x26 "',
    url: 'https://www.ikea.com/us/en/p/hemnes-2-drawer-chest-white-stain-80242627/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '50242619',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '21 1/4x26 "',
        typeName: '2-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-black-brown__0651104_pe706672_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-black-brown__0380467_pe555366_s5.jpg',
        imageAlt: 'HEMNES 2-drawer chest, black-brown, 21 1/4x26 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-2-drawer-chest-black-brown-50242619/',
      },
      {
        id: '70381732',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '21 1/4x26 "',
        typeName: '2-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-dark-gray-stained__0528503_pe645824_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-dark-gray-stained__0528504_pe645825_s5.jpg',
        imageAlt: 'HEMNES 2-drawer chest, dark gray stained, 21 1/4x26 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-2-drawer-chest-dark-gray-stained-70381732/',
      },
    ],
  },
  {
    id: '80340454',
    name: 'BRIMNES',
    price: {
      currency: 'USD',
      currentPrice: 79.99,
      discounted: false,
    },
    measurement: '15 3/8x16 1/8 "',
    typeName: 'Nightstand',
    image:
      'https://www.ikea.com/us/en/images/products/brimnes-nightstand-black__0624434_pe691841_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-nightstand-black__1326549_pe944271_s5.jpg',
    imageAlt: 'BRIMNES Nightstand, black, 15 3/8x16 1/8 "',
    url: 'https://www.ikea.com/us/en/p/brimnes-nightstand-black-80340454/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Nightstands',
        key: '20656',
      },
    ],
    variants: [
      {
        id: '50470220',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: '15 3/8x16 1/8 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-nightstand-gray__0817185_pe773891_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-nightstand-gray__0820601_pe775070_s5.jpg',
        imageAlt: 'BRIMNES Nightstand, gray, 15 3/8x16 1/8 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-nightstand-gray-50470220/',
      },
      {
        id: '10234942',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: '15 3/8x16 1/8 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-nightstand-white__0624423_pe691830_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-nightstand-white__1326566_pe944283_s5.jpg',
        imageAlt: 'BRIMNES Nightstand, white, 15 3/8x16 1/8 "',
        url: 'https://www.ikea.com/us/en/p/brimnes-nightstand-white-10234942/',
      },
    ],
  },
  {
    id: '60447677',
    name: 'NORDKISA',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: false,
    },
    measurement: '15 3/4x15 3/4 "',
    typeName: 'Nightstand',
    image:
      'https://www.ikea.com/us/en/images/products/nordkisa-nightstand-bamboo__0756025_pe748745_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nordkisa-nightstand-bamboo__0756023_pe748743_s5.jpg',
    imageAlt: 'NORDKISA Nightstand, bamboo, 15 3/4x15 3/4 "',
    url: 'https://www.ikea.com/us/en/p/nordkisa-nightstand-bamboo-60447677/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Accent tables',
        key: '10705',
      },
      {
        name: 'End tables & side tables',
        key: '10717',
      },
    ],
    variants: [
      {
        id: '00430745',
        name: 'NORDKISA',
        price: {
          currency: 'USD',
          currentPrice: 129.99,
          discounted: false,
        },
        measurement: '23 5/8x15 3/4 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/nordkisa-nightstand-bamboo__0756063_pe748759_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordkisa-nightstand-bamboo__0756062_pe748758_s5.jpg',
        imageAlt: 'NORDKISA Nightstand, bamboo, 23 5/8x15 3/4 "',
        url: 'https://www.ikea.com/us/en/p/nordkisa-nightstand-bamboo-00430745/',
      },
    ],
  },
  {
    id: '60322130',
    name: 'KULLEN',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: true,
    },
    measurement: '13 3/4x19 1/4 "',
    typeName: '2-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/kullen-2-drawer-chest-black-brown__0651177_pe706789_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kullen-2-drawer-chest-black-brown__0778036_pe758812_s5.jpg',
    imageAlt: 'KULLEN 2-drawer chest, black-brown, 13 3/4x19 1/4 "',
    url: 'https://www.ikea.com/us/en/p/kullen-2-drawer-chest-black-brown-60322130/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [],
  },
  {
    id: '90388978',
    name: 'VIKHAMMER',
    price: {
      currency: 'USD',
      currentPrice: 89.99,
      discounted: false,
    },
    measurement: '23 5/8x15 3/8 "',
    typeName: 'Nightstand',
    image:
      'https://www.ikea.com/us/en/images/products/vikhammer-nightstand-black__0569526_pe665936_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vikhammer-nightstand-black__0858511_pe665937_s5.jpg',
    imageAlt: 'VIKHAMMER Nightstand, black, 23 5/8x15 3/8 "',
    url: 'https://www.ikea.com/us/en/p/vikhammer-nightstand-black-90388978/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Nightstands',
        key: '20656',
      },
    ],
    variants: [],
  },
  {
    id: '10584191',
    name: 'HATTÅSEN',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Bedside table/shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-pink__1322585_pe942206_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-pink__1332030_pe946215_s5.jpg',
    imageAlt: 'HATTÅSEN Bedside table/shelf unit, pink',
    url: 'https://www.ikea.com/us/en/p/hattasen-bedside-table-shelf-unit-pink-10584191/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Accent tables',
        key: '10705',
      },
      {
        name: 'End tables & side tables',
        key: '10717',
      },
    ],
    variants: [
      {
        id: '20569232',
        name: 'HATTÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '',
        typeName: 'Bedside table/shelf unit',
        image:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-light-beige__1188929_pe899630_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-light-beige__1221464_pe913817_s5.jpg',
        imageAlt: 'HATTÅSEN Bedside table/shelf unit, light beige',
        url: 'https://www.ikea.com/us/en/p/hattasen-bedside-table-shelf-unit-light-beige-20569232/',
      },
      {
        id: '90584192',
        name: 'HATTÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Bedside table/shelf unit',
        image:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-blue-turquoise__1326172_pe944130_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-blue-turquoise__1332021_pe946206_s5.jpg',
        imageAlt: 'HATTÅSEN Bedside table/shelf unit, blue-turquoise',
        url: 'https://www.ikea.com/us/en/p/hattasen-bedside-table-shelf-unit-blue-turquoise-90584192/',
      },
      {
        id: '00569233',
        name: 'HATTÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '',
        typeName: 'Bedside table/shelf unit',
        image:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-gray-green__1188928_pe899629_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-gray-green__1221509_pe913836_s5.jpg',
        imageAlt: 'HATTÅSEN Bedside table/shelf unit, gray-green',
        url: 'https://www.ikea.com/us/en/p/hattasen-bedside-table-shelf-unit-gray-green-00569233/',
      },
      {
        id: '40569231',
        name: 'HATTÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '',
        typeName: 'Bedside table/shelf unit',
        image:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-black__1111037_pe870640_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-black__1111034_pe870643_s5.jpg',
        imageAlt: 'HATTÅSEN Bedside table/shelf unit, black',
        url: 'https://www.ikea.com/us/en/p/hattasen-bedside-table-shelf-unit-black-40569231/',
      },
      {
        id: '80569234',
        name: 'HATTÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '',
        typeName: 'Bedside table/shelf unit',
        image:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-white__1111044_pe870647_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hattasen-bedside-table-shelf-unit-white__1111041_pe870650_s5.jpg',
        imageAlt: 'HATTÅSEN Bedside table/shelf unit, white',
        url: 'https://www.ikea.com/us/en/p/hattasen-bedside-table-shelf-unit-white-80569234/',
      },
    ],
  },
  {
    id: '20200456',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: true,
    },
    measurement: '18 1/8x13 3/4 "',
    typeName: 'Nightstand',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-nightstand-white-stain__0624424_pe691831_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-nightstand-white-stain__0380136_pe555081_s5.jpg',
    imageAlt: 'HEMNES Nightstand, white stain, 18 1/8x13 3/4 "',
    url: 'https://www.ikea.com/us/en/p/hemnes-nightstand-white-stain-20200456/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Accent tables',
        key: '10705',
      },
      {
        name: 'End tables & side tables',
        key: '10717',
      },
    ],
    variants: [
      {
        id: '90121234',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: true,
        },
        measurement: '18 1/8x13 3/4 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-nightstand-black-brown__0624435_pe691842_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-nightstand-black-brown__0380883_pe555746_s5.jpg',
        imageAlt: 'HEMNES Nightstand, black-brown, 18 1/8x13 3/4 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-nightstand-black-brown-90121234/',
      },
      {
        id: '00381735',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: true,
        },
        measurement: '18 1/8x13 3/4 "',
        typeName: 'Nightstand',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-nightstand-dark-gray-stained__0524623_pe644417_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-nightstand-dark-gray-stained__0524625_pe644419_s5.jpg',
        imageAlt: 'HEMNES Nightstand, dark gray stained, 18 1/8x13 3/4 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-nightstand-dark-gray-stained-00381735/',
      },
    ],
  },
  {
    id: '10483470',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 179.99,
      discounted: false,
    },
    measurement: '22 7/8x31 1/8 "',
    typeName: '3-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-white-stain__1045637_pe842684_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-white-stain__1045638_pe842683_s5.jpg',
    imageAlt: 'HEMNES 3-drawer chest, white stain, 22 7/8x31 1/8 "',
    url: 'https://www.ikea.com/us/en/p/hemnes-3-drawer-chest-white-stain-10483470/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '70483472',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 179.99,
          discounted: false,
        },
        measurement: '22 7/8x31 1/8 "',
        typeName: '3-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-black-brown__0822470_pe775644_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-black-brown__0822469_pe775645_s5.jpg',
        imageAlt: 'HEMNES 3-drawer chest, black-brown, 22 7/8x31 1/8 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-3-drawer-chest-black-brown-70483472/',
      },
    ],
  },
  {
    id: 's09544568',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 468,
      discounted: true,
    },
    measurement: 'Queen',
    typeName: 'Bed frame with mattress',
    image:
      'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-vesteroey-medium-firm__1273588_pe930127_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-vesteroey-medium-firm__1101514_pe866693_s5.jpg',
    imageAlt:
      'MALM Bed frame with mattress, black-brown/Vesteröy medium firm, Queen',
    url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-black-brown-vesteroey-medium-firm-s09544568/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Beds with mattresses included',
        key: '700513',
      },
    ],
    variants: [
      {
        id: 's09544163',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 538,
          discounted: true,
        },
        measurement: 'Full',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-white-stained-oak-veneer-valevag-firm__1273563_pe930110_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-white-stained-oak-veneer-valevag-firm__1101531_pe866710_s5.jpg',
        imageAlt:
          'MALM Bed frame with mattress, white stained oak veneer/Valevåg firm, Full',
        url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-white-stained-oak-veneer-valevag-firm-s09544163/',
      },
      {
        id: 's19544167',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 538,
          discounted: true,
        },
        measurement: 'Full',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-white-stained-oak-veneer-valevag-medium-firm__1273563_pe930110_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-white-stained-oak-veneer-valevag-medium-firm__1101531_pe866710_s5.jpg',
        imageAlt:
          'MALM Bed frame with mattress, white stained oak veneer/Valevåg medium firm, Full',
        url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-white-stained-oak-veneer-valevag-medium-firm-s19544167/',
      },
      {
        id: 's09544417',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 428,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-valevag-medium-firm__1273567_pe930112_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-valevag-medium-firm__1101577_pe866751_s5.jpg',
        imageAlt:
          'MALM Bed frame with mattress, black-brown/Valevåg medium firm, Twin',
        url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-black-brown-valevag-medium-firm-s09544417/',
      },
      {
        id: 's09544422',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 428,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-valevag-firm__1273567_pe930112_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-valevag-firm__1101577_pe866751_s5.jpg',
        imageAlt:
          'MALM Bed frame with mattress, black-brown/Valevåg firm, Twin',
        url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-black-brown-valevag-firm-s09544422/',
      },
      {
        id: 's09543941',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 428,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-gray-stained-valevag-firm__1273554_pe930107_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-gray-stained-valevag-firm__1273559_pe930109_s5.jpg',
        imageAlt:
          'MALM Bed frame with mattress, gray stained/Valevåg firm, Twin',
        url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-gray-stained-valevag-firm-s09543941/',
      },
      {
        id: 's09544846',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 798,
          discounted: true,
        },
        measurement: 'King',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-white-valevag-medium-firm__1273572_pe930119_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-white-valevag-medium-firm__1101527_pe866706_s5.jpg',
        imageAlt:
          'MALM Bed frame with mattress, white/Valevåg medium firm, King',
        url: 'https://www.ikea.com/us/en/p/malm-bed-frame-with-mattress-white-valevag-medium-firm-s09544846/',
      },
    ],
  },
  {
    id: 's39545000',
    name: 'NORDLI',
    price: {
      currency: 'USD',
      currentPrice: 948,
      discounted: false,
    },
    measurement: 'Queen',
    typeName: 'Bed frame with storage and mattress',
    image:
      'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-medium-firm__1273606_pe930141_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-medium-firm__1101996_pe866817_s5.jpg',
    imageAlt:
      'NORDLI Bed frame with storage and mattress, with headboard white/Valevåg medium firm, Queen',
    url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-medium-firm-s39545000/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Beds with mattresses included',
        key: '700513',
      },
    ],
    variants: [
      {
        id: 's39545038',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1218,
          discounted: true,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-firm__1273605_pe930140_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-firm__1101959_pe866808_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, with headboard anthracite/Valevåg firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-firm-s39545038/',
      },
      {
        id: 's59559227',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 948,
          discounted: false,
        },
        measurement: 'Queen',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-medium-firm__1273605_pe930140_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-medium-firm__1101959_pe866808_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, with headboard anthracite/Valevåg medium firm, Queen',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-medium-firm-s59559227/',
      },
      {
        id: 's89545045',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1218,
          discounted: true,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-medium-firm__1273605_pe930140_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-medium-firm__1101959_pe866808_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, with headboard anthracite/Valevåg medium firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-anthracite-valevag-medium-firm-s89545045/',
      },
      {
        id: 's09545025',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1218,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-firm__1273606_pe930141_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-firm__1101996_pe866817_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, with headboard white/Valevåg firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-firm-s09545025/',
      },
      {
        id: 's49545033',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1218,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-medium-firm__1273606_pe930141_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-medium-firm__1101996_pe866817_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, with headboard white/Valevåg medium firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-medium-firm-s49545033/',
      },
      {
        id: 's59544995',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 948,
          discounted: false,
        },
        measurement: 'Queen',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-firm__1273606_pe930141_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-firm__1101996_pe866817_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, with headboard white/Valevåg firm, Queen',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-with-headboard-white-valevag-firm-s59544995/',
      },
    ],
  },
  {
    id: 's89428126',
    name: 'UTÅKER',
    price: {
      currency: 'USD',
      currentPrice: 347,
      discounted: false,
    },
    measurement: 'Twin',
    typeName: 'Stackable bed with 2 mattresses',
    image:
      'https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-2-mattresses-pine-asvang-medium-firm__1161848_pe889564_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-2-mattresses-pine-asvang-medium-firm__1101313_pe866582_s5.jpg',
    imageAlt:
      'UTÅKER Stackable bed with 2 mattresses, pine/Åsvang medium firm, Twin',
    url: 'https://www.ikea.com/us/en/p/utaker-stackable-bed-with-2-mattresses-pine-asvang-medium-firm-s89428126/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Full, Queen and King beds',
        key: '16284',
      },
    ],
    variants: [
      {
        id: 's39428138',
        name: 'UTÅKER',
        price: {
          currency: 'USD',
          currentPrice: 287,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Stackable bed with 2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-2-mattresses-pine-agotnes-firm__1171959_pe893220_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-2-mattresses-pine-agotnes-firm__1101313_pe866582_s5.jpg',
        imageAlt:
          'UTÅKER Stackable bed with 2 mattresses, pine/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/utaker-stackable-bed-with-2-mattresses-pine-agotnes-firm-s39428138/',
      },
      {
        id: 's69423870',
        name: 'UTÅKER',
        price: {
          currency: 'USD',
          currentPrice: 347,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Stackable bed with 2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-2-mattresses-pine-vannareid__1161850_pe889566_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-2-mattresses-pine-vannareid__1101313_pe866582_s5.jpg',
        imageAlt:
          'UTÅKER Stackable bed with 2 mattresses, pine/Vannareid, Twin',
        url: 'https://www.ikea.com/us/en/p/utaker-stackable-bed-with-2-mattresses-pine-vannareid-s69423870/',
      },
    ],
  },
  {
    id: 's19537505',
    name: 'TÄLLÅSEN',
    price: {
      currency: 'USD',
      currentPrice: 598,
      discounted: false,
    },
    measurement: 'Queen',
    typeName: 'Upholstered bed frame with mattress',
    image:
      'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm__1273529_pe930087_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm__1206627_pe907566_s5.jpg',
    imageAlt:
      'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta light beige/Vesteröy medium firm, Queen',
    url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm-s19537505/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Beds with mattresses included',
        key: '700513',
      },
    ],
    variants: [
      {
        id: 's09537501',
        name: 'TÄLLÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 698,
          discounted: false,
        },
        measurement: 'Queen',
        typeName: 'Upholstered bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-valevag-firm__1273471_pe930082_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-valevag-firm__1206627_pe907566_s5.jpg',
        imageAlt:
          'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta light beige/Valevåg firm, Queen',
        url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-valevag-firm-s09537501/',
      },
      {
        id: 's09537539',
        name: 'TÄLLÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 798,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Upholstered bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm__1273529_pe930087_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm__1206611_pe907550_s5.jpg',
        imageAlt:
          'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta light beige/Vesteröy medium firm, King',
        url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm-s09537539/',
      },
      {
        id: 's19537138',
        name: 'TÄLLÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 648,
          discounted: false,
        },
        measurement: 'Full',
        typeName: 'Upholstered bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-valevag-medium-firm__1273468_pe930080_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-valevag-medium-firm__1363658_pe955575_s5.jpg',
        imageAlt:
          'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta gray-green/Valevåg medium firm, Full',
        url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-valevag-medium-firm-s19537138/',
      },
      {
        id: 's19537242',
        name: 'TÄLLÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 898,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Upholstered bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-valevag-medium-firm__1273468_pe930080_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-valevag-medium-firm__1363657_pe955573_s5.jpg',
        imageAlt:
          'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta gray-green/Valevåg medium firm, King',
        url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-valevag-medium-firm-s19537242/',
      },
      {
        id: 's39537533',
        name: 'TÄLLÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 548,
          discounted: false,
        },
        measurement: 'Full',
        typeName: 'Upholstered bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm__1273529_pe930087_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm__1206613_pe907552_s5.jpg',
        imageAlt:
          'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta light beige/Vesteröy medium firm, Full',
        url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-light-beige-vesteroey-medium-firm-s39537533/',
      },
      {
        id: 's99537139',
        name: 'TÄLLÅSEN',
        price: {
          currency: 'USD',
          currentPrice: 548,
          discounted: false,
        },
        measurement: 'Full',
        typeName: 'Upholstered bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-vesteroey-medium-firm__1273474_pe930085_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-vesteroey-medium-firm__1363658_pe955575_s5.jpg',
        imageAlt:
          'TÄLLÅSEN Upholstered bed frame with mattress, Kulsta gray-green/Vesteröy medium firm, Full',
        url: 'https://www.ikea.com/us/en/p/taellasen-upholstered-bed-frame-with-mattress-kulsta-gray-green-vesteroey-medium-firm-s99537139/',
      },
    ],
  },
  {
    id: 's39559855',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 597,
      discounted: false,
    },
    measurement: 'Twin',
    typeName: 'Daybed with 3 drawers/2 mattresses',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-yellow-asvang-medium-firm__1320894_pe941430_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-yellow-asvang-medium-firm__1327300_pe944406_s5.jpg',
    imageAlt:
      'HEMNES Daybed with 3 drawers/2 mattresses, yellow/Åsvang medium firm, Twin',
    url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-yellow-asvang-medium-firm-s39559855/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Twin & single beds',
        key: '16285',
      },
    ],
    variants: [
      {
        id: 's09428168',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 597,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 3 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-black-brown-vannareid-medium-firm__0629721_pe694488_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-black-brown-vannareid-medium-firm__1101309_pe866578_s5.jpg',
        imageAlt:
          'HEMNES Daybed with 3 drawers/2 mattresses, black-brown/Vannareid medium firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-black-brown-vannareid-medium-firm-s09428168/',
      },
      {
        id: 's69428170',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 597,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 3 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-black-brown-asvang-firm__0629721_pe694488_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-black-brown-asvang-firm__1101309_pe866578_s5.jpg',
        imageAlt:
          'HEMNES Daybed with 3 drawers/2 mattresses, black-brown/Åsvang firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-black-brown-asvang-firm-s69428170/',
      },
      {
        id: 's09428173',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 597,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 3 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-gray-asvang-medium-firm__1163072_pe890113_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-gray-asvang-medium-firm__1101306_pe866575_s5.jpg',
        imageAlt:
          'HEMNES Daybed with 3 drawers/2 mattresses, gray/Åsvang medium firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-gray-asvang-medium-firm-s09428173/',
      },
      {
        id: 's29428172',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 537,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 3 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-gray-agotnes-firm__1180539_pe896364_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-gray-agotnes-firm__1101306_pe866575_s5.jpg',
        imageAlt:
          'HEMNES Daybed with 3 drawers/2 mattresses, gray/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-gray-agotnes-firm-s29428172/',
      },
      {
        id: 's49559874',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 537,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 3 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-yellow-agotnes-firm__1320895_pe941431_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-yellow-agotnes-firm__1327300_pe944406_s5.jpg',
        imageAlt:
          'HEMNES Daybed with 3 drawers/2 mattresses, yellow/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-yellow-agotnes-firm-s49559874/',
      },
      {
        id: 's39428124',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 537,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 3 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-white-agotnes-firm__1180458_pe896335_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-daybed-with-3-drawers-2-mattresses-white-agotnes-firm__1078996_pe857423_s5.jpg',
        imageAlt:
          'HEMNES Daybed with 3 drawers/2 mattresses, white/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-daybed-with-3-drawers-2-mattresses-white-agotnes-firm-s39428124/',
      },
    ],
  },
  {
    id: 's99543159',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 648,
      discounted: false,
    },
    measurement: 'Queen',
    typeName: 'Bed frame with mattress',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1273548_pe930103_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1101574_pe866748_s5.jpg',
    imageAlt: 'HEMNES Bed frame with mattress, white stain/Valevåg firm, Queen',
    url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-white-stain-valevag-firm-s99543159/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Beds with mattresses included',
        key: '700513',
      },
    ],
    variants: [
      {
        id: 's39543322',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 518,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-dark-gray-stained-valevag-firm__1236196_pe917471_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-dark-gray-stained-valevag-firm__1236266_pe917535_s5.jpg',
        imageAlt:
          'HEMNES Bed frame with mattress, dark gray stained/Valevåg firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-dark-gray-stained-valevag-firm-s39543322/',
      },
      {
        id: 's69543325',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 518,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-dark-gray-stained-valevag-medium-firm__1236196_pe917471_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-dark-gray-stained-valevag-medium-firm__1236266_pe917535_s5.jpg',
        imageAlt:
          'HEMNES Bed frame with mattress, dark gray stained/Valevåg medium firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-dark-gray-stained-valevag-medium-firm-s69543325/',
      },
      {
        id: 's19541989',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 518,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1273547_pe930102_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__0948899_pe799361_s5.jpg',
        imageAlt:
          'HEMNES Bed frame with mattress, white stain/Valevåg firm, Twin',
        url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-white-stain-valevag-firm-s19541989/',
      },
      {
        id: 's19543139',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 608,
          discounted: false,
        },
        measurement: 'Full',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-medium-firm__1273548_pe930103_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-medium-firm__1101574_pe866748_s5.jpg',
        imageAlt:
          'HEMNES Bed frame with mattress, white stain/Valevåg medium firm, Full',
        url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-white-stain-valevag-medium-firm-s19543139/',
      },
      {
        id: 's29543134',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 608,
          discounted: false,
        },
        measurement: 'Full',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1273548_pe930103_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1101574_pe866748_s5.jpg',
        imageAlt:
          'HEMNES Bed frame with mattress, white stain/Valevåg firm, Full',
        url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-white-stain-valevag-firm-s29543134/',
      },
      {
        id: 's29543148',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 848,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with mattress',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1273548_pe930103_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-mattress-white-stain-valevag-firm__1101574_pe866748_s5.jpg',
        imageAlt:
          'HEMNES Bed frame with mattress, white stain/Valevåg firm, King',
        url: 'https://www.ikea.com/us/en/p/hemnes-bed-frame-with-mattress-white-stain-valevag-firm-s29543148/',
      },
    ],
  },
  {
    id: 's39559214',
    name: 'NORDLI',
    price: {
      currency: 'USD',
      currentPrice: 798,
      discounted: false,
    },
    measurement: 'Queen',
    typeName: 'Bed frame with storage and mattress',
    image:
      'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-medium-firm__1273597_pe930132_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-medium-firm__1101981_pe866794_s5.jpg',
    imageAlt:
      'NORDLI Bed frame with storage and mattress, anthracite/Valevåg medium firm, Queen',
    url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-medium-firm-s39559214/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Beds with mattresses included',
        key: '700513',
      },
    ],
    variants: [
      {
        id: 's39544958',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1048,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-firm__1273597_pe930132_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-firm__1101981_pe866794_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, anthracite/Valevåg firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-firm-s39544958/',
      },
      {
        id: 's39544963',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1048,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-medium-firm__1273597_pe930132_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-medium-firm__1101981_pe866794_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, anthracite/Valevåg medium firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-medium-firm-s39544963/',
      },
      {
        id: 's79559212',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 798,
          discounted: false,
        },
        measurement: 'Queen',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-firm__1273597_pe930132_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-firm__1101981_pe866794_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, anthracite/Valevåg firm, Queen',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-anthracite-valevag-firm-s79559212/',
      },
      {
        id: 's49544953',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1048,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-white-valevag-medium-firm__1273599_pe930134_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-white-valevag-medium-firm__1102033_pe866854_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, white/Valevåg medium firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-white-valevag-medium-firm-s49544953/',
      },
      {
        id: 's59544938',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 798,
          discounted: false,
        },
        measurement: 'Queen',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-white-valevag-medium-firm__1273599_pe930134_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-white-valevag-medium-firm__1102033_pe866854_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, white/Valevåg medium firm, Queen',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-white-valevag-medium-firm-s59544938/',
      },
      {
        id: 's89544951',
        name: 'NORDLI',
        price: {
          currency: 'USD',
          currentPrice: 1048,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Bed frame with storage and mattress',
        image:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-white-valevag-firm__1273599_pe930134_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-and-mattress-white-valevag-firm__1102033_pe866854_s5.jpg',
        imageAlt:
          'NORDLI Bed frame with storage and mattress, white/Valevåg firm, King',
        url: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-and-mattress-white-valevag-firm-s89544951/',
      },
    ],
  },
  {
    id: 's69495956',
    name: 'BRIMNES',
    price: {
      currency: 'USD',
      currentPrice: 447,
      discounted: true,
    },
    measurement: 'Twin',
    typeName: 'Daybed with 2 drawers/2 mattresses',
    image:
      'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-white-asvang-medium-firm__1161840_pe889557_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-white-asvang-medium-firm__1101301_pe866570_s5.jpg',
    imageAlt:
      'BRIMNES Daybed with 2 drawers/2 mattresses, white/Åsvang medium firm, Twin',
    url: 'https://www.ikea.com/us/en/p/brimnes-daybed-with-2-drawers-2-mattresses-white-asvang-medium-firm-s69495956/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Twin & single beds',
        key: '16285',
      },
    ],
    variants: [
      {
        id: 's09500673',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 387,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-gray-agotnes-firm__0824301_pe776048_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-gray-agotnes-firm__1101305_pe866574_s5.jpg',
        imageAlt:
          'BRIMNES Daybed with 2 drawers/2 mattresses, gray/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/brimnes-daybed-with-2-drawers-2-mattresses-gray-agotnes-firm-s09500673/',
      },
      {
        id: 's39500676',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 447,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-gray-vannareid-firm__0824301_pe776048_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-gray-vannareid-firm__1101305_pe866574_s5.jpg',
        imageAlt:
          'BRIMNES Daybed with 2 drawers/2 mattresses, gray/Vannareid firm, Twin',
        url: 'https://www.ikea.com/us/en/p/brimnes-daybed-with-2-drawers-2-mattresses-gray-vannareid-firm-s39500676/',
      },
      {
        id: 's89500674',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 447,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-gray-asvang-medium-firm__0824301_pe776048_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-gray-asvang-medium-firm__1101305_pe866574_s5.jpg',
        imageAlt:
          'BRIMNES Daybed with 2 drawers/2 mattresses, gray/Åsvang medium firm, Twin',
        url: 'https://www.ikea.com/us/en/p/brimnes-daybed-with-2-drawers-2-mattresses-gray-asvang-medium-firm-s89500674/',
      },
      {
        id: 's69427076',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 387,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-white-agotnes-firm__1171930_pe893212_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-white-agotnes-firm__1101301_pe866570_s5.jpg',
        imageAlt:
          'BRIMNES Daybed with 2 drawers/2 mattresses, white/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/brimnes-daybed-with-2-drawers-2-mattresses-white-agotnes-firm-s69427076/',
      },
      {
        id: 's89495955',
        name: 'BRIMNES',
        price: {
          currency: 'USD',
          currentPrice: 447,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-white-vannareid-firm__1161832_pe889556_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/brimnes-daybed-with-2-drawers-2-mattresses-white-vannareid-firm__1101301_pe866570_s5.jpg',
        imageAlt:
          'BRIMNES Daybed with 2 drawers/2 mattresses, white/Vannareid firm, Twin',
        url: 'https://www.ikea.com/us/en/p/brimnes-daybed-with-2-drawers-2-mattresses-white-vannareid-firm-s89495955/',
      },
    ],
  },
  {
    id: 's09428093',
    name: 'FYRESDAL',
    price: {
      currency: 'USD',
      currentPrice: 397,
      discounted: false,
    },
    measurement: 'Twin',
    typeName: 'Daybed with 2 mattresses',
    image:
      'https://www.ikea.com/us/en/images/products/fyresdal-daybed-with-2-mattresses-black-asvang-medium-firm__1162174_pe889672_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fyresdal-daybed-with-2-mattresses-black-asvang-medium-firm__1101302_pe866571_s5.jpg',
    imageAlt:
      'FYRESDAL Daybed with 2 mattresses, black/Åsvang medium firm, Twin',
    url: 'https://www.ikea.com/us/en/p/fyresdal-daybed-with-2-mattresses-black-asvang-medium-firm-s09428093/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Twin & single beds',
        key: '16285',
      },
    ],
    variants: [
      {
        id: 's19428101',
        name: 'FYRESDAL',
        price: {
          currency: 'USD',
          currentPrice: 337,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/fyresdal-daybed-with-2-mattresses-black-agotnes-firm__1171956_pe893219_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/fyresdal-daybed-with-2-mattresses-black-agotnes-firm__1101302_pe866571_s5.jpg',
        imageAlt: 'FYRESDAL Daybed with 2 mattresses, black/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/fyresdal-daybed-with-2-mattresses-black-agotnes-firm-s19428101/',
      },
      {
        id: 's49390941',
        name: 'FYRESDAL',
        price: {
          currency: 'USD',
          currentPrice: 397,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/fyresdal-daybed-with-2-mattresses-black-vannareid-firm__1162739_pe889947_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/fyresdal-daybed-with-2-mattresses-black-vannareid-firm__1101302_pe866571_s5.jpg',
        imageAlt:
          'FYRESDAL Daybed with 2 mattresses, black/Vannareid firm, Twin',
        url: 'https://www.ikea.com/us/en/p/fyresdal-daybed-with-2-mattresses-black-vannareid-firm-s49390941/',
      },
    ],
  },
  {
    id: 's49494547',
    name: 'FLEKKE',
    price: {
      currency: 'USD',
      currentPrice: 547,
      discounted: true,
    },
    measurement: 'Twin',
    typeName: 'Daybed with 2 drawers/2 mattresses',
    image:
      'https://www.ikea.com/us/en/images/products/flekke-daybed-with-2-drawers-2-mattresses-black-brown-asvang-medium-firm__1162088_pe889631_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/flekke-daybed-with-2-drawers-2-mattresses-black-brown-asvang-medium-firm__1101310_pe866579_s5.jpg',
    imageAlt:
      'FLEKKE Daybed with 2 drawers/2 mattresses, black-brown/Åsvang medium firm, Twin',
    url: 'https://www.ikea.com/us/en/p/flekke-daybed-with-2-drawers-2-mattresses-black-brown-asvang-medium-firm-s49494547/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Twin & single beds',
        key: '16285',
      },
    ],
    variants: [
      {
        id: 's49428072',
        name: 'FLEKKE',
        price: {
          currency: 'USD',
          currentPrice: 487,
          discounted: true,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/flekke-daybed-with-2-drawers-2-mattresses-black-brown-agotnes-firm__1171955_pe893218_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/flekke-daybed-with-2-drawers-2-mattresses-black-brown-agotnes-firm__1101310_pe866579_s5.jpg',
        imageAlt:
          'FLEKKE Daybed with 2 drawers/2 mattresses, black-brown/Ågotnes firm, Twin',
        url: 'https://www.ikea.com/us/en/p/flekke-daybed-with-2-drawers-2-mattresses-black-brown-agotnes-firm-s49428072/',
      },
      {
        id: 's49500732',
        name: 'FLEKKE',
        price: {
          currency: 'USD',
          currentPrice: 547,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Daybed with 2 drawers/2 mattresses',
        image:
          'https://www.ikea.com/us/en/images/products/flekke-daybed-with-2-drawers-2-mattresses-black-brown-vannareid-firm__1162087_pe889630_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/flekke-daybed-with-2-drawers-2-mattresses-black-brown-vannareid-firm__1101310_pe866579_s5.jpg',
        imageAlt:
          'FLEKKE Daybed with 2 drawers/2 mattresses, black-brown/Vannareid firm, Twin',
        url: 'https://www.ikea.com/us/en/p/flekke-daybed-with-2-drawers-2-mattresses-black-brown-vannareid-firm-s49500732/',
      },
    ],
  },
  {
    id: '10423184',
    name: 'BERGPALM',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: 'Full/Queen (Double/Queen)',
    typeName: 'Duvet cover and pillowcase(s)',
    image:
      'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-green-stripe__0720386_pe732529_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-green-stripe__0883243_pe692782_s5.jpg',
    imageAlt:
      'BERGPALM Duvet cover and pillowcase(s), green/stripe, Full/Queen (Double/Queen)',
    url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-green-stripe-10423184/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Duvet covers, sheets & pillowcases',
        key: '10651',
      },
      {
        name: 'Duvet covers & duvet cover sets',
        key: '10680',
      },
    ],
    variants: [
      {
        id: '40522615',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-blue-stripe__1058345_pe849253_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-blue-stripe__1059084_pe849503_s5.jpg',
        imageAlt: 'BERGPALM Duvet cover and pillowcase(s), blue/stripe, Twin',
        url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-blue-stripe-40522615/',
      },
      {
        id: '70522614',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-blue-stripe__1058345_pe849253_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-blue-stripe__1059084_pe849503_s5.jpg',
        imageAlt: 'BERGPALM Duvet cover and pillowcase(s), blue/stripe, King',
        url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-blue-stripe-70522614/',
      },
      {
        id: '10423240',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-gray-stripe__0720384_pe732527_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-gray-stripe__0884849_pe692790_s5.jpg',
        imageAlt: 'BERGPALM Duvet cover and pillowcase(s), gray/stripe, Twin',
        url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-gray-stripe-10423240/',
      },
      {
        id: '30423239',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-gray-stripe__0720384_pe732527_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-gray-stripe__0883338_pe692779_s5.jpg',
        imageAlt: 'BERGPALM Duvet cover and pillowcase(s), gray/stripe, King',
        url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-gray-stripe-30423239/',
      },
      {
        id: '60423186',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-green-stripe__0720386_pe732529_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-green-stripe__0883243_pe692782_s5.jpg',
        imageAlt: 'BERGPALM Duvet cover and pillowcase(s), green/stripe, Twin',
        url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-green-stripe-60423186/',
      },
      {
        id: '20565106',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-yellow-white-stripe__1186326_pe898789_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-duvet-cover-and-pillowcase-s-yellow-white-stripe__1190860_pe900340_s5.jpg',
        imageAlt:
          'BERGPALM Duvet cover and pillowcase(s), yellow/white/stripe, Twin',
        url: 'https://www.ikea.com/us/en/p/bergpalm-duvet-cover-and-pillowcase-s-yellow-white-stripe-20565106/',
      },
    ],
  },
  {
    id: '30579805',
    name: 'STRANDLUMMER',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: 'Full/Queen (Double/Queen)',
    typeName: 'Duvet cover and pillowcase(s)',
    image:
      'https://www.ikea.com/us/en/images/products/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern__1278997_pe931209_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern__1279013_pe931221_s5.jpg',
    imageAlt:
      'STRANDLUMMER Duvet cover and pillowcase(s), multicolor/floral pattern, Full/Queen (Double/Queen)',
    url: 'https://www.ikea.com/us/en/p/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern-30579805/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Duvet covers, sheets & pillowcases',
        key: '10651',
      },
      {
        name: 'Duvet covers & duvet cover sets',
        key: '10680',
      },
    ],
    variants: [
      {
        id: '30579853',
        name: 'STRANDLUMMER',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern__1278995_pe931207_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern__1279013_pe931221_s5.jpg',
        imageAlt:
          'STRANDLUMMER Duvet cover and pillowcase(s), multicolor/floral pattern, Twin',
        url: 'https://www.ikea.com/us/en/p/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern-30579853/',
      },
      {
        id: '50579852',
        name: 'STRANDLUMMER',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern__1278997_pe931209_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern__1279013_pe931221_s5.jpg',
        imageAlt:
          'STRANDLUMMER Duvet cover and pillowcase(s), multicolor/floral pattern, King',
        url: 'https://www.ikea.com/us/en/p/strandlummer-duvet-cover-and-pillowcase-s-multicolor-floral-pattern-50579852/',
      },
    ],
  },
  {
    id: '30577825',
    name: 'HEDFRYLE',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: 'Full/Queen',
    typeName: 'Comforter set',
    image:
      'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-white-beige__1298769_pe936280_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-white-beige__1298031_pe936020_s5.jpg',
    imageAlt: 'HEDFRYLE Comforter set, white/beige, Full/Queen',
    url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-white-beige-30577825/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Comforters & comforter sets',
        key: '700553',
      },
    ],
    variants: [
      {
        id: '10577826',
        name: 'HEDFRYLE',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-white-beige__1298769_pe936280_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-white-beige__1298031_pe936020_s5.jpg',
        imageAlt: 'HEDFRYLE Comforter set, white/beige, King',
        url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-white-beige-10577826/',
      },
      {
        id: '90577827',
        name: 'HEDFRYLE',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: 'Twin/Twin X-long',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-white-beige__1298023_pe936012_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-white-beige__1298031_pe936020_s5.jpg',
        imageAlt: 'HEDFRYLE Comforter set, white/beige, Twin/Twin X-long',
        url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-white-beige-90577827/',
      },
      {
        id: '20577821',
        name: 'HEDFRYLE',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: 'Twin/Twin X-long',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-blue__1298017_pe936006_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-blue__1298025_pe936014_s5.jpg',
        imageAlt: 'HEDFRYLE Comforter set, blue, Twin/Twin X-long',
        url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-blue-20577821/',
      },
      {
        id: '00577822',
        name: 'HEDFRYLE',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Full/Queen',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-gray__1298024_pe936009_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-gray__1298027_pe936016_s5.jpg',
        imageAlt: 'HEDFRYLE Comforter set, gray, Full/Queen',
        url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-gray-00577822/',
      },
      {
        id: '00577817',
        name: 'HEDFRYLE',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-green__1298016_pe936005_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-green__1298029_pe936018_s5.jpg',
        imageAlt: 'HEDFRYLE Comforter set, green, King',
        url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-green-00577817/',
      },
      {
        id: '10577044',
        name: 'HEDFRYLE',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Full/Queen',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-pink__1299176_pe936486_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hedfryle-comforter-set-pink__1299175_pe936483_s5.jpg',
        imageAlt: 'HEDFRYLE Comforter set, pink, Full/Queen',
        url: 'https://www.ikea.com/us/en/p/hedfryle-comforter-set-pink-10577044/',
      },
    ],
  },
  {
    id: '30577892',
    name: 'LUKTVICKER',
    price: {
      currency: 'USD',
      currentPrice: 69.99,
      discounted: false,
    },
    measurement: 'Full/Queen',
    typeName: 'Comforter set',
    image:
      'https://www.ikea.com/us/en/images/products/luktvicker-comforter-set-white__1297974_pe935964_s5.jpg',
    imageAlt: 'LUKTVICKER Comforter set, white, Full/Queen',
    url: 'https://www.ikea.com/us/en/p/luktvicker-comforter-set-white-30577892/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Comforters & comforter sets',
        key: '700553',
      },
    ],
    variants: [
      {
        id: '10577058',
        name: 'LUKTVICKER',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: 'Twin/Twin X-long',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/luktvicker-comforter-set-green__1297972_pe935962_s5.jpg',
        imageAlt: 'LUKTVICKER Comforter set, green, Twin/Twin X-long',
        url: 'https://www.ikea.com/us/en/p/luktvicker-comforter-set-green-10577058/',
      },
      {
        id: '30577057',
        name: 'LUKTVICKER',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/luktvicker-comforter-set-green__1297976_pe935966_s5.jpg',
        imageAlt: 'LUKTVICKER Comforter set, green, King',
        url: 'https://www.ikea.com/us/en/p/luktvicker-comforter-set-green-30577057/',
      },
      {
        id: '50577056',
        name: 'LUKTVICKER',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: false,
        },
        measurement: 'Full/Queen',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/luktvicker-comforter-set-green__1297976_pe935966_s5.jpg',
        imageAlt: 'LUKTVICKER Comforter set, green, Full/Queen',
        url: 'https://www.ikea.com/us/en/p/luktvicker-comforter-set-green-50577056/',
      },
      {
        id: '10577893',
        name: 'LUKTVICKER',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/luktvicker-comforter-set-white__1297974_pe935964_s5.jpg',
        imageAlt: 'LUKTVICKER Comforter set, white, King',
        url: 'https://www.ikea.com/us/en/p/luktvicker-comforter-set-white-10577893/',
      },
      {
        id: '90577894',
        name: 'LUKTVICKER',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: 'Twin/Twin X-long',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/luktvicker-comforter-set-white__1297977_pe935967_s5.jpg',
        imageAlt: 'LUKTVICKER Comforter set, white, Twin/Twin X-long',
        url: 'https://www.ikea.com/us/en/p/luktvicker-comforter-set-white-90577894/',
      },
    ],
  },
  {
    id: '50580836',
    name: 'DVALA',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: 'Queen',
    typeName: 'Sheet set',
    image:
      'https://www.ikea.com/us/en/images/products/dvala-sheet-set-blue__1279669_pe931468_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/dvala-sheet-set-blue__1305499_pe939525_s5.jpg',
    imageAlt: 'DVALA Sheet set, blue, Queen',
    url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-blue-50580836/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Duvet covers, sheets & pillowcases',
        key: '10651',
      },
      {
        name: 'Sheets',
        key: '10681',
      },
    ],
    variants: [
      {
        id: '40356606',
        name: 'DVALA',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: true,
        },
        measurement: 'Full/Double',
        typeName: 'Sheet set',
        image:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-beige__0683343_pe721011_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-beige__1034391_pe837709_s5.jpg',
        imageAlt: 'DVALA Sheet set, beige, Full/Double',
        url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-beige-40356606/',
      },
      {
        id: '30580837',
        name: 'DVALA',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Sheet set',
        image:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-blue__1243822_pe920971_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-blue__1243818_pe920970_s5.jpg',
        imageAlt: 'DVALA Sheet set, blue, Twin',
        url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-blue-30580837/',
      },
      {
        id: '10549683',
        name: 'DVALA',
        price: {
          currency: 'USD',
          currentPrice: 34.99,
          discounted: true,
        },
        measurement: 'King',
        typeName: 'Sheet set',
        image:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-gray-green__1138588_pe880000_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-gray-green__1138587_pe880001_s5.jpg',
        imageAlt: 'DVALA Sheet set, gray-green, King',
        url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-gray-green-10549683/',
      },
      {
        id: '10357706',
        name: 'DVALA',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: true,
        },
        measurement: 'Full/Double',
        typeName: 'Sheet set',
        image:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-light-pink__0683363_pe721031_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-light-pink__1034393_pe837710_s5.jpg',
        imageAlt: 'DVALA Sheet set, light pink, Full/Double',
        url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-light-pink-10357706/',
      },
      {
        id: '00357655',
        name: 'DVALA',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: 'Queen',
        typeName: 'Sheet set',
        image:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-white__0597452_pe677135_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-white__1034394_pe837711_s5.jpg',
        imageAlt: 'DVALA Sheet set, white, Queen',
        url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-white-00357655/',
      },
      {
        id: '00580834',
        name: 'DVALA',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: 'Full/Double',
        typeName: 'Sheet set',
        image:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-blue__1279669_pe931468_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dvala-sheet-set-blue__1305499_pe939525_s5.jpg',
        imageAlt: 'DVALA Sheet set, blue, Full/Double',
        url: 'https://www.ikea.com/us/en/p/dvala-sheet-set-blue-00580834/',
      },
    ],
  },
  {
    id: '60574774',
    name: 'OLYMPTISTEL',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: 'Full/Queen (Double/Queen)',
    typeName: 'Duvet cover and pillowcase(s)',
    image:
      'https://www.ikea.com/us/en/images/products/olymptistel-duvet-cover-and-pillowcase-s-multicolor__1241117_pe920814_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/olymptistel-duvet-cover-and-pillowcase-s-multicolor__1241130_pe920826_s5.jpg',
    imageAlt:
      'OLYMPTISTEL Duvet cover and pillowcase(s), multicolor, Full/Queen (Double/Queen)',
    url: 'https://www.ikea.com/us/en/p/olymptistel-duvet-cover-and-pillowcase-s-multicolor-60574774/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Duvet covers, sheets & pillowcases',
        key: '10651',
      },
      {
        name: 'Duvet covers & duvet cover sets',
        key: '10680',
      },
    ],
    variants: [
      {
        id: '10574776',
        name: 'OLYMPTISTEL',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/olymptistel-duvet-cover-and-pillowcase-s-multicolor__1241119_pe920816_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/olymptistel-duvet-cover-and-pillowcase-s-multicolor__1241130_pe920826_s5.jpg',
        imageAlt: 'OLYMPTISTEL Duvet cover and pillowcase(s), multicolor, Twin',
        url: 'https://www.ikea.com/us/en/p/olymptistel-duvet-cover-and-pillowcase-s-multicolor-10574776/',
      },
      {
        id: '30574775',
        name: 'OLYMPTISTEL',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/olymptistel-duvet-cover-and-pillowcase-s-multicolor__1241117_pe920814_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/olymptistel-duvet-cover-and-pillowcase-s-multicolor__1241130_pe920826_s5.jpg',
        imageAlt: 'OLYMPTISTEL Duvet cover and pillowcase(s), multicolor, King',
        url: 'https://www.ikea.com/us/en/p/olymptistel-duvet-cover-and-pillowcase-s-multicolor-30574775/',
      },
    ],
  },
  {
    id: '90587478',
    name: 'BERGPALM',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: 'Full/Queen',
    typeName: 'Comforter set',
    image:
      'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-green-stripe__1376267_pe960442_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-green-stripe__1376269_pe960444_s5.jpg',
    imageAlt: 'BERGPALM Comforter set, green/stripe, Full/Queen',
    url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-green-stripe-90587478/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Comforters & comforter sets',
        key: '700553',
      },
    ],
    variants: [
      {
        id: '20587472',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-blue-stripe__1376264_pe960439_s5.jpg',
        imageAlt: 'BERGPALM Comforter set, blue/stripe, King',
        url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-blue-stripe-20587472/',
      },
      {
        id: '40587471',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: 'Full/Queen',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-blue-stripe__1376264_pe960439_s5.jpg',
        imageAlt: 'BERGPALM Comforter set, blue/stripe, Full/Queen',
        url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-blue-stripe-40587471/',
      },
      {
        id: '30587476',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-gray-stripe__1376265_pe960443_s5.jpg',
        imageAlt: 'BERGPALM Comforter set, gray/stripe, King',
        url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-gray-stripe-30587476/',
      },
      {
        id: '50587475',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: 'Full/Queen',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-gray-stripe__1376265_pe960443_s5.jpg',
        imageAlt: 'BERGPALM Comforter set, gray/stripe, Full/Queen',
        url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-gray-stripe-50587475/',
      },
      {
        id: '10587477',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: false,
        },
        measurement: 'Twin/Twin X-long',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-green-stripe__1376263_pe960438_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-green-stripe__1376269_pe960444_s5.jpg',
        imageAlt: 'BERGPALM Comforter set, green/stripe, Twin/Twin X-long',
        url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-green-stripe-10587477/',
      },
      {
        id: '70587479',
        name: 'BERGPALM',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-green-stripe__1376267_pe960442_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bergpalm-comforter-set-green-stripe__1376269_pe960444_s5.jpg',
        imageAlt: 'BERGPALM Comforter set, green/stripe, King',
        url: 'https://www.ikea.com/us/en/p/bergpalm-comforter-set-green-stripe-70587479/',
      },
    ],
  },
  {
    id: '70577833',
    name: 'IDALINNEA',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: 'Full/Queen',
    typeName: 'Comforter set',
    image:
      'https://www.ikea.com/us/en/images/products/idalinnea-comforter-set-white-gray__1298021_pe936010_s5.jpg',
    imageAlt: 'IDALINNEA Comforter set, white/gray, Full/Queen',
    url: 'https://www.ikea.com/us/en/p/idalinnea-comforter-set-white-gray-70577833/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Comforters & comforter sets',
        key: '700553',
      },
    ],
    variants: [
      {
        id: '50576778',
        name: 'IDALINNEA',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/idalinnea-comforter-set-white-gray__1298021_pe936010_s5.jpg',
        imageAlt: 'IDALINNEA Comforter set, white/gray, King',
        url: 'https://www.ikea.com/us/en/p/idalinnea-comforter-set-white-gray-50576778/',
      },
      {
        id: '50577834',
        name: 'IDALINNEA',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: false,
        },
        measurement: 'Twin/Twin X-long',
        typeName: 'Comforter set',
        image:
          'https://www.ikea.com/us/en/images/products/idalinnea-comforter-set-white-gray__1298018_pe936007_s5.jpg',
        imageAlt: 'IDALINNEA Comforter set, white/gray, Twin/Twin X-long',
        url: 'https://www.ikea.com/us/en/p/idalinnea-comforter-set-white-gray-50577834/',
      },
    ],
  },
  {
    id: '00518502',
    name: 'NÄSSELKLOCKA',
    price: {
      currency: 'USD',
      currentPrice: 47.99,
      discounted: false,
    },
    measurement: 'Full/Queen (Double/Queen)',
    typeName: 'Duvet cover and pillowcase(s)',
    image:
      'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor__1033251_pe837236_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor__1033316_pe837305_s5.jpg',
    imageAlt:
      'NÄSSELKLOCKA Duvet cover and pillowcase(s), light gray-green/multicolor, Full/Queen (Double/Queen)',
    url: 'https://www.ikea.com/us/en/p/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor-00518502/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Duvet covers, sheets & pillowcases',
        key: '10651',
      },
      {
        name: 'Duvet covers & duvet cover sets',
        key: '10680',
      },
    ],
    variants: [
      {
        id: '20522862',
        name: 'NÄSSELKLOCKA',
        price: {
          currency: 'USD',
          currentPrice: 37.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor__1033249_pe837234_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor__1033315_pe837299_s5.jpg',
        imageAlt:
          'NÄSSELKLOCKA Duvet cover and pillowcase(s), dark blue/multicolor, Twin',
        url: 'https://www.ikea.com/us/en/p/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor-20522862/',
      },
      {
        id: '40522861',
        name: 'NÄSSELKLOCKA',
        price: {
          currency: 'USD',
          currentPrice: 67.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor__1033249_pe837234_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor__1033315_pe837299_s5.jpg',
        imageAlt:
          'NÄSSELKLOCKA Duvet cover and pillowcase(s), dark blue/multicolor, King',
        url: 'https://www.ikea.com/us/en/p/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor-40522861/',
      },
      {
        id: '60522860',
        name: 'NÄSSELKLOCKA',
        price: {
          currency: 'USD',
          currentPrice: 47.99,
          discounted: false,
        },
        measurement: 'Full/Queen (Double/Queen)',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor__1033249_pe837234_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor__1033315_pe837299_s5.jpg',
        imageAlt:
          'NÄSSELKLOCKA Duvet cover and pillowcase(s), dark blue/multicolor, Full/Queen (Double/Queen)',
        url: 'https://www.ikea.com/us/en/p/naesselklocka-duvet-cover-and-pillowcase-s-dark-blue-multicolor-60522860/',
      },
      {
        id: '60518504',
        name: 'NÄSSELKLOCKA',
        price: {
          currency: 'USD',
          currentPrice: 37.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor__1033251_pe837236_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor__1033316_pe837305_s5.jpg',
        imageAlt:
          'NÄSSELKLOCKA Duvet cover and pillowcase(s), light gray-green/multicolor, Twin',
        url: 'https://www.ikea.com/us/en/p/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor-60518504/',
      },
      {
        id: '80518503',
        name: 'NÄSSELKLOCKA',
        price: {
          currency: 'USD',
          currentPrice: 67.99,
          discounted: false,
        },
        measurement: 'King',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor__1033251_pe837236_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor__1033316_pe837305_s5.jpg',
        imageAlt:
          'NÄSSELKLOCKA Duvet cover and pillowcase(s), light gray-green/multicolor, King',
        url: 'https://www.ikea.com/us/en/p/naesselklocka-duvet-cover-and-pillowcase-s-light-gray-green-multicolor-80518503/',
      },
    ],
  },
  {
    id: '00318541',
    name: 'ÄNGSLILJA',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: 'Full/Queen (Double/Queen)',
    typeName: 'Duvet cover and pillowcase(s)',
    image:
      'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-white__0642534_pe701236_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-white__0884941_pe606214_s5.jpg',
    imageAlt:
      'ÄNGSLILJA Duvet cover and pillowcase(s), white, Full/Queen (Double/Queen)',
    url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-white-00318541/',
    categoryPath: [
      {
        name: 'Beds & mattresses',
        key: 'bm001',
      },
      {
        name: 'Bedding',
        key: 'tl004',
      },
      {
        name: 'Duvet covers, sheets & pillowcases',
        key: '10651',
      },
      {
        name: 'Duvet covers & duvet cover sets',
        key: '10680',
      },
    ],
    variants: [
      {
        id: '50490751',
        name: 'ÄNGSLILJA',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-light-grey-beige__0930395_pe790728_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-light-grey-beige__0930036_pe790723_s5.jpg',
        imageAlt:
          'ÄNGSLILJA Duvet cover and pillowcase(s), light grey-beige, Twin',
        url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-light-grey-beige-50490751/',
      },
      {
        id: '30565078',
        name: 'ÄNGSLILJA',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-blue__1184217_pe897801_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-blue__1190861_pe900341_s5.jpg',
        imageAlt: 'ÄNGSLILJA Duvet cover and pillowcase(s), blue, Twin',
        url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-blue-30565078/',
      },
      {
        id: '50318647',
        name: 'ÄNGSLILJA',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-gray__0642512_pe701209_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-gray__0884977_pe606220_s5.jpg',
        imageAlt: 'ÄNGSLILJA Duvet cover and pillowcase(s), gray, Twin',
        url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-gray-50318647/',
      },
      {
        id: '20577190',
        name: 'ÄNGSLILJA',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-light-green__1241227_pe920891_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-light-green__1241241_pe920903_s5.jpg',
        imageAlt: 'ÄNGSLILJA Duvet cover and pillowcase(s), light green, Twin',
        url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-light-green-20577190/',
      },
      {
        id: '00565070',
        name: 'ÄNGSLILJA',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: 'Full/Queen (Double/Queen)',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-orange__1184233_pe897815_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-orange__1190862_pe900342_s5.jpg',
        imageAlt:
          'ÄNGSLILJA Duvet cover and pillowcase(s), orange, Full/Queen (Double/Queen)',
        url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-orange-00565070/',
      },
      {
        id: '40537645',
        name: 'ÄNGSLILJA',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: 'Twin',
        typeName: 'Duvet cover and pillowcase(s)',
        image:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-dark-pink__1086207_pe860410_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aengslilja-duvet-cover-and-pillowcase-s-dark-pink__1086389_pe860462_s5.jpg',
        imageAlt: 'ÄNGSLILJA Duvet cover and pillowcase(s), dark pink, Twin',
        url: 'https://www.ikea.com/us/en/p/aengslilja-duvet-cover-and-pillowcase-s-dark-pink-40537645/',
      },
    ],
  },
  {
    id: '10576191',
    name: 'HEMNES',
    price: {
      currency: 'USD',
      currentPrice: 399.99,
      discounted: false,
    },
    measurement: '63x37 3/4 "',
    typeName: '8-drawer dresser',
    image:
      'https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-white-stain__0627346_pe693299_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-white-stain__1151400_pe886164_s5.jpg',
    imageAlt: 'HEMNES 8-drawer dresser, white stain, 63x37 3/4 "',
    url: 'https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-white-stain-10576191/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '30576190',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 399.99,
          discounted: false,
        },
        measurement: '63x37 3/4 "',
        typeName: '8-drawer dresser',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-black-brown__0627349_pe693302_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-black-brown__1151401_pe886163_s5.jpg',
        imageAlt: 'HEMNES 8-drawer dresser, black-brown, 63x37 3/4 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-black-brown-30576190/',
      },
      {
        id: '90576192',
        name: 'HEMNES',
        price: {
          currency: 'USD',
          currentPrice: 399.99,
          discounted: false,
        },
        measurement: '63x37 3/4 "',
        typeName: '8-drawer dresser',
        image:
          'https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-dark-gray__0519831_pe641793_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-dark-gray__0520151_pe642029_s5.jpg',
        imageAlt: 'HEMNES 8-drawer dresser, dark gray, 63x37 3/4 "',
        url: 'https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-dark-gray-90576192/',
      },
    ],
  },
  {
    id: '70576211',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 299.99,
      discounted: false,
    },
    measurement: '63x30 3/4 "',
    typeName: '6-drawer dresser',
    image:
      'https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white__0484884_pe621348_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white__0823861_pe775996_s5.jpg',
    imageAlt: 'MALM 6-drawer dresser, white, 63x30 3/4 "',
    url: 'https://www.ikea.com/us/en/p/malm-6-drawer-dresser-white-70576211/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '30576307',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '63x30 3/4 "',
        typeName: '6-drawer dresser',
        image:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white-stained-oak-veneer__0484883_pe621346_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white-stained-oak-veneer__1154418_pe886020_s5.jpg',
        imageAlt:
          'MALM 6-drawer dresser, white stained/oak veneer, 63x30 3/4 "',
        url: 'https://www.ikea.com/us/en/p/malm-6-drawer-dresser-white-stained-oak-veneer-30576307/',
      },
      {
        id: '10576308',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '63x30 3/4 "',
        typeName: '6-drawer dresser',
        image:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-black-brown__0484881_pe621345_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-black-brown__1154387_pe886016_s5.jpg',
        imageAlt: 'MALM 6-drawer dresser, black-brown, 63x30 3/4 "',
        url: 'https://www.ikea.com/us/en/p/malm-6-drawer-dresser-black-brown-10576308/',
      },
    ],
  },
  {
    id: '50572836',
    name: 'SONGESAND',
    price: {
      currency: 'USD',
      currentPrice: 299.99,
      discounted: false,
    },
    measurement: '',
    typeName: '6-drawer dresser',
    image:
      'https://www.ikea.com/us/en/images/products/songesand-6-drawer-dresser__0552202_pe658935_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/songesand-6-drawer-dresser__0859171_pe658936_s5.jpg',
    imageAlt: 'SONGESAND 6-drawer dresser',
    url: 'https://www.ikea.com/us/en/p/songesand-6-drawer-dresser-50572836/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '00575804',
        name: 'SONGESAND',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '',
        typeName: '6-drawer dresser',
        image:
          'https://www.ikea.com/us/en/images/products/songesand-6-drawer-dresser__0552199_pe658954_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/songesand-6-drawer-dresser__0858247_pe658933_s5.jpg',
        imageAlt: 'SONGESAND 6-drawer dresser',
        url: 'https://www.ikea.com/us/en/p/songesand-6-drawer-dresser-00575804/',
      },
    ],
  },
  {
    id: '50584165',
    name: 'KOPPANG',
    price: {
      currency: 'USD',
      currentPrice: 259.99,
      discounted: false,
    },
    measurement: '67 3/4x32 5/8 "',
    typeName: '6-drawer dresser',
    image:
      'https://www.ikea.com/us/en/images/products/koppang-6-drawer-dresser-white__0651639_pe706984_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/koppang-6-drawer-dresser-white__0778092_pe758833_s5.jpg',
    imageAlt: 'KOPPANG 6-drawer dresser, white, 67 3/4x32 5/8 "',
    url: 'https://www.ikea.com/us/en/p/koppang-6-drawer-dresser-white-50584165/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '80584164',
        name: 'KOPPANG',
        price: {
          currency: 'USD',
          currentPrice: 259.99,
          discounted: false,
        },
        measurement: '67 3/4x32 5/8 "',
        typeName: '6-drawer dresser',
        image:
          'https://www.ikea.com/us/en/images/products/koppang-6-drawer-dresser-black-brown__0430434_pe584637_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/koppang-6-drawer-dresser-black-brown__0778088_pe758832_s5.jpg',
        imageAlt: 'KOPPANG 6-drawer dresser, black-brown, 67 3/4x32 5/8 "',
        url: 'https://www.ikea.com/us/en/p/koppang-6-drawer-dresser-black-brown-80584164/',
      },
    ],
  },
  {
    id: '10576209',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '31 1/2x30 3/4 "',
    typeName: '3-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/malm-3-drawer-chest-white__0484875_pe621342_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-3-drawer-chest-white__1154237_pe885956_s5.jpg',
    imageAlt: 'MALM 3-drawer chest, white, 31 1/2x30 3/4 "',
    url: 'https://www.ikea.com/us/en/p/malm-3-drawer-chest-white-10576209/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '40576302',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '31 1/2x30 3/4 "',
        typeName: '3-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-3-drawer-chest-white-stained-oak-veneer__1154333_pe885993_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-3-drawer-chest-white-stained-oak-veneer__1154329_pe885991_s5.jpg',
        imageAlt:
          'MALM 3-drawer chest, white stained/oak veneer, 31 1/2x30 3/4 "',
        url: 'https://www.ikea.com/us/en/p/malm-3-drawer-chest-white-stained-oak-veneer-40576302/',
      },
      {
        id: '20576303',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 149.99,
          discounted: false,
        },
        measurement: '31 1/2x30 3/4 "',
        typeName: '3-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-3-drawer-chest-black-brown__0484870_pe621337_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-3-drawer-chest-black-brown__1154230_pe885952_s5.jpg',
        imageAlt: 'MALM 3-drawer chest, black-brown, 31 1/2x30 3/4 "',
        url: 'https://www.ikea.com/us/en/p/malm-3-drawer-chest-black-brown-20576303/',
      },
    ],
  },
  {
    id: '50576212',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 279.99,
      discounted: false,
    },
    measurement: '31 1/2x48 3/8 "',
    typeName: '6-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-white__0484891_pe621335_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-white__1154554_pe886133_s5.jpg',
    imageAlt: 'MALM 6-drawer chest, white, 31 1/2x48 3/8 "',
    url: 'https://www.ikea.com/us/en/p/malm-6-drawer-chest-white-50576212/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '70576310',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 279.99,
          discounted: false,
        },
        measurement: '31 1/2x48 3/8 "',
        typeName: '6-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-white-stained-oak-veneer__0484890_pe621354_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-white-stained-oak-veneer__1154556_pe886137_s5.jpg',
        imageAlt:
          'MALM 6-drawer chest, white stained/oak veneer, 31 1/2x48 3/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-6-drawer-chest-white-stained-oak-veneer-70576310/',
      },
      {
        id: '90576309',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 279.99,
          discounted: false,
        },
        measurement: '31 1/2x48 3/8 "',
        typeName: '6-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-black-brown__0626820_pe693005_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-black-brown__1154550_pe886131_s5.jpg',
        imageAlt: 'MALM 6-drawer chest, black-brown, 31 1/2x48 3/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-6-drawer-chest-black-brown-90576309/',
      },
    ],
  },
  {
    id: '30572837',
    name: 'SONGESAND',
    price: {
      currency: 'USD',
      currentPrice: 279.99,
      discounted: false,
    },
    measurement: '',
    typeName: '6-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/songesand-6-drawer-chest__0552208_pe658941_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/songesand-6-drawer-chest__1356502_pe953380_s5.jpg',
    imageAlt: 'SONGESAND 6-drawer chest',
    url: 'https://www.ikea.com/us/en/p/songesand-6-drawer-chest-30572837/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '20575803',
        name: 'SONGESAND',
        price: {
          currency: 'USD',
          currentPrice: 279.99,
          discounted: false,
        },
        measurement: '',
        typeName: '6-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/songesand-6-drawer-chest__0552205_pe658938_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/songesand-6-drawer-chest__1356500_pe953374_s5.jpg',
        imageAlt: 'SONGESAND 6-drawer chest',
        url: 'https://www.ikea.com/us/en/p/songesand-6-drawer-chest-20575803/',
      },
    ],
  },
  {
    id: '00582164',
    name: 'RAST',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: false,
    },
    measurement: '48 7/8x26 3/4 "',
    typeName: '6-drawer dresser',
    image:
      'https://www.ikea.com/us/en/images/products/rast-6-drawer-dresser-pine__1291249_pe934858_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rast-6-drawer-dresser-pine__1291248_pe934862_s5.jpg',
    imageAlt: 'RAST 6-drawer dresser, pine, 48 7/8x26 3/4 "',
    url: 'https://www.ikea.com/us/en/p/rast-6-drawer-dresser-pine-00582164/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [],
  },
  {
    id: '90576210',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 199.99,
      discounted: false,
    },
    measurement: '31 1/2x39 3/8 "',
    typeName: '4-drawer chest',
    image:
      'https://www.ikea.com/us/en/images/products/malm-4-drawer-chest-white__0484879_pe621344_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-4-drawer-chest-white__1154336_pe885994_s5.jpg',
    imageAlt: 'MALM 4-drawer chest, white, 31 1/2x39 3/8 "',
    url: 'https://www.ikea.com/us/en/p/malm-4-drawer-chest-white-90576210/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Dressers & chests of drawers',
        key: '10451',
      },
    ],
    variants: [
      {
        id: '00576304',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 199.99,
          discounted: false,
        },
        measurement: '31 1/2x39 3/8 "',
        typeName: '4-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-4-drawer-chest-white-stained-oak-veneer__1154347_pe886002_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-4-drawer-chest-white-stained-oak-veneer__1154346_pe886003_s5.jpg',
        imageAlt:
          'MALM 4-drawer chest, white stained/oak veneer, 31 1/2x39 3/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-4-drawer-chest-white-stained-oak-veneer-00576304/',
      },
      {
        id: '50576306',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 199.99,
          discounted: false,
        },
        measurement: '31 1/2x39 3/8 "',
        typeName: '4-drawer chest',
        image:
          'https://www.ikea.com/us/en/images/products/malm-4-drawer-chest-black-brown__0484876_pe621355_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-4-drawer-chest-black-brown__0858161_pe624308_s5.jpg',
        imageAlt: 'MALM 4-drawer chest, black-brown, 31 1/2x39 3/8 "',
        url: 'https://www.ikea.com/us/en/p/malm-4-drawer-chest-black-brown-50576306/',
      },
    ],
  },
  {
    id: '00473546',
    name: 'ALEX',
    price: {
      currency: 'USD',
      currentPrice: 90,
      discounted: false,
    },
    measurement: '14 1/8x27 1/2 "',
    typeName: 'Drawer unit',
    image:
      'https://www.ikea.com/us/en/images/products/alex-drawer-unit-white__0977775_pe813763_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/alex-drawer-unit-white__0995610_pe821781_s5.jpg',
    imageAlt: 'ALEX Drawer unit, white, 14 1/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/alex-drawer-unit-white-00473546/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Legs & trestles',
        key: '11845',
      },
    ],
    variants: [
      {
        id: '60473548',
        name: 'ALEX',
        price: {
          currency: 'USD',
          currentPrice: 110,
          discounted: false,
        },
        measurement: '14 1/8x27 1/2 "',
        typeName: 'Drawer unit',
        image:
          'https://www.ikea.com/us/en/images/products/alex-drawer-unit-black-brown__0977786_pe813770_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/alex-drawer-unit-black-brown__0995608_pe821779_s5.jpg',
        imageAlt: 'ALEX Drawer unit, black-brown, 14 1/8x27 1/2 "',
        url: 'https://www.ikea.com/us/en/p/alex-drawer-unit-black-brown-60473548/',
      },
      {
        id: '30483799',
        name: 'ALEX',
        price: {
          currency: 'USD',
          currentPrice: 110,
          discounted: false,
        },
        measurement: '14 1/8x27 1/2 "',
        typeName: 'Drawer unit',
        image:
          'https://www.ikea.com/us/en/images/products/alex-drawer-unit-gray-turquoise__0977774_pe813762_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/alex-drawer-unit-gray-turquoise__0995609_pe821782_s5.jpg',
        imageAlt: 'ALEX Drawer unit, gray-turquoise, 14 1/8x27 1/2 "',
        url: 'https://www.ikea.com/us/en/p/alex-drawer-unit-gray-turquoise-30483799/',
      },
    ],
  },
  {
    id: '30387868',
    name: 'SEGLARÖ',
    price: {
      currency: 'USD',
      currentPrice: 199.99,
      discounted: true,
    },
    measurement: '129 7/8x94 1/2 "',
    typeName: 'Umbrella, hanging',
    image:
      'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-beige-tilting__0709141_pe726830_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-beige-tilting__1216882_pe912540_s5.jpg',
    imageAlt: 'SEGLARÖ Umbrella, hanging, beige/tilting, 129 7/8x94 1/2 "',
    url: 'https://www.ikea.com/us/en/p/seglaroe-umbrella-hanging-beige-tilting-30387868/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor umbrellas & bases',
        key: '17894',
      },
    ],
    variants: [
      {
        id: '60475972',
        name: 'SEGLARÖ',
        price: {
          currency: 'USD',
          currentPrice: 199.99,
          discounted: true,
        },
        measurement: '129 7/8x94 1/2 "',
        typeName: 'Umbrella, hanging',
        image:
          'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-gray-tilting__0820066_pe774922_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-gray-tilting__1134765_pe878869_s5.jpg',
        imageAlt: 'SEGLARÖ Umbrella, hanging, gray/tilting, 129 7/8x94 1/2 "',
        url: 'https://www.ikea.com/us/en/p/seglaroe-umbrella-hanging-gray-tilting-60475972/',
      },
      {
        id: '60557053',
        name: 'SEGLARÖ',
        price: {
          currency: 'USD',
          currentPrice: 329,
          discounted: false,
        },
        measurement: '129 7/8x94 1/2 "',
        typeName: 'Umbrella, hanging',
        image:
          'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-anthracite-tilting__1121660_pe874316_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-hanging-anthracite-tilting__1242360_pe920194_s5.jpg',
        imageAlt:
          'SEGLARÖ Umbrella, hanging, anthracite/tilting, 129 7/8x94 1/2 "',
        url: 'https://www.ikea.com/us/en/p/seglaroe-umbrella-hanging-anthracite-tilting-60557053/',
      },
    ],
  },
  {
    id: '70522765',
    name: 'STRANDÖN',
    price: {
      currency: 'USD',
      currentPrice: 16.99,
      discounted: true,
    },
    measurement: '55 1/8 "',
    typeName: 'Umbrella',
    image:
      'https://www.ikea.com/us/en/images/products/strandoen-umbrella-yellow-white-dotted__1170589_pe892867_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/strandoen-umbrella-yellow-white-dotted__1170586_pe892870_s5.jpg',
    imageAlt: 'STRANDÖN Umbrella, yellow/white dotted, 55 1/8 "',
    url: 'https://www.ikea.com/us/en/p/strandoen-umbrella-yellow-white-dotted-70522765/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor umbrellas & bases',
        key: '17894',
      },
    ],
    variants: [],
  },
  {
    id: '20532743',
    name: 'NÄMMARÖ',
    price: {
      currency: 'USD',
      currentPrice: 95,
      discounted: false,
    },
    measurement: '55 1/8x31 1/2x19 5/8 "',
    typeName: 'Privacy screen',
    image:
      'https://www.ikea.com/us/en/images/products/naemmaroe-privacy-screen-light-brown-stained-indoor-outdoor__1137840_pe879763_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/naemmaroe-privacy-screen-light-brown-stained-indoor-outdoor__1187047_ph191308_s5.jpg',
    imageAlt:
      'NÄMMARÖ Privacy screen, light brown stained indoor/outdoor, 55 1/8x31 1/2x19 5/8 "',
    url: 'https://www.ikea.com/us/en/p/naemmaroe-privacy-screen-light-brown-stained-indoor-outdoor-20532743/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor privacy screens & shades',
        key: '17895',
      },
    ],
    variants: [],
  },
  {
    id: '50578287',
    name: 'TORPÖN',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '354 3/8 "',
    typeName: 'Net',
    image:
      'https://www.ikea.com/us/en/images/products/torpoen-net-black__1276358_pe930918_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/torpoen-net-black__1276354_pe930873_s5.jpg',
    imageAlt: 'TORPÖN Net, black, 354 3/8 "',
    url: 'https://www.ikea.com/us/en/p/torpoen-net-black-50578287/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor gazebos & backyard canopies',
        key: '24331',
      },
    ],
    variants: [],
  },
  {
    id: 's49251803',
    name: 'SEGLARÖ / SVARTÖ',
    price: {
      currency: 'USD',
      currentPrice: 289.99,
      discounted: true,
    },
    measurement: '129 7/8x94 1/2 "',
    typeName: 'Hanging umbrella with base',
    image:
      'https://www.ikea.com/us/en/images/products/seglaroe-svartoe-hanging-umbrella-with-base-tilting-beige-dark-gray__0709194_pe726860_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/seglaroe-svartoe-hanging-umbrella-with-base-tilting-beige-dark-gray__0906713_pe668798_s5.jpg',
    imageAlt:
      'SEGLARÖ / SVARTÖ Hanging umbrella with base, tilting beige/dark gray, 129 7/8x94 1/2 "',
    url: 'https://www.ikea.com/us/en/p/seglaroe-svartoe-hanging-umbrella-with-base-tilting-beige-dark-gray-s49251803/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor umbrellas & bases',
        key: '17894',
      },
    ],
    variants: [],
  },
  {
    id: '30554230',
    name: 'FÅGELÖN',
    price: {
      currency: 'USD',
      currentPrice: 699,
      discounted: false,
    },
    measurement: '118 1/8x118 1/8 "',
    typeName: 'Gazebo',
    image:
      'https://www.ikea.com/us/en/images/products/fageloen-gazebo-black-black__1121657_pe874314_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fageloen-gazebo-black-black__1185291_pe898334_s5.jpg',
    imageAlt: 'FÅGELÖN Gazebo, black/black, 118 1/8x118 1/8 "',
    url: 'https://www.ikea.com/us/en/p/fageloen-gazebo-black-black-30554230/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor gazebos & backyard canopies',
        key: '24331',
      },
    ],
    variants: [],
  },
  {
    id: 's39324616',
    name: 'HÖGÖN',
    price: {
      currency: 'USD',
      currentPrice: 89.99,
      discounted: true,
    },
    measurement: '106 1/4 "',
    typeName: 'Umbrella with base',
    image:
      'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-white-huvoen-dark-gray__0784738_pe761844_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-white-huvoen-dark-gray__1191263_pe900583_s5.jpg',
    imageAlt: 'HÖGÖN Umbrella with base, white/Huvön dark gray, 106 1/4 "',
    url: 'https://www.ikea.com/us/en/p/hoegoen-umbrella-with-base-white-huvoen-dark-gray-s39324616/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor umbrellas & bases',
        key: '17894',
      },
    ],
    variants: [
      {
        id: 's09476809',
        name: 'HÖGÖN',
        price: {
          currency: 'USD',
          currentPrice: 124.99,
          discounted: true,
        },
        measurement: '106 1/4 "',
        typeName: 'Umbrella with base',
        image:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-light-gray-grytoe-dark-gray__1066379_pe852405_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-light-gray-grytoe-dark-gray__1211897_pe910411_s5.jpg',
        imageAlt:
          'HÖGÖN Umbrella with base, light gray/Grytö dark gray, 106 1/4 "',
        url: 'https://www.ikea.com/us/en/p/hoegoen-umbrella-with-base-light-gray-grytoe-dark-gray-s09476809/',
      },
      {
        id: 's39285813',
        name: 'HÖGÖN',
        price: {
          currency: 'USD',
          currentPrice: 94.99,
          discounted: true,
        },
        measurement: '106 1/4 "',
        typeName: 'Umbrella with base',
        image:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-white-grytoe-dark-gray__0664527_pe712760_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-white-grytoe-dark-gray__1191263_pe900583_s5.jpg',
        imageAlt: 'HÖGÖN Umbrella with base, white/Grytö dark gray, 106 1/4 "',
        url: 'https://www.ikea.com/us/en/p/hoegoen-umbrella-with-base-white-grytoe-dark-gray-s39285813/',
      },
      {
        id: 's69476806',
        name: 'HÖGÖN',
        price: {
          currency: 'USD',
          currentPrice: 119.99,
          discounted: true,
        },
        measurement: '106 1/4 "',
        typeName: 'Umbrella with base',
        image:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-light-gray-huvoen-gray__1066376_pe852408_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-with-base-light-gray-huvoen-gray__1128050_pe876393_s5.jpg',
        imageAlt: 'HÖGÖN Umbrella with base, light gray/Huvön gray, 106 1/4 "',
        url: 'https://www.ikea.com/us/en/p/hoegoen-umbrella-with-base-light-gray-huvoen-gray-s69476806/',
      },
    ],
  },
  {
    id: '00445351',
    name: 'HÖGÖN',
    price: {
      currency: 'USD',
      currentPrice: 74.99,
      discounted: true,
    },
    measurement: '106 1/4 "',
    typeName: 'Umbrella, hanging',
    image:
      'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-hanging-white__0770430_pe755640_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-hanging-white__0770432_pe755634_s5.jpg',
    imageAlt: 'HÖGÖN Umbrella, hanging, white, 106 1/4 "',
    url: 'https://www.ikea.com/us/en/p/hoegoen-umbrella-hanging-white-00445351/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor umbrellas & bases',
        key: '17894',
      },
    ],
    variants: [
      {
        id: '50515742',
        name: 'HÖGÖN',
        price: {
          currency: 'USD',
          currentPrice: 129.99,
          discounted: false,
        },
        measurement: '106 1/4 "',
        typeName: 'Umbrella, hanging',
        image:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-hanging-gray__1035306_pe838033_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hoegoen-umbrella-hanging-gray__1177336_pe895294_s5.jpg',
        imageAlt: 'HÖGÖN Umbrella, hanging, gray, 106 1/4 "',
        url: 'https://www.ikea.com/us/en/p/hoegoen-umbrella-hanging-gray-50515742/',
      },
    ],
  },
  {
    id: '00532013',
    name: 'SEGLARÖ',
    price: {
      currency: 'USD',
      currentPrice: 79.99,
      discounted: false,
    },
    measurement: '129 7/8x94 1/2 "',
    typeName: 'Umbrella canopy',
    image:
      'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-canopy-anthracite__1103838_pe867395_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/seglaroe-umbrella-canopy-anthracite__1186179_pe898703_s5.jpg',
    imageAlt: 'SEGLARÖ Umbrella canopy, anthracite, 129 7/8x94 1/2 "',
    url: 'https://www.ikea.com/us/en/p/seglaroe-umbrella-canopy-anthracite-00532013/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor umbrellas & bases',
        key: '17894',
      },
    ],
    variants: [
      {
        id: '00500205',
        name: 'SEGLARÖ',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: true,
        },
        measurement: '129 7/8x94 1/2 "',
        typeName: 'Canopy',
        image:
          'https://www.ikea.com/us/en/images/products/seglaroe-canopy-beige__0709141_pe726830_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/seglaroe-canopy-beige__1147087_pe883242_s5.jpg',
        imageAlt: 'SEGLARÖ Canopy, beige, 129 7/8x94 1/2 "',
        url: 'https://www.ikea.com/us/en/p/seglaroe-canopy-beige-00500205/',
      },
    ],
  },
  {
    id: '80515509',
    name: 'LUNGÖN',
    price: {
      currency: 'USD',
      currentPrice: 110,
      discounted: false,
    },
    measurement: '55 1/8x31 1/2x15 3/4 "',
    typeName: 'Privacy screen',
    image:
      'https://www.ikea.com/us/en/images/products/lungoen-privacy-screen-off-white-indoor-outdoor__1137814_pe879761_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lungoen-privacy-screen-off-white-indoor-outdoor__1152389_pe885314_s5.jpg',
    imageAlt:
      'LUNGÖN Privacy screen, off-white indoor/outdoor, 55 1/8x31 1/2x15 3/4 "',
    url: 'https://www.ikea.com/us/en/p/lungoen-privacy-screen-off-white-indoor-outdoor-80515509/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor umbrellas, canopies, gazebos & more',
        key: '17887',
      },
      {
        name: 'Outdoor privacy screens & shades',
        key: '17895',
      },
    ],
    variants: [],
  },
  {
    id: 's59253081',
    name: 'FRÖSÖN/DUVHOLMEN',
    price: {
      currency: 'USD',
      currentPrice: 45,
      discounted: true,
    },
    measurement: '24 3/8x24 3/8 "',
    typeName: 'Seat pad, outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-seat-pad-outdoor-beige__0685068_pe721339_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-seat-pad-outdoor-beige__1191026_pe900401_s5.jpg',
    imageAlt: 'FRÖSÖN/DUVHOLMEN Seat pad, outdoor, beige, 24 3/8x24 3/8 "',
    url: 'https://www.ikea.com/us/en/p/froesoen-duvholmen-seat-pad-outdoor-beige-s59253081/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: 's49253086',
        name: 'FRÖSÖN/DUVHOLMEN',
        price: {
          currency: 'USD',
          currentPrice: 45,
          discounted: true,
        },
        measurement: '24 3/8x24 3/8 "',
        typeName: 'Seat pad, outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-seat-pad-outdoor-dark-gray__0685069_pe721336_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-seat-pad-outdoor-dark-gray__0905920_pe665662_s5.jpg',
        imageAlt:
          'FRÖSÖN/DUVHOLMEN Seat pad, outdoor, dark gray, 24 3/8x24 3/8 "',
        url: 'https://www.ikea.com/us/en/p/froesoen-duvholmen-seat-pad-outdoor-dark-gray-s49253086/',
      },
    ],
  },
  {
    id: 's89253107',
    name: 'FRÖSÖN/DUVHOLMEN',
    price: {
      currency: 'USD',
      currentPrice: 25,
      discounted: true,
    },
    measurement: '24 3/8x17 3/8 "',
    typeName: 'Back cushion, outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-back-cushion-outdoor-beige__0685036_pe721317_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-back-cushion-outdoor-beige__1191026_pe900401_s5.jpg',
    imageAlt: 'FRÖSÖN/DUVHOLMEN Back cushion, outdoor, beige, 24 3/8x17 3/8 "',
    url: 'https://www.ikea.com/us/en/p/froesoen-duvholmen-back-cushion-outdoor-beige-s89253107/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: 's89253112',
        name: 'FRÖSÖN/DUVHOLMEN',
        price: {
          currency: 'USD',
          currentPrice: 25,
          discounted: true,
        },
        measurement: '24 3/8x17 3/8 "',
        typeName: 'Back cushion, outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-back-cushion-outdoor-dark-gray__0685034_pe721319_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/froesoen-duvholmen-back-cushion-outdoor-dark-gray__0905287_pe665642_s5.jpg',
        imageAlt:
          'FRÖSÖN/DUVHOLMEN Back cushion, outdoor, dark gray, 24 3/8x17 3/8 "',
        url: 'https://www.ikea.com/us/en/p/froesoen-duvholmen-back-cushion-outdoor-dark-gray-s89253112/',
      },
    ],
  },
  {
    id: '50547205',
    name: 'GULLBERGSÖ',
    price: {
      currency: 'USD',
      currentPrice: 5.99,
      discounted: true,
    },
    measurement: '20x20 "',
    typeName: 'Cushion cover',
    image:
      'https://www.ikea.com/us/en/images/products/gullbergsoe-cushion-cover-yellow-white-stripe-outdoor-indoor__1180712_pe896423_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gullbergsoe-cushion-cover-yellow-white-stripe-outdoor-indoor__1180711_pe896420_s5.jpg',
    imageAlt:
      'GULLBERGSÖ Cushion cover, yellow/white stripe/outdoor indoor, 20x20 "',
    url: 'https://www.ikea.com/us/en/p/gullbergsoe-cushion-cover-yellow-white-stripe-outdoor-indoor-50547205/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillow covers',
        key: '18903',
      },
    ],
    variants: [
      {
        id: '30547206',
        name: 'GULLBERGSÖ',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '20x20 "',
        typeName: 'Cushion cover',
        image:
          'https://www.ikea.com/us/en/images/products/gullbergsoe-cushion-cover-multicolor-floral-pattern-outdoor-indoor__1180714_pe896421_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gullbergsoe-cushion-cover-multicolor-floral-pattern-outdoor-indoor__1180713_pe896422_s5.jpg',
        imageAlt:
          'GULLBERGSÖ Cushion cover, multicolor floral pattern/outdoor indoor, 20x20 "',
        url: 'https://www.ikea.com/us/en/p/gullbergsoe-cushion-cover-multicolor-floral-pattern-outdoor-indoor-30547206/',
      },
    ],
  },
  {
    id: '90391749',
    name: 'FRÖSÖN',
    price: {
      currency: 'USD',
      currentPrice: 15,
      discounted: true,
    },
    measurement: '24 3/8x24 3/8 "',
    typeName: 'Cover for seat pad',
    image:
      'https://www.ikea.com/us/en/images/products/froesoen-cover-for-seat-pad-outdoor-beige__0685068_pe721339_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/froesoen-cover-for-seat-pad-outdoor-beige__1191026_pe900401_s5.jpg',
    imageAlt: 'FRÖSÖN Cover for seat pad, outdoor beige, 24 3/8x24 3/8 "',
    url: 'https://www.ikea.com/us/en/p/froesoen-cover-for-seat-pad-outdoor-beige-90391749/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: '70391750',
        name: 'FRÖSÖN',
        price: {
          currency: 'USD',
          currentPrice: 15,
          discounted: true,
        },
        measurement: '24 3/8x24 3/8 "',
        typeName: 'Cover for seat pad',
        image:
          'https://www.ikea.com/us/en/images/products/froesoen-cover-for-seat-pad-outdoor-dark-gray__0685069_pe721336_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/froesoen-cover-for-seat-pad-outdoor-dark-gray__0905293_pe665657_s5.jpg',
        imageAlt:
          'FRÖSÖN Cover for seat pad, outdoor dark gray, 24 3/8x24 3/8 "',
        url: 'https://www.ikea.com/us/en/p/froesoen-cover-for-seat-pad-outdoor-dark-gray-70391750/',
      },
    ],
  },
  {
    id: '60586673',
    name: 'KUDDARNA',
    price: {
      currency: 'USD',
      currentPrice: 7,
      discounted: true,
    },
    measurement: '14 1/8x12 5/8 "',
    typeName: 'Chair pad, outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/kuddarna-chair-pad-outdoor-beige__0684577_pe721230_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kuddarna-chair-pad-outdoor-beige__0905392_pe712791_s5.jpg',
    imageAlt: 'KUDDARNA Chair pad, outdoor, beige, 14 1/8x12 5/8 "',
    url: 'https://www.ikea.com/us/en/p/kuddarna-chair-pad-outdoor-beige-60586673/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: '20411086',
        name: 'KUDDARNA',
        price: {
          currency: 'USD',
          currentPrice: 10,
          discounted: false,
        },
        measurement: '14 1/8x12 5/8 "',
        typeName: 'Chair pad, outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/kuddarna-chair-pad-outdoor-gray__0684575_pe721223_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuddarna-chair-pad-outdoor-gray__0905824_pe712787_s5.jpg',
        imageAlt: 'KUDDARNA Chair pad, outdoor, gray, 14 1/8x12 5/8 "',
        url: 'https://www.ikea.com/us/en/p/kuddarna-chair-pad-outdoor-gray-20411086/',
      },
    ],
  },
  {
    id: '60480841',
    name: 'KUDDARNA',
    price: {
      currency: 'USD',
      currentPrice: 35,
      discounted: true,
    },
    measurement: '74 3/4x23 5/8 "',
    typeName: 'Chaise pad',
    image:
      'https://www.ikea.com/us/en/images/products/kuddarna-chaise-pad-gray__0966349_pe809767_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kuddarna-chaise-pad-gray__0905842_pe712789_s5.jpg',
    imageAlt: 'KUDDARNA Chaise pad, gray, 74 3/4x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/kuddarna-chaise-pad-gray-60480841/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: '40480842',
        name: 'KUDDARNA',
        price: {
          currency: 'USD',
          currentPrice: 35,
          discounted: true,
        },
        measurement: '74 3/4x23 5/8 "',
        typeName: 'Chaise pad',
        image:
          'https://www.ikea.com/us/en/images/products/kuddarna-chaise-pad-beige__0966348_pe809768_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuddarna-chaise-pad-beige__1185535_pe898456_s5.jpg',
        imageAlt: 'KUDDARNA Chaise pad, beige, 74 3/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/kuddarna-chaise-pad-beige-40480842/',
      },
    ],
  },
  {
    id: 's59304919',
    name: 'JÄRPÖN/DUVHOLMEN',
    price: {
      currency: 'USD',
      currentPrice: 55,
      discounted: true,
    },
    measurement: '24 3/8x24 3/8 "',
    typeName: 'Seat pad, outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/jaerpoen-duvholmen-seat-pad-outdoor-white__0747975_pe744784_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jaerpoen-duvholmen-seat-pad-outdoor-white__0898252_pe782483_s5.jpg',
    imageAlt: 'JÄRPÖN/DUVHOLMEN Seat pad, outdoor, white, 24 3/8x24 3/8 "',
    url: 'https://www.ikea.com/us/en/p/jaerpoen-duvholmen-seat-pad-outdoor-white-s59304919/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: 's89304913',
        name: 'JÄRPÖN/DUVHOLMEN',
        price: {
          currency: 'USD',
          currentPrice: 55,
          discounted: true,
        },
        measurement: '24 3/8x24 3/8 "',
        typeName: 'Seat pad, outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/jaerpoen-duvholmen-seat-pad-outdoor-anthracite__0747973_pe744785_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/jaerpoen-duvholmen-seat-pad-outdoor-anthracite__0898250_pe782482_s5.jpg',
        imageAlt:
          'JÄRPÖN/DUVHOLMEN Seat pad, outdoor, anthracite, 24 3/8x24 3/8 "',
        url: 'https://www.ikea.com/us/en/p/jaerpoen-duvholmen-seat-pad-outdoor-anthracite-s89304913/',
      },
    ],
  },
  {
    id: '60570733',
    name: 'BRÖGGAN',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: true,
    },
    measurement: '12x23 "',
    typeName: 'Back cushion, indoor/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/broeggan-back-cushion-indoor-outdoor-green__1221398_pe913784_s5.jpg',
    imageAlt: 'BRÖGGAN Back cushion, indoor/outdoor, green, 12x23 "',
    url: 'https://www.ikea.com/us/en/p/broeggan-back-cushion-indoor-outdoor-green-60570733/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillows',
        key: '18902',
      },
    ],
    variants: [
      {
        id: '60570728',
        name: 'BRÖGGAN',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '12x23 "',
        typeName: 'Back cushion, indoor/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/broeggan-back-cushion-indoor-outdoor-yellow__1221399_pe913785_s5.jpg',
        imageAlt: 'BRÖGGAN Back cushion, indoor/outdoor, yellow, 12x23 "',
        url: 'https://www.ikea.com/us/en/p/broeggan-back-cushion-indoor-outdoor-yellow-60570728/',
      },
    ],
  },
  {
    id: '70570737',
    name: 'BRÖGGAN',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: true,
    },
    measurement: '18x18 "',
    typeName: 'Floor cushion',
    image:
      'https://www.ikea.com/us/en/images/products/broeggan-floor-cushion-indoor-outdoor-green__1221404_pe913789_s5.jpg',
    imageAlt: 'BRÖGGAN Floor cushion, indoor/outdoor green, 18x18 "',
    url: 'https://www.ikea.com/us/en/p/broeggan-floor-cushion-indoor-outdoor-green-70570737/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Decorative pillows & cushion covers',
        key: '10659',
      },
      {
        name: 'Throw pillows',
        key: '18902',
      },
    ],
    variants: [],
  },
  {
    id: '20391743',
    name: 'FRÖSÖN',
    price: {
      currency: 'USD',
      currentPrice: 10,
      discounted: true,
    },
    measurement: '24 3/8x17 3/8 "',
    typeName: 'Cover for back cushion',
    image:
      'https://www.ikea.com/us/en/images/products/froesoen-cover-for-back-cushion-outdoor-beige__0685036_pe721317_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/froesoen-cover-for-back-cushion-outdoor-beige__1191026_pe900401_s5.jpg',
    imageAlt: 'FRÖSÖN Cover for back cushion, outdoor beige, 24 3/8x17 3/8 "',
    url: 'https://www.ikea.com/us/en/p/froesoen-cover-for-back-cushion-outdoor-beige-20391743/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor patio furniture',
        key: 'od003',
      },
      {
        name: 'Outdoor chair cushions',
        key: '46400',
      },
    ],
    variants: [
      {
        id: '00391744',
        name: 'FRÖSÖN',
        price: {
          currency: 'USD',
          currentPrice: 10,
          discounted: true,
        },
        measurement: '24 3/8x17 3/8 "',
        typeName: 'Cover for back cushion',
        image:
          'https://www.ikea.com/us/en/images/products/froesoen-cover-for-back-cushion-outdoor-dark-gray__0685034_pe721319_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/froesoen-cover-for-back-cushion-outdoor-dark-gray__0905293_pe665657_s5.jpg',
        imageAlt:
          'FRÖSÖN Cover for back cushion, outdoor dark gray, 24 3/8x17 3/8 "',
        url: 'https://www.ikea.com/us/en/p/froesoen-cover-for-back-cushion-outdoor-dark-gray-00391744/',
      },
    ],
  },
  {
    id: '00570590',
    name: 'SOLVINDEN',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: true,
    },
    measurement: '13 3/4 "',
    typeName: 'LED floor lamp',
    image:
      'https://www.ikea.com/us/en/images/products/solvinden-led-floor-lamp-battery-operated-outdoor__1233268_pe916697_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-floor-lamp-battery-operated-outdoor__1237050_pe917802_s5.jpg',
    imageAlt: 'SOLVINDEN LED floor lamp, battery operated/outdoor, 13 3/4 "',
    url: 'https://www.ikea.com/us/en/p/solvinden-led-floor-lamp-battery-operated-outdoor-00570590/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [],
  },
  {
    id: '60575981',
    name: 'SOLVINDEN',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: true,
    },
    measurement: '',
    typeName: 'LED string light with 12 lights',
    image:
      'https://www.ikea.com/us/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-white__0939852_pe794693_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-white__0931568_pe793862_s5.jpg',
    imageAlt:
      'SOLVINDEN LED string light with 12 lights, outdoor/battery operated white',
    url: 'https://www.ikea.com/us/en/p/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-white-60575981/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [
      {
        id: '60570587',
        name: 'SOLVINDEN',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '',
        typeName: 'LED string light with 12 lights',
        image:
          'https://www.ikea.com/us/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-yellow-waves__1233285_pe916708_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-yellow-waves__1237091_pe917813_s5.jpg',
        imageAlt:
          'SOLVINDEN LED string light with 12 lights, outdoor battery operated/yellow waves',
        url: 'https://www.ikea.com/us/en/p/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-yellow-waves-60570587/',
      },
      {
        id: '80570586',
        name: 'SOLVINDEN',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '',
        typeName: 'LED string light with 12 lights',
        image:
          'https://www.ikea.com/us/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-yellow__1233283_pe916706_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-yellow__1237065_pe917808_s5.jpg',
        imageAlt:
          'SOLVINDEN LED string light with 12 lights, outdoor/battery operated yellow',
        url: 'https://www.ikea.com/us/en/p/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-yellow-80570586/',
      },
    ],
  },
  {
    id: '80575980',
    name: 'SOLVINDEN',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: true,
    },
    measurement: '5 3/4 "',
    typeName: 'LED decorative light, table',
    image:
      'https://www.ikea.com/us/en/images/products/solvinden-led-decorative-light-table-outdoor-battery-operated-white__0939564_pe794617_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-decorative-light-table-outdoor-battery-operated-white__0931495_pe791099_s5.jpg',
    imageAlt:
      'SOLVINDEN LED decorative light, table, outdoor/battery operated white, 5 3/4 "',
    url: 'https://www.ikea.com/us/en/p/solvinden-led-decorative-light-table-outdoor-battery-operated-white-80575980/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [],
  },
  {
    id: '80556199',
    name: 'GRÖNSPRÖT',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '6 1/4 "',
    typeName: 'Wall up/downlight, hardwired',
    image:
      'https://www.ikea.com/us/en/images/products/groensproet-wall-up-downlight-hardwired-outdoor-black__1169398_pe892427_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/groensproet-wall-up-downlight-hardwired-outdoor-black__1182988_pe897381_s5.jpg',
    imageAlt: 'GRÖNSPRÖT Wall up/downlight, hardwired, outdoor black, 6 1/4 "',
    url: 'https://www.ikea.com/us/en/p/groensproet-wall-up-downlight-hardwired-outdoor-black-80556199/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [
      {
        id: '20556197',
        name: 'GRÖNSPRÖT',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: '6 1/4 "',
        typeName: 'Wall up/downlight, hardwired',
        image:
          'https://www.ikea.com/us/en/images/products/groensproet-wall-up-downlight-hardwired-outdoor-aluminum-color__1178077_pe895651_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/groensproet-wall-up-downlight-hardwired-outdoor-aluminum-color__1182986_pe897379_s5.jpg',
        imageAlt:
          'GRÖNSPRÖT Wall up/downlight, hardwired, outdoor aluminum color, 6 1/4 "',
        url: 'https://www.ikea.com/us/en/p/groensproet-wall-up-downlight-hardwired-outdoor-aluminum-color-20556197/',
      },
      {
        id: '40556200',
        name: 'GRÖNSPRÖT',
        price: {
          currency: 'USD',
          currentPrice: 34.99,
          discounted: false,
        },
        measurement: '11 "',
        typeName: 'Wall up/downlight, hardwired',
        image:
          'https://www.ikea.com/us/en/images/products/groensproet-wall-up-downlight-hardwired-outdoor-black__1169391_pe892421_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/groensproet-wall-up-downlight-hardwired-outdoor-black__1182992_pe897384_s5.jpg',
        imageAlt: 'GRÖNSPRÖT Wall up/downlight, hardwired, outdoor black, 11 "',
        url: 'https://www.ikea.com/us/en/p/groensproet-wall-up-downlight-hardwired-outdoor-black-40556200/',
      },
    ],
  },
  {
    id: '90552539',
    name: 'SVARTRÅ',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'LED lighting chain with 20 bulbs',
    image:
      'https://www.ikea.com/us/en/images/products/svartra-led-lighting-chain-with-20-bulbs-black-outdoor__1179547_pe895975_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/svartra-led-lighting-chain-with-20-bulbs-black-outdoor__1290515_pe934667_s5.jpg',
    imageAlt: 'SVARTRÅ LED lighting chain with 20 bulbs, black/outdoor',
    url: 'https://www.ikea.com/us/en/p/svartra-led-lighting-chain-with-20-bulbs-black-outdoor-90552539/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [],
  },
  {
    id: '20585840',
    name: 'VAPPEBY',
    price: {
      currency: 'USD',
      currentPrice: 89.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Bluetooth speaker lamp',
    image:
      'https://www.ikea.com/us/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-green__1246851_pe922330_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-green__1291652_pe934956_s5.jpg',
    imageAlt: 'VAPPEBY Bluetooth speaker lamp, outdoor/green',
    url: 'https://www.ikea.com/us/en/p/vappeby-bluetooth-speaker-lamp-outdoor-green-20585840/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [
      {
        id: '40515276',
        name: 'VAPPEBY',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Bluetooth speaker lamp',
        image:
          'https://www.ikea.com/us/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-blue__1047521_pe843414_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-blue__1069057_pe853723_s5.jpg',
        imageAlt: 'VAPPEBY Bluetooth speaker lamp, outdoor/blue',
        url: 'https://www.ikea.com/us/en/p/vappeby-bluetooth-speaker-lamp-outdoor-blue-40515276/',
      },
      {
        id: '40515281',
        name: 'VAPPEBY',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Bluetooth speaker lamp',
        image:
          'https://www.ikea.com/us/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-gray__1047538_pe843422_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-gray__1069071_pe853747_s5.jpg',
        imageAlt: 'VAPPEBY Bluetooth speaker lamp, outdoor/gray',
        url: 'https://www.ikea.com/us/en/p/vappeby-bluetooth-speaker-lamp-outdoor-gray-40515281/',
      },
    ],
  },
  {
    id: '40570574',
    name: 'SOLVINDEN',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: true,
    },
    measurement: '7 7/8 "',
    typeName: 'LED table lamp',
    image:
      'https://www.ikea.com/us/en/images/products/solvinden-led-table-lamp__1237030_pe917797_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-table-lamp__1237028_pe917799_s5.jpg',
    imageAlt: 'SOLVINDEN LED table lamp, 7 7/8 "',
    url: 'https://www.ikea.com/us/en/p/solvinden-led-table-lamp-40570574/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [],
  },
  {
    id: '60578456',
    name: 'LÄNSPORT',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '8 ¾ "',
    typeName: 'LED portable lamp, battery operated',
    image:
      'https://www.ikea.com/us/en/images/products/laensport-led-portable-lamp-battery-operated-white-dark-gray__1291688_pe935206_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/laensport-led-portable-lamp-battery-operated-white-dark-gray__1323598_pe942777_s5.jpg',
    imageAlt:
      'LÄNSPORT LED portable lamp, battery operated, white/dark gray, 8 ¾ "',
    url: 'https://www.ikea.com/us/en/p/laensport-led-portable-lamp-battery-operated-white-dark-gray-60578456/',
    categoryPath: [
      {
        name: 'Lighting',
        key: 'li001',
      },
      {
        name: 'Lamps & light fixtures',
        key: 'li002',
      },
      {
        name: 'Table lamps',
        key: '10732',
      },
    ],
    variants: [],
  },
  {
    id: '40570692',
    name: 'SOLVINDEN',
    price: {
      currency: 'USD',
      currentPrice: 34.99,
      discounted: true,
    },
    measurement: '14 5/8 "',
    typeName: 'LED pendant lamp',
    image:
      'https://www.ikea.com/us/en/images/products/solvinden-led-pendant-lamp-outdoor-oval__1237024_pe917794_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-pendant-lamp-outdoor-oval__1239166_pe918791_s5.jpg',
    imageAlt: 'SOLVINDEN LED pendant lamp, outdoor/oval, 14 5/8 "',
    url: 'https://www.ikea.com/us/en/p/solvinden-led-pendant-lamp-outdoor-oval-40570692/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [],
  },
  {
    id: '80570591',
    name: 'SOLVINDEN',
    price: {
      currency: 'USD',
      currentPrice: 23.99,
      discounted: true,
    },
    measurement: '17 3/4 "',
    typeName: 'LED floor lamp',
    image:
      'https://www.ikea.com/us/en/images/products/solvinden-led-floor-lamp-battery-operated-outdoor__1234551_pe917193_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solvinden-led-floor-lamp-battery-operated-outdoor__1237048_pe917801_s5.jpg',
    imageAlt: 'SOLVINDEN LED floor lamp, battery operated/outdoor, 17 3/4 "',
    url: 'https://www.ikea.com/us/en/p/solvinden-led-floor-lamp-battery-operated-outdoor-80570591/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor lighting',
        key: '17897',
      },
    ],
    variants: [],
  },
  {
    id: '80198295',
    name: 'MORUM',
    price: {
      currency: 'USD',
      currentPrice: 129.99,
      discounted: false,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-beige__0123529_pe279665_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-beige__0738221_pe560680_s5.jpg',
    imageAlt: 'MORUM Rug flatwoven, in/outdoor, beige, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/morum-rug-flatwoven-in-outdoor-beige-80198295/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '20203563',
        name: 'MORUM',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-beige__0123529_pe279665_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-beige__1100531_pe866208_s5.jpg',
        imageAlt: 'MORUM Rug flatwoven, in/outdoor, beige, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/morum-rug-flatwoven-in-outdoor-beige-20203563/',
      },
      {
        id: '30198293',
        name: 'MORUM',
        price: {
          currency: 'USD',
          currentPrice: 129.99,
          discounted: false,
        },
        measurement: '6 \' 7 "x9 \' 10 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-dark-gray__0123531_pe279667_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-dark-gray__0894014_pe560630_s5.jpg',
        imageAlt:
          'MORUM Rug flatwoven, in/outdoor, dark gray, 6 \' 7 "x9 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/morum-rug-flatwoven-in-outdoor-dark-gray-30198293/',
      },
      {
        id: '40203557',
        name: 'MORUM',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-dark-gray__0123531_pe279667_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/morum-rug-flatwoven-in-outdoor-dark-gray__1100532_pe866209_s5.jpg',
        imageAlt:
          'MORUM Rug flatwoven, in/outdoor, dark gray, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/morum-rug-flatwoven-in-outdoor-dark-gray-40203557/',
      },
    ],
  },
  {
    id: '50495409',
    name: 'LYDERSHOLM',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/lydersholm-rug-flatwoven-in-outdoor-medium-brown__0963035_pe808276_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lydersholm-rug-flatwoven-in-outdoor-medium-brown__0936188_pe793163_s5.jpg',
    imageAlt:
      'LYDERSHOLM Rug flatwoven, in/outdoor, medium brown, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/lydersholm-rug-flatwoven-in-outdoor-medium-brown-50495409/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '20495415',
        name: 'LYDERSHOLM',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/lydersholm-rug-flatwoven-in-outdoor-medium-brown__0963035_pe808276_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lydersholm-rug-flatwoven-in-outdoor-medium-brown__0936187_pe793166_s5.jpg',
        imageAlt:
          'LYDERSHOLM Rug flatwoven, in/outdoor, medium brown, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/lydersholm-rug-flatwoven-in-outdoor-medium-brown-20495415/',
      },
    ],
  },
  {
    id: '30569321',
    name: 'KANTSTOLPE',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: false,
    },
    measurement: '6 \' 7 "x9 \' 10 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/kantstolpe-rug-flatwoven-in-outdoor-green__1205692_pe907200_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kantstolpe-rug-flatwoven-in-outdoor-green__1215472_pe912008_s5.jpg',
    imageAlt: 'KANTSTOLPE Rug flatwoven, in/outdoor, green, 6 \' 7 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/kantstolpe-rug-flatwoven-in-outdoor-green-30569321/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '10569322',
        name: 'KANTSTOLPE',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: '4 \' 4 "x6 \' 5 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/kantstolpe-rug-flatwoven-in-outdoor-green__1205692_pe907200_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kantstolpe-rug-flatwoven-in-outdoor-green__1215471_pe912007_s5.jpg',
        imageAlt:
          'KANTSTOLPE Rug flatwoven, in/outdoor, green, 4 \' 4 "x6 \' 5 "',
        url: 'https://www.ikea.com/us/en/p/kantstolpe-rug-flatwoven-in-outdoor-green-10569322/',
      },
      {
        id: '50569320',
        name: 'KANTSTOLPE',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: false,
        },
        measurement: '5 \' 3 "x7 \' 7 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/kantstolpe-rug-flatwoven-in-outdoor-green__1205692_pe907200_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kantstolpe-rug-flatwoven-in-outdoor-green__1215474_pe912010_s5.jpg',
        imageAlt:
          'KANTSTOLPE Rug flatwoven, in/outdoor, green, 5 \' 3 "x7 \' 7 "',
        url: 'https://www.ikea.com/us/en/p/kantstolpe-rug-flatwoven-in-outdoor-green-50569320/',
      },
    ],
  },
  {
    id: '50517944',
    name: 'VIRKLUND',
    price: {
      currency: 'USD',
      currentPrice: 69.99,
      discounted: false,
    },
    measurement: '5 \' 3 "x7 \' 7 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/virklund-rug-flatwoven-in-outdoor-beige-dark-gray__1048368_pe843701_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/virklund-rug-flatwoven-in-outdoor-beige-dark-gray__1048359_pe843698_s5.jpg',
    imageAlt:
      'VIRKLUND Rug flatwoven, in/outdoor, beige/dark gray, 5 \' 3 "x7 \' 7 "',
    url: 'https://www.ikea.com/us/en/p/virklund-rug-flatwoven-in-outdoor-beige-dark-gray-50517944/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [],
  },
  {
    id: '20573111',
    name: 'FULLMAKT',
    price: {
      currency: 'USD',
      currentPrice: 249.99,
      discounted: false,
    },
    measurement: '7 \' 10 "x9 \' 10 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/fullmakt-rug-flatwoven-in-outdoor-beige-melange__1239378_pe918859_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fullmakt-rug-flatwoven-in-outdoor-beige-melange__1241688_pe919943_s5.jpg',
    imageAlt:
      'FULLMAKT Rug flatwoven, in/outdoor, beige/mélange, 7 \' 10 "x9 \' 10 "',
    url: 'https://www.ikea.com/us/en/p/fullmakt-rug-flatwoven-in-outdoor-beige-melange-20573111/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [
      {
        id: '60573109',
        name: 'FULLMAKT',
        price: {
          currency: 'USD',
          currentPrice: 169.99,
          discounted: false,
        },
        measurement: '5 \' 7 "x7 \' 10 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/fullmakt-rug-flatwoven-in-outdoor-beige-melange__1239380_pe918861_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/fullmakt-rug-flatwoven-in-outdoor-beige-melange__1241686_pe919941_s5.jpg',
        imageAlt:
          'FULLMAKT Rug flatwoven, in/outdoor, beige/mélange, 5 \' 7 "x7 \' 10 "',
        url: 'https://www.ikea.com/us/en/p/fullmakt-rug-flatwoven-in-outdoor-beige-melange-60573109/',
      },
    ],
  },
  {
    id: '30553235',
    name: 'KORSNING',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '2 \' 7 "x8 \' 2 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/korsning-rug-flatwoven-in-outdoor-green-purple-stripe__1136247_pe879315_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/korsning-rug-flatwoven-in-outdoor-green-purple-stripe__1147100_pe883251_s5.jpg',
    imageAlt:
      'KORSNING Rug flatwoven, in/outdoor, green purple/stripe, 2 \' 7 "x8 \' 2 "',
    url: 'https://www.ikea.com/us/en/p/korsning-rug-flatwoven-in-outdoor-green-purple-stripe-30553235/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Runners & small rugs',
        key: '10689',
      },
    ],
    variants: [
      {
        id: '00553232',
        name: 'KORSNING',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: '2 \' 7 "x4 \' 11 "',
        typeName: 'Rug flatwoven, in/outdoor',
        image:
          'https://www.ikea.com/us/en/images/products/korsning-rug-flatwoven-in-outdoor-green-purple-stripe__1136248_pe879316_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korsning-rug-flatwoven-in-outdoor-green-purple-stripe__1147098_pe883249_s5.jpg',
        imageAlt:
          'KORSNING Rug flatwoven, in/outdoor, green purple/stripe, 2 \' 7 "x4 \' 11 "',
        url: 'https://www.ikea.com/us/en/p/korsning-rug-flatwoven-in-outdoor-green-purple-stripe-00553232/',
      },
    ],
  },
  {
    id: '50495391',
    name: 'LYDERSHOLM',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '2 \' 7 "x4 \' 11 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/lydersholm-rug-flatwoven-in-outdoor-medium-brown__0936190_pe793165_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lydersholm-rug-flatwoven-in-outdoor-medium-brown__1079077_ph183339_s5.jpg',
    imageAlt:
      'LYDERSHOLM Rug flatwoven, in/outdoor, medium brown, 2 \' 7 "x4 \' 11 "',
    url: 'https://www.ikea.com/us/en/p/lydersholm-rug-flatwoven-in-outdoor-medium-brown-50495391/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Runners & small rugs',
        key: '10689',
      },
    ],
    variants: [],
  },
  {
    id: '00570774',
    name: 'BRÖGGAN',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '4 \' 4 "x6 \' 5 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/broeggan-rug-flatwoven-in-outdoor-dot-pattern-multicolor__1221419_pe913794_s5.jpg',
    imageAlt:
      'BRÖGGAN Rug flatwoven, in/outdoor, dot pattern multicolor, 4 \' 4 "x6 \' 5 "',
    url: 'https://www.ikea.com/us/en/p/broeggan-rug-flatwoven-in-outdoor-dot-pattern-multicolor-00570774/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Medium, large and extra-large rugs',
        key: '10692',
      },
    ],
    variants: [],
  },
  {
    id: '70423685',
    name: 'LOBBÄK',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '2 \' 7 "x6 \' 7 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/lobbaek-rug-flatwoven-in-outdoor-beige__0635906_pe697523_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lobbaek-rug-flatwoven-in-outdoor-beige__0892848_pe697524_s5.jpg',
    imageAlt: 'LOBBÄK Rug flatwoven, in/outdoor, beige, 2 \' 7 "x6 \' 7 "',
    url: 'https://www.ikea.com/us/en/p/lobbaek-rug-flatwoven-in-outdoor-beige-70423685/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Runners & small rugs',
        key: '10689',
      },
    ],
    variants: [],
  },
  {
    id: '00517946',
    name: 'VIRKLUND',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '2 \' 7 "x4 \' 11 "',
    typeName: 'Rug flatwoven, in/outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/virklund-rug-flatwoven-in-outdoor-white-beige-dark-gray__1048382_pe843704_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/virklund-rug-flatwoven-in-outdoor-white-beige-dark-gray__1048381_pe843705_s5.jpg',
    imageAlt:
      'VIRKLUND Rug flatwoven, in/outdoor, white/beige/dark gray, 2 \' 7 "x4 \' 11 "',
    url: 'https://www.ikea.com/us/en/p/virklund-rug-flatwoven-in-outdoor-white-beige-dark-gray-00517946/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Rugs',
        key: '10653',
      },
      {
        name: 'Runners & small rugs',
        key: '10689',
      },
    ],
    variants: [],
  },
  {
    id: '00553388',
    name: 'BÅTSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 490,
      discounted: false,
    },
    measurement: '47 1/4x23 5/8 "',
    typeName: 'Closed kitchen unit',
    image:
      'https://www.ikea.com/us/en/images/products/batskaer-closed-kitchen-unit-outdoor-dark-gray__1240495_pe919403_s5.jpg',
    imageAlt: 'BÅTSKÄR Closed kitchen unit, outdoor/dark gray, 47 1/4x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/batskaer-closed-kitchen-unit-outdoor-dark-gray-00553388/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen modules & parts',
        key: '700544',
      },
    ],
    variants: [],
  },
  {
    id: 's29390107',
    name: 'GRILLSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 210,
      discounted: true,
    },
    measurement: '33 7/8x24 "',
    typeName: 'Kitchen island shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-island-shelf-unit-stainless-steel__0920473_pe787059_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-island-shelf-unit-stainless-steel__0937693_pe793807_s5.jpg',
    imageAlt:
      'GRILLSKÄR Kitchen island shelf unit, stainless steel, 33 7/8x24 "',
    url: 'https://www.ikea.com/us/en/p/grillskaer-kitchen-island-shelf-unit-stainless-steel-s29390107/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen modules & parts',
        key: '700544',
      },
    ],
    variants: [],
  },
  {
    id: 's89496554',
    name: 'GRILLSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 491,
      discounted: true,
    },
    measurement: '67 3/4x24 "',
    typeName: 'Kitchen sink unit/cabinet, outdoor',
    image:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-sink-unit-cabinet-outdoor-stainless-steel__0993340_pe820498_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-sink-unit-cabinet-outdoor-stainless-steel__1188833_pe899588_s5.jpg',
    imageAlt:
      'GRILLSKÄR Kitchen sink unit/cabinet, outdoor, stainless steel, 67 3/4x24 "',
    url: 'https://www.ikea.com/us/en/p/grillskaer-kitchen-sink-unit-cabinet-outdoor-stainless-steel-s89496554/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen kits',
        key: '700543',
      },
    ],
    variants: [],
  },
  {
    id: '50471446',
    name: 'GRILLSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 140,
      discounted: true,
    },
    measurement: '33 7/8x24 "',
    typeName: 'Kitchen island shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-island-shelf-unit-black-stainless-steel-outdoor__0820260_pe774984_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-island-shelf-unit-black-stainless-steel-outdoor__0979313_pe814498_s5.jpg',
    imageAlt:
      'GRILLSKÄR Kitchen island shelf unit, black/stainless steel outdoor, 33 7/8x24 "',
    url: 'https://www.ikea.com/us/en/p/grillskaer-kitchen-island-shelf-unit-black-stainless-steel-outdoor-50471446/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen modules & parts',
        key: '700544',
      },
    ],
    variants: [],
  },
  {
    id: 's79495244',
    name: 'GRILLSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 200,
      discounted: true,
    },
    measurement: '33 7/8x24x69 1/4 "',
    typeName: 'Kitchen island w back panel',
    image:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-island-w-back-panel-stainless-steel-outdoor__1146316_pe882984_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/grillskaer-kitchen-island-w-back-panel-stainless-steel-outdoor__1152158_pe885167_s5.jpg',
    imageAlt:
      'GRILLSKÄR Kitchen island w back panel, stainless steel/outdoor, 33 7/8x24x69 1/4 "',
    url: 'https://www.ikea.com/us/en/p/grillskaer-kitchen-island-w-back-panel-stainless-steel-outdoor-s79495244/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen modules & parts',
        key: '700544',
      },
    ],
    variants: [],
  },
  {
    id: 's59505098',
    name: 'GRILLSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 880,
      discounted: true,
    },
    measurement: '129 7/8x24 "',
    typeName: 'Outdoor kitchen w gas grill',
    image:
      'https://www.ikea.com/us/en/images/products/grillskaer-outdoor-kitchen-w-gas-grill-stainless-steel__1145881_pe882752_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/grillskaer-outdoor-kitchen-w-gas-grill-stainless-steel__1185294_pe898342_s5.jpg',
    imageAlt:
      'GRILLSKÄR Outdoor kitchen w gas grill, stainless steel, 129 7/8x24 "',
    url: 'https://www.ikea.com/us/en/p/grillskaer-outdoor-kitchen-w-gas-grill-stainless-steel-s59505098/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen kits',
        key: '700543',
      },
    ],
    variants: [],
  },
  {
    id: 's19547825',
    name: 'BÅTSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 1360,
      discounted: false,
    },
    measurement: '94 1/2x39 3/8 "',
    typeName: 'Outdoor kitchen island w bar table',
    image:
      'https://www.ikea.com/us/en/images/products/batskaer-outdoor-kitchen-island-w-bar-table-dark-gray__1245768_pe921763_s5.jpg',
    imageAlt:
      'BÅTSKÄR Outdoor kitchen island w bar table, dark gray, 94 1/2x39 3/8 "',
    url: 'https://www.ikea.com/us/en/p/batskaer-outdoor-kitchen-island-w-bar-table-dark-gray-s19547825/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen kits',
        key: '700543',
      },
    ],
    variants: [],
  },
  {
    id: 's99546539',
    name: 'BÅTSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 1569,
      discounted: false,
    },
    measurement: '86 5/8x70 7/8 "',
    typeName: 'Outdoor ktchn w chrcl bbq+bar table',
    image:
      'https://www.ikea.com/us/en/images/products/batskaer-outdoor-ktchn-w-chrcl-bbq-bar-table-dark-gray__1245834_pe921806_s5.jpg',
    imageAlt:
      'BÅTSKÄR Outdoor ktchn w chrcl bbq+bar table, dark gray, 86 5/8x70 7/8 "',
    url: 'https://www.ikea.com/us/en/p/batskaer-outdoor-ktchn-w-chrcl-bbq-bar-table-dark-gray-s99546539/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor kitchen kits',
        key: '700543',
      },
    ],
    variants: [],
  },
  {
    id: '70489662',
    name: 'GRILLSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 190,
      discounted: true,
    },
    measurement: '33 7/8x24 "',
    typeName: 'Sink unit',
    image:
      'https://www.ikea.com/us/en/images/products/grillskaer-sink-unit-black-stainless-steel-outdoor__0820262_pe774985_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/grillskaer-sink-unit-black-stainless-steel-outdoor__0979332_pe814504_s5.jpg',
    imageAlt: 'GRILLSKÄR Sink unit, black/stainless steel outdoor, 33 7/8x24 "',
    url: 'https://www.ikea.com/us/en/p/grillskaer-sink-unit-black-stainless-steel-outdoor-70489662/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor BBQ grills',
        key: '24898',
      },
    ],
    variants: [],
  },
  {
    id: '00553369',
    name: 'BÅTSKÄR',
    price: {
      currency: 'USD',
      currentPrice: 699,
      discounted: false,
    },
    measurement: '47 1/4x23 5/8 "',
    typeName: 'Charcoal grill',
    image:
      'https://www.ikea.com/us/en/images/products/batskaer-charcoal-grill-outdoor-dark-gray__1240469_pe919376_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/batskaer-charcoal-grill-outdoor-dark-gray__1350875_pe951801_s5.jpg',
    imageAlt: 'BÅTSKÄR Charcoal grill, outdoor/dark gray, 47 1/4x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/batskaer-charcoal-grill-outdoor-dark-gray-00553369/',
    categoryPath: [
      {
        name: 'Outdoor',
        key: 'od001',
      },
      {
        name: 'Outdoor kitchen & accessories',
        key: '700349',
      },
      {
        name: 'Outdoor BBQ grills',
        key: '24898',
      },
    ],
    variants: [],
  },
  {
    id: 's99431982',
    name: 'LAGKAPTEN / ALEX',
    price: {
      currency: 'USD',
      currentPrice: 219.99,
      discounted: false,
    },
    measurement: '55 1/8x23 5/8 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1022432_pe832720_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1158868_pe888215_s5.jpg',
    imageAlt: 'LAGKAPTEN / ALEX Desk, white, 55 1/8x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-s99431982/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Combinations',
        key: '18623',
      },
    ],
    variants: [
      {
        id: 's09432189',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 219.99,
          discounted: false,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__1022395_pe832706_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__1160033_pe888711_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, black-brown/white, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-white-s09432189/',
      },
      {
        id: 's79431997',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 259.99,
          discounted: false,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__1022433_pe832721_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__1160047_pe888724_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, white/black-brown, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-black-brown-s79431997/',
      },
      {
        id: 's79432195',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 259.99,
          discounted: false,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown__1022394_pe832705_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown__1160031_pe888710_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, black-brown, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-s79432195/',
      },
      {
        id: 's09431986',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 259.99,
          discounted: false,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-gray-turquoise__1022434_pe832718_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-gray-turquoise__1160048_pe888725_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ALEX Desk, white/gray-turquoise, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-gray-turquoise-s09431986/',
      },
      {
        id: 's49432192',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 259.99,
          discounted: false,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-gray-turquoise__1022396_pe832707_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-gray-turquoise__1160034_pe888714_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ALEX Desk, black-brown/gray-turquoise, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-gray-turquoise-s49432192/',
      },
      {
        id: 's99508434',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 219.99,
          discounted: false,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-anthracite-white__1184928_pe898140_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-anthracite-white__1184927_pe898141_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ALEX Desk, white anthracite/white, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-anthracite-white-s99508434/',
      },
    ],
  },
  {
    id: 's29932181',
    name: 'LINNMON / ADILS',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: true,
    },
    measurement: '39 3/8x23 5/8 "',
    typeName: 'Table',
    image:
      'https://www.ikea.com/us/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg',
    imageAlt: 'LINNMON / ADILS Table, white, 39 3/8x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/linnmon-adils-table-white-s29932181/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Combinations',
        key: '18623',
      },
    ],
    variants: [
      {
        id: 's09416368',
        name: 'LINNMON / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: true,
        },
        measurement: '39 3/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/linnmon-adils-desk-black-brown__0974302_pe812345_s5.jpg',
        imageAlt: 'LINNMON / ADILS Desk, black-brown, 39 3/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/linnmon-adils-desk-black-brown-s09416368/',
      },
      {
        id: 's29416367',
        name: 'LINNMON / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: true,
        },
        measurement: '39 3/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/linnmon-adils-desk-black-brown-white__0974303_pe812346_s5.jpg',
        imageAlt: 'LINNMON / ADILS Desk, black-brown/white, 39 3/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/linnmon-adils-desk-black-brown-white-s29416367/',
      },
      {
        id: 's09932177',
        name: 'LINNMON / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 49.99,
          discounted: true,
        },
        measurement: '39 3/8x23 5/8 "',
        typeName: 'Table',
        image:
          'https://www.ikea.com/us/en/images/products/linnmon-adils-table-white-black__0737166_pe740909_s5.jpg',
        imageAlt: 'LINNMON / ADILS Table, white/black, 39 3/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/linnmon-adils-table-white-black-s09932177/',
      },
    ],
  },
  {
    id: '80213074',
    name: 'MICKE',
    price: {
      currency: 'USD',
      currentPrice: 79.99,
      discounted: true,
    },
    measurement: '41 3/8x19 5/8 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/micke-desk-white__0736018_pe740345_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/micke-desk-white__0851508_pe565256_s5.jpg',
    imageAlt: 'MICKE Desk, white, 41 3/8x19 5/8 "',
    url: 'https://www.ikea.com/us/en/p/micke-desk-white-80213074/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Desks for home',
        key: '20651',
      },
    ],
    variants: [
      {
        id: '10244743',
        name: 'MICKE',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '41 3/8x19 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0403204_pe565263_s5.jpg',
        imageAlt: 'MICKE Desk, black-brown, 41 3/8x19 5/8 "',
        url: 'https://www.ikea.com/us/en/p/micke-desk-black-brown-10244743/',
      },
      {
        id: '80489850',
        name: 'MICKE',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '41 3/8x19 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/micke-desk-anthracite-red__0921882_pe787985_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/micke-desk-anthracite-red__0921883_pe787986_s5.jpg',
        imageAlt: 'MICKE Desk, anthracite/red, 41 3/8x19 5/8 "',
        url: 'https://www.ikea.com/us/en/p/micke-desk-anthracite-red-80489850/',
      },
      {
        id: '10489839',
        name: 'MICKE',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '41 3/8x19 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/micke-desk-white-anthracite__0921886_pe787989_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/micke-desk-white-anthracite__0921887_pe787990_s5.jpg',
        imageAlt: 'MICKE Desk, white/anthracite, 41 3/8x19 5/8 "',
        url: 'https://www.ikea.com/us/en/p/micke-desk-white-anthracite-10489839/',
      },
    ],
  },
  {
    id: 's59417153',
    name: 'LAGKAPTEN / ADILS',
    price: {
      currency: 'USD',
      currentPrice: 69.99,
      discounted: true,
    },
    measurement: '55 1/8x23 5/8 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white__0976080_pe812978_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white__1028383_pe835319_s5.jpg',
    imageAlt: 'LAGKAPTEN / ADILS Desk, white, 55 1/8x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-white-s59417153/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Combinations',
        key: '18623',
      },
    ],
    variants: [
      {
        id: 's19417466',
        name: 'LAGKAPTEN / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-black-brown-white__0976120_pe813011_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-black-brown-white__1159367_pe888447_s5.jpg',
        imageAlt: 'LAGKAPTEN / ADILS Desk, black-brown/white, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-black-brown-white-s19417466/',
      },
      {
        id: 's79417473',
        name: 'LAGKAPTEN / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-black-brown-black__0976118_pe813034_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-black-brown-black__1159364_pe888445_s5.jpg',
        imageAlt: 'LAGKAPTEN / ADILS Desk, black-brown/black, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-black-brown-black-s79417473/',
      },
      {
        id: 's89417156',
        name: 'LAGKAPTEN / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white-black__0976081_pe812979_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white-black__1158595_pe888149_s5.jpg',
        imageAlt: 'LAGKAPTEN / ADILS Desk, white/black, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-white-black-s89417156/',
      },
      {
        id: 's49508422',
        name: 'LAGKAPTEN / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white-anthracite-black__1184909_pe898131_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white-anthracite-black__1184908_pe898132_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ADILS Desk, white anthracite/black, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-white-anthracite-black-s49508422/',
      },
      {
        id: 's59508426',
        name: 'LAGKAPTEN / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white-anthracite-white__1184916_pe898133_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-white-anthracite-white__1184915_pe898134_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ADILS Desk, white anthracite/white, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-white-anthracite-white-s59508426/',
      },
      {
        id: 's59523455',
        name: 'LAGKAPTEN / ADILS',
        price: {
          currency: 'USD',
          currentPrice: 69.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-gray-turquoise-black__1214042_pe911473_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-adils-desk-gray-turquoise-black__1207249_pe907864_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ADILS Desk, gray-turquoise/black, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-adils-desk-gray-turquoise-black-s59523455/',
      },
    ],
  },
  {
    id: '00485224',
    name: 'RIDSPÖ',
    price: {
      currency: 'USD',
      currentPrice: 499.99,
      discounted: false,
    },
    measurement: '55 1/8x27 1/2 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/ridspoe-desk-oak__1188767_pe899574_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ridspoe-desk-oak__1209692_pe909385_s5.jpg',
    imageAlt: 'RIDSPÖ Desk, oak, 55 1/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/ridspoe-desk-oak-00485224/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Desks for home',
        key: '20651',
      },
    ],
    variants: [
      {
        id: '20538580',
        name: 'RIDSPÖ',
        price: {
          currency: 'USD',
          currentPrice: 499.99,
          discounted: false,
        },
        measurement: '55 1/8x27 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/ridspoe-desk-anthracite__1188766_pe899575_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ridspoe-desk-anthracite__1209691_pe909386_s5.jpg',
        imageAlt: 'RIDSPÖ Desk, anthracite, 55 1/8x27 1/2 "',
        url: 'https://www.ikea.com/us/en/p/ridspoe-desk-anthracite-20538580/',
      },
    ],
  },
  {
    id: '40460815',
    name: 'LAGKAPTEN',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: true,
    },
    measurement: '55 1/8x23 5/8 "',
    typeName: 'Tabletop',
    image:
      'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg',
    imageAlt: 'LAGKAPTEN Tabletop, white, 55 1/8x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/lagkapten-tabletop-white-40460815/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Table tops',
        key: '11844',
      },
    ],
    variants: [
      {
        id: '80487016',
        name: 'LAGKAPTEN',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Tabletop',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-black-brown__0977796_pe813779_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-black-brown__1028369_pe835306_s5.jpg',
        imageAlt: 'LAGKAPTEN Tabletop, black-brown, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-tabletop-black-brown-80487016/',
      },
      {
        id: '80569408',
        name: 'LAGKAPTEN',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Tabletop',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-gray-turquoise__1207325_pe911159_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-gray-turquoise__1207320_pe907918_s5.jpg',
        imageAlt: 'LAGKAPTEN Tabletop, gray/turquoise, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-tabletop-gray-turquoise-80569408/',
      },
      {
        id: '60559330',
        name: 'LAGKAPTEN',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: true,
        },
        measurement: '55 1/8x23 5/8 "',
        typeName: 'Tabletop',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white-anthracite__1184858_pe898114_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white-anthracite__1184962_pe898180_s5.jpg',
        imageAlt: 'LAGKAPTEN Tabletop, white/anthracite, 55 1/8x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-tabletop-white-anthracite-60559330/',
      },
    ],
  },
  {
    id: '90214308',
    name: 'MICKE',
    price: {
      currency: 'USD',
      currentPrice: 89.99,
      discounted: true,
    },
    measurement: '55 7/8x19 5/8 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/micke-desk-white__0736020_pe740347_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/micke-desk-white__0851288_pe565258_s5.jpg',
    imageAlt: 'MICKE Desk, white, 55 7/8x19 5/8 "',
    url: 'https://www.ikea.com/us/en/p/micke-desk-white-90214308/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Desks for home',
        key: '20651',
      },
    ],
    variants: [
      {
        id: '60244745',
        name: 'MICKE',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: true,
        },
        measurement: '55 7/8x19 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0736019_pe740346_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0403166_pe565225_s5.jpg',
        imageAlt: 'MICKE Desk, black-brown, 55 7/8x19 5/8 "',
        url: 'https://www.ikea.com/us/en/p/micke-desk-black-brown-60244745/',
      },
    ],
  },
  {
    id: 's69416817',
    name: 'LAGKAPTEN / ALEX',
    price: {
      currency: 'USD',
      currentPrice: 134.99,
      discounted: false,
    },
    measurement: '47 1/4x23 5/8 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__0977483_pe813612_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1028366_pe835304_s5.jpg',
    imageAlt: 'LAGKAPTEN / ALEX Desk, white, 47 1/4x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-s69416817/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Combinations',
        key: '18623',
      },
    ],
    variants: [
      {
        id: 's19417051',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 134.99,
          discounted: false,
        },
        measurement: '47 1/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__0977234_pe813477_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__1158813_pe888197_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, black-brown/white, 47 1/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-white-s19417051/',
      },
      {
        id: 's59416865',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 154.99,
          discounted: false,
        },
        measurement: '47 1/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__0977484_pe813613_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__1159388_pe888458_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, white/black-brown, 47 1/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-black-brown-s59416865/',
      },
      {
        id: 's89417057',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 154.99,
          discounted: false,
        },
        measurement: '47 1/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-black__0977233_pe813476_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-black__1028364_pe835302_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, black-brown/black, 47 1/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-black-s89417057/',
      },
      {
        id: 's59523380',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 154.99,
          discounted: false,
        },
        measurement: '47 1/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-gray-turquoise-black__1207280_pe907882_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-gray-turquoise-black__1207279_pe907883_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ALEX Desk, gray-turquoise/black, 47 1/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-gray-turquoise-black-s59523380/',
      },
      {
        id: 's99508410',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 134.99,
          discounted: false,
        },
        measurement: '47 1/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-anthracite-white__1361720_pe954732_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-anthracite-white__1184965_pe898188_s5.jpg',
        imageAlt:
          'LAGKAPTEN / ALEX Desk, white anthracite/white, 47 1/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-anthracite-white-s99508410/',
      },
    ],
  },
  {
    id: 's59417619',
    name: 'LAGKAPTEN / ALEX',
    price: {
      currency: 'USD',
      currentPrice: 257.49,
      discounted: false,
    },
    measurement: '78 3/4x23 5/8 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__0976159_pe813052_s5.jpg',
    imageAlt: 'LAGKAPTEN / ALEX Desk, white, 78 3/4x23 5/8 "',
    url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-s59417619/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'Table bar system',
        key: '11811',
      },
      {
        name: 'Combinations',
        key: '18623',
      },
    ],
    variants: [
      {
        id: 's29417687',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 257.49,
          discounted: false,
        },
        measurement: '78 3/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__0976184_pe813078_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__1158843_pe888209_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, black-brown/white, 78 3/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-white-s29417687/',
      },
      {
        id: 's69417690',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 297.49,
          discounted: false,
        },
        measurement: '78 3/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-black__0976183_pe813077_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-black__1028403_pe835337_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, black-brown/black, 78 3/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-black-brown-black-s69417690/',
      },
      {
        id: 's99417622',
        name: 'LAGKAPTEN / ALEX',
        price: {
          currency: 'USD',
          currentPrice: 297.49,
          discounted: false,
        },
        measurement: '78 3/4x23 5/8 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__0976160_pe813053_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__1158860_pe888214_s5.jpg',
        imageAlt: 'LAGKAPTEN / ALEX Desk, white/black-brown, 78 3/4x23 5/8 "',
        url: 'https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-black-brown-s99417622/',
      },
    ],
  },
  {
    id: 's19022808',
    name: 'BEKANT',
    price: {
      currency: 'USD',
      currentPrice: 219,
      discounted: true,
    },
    measurement: '63x31 1/2 "',
    typeName: 'Desk',
    image:
      'https://www.ikea.com/us/en/images/products/bekant-desk-white__0736420_pe740535_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bekant-desk-white__0855220_pe714635_s5.jpg',
    imageAlt: 'BEKANT Desk, white, 63x31 1/2 "',
    url: 'https://www.ikea.com/us/en/p/bekant-desk-white-s19022808/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Desks & computer desks',
        key: '20649',
      },
      {
        name: 'Table & desk systems',
        key: '47423',
      },
      {
        name: 'BEKANT system',
        key: '18960',
      },
      {
        name: 'BEKANT office desks',
        key: '18962',
      },
    ],
    variants: [
      {
        id: 's19282679',
        name: 'BEKANT',
        price: {
          currency: 'USD',
          currentPrice: 239,
          discounted: true,
        },
        measurement: '63x31 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/bekant-desk-white-stained-oak-veneer-white__0736422_pe740537_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bekant-desk-white-stained-oak-veneer-white__0852743_pe714695_s5.jpg',
        imageAlt: 'BEKANT Desk, white stained oak veneer/white, 63x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/bekant-desk-white-stained-oak-veneer-white-s19282679/',
      },
      {
        id: 's29282674',
        name: 'BEKANT',
        price: {
          currency: 'USD',
          currentPrice: 239,
          discounted: true,
        },
        measurement: '63x31 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/bekant-desk-white-stained-oak-veneer-black__0736421_pe740536_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bekant-desk-white-stained-oak-veneer-black__0853182_pe722219_s5.jpg',
        imageAlt: 'BEKANT Desk, white stained oak veneer/black, 63x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/bekant-desk-white-stained-oak-veneer-black-s29282674/',
      },
      {
        id: 's19282764',
        name: 'BEKANT',
        price: {
          currency: 'USD',
          currentPrice: 239,
          discounted: true,
        },
        measurement: '63x31 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/bekant-desk-linoleum-blue-white__0736417_pe740532_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bekant-desk-linoleum-blue-white__0735152_pe739784_s5.jpg',
        imageAlt: 'BEKANT Desk, linoleum blue/white, 63x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/bekant-desk-linoleum-blue-white-s19282764/',
      },
      {
        id: 's49282767',
        name: 'BEKANT',
        price: {
          currency: 'USD',
          currentPrice: 239,
          discounted: true,
        },
        measurement: '63x31 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/bekant-desk-linoleum-blue-black__0736416_pe740531_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bekant-desk-linoleum-blue-black__0735094_pe739741_s5.jpg',
        imageAlt: 'BEKANT Desk, linoleum blue/black, 63x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/bekant-desk-linoleum-blue-black-s49282767/',
      },
      {
        id: 's59282682',
        name: 'BEKANT',
        price: {
          currency: 'USD',
          currentPrice: 239,
          discounted: true,
        },
        measurement: '63x31 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/bekant-desk-black-stained-ash-veneer-white__0736415_pe740530_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bekant-desk-black-stained-ash-veneer-white__0853346_pe714697_s5.jpg',
        imageAlt: 'BEKANT Desk, black stained ash veneer/white, 63x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/bekant-desk-black-stained-ash-veneer-white-s59282682/',
      },
      {
        id: 's69282592',
        name: 'BEKANT',
        price: {
          currency: 'USD',
          currentPrice: 239,
          discounted: true,
        },
        measurement: '63x31 1/2 "',
        typeName: 'Desk',
        image:
          'https://www.ikea.com/us/en/images/products/bekant-desk-black-stained-ash-veneer-black__0736414_pe740529_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bekant-desk-black-stained-ash-veneer-black__0853167_pe714690_s5.jpg',
        imageAlt: 'BEKANT Desk, black stained ash veneer/black, 63x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/bekant-desk-black-stained-ash-veneer-black-s69282592/',
      },
    ],
  },
  {
    id: 's59305928',
    name: 'POÄNG',
    price: {
      currency: 'USD',
      currentPrice: 99,
      discounted: true,
    },
    measurement: '',
    typeName: 'Armchair',
    image:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-light-beige__0571500_pe666933_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-light-beige__0837298_pe666936_s5.jpg',
    imageAlt: 'POÄNG Armchair, birch veneer/Knisa light beige',
    url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-knisa-light-beige-s59305928/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Fabric armchairs',
        key: '10687',
      },
    ],
    variants: [
      {
        id: 's19305925',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 169,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-beige__0497125_pe628952_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-beige__1184589_ph187101_s5.jpg',
        imageAlt: 'POÄNG Armchair, birch veneer/Hillared beige',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-hillared-beige-s19305925/',
      },
      {
        id: 's49305924',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 169,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-anthracite__0497120_pe628947_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-anthracite__0837219_pe629068_s5.jpg',
        imageAlt: 'POÄNG Armchair, birch veneer/Hillared anthracite',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-hillared-anthracite-s49305924/',
      },
      {
        id: 's89502135',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-blue__1192120_pe900896_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-blue__1192119_pe900866_s5.jpg',
        imageAlt: 'POÄNG Armchair, birch veneer/Gunnared blue',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-gunnared-blue-s89502135/',
      },
      {
        id: 's09502059',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-dark-gray__1192239_pe900965_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-dark-gray__1192238_pe900964_s5.jpg',
        imageAlt: 'POÄNG Armchair, birch veneer/Gunnared dark gray',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-gunnared-dark-gray-s09502059/',
      },
      {
        id: 's39501906',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-light-green__1192124_pe900869_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-light-green__1192123_pe900868_s5.jpg',
        imageAlt: 'POÄNG Armchair, birch veneer/Gunnared light green',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-gunnared-light-green-s39501906/',
      },
      {
        id: 's69387080',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 129,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-skiftebo-yellow__0936990_pe793502_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-skiftebo-yellow__0936991_pe793517_s5.jpg',
        imageAlt: 'POÄNG Armchair, birch veneer/Skiftebo yellow',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-skiftebo-yellow-s69387080/',
      },
    ],
  },
  {
    id: 's89336023',
    name: 'POÄNG',
    price: {
      currency: 'USD',
      currentPrice: 99,
      discounted: true,
    },
    measurement: '',
    typeName: 'Armchair',
    image:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-black__0571538_pe666953_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-black__0840687_pe666956_s5.jpg',
    imageAlt: 'POÄNG Armchair, brown/Knisa black',
    url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-knisa-black-s89336023/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Fabric armchairs',
        key: '10687',
      },
    ],
    variants: [
      {
        id: 's09336022',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 99,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-light-beige__0571543_pe666957_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-light-beige__0840421_pe666960_s5.jpg',
        imageAlt: 'POÄNG Armchair, brown/Knisa light beige',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-knisa-light-beige-s09336022/',
      },
      {
        id: 's39336025',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 169,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-beige__0497155_pe628982_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-beige__0840717_pe631653_s5.jpg',
        imageAlt: 'POÄNG Armchair, brown/Hillared beige',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-hillared-beige-s39336025/',
      },
      {
        id: 's09502144',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-blue__1192148_pe900888_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-blue__1192147_pe900887_s5.jpg',
        imageAlt: 'POÄNG Armchair, brown/Gunnared blue',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-blue-s09502144/',
      },
      {
        id: 's19336026',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 169,
          discounted: true,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-anthracite__0497150_pe628977_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-anthracite__0837589_pe629093_s5.jpg',
        imageAlt: 'POÄNG Armchair, brown/Hillared anthracite',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-hillared-anthracite-s19336026/',
      },
      {
        id: 's89388470',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 129,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-dark-gray__0937022_pe793528_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-dark-gray__0937023_pe793529_s5.jpg',
        imageAlt: 'POÄNG Armchair, brown/Skiftebo dark gray',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-skiftebo-dark-gray-s89388470/',
      },
      {
        id: 's19387110',
        name: 'POÄNG',
        price: {
          currency: 'USD',
          currentPrice: 129,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-yellow__0936998_pe793510_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-yellow__0936999_pe793511_s5.jpg',
        imageAlt: 'POÄNG Armchair, brown/Skiftebo yellow',
        url: 'https://www.ikea.com/us/en/p/poaeng-armchair-brown-skiftebo-yellow-s19387110/',
      },
    ],
  },
  {
    id: '80570831',
    name: 'DYVLINGE',
    price: {
      currency: 'USD',
      currentPrice: 199,
      discounted: false,
    },
    measurement: '',
    typeName: 'Swivel chair',
    image:
      'https://www.ikea.com/us/en/images/products/dyvlinge-swivel-chair-kelinge-black__1205899_pe907271_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/dyvlinge-swivel-chair-kelinge-black__1205898_pe907272_s5.jpg',
    imageAlt: 'DYVLINGE Swivel chair, Kelinge black',
    url: 'https://www.ikea.com/us/en/p/dyvlinge-swivel-chair-kelinge-black-80570831/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Lounge chairs',
        key: '53257',
      },
    ],
    variants: [
      {
        id: '30570838',
        name: 'DYVLINGE',
        price: {
          currency: 'USD',
          currentPrice: 199,
          discounted: false,
        },
        measurement: '',
        typeName: 'Swivel chair',
        image:
          'https://www.ikea.com/us/en/images/products/dyvlinge-swivel-chair-kelinge-green__1205904_pe907276_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dyvlinge-swivel-chair-kelinge-green__1205903_pe907277_s5.jpg',
        imageAlt: 'DYVLINGE Swivel chair, Kelinge green',
        url: 'https://www.ikea.com/us/en/p/dyvlinge-swivel-chair-kelinge-green-30570838/',
      },
    ],
  },
  {
    id: 's29470236',
    name: 'KIVIK',
    price: {
      currency: 'USD',
      currentPrice: 549,
      discounted: false,
    },
    measurement: '',
    typeName: '1-seat sleeper sofa',
    image:
      'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tibbleby-beige-gray__1130876_pe877950_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tibbleby-beige-gray__1148199_ph184927_s5.jpg',
    imageAlt: 'KIVIK 1-seat sleeper sofa, Tibbleby beige/gray',
    url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tibbleby-beige-gray-s29470236/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Chair beds',
        key: '16296',
      },
    ],
    variants: [
      {
        id: 's09470242',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '',
        typeName: '1-seat sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tresund-light-beige__1130886_pe877957_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tresund-light-beige__1165835_pe890978_s5.jpg',
        imageAlt: 'KIVIK 1-seat sleeper sofa, Tresund light beige',
        url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tresund-light-beige-s09470242/',
      },
      {
        id: 's09499655',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: false,
        },
        measurement: '',
        typeName: '1-seat sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tallmyra-blue__1125165_pe875397_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tallmyra-blue__1165817_pe890980_s5.jpg',
        imageAlt: 'KIVIK 1-seat sleeper sofa, Tallmyra blue',
        url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tallmyra-blue-s09499655/',
      },
      {
        id: 's79499652',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '',
        typeName: '1-seat sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-gunnared-light-brown-pink__1125163_pe875395_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-gunnared-light-brown-pink__1165811_pe890963_s5.jpg',
        imageAlt: 'KIVIK 1-seat sleeper sofa, Gunnared light brown-pink',
        url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-gunnared-light-brown-pink-s79499652/',
      },
      {
        id: 's19482796',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 599,
          discounted: false,
        },
        measurement: '',
        typeName: '1-seat sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-kelinge-gray-turquoise__1130882_pe877956_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-kelinge-gray-turquoise__1165807_pe890987_s5.jpg',
        imageAlt: 'KIVIK 1-seat sleeper sofa, Kelinge gray-turquoise',
        url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-kelinge-gray-turquoise-s19482796/',
      },
      {
        id: 's59499653',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 649,
          discounted: false,
        },
        measurement: '',
        typeName: '1-seat sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-gunnared-light-green__1125171_pe875403_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-gunnared-light-green__1165831_pe890976_s5.jpg',
        imageAlt: 'KIVIK 1-seat sleeper sofa, Gunnared light green',
        url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-gunnared-light-green-s59499653/',
      },
      {
        id: 's49499658',
        name: 'KIVIK',
        price: {
          currency: 'USD',
          currentPrice: 699,
          discounted: false,
        },
        measurement: '',
        typeName: '1-seat sleeper sofa',
        image:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tallmyra-white-black__1125164_pe875396_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tallmyra-white-black__1165813_pe890964_s5.jpg',
        imageAlt: 'KIVIK 1-seat sleeper sofa, Tallmyra white/black',
        url: 'https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tallmyra-white-black-s49499658/',
      },
    ],
  },
  {
    id: '20361897',
    name: 'STRANDMON',
    price: {
      currency: 'USD',
      currentPrice: 299,
      discounted: true,
    },
    measurement: '',
    typeName: 'Wing chair',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-skiftebo-yellow__0325450_pe517970_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-skiftebo-yellow__0837297_pe601176_s5.jpg',
    imageAlt: 'STRANDMON Wing chair, Skiftebo yellow',
    url: 'https://www.ikea.com/us/en/p/strandmon-wing-chair-skiftebo-yellow-20361897/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Fabric armchairs',
        key: '10687',
      },
    ],
    variants: [
      {
        id: '40456960',
        name: 'STRANDMON',
        price: {
          currency: 'USD',
          currentPrice: 349,
          discounted: true,
        },
        measurement: '',
        typeName: 'Wing chair',
        image:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-vibberbo-black-beige__0761768_pe751434_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-vibberbo-black-beige__1184555_ph186827_s5.jpg',
        imageAlt: 'STRANDMON Wing chair, Vibberbo black/beige',
        url: 'https://www.ikea.com/us/en/p/strandmon-wing-chair-vibberbo-black-beige-40456960/',
      },
      {
        id: '60492815',
        name: 'STRANDMON',
        price: {
          currency: 'USD',
          currentPrice: 349,
          discounted: true,
        },
        measurement: '',
        typeName: 'Wing chair',
        image:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-kelinge-beige__0950941_pe800821_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-kelinge-beige__0950943_pe800826_s5.jpg',
        imageAlt: 'STRANDMON Wing chair, Kelinge beige',
        url: 'https://www.ikea.com/us/en/p/strandmon-wing-chair-kelinge-beige-60492815/',
      },
      {
        id: '90359829',
        name: 'STRANDMON',
        price: {
          currency: 'USD',
          currentPrice: 299,
          discounted: false,
        },
        measurement: '',
        typeName: 'Wing chair',
        image:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-nordvalla-dark-gray__0325432_pe517964_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-nordvalla-dark-gray__1116445_pe872501_s5.jpg',
        imageAlt: 'STRANDMON Wing chair, Nordvalla dark gray',
        url: 'https://www.ikea.com/us/en/p/strandmon-wing-chair-nordvalla-dark-gray-90359829/',
      },
      {
        id: '90359848',
        name: 'STRANDMON',
        price: {
          currency: 'USD',
          currentPrice: 349,
          discounted: true,
        },
        measurement: '',
        typeName: 'Wing chair',
        image:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-djuparp-dark-green__0531313_pe647261_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/strandmon-wing-chair-djuparp-dark-green__0841150_pe647266_s5.jpg',
        imageAlt: 'STRANDMON Wing chair, Djuparp dark green',
        url: 'https://www.ikea.com/us/en/p/strandmon-wing-chair-djuparp-dark-green-90359848/',
      },
    ],
  },
  {
    id: '70078463',
    name: 'PELLO',
    price: {
      currency: 'USD',
      currentPrice: 69.99,
      discounted: true,
    },
    measurement: '',
    typeName: 'Armchair',
    image:
      'https://www.ikea.com/us/en/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg',
    imageAlt: 'PELLO Armchair, Holmby natural',
    url: 'https://www.ikea.com/us/en/p/pello-armchair-holmby-natural-70078463/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Fabric armchairs',
        key: '10687',
      },
    ],
    variants: [],
  },
  {
    id: '30533493',
    name: 'EKENÄSET',
    price: {
      currency: 'USD',
      currentPrice: 249,
      discounted: false,
    },
    measurement: '',
    typeName: 'Armchair',
    image:
      'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1109687_pe870153_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1179060_pe895831_s5.jpg',
    imageAlt: 'EKENÄSET Armchair, Kilanda light beige',
    url: 'https://www.ikea.com/us/en/p/ekenaeset-armchair-kilanda-light-beige-30533493/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Fabric armchairs',
        key: '10687',
      },
    ],
    variants: [
      {
        id: '90533485',
        name: 'EKENÄSET',
        price: {
          currency: 'USD',
          currentPrice: 279,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kelinge-gray-turquoise__1109684_pe870150_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kelinge-gray-turquoise__1179059_pe895832_s5.jpg',
        imageAlt: 'EKENÄSET Armchair, Kelinge gray-turquoise',
        url: 'https://www.ikea.com/us/en/p/ekenaeset-armchair-kelinge-gray-turquoise-90533485/',
      },
    ],
  },
  {
    id: '10219178',
    name: 'ADDE',
    price: {
      currency: 'USD',
      currentPrice: 12.5,
      discounted: false,
    },
    measurement: '',
    typeName: 'Chair',
    image:
      'https://www.ikea.com/us/en/images/products/adde-chair-white__0728280_pe736170_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/adde-chair-white__0872092_pe716742_s5.jpg',
    imageAlt: 'ADDE Chair, white',
    url: 'https://www.ikea.com/us/en/p/adde-chair-white-10219178/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Dining chairs',
        key: '25219',
      },
      {
        name: 'Dining chairs',
        key: '25220',
      },
    ],
    variants: [
      {
        id: '90214285',
        name: 'ADDE',
        price: {
          currency: 'USD',
          currentPrice: 12.5,
          discounted: false,
        },
        measurement: '',
        typeName: 'Chair',
        image:
          'https://www.ikea.com/us/en/images/products/adde-chair-black__0728277_pe736167_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/adde-chair-black__1052582_pe846237_s5.jpg',
        imageAlt: 'ADDE Chair, black',
        url: 'https://www.ikea.com/us/en/p/adde-chair-black-90214285/',
      },
    ],
  },
  {
    id: '90568903',
    name: 'ÖSTANÖ',
    price: {
      currency: 'USD',
      currentPrice: 25,
      discounted: false,
    },
    measurement: '',
    typeName: 'Chair',
    image:
      'https://www.ikea.com/us/en/images/products/oestanoe-chair-deep-green-remmarn-deep-green__1209972_pe909498_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/oestanoe-chair-deep-green-remmarn-deep-green__1209968_pe909496_s5.jpg',
    imageAlt: 'ÖSTANÖ Chair, deep green Remmarn/deep green',
    url: 'https://www.ikea.com/us/en/p/oestanoe-chair-deep-green-remmarn-deep-green-90568903/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Dining chairs',
        key: '25219',
      },
      {
        name: 'Dining chairs',
        key: '25220',
      },
    ],
    variants: [
      {
        id: '90538647',
        name: 'ÖSTANÖ',
        price: {
          currency: 'USD',
          currentPrice: 25,
          discounted: false,
        },
        measurement: '',
        typeName: 'Chair',
        image:
          'https://www.ikea.com/us/en/images/products/oestanoe-chair-red-brown-remmarn-red-brown__1120081_pe873713_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/oestanoe-chair-red-brown-remmarn-red-brown__1186082_pe898672_s5.jpg',
        imageAlt: 'ÖSTANÖ Chair, red-brown Remmarn/red-brown',
        url: 'https://www.ikea.com/us/en/p/oestanoe-chair-red-brown-remmarn-red-brown-90538647/',
      },
      {
        id: '60545362',
        name: 'ÖSTANÖ',
        price: {
          currency: 'USD',
          currentPrice: 25,
          discounted: false,
        },
        measurement: '',
        typeName: 'Chair',
        image:
          'https://www.ikea.com/us/en/images/products/oestanoe-chair-black-remmarn-dark-gray__1119282_pe873451_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/oestanoe-chair-black-remmarn-dark-gray__1186081_pe898673_s5.jpg',
        imageAlt: 'ÖSTANÖ Chair, black Remmarn/dark gray',
        url: 'https://www.ikea.com/us/en/p/oestanoe-chair-black-remmarn-dark-gray-60545362/',
      },
    ],
  },
  {
    id: 's79553842',
    name: 'UPPLAND',
    price: {
      currency: 'USD',
      currentPrice: 479,
      discounted: false,
    },
    measurement: '',
    typeName: 'Armchair',
    image:
      'https://www.ikea.com/us/en/images/products/uppland-armchair-kilanda-light-beige__1242736_pe920364_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppland-armchair-kilanda-light-beige__1242733_pe920361_s5.jpg',
    imageAlt: 'UPPLAND Armchair, Kilanda light beige',
    url: 'https://www.ikea.com/us/en/p/uppland-armchair-kilanda-light-beige-s79553842/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'Armchairs & accent chairs',
        key: 'fu006',
      },
      {
        name: 'Armchairs',
        key: '16239',
      },
      {
        name: 'Fabric armchairs',
        key: '10687',
      },
    ],
    variants: [
      {
        id: 's39553844',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 529,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-hillared-beige__0779163_pe759288_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-hillared-beige__0779161_pe759287_s5.jpg',
        imageAlt: 'UPPLAND Armchair, Hillared beige',
        url: 'https://www.ikea.com/us/en/p/uppland-armchair-hillared-beige-s39553844/',
      },
      {
        id: 's39553839',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 479,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-kilanda-dark-blue__1242728_pe920356_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-kilanda-dark-blue__1242725_pe920353_s5.jpg',
        imageAlt: 'UPPLAND Armchair, Kilanda dark blue',
        url: 'https://www.ikea.com/us/en/p/uppland-armchair-kilanda-dark-blue-s39553839/',
      },
      {
        id: 's59553843',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 499,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-kelinge-rust__1293282_pe935149_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-kelinge-rust__1293281_pe935154_s5.jpg',
        imageAlt: 'UPPLAND Armchair, Kelinge rust',
        url: 'https://www.ikea.com/us/en/p/uppland-armchair-kelinge-rust-s59553843/',
      },
      {
        id: 's09553845',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 449,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-hakebo-dark-gray__1242740_pe920368_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-hakebo-dark-gray__1242737_pe920365_s5.jpg',
        imageAlt: 'UPPLAND Armchair, Hakebo dark gray',
        url: 'https://www.ikea.com/us/en/p/uppland-armchair-hakebo-dark-gray-s09553845/',
      },
      {
        id: 's89384108',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 479,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-blekinge-white__0818464_pe774419_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-blekinge-white__0818462_pe774422_s5.jpg',
        imageAlt: 'UPPLAND Armchair, Blekinge white',
        url: 'https://www.ikea.com/us/en/p/uppland-armchair-blekinge-white-s89384108/',
      },
      {
        id: 's59553838',
        name: 'UPPLAND',
        price: {
          currency: 'USD',
          currentPrice: 499,
          discounted: false,
        },
        measurement: '',
        typeName: 'Armchair',
        image:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-karlshov-beige-multicolor__1242732_pe920360_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppland-armchair-karlshov-beige-multicolor__1242729_pe920357_s5.jpg',
        imageAlt: 'UPPLAND Armchair, Karlshov beige/multicolor',
        url: 'https://www.ikea.com/us/en/p/uppland-armchair-karlshov-beige-multicolor-s59553838/',
      },
    ],
  },
  {
    id: '00522330',
    name: 'IVAR',
    price: {
      currency: 'USD',
      currentPrice: 69,
      discounted: false,
    },
    measurement: '31x12x33 "',
    typeName: 'Shelf unit',
    image:
      'https://www.ikea.com/us/en/images/products/ivar-shelf-unit-pine__1216943_pe928443_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ivar-shelf-unit-pine__1288311_pe934155_s5.jpg',
    imageAlt: 'IVAR Shelf unit, pine, 31x12x33 "',
    url: 'https://www.ikea.com/us/en/p/ivar-shelf-unit-pine-00522330/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage solution systems',
        key: '46052',
      },
      {
        name: 'IVAR system',
        key: '11703',
      },
      {
        name: 'Combinations',
        key: '11704',
      },
    ],
    variants: [],
  },
  {
    id: 's89508118',
    name: 'IVAR',
    price: {
      currency: 'USD',
      currentPrice: 200,
      discounted: true,
    },
    measurement: '63x11 3/4x32 5/8 "',
    typeName: 'Cabinet with doors',
    image:
      'https://www.ikea.com/us/en/images/products/ivar-cabinet-with-doors-gray-green-mesh__1184104_pe897733_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ivar-cabinet-with-doors-gray-green-mesh__1207145_pe907820_s5.jpg',
    imageAlt: 'IVAR Cabinet with doors, gray-green mesh, 63x11 3/4x32 5/8 "',
    url: 'https://www.ikea.com/us/en/p/ivar-cabinet-with-doors-gray-green-mesh-s89508118/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage solution systems',
        key: '46052',
      },
      {
        name: 'IVAR system',
        key: '11703',
      },
      {
        name: 'All parts',
        key: '11705',
      },
    ],
    variants: [
      {
        id: 's99508108',
        name: 'IVAR',
        price: {
          currency: 'USD',
          currentPrice: 200,
          discounted: true,
        },
        measurement: '63x11 3/4x32 5/8 "',
        typeName: 'Cabinet with doors',
        image:
          'https://www.ikea.com/us/en/images/products/ivar-cabinet-with-doors-black-mesh__1184105_pe897732_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ivar-cabinet-with-doors-black-mesh__1207638_pe908104_s5.jpg',
        imageAlt: 'IVAR Cabinet with doors, black mesh, 63x11 3/4x32 5/8 "',
        url: 'https://www.ikea.com/us/en/p/ivar-cabinet-with-doors-black-mesh-s99508108/',
      },
    ],
  },
  {
    id: 's79057526',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 490,
      discounted: false,
    },
    measurement: '47 1/4x16 1/2x76 "',
    typeName: 'Storage combination with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-white__0350868_pe535038_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-white__0394185_pe561008_s5.jpg',
    imageAlt:
      'BESTÅ Storage combination with doors, white/Lappviken white, 47 1/4x16 1/2x76 "',
    url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-lappviken-white-s79057526/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Display & storage cabinets',
        key: 'st003',
      },
      {
        name: 'Cabinets, hutches & cupboards',
        key: '10409',
      },
    ],
    variants: [
      {
        id: 's09421690',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 760,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x76 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-bergsviken-black-marble-effect__0994357_pe821019_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-bergsviken-black-marble-effect__0999935_pe823954_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white Bergsviken/black marble effect, 47 1/4x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-bergsviken-black-marble-effect-s09421690/',
      },
      {
        id: 's19057794',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 700,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x76 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-selsviken-high-gloss-beige__0350893_pe535063_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-selsviken-high-gloss-beige__0846213_pe635976_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Selsviken high-gloss/beige, 47 1/4x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-selsviken-high-gloss-beige-s19057794/',
      },
      {
        id: 's09060495',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 630,
          discounted: true,
        },
        measurement: '47 1/4x16 1/2x76 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-selsviken-high-gloss-white__0350885_pe535055_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-walnut-effect-light-gray-selsviken-high-gloss-white__0750253_pe746478_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, walnut effect light gray/Selsviken high-gloss/white, 47 1/4x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-walnut-effect-light-gray-selsviken-high-gloss-white-s09060495/',
      },
      {
        id: 's09508141',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 670,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x76 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-dark-gray-moertviken-dark-gray__1209999_pe909509_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-dark-gray-moertviken-dark-gray__1240319_pe919299_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, dark gray/Mörtviken dark gray, 47 1/4x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-dark-gray-moertviken-dark-gray-s09508141/',
      },
      {
        id: 's59071463',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 670,
          discounted: true,
        },
        measurement: '47 1/4x16 1/2x76 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-laxviken-black__0350892_pe535062_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-laxviken-black__0394235_pe561058_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Laxviken black, 47 1/4x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-laxviken-black-s59071463/',
      },
      {
        id: 's09071465',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 700,
          discounted: false,
        },
        measurement: '47 1/4x16 1/2x76 "',
        typeName: 'Storage combination with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-laxviken-white__0350870_pe535040_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-laxviken-white__0843481_pe635999_s5.jpg',
        imageAlt:
          'BESTÅ Storage combination with doors, white/Laxviken white, 47 1/4x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-laxviken-white-s09071465/',
      },
    ],
  },
  {
    id: 's59046708',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 50,
      discounted: false,
    },
    measurement: '23 5/8x8 5/8x15 "',
    typeName: 'Shelf unit with door',
    image:
      'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-lappviken-white__0352942_pe537205_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-lappviken-white__0842991_pe535505_s5.jpg',
    imageAlt:
      'BESTÅ Shelf unit with door, white/Lappviken white, 23 5/8x8 5/8x15 "',
    url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-white-lappviken-white-s59046708/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage solution systems',
        key: '46052',
      },
      {
        name: 'BESTÅ storage system',
        key: '46053',
      },
      {
        name: 'BESTÅ basic storage units',
        key: '700226',
      },
      {
        name: 'BESTÅ floor standing units',
        key: '55031',
      },
    ],
    variants: [
      {
        id: 's19046866',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 85,
          discounted: false,
        },
        measurement: '23 5/8x8 5/8x15 "',
        typeName: 'Shelf unit with door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-selsviken-high-gloss-beige__0352948_pe537211_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-selsviken-high-gloss-beige__0843255_pe535775_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with door, white/Selsviken high-gloss/beige, 23 5/8x8 5/8x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-white-selsviken-high-gloss-beige-s19046866/',
      },
      {
        id: 's39424965',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 90,
          discounted: false,
        },
        measurement: '23 5/8x8 5/8x15 "',
        typeName: 'Shelf unit with door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-hedeviken-oak-veneer__1001077_pe824376_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-hedeviken-oak-veneer__0998410_pe823025_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with door, white/Hedeviken oak veneer, 23 5/8x8 5/8x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-white-hedeviken-oak-veneer-s39424965/',
      },
      {
        id: 's19046772',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 85,
          discounted: false,
        },
        measurement: '23 5/8x8 5/8x15 "',
        typeName: 'Shelf unit with door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-black-brown-selsviken-high-gloss-black__0352944_pe537207_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-black-brown-selsviken-high-gloss-black__0842978_pe535774_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with door, black-brown/Selsviken high-gloss/black, 23 5/8x8 5/8x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-black-brown-selsviken-high-gloss-black-s19046772/',
      },
      {
        id: 's39424970',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 78,
          discounted: false,
        },
        measurement: '23 5/8x8 5/8x15 "',
        typeName: 'Shelf unit with door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-black-brown-moertviken-black__1001075_pe824374_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-black-brown-moertviken-black__0990244_pe818815_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with door, black-brown/Mörtviken black, 23 5/8x8 5/8x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-black-brown-moertviken-black-s39424970/',
      },
      {
        id: 's19535766',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 78,
          discounted: false,
        },
        measurement: '23 5/8x8 5/8x15 "',
        typeName: 'Shelf unit with door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-dark-gray-sindvik-dark-gray__1265444_pe927678_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-dark-gray-sindvik-dark-gray__1240317_pe919297_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with door, dark gray/Sindvik dark gray, 23 5/8x8 5/8x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-dark-gray-sindvik-dark-gray-s19535766/',
      },
      {
        id: 's09424962',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 85,
          discounted: false,
        },
        measurement: '23 5/8x8 5/8x15 "',
        typeName: 'Shelf unit with door',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-smeviken-white__1001082_pe824381_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-door-white-smeviken-white__0827672_pe776468_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with door, white/Smeviken white, 23 5/8x8 5/8x15 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-door-white-smeviken-white-s09424962/',
      },
    ],
  },
  {
    id: 's09331524',
    name: 'AURDAL',
    price: {
      currency: 'USD',
      currentPrice: 265,
      discounted: false,
    },
    measurement: '68 1/2-94 1/2x15 3/4x87 "',
    typeName: 'Wardrobe combination',
    image:
      'https://www.ikea.com/us/en/images/products/aurdal-wardrobe-combination-white__0825301_pe776274_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/aurdal-wardrobe-combination-white__0917322_pe785731_s5.jpg',
    imageAlt: 'AURDAL Wardrobe combination, white, 68 1/2-94 1/2x15 3/4x87 "',
    url: 'https://www.ikea.com/us/en/p/aurdal-wardrobe-combination-white-s09331524/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Open wardrobes',
        key: '43634',
      },
    ],
    variants: [],
  },

  {
    id: '50494297',
    name: 'BROR',
    price: {
      currency: 'USD',
      currentPrice: 299,
      discounted: true,
    },
    measurement: '33 1/2x15 3/4x75 1/4 "',
    typeName: 'Cabinet with doors',
    image:
      'https://www.ikea.com/us/en/images/products/bror-cabinet-with-doors-black__1041747_pe841137_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bror-cabinet-with-doors-black__1059164_pe854622_s5.jpg',
    imageAlt: 'BROR Cabinet with doors, black, 33 1/2x15 3/4x75 1/4 "',
    url: 'https://www.ikea.com/us/en/p/bror-cabinet-with-doors-black-50494297/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Display & storage cabinets',
        key: 'st003',
      },
      {
        name: 'Cabinets, hutches & cupboards',
        key: '10409',
      },
    ],
    variants: [],
  },
  {
    id: 's79388003',
    name: 'EKET',
    price: {
      currency: 'USD',
      currentPrice: 90,
      discounted: true,
    },
    measurement: '27 1/2x13 3/4x31 1/2 "',
    typeName: 'Storage combination with legs',
    image:
      'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__0915225_pe784665_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__1052003_pe845874_s5.jpg',
    imageAlt:
      'EKET Storage combination with legs, white/wood, 27 1/2x13 3/4x31 1/2 "',
    url: 'https://www.ikea.com/us/en/p/eket-storage-combination-with-legs-white-wood-s79388003/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Display & storage cabinets',
        key: 'st003',
      },
      {
        name: 'Cabinets, hutches & cupboards',
        key: '10409',
      },
    ],
    variants: [
      {
        id: 's39388000',
        name: 'EKET',
        price: {
          currency: 'USD',
          currentPrice: 90,
          discounted: true,
        },
        measurement: '27 1/2x13 3/4x31 1/2 "',
        typeName: 'Storage combination with legs',
        image:
          'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-dark-gray-wood__0915221_pe784661_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-dark-gray-wood__1052035_pe845888_s5.jpg',
        imageAlt:
          'EKET Storage combination with legs, dark gray/wood, 27 1/2x13 3/4x31 1/2 "',
        url: 'https://www.ikea.com/us/en/p/eket-storage-combination-with-legs-dark-gray-wood-s39388000/',
      },
    ],
  },
  {
    id: 's69228473',
    name: 'TROFAST',
    price: {
      currency: 'USD',
      currentPrice: 79.99,
      discounted: true,
    },
    measurement: '39x17 3/8x22 "',
    typeName: 'Storage combination with boxes',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0535774_pe649629_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0876101_pe649630_s5.jpg',
    imageAlt:
      'TROFAST Storage combination with boxes, white/white, 39x17 3/8x22 "',
    url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-s69228473/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Nursery Furniture',
        key: '45780',
      },
      {
        name: 'Toy storage',
        key: '20474',
      },
      {
        name: 'TROFAST system',
        key: '700556',
      },
      {
        name: 'TROFAST combinations',
        key: '700557',
      },
    ],
    variants: [
      {
        id: 's09328791',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-gray__0807381_pe770402_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-gray__1046445_pe842968_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white/gray, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-gray-s09328791/',
      },
      {
        id: 's19335531',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-green-white__0808021_pe770655_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-green-white__1046484_pe842990_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white green/white, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-green-white-s19335531/',
      },
      {
        id: 's39335511',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white-orange__0808587_pe770789_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white-orange__1046522_pe843009_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white white/orange, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-orange-s39335511/',
      },
      {
        id: 's89335504',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white-pink__0808585_pe770787_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white-pink__1046611_pe843068_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white white/pink, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-pink-s89335504/',
      },
      {
        id: 's99328796',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 79.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-turquoise__0807390_pe770405_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-turquoise__1046711_pe843095_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white/turquoise, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-turquoise-s99328796/',
      },
    ],
  },
  {
    id: 's39429699',
    name: 'BESTÅ',
    price: {
      currency: 'USD',
      currentPrice: 245,
      discounted: false,
    },
    measurement: '23 5/8x16 1/2x76 "',
    typeName: 'Shelf unit with doors',
    image:
      'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-white-lappviken-white__1011679_pe828531_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-white-lappviken-white__0842991_pe535505_s5.jpg',
    imageAlt:
      'BESTÅ Shelf unit with doors, white Lappviken/white, 23 5/8x16 1/2x76 "',
    url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-doors-white-lappviken-white-s39429699/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Display & storage cabinets',
        key: 'st003',
      },
      {
        name: 'Cabinets, hutches & cupboards',
        key: '10409',
      },
    ],
    variants: [
      {
        id: 's99429700',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 210,
          discounted: false,
        },
        measurement: '23 5/8x16 1/2x76 "',
        typeName: 'Shelf unit with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-white-stained-oak-effect-lappviken-white-stained-oak-effect__1011680_pe828530_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-white-stained-oak-effect-lappviken-white-stained-oak-effect__0843337_pe535504_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with doors, white stained oak effect/Lappviken white stained oak effect, 23 5/8x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-doors-white-stained-oak-effect-lappviken-white-stained-oak-effect-s99429700/',
      },
      {
        id: 's59429698',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 196.5,
          discounted: true,
        },
        measurement: '23 5/8x16 1/2x76 "',
        typeName: 'Shelf unit with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-walnut-effect-light-gray-lappviken-walnut-effect-light-gray__1011678_pe828532_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-walnut-effect-light-gray-lappviken-walnut-effect-light-gray__0848469_pe535507_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with doors, walnut effect light gray/Lappviken walnut effect light gray, 23 5/8x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-doors-walnut-effect-light-gray-lappviken-walnut-effect-light-gray-s59429698/',
      },
      {
        id: 's79429697',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 245,
          discounted: false,
        },
        measurement: '23 5/8x16 1/2x76 "',
        typeName: 'Shelf unit with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-black-brown-lappviken-black-brown__1011677_pe828529_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-black-brown-lappviken-black-brown__0845271_pe535510_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with doors, black-brown/Lappviken black-brown, 23 5/8x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-doors-black-brown-lappviken-black-brown-s79429697/',
      },
      {
        id: 's09535795',
        name: 'BESTÅ',
        price: {
          currency: 'USD',
          currentPrice: 245,
          discounted: false,
        },
        measurement: '23 5/8x16 1/2x76 "',
        typeName: 'Shelf unit with doors',
        image:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-dark-gray-lappviken-dark-gray__1265457_pe927684_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/besta-shelf-unit-with-doors-dark-gray-lappviken-dark-gray__1240318_pe919298_s5.jpg',
        imageAlt:
          'BESTÅ Shelf unit with doors, dark gray/Lappviken dark gray, 23 5/8x16 1/2x76 "',
        url: 'https://www.ikea.com/us/en/p/besta-shelf-unit-with-doors-dark-gray-lappviken-dark-gray-s09535795/',
      },
    ],
  },
  {
    id: '10321618',
    name: 'SKÅDIS',
    price: {
      currency: 'USD',
      currentPrice: 27.99,
      discounted: false,
    },
    measurement: '30x22 "',
    typeName: 'Pegboard',
    image:
      'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__0710683_pe727709_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__1165860_pe890993_s5.jpg',
    imageAlt: 'SKÅDIS Pegboard, white, 30x22 "',
    url: 'https://www.ikea.com/us/en/p/skadis-pegboard-white-10321618/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [
      {
        id: '10347171',
        name: 'SKÅDIS',
        price: {
          currency: 'USD',
          currentPrice: 27.99,
          discounted: false,
        },
        measurement: '30x22 "',
        typeName: 'Pegboard',
        image:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-wood__0710684_pe727713_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-wood__1240803_pe919469_s5.jpg',
        imageAlt: 'SKÅDIS Pegboard, wood, 30x22 "',
        url: 'https://www.ikea.com/us/en/p/skadis-pegboard-wood-10347171/',
      },
      {
        id: '70347173',
        name: 'SKÅDIS',
        price: {
          currency: 'USD',
          currentPrice: 16.99,
          discounted: false,
        },
        measurement: '14 ¼x22 "',
        typeName: 'Pegboard',
        image:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-wood__0710686_pe727712_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-wood__1240805_pe919471_s5.jpg',
        imageAlt: 'SKÅDIS Pegboard, wood, 14 ¼x22 "',
        url: 'https://www.ikea.com/us/en/p/skadis-pegboard-wood-70347173/',
      },
      {
        id: '10534375',
        name: 'SKÅDIS',
        price: {
          currency: 'USD',
          currentPrice: 22.99,
          discounted: false,
        },
        measurement: '22x22 "',
        typeName: 'Pegboard',
        image:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-black__1085369_pe860083_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-black__1165865_pe890998_s5.jpg',
        imageAlt: 'SKÅDIS Pegboard, black, 22x22 "',
        url: 'https://www.ikea.com/us/en/p/skadis-pegboard-black-10534375/',
      },
      {
        id: '50534378',
        name: 'SKÅDIS',
        price: {
          currency: 'USD',
          currentPrice: 27.99,
          discounted: false,
        },
        measurement: '30x22 "',
        typeName: 'Pegboard',
        image:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-black__1085375_pe860085_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-black__1102709_pe867098_s5.jpg',
        imageAlt: 'SKÅDIS Pegboard, black, 30x22 "',
        url: 'https://www.ikea.com/us/en/p/skadis-pegboard-black-50534378/',
      },
      {
        id: '00320803',
        name: 'SKÅDIS',
        price: {
          currency: 'USD',
          currentPrice: 22.99,
          discounted: false,
        },
        measurement: '22x22 "',
        typeName: 'Pegboard',
        image:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__0710682_pe727708_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__1095922_pe864103_s5.jpg',
        imageAlt: 'SKÅDIS Pegboard, white, 22x22 "',
        url: 'https://www.ikea.com/us/en/p/skadis-pegboard-white-00320803/',
      },
      {
        id: '50320805',
        name: 'SKÅDIS',
        price: {
          currency: 'USD',
          currentPrice: 16.99,
          discounted: false,
        },
        measurement: '14 ¼x22 "',
        typeName: 'Pegboard',
        image:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__0710685_pe727711_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skadis-pegboard-white__1165858_pe890991_s5.jpg',
        imageAlt: 'SKÅDIS Pegboard, white, 14 ¼x22 "',
        url: 'https://www.ikea.com/us/en/p/skadis-pegboard-white-50320805/',
      },
    ],
  },
  {
    id: '00440363',
    name: 'SVENSÅS',
    price: {
      currency: 'USD',
      currentPrice: 13.99,
      discounted: false,
    },
    measurement: '15 ¾x23 ½ "',
    typeName: 'Memo board',
    image:
      'https://www.ikea.com/us/en/images/products/svensas-memo-board-white__0748935_pe745332_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/svensas-memo-board-white__0948762_pe799265_s5.jpg',
    imageAlt: 'SVENSÅS Memo board, white, 15 ¾x23 ½ "',
    url: 'https://www.ikea.com/us/en/p/svensas-memo-board-white-00440363/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '60532468',
    name: 'FLÖNSA',
    price: {
      currency: 'USD',
      currentPrice: 8.99,
      discounted: false,
    },
    measurement: '20 ½x13 "',
    typeName: 'Memo board with pins',
    image:
      'https://www.ikea.com/us/en/images/products/floensa-memo-board-with-pins-cork__1158093_pe887988_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/floensa-memo-board-with-pins-cork__1164162_pe890452_s5.jpg',
    imageAlt: 'FLÖNSA Memo board with pins, cork, 20 ½x13 "',
    url: 'https://www.ikea.com/us/en/p/floensa-memo-board-with-pins-cork-60532468/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '40518246',
    name: 'SNICKRA',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '15x15 "',
    typeName: '8-piece storage board set',
    image:
      'https://www.ikea.com/us/en/images/products/snickra-8-piece-storage-board-set-gray-green__1045574_pe842659_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/snickra-8-piece-storage-board-set-gray-green__1067151_pe852652_s5.jpg',
    imageAlt: 'SNICKRA 8-piece storage board set, gray-green, 15x15 "',
    url: 'https://www.ikea.com/us/en/p/snickra-8-piece-storage-board-set-gray-green-40518246/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '20440362',
    name: 'SVENSÅS',
    price: {
      currency: 'USD',
      currentPrice: 13.99,
      discounted: false,
    },
    measurement: '15 ¾x23 ½ "',
    typeName: 'Memo board',
    image:
      'https://www.ikea.com/us/en/images/products/svensas-memo-board-black__0748893_pe745315_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/svensas-memo-board-black__0748890_pe745314_s5.jpg',
    imageAlt: 'SVENSÅS Memo board, black, 15 ¾x23 ½ "',
    url: 'https://www.ikea.com/us/en/p/svensas-memo-board-black-20440362/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '00541574',
    name: 'SKÅDIS',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '22x14 ½ "',
    typeName: 'Free-standing peg board',
    image:
      'https://www.ikea.com/us/en/images/products/skadis-free-standing-peg-board-white__1128857_pe876711_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skadis-free-standing-peg-board-white__1128874_pe876714_s5.jpg',
    imageAlt: 'SKÅDIS Free-standing peg board, white, 22x14 ½ "',
    url: 'https://www.ikea.com/us/en/p/skadis-free-standing-peg-board-white-00541574/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '80423388',
    name: 'SÖSDALA',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '23 ½x29 ½ "',
    typeName: 'Memo board with clips',
    image:
      'https://www.ikea.com/us/en/images/products/soesdala-memo-board-with-clips-black__0748828_pe745209_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/soesdala-memo-board-with-clips-black__0748827_pe745210_s5.jpg',
    imageAlt: 'SÖSDALA Memo board with clips, black, 23 ½x29 ½ "',
    url: 'https://www.ikea.com/us/en/p/soesdala-memo-board-with-clips-black-80423388/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '70474769',
    name: 'ELLOVEN',
    price: {
      currency: 'USD',
      currentPrice: 229.99,
      discounted: false,
    },
    measurement: '27 1/2x70 7/8 "',
    typeName: 'Whiteboard/noticeboard with casters',
    image:
      'https://www.ikea.com/us/en/images/products/elloven-whiteboard-noticeboard-with-casters-white__1023835_pe833303_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/elloven-whiteboard-noticeboard-with-casters-white__1191322_pe900616_s5.jpg',
    imageAlt:
      'ELLOVEN Whiteboard/noticeboard with casters, white, 27 1/2x70 7/8 "',
    url: 'https://www.ikea.com/us/en/p/elloven-whiteboard-noticeboard-with-casters-white-70474769/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '20498353',
    name: 'LEVLA',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: true,
    },
    measurement: '10 ¾x3 ½x8 ¼ "',
    typeName: 'Wall organizer',
    image:
      'https://www.ikea.com/us/en/images/products/levla-wall-organizer-dark-brown__1012716_pe828987_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/levla-wall-organizer-dark-brown__1016782_pe830631_s5.jpg',
    imageAlt: 'LEVLA Wall organizer, dark brown, 10 ¾x3 ½x8 ¼ "',
    url: 'https://www.ikea.com/us/en/p/levla-wall-organizer-dark-brown-20498353/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '70562068',
    name: 'BÖNSYRSA',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '',
    typeName: '6-piece magnet set',
    image:
      'https://www.ikea.com/us/en/images/products/boensyrsa-6-piece-magnet-set__1115399_pe872070_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/boensyrsa-6-piece-magnet-set__1122159_pe874525_s5.jpg',
    imageAlt: 'BÖNSYRSA 6-piece magnet set',
    url: 'https://www.ikea.com/us/en/p/boensyrsa-6-piece-magnet-set-70562068/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Bulletin boards, peg boards, pin boards & more',
        key: '10574',
      },
    ],
    variants: [],
  },
  {
    id: '30200253',
    name: 'SIGNUM',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '27 ½ "',
    typeName: 'Cable management, horizontal',
    image:
      'https://www.ikea.com/us/en/images/products/signum-cable-management-horizontal-silver-color__0712548_pe728904_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/signum-cable-management-horizontal-silver-color__0256614_pe400752_s5.jpg',
    imageAlt: 'SIGNUM Cable management, horizontal, silver color, 27 ½ "',
    url: 'https://www.ikea.com/us/en/p/signum-cable-management-horizontal-silver-color-30200253/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '00573188',
    name: 'FÖRSÄSONG',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '15 "',
    typeName: 'Cable management tray',
    image:
      'https://www.ikea.com/us/en/images/products/foersaesong-cable-management-tray-white__1266295_pe928102_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/foersaesong-cable-management-tray-white__1274706_pe930477_s5.jpg',
    imageAlt: 'FÖRSÄSONG Cable management tray, white, 15 "',
    url: 'https://www.ikea.com/us/en/p/foersaesong-cable-management-tray-white-00573188/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '90534625',
    name: 'SÄTTING',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Cable management box with lid',
    image:
      'https://www.ikea.com/us/en/images/products/saetting-cable-management-box-with-lid__1145556_pe882706_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/saetting-cable-management-box-with-lid__1148491_pe883761_s5.jpg',
    imageAlt: 'SÄTTING Cable management box with lid',
    url: 'https://www.ikea.com/us/en/p/saetting-cable-management-box-with-lid-90534625/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '30147425',
    name: 'MONTERA',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '43 "',
    typeName: 'Cable management',
    image:
      'https://www.ikea.com/us/en/images/products/montera-cable-management-white__0088067_pe218108_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/montera-cable-management-white__0882706_pe620491_s5.jpg',
    imageAlt: 'MONTERA Cable management, white, 43 "',
    url: 'https://www.ikea.com/us/en/p/montera-cable-management-white-30147425/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '60563737',
    name: 'TRIXIG',
    price: {
      currency: 'USD',
      currentPrice: 6.49,
      discounted: false,
    },
    measurement: '',
    typeName: '150-piece cable management set',
    image:
      'https://www.ikea.com/us/en/images/products/trixig-150-piece-cable-management-set__1222990_pe914758_s5.jpg',
    imageAlt: 'TRIXIG 150-piece cable management set',
    url: 'https://www.ikea.com/us/en/p/trixig-150-piece-cable-management-set-60563737/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '30573021',
    name: 'KALKSTUFF',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Cable holder, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/kalkstuff-cable-holder-set-of-3-white__1180202_pe896338_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalkstuff-cable-holder-set-of-3-white__1180459_pe896341_s5.jpg',
    imageAlt: 'KALKSTUFF Cable holder, set of 3, white',
    url: 'https://www.ikea.com/us/en/p/kalkstuff-cable-holder-set-of-3-white-30573021/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [
      {
        id: '50573020',
        name: 'KALKSTUFF',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Cable holder, set of 3',
        image:
          'https://www.ikea.com/us/en/images/products/kalkstuff-cable-holder-set-of-3-dark-gray__1180190_pe896332_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kalkstuff-cable-holder-set-of-3-dark-gray__1180188_pe896334_s5.jpg',
        imageAlt: 'KALKSTUFF Cable holder, set of 3, dark gray',
        url: 'https://www.ikea.com/us/en/p/kalkstuff-cable-holder-set-of-3-dark-gray-50573020/',
      },
    ],
  },
  {
    id: '90555745',
    name: 'HAVSKÅL',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '',
    typeName: '2-piece, USB anchor',
    image:
      'https://www.ikea.com/us/en/images/products/havskal-2-piece-usb-anchor-black-yellow__1180225_pe898324_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/havskal-2-piece-usb-anchor-black-yellow__1186814_pe898948_s5.jpg',
    imageAlt: 'HAVSKÅL 2-piece, USB anchor, black/yellow',
    url: 'https://www.ikea.com/us/en/p/havskal-2-piece-usb-anchor-black-yellow-90555745/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '10507838',
    name: 'LÅNESPELARE',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: true,
    },
    measurement: '',
    typeName: 'Mouse bungee',
    image:
      'https://www.ikea.com/us/en/images/products/lanespelare-mouse-bungee-black__0978841_pe814322_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lanespelare-mouse-bungee-black__0971346_pe811273_s5.jpg',
    imageAlt: 'LÅNESPELARE Mouse bungee, black',
    url: 'https://www.ikea.com/us/en/p/lanespelare-mouse-bungee-black-10507838/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Desk accessories',
        key: '10573',
      },
    ],
    variants: [],
  },
  {
    id: '30528632',
    name: 'MITTZON',
    price: {
      currency: 'USD',
      currentPrice: 40,
      discounted: false,
    },
    measurement: '31 1/2x5 1/8 "',
    typeName: 'Cable box for frm w cstrs',
    image:
      'https://www.ikea.com/us/en/images/products/mittzon-cable-box-for-frm-w-cstrs-white__1245518_pe921649_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mittzon-cable-box-for-frm-w-cstrs-white__1246570_pe922181_s5.jpg',
    imageAlt: 'MITTZON Cable box for frm w cstrs, white, 31 1/2x5 1/8 "',
    url: 'https://www.ikea.com/us/en/p/mittzon-cable-box-for-frm-w-cstrs-white-30528632/',
    categoryPath: [
      {
        name: 'Home electronics',
        key: 'he001',
      },
      {
        name: 'Cable management & cord organizers',
        key: '16195',
      },
    ],
    variants: [],
  },
  {
    id: '50474770',
    name: 'ELLOVEN',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Monitor stand with drawer',
    image:
      'https://www.ikea.com/us/en/images/products/elloven-monitor-stand-with-drawer-white__0955984_pe804426_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/elloven-monitor-stand-with-drawer-white__0964055_pe808855_s5.jpg',
    imageAlt: 'ELLOVEN Monitor stand with drawer, white',
    url: 'https://www.ikea.com/us/en/p/elloven-monitor-stand-with-drawer-white-50474770/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Desk accessories',
        key: '10573',
      },
    ],
    variants: [],
  },
  {
    id: '60526373',
    name: 'DRÖMSLOTT',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '31x39 "',
    typeName: 'Baby blanket',
    image:
      'https://www.ikea.com/us/en/images/products/droemslott-baby-blanket-puppy-pattern-dot-pattern-multicolor__1056643_pe848441_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/droemslott-baby-blanket-puppy-pattern-dot-pattern-multicolor__1056642_pe848442_s5.jpg',
    imageAlt:
      'DRÖMSLOTT Baby blanket, puppy pattern/dot pattern multicolor, 31x39 "',
    url: 'https://www.ikea.com/us/en/p/droemslott-baby-blanket-puppy-pattern-dot-pattern-multicolor-60526373/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Baby blankets & quilts',
        key: '18695',
      },
    ],
    variants: [],
  },
  {
    id: '60521196',
    name: 'DRÖMSLOTT',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '28x52 "',
    typeName: 'Crib fitted sheet',
    image:
      'https://www.ikea.com/us/en/images/products/droemslott-crib-fitted-sheet-dot-pattern-green-multicolor__1057289_pe848814_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/droemslott-crib-fitted-sheet-dot-pattern-green-multicolor__1057288_pe848815_s5.jpg',
    imageAlt:
      'DRÖMSLOTT Crib fitted sheet, dot pattern green/multicolor, 28x52 "',
    url: 'https://www.ikea.com/us/en/p/droemslott-crib-fitted-sheet-dot-pattern-green-multicolor-60521196/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Crib bedding & fitted sheets',
        key: '18692',
      },
    ],
    variants: [],
  },
  {
    id: '90521190',
    name: 'DRÖMSLOTT',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '43x49/14x22 "',
    typeName: 'Duvet cover 1 pillowcase f crib',
    image:
      'https://www.ikea.com/us/en/images/products/droemslott-duvet-cover-1-pillowcase-f-crib-puppy-pattern-pink__1057658_pe848870_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/droemslott-duvet-cover-1-pillowcase-f-crib-puppy-pattern-pink__1077497_pe856936_s5.jpg',
    imageAlt:
      'DRÖMSLOTT Duvet cover 1 pillowcase f crib, puppy pattern/pink, 43x49/14x22 "',
    url: 'https://www.ikea.com/us/en/p/droemslott-duvet-cover-1-pillowcase-f-crib-puppy-pattern-pink-90521190/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Crib bedding & fitted sheets',
        key: '18692',
      },
    ],
    variants: [],
  },
  {
    id: '80515137',
    name: 'TROLLDOM',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: true,
    },
    measurement: '27 1/2x52 "',
    typeName: '3-piece bedlinen set for crib',
    image:
      'https://www.ikea.com/us/en/images/products/trolldom-3-piece-bedlinen-set-for-crib-forest-animal-pattern-multicolor__1008247_pe826854_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trolldom-3-piece-bedlinen-set-for-crib-forest-animal-pattern-multicolor__1008249_pe826860_s5.jpg',
    imageAlt:
      'TROLLDOM 3-piece bedlinen set for crib, forest animal pattern/multicolor, 27 1/2x52 "',
    url: 'https://www.ikea.com/us/en/p/trolldom-3-piece-bedlinen-set-for-crib-forest-animal-pattern-multicolor-80515137/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Crib bedding & fitted sheets',
        key: '18692',
      },
    ],
    variants: [],
  },
  {
    id: '30514395',
    name: 'TROLLDOM',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '43x49/14x22 "',
    typeName: 'Duvet cover 1 pillowcase f crib',
    image:
      'https://www.ikea.com/us/en/images/products/trolldom-duvet-cover-1-pillowcase-f-crib-forest-animal-pattern-green__1007921_pe826591_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trolldom-duvet-cover-1-pillowcase-f-crib-forest-animal-pattern-green__1007923_pe826593_s5.jpg',
    imageAlt:
      'TROLLDOM Duvet cover 1 pillowcase f crib, forest animal pattern/green, 43x49/14x22 "',
    url: 'https://www.ikea.com/us/en/p/trolldom-duvet-cover-1-pillowcase-f-crib-forest-animal-pattern-green-30514395/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Crib bedding & fitted sheets',
        key: '18692',
      },
    ],
    variants: [],
  },
  {
    id: '90515127',
    name: 'TROLLDOM',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '38x38 "',
    typeName: 'Quilted blanket',
    image:
      'https://www.ikea.com/us/en/images/products/trolldom-quilted-blanket-forest-animal-pattern-green__1007312_pe826016_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trolldom-quilted-blanket-forest-animal-pattern-green__1007313_pe826018_s5.jpg',
    imageAlt: 'TROLLDOM Quilted blanket, forest animal pattern/green, 38x38 "',
    url: 'https://www.ikea.com/us/en/p/trolldom-quilted-blanket-forest-animal-pattern-green-90515127/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Baby blankets & quilts',
        key: '18695',
      },
    ],
    variants: [],
  },
  {
    id: '80572383',
    name: 'GRÖNFINK',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '28x52 "',
    typeName: 'Crib fitted sheet',
    image:
      'https://www.ikea.com/us/en/images/products/groenfink-crib-fitted-sheet-white-tree-pattern__1250488_pe923772_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/groenfink-crib-fitted-sheet-white-tree-pattern__1258484_pe926352_s5.jpg',
    imageAlt: 'GRÖNFINK Crib fitted sheet, white/tree pattern, 28x52 "',
    url: 'https://www.ikea.com/us/en/p/groenfink-crib-fitted-sheet-white-tree-pattern-80572383/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Crib bedding & fitted sheets',
        key: '18692',
      },
    ],
    variants: [],
  },
  {
    id: '80421252',
    name: 'SOLGUL',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '27 1/2x35 3/8 "',
    typeName: 'Baby blanket',
    image:
      'https://www.ikea.com/us/en/images/products/solgul-baby-blanket-dark-yellow__0603279_pe680716_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/solgul-baby-blanket-dark-yellow__0875726_pe680717_s5.jpg',
    imageAlt: 'SOLGUL Baby blanket, dark yellow, 27 1/2x35 3/8 "',
    url: 'https://www.ikea.com/us/en/p/solgul-baby-blanket-dark-yellow-80421252/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Baby blankets & quilts',
        key: '18695',
      },
    ],
    variants: [],
  },
  {
    id: '90526376',
    name: 'DRÖMSLOTT',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '24x49 "',
    typeName: 'Baby towel with hood',
    image:
      'https://www.ikea.com/us/en/images/products/droemslott-baby-towel-with-hood-puppy-pattern-white__1056623_pe848425_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/droemslott-baby-towel-with-hood-puppy-pattern-white__1056622_pe848426_s5.jpg',
    imageAlt: 'DRÖMSLOTT Baby towel with hood, puppy pattern/white, 24x49 "',
    url: 'https://www.ikea.com/us/en/p/droemslott-baby-towel-with-hood-puppy-pattern-white-90526376/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom textiles',
        key: 'tl003',
      },
      {
        name: 'Towels',
        key: '20520',
      },
      {
        name: 'Baby towels & washcloths',
        key: '18700',
      },
    ],
    variants: [],
  },
  {
    id: '30521193',
    name: 'DRÖMSLOTT',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '43x49/14x22 "',
    typeName: 'Duvet cover 1 pillowcase f crib',
    image:
      'https://www.ikea.com/us/en/images/products/droemslott-duvet-cover-1-pillowcase-f-crib-puppy-pattern-multicolor__1057673_pe848886_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/droemslott-duvet-cover-1-pillowcase-f-crib-puppy-pattern-multicolor__1077496_pe856937_s5.jpg',
    imageAlt:
      'DRÖMSLOTT Duvet cover 1 pillowcase f crib, puppy pattern/multicolor, 43x49/14x22 "',
    url: 'https://www.ikea.com/us/en/p/droemslott-duvet-cover-1-pillowcase-f-crib-puppy-pattern-multicolor-30521193/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Baby',
        key: 'bc002',
      },
      {
        name: 'Baby textiles',
        key: '18690',
      },
      {
        name: 'Crib bedding & fitted sheets',
        key: '18692',
      },
    ],
    variants: [],
  },
  {
    id: '50298418',
    name: 'FLISAT',
    price: {
      currency: 'USD',
      currentPrice: 89.99,
      discounted: false,
    },
    measurement: '32 5/8x22 7/8 "',
    typeName: "Children's table",
    image:
      'https://www.ikea.com/us/en/images/products/flisat-childrens-table__0735831_pe740206_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/flisat-childrens-table__0421609_pe577920_s5.jpg',
    imageAlt: 'FLISAT Children\'s table, 32 5/8x22 7/8 "',
    url: 'https://www.ikea.com/us/en/p/flisat-childrens-table-50298418/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [],
  },
  {
    id: '50178411',
    name: 'LÄTT',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: false,
    },
    measurement: '',
    typeName: "Children's table and 2 chairs",
    image:
      'https://www.ikea.com/us/en/images/products/laett-childrens-table-and-2-chairs-white-pine__0735856_pe740220_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/laett-childrens-table-and-2-chairs-white-pine__0876334_pe613575_s5.jpg',
    imageAlt: "LÄTT Children's table and 2 chairs, white/pine",
    url: 'https://www.ikea.com/us/en/p/laett-childrens-table-and-2-chairs-white-pine-50178411/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [],
  },
  {
    id: '50365177',
    name: 'MAMMUT',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '30 3/8x21 5/8 "',
    typeName: "Children's table",
    image:
      'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-white__0735842_pe740215_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-white__1371126_pe958999_s5.jpg',
    imageAlt: 'MAMMUT Children\'s table, indoor/outdoor white, 30 3/8x21 5/8 "',
    url: 'https://www.ikea.com/us/en/p/mammut-childrens-table-indoor-outdoor-white-50365177/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [
      {
        id: '90365180',
        name: 'MAMMUT',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: true,
        },
        measurement: '33 1/2 "',
        typeName: "Children's table",
        image:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-blue__0735844_pe740211_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-blue__0876773_pe671499_s5.jpg',
        imageAlt: 'MAMMUT Children\'s table, indoor/outdoor blue, 33 1/2 "',
        url: 'https://www.ikea.com/us/en/p/mammut-childrens-table-indoor-outdoor-blue-90365180/',
      },
      {
        id: '60365167',
        name: 'MAMMUT',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: true,
        },
        measurement: '30 3/8x21 5/8 "',
        typeName: "Children's table",
        image:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-red__0735839_pe740209_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-red__0876664_pe671497_s5.jpg',
        imageAlt:
          'MAMMUT Children\'s table, indoor/outdoor red, 30 3/8x21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/mammut-childrens-table-indoor-outdoor-red-60365167/',
      },
    ],
  },
  {
    id: '30472499',
    name: 'DUNDRA',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Activity table with storage',
    image:
      'https://www.ikea.com/us/en/images/products/dundra-activity-table-with-storage-white-gray__0938734_pe794259_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/dundra-activity-table-with-storage-white-gray__0844233_pe783370_s5.jpg',
    imageAlt: 'DUNDRA Activity table with storage, white/gray',
    url: 'https://www.ikea.com/us/en/p/dundra-activity-table-with-storage-white-gray-30472499/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [],
  },
  {
    id: '10407136',
    name: 'IKEA PS LÖMSK',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Swivel chair',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-ps-loemsk-swivel-chair-white-red__0726690_pe735385_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-ps-loemsk-swivel-chair-white-red__0876409_pe685398_s5.jpg',
    imageAlt: 'IKEA PS LÖMSK Swivel chair, white/red',
    url: 'https://www.ikea.com/us/en/p/ikea-ps-loemsk-swivel-chair-white-red-10407136/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: "Children's chairs",
        key: 'bc004',
      },
      {
        name: 'Kids chairs',
        key: '18769',
      },
    ],
    variants: [],
  },
  {
    id: '10201673',
    name: 'SUNDVIK',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '29 7/8x19 5/8 "',
    typeName: "Children's table",
    image:
      'https://www.ikea.com/us/en/images/products/sundvik-childrens-table-white__0735849_pe740214_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sundvik-childrens-table-white__0876341_pe642052_s5.jpg',
    imageAlt: 'SUNDVIK Children\'s table, white, 29 7/8x19 5/8 "',
    url: 'https://www.ikea.com/us/en/p/sundvik-childrens-table-white-10201673/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [
      {
        id: '60494032',
        name: 'SUNDVIK',
        price: {
          currency: 'USD',
          currentPrice: 59.99,
          discounted: false,
        },
        measurement: '29 7/8x19 5/8 "',
        typeName: "Children's table",
        image:
          'https://www.ikea.com/us/en/images/products/sundvik-childrens-table-gray__0959669_pe806125_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sundvik-childrens-table-gray__0959670_pe806126_s5.jpg',
        imageAlt: 'SUNDVIK Children\'s table, gray, 29 7/8x19 5/8 "',
        url: 'https://www.ikea.com/us/en/p/sundvik-childrens-table-gray-60494032/',
      },
    ],
  },
  {
    id: 's09417589',
    name: 'POÄNG',
    price: {
      currency: 'USD',
      currentPrice: 44.99,
      discounted: true,
    },
    measurement: '',
    typeName: "Kid's armchair",
    image:
      'https://www.ikea.com/us/en/images/products/poaeng-kids-armchair-birch-veneer-medskog-dinosaur-pattern__0971808_pe811452_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/poaeng-kids-armchair-birch-veneer-medskog-dinosaur-pattern__0971809_pe811451_s5.jpg',
    imageAlt: "POÄNG Kid's armchair, birch veneer/Medskog dinosaur pattern",
    url: 'https://www.ikea.com/us/en/p/poaeng-kids-armchair-birch-veneer-medskog-dinosaur-pattern-s09417589/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: "Children's chairs",
        key: 'bc004',
      },
      {
        name: 'Kids chairs',
        key: '18769',
      },
    ],
    variants: [],
  },
  {
    id: '40365371',
    name: 'MAMMUT',
    price: {
      currency: 'USD',
      currentPrice: 17.99,
      discounted: false,
    },
    measurement: '',
    typeName: "Children's chair",
    image:
      'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-white__0727925_pe735934_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-white__1371126_pe958999_s5.jpg',
    imageAlt: "MAMMUT Children's chair, indoor/outdoor/white",
    url: 'https://www.ikea.com/us/en/p/mammut-childrens-chair-indoor-outdoor-white-40365371/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: "Children's chairs",
        key: 'bc004',
      },
      {
        name: 'Kids chairs',
        key: '18769',
      },
    ],
    variants: [
      {
        id: '60365346',
        name: 'MAMMUT',
        price: {
          currency: 'USD',
          currentPrice: 17.99,
          discounted: false,
        },
        measurement: '',
        typeName: "Children's chair",
        image:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-blue__0727922_pe735928_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-blue__0876233_pe687089_s5.jpg',
        imageAlt: "MAMMUT Children's chair, indoor/outdoor/blue",
        url: 'https://www.ikea.com/us/en/p/mammut-childrens-chair-indoor-outdoor-blue-60365346/',
      },
      {
        id: '80382321',
        name: 'MAMMUT',
        price: {
          currency: 'USD',
          currentPrice: 17.99,
          discounted: false,
        },
        measurement: '',
        typeName: "Children's chair",
        image:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-pink__0727923_pe735930_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-pink__0876701_pe687088_s5.jpg',
        imageAlt: "MAMMUT Children's chair, indoor/outdoor/pink",
        url: 'https://www.ikea.com/us/en/p/mammut-childrens-chair-indoor-outdoor-pink-80382321/',
      },
      {
        id: '40365366',
        name: 'MAMMUT',
        price: {
          currency: 'USD',
          currentPrice: 17.99,
          discounted: false,
        },
        measurement: '',
        typeName: "Children's chair",
        image:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0727924_pe735940_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0876255_pe687087_s5.jpg',
        imageAlt: "MAMMUT Children's chair, indoor/outdoor/red",
        url: 'https://www.ikea.com/us/en/p/mammut-childrens-chair-indoor-outdoor-red-40365366/',
      },
    ],
  },
  {
    id: '70228325',
    name: 'RESÖ',
    price: {
      currency: 'USD',
      currentPrice: 69.99,
      discounted: false,
    },
    measurement: '',
    typeName: "Children's picnic table",
    image:
      'https://www.ikea.com/us/en/images/products/resoe-childrens-picnic-table-light-brown-stained__0736459_pe740547_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/resoe-childrens-picnic-table-light-brown-stained__1301482_pe937446_s5.jpg',
    imageAlt: "RESÖ Children's picnic table, light brown stained",
    url: 'https://www.ikea.com/us/en/p/resoe-childrens-picnic-table-light-brown-stained-70228325/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [],
  },
  {
    id: '20273594',
    name: 'FLISAT',
    price: {
      currency: 'USD',
      currentPrice: 119.99,
      discounted: false,
    },
    measurement: '',
    typeName: "Children's desk",
    image:
      'https://www.ikea.com/us/en/images/products/flisat-childrens-desk-adjustable__0735857_pe740222_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/flisat-childrens-desk-adjustable__0876447_pe636017_s5.jpg',
    imageAlt: "FLISAT Children's desk, adjustable",
    url: 'https://www.ikea.com/us/en/p/flisat-childrens-desk-adjustable-20273594/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Kids tables',
        key: '18768',
      },
    ],
    variants: [],
  },
  {
    id: '50248541',
    name: 'SNIGLAR',
    price: {
      currency: 'USD',
      currentPrice: 119,
      discounted: false,
    },
    measurement: '27 1/2x52 "',
    typeName: 'Crib',
    image:
      'https://www.ikea.com/us/en/images/products/sniglar-crib-beech__0637930_pe698615_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sniglar-crib-beech__1001143_pe824533_s5.jpg',
    imageAlt: 'SNIGLAR Crib, beech, 27 1/2x52 "',
    url: 'https://www.ikea.com/us/en/p/sniglar-crib-beech-50248541/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Cribs',
        key: '45781',
      },
    ],
    variants: [],
  },
  {
    id: '30248575',
    name: 'SUNDVIK',
    price: {
      currency: 'USD',
      currentPrice: 279,
      discounted: false,
    },
    measurement: '27 1/2x52 "',
    typeName: 'Crib',
    image:
      'https://www.ikea.com/us/en/images/products/sundvik-crib-white__0637935_pe698620_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sundvik-crib-white__1044543_pe842216_s5.jpg',
    imageAlt: 'SUNDVIK Crib, white, 27 1/2x52 "',
    url: 'https://www.ikea.com/us/en/p/sundvik-crib-white-30248575/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Cribs',
        key: '45781',
      },
    ],
    variants: [
      {
        id: '50494080',
        name: 'SUNDVIK',
        price: {
          currency: 'USD',
          currentPrice: 279,
          discounted: false,
        },
        measurement: '27 1/2x52 "',
        typeName: 'Crib',
        image:
          'https://www.ikea.com/us/en/images/products/sundvik-crib-gray__0958281_pe806107_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sundvik-crib-gray__1044535_pe842215_s5.jpg',
        imageAlt: 'SUNDVIK Crib, gray, 27 1/2x52 "',
        url: 'https://www.ikea.com/us/en/p/sundvik-crib-gray-50494080/',
      },
    ],
  },
  {
    id: 's79506577',
    name: 'SNIGLAR',
    price: {
      currency: 'USD',
      currentPrice: 158,
      discounted: false,
    },
    measurement: '27 1/2x52 "',
    typeName: '2-piece baby furniture set',
    image:
      'https://www.ikea.com/us/en/images/products/sniglar-2-piece-baby-furniture-set-beech__1191089_pe900453_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sniglar-2-piece-baby-furniture-set-beech__1191089_pe900453_s5.jpg',
    imageAlt: 'SNIGLAR 2-piece baby furniture set, beech, 27 1/2x52 "',
    url: 'https://www.ikea.com/us/en/p/sniglar-2-piece-baby-furniture-set-beech-s79506577/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Cribs',
        key: '45781',
      },
    ],
    variants: [],
  },
  {
    id: 's09480854',
    name: 'TROFAST',
    price: {
      currency: 'USD',
      currentPrice: 159.99,
      discounted: false,
    },
    measurement: '36 5/8x17 3/8x20 1/2 "',
    typeName: 'Storage combination with boxes',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-green-gray__1087975_pe860969_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-green-gray__1102498_pe867003_s5.jpg',
    imageAlt:
      'TROFAST Storage combination with boxes, light white stained pine/light green-gray, 36 5/8x17 3/8x20 1/2 "',
    url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-light-green-gray-s09480854/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Nursery Furniture',
        key: '45780',
      },
      {
        name: 'Toy storage',
        key: '20474',
      },
      {
        name: 'TROFAST system',
        key: '700556',
      },
      {
        name: 'TROFAST combinations',
        key: '700557',
      },
    ],
    variants: [
      {
        id: 's19533258',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 159.99,
          discounted: false,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-red__1087962_pe860975_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-red__1102495_pe867006_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine/light red, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-light-red-s19533258/',
      },
      {
        id: 's19533277',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 159.99,
          discounted: false,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-dark-gray__1087970_pe860983_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-dark-gray__1102497_pe867004_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine gray-blue/dark gray, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-dark-gray-s19533277/',
      },
      {
        id: 's79533241',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 159.99,
          discounted: false,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-green-gray__1087975_pe860969_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-green-gray__1102498_pe867003_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine/light green-gray, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-light-green-gray-s79533241/',
      },
      {
        id: 's19480820',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 159.99,
          discounted: false,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-light-green-gray__1087956_pe860988_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-light-green-gray__1102493_pe867001_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine gray-blue/light green-gray, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-light-green-gray-s19480820/',
      },
      {
        id: 's39480843',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 159.99,
          discounted: false,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue__1087961_pe860974_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue__1102494_pe867002_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine/gray-blue, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-gray-blue-s39480843/',
      },
      {
        id: 's39480857',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 159.99,
          discounted: false,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-red__1087962_pe860975_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-light-red__1102495_pe867006_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine/light red, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-light-red-s39480857/',
      },
    ],
  },
  {
    id: 's89228434',
    name: 'ANTILOP',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'High chair with tray',
    image:
      'https://www.ikea.com/us/en/images/products/antilop-high-chair-with-tray-white-silver-color__0727481_pe735706_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/antilop-high-chair-with-tray-white-silver-color__1205614_pe907169_s5.jpg',
    imageAlt: 'ANTILOP High chair with tray, white/silver color',
    url: 'https://www.ikea.com/us/en/p/antilop-high-chair-with-tray-white-silver-color-s89228434/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Chairs',
        key: 'fu002',
      },
      {
        name: 'High chairs',
        key: '45782',
      },
    ],
    variants: [],
  },
  {
    id: '00466701',
    name: 'ÄLSKVÄRD',
    price: {
      currency: 'USD',
      currentPrice: 299,
      discounted: false,
    },
    measurement: '27 1/2x52 "',
    typeName: 'Crib',
    image:
      'https://www.ikea.com/us/en/images/products/aelskvaerd-crib-birch-white__1054874_pe847900_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/aelskvaerd-crib-birch-white__1190955_pe900358_s5.jpg',
    imageAlt: 'ÄLSKVÄRD Crib, birch/white, 27 1/2x52 "',
    url: 'https://www.ikea.com/us/en/p/aelskvaerd-crib-birch-white-00466701/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Cribs',
        key: '45781',
      },
    ],
    variants: [],
  },
  {
    id: '00472702',
    name: 'BERGIG',
    price: {
      currency: 'USD',
      currentPrice: 129.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Book display with storage',
    image:
      'https://www.ikea.com/us/en/images/products/bergig-book-display-with-storage-white__0844238_pe783371_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bergig-book-display-with-storage-white__0844239_pe783372_s5.jpg',
    imageAlt: 'BERGIG Book display with storage, white',
    url: 'https://www.ikea.com/us/en/p/bergig-book-display-with-storage-white-00472702/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Shelving furniture',
        key: 'st002',
      },
      {
        name: 'Bookcases',
        key: '10382',
      },
    ],
    variants: [],
  },
  {
    id: '50576575',
    name: 'SUNDVIK',
    price: {
      currency: 'USD',
      currentPrice: 259,
      discounted: false,
    },
    measurement: '',
    typeName: 'Changing table/chest',
    image:
      'https://www.ikea.com/us/en/images/products/sundvik-changing-table-chest-white__1298107_pe936078_s5.jpg',
    imageAlt: 'SUNDVIK Changing table/chest, white',
    url: 'https://www.ikea.com/us/en/p/sundvik-changing-table-chest-white-50576575/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Changing tables',
        key: '45783',
      },
    ],
    variants: [
      {
        id: '80576574',
        name: 'SUNDVIK',
        price: {
          currency: 'USD',
          currentPrice: 259,
          discounted: false,
        },
        measurement: '',
        typeName: 'Changing table/chest',
        image:
          'https://www.ikea.com/us/en/images/products/sundvik-changing-table-chest-gray__1298103_pe936074_s5.jpg',
        imageAlt: 'SUNDVIK Changing table/chest, gray',
        url: 'https://www.ikea.com/us/en/p/sundvik-changing-table-chest-gray-80576574/',
      },
    ],
  },
  {
    id: '30467087',
    name: 'GONATT',
    price: {
      currency: 'USD',
      currentPrice: 379,
      discounted: false,
    },
    measurement: '27 1/2x52 "',
    typeName: 'Crib with drawer',
    image:
      'https://www.ikea.com/us/en/images/products/gonatt-crib-with-drawer-white__0842037_pe778850_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gonatt-crib-with-drawer-white__0842040_pe778853_s5.jpg',
    imageAlt: 'GONATT Crib with drawer, white, 27 1/2x52 "',
    url: 'https://www.ikea.com/us/en/p/gonatt-crib-with-drawer-white-30467087/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Cribs',
        key: '45781',
      },
    ],
    variants: [],
  },
  {
    id: '20269016',
    name: 'VÄDRA',
    price: {
      currency: 'USD',
      currentPrice: 25,
      discounted: false,
    },
    measurement: '18 7/8x29 1/8 "',
    typeName: 'Changing pad',
    image:
      'https://www.ikea.com/us/en/images/products/vaedra-changing-pad__0606116_pe682034_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vaedra-changing-pad__0873644_pe632003_s5.jpg',
    imageAlt: 'VÄDRA Changing pad, 18 7/8x29 1/8 "',
    url: 'https://www.ikea.com/us/en/p/vaedra-changing-pad-20269016/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Tables & desks',
        key: 'fu004',
      },
      {
        name: 'Changing tables',
        key: '45783',
      },
    ],
    variants: [],
  },

  {
    id: 's69478711',
    name: 'TROFAST',
    price: {
      currency: 'USD',
      currentPrice: 94.99,
      discounted: true,
    },
    measurement: '18 1/8x11 3/4x37 "',
    typeName: 'Storage combination with boxes/tray',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-tray-white-gray-light-green-gray__1088431_pe861158_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-tray-white-gray-light-green-gray__1102300_pe866909_s5.jpg',
    imageAlt:
      'TROFAST Storage combination with boxes/tray, white gray/light green-gray, 18 1/8x11 3/4x37 "',
    url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-tray-white-gray-light-green-gray-s69478711/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Nursery Furniture',
        key: '45780',
      },
      {
        name: 'Toy storage',
        key: '20474',
      },
      {
        name: 'TROFAST system',
        key: '700556',
      },
      {
        name: 'TROFAST combinations',
        key: '700557',
      },
    ],
    variants: [],
  },
  {
    id: 's19389152',
    name: 'SMÅSTAD',
    price: {
      currency: 'USD',
      currentPrice: 99.99,
      discounted: false,
    },
    measurement: '35 3/8x20 1/2x18 7/8 "',
    typeName: 'Bench with toy storage',
    image:
      'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-white__0918197_pe786134_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-white__1056704_pe848500_s5.jpg',
    imageAlt:
      'SMÅSTAD Bench with toy storage, white/white, 35 3/8x20 1/2x18 7/8 "',
    url: 'https://www.ikea.com/us/en/p/smastad-bench-with-toy-storage-white-white-s19389152/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Dressers & storage drawers',
        key: 'st004',
      },
      {
        name: 'Kids dressers & chest of drawers',
        key: '18708',
      },
    ],
    variants: [
      {
        id: 's29539410',
        name: 'SMÅSTAD',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '35 3/8x20 1/2x18 7/8 "',
        typeName: 'Bench with toy storage',
        image:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-blue__1239644_pe918977_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-blue__1225406_pe915319_s5.jpg',
        imageAlt:
          'SMÅSTAD Bench with toy storage, white/blue, 35 3/8x20 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/smastad-bench-with-toy-storage-white-blue-s29539410/',
      },
      {
        id: 's89389158',
        name: 'SMÅSTAD',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: true,
        },
        measurement: '35 3/8x20 1/2x18 7/8 "',
        typeName: 'Bench with toy storage',
        image:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-gray__0918195_pe786135_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-gray__0950046_pe800130_s5.jpg',
        imageAlt:
          'SMÅSTAD Bench with toy storage, white/gray, 35 3/8x20 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/smastad-bench-with-toy-storage-white-gray-s89389158/',
      },
      {
        id: 's49389160',
        name: 'SMÅSTAD',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: true,
        },
        measurement: '35 3/8x20 1/2x18 7/8 "',
        typeName: 'Bench with toy storage',
        image:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-green__0918194_pe786137_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-green__0950059_pe800139_s5.jpg',
        imageAlt:
          'SMÅSTAD Bench with toy storage, white/green, 35 3/8x20 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/smastad-bench-with-toy-storage-white-green-s49389160/',
      },
      {
        id: 's49539409',
        name: 'SMÅSTAD',
        price: {
          currency: 'USD',
          currentPrice: 99.99,
          discounted: false,
        },
        measurement: '35 3/8x20 1/2x18 7/8 "',
        typeName: 'Bench with toy storage',
        image:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-light-green__1239645_pe918979_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-light-green__1225408_pe915317_s5.jpg',
        imageAlt:
          'SMÅSTAD Bench with toy storage, white/light green, 35 3/8x20 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/smastad-bench-with-toy-storage-white-light-green-s49539409/',
      },
      {
        id: 's29389156',
        name: 'SMÅSTAD',
        price: {
          currency: 'USD',
          currentPrice: 89.99,
          discounted: true,
        },
        measurement: '35 3/8x20 1/2x18 7/8 "',
        typeName: 'Bench with toy storage',
        image:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-pale-pink__0918196_pe786136_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/smastad-bench-with-toy-storage-white-pale-pink__0937220_pe793625_s5.jpg',
        imageAlt:
          'SMÅSTAD Bench with toy storage, white/pale pink, 35 3/8x20 1/2x18 7/8 "',
        url: 'https://www.ikea.com/us/en/p/smastad-bench-with-toy-storage-white-pale-pink-s29389156/',
      },
    ],
  },
  {
    id: '40512471',
    name: 'TIGERFINK',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Storage with compartments',
    image:
      'https://www.ikea.com/us/en/images/products/tigerfink-storage-with-compartments-turquoise__1118484_pe873159_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/tigerfink-storage-with-compartments-turquoise__1092598_pe862931_s5.jpg',
    imageAlt: 'TIGERFINK Storage with compartments, turquoise',
    url: 'https://www.ikea.com/us/en/p/tigerfink-storage-with-compartments-turquoise-40512471/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Storage boxes & organization bins',
        key: '10550',
      },
      {
        name: 'Kids boxes & baskets',
        key: '20479',
      },
    ],
    variants: [],
  },
  {
    id: '50527127',
    name: 'BÄRFIS',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Hanger for door',
    image:
      'https://www.ikea.com/us/en/images/products/baerfis-hanger-for-door-adjustable__1179723_pe896053_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/baerfis-hanger-for-door-adjustable__1181998_pe896906_s5.jpg',
    imageAlt: 'BÄRFIS Hanger for door, adjustable',
    url: 'https://www.ikea.com/us/en/p/baerfis-hanger-for-door-adjustable-50527127/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Kids clothes & shoe organization',
        key: '20477',
      },
    ],
    variants: [],
  },

  {
    id: 's19102659',
    name: 'TROFAST',
    price: {
      currency: 'USD',
      currentPrice: 120.99,
      discounted: true,
    },
    measurement: '36 5/8x17 3/8x20 1/2 "',
    typeName: 'Storage combination with boxes',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white__0351184_pe547497_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white__0471480_pe613427_s5.jpg',
    imageAlt:
      'TROFAST Storage combination with boxes, light white stained pine/white, 36 5/8x17 3/8x20 1/2 "',
    url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-s19102659/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Nursery Furniture',
        key: '45780',
      },
      {
        name: 'Toy storage',
        key: '20474',
      },
      {
        name: 'TROFAST system',
        key: '700556',
      },
      {
        name: 'TROFAST combinations',
        key: '700557',
      },
    ],
    variants: [
      {
        id: 's09328649',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 120.99,
          discounted: true,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-gray__0807365_pe770397_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-gray__1046442_pe842966_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine white/gray, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-gray-s09328649/',
      },
      {
        id: 's39328775',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 120.99,
          discounted: true,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-turquoise__0807370_pe770399_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-turquoise__1046514_pe843005_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine white/turquoise, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-turquoise-s39328775/',
      },
      {
        id: 's39533323',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 120.99,
          discounted: true,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-gray__0807365_pe770397_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-gray__1046442_pe842966_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine white/gray, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-gray-s39533323/',
      },
      {
        id: 's69331578',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 120.99,
          discounted: true,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-pink__0808121_pe770688_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-pink__0877264_pe613453_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine white/pink, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-pink-s69331578/',
      },
      {
        id: 's69533213',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 120.99,
          discounted: true,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-pink__0808121_pe770688_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-pink__0877264_pe613453_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine white/pink, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-pink-s69533213/',
      },
      {
        id: 's19533324',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 120.99,
          discounted: true,
        },
        measurement: '36 5/8x17 3/8x20 1/2 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-turquoise__0807370_pe770399_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white-turquoise__1046514_pe843005_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, light white stained pine white/turquoise, 36 5/8x17 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-light-white-stained-pine-white-turquoise-s19533324/',
      },
    ],
  },

  {
    id: 's29228470',
    name: 'TROFAST',
    price: {
      currency: 'USD',
      currentPrice: 85.99,
      discounted: true,
    },
    measurement: '39x17 3/8x22 "',
    typeName: 'Storage combination with boxes',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0535760_pe649618_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0876190_pe649619_s5.jpg',
    imageAlt:
      'TROFAST Storage combination with boxes, white/white, 39x17 3/8x22 "',
    url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-s29228470/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Nursery Furniture',
        key: '45780',
      },
      {
        name: 'Toy storage',
        key: '20474',
      },
      {
        name: 'TROFAST system',
        key: '700556',
      },
      {
        name: 'TROFAST combinations',
        key: '700557',
      },
    ],
    variants: [
      {
        id: 's69331564',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 85.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-green__0808119_pe770686_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-green__1046713_pe843097_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white/green, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-green-s69331564/',
      },
      {
        id: 's49228469',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 85.99,
          discounted: true,
        },
        measurement: '39x17 3/8x22 "',
        typeName: 'Storage combination with boxes',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-yellow__0535757_pe649615_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-yellow__0876223_pe649616_s5.jpg',
        imageAlt:
          'TROFAST Storage combination with boxes, white/yellow, 39x17 3/8x22 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-yellow-s49228469/',
      },
    ],
  },
  {
    id: 's29042877',
    name: 'TROFAST',
    price: {
      currency: 'USD',
      currentPrice: 103.99,
      discounted: true,
    },
    measurement: '39x17 3/8x37 "',
    typeName: 'Storage combination with boxes',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white__0545786_pe655692_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white__0471486_pe613433_s5.jpg',
    imageAlt: 'TROFAST Storage combination with boxes, white, 39x17 3/8x37 "',
    url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-s29042877/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Nursery Furniture',
        key: '45780',
      },
      {
        name: 'Toy storage',
        key: '20474',
      },
      {
        name: 'TROFAST system',
        key: '700556',
      },
      {
        name: 'TROFAST combinations',
        key: '700557',
      },
    ],
    variants: [
      {
        id: 's59329378',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 103.99,
          discounted: true,
        },
        measurement: '39x17 3/8x37 "',
        typeName: 'Storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-gray__0807589_pe770448_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-gray__1046550_pe843027_s5.jpg',
        imageAlt: 'TROFAST Storage combination, white/gray, 39x17 3/8x37 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-white-gray-s59329378/',
      },
      {
        id: 's49335539',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 103.99,
          discounted: true,
        },
        measurement: '39x17 3/8x37 "',
        typeName: 'Storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-orange__0807680_pe770479_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-orange__1046500_pe842996_s5.jpg',
        imageAlt: 'TROFAST Storage combination, white/orange, 39x17 3/8x37 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-white-orange-s49335539/',
      },
      {
        id: 's99533221',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 103.99,
          discounted: true,
        },
        measurement: '39x17 3/8x37 "',
        typeName: 'Storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-orange__0807680_pe770479_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-orange__1046500_pe842996_s5.jpg',
        imageAlt: 'TROFAST Storage combination, white/orange, 39x17 3/8x37 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-white-orange-s99533221/',
      },
      {
        id: 's29335535',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 103.99,
          discounted: true,
        },
        measurement: '39x17 3/8x37 "',
        typeName: 'Storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-pink__0807624_pe770455_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-pink__1046452_pe842973_s5.jpg',
        imageAlt: 'TROFAST Storage combination, white/pink, 39x17 3/8x37 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-white-pink-s29335535/',
      },
      {
        id: 's19329380',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 103.99,
          discounted: true,
        },
        measurement: '39x17 3/8x37 "',
        typeName: 'Storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-turquoise__0807590_pe770449_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-turquoise__1046463_pe842980_s5.jpg',
        imageAlt:
          'TROFAST Storage combination, white/turquoise, 39x17 3/8x37 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-white-turquoise-s19329380/',
      },
      {
        id: 's09533348',
        name: 'TROFAST',
        price: {
          currency: 'USD',
          currentPrice: 103.99,
          discounted: true,
        },
        measurement: '39x17 3/8x37 "',
        typeName: 'Storage combination',
        image:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-gray__0807589_pe770448_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/trofast-storage-combination-white-gray__1046550_pe843027_s5.jpg',
        imageAlt: 'TROFAST Storage combination, white/gray, 39x17 3/8x37 "',
        url: 'https://www.ikea.com/us/en/p/trofast-storage-combination-white-gray-s09533348/',
      },
    ],
  },
  {
    id: '80461380',
    name: 'KALAS',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '6 pack',
    typeName: 'Plate',
    image:
      'https://www.ikea.com/us/en/images/products/kalas-plate-mixed-colors__0998030_pe822920_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalas-plate-mixed-colors__0998032_pe822923_s5.jpg',
    imageAlt: 'KALAS Plate, mixed colors',
    url: 'https://www.ikea.com/us/en/p/kalas-plate-mixed-colors-80461380/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Dinnerware',
        key: '18860',
      },
      {
        name: 'Kids plates & bowls',
        key: '45853',
      },
    ],
    variants: [],
  },
  {
    id: '70461385',
    name: 'KALAS',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '',
    typeName: '18-piece flatware set',
    image:
      'https://www.ikea.com/us/en/images/products/kalas-18-piece-flatware-set-mixed-colors__0998014_pe822915_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalas-18-piece-flatware-set-mixed-colors__0998032_pe822923_s5.jpg',
    imageAlt: 'KALAS 18-piece flatware set, mixed colors',
    url: 'https://www.ikea.com/us/en/p/kalas-18-piece-flatware-set-mixed-colors-70461385/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Flatware & cutlery',
        key: '18865',
      },
      {
        name: 'Kids cutlery',
        key: '45851',
      },
    ],
    variants: [],
  },
  {
    id: '20461378',
    name: 'KALAS',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '6 pack',
    typeName: 'Bowl',
    image:
      'https://www.ikea.com/us/en/images/products/kalas-bowl-mixed-colors__0998009_pe822911_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalas-bowl-mixed-colors__0998032_pe822923_s5.jpg',
    imageAlt: 'KALAS Bowl, mixed colors',
    url: 'https://www.ikea.com/us/en/p/kalas-bowl-mixed-colors-20461378/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Dinnerware',
        key: '18860',
      },
      {
        name: 'Kids plates & bowls',
        key: '45853',
      },
    ],
    variants: [],
  },
  {
    id: '60137571',
    name: 'FABLER',
    price: {
      currency: 'USD',
      currentPrice: 6.99,
      discounted: false,
    },
    measurement: '',
    typeName: '3-piece flatware set',
    image:
      'https://www.ikea.com/us/en/images/products/fabler-3-piece-flatware-set-stainless-steel__0711359_pe728202_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fabler-3-piece-flatware-set-stainless-steel__1048750_pe843892_s5.jpg',
    imageAlt: 'FABLER 3-piece flatware set, stainless steel',
    url: 'https://www.ikea.com/us/en/p/fabler-3-piece-flatware-set-stainless-steel-60137571/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Flatware & cutlery',
        key: '18865',
      },
      {
        name: 'Kids cutlery',
        key: '45851',
      },
    ],
    variants: [],
  },
  {
    id: '00461379',
    name: 'KALAS',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '6 pack',
    typeName: 'Tumbler',
    image:
      'https://www.ikea.com/us/en/images/products/kalas-tumbler-mixed-colors__0998019_pe822917_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalas-tumbler-mixed-colors__0998032_pe822923_s5.jpg',
    imageAlt: 'KALAS Tumbler, mixed colors',
    url: 'https://www.ikea.com/us/en/p/kalas-tumbler-mixed-colors-00461379/',
    categoryPath: [
      {
        name: 'Baby & kids',
        key: 'bc001',
      },
      {
        name: 'Kids',
        key: 'bc003',
      },
      {
        name: 'Kids tableware & dinnerware',
        key: '18714',
      },
      {
        name: 'Kids cups & mugs',
        key: '45852',
      },
    ],
    variants: [],
  },
  {
    id: '60426934',
    name: 'MATVRÅ',
    price: {
      currency: 'USD',
      currentPrice: 2.29,
      discounted: false,
    },
    measurement: '15 ¾x11 ¾ "',
    typeName: 'Place mat',
    image:
      'https://www.ikea.com/us/en/images/products/matvra-place-mat-fruit-vegetables-pattern-multicolor__0708143_pe726505_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/matvra-place-mat-fruit-vegetables-pattern-multicolor__1048844_pe843938_s5.jpg',
    imageAlt:
      'MATVRÅ Place mat, fruit/vegetables pattern/multicolor, 15 ¾x11 ¾ "',
    url: 'https://www.ikea.com/us/en/p/matvra-place-mat-fruit-vegetables-pattern-multicolor-60426934/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Table linens',
        key: '20538',
      },
      {
        name: 'Placemats & tablemats',
        key: '20539',
      },
    ],
    variants: [],
  },
  {
    id: '70137575',
    name: 'SMASKA',
    price: {
      currency: 'USD',
      currentPrice: 5.99,
      discounted: false,
    },
    measurement: '',
    typeName: '3-piece flatware set',
    image:
      'https://www.ikea.com/us/en/images/products/smaska-3-piece-flatware-set__0711364_pe728207_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/smaska-3-piece-flatware-set__1049683_pe844320_s5.jpg',
    imageAlt: 'SMASKA 3-piece flatware set',
    url: 'https://www.ikea.com/us/en/p/smaska-3-piece-flatware-set-70137575/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Flatware & cutlery',
        key: '18865',
      },
      {
        name: 'Kids cutlery',
        key: '45851',
      },
    ],
    variants: [],
  },
  {
    id: '30479580',
    name: 'MARIATHERES',
    price: {
      currency: 'USD',
      currentPrice: 6.99,
      discounted: false,
    },
    measurement: '18x22 "',
    typeName: "Children's apron",
    image:
      'https://www.ikea.com/us/en/images/products/mariatheres-childrens-apron-beige__0918056_pe786116_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mariatheres-childrens-apron-beige__0918057_pe786117_s5.jpg',
    imageAlt: 'MARIATHERES Children\'s apron, beige, 18x22 "',
    url: 'https://www.ikea.com/us/en/p/mariatheres-childrens-apron-beige-30479580/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Aprons',
        key: '18852',
      },
    ],
    variants: [],
  },
  {
    id: '70455695',
    name: 'KALAS',
    price: {
      currency: 'USD',
      currentPrice: 0.29,
      discounted: false,
    },
    measurement: '4 pack',
    typeName: 'Spoon',
    image:
      'https://www.ikea.com/us/en/images/products/kalas-spoon-mixed-colors__1047763_pe843511_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalas-spoon-mixed-colors__1047762_pe843512_s5.jpg',
    imageAlt: 'KALAS Spoon, mixed colors',
    url: 'https://www.ikea.com/us/en/p/kalas-spoon-mixed-colors-70455695/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Flatware & cutlery',
        key: '18865',
      },
      {
        name: 'Kids cutlery',
        key: '45851',
      },
    ],
    variants: [],
  },
  {
    id: '60580812',
    name: 'DRÖNA',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '13x15x13 "',
    typeName: 'Box',
    image:
      'https://www.ikea.com/us/en/images/products/droena-box-blue__1255872_pe924751_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/droena-box-blue__1255874_pe924753_s5.jpg',
    imageAlt: 'DRÖNA Box, blue, 13x15x13 "',
    url: 'https://www.ikea.com/us/en/p/droena-box-blue-60580812/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Paper & media organizers',
        key: '10551',
      },
      {
        name: 'Paper & media storage boxes',
        key: '16202',
      },
    ],
    variants: [
      {
        id: '00508452',
        name: 'DRÖNA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: true,
        },
        measurement: '13x15x13 "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/droena-box-dark-gray__0386600_pe558365_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/droena-box-dark-gray__1249536_pe923378_s5.jpg',
        imageAlt: 'DRÖNA Box, dark gray, 13x15x13 "',
        url: 'https://www.ikea.com/us/en/p/droena-box-dark-gray-00508452/',
      },
      {
        id: '90594290',
        name: 'DRÖNA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '13x15x13 "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/droena-box-triangle-yellow-pink__1197579_pe903600_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/droena-box-triangle-yellow-pink__1197581_pe903602_s5.jpg',
        imageAlt: 'DRÖNA Box, triangle yellow/pink, 13x15x13 "',
        url: 'https://www.ikea.com/us/en/p/droena-box-triangle-yellow-pink-90594290/',
      },
      {
        id: '40566647',
        name: 'DRÖNA',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: true,
        },
        measurement: '13x15x13 "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/droena-box-pink-white__1197566_pe903587_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/droena-box-pink-white__1197572_pe903593_s5.jpg',
        imageAlt: 'DRÖNA Box, pink/white, 13x15x13 "',
        url: 'https://www.ikea.com/us/en/p/droena-box-pink-white-40566647/',
      },
      {
        id: '60508430',
        name: 'DRÖNA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: true,
        },
        measurement: '13x15x13 "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/droena-box-black__0713065_pe729169_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/droena-box-black__1249495_pe923368_s5.jpg',
        imageAlt: 'DRÖNA Box, black, 13x15x13 "',
        url: 'https://www.ikea.com/us/en/p/droena-box-black-60508430/',
      },
      {
        id: '30574006',
        name: 'DRÖNA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: true,
        },
        measurement: '13x15x13 "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/droena-box-white__0713066_pe729170_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/droena-box-white__1249513_pe923371_s5.jpg',
        imageAlt: 'DRÖNA Box, white, 13x15x13 "',
        url: 'https://www.ikea.com/us/en/p/droena-box-white-30574006/',
      },
      {
        id: '80577804',
        name: 'DRÖNA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '13x15x13 "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/droena-box-white-check-pattern__1244951_pe921382_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/droena-box-white-check-pattern__1244954_pe921385_s5.jpg',
        imageAlt: 'DRÖNA Box, white/check pattern, 13x15x13 "',
        url: 'https://www.ikea.com/us/en/p/droena-box-white-check-pattern-80577804/',
      },
    ],
  },
  {
    id: 's59561188',
    name: 'KUGGIS',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '10 ¼x13 ¾x6 "',
    typeName: 'Box with lid',
    image:
      'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__0713072_pe729176_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__0907170_pe593921_s5.jpg',
    imageAlt: 'KUGGIS Box with lid, white, 10 ¼x13 ¾x6 "',
    url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-white-s59561188/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Paper & media organizers',
        key: '10551',
      },
      {
        name: 'Paper & media storage boxes',
        key: '16202',
      },
    ],
    variants: [
      {
        id: 's09561299',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 15.99,
          discounted: false,
        },
        measurement: '10 ¼x13 ¾x6 "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black-bamboo__1291156_pe934842_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black-bamboo__1251991_pe924299_s5.jpg',
        imageAlt:
          'KUGGIS Box with lid, transparent black/bamboo, 10 ¼x13 ¾x6 "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-transparent-black-bamboo-s09561299/',
      },
      {
        id: 's29561284',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '7x10 ¼x6 "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white-bamboo__1291157_pe934843_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white-bamboo__1287290_pe933891_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, white/bamboo, 7x10 ¼x6 "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-white-bamboo-s29561284/',
      },
      {
        id: 's09561237',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '5x7x3 ¼ "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1028982_pe835605_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1035649_pe838219_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, transparent black, 5x7x3 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-transparent-black-s09561237/',
      },
      {
        id: 's09561242',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '7x10 ¼x3 ¼ "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1028988_pe835608_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1036834_pe838554_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, transparent black, 7x10 ¼x3 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-transparent-black-s09561242/',
      },
      {
        id: 's09561157',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '7x10 ¼x3 ¼ "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__0713062_pe729166_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__1336812_pe947468_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, white, 7x10 ¼x3 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-white-s09561157/',
      },
      {
        id: 's49561155',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '7x10 ¼x6 "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__1021124_pe832058_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__1016063_pe830201_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, white, 7x10 ¼x6 "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-white-s49561155/',
      },
    ],
  },
  {
    id: '20546467',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '9 1/2x6 3/4 "',
    typeName: 'Box',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-box-white__1215004_pe911802_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppdatera-box-white__1215002_pe911804_s5.jpg',
    imageAlt: 'UPPDATERA Box, white, 9 1/2x6 3/4 "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-box-white-20546467/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Paper & media organizers',
        key: '10551',
      },
      {
        name: 'Paper & media storage boxes',
        key: '16202',
      },
    ],
    variants: [
      {
        id: '80504049',
        name: 'UPPDATERA',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '9 ½x6 ¾ "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/uppdatera-box-anthracite__1214960_pe911787_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppdatera-box-anthracite__1214959_pe911788_s5.jpg',
        imageAlt: 'UPPDATERA Box, anthracite, 9 ½x6 ¾ "',
        url: 'https://www.ikea.com/us/en/p/uppdatera-box-anthracite-80504049/',
      },
      {
        id: '80504054',
        name: 'UPPDATERA',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '9 ½x6 ¾ "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/uppdatera-box-green__1214978_pe911795_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppdatera-box-green__1214977_pe911796_s5.jpg',
        imageAlt: 'UPPDATERA Box, green, 9 ½x6 ¾ "',
        url: 'https://www.ikea.com/us/en/p/uppdatera-box-green-80504054/',
      },
      {
        id: '10504057',
        name: 'UPPDATERA',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '9 ½x6 ¾ "',
        typeName: 'Box',
        image:
          'https://www.ikea.com/us/en/images/products/uppdatera-box-light-pink__1214981_pe911798_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppdatera-box-light-pink__1214980_pe911799_s5.jpg',
        imageAlt: 'UPPDATERA Box, light pink, 9 ½x6 ¾ "',
        url: 'https://www.ikea.com/us/en/p/uppdatera-box-light-pink-10504057/',
      },
    ],
  },
  {
    id: '00526875',
    name: 'KUGGIS',
    price: {
      currency: 'USD',
      currentPrice: 22.99,
      discounted: false,
    },
    measurement: '12 ½x12 ½x12 ½ "',
    typeName: 'Storage box with lid',
    image:
      'https://www.ikea.com/us/en/images/products/kuggis-storage-box-with-lid-white__1139591_pe880451_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kuggis-storage-box-with-lid-white__1139587_pe880449_s5.jpg',
    imageAlt: 'KUGGIS Storage box with lid, white, 12 ½x12 ½x12 ½ "',
    url: 'https://www.ikea.com/us/en/p/kuggis-storage-box-with-lid-white-00526875/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Paper & media organizers',
        key: '10551',
      },
      {
        name: 'Paper & media storage boxes',
        key: '16202',
      },
    ],
    variants: [
      {
        id: '00514033',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: false,
        },
        measurement: '7x10 ¼x6 "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1028985_pe835606_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1035652_pe838218_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, transparent black, 7x10 ¼x6 "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-transparent-black-00514033/',
      },
      {
        id: '10514042',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: '14 ½x21 ¼x8 ¼ "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1028999_pe835612_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-transparent-black__1035932_pe838232_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, transparent black, 14 ½x21 ¼x8 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-transparent-black-10514042/',
      },
      {
        id: '00489514',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '7x10 ¼x3 ¼ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-storage-box-with-lid-turquoise__0956319_pe804739_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-storage-box-with-lid-turquoise__0956321_pe804741_s5.jpg',
        imageAlt: 'KUGGIS Storage box with lid, turquoise, 7x10 ¼x3 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-storage-box-with-lid-turquoise-00489514/',
      },
      {
        id: '10476827',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: '14 ½x21 ¼x8 ¼ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-storage-box-with-lid-turquoise__0956372_pe804731_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-storage-box-with-lid-turquoise__0956373_pe804732_s5.jpg',
        imageAlt: 'KUGGIS Storage box with lid, turquoise, 14 ½x21 ¼x8 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-storage-box-with-lid-turquoise-10476827/',
      },
      {
        id: '10280203',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 29.99,
          discounted: false,
        },
        measurement: '14 ½x21 ¼x8 ¼ "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__0713059_pe729163_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__0418302_pe575372_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, white, 14 ½x21 ¼x8 ¼ "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-white-10280203/',
      },
      {
        id: '10501285',
        name: 'KUGGIS',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: false,
        },
        measurement: '7x10 ¼x6 "',
        typeName: 'Box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__1021124_pe832058_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kuggis-box-with-lid-white__1016063_pe830201_s5.jpg',
        imageAlt: 'KUGGIS Box with lid, white, 7x10 ¼x6 "',
        url: 'https://www.ikea.com/us/en/p/kuggis-box-with-lid-white-10501285/',
      },
    ],
  },
  {
    id: '00563815',
    name: 'DJURTRÄNARE',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '7x9 ¾x5 ½ "',
    typeName: 'Basket',
    image:
      'https://www.ikea.com/us/en/images/products/djurtraenare-basket-beige-white__1219303_pe913351_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/djurtraenare-basket-beige-white__1219305_pe913353_s5.jpg',
    imageAlt: 'DJURTRÄNARE Basket, beige/white, 7x9 ¾x5 ½ "',
    url: 'https://www.ikea.com/us/en/p/djurtraenare-basket-beige-white-00563815/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Storage boxes & organization bins',
        key: '10550',
      },
      {
        name: 'Baskets',
        key: '16201',
      },
    ],
    variants: [
      {
        id: '30563814',
        name: 'DJURTRÄNARE',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '9 ¾x13 ¾x7 ½ "',
        typeName: 'Basket',
        image:
          'https://www.ikea.com/us/en/images/products/djurtraenare-basket-beige-black__1219307_pe913355_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/djurtraenare-basket-beige-black__1219305_pe913353_s5.jpg',
        imageAlt: 'DJURTRÄNARE Basket, beige/black, 9 ¾x13 ¾x7 ½ "',
        url: 'https://www.ikea.com/us/en/p/djurtraenare-basket-beige-black-30563814/',
      },
    ],
  },
  {
    id: '40216357',
    name: 'MOPPE',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '16 ½x7x12 5/8 "',
    typeName: 'Mini storage chest',
    image:
      'https://www.ikea.com/us/en/images/products/moppe-mini-storage-chest-birch-plywood__0135959_pe292948_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/moppe-mini-storage-chest-birch-plywood__0910872_pe615924_s5.jpg',
    imageAlt: 'MOPPE Mini storage chest, birch plywood, 16 ½x7x12 5/8 "',
    url: 'https://www.ikea.com/us/en/p/moppe-mini-storage-chest-birch-plywood-40216357/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Desk accessories',
        key: '10573',
      },
    ],
    variants: [],
  },
  {
    id: '40515021',
    name: 'PANSARTAX',
    price: {
      currency: 'USD',
      currentPrice: 22.99,
      discounted: false,
    },
    measurement: '13x13x13 "',
    typeName: 'Storage box with lid',
    image:
      'https://www.ikea.com/us/en/images/products/pansartax-storage-box-with-lid-transparent-gray-blue__1119007_pe873358_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/pansartax-storage-box-with-lid-transparent-gray-blue__1220867_pe913566_s5.jpg',
    imageAlt:
      'PANSARTAX Storage box with lid, transparent gray-blue, 13x13x13 "',
    url: 'https://www.ikea.com/us/en/p/pansartax-storage-box-with-lid-transparent-gray-blue-40515021/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Storage boxes & organization bins',
        key: '10550',
      },
      {
        name: 'Plastic storage boxes',
        key: '10797',
      },
    ],
    variants: [
      {
        id: '00525404',
        name: 'PANSARTAX',
        price: {
          currency: 'USD',
          currentPrice: 18.99,
          discounted: false,
        },
        measurement: '13x13x6 ½ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/pansartax-storage-box-with-lid-transparent-gray-blue__1119041_pe873353_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/pansartax-storage-box-with-lid-transparent-gray-blue__1220867_pe913566_s5.jpg',
        imageAlt:
          'PANSARTAX Storage box with lid, transparent gray-blue, 13x13x6 ½ "',
        url: 'https://www.ikea.com/us/en/p/pansartax-storage-box-with-lid-transparent-gray-blue-00525404/',
      },
      {
        id: '60515020',
        name: 'PANSARTAX',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '6 ½x6 ½x6 ½ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/pansartax-storage-box-with-lid-transparent-gray-blue__1119173_pe873348_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/pansartax-storage-box-with-lid-transparent-gray-blue__1119172_pe873349_s5.jpg',
        imageAlt:
          'PANSARTAX Storage box with lid, transparent gray-blue, 6 ½x6 ½x6 ½ "',
        url: 'https://www.ikea.com/us/en/p/pansartax-storage-box-with-lid-transparent-gray-blue-60515020/',
      },
    ],
  },
  {
    id: '70576715',
    name: 'TJENA',
    price: {
      currency: 'USD',
      currentPrice: 5.99,
      discounted: false,
    },
    measurement: '12 ½x13 ¾x12 ½ "',
    typeName: 'Storage box with lid',
    image:
      'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-patterned-black-white__1283125_pe932387_s5.jpg',
    imageAlt:
      'TJENA Storage box with lid, patterned/black white, 12 ½x13 ¾x12 ½ "',
    url: 'https://www.ikea.com/us/en/p/tjena-storage-box-with-lid-patterned-black-white-70576715/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Clothes boxes',
        key: '10565',
      },
    ],
    variants: [
      {
        id: '20576713',
        name: 'TJENA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '9 ¾x13 ¾x7 ¾ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-patterned-lilac-white__1283123_pe932385_s5.jpg',
        imageAlt:
          'TJENA Storage box with lid, patterned/lilac white, 9 ¾x13 ¾x7 ¾ "',
        url: 'https://www.ikea.com/us/en/p/tjena-storage-box-with-lid-patterned-lilac-white-20576713/',
      },
      {
        id: '40469302',
        name: 'TJENA',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: true,
        },
        measurement: '12 ½x13 ¾x12 ½ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-white__0812710_pe772101_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-white__0815553_pe772970_s5.jpg',
        imageAlt: 'TJENA Storage box with lid, white, 12 ½x13 ¾x12 ½ "',
        url: 'https://www.ikea.com/us/en/p/tjena-storage-box-with-lid-white-40469302/',
      },
      {
        id: '60395428',
        name: 'TJENA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: true,
        },
        measurement: '9 ¾x13 ¾x7 ¾ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-white__0713112_pe729261_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-white__0907934_pe664490_s5.jpg',
        imageAlt: 'TJENA Storage box with lid, white, 9 ¾x13 ¾x7 ¾ "',
        url: 'https://www.ikea.com/us/en/p/tjena-storage-box-with-lid-white-60395428/',
      },
      {
        id: '90374349',
        name: 'TJENA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '13 ¾x19 ¾x11 ¾ "',
        typeName: 'Storage box with lid',
        image:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-white__0711314_pe728126_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tjena-storage-box-with-lid-white__0910437_pe685415_s5.jpg',
        imageAlt: 'TJENA Storage box with lid, white, 13 ¾x19 ¾x11 ¾ "',
        url: 'https://www.ikea.com/us/en/p/tjena-storage-box-with-lid-white-90374349/',
      },
    ],
  },
  {
    id: '00571778',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '6 ¼x9 ½x6 "',
    typeName: 'Storage box',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-dark-bamboo__1294283_pe935424_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-dark-bamboo__1294291_pe935432_s5.jpg',
    imageAlt: 'UPPDATERA Storage box, dark bamboo, 6 ¼x9 ½x6 "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-storage-box-dark-bamboo-00571778/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Paper & media organizers',
        key: '10551',
      },
      {
        name: 'Paper & media storage boxes',
        key: '16202',
      },
    ],
    variants: [
      {
        id: '40520720',
        name: 'UPPDATERA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '6 ¼x9 ½x6 "',
        typeName: 'Storage box',
        image:
          'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-light-bamboo__1029005_pe835616_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-light-bamboo__1094017_pe863289_s5.jpg',
        imageAlt: 'UPPDATERA Storage box, light bamboo, 6 ¼x9 ½x6 "',
        url: 'https://www.ikea.com/us/en/p/uppdatera-storage-box-light-bamboo-40520720/',
      },
      {
        id: '60571780',
        name: 'UPPDATERA',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '9 ½x12 ½x6 "',
        typeName: 'Storage box',
        image:
          'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-dark-bamboo__1294285_pe935426_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-dark-bamboo__1294292_pe935433_s5.jpg',
        imageAlt: 'UPPDATERA Storage box, dark bamboo, 9 ½x12 ½x6 "',
        url: 'https://www.ikea.com/us/en/p/uppdatera-storage-box-dark-bamboo-60571780/',
      },
      {
        id: '80520718',
        name: 'UPPDATERA',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '9 ½x12 ½x6 "',
        typeName: 'Storage box',
        image:
          'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-light-bamboo__1029002_pe835614_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/uppdatera-storage-box-light-bamboo__1094037_pe863304_s5.jpg',
        imageAlt: 'UPPDATERA Storage box, light bamboo, 9 ½x12 ½x6 "',
        url: 'https://www.ikea.com/us/en/p/uppdatera-storage-box-light-bamboo-80520718/',
      },
    ],
  },
  {
    id: '20468105',
    name: 'NOJIG',
    price: {
      currency: 'USD',
      currentPrice: 0.99,
      discounted: false,
    },
    measurement: '7 ¾x9 ¾x4 "',
    typeName: 'Organizer',
    image:
      'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954730_pe804516_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954732_pe804518_s5.jpg',
    imageAlt: 'NOJIG Organizer, plastic/beige, 7 ¾x9 ¾x4 "',
    url: 'https://www.ikea.com/us/en/p/nojig-organizer-plastic-beige-20468105/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Paper & media organizers',
        key: '10551',
      },
      {
        name: 'Paper & media storage boxes',
        key: '16202',
      },
    ],
    variants: [
      {
        id: '50468104',
        name: 'NOJIG',
        price: {
          currency: 'USD',
          currentPrice: 0.49,
          discounted: false,
        },
        measurement: '6x7 ¾x2 "',
        typeName: 'Organizer',
        image:
          'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954157_pe804499_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954109_pe804512_s5.jpg',
        imageAlt: 'NOJIG Organizer, plastic/beige, 6x7 ¾x2 "',
        url: 'https://www.ikea.com/us/en/p/nojig-organizer-plastic-beige-50468104/',
      },
      {
        id: '60477037',
        name: 'NOJIG',
        price: {
          currency: 'USD',
          currentPrice: 0.29,
          discounted: false,
        },
        measurement: '4x4x2 "',
        typeName: 'Organizer',
        image:
          'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954108_pe804511_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954109_pe804512_s5.jpg',
        imageAlt: 'NOJIG Organizer, plastic/beige, 4x4x2 "',
        url: 'https://www.ikea.com/us/en/p/nojig-organizer-plastic-beige-60477037/',
      },
      {
        id: '70457487',
        name: 'NOJIG',
        price: {
          currency: 'USD',
          currentPrice: 0.39,
          discounted: false,
        },
        measurement: '4x7 ¾x2 "',
        typeName: 'Organizer',
        image:
          'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954145_pe804497_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nojig-organizer-plastic-beige__0954158_pe804500_s5.jpg',
        imageAlt: 'NOJIG Organizer, plastic/beige, 4x7 ¾x2 "',
        url: 'https://www.ikea.com/us/en/p/nojig-organizer-plastic-beige-70457487/',
      },
    ],
  },
  {
    id: '50590166',
    name: 'MALM',
    price: {
      currency: 'USD',
      currentPrice: 80,
      discounted: false,
    },
    measurement: 'Queen/King',
    typeName: 'Underbed storage box for high bed',
    image:
      'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-blue__1330512_pe945708_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-blue__1330508_pe945707_s5.jpg',
    imageAlt: 'MALM Underbed storage box for high bed, blue, Queen/King',
    url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-blue-50590166/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Underbed storage bags & bins',
        key: '19059',
      },
    ],
    variants: [
      {
        id: '10264694',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: true,
        },
        measurement: 'Queen/King',
        typeName: 'Underbed storage box for high bed',
        image:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-white-stained-oak-veneer__0636234_pe697749_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-white-stained-oak-veneer__1154408_pe886055_s5.jpg',
        imageAlt:
          'MALM Underbed storage box for high bed, white stained oak veneer, Queen/King',
        url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-white-stained-oak-veneer-10264694/',
      },
      {
        id: '80264681',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: true,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Underbed storage box for high bed',
        image:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-white-stained-oak-veneer__0636234_pe697749_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-white-stained-oak-veneer__1154408_pe886055_s5.jpg',
        imageAlt:
          'MALM Underbed storage box for high bed, white stained oak veneer, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-white-stained-oak-veneer-80264681/',
      },
      {
        id: '00590041',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: false,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Underbed storage box for high bed',
        image:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-blue__1330512_pe945708_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-blue__1330508_pe945707_s5.jpg',
        imageAlt:
          'MALM Underbed storage box for high bed, blue, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-blue-00590041/',
      },
      {
        id: '20252718',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: true,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Underbed storage box for high bed',
        image:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-black-brown__0636236_pe697747_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-black-brown__1154406_pe886053_s5.jpg',
        imageAlt:
          'MALM Underbed storage box for high bed, black-brown, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-black-brown-20252718/',
      },
      {
        id: '10458649',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: true,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Underbed storage box for high bed',
        image:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-gray-stained__0780033_pe759757_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-gray-stained__1154410_pe886057_s5.jpg',
        imageAlt:
          'MALM Underbed storage box for high bed, gray stained, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-gray-stained-10458649/',
      },
      {
        id: '00252719',
        name: 'MALM',
        price: {
          currency: 'USD',
          currentPrice: 80,
          discounted: true,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Underbed storage box for high bed',
        image:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-white__0636233_pe697745_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/malm-underbed-storage-box-for-high-bed-white__1154397_pe886046_s5.jpg',
        imageAlt:
          'MALM Underbed storage box for high bed, white, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/malm-underbed-storage-box-for-high-bed-white-00252719/',
      },
    ],
  },
  {
    id: '00538543',
    name: 'SKUBB',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '36 ½x21 ¾x7 ½ "',
    typeName: 'Storage case',
    image:
      'https://www.ikea.com/us/en/images/products/skubb-storage-case-white__0711311_pe728149_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skubb-storage-case-white__0421830_pe578037_s5.jpg',
    imageAlt: 'SKUBB Storage case, white, 36 ½x21 ¾x7 ½ "',
    url: 'https://www.ikea.com/us/en/p/skubb-storage-case-white-00538543/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Clothes boxes',
        key: '10565',
      },
    ],
    variants: [
      {
        id: '90472986',
        name: 'SKUBB',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '27 ¼x21 ¾x7 ½ "',
        typeName: 'Storage case',
        image:
          'https://www.ikea.com/us/en/images/products/skubb-storage-case-dark-gray__0573431_pe667770_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skubb-storage-case-dark-gray__1090728_pe862158_s5.jpg',
        imageAlt: 'SKUBB Storage case, dark gray, 27 ¼x21 ¾x7 ½ "',
        url: 'https://www.ikea.com/us/en/p/skubb-storage-case-dark-gray-90472986/',
      },
      {
        id: '20300050',
        name: 'SKUBB',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '27 ¼x21 ¾x7 ½ "',
        typeName: 'Storage case',
        image:
          'https://www.ikea.com/us/en/images/products/skubb-storage-case-white__0711196_pe728065_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/skubb-storage-case-white__0910098_pe559907_s5.jpg',
        imageAlt: 'SKUBB Storage case, white, 27 ¼x21 ¾x7 ½ "',
        url: 'https://www.ikea.com/us/en/p/skubb-storage-case-white-20300050/',
      },
    ],
  },
  {
    id: '50395382',
    name: 'PÄRKLA',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '21 ¾x19 ¼x7 ½ "',
    typeName: 'Storage case',
    image:
      'https://www.ikea.com/us/en/images/products/paerkla-storage-case__0716331_pe730816_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/paerkla-storage-case__0784919_pe761939_s5.jpg',
    imageAlt: 'PÄRKLA Storage case, 21 ¾x19 ¼x7 ½ "',
    url: 'https://www.ikea.com/us/en/p/paerkla-storage-case-50395382/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Clothes boxes',
        key: '10565',
      },
    ],
    variants: [],
  },
  {
    id: '10493638',
    name: 'FREDVANG',
    price: {
      currency: 'USD',
      currentPrice: 59.99,
      discounted: false,
    },
    measurement: '23 1/4x22 "',
    typeName: 'Underbed storage/bedside table',
    image:
      'https://www.ikea.com/us/en/images/products/fredvang-underbed-storage-bedside-table-white__0962752_pe808963_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fredvang-underbed-storage-bedside-table-white__0962756_pe808964_s5.jpg',
    imageAlt: 'FREDVANG Underbed storage/bedside table, white, 23 1/4x22 "',
    url: 'https://www.ikea.com/us/en/p/fredvang-underbed-storage-bedside-table-white-10493638/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Underbed storage bags & bins',
        key: '19059',
      },
    ],
    variants: [],
  },
  {
    id: '20238223',
    name: 'VARDÖ',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '25 5/8x27 1/2 "',
    typeName: 'Underbed storage box',
    image:
      'https://www.ikea.com/us/en/images/products/vardoe-underbed-storage-box-black__0636228_pe697741_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vardoe-underbed-storage-box-black__1268352_pe928705_s5.jpg',
    imageAlt: 'VARDÖ Underbed storage box, black, 25 5/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/vardoe-underbed-storage-box-black-20238223/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Underbed storage bags & bins',
        key: '19059',
      },
    ],
    variants: [],
  },
  {
    id: '20411524',
    name: 'SOCKERBIT',
    price: {
      currency: 'USD',
      currentPrice: 15.99,
      discounted: false,
    },
    measurement: '19 ¾x30 ¼x7 ½ "',
    typeName: 'Storage box with lid',
    image:
      'https://www.ikea.com/us/en/images/products/sockerbit-storage-box-with-lid-white__0662633_pe712054_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sockerbit-storage-box-with-lid-white__0662632_pe712055_s5.jpg',
    imageAlt: 'SOCKERBIT Storage box with lid, white, 19 ¾x30 ¼x7 ½ "',
    url: 'https://www.ikea.com/us/en/p/sockerbit-storage-box-with-lid-white-20411524/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Clothes boxes',
        key: '10565',
      },
    ],
    variants: [],
  },
  {
    id: '10372542',
    name: 'SONGESAND',
    price: {
      currency: 'USD',
      currentPrice: 100,
      discounted: false,
    },
    measurement: 'Full/Double/Twin/Single',
    typeName: 'Underbed storage box, set of 2',
    image:
      'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-white__0636232_pe697744_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-white__0869131_pe658848_s5.jpg',
    imageAlt:
      'SONGESAND Underbed storage box, set of 2, white, Full/Double/Twin/Single',
    url: 'https://www.ikea.com/us/en/p/songesand-underbed-storage-box-set-of-2-white-10372542/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Underbed storage bags & bins',
        key: '19059',
      },
    ],
    variants: [
      {
        id: '30372541',
        name: 'SONGESAND',
        price: {
          currency: 'USD',
          currentPrice: 100,
          discounted: false,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Underbed storage box, set of 2',
        image:
          'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-brown__0636235_pe697746_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-brown__0861702_pe674427_s5.jpg',
        imageAlt:
          'SONGESAND Underbed storage box, set of 2, brown, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/songesand-underbed-storage-box-set-of-2-brown-30372541/',
      },
      {
        id: '90372543',
        name: 'SONGESAND',
        price: {
          currency: 'USD',
          currentPrice: 100,
          discounted: false,
        },
        measurement: 'Queen/King',
        typeName: 'Underbed storage box, set of 2',
        image:
          'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-brown__0636235_pe697746_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-brown__0861702_pe674427_s5.jpg',
        imageAlt: 'SONGESAND Underbed storage box, set of 2, brown, Queen/King',
        url: 'https://www.ikea.com/us/en/p/songesand-underbed-storage-box-set-of-2-brown-90372543/',
      },
      {
        id: '70372544',
        name: 'SONGESAND',
        price: {
          currency: 'USD',
          currentPrice: 100,
          discounted: false,
        },
        measurement: 'Queen/King',
        typeName: 'Underbed storage box, set of 2',
        image:
          'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-white__0636232_pe697744_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/songesand-underbed-storage-box-set-of-2-white__0869131_pe658848_s5.jpg',
        imageAlt: 'SONGESAND Underbed storage box, set of 2, white, Queen/King',
        url: 'https://www.ikea.com/us/en/p/songesand-underbed-storage-box-set-of-2-white-70372544/',
      },
    ],
  },
  {
    id: '40474209',
    name: 'HAUGA',
    price: {
      currency: 'USD',
      currentPrice: 60,
      discounted: true,
    },
    measurement: 'Queen/King',
    typeName: 'Upholstered bed storage box',
    image:
      'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-vissle-gray__0916099_pe784965_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-vissle-gray__0916202_pe785026_s5.jpg',
    imageAlt: 'HAUGA Upholstered bed storage box, Vissle gray, Queen/King',
    url: 'https://www.ikea.com/us/en/p/hauga-upholstered-bed-storage-box-vissle-gray-40474209/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Beds',
        key: 'bm003',
      },
      {
        name: 'Underbed storage bags & bins',
        key: '19059',
      },
    ],
    variants: [
      {
        id: '30474200',
        name: 'HAUGA',
        price: {
          currency: 'USD',
          currentPrice: 60,
          discounted: true,
        },
        measurement: 'Queen/King',
        typeName: 'Upholstered bed storage box',
        image:
          'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-lofallet-beige__0916098_pe784966_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-lofallet-beige__0916200_pe785028_s5.jpg',
        imageAlt:
          'HAUGA Upholstered bed storage box, Lofallet beige, Queen/King',
        url: 'https://www.ikea.com/us/en/p/hauga-upholstered-bed-storage-box-lofallet-beige-30474200/',
      },
      {
        id: '70474199',
        name: 'HAUGA',
        price: {
          currency: 'USD',
          currentPrice: 60,
          discounted: true,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Upholstered bed storage box',
        image:
          'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-lofallet-beige__0916098_pe784966_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-lofallet-beige__0916200_pe785028_s5.jpg',
        imageAlt:
          'HAUGA Upholstered bed storage box, Lofallet beige, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/hauga-upholstered-bed-storage-box-lofallet-beige-70474199/',
      },
      {
        id: '60474208',
        name: 'HAUGA',
        price: {
          currency: 'USD',
          currentPrice: 60,
          discounted: true,
        },
        measurement: 'Full/Double/Twin/Single',
        typeName: 'Upholstered bed storage box',
        image:
          'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-vissle-gray__0916099_pe784965_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-storage-box-vissle-gray__0916202_pe785026_s5.jpg',
        imageAlt:
          'HAUGA Upholstered bed storage box, Vissle gray, Full/Double/Twin/Single',
        url: 'https://www.ikea.com/us/en/p/hauga-upholstered-bed-storage-box-vissle-gray-60474208/',
      },
    ],
  },
  {
    id: '60481303',
    name: 'STUK',
    price: {
      currency: 'USD',
      currentPrice: 13.99,
      discounted: false,
    },
    measurement: '28x20x7 "',
    typeName: 'Storage case',
    image:
      'https://www.ikea.com/us/en/images/products/stuk-storage-case-white-gray__0711304_pe728142_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/stuk-storage-case-white-gray__0910303_pe639917_s5.jpg',
    imageAlt: 'STUK Storage case, white/gray, 28x20x7 "',
    url: 'https://www.ikea.com/us/en/p/stuk-storage-case-white-gray-60481303/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Clothes boxes',
        key: '10565',
      },
    ],
    variants: [],
  },
  {
    id: '40504193',
    name: 'GÖRSNYGG',
    price: {
      currency: 'USD',
      currentPrice: 2.49,
      discounted: false,
    },
    measurement: '22x19x7 "',
    typeName: 'Storage case',
    image:
      'https://www.ikea.com/us/en/images/products/goersnygg-storage-case-white-clear__1013439_pe829198_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/goersnygg-storage-case-white-clear__1014999_pe829813_s5.jpg',
    imageAlt: 'GÖRSNYGG Storage case, white/clear, 22x19x7 "',
    url: 'https://www.ikea.com/us/en/p/goersnygg-storage-case-white-clear-40504193/',
    categoryPath: [
      {
        name: 'Storage & organization',
        key: 'st001',
      },
      {
        name: 'Storage containers, organizers & baskets',
        key: 'st007',
      },
      {
        name: 'Clothes organizers',
        key: '10452',
      },
      {
        name: 'Clothes boxes',
        key: '10565',
      },
    ],
    variants: [],
  },
  {
    id: '40544194',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 12,
      discounted: false,
    },
    measurement: '24x24 "',
    typeName: 'Adjustable organizer for drawer',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-adjustable-organizer-for-drawer-gray__1139784_pe880458_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppdatera-adjustable-organizer-for-drawer-gray__1167346_pe891529_s5.jpg',
    imageAlt: 'UPPDATERA Adjustable organizer for drawer, gray, 24x24 "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-adjustable-organizer-for-drawer-gray-40544194/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen systems',
        key: 'ka003',
      },
      {
        name: 'SEKTION kitchen',
        key: 'ka005',
      },
      {
        name: 'Accessories for SEKTION',
        key: '50003',
      },
    ],
    variants: [],
  },
  {
    id: '10177220',
    name: 'STÖDJA',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '11x20 "',
    typeName: 'Flatware tray',
    image:
      'https://www.ikea.com/us/en/images/products/stoedja-flatware-tray-white__0107313_pe256929_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/stoedja-flatware-tray-white__0260314_pe404031_s5.jpg',
    imageAlt: 'STÖDJA Flatware tray, white, 11x20 "',
    url: 'https://www.ikea.com/us/en/p/stoedja-flatware-tray-white-10177220/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [
      {
        id: '70177222',
        name: 'STÖDJA',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '14x20 "',
        typeName: 'Flatware tray',
        image:
          'https://www.ikea.com/us/en/images/products/stoedja-flatware-tray-white__0107314_pe256930_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stoedja-flatware-tray-white__0260315_pe404032_s5.jpg',
        imageAlt: 'STÖDJA Flatware tray, white, 14x20 "',
        url: 'https://www.ikea.com/us/en/p/stoedja-flatware-tray-white-70177222/',
      },
    ],
  },
  {
    id: '20491356',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 21,
      discounted: false,
    },
    measurement: '15x19 ½ "',
    typeName: 'Flatware tray',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-flatware-tray-light-bamboo__0968836_pe810562_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppdatera-flatware-tray-light-bamboo__0993665_pe820654_s5.jpg',
    imageAlt: 'UPPDATERA Flatware tray, light bamboo, 15x19 ½ "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-flatware-tray-light-bamboo-20491356/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [],
  },
  {
    id: '50502985',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 24,
      discounted: false,
    },
    measurement: '30 "',
    typeName: 'Pegboard drawer organizer',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-pegboard-drawer-organizer-anthracite__0973093_pe811929_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppdatera-pegboard-drawer-organizer-anthracite__0975700_pe812846_s5.jpg',
    imageAlt: 'UPPDATERA Pegboard drawer organizer, anthracite, 30 "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-pegboard-drawer-organizer-anthracite-50502985/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [],
  },
  {
    id: '60136623',
    name: 'VARIERA',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '12 5/8x11x6 1/4 "',
    typeName: 'Shelf insert',
    image:
      'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__81980_pe207259_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__0867249_pe600475_s5.jpg',
    imageAlt: 'VARIERA Shelf insert, white, 12 5/8x11x6 1/4 "',
    url: 'https://www.ikea.com/us/en/p/variera-shelf-insert-white-60136623/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [
      {
        id: '40542958',
        name: 'VARIERA',
        price: {
          currency: 'USD',
          currentPrice: 13.99,
          discounted: false,
        },
        measurement: '17 7/8x5 1/2x6 1/4 "',
        typeName: 'Shelf insert',
        image:
          'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__1098199_pe865318_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__1098198_pe865319_s5.jpg',
        imageAlt: 'VARIERA Shelf insert, white, 17 7/8x5 1/2x6 1/4 "',
        url: 'https://www.ikea.com/us/en/p/variera-shelf-insert-white-40542958/',
      },
      {
        id: '80136622',
        name: 'VARIERA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '12 5/8x5 1/8x6 1/4 "',
        typeName: 'Shelf insert',
        image:
          'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__81979_pe207258_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__0867261_pe600476_s5.jpg',
        imageAlt: 'VARIERA Shelf insert, white, 12 5/8x5 1/8x6 1/4 "',
        url: 'https://www.ikea.com/us/en/p/variera-shelf-insert-white-80136622/',
      },
      {
        id: '80542961',
        name: 'VARIERA',
        price: {
          currency: 'USD',
          currentPrice: 16.99,
          discounted: false,
        },
        measurement: '17 7/8x11 3/8x6 1/4 "',
        typeName: 'Shelf insert',
        image:
          'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__1098205_pe865322_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/variera-shelf-insert-white__1098204_pe865324_s5.jpg',
        imageAlt: 'VARIERA Shelf insert, white, 17 7/8x11 3/8x6 1/4 "',
        url: 'https://www.ikea.com/us/en/p/variera-shelf-insert-white-80542961/',
      },
    ],
  },
  {
    id: 's19432706',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 13,
      discounted: false,
    },
    measurement: '6x19 1/2 "',
    typeName: 'Tray with knife rack',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-tray-with-knife-rack-light-bamboo-anthracite__1019502_pe831389_s5.jpg',
    imageAlt:
      'UPPDATERA Tray with knife rack, light bamboo/anthracite, 6x19 1/2 "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-tray-with-knife-rack-light-bamboo-anthracite-s19432706/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [],
  },
  {
    id: '70265662',
    name: 'MAXIMERA',
    price: {
      currency: 'USD',
      currentPrice: 42,
      discounted: true,
    },
    measurement: '24x24 "',
    typeName: 'Drawer, low',
    image:
      'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268017_pe405675_s5.jpg',
    imageAlt: 'MAXIMERA Drawer, low, white, 24x24 "',
    url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-70265662/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Kitchen drawers & shelves',
        key: '24258',
      },
    ],
    variants: [
      {
        id: '10265655',
        name: 'MAXIMERA',
        price: {
          currency: 'USD',
          currentPrice: 43,
          discounted: true,
        },
        measurement: '36x14 3/4 "',
        typeName: 'Drawer, low',
        image:
          'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268026_pe405673_s5.jpg',
        imageAlt: 'MAXIMERA Drawer, low, white, 36x14 3/4 "',
        url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-10265655/',
      },
      {
        id: '10265660',
        name: 'MAXIMERA',
        price: {
          currency: 'USD',
          currentPrice: 37,
          discounted: true,
        },
        measurement: '30x14 3/4 "',
        typeName: 'Drawer, low',
        image:
          'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268020_pe405660_s5.jpg',
        imageAlt: 'MAXIMERA Drawer, low, white, 30x14 3/4 "',
        url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-10265660/',
      },
      {
        id: '30265659',
        name: 'MAXIMERA',
        price: {
          currency: 'USD',
          currentPrice: 26,
          discounted: true,
        },
        measurement: '15x14 3/4 "',
        typeName: 'Drawer, low',
        image:
          'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268002_pe405680_s5.jpg',
        imageAlt: 'MAXIMERA Drawer, low, white, 15x14 3/4 "',
        url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-30265659/',
      },
      {
        id: '40265654',
        name: 'MAXIMERA',
        price: {
          currency: 'USD',
          currentPrice: 35,
          discounted: true,
        },
        measurement: '24x14 3/4 "',
        typeName: 'Drawer, low',
        image:
          'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268014_pe405676_s5.jpg',
        imageAlt: 'MAXIMERA Drawer, low, white, 24x14 3/4 "',
        url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-40265654/',
      },
      {
        id: '50265658',
        name: 'MAXIMERA',
        price: {
          currency: 'USD',
          currentPrice: 27,
          discounted: true,
        },
        measurement: '18x14 3/4 "',
        typeName: 'Drawer, low',
        image:
          'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268008_pe405678_s5.jpg',
        imageAlt: 'MAXIMERA Drawer, low, white, 18x14 3/4 "',
        url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-50265658/',
      },
      {
        id: '50265663',
        name: 'MAXIMERA',
        price: {
          currency: 'USD',
          currentPrice: 30,
          discounted: true,
        },
        measurement: '15x24 "',
        typeName: 'Drawer, low',
        image:
          'https://www.ikea.com/us/en/images/products/maximera-drawer-low-white__0268005_pe405679_s5.jpg',
        imageAlt: 'MAXIMERA Drawer, low, white, 15x24 "',
        url: 'https://www.ikea.com/us/en/p/maximera-drawer-low-white-50265663/',
      },
    ],
  },
  {
    id: '90491367',
    name: 'UPPDATERA',
    price: {
      currency: 'USD',
      currentPrice: 4,
      discounted: false,
    },
    measurement: '6x20 "',
    typeName: 'Spice rack',
    image:
      'https://www.ikea.com/us/en/images/products/uppdatera-spice-rack-anthracite__0969102_pe810696_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/uppdatera-spice-rack-anthracite__0993654_pe820644_s5.jpg',
    imageAlt: 'UPPDATERA Spice rack, anthracite, 6x20 "',
    url: 'https://www.ikea.com/us/en/p/uppdatera-spice-rack-anthracite-90491367/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [],
  },
  {
    id: '10517795',
    name: 'UTRUSTA',
    price: {
      currency: 'USD',
      currentPrice: 399,
      discounted: false,
    },
    measurement: '',
    typeName: 'Pull-out pantry organizer',
    image:
      'https://www.ikea.com/us/en/images/products/utrusta-pull-out-pantry-organizer__1111370_pe870754_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/utrusta-pull-out-pantry-organizer__1099402_pe865708_s5.jpg',
    imageAlt: 'UTRUSTA Pull-out pantry organizer',
    url: 'https://www.ikea.com/us/en/p/utrusta-pull-out-pantry-organizer-10517795/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Kitchen drawers & shelves',
        key: '24258',
      },
    ],
    variants: [],
  },
  {
    id: '70154800',
    name: 'VARIERA',
    price: {
      currency: 'USD',
      currentPrice: 7.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Pot lid organizer',
    image:
      'https://www.ikea.com/us/en/images/products/variera-pot-lid-organizer-stainless-steel__0626878_pe693056_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/variera-pot-lid-organizer-stainless-steel__0867283_pe607180_s5.jpg',
    imageAlt: 'VARIERA Pot lid organizer, stainless steel',
    url: 'https://www.ikea.com/us/en/p/variera-pot-lid-organizer-stainless-steel-70154800/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen drawer organization',
        key: '24255',
      },
      {
        name: 'Drawer dividers',
        key: '24257',
      },
    ],
    variants: [],
  },
  {
    id: 's69548894',
    name: 'BOAXEL',
    price: {
      currency: 'USD',
      currentPrice: 86,
      discounted: false,
    },
    measurement: '32 1/4x15 3/4x79 "',
    typeName: 'Laundry combination',
    image:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-anthracite-metal__1259897_pe926832_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-anthracite-metal__1259896_pe926833_s5.jpg',
    imageAlt:
      'BOAXEL Laundry combination, anthracite/metal, 32 1/4x15 3/4x79 "',
    url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-anthracite-metal-s69548894/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Laundry',
        key: 'ba003',
      },
      {
        name: 'Drying racks',
        key: '20602',
      },
    ],
    variants: [
      {
        id: 's69385571',
        name: 'BOAXEL',
        price: {
          currency: 'USD',
          currentPrice: 86,
          discounted: false,
        },
        measurement: '32 1/4x15 3/4x79 "',
        typeName: 'Laundry combination',
        image:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__0840934_pe778714_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__1237309_pe917911_s5.jpg',
        imageAlt: 'BOAXEL Laundry combination, white, 32 1/4x15 3/4x79 "',
        url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-s69385571/',
      },
      {
        id: 's79332407',
        name: 'BOAXEL',
        price: {
          currency: 'USD',
          currentPrice: 86,
          discounted: false,
        },
        measurement: '32 1/4x15 3/4x79 "',
        typeName: 'Laundry combination',
        image:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white-metal__0918703_pe786462_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white-metal__1237311_pe917913_s5.jpg',
        imageAlt: 'BOAXEL Laundry combination, white/metal, 32 1/4x15 3/4x79 "',
        url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-metal-s79332407/',
      },
    ],
  },
  {
    id: 's89297130',
    name: 'JONAXEL',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '9 7/8x20 1/8x27 1/2 "',
    typeName: 'Storage combination',
    image:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0703688_pe732250_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0703685_pe732249_s5.jpg',
    imageAlt: 'JONAXEL Storage combination, white, 9 7/8x20 1/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/jonaxel-storage-combination-white-s89297130/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelving units',
        key: '20804',
      },
    ],
    variants: [],
  },
  {
    id: 's69548912',
    name: 'BOAXEL',
    price: {
      currency: 'USD',
      currentPrice: 150,
      discounted: false,
    },
    measurement: '89 1/2x15 3/4x39 5/8 "',
    typeName: 'Laundry combination',
    image:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-anthracite-metal__1302029_pe937617_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-anthracite-metal__1302028_pe937618_s5.jpg',
    imageAlt:
      'BOAXEL Laundry combination, anthracite/metal, 89 1/2x15 3/4x39 5/8 "',
    url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-anthracite-metal-s69548912/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Laundry',
        key: 'ba003',
      },
      {
        name: 'Drying racks',
        key: '20602',
      },
    ],
    variants: [
      {
        id: 's19332410',
        name: 'BOAXEL',
        price: {
          currency: 'USD',
          currentPrice: 150,
          discounted: false,
        },
        measurement: '89 1/2x15 3/4x39 5/8 "',
        typeName: 'Laundry combination',
        image:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white-metal__0802038_pe770067_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white-metal__1237319_pe917916_s5.jpg',
        imageAlt:
          'BOAXEL Laundry combination, white/metal, 89 1/2x15 3/4x39 5/8 "',
        url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-metal-s19332410/',
      },
      {
        id: 's89386485',
        name: 'BOAXEL',
        price: {
          currency: 'USD',
          currentPrice: 150,
          discounted: false,
        },
        measurement: '89 1/2x15 3/4x39 5/8 "',
        typeName: 'Laundry combination',
        image:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__0901551_pe782715_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__1237313_pe917915_s5.jpg',
        imageAlt: 'BOAXEL Laundry combination, white, 89 1/2x15 3/4x39 5/8 "',
        url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-s89386485/',
      },
    ],
  },
  {
    id: 's79305098',
    name: 'JONAXEL',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: true,
    },
    measurement: '19 5/8x20 1/8x27 1/2 "',
    typeName: 'Storage combination',
    image:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0736848_pe740768_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0736847_pe740767_s5.jpg',
    imageAlt: 'JONAXEL Storage combination, white, 19 5/8x20 1/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/jonaxel-storage-combination-white-s79305098/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelving units',
        key: '20804',
      },
    ],
    variants: [],
  },
  {
    id: 's99548864',
    name: 'BOAXEL',
    price: {
      currency: 'USD',
      currentPrice: 164,
      discounted: false,
    },
    measurement: '64 7/8x15 3/4x79 "',
    typeName: 'Laundry combination',
    image:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-anthracite__1259863_pe926820_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-anthracite__1259860_pe926819_s5.jpg',
    imageAlt: 'BOAXEL Laundry combination, anthracite, 64 7/8x15 3/4x79 "',
    url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-anthracite-s99548864/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Laundry',
        key: 'ba003',
      },
      {
        name: 'Drying racks',
        key: '20602',
      },
    ],
    variants: [
      {
        id: 's69332399',
        name: 'BOAXEL',
        price: {
          currency: 'USD',
          currentPrice: 164,
          discounted: false,
        },
        measurement: '64 7/8x15 3/4x79 "',
        typeName: 'Laundry combination',
        image:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__0802035_pe770084_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__0802152_pe770123_s5.jpg',
        imageAlt: 'BOAXEL Laundry combination, white, 64 7/8x15 3/4x79 "',
        url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-s69332399/',
      },
    ],
  },
  {
    id: 's99297144',
    name: 'JONAXEL',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: false,
    },
    measurement: '19 5/8x20 1/8x27 1/2 "',
    typeName: 'Storage combination',
    image:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0703702_pe732304_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0703700_pe732256_s5.jpg',
    imageAlt: 'JONAXEL Storage combination, white, 19 5/8x20 1/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/jonaxel-storage-combination-white-s99297144/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Bathroom storage',
        key: 'ba002',
      },
      {
        name: 'Bathroom shelving units',
        key: '20804',
      },
    ],
    variants: [],
  },
  {
    id: 's59386482',
    name: 'BOAXEL',
    price: {
      currency: 'USD',
      currentPrice: 178,
      discounted: false,
    },
    measurement: '64 7/8x15 3/4x79 "',
    typeName: 'Laundry combination',
    image:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__0898309_pe782505_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white__1237308_pe917910_s5.jpg',
    imageAlt: 'BOAXEL Laundry combination, white, 64 7/8x15 3/4x79 "',
    url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-s59386482/',
    categoryPath: [
      {
        name: 'Bathroom',
        key: 'ba001',
      },
      {
        name: 'Laundry',
        key: 'ba003',
      },
      {
        name: 'Drying racks',
        key: '20602',
      },
    ],
    variants: [
      {
        id: 's89332402',
        name: 'BOAXEL',
        price: {
          currency: 'USD',
          currentPrice: 178,
          discounted: false,
        },
        measurement: '64 7/8x15 3/4x79 "',
        typeName: 'Laundry combination',
        image:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white-metal__0802036_pe770110_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/boaxel-laundry-combination-white-metal__0802153_pe770125_s5.jpg',
        imageAlt: 'BOAXEL Laundry combination, white/metal, 64 7/8x15 3/4x79 "',
        url: 'https://www.ikea.com/us/en/p/boaxel-laundry-combination-white-metal-s89332402/',
      },
    ],
  },
  {
    id: 's09297657',
    name: 'JONAXEL',
    price: {
      currency: 'USD',
      currentPrice: 149.96,
      discounted: true,
    },
    measurement: '39x20 1/8x68 1/8 "',
    typeName: 'Wardrobe combination',
    image:
      'https://www.ikea.com/us/en/images/products/jonaxel-wardrobe-combination-white__0703635_pe732230_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jonaxel-wardrobe-combination-white__1240488_pe919384_s5.jpg',
    imageAlt: 'JONAXEL Wardrobe combination, white, 39x20 1/8x68 1/8 "',
    url: 'https://www.ikea.com/us/en/p/jonaxel-wardrobe-combination-white-s09297657/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Open wardrobes',
        key: '43634',
      },
    ],
    variants: [],
  },
  {
    id: 's49311492',
    name: 'JONAXEL',
    price: {
      currency: 'USD',
      currentPrice: 34.99,
      discounted: true,
    },
    measurement: '19 5/8x20 1/8x41 "',
    typeName: 'Wardrobe combination',
    image:
      'https://www.ikea.com/us/en/images/products/jonaxel-wardrobe-combination-white__0754738_pe748072_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jonaxel-wardrobe-combination-white__1240487_pe919382_s5.jpg',
    imageAlt: 'JONAXEL Wardrobe combination, white, 19 5/8x20 1/8x41 "',
    url: 'https://www.ikea.com/us/en/p/jonaxel-wardrobe-combination-white-s49311492/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Armoires & wardrobes',
        key: '19053',
      },
      {
        name: 'Open wardrobes',
        key: '43634',
      },
    ],
    variants: [],
  },
  {
    id: 's59297141',
    name: 'JONAXEL',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '9 7/8x20 1/8x27 1/2 "',
    typeName: 'Storage combination',
    image:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0703661_pe732239_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jonaxel-storage-combination-white__0703659_pe732279_s5.jpg',
    imageAlt: 'JONAXEL Storage combination, white, 9 7/8x20 1/8x27 1/2 "',
    url: 'https://www.ikea.com/us/en/p/jonaxel-storage-combination-white-s59297141/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Shelving furniture',
        key: 'st002',
      },
      {
        name: 'Pantry shelving',
        key: '16200',
      },
    ],
    variants: [],
  },
  {
    id: '40391657',
    name: 'TORNVIKEN',
    price: {
      currency: 'USD',
      currentPrice: 399.99,
      discounted: false,
    },
    measurement: '49 5/8x30 3/8 "',
    typeName: 'Kitchen island',
    image:
      'https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-off-white-oak__0736817_pe740760_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-off-white-oak__0870928_pe684550_s5.jpg',
    imageAlt: 'TORNVIKEN Kitchen island, off-white/oak, 49 5/8x30 3/8 "',
    url: 'https://www.ikea.com/us/en/p/tornviken-kitchen-island-off-white-oak-40391657/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [
      {
        id: '00393371',
        name: 'TORNVIKEN',
        price: {
          currency: 'USD',
          currentPrice: 299.99,
          discounted: false,
        },
        measurement: '28 3/8x20 1/2 "',
        typeName: 'Kitchen island',
        image:
          'https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-off-white-oak__0736819_pe740765_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-off-white-oak__0870472_pe684554_s5.jpg',
        imageAlt: 'TORNVIKEN Kitchen island, off-white/oak, 28 3/8x20 1/2 "',
        url: 'https://www.ikea.com/us/en/p/tornviken-kitchen-island-off-white-oak-00393371/',
      },
      {
        id: '80393372',
        name: 'TORNVIKEN',
        price: {
          currency: 'USD',
          currentPrice: 399.99,
          discounted: false,
        },
        measurement: '49 5/8x30 3/8 "',
        typeName: 'Kitchen island',
        image:
          'https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-gray-oak__0736816_pe740759_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-gray-oak__1005422_pe825386_s5.jpg',
        imageAlt: 'TORNVIKEN Kitchen island, gray/oak, 49 5/8x30 3/8 "',
        url: 'https://www.ikea.com/us/en/p/tornviken-kitchen-island-gray-oak-80393372/',
      },
    ],
  },
  {
    id: '20359154',
    name: 'VADHOLMA',
    price: {
      currency: 'USD',
      currentPrice: 499.99,
      discounted: true,
    },
    measurement: '49 5/8x31 1/8x35 3/8 "',
    typeName: 'Kitchen island',
    image:
      'https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-black-oak__0736820_pe740762_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-black-oak__0870764_pe680792_s5.jpg',
    imageAlt: 'VADHOLMA Kitchen island, black/oak, 49 5/8x31 1/8x35 3/8 "',
    url: 'https://www.ikea.com/us/en/p/vadholma-kitchen-island-black-oak-20359154/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [],
  },
  {
    id: '20580847',
    name: 'NISSAFORS',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '19 7/8x11 3/4x32 5/8 "',
    typeName: 'Utility cart',
    image:
      'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-yellow__1257459_pe925836_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-yellow__1257478_pe925842_s5.jpg',
    imageAlt: 'NISSAFORS Utility cart, yellow, 19 7/8x11 3/4x32 5/8 "',
    url: 'https://www.ikea.com/us/en/p/nissafors-utility-cart-yellow-20580847/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [
      {
        id: '90531957',
        name: 'NISSAFORS',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '19 7/8x11 3/4x32 5/8 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-pale-green__1095850_pe864061_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-pale-green__1134480_pe878794_s5.jpg',
        imageAlt: 'NISSAFORS Utility cart, pale green, 19 7/8x11 3/4x32 5/8 "',
        url: 'https://www.ikea.com/us/en/p/nissafors-utility-cart-pale-green-90531957/',
      },
      {
        id: '20399777',
        name: 'NISSAFORS',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '19 7/8x11 3/4x32 5/8 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-black__0672522_pe716744_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-black__0720606_pe732685_s5.jpg',
        imageAlt: 'NISSAFORS Utility cart, black, 19 7/8x11 3/4x32 5/8 "',
        url: 'https://www.ikea.com/us/en/p/nissafors-utility-cart-black-20399777/',
      },
      {
        id: '40465733',
        name: 'NISSAFORS',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: true,
        },
        measurement: '19 7/8x11 3/4x32 5/8 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-white__0914715_pe784257_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-white__0914716_pe784258_s5.jpg',
        imageAlt: 'NISSAFORS Utility cart, white, 19 7/8x11 3/4x32 5/8 "',
        url: 'https://www.ikea.com/us/en/p/nissafors-utility-cart-white-40465733/',
      },
      {
        id: '40585801',
        name: 'NISSAFORS',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: '19 7/8x11 3/4x32 5/8 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-beige__1264622_pe927346_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nissafors-utility-cart-beige__1264618_pe927344_s5.jpg',
        imageAlt: 'NISSAFORS Utility cart, beige, 19 7/8x11 3/4x32 5/8 "',
        url: 'https://www.ikea.com/us/en/p/nissafors-utility-cart-beige-40585801/',
      },
    ],
  },
  {
    id: '80486724',
    name: 'FÖRHÖJA',
    price: {
      currency: 'USD',
      currentPrice: 149.99,
      discounted: false,
    },
    measurement: '39 3/8x16 7/8 "',
    typeName: 'Kitchen cart',
    image:
      'https://www.ikea.com/us/en/images/products/foerhoeja-kitchen-cart-birch-white__1057905_pe849059_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/foerhoeja-kitchen-cart-birch-white__1057906_pe849062_s5.jpg',
    imageAlt: 'FÖRHÖJA Kitchen cart, birch/white, 39 3/8x16 7/8 "',
    url: 'https://www.ikea.com/us/en/p/foerhoeja-kitchen-cart-birch-white-80486724/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [],
  },
  {
    id: '60333850',
    name: 'BROR',
    price: {
      currency: 'USD',
      currentPrice: 149,
      discounted: true,
    },
    measurement: '33 1/2x21 5/8 "',
    typeName: 'Utility cart',
    image:
      'https://www.ikea.com/us/en/images/products/bror-utility-cart-black-pine-plywood__0636685_pe697973_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bror-utility-cart-black-pine-plywood__1170620_ph182949_s5.jpg',
    imageAlt: 'BROR Utility cart, black/pine plywood, 33 1/2x21 5/8 "',
    url: 'https://www.ikea.com/us/en/p/bror-utility-cart-black-pine-plywood-60333850/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Shelving furniture',
        key: 'st002',
      },
      {
        name: 'Storage shelves & units',
        key: '10397',
      },
    ],
    variants: [
      {
        id: '80547384',
        name: 'BROR',
        price: {
          currency: 'USD',
          currentPrice: 149,
          discounted: true,
        },
        measurement: '33 1/2x21 5/8 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/bror-utility-cart-gray-green-pine-plywood__1197454_pe903542_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bror-utility-cart-gray-green-pine-plywood__1203070_pe906169_s5.jpg',
        imageAlt: 'BROR Utility cart, gray-green/pine plywood, 33 1/2x21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/bror-utility-cart-gray-green-pine-plywood-80547384/',
      },
    ],
  },
  {
    id: '60399412',
    name: 'RIMFORSA',
    price: {
      currency: 'USD',
      currentPrice: 699,
      discounted: false,
    },
    measurement: '47 1/4x25 5/8x36 1/4 "',
    typeName: 'Work bench',
    image:
      'https://www.ikea.com/us/en/images/products/rimforsa-work-bench-stainless-steel-bamboo__0660541_pe711112_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rimforsa-work-bench-stainless-steel-bamboo__0871081_pe711153_s5.jpg',
    imageAlt:
      'RIMFORSA Work bench, stainless steel/bamboo, 47 1/4x25 5/8x36 1/4 "',
    url: 'https://www.ikea.com/us/en/p/rimforsa-work-bench-stainless-steel-bamboo-60399412/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [],
  },
  {
    id: '20382932',
    name: 'RÅSKOG',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '13 3/4x17 3/4x30 3/4 "',
    typeName: 'Utility cart',
    image:
      'https://www.ikea.com/us/en/images/products/raskog-utility-cart-white__0503386_pe632627_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/raskog-utility-cart-white__1134462_pe878783_s5.jpg',
    imageAlt: 'RÅSKOG Utility cart, white, 13 3/4x17 3/4x30 3/4 "',
    url: 'https://www.ikea.com/us/en/p/raskog-utility-cart-white-20382932/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [
      {
        id: '50496649',
        name: 'RÅSKOG',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '13 3/4x17 3/4x30 3/4 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/raskog-utility-cart-yellow__1011226_pe828415_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/raskog-utility-cart-yellow__1102475_pe867000_s5.jpg',
        imageAlt: 'RÅSKOG Utility cart, yellow, 13 3/4x17 3/4x30 3/4 "',
        url: 'https://www.ikea.com/us/en/p/raskog-utility-cart-yellow-50496649/',
      },
      {
        id: '90333976',
        name: 'RÅSKOG',
        price: {
          currency: 'USD',
          currentPrice: 39.99,
          discounted: false,
        },
        measurement: '13 3/4x17 3/4x30 3/4 "',
        typeName: 'Utility cart',
        image:
          'https://www.ikea.com/us/en/images/products/raskog-utility-cart-black__0736869_pe740783_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/raskog-utility-cart-black__1116258_pe872438_s5.jpg',
        imageAlt: 'RÅSKOG Utility cart, black, 13 3/4x17 3/4x30 3/4 "',
        url: 'https://www.ikea.com/us/en/p/raskog-utility-cart-black-90333976/',
      },
    ],
  },
  {
    id: '00471222',
    name: 'VESKEN',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '21 1/4x7 1/8x28 "',
    typeName: 'Cart',
    image:
      'https://www.ikea.com/us/en/images/products/vesken-cart-white__0832009_pe777548_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vesken-cart-white__0832010_pe777549_s5.jpg',
    imageAlt: 'VESKEN Cart, white, 21 1/4x7 1/8x28 "',
    url: 'https://www.ikea.com/us/en/p/vesken-cart-white-00471222/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [
      {
        id: '60471224',
        name: 'VESKEN',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '21 1/4x7 1/8x28 "',
        typeName: 'Cart',
        image:
          'https://www.ikea.com/us/en/images/products/vesken-cart-black__0832005_pe777545_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vesken-cart-black__0832006_pe777546_s5.jpg',
        imageAlt: 'VESKEN Cart, black, 21 1/4x7 1/8x28 "',
        url: 'https://www.ikea.com/us/en/p/vesken-cart-black-60471224/',
      },
    ],
  },
  {
    id: '40366115',
    name: 'VADHOLMA',
    price: {
      currency: 'USD',
      currentPrice: 399.99,
      discounted: false,
    },
    measurement: '31 1/8x24 5/8x35 3/8 "',
    typeName: 'Kitchen island',
    image:
      'https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-black-oak__0736821_pe740763_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-black-oak__0870771_pe683519_s5.jpg',
    imageAlt: 'VADHOLMA Kitchen island, black/oak, 31 1/8x24 5/8x35 3/8 "',
    url: 'https://www.ikea.com/us/en/p/vadholma-kitchen-island-black-oak-40366115/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [],
  },
  {
    id: 's59276228',
    name: 'VADHOLMA',
    price: {
      currency: 'USD',
      currentPrice: 599.99,
      discounted: true,
    },
    measurement: '49 5/8x31 1/8x76 "',
    typeName: 'Kitchen island with rack',
    image:
      'https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-with-rack-black-oak__0605057_pe681596_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vadholma-kitchen-island-with-rack-black-oak__0870713_pe683472_s5.jpg',
    imageAlt:
      'VADHOLMA Kitchen island with rack, black/oak, 49 5/8x31 1/8x76 "',
    url: 'https://www.ikea.com/us/en/p/vadholma-kitchen-island-with-rack-black-oak-s59276228/',
    categoryPath: [
      {
        name: 'Furniture',
        key: 'fu001',
      },
      {
        name: 'Utility Carts, Rolling Carts & Storage Carts',
        key: 'fu005',
      },
      {
        name: 'Kitchen islands & carts',
        key: '10471',
      },
    ],
    variants: [],
  },
  {
    id: '80233430',
    name: 'APTITLIG',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '17 ¾x11 "',
    typeName: 'Cutting board',
    image:
      'https://www.ikea.com/us/en/images/products/aptitlig-cutting-board-bamboo__0711719_pe728446_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/aptitlig-cutting-board-bamboo__0896405_pe609820_s5.jpg',
    imageAlt: 'APTITLIG Cutting board, bamboo, 17 ¾x11 "',
    url: 'https://www.ikea.com/us/en/p/aptitlig-cutting-board-bamboo-80233430/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [
      {
        id: '60233426',
        name: 'APTITLIG',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '9 ½x6 "',
        typeName: 'Cutting board',
        image:
          'https://www.ikea.com/us/en/images/products/aptitlig-cutting-board-bamboo__0711718_pe728464_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/aptitlig-cutting-board-bamboo__0896501_pe609823_s5.jpg',
        imageAlt: 'APTITLIG Cutting board, bamboo, 9 ½x6 "',
        url: 'https://www.ikea.com/us/en/p/aptitlig-cutting-board-bamboo-60233426/',
      },
    ],
  },
  {
    id: '00309829',
    name: 'LÄMPLIG',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '18x20 ¾ "',
    typeName: 'Cutting board',
    image:
      'https://www.ikea.com/us/en/images/products/laemplig-cutting-board-bamboo__0711757_pe728449_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/laemplig-cutting-board-bamboo__0354871_pe547849_s5.jpg',
    imageAlt: 'LÄMPLIG Cutting board, bamboo, 18x20 ¾ "',
    url: 'https://www.ikea.com/us/en/p/laemplig-cutting-board-bamboo-00309829/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [],
  },
  {
    id: '10346831',
    name: 'JÄMFÖRA',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Knife block with 3 knives',
    image:
      'https://www.ikea.com/us/en/images/products/jaemfoera-knife-block-with-3-knives-black__0490344_pe624433_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jaemfoera-knife-block-with-3-knives-black__0895828_pe624437_s5.jpg',
    imageAlt: 'JÄMFÖRA Knife block with 3 knives, black',
    url: 'https://www.ikea.com/us/en/p/jaemfoera-knife-block-with-3-knives-black-10346831/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Kitchen knives',
        key: '15946',
      },
    ],
    variants: [],
  },
  {
    id: '20557168',
    name: 'SMÅÄTA',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '11x8 ¾ "',
    typeName: 'Cutting board',
    image:
      'https://www.ikea.com/us/en/images/products/smaaeta-cutting-board-acacia__1196353_pe902939_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/smaaeta-cutting-board-acacia__1196351_pe902941_s5.jpg',
    imageAlt: 'SMÅÄTA Cutting board, acacia, 11x8 ¾ "',
    url: 'https://www.ikea.com/us/en/p/smaaeta-cutting-board-acacia-20557168/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [
      {
        id: '80320347',
        name: 'SMÅÄTA',
        price: {
          currency: 'USD',
          currentPrice: 37.99,
          discounted: false,
        },
        measurement: '28 ¼x11 "',
        typeName: 'Cutting board',
        image:
          'https://www.ikea.com/us/en/images/products/smaaeta-cutting-board-acacia__0711772_pe728445_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/smaaeta-cutting-board-acacia__0947276_ph174035_s5.jpg',
        imageAlt: 'SMÅÄTA Cutting board, acacia, 28 ¼x11 "',
        url: 'https://www.ikea.com/us/en/p/smaaeta-cutting-board-acacia-80320347/',
      },
    ],
  },
  {
    id: '00233429',
    name: 'APTITLIG',
    price: {
      currency: 'USD',
      currentPrice: 21.99,
      discounted: false,
    },
    measurement: '17 ¾x14 ¼ "',
    typeName: 'Butcher block',
    image:
      'https://www.ikea.com/us/en/images/products/aptitlig-butcher-block-bamboo__0711717_pe728444_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/aptitlig-butcher-block-bamboo__0896166_pe609817_s5.jpg',
    imageAlt: 'APTITLIG Butcher block, bamboo, 17 ¾x14 ¼ "',
    url: 'https://www.ikea.com/us/en/p/aptitlig-butcher-block-bamboo-00233429/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [],
  },
  {
    id: '40578358',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 49.99,
      discounted: false,
    },
    measurement: '',
    typeName: '5-piece knife set',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-5-piece-knife-set-stainless-steel__1173121_pe893807_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-5-piece-knife-set-stainless-steel__1173118_pe893810_s5.jpg',
    imageAlt: 'IKEA 365+ 5-piece knife set, stainless steel',
    url: 'https://www.ikea.com/us/en/p/ikea-365-5-piece-knife-set-stainless-steel-40578358/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Kitchen knives',
        key: '15946',
      },
    ],
    variants: [],
  },
  {
    id: '10578109',
    name: 'FÖRDUBBLA',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '',
    typeName: '2-piece knife set',
    image:
      'https://www.ikea.com/us/en/images/products/foerdubbla-2-piece-knife-set-gray__0710422_pe727545_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/foerdubbla-2-piece-knife-set-gray__0895514_pe712868_s5.jpg',
    imageAlt: 'FÖRDUBBLA 2-piece knife set, gray',
    url: 'https://www.ikea.com/us/en/p/foerdubbla-2-piece-knife-set-gray-10578109/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Kitchen knives',
        key: '15946',
      },
    ],
    variants: [],
  },
  {
    id: '20578359',
    name: 'LEGITIM',
    price: {
      currency: 'USD',
      currentPrice: 2.49,
      discounted: false,
    },
    measurement: '',
    typeName: 'Cutting board, set of 2',
    image:
      'https://www.ikea.com/us/en/images/products/legitim-cutting-board-set-of-2-white__1214931_pe911783_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/legitim-cutting-board-set-of-2-white__1214928_pe911782_s5.jpg',
    imageAlt: 'LEGITIM Cutting board, set of 2, white',
    url: 'https://www.ikea.com/us/en/p/legitim-cutting-board-set-of-2-white-20578359/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [],
  },
  {
    id: '30512810',
    name: 'STOLTHET',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '13 ¾x8 ¾ "',
    typeName: 'Cutting board',
    image:
      'https://www.ikea.com/us/en/images/products/stolthet-cutting-board-bamboo__1035110_pe837987_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/stolthet-cutting-board-bamboo__1035111_pe837988_s5.jpg',
    imageAlt: 'STOLTHET Cutting board, bamboo, 13 ¾x8 ¾ "',
    url: 'https://www.ikea.com/us/en/p/stolthet-cutting-board-bamboo-30512810/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [],
  },
  {
    id: '70233421',
    name: 'PROPPMÄTT',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '15x10 ¾ "',
    typeName: 'Cutting board',
    image:
      'https://www.ikea.com/us/en/images/products/proppmaett-cutting-board-beech__0711768_pe728460_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/proppmaett-cutting-board-beech__0896455_pe643789_s5.jpg',
    imageAlt: 'PROPPMÄTT Cutting board, beech, 15x10 ¾ "',
    url: 'https://www.ikea.com/us/en/p/proppmaett-cutting-board-beech-70233421/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Knives & cutting boards',
        key: '15934',
      },
      {
        name: 'Cutting boards',
        key: '15947',
      },
    ],
    variants: [
      {
        id: '30233418',
        name: 'PROPPMÄTT',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '11 ¾x6 "',
        typeName: 'Cutting board',
        image:
          'https://www.ikea.com/us/en/images/products/proppmaett-cutting-board-beech__0711760_pe728452_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/proppmaett-cutting-board-beech__0277743_pe417090_s5.jpg',
        imageAlt: 'PROPPMÄTT Cutting board, beech, 11 ¾x6 "',
        url: 'https://www.ikea.com/us/en/p/proppmaett-cutting-board-beech-30233418/',
      },
    ],
  },
  {
    id: 's29563117',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '101 oz',
    typeName: 'Food container with lid',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-large-rectangular-stainless-steel-plastic__1301435_pe937428_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-large-rectangular-stainless-steel-plastic__1301433_pe937427_s5.jpg',
    imageAlt:
      'IKEA 365+ Food container with lid, large rectangular/stainless steel plastic, 101 oz',
    url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-large-rectangular-stainless-steel-plastic-s29563117/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [
      {
        id: 's39567110',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 11.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-stainless-steel-bamboo__1028766_pe835514_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-stainless-steel-bamboo__1028767_pe835515_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular stainless steel/bamboo, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-stainless-steel-bamboo-s39567110/',
      },
      {
        id: 's79567009',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 8.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-bamboo__0594317_pe675640_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-bamboo__1094444_pe863437_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular glass/bamboo, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-glass-bamboo-s79567009/',
      },
      {
        id: 's79567071',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 11.99,
          discounted: false,
        },
        measurement: '61 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-bamboo__0594327_pe675652_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-bamboo__1094468_pe863453_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular glass/bamboo, 61 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-glass-bamboo-s79567071/',
      },
      {
        id: 's09276768',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 5.49,
          discounted: true,
        },
        measurement: '34 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-silicone__0610756_pe685094_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-silicone__0896852_pe673629_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular glass/silicone, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-glass-silicone-s09276768/',
      },
      {
        id: 's09276810',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 8.49,
          discounted: true,
        },
        measurement: '61 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-silicone__0610780_pe685098_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-glass-silicone__1094471_pe863457_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular glass/silicone, 61 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-glass-silicone-s09276810/',
      },
      {
        id: 's19269079',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-plastic__0594323_pe675642_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-plastic__0896912_pe694999_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular/plastic, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-plastic-s19269079/',
      },
    ],
  },
  {
    id: 's19567168',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '57 oz',
    typeName: 'Jar with lid',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-bamboo__0610739_pe685087_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-bamboo__0669134_ph153794_s5.jpg',
    imageAlt: 'IKEA 365+ Jar with lid, glass/bamboo, 57 oz',
    url: 'https://www.ikea.com/us/en/p/ikea-365-jar-with-lid-glass-bamboo-s19567168/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Jars & tins',
        key: '15950',
      },
    ],
    variants: [
      {
        id: 's79567170',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 12.99,
          discounted: false,
        },
        measurement: '112 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-bamboo__0650353_pe706148_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-bamboo__0669147_ph153798_s5.jpg',
        imageAlt: 'IKEA 365+ Jar with lid, glass/bamboo, 112 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-jar-with-lid-glass-bamboo-s79567170/',
      },
      {
        id: 's59567171',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 8.99,
          discounted: false,
        },
        measurement: '112 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-plastic__0650354_pe706149_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-plastic__0668665_ph153799_s5.jpg',
        imageAlt: 'IKEA 365+ Jar with lid, glass/plastic, 112 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-jar-with-lid-glass-plastic-s59567171/',
      },
      {
        id: 's99567169',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '57 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-plastic__0650355_pe706150_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass-plastic__0668665_ph153799_s5.jpg',
        imageAlt: 'IKEA 365+ Jar with lid, glass/plastic, 57 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-jar-with-lid-glass-plastic-s99567169/',
      },
      {
        id: 's29567257',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '112 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass__0610740_pe685088_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass__1163396_pe890170_s5.jpg',
        imageAlt: 'IKEA 365+ Jar with lid, glass, 112 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-jar-with-lid-glass-s29567257/',
      },
      {
        id: 's49567256',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: false,
        },
        measurement: '57 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass__0610609_pe685052_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-jar-with-lid-glass__0668665_ph153799_s5.jpg',
        imageAlt: 'IKEA 365+ Jar with lid, glass, 57 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-jar-with-lid-glass-s49567256/',
      },
    ],
  },
  {
    id: 's69563120',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '20 oz',
    typeName: 'Food container with lid',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-stainless-steel-plastic__1301438_pe937431_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-stainless-steel-plastic__1301436_pe937430_s5.jpg',
    imageAlt:
      'IKEA 365+ Food container with lid, square stainless steel/plastic, 20 oz',
    url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-stainless-steel-plastic-s69563120/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [
      {
        id: 's89563124',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '20 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-stainless-steel-bamboo__1301439_pe937433_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-stainless-steel-bamboo__1339265_pe948424_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, square stainless steel/bamboo, 20 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-stainless-steel-bamboo-s89563124/',
      },
      {
        id: 's89567117',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '20 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-bamboo__0594411_pe675728_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-bamboo__1094513_pe863489_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, square glass/bamboo, 20 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-glass-bamboo-s89567117/',
      },
      {
        id: 's99567112',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 8.99,
          discounted: false,
        },
        measurement: '41 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-bamboo__0594325_pe675647_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-bamboo__1094450_pe863442_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, square glass/bamboo, 41 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-glass-bamboo-s99567112/',
      },
      {
        id: 's09567116',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '47 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-plastic__0594326_pe675651_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-plastic__0897181_pe695008_s5.jpg',
        imageAlt: 'IKEA 365+ Food container with lid, square/plastic, 47 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-plastic-s09567116/',
      },
      {
        id: 's09567121',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 5.49,
          discounted: false,
        },
        measurement: '25 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-plastic-silicone__0610579_pe685028_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-plastic-silicone__1094539_pe863504_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, square plastic/silicone, 25 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-plastic-silicone-s09567121/',
      },
      {
        id: 's19276796',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: true,
        },
        measurement: '20 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-silicone__0610542_pe684990_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-silicone__1094515_pe863491_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, square glass/silicone, 20 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-square-glass-silicone-s19276796/',
      },
    ],
  },
  {
    id: '60580317',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '101 oz',
    typeName: 'Food container',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-large-rectangular-stainless-steel__1301428_pe937421_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-large-rectangular-stainless-steel__1339267_pe948425_s5.jpg',
    imageAlt:
      'IKEA 365+ Food container, large rectangular/stainless steel, 101 oz',
    url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-large-rectangular-stainless-steel-60580317/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [
      {
        id: '70577932',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-plastic__1081948_pe858459_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-rectangular-plastic__1081946_pe858460_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, rectangular/plastic, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-rectangular-plastic-70577932/',
      },
      {
        id: '80577941',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Food container',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-stainless-steel__1015810_pe835953_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-stainless-steel__1015800_pe835948_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container, rectangular/stainless steel, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-rectangular-stainless-steel-80577941/',
      },
      {
        id: '10393064',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '11 qt',
        typeName: 'Food container',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-large-rectangular-plastic__0711418_pe728234_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-large-rectangular-plastic__0732738_ph155594_s5.jpg',
        imageAlt: 'IKEA 365+ Food container, large rectangular/plastic, 11 qt',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-large-rectangular-plastic-10393064/',
      },
      {
        id: '40359148',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Food container',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-plastic__0711422_pe728238_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-plastic__0896983_pe694664_s5.jpg',
        imageAlt: 'IKEA 365+ Food container, rectangular/plastic, 34 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-rectangular-plastic-40359148/',
      },
      {
        id: '60359152',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '68 oz',
        typeName: 'Food container',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-plastic__0711428_pe728244_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-plastic__1006140_pe825723_s5.jpg',
        imageAlt: 'IKEA 365+ Food container, rectangular/plastic, 68 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-rectangular-plastic-60359152/',
      },
      {
        id: '60393066',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '4 qt',
        typeName: 'Food container',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-rectangular-plastic__0711429_pe728245_s5.jpg',
        imageAlt: 'IKEA 365+ Food container, rectangular/plastic, 4 qt',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-rectangular-plastic-60393066/',
      },
    ],
  },
  {
    id: '10579892',
    name: 'KORKEN',
    price: {
      currency: 'USD',
      currentPrice: 5.49,
      discounted: false,
    },
    measurement: '4 oz',
    typeName: 'Jar with lid',
    image:
      'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-black__1301412_pe937404_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-black__1339906_pe948462_s5.jpg',
    imageAlt: 'KORKEN Jar with lid, clear glass/black, 4 oz',
    url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-black-10579892/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Jars & tins',
        key: '15950',
      },
    ],
    variants: [
      {
        id: '50580186',
        name: 'KORKEN',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '34 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-check-pattern-gray-blue__1215066_pe911820_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-check-pattern-gray-blue__1291406_pe934889_s5.jpg',
        imageAlt:
          'KORKEN Jar with lid, clear glass/check pattern gray-blue, 34 oz',
        url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-check-pattern-gray-blue-50580186/',
      },
      {
        id: '00579897',
        name: 'KORKEN',
        price: {
          currency: 'USD',
          currentPrice: 2.49,
          discounted: false,
        },
        measurement: '17 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-black__1301409_pe937402_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-black__1339889_pe948461_s5.jpg',
        imageAlt: 'KORKEN Jar with lid, clear glass/black, 17 oz',
        url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-black-00579897/',
      },
      {
        id: '30580187',
        name: 'KORKEN',
        price: {
          currency: 'USD',
          currentPrice: 3.49,
          discounted: true,
        },
        measurement: '4 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-check-pattern-black__1215074_pe921672_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass-check-pattern-black__1291404_pe934888_s5.jpg',
        imageAlt: 'KORKEN Jar with lid, clear glass/check pattern black, 4 oz',
        url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-check-pattern-black-30580187/',
      },
      {
        id: '20227984',
        name: 'KORKEN',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: '17 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0713740_pe729739_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0468760_pe611677_s5.jpg',
        imageAlt: 'KORKEN Jar with lid, clear glass, 17 oz',
        url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-20227984/',
      },
      {
        id: '40378571',
        name: 'KORKEN',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '4 oz',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0712810_pe729071_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0897362_pe608832_s5.jpg',
        imageAlt: 'KORKEN Jar with lid, clear glass, 4 oz',
        url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-40378571/',
      },
      {
        id: '50227987',
        name: 'KORKEN',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '2.1 qt',
        typeName: 'Jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0711112_pe727968_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0897427_pe611657_s5.jpg',
        imageAlt: 'KORKEN Jar with lid, clear glass, 2.1 qt',
        url: 'https://www.ikea.com/us/en/p/korken-jar-with-lid-clear-glass-50227987/',
      },
    ],
  },
  {
    id: '00581796',
    name: 'GULLRISMOTT',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '9.5 qt',
    typeName: 'Food storage bag',
    image:
      'https://www.ikea.com/us/en/images/products/gullrismott-food-storage-bag-for-potatoes__1301426_pe937419_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gullrismott-food-storage-bag-for-potatoes__1340151_pe948546_s5.jpg',
    imageAlt: 'GULLRISMOTT Food storage bag, for potatoes, 9.5 qt',
    url: 'https://www.ikea.com/us/en/p/gullrismott-food-storage-bag-for-potatoes-00581796/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [
      {
        id: '40581803',
        name: 'GULLRISMOTT',
        price: {
          currency: 'USD',
          currentPrice: 3.49,
          discounted: false,
        },
        measurement: '3.5 qt',
        typeName: 'Food storage bag',
        image:
          'https://www.ikea.com/us/en/images/products/gullrismott-food-storage-bag-for-dry-goods__1301424_pe937417_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/gullrismott-food-storage-bag-for-dry-goods__1340176_pe948542_s5.jpg',
        imageAlt: 'GULLRISMOTT Food storage bag, for dry goods, 3.5 qt',
        url: 'https://www.ikea.com/us/en/p/gullrismott-food-storage-bag-for-dry-goods-40581803/',
      },
    ],
  },
  {
    id: '40583091',
    name: 'KLIPPKAKTUS',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '13x4x3 "',
    typeName: 'Storage box for fridge',
    image:
      'https://www.ikea.com/us/en/images/products/klippkaktus-storage-box-for-fridge-clear__1243255_pe920526_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/klippkaktus-storage-box-for-fridge-clear__1275788_pe930673_s5.jpg',
    imageAlt: 'KLIPPKAKTUS Storage box for fridge, clear, 13x4x3 "',
    url: 'https://www.ikea.com/us/en/p/klippkaktus-storage-box-for-fridge-clear-40583091/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [
      {
        id: '20583092',
        name: 'KLIPPKAKTUS',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '13x6x6 "',
        typeName: 'Storage box for fridge',
        image:
          'https://www.ikea.com/us/en/images/products/klippkaktus-storage-box-for-fridge-clear__1243261_pe920530_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/klippkaktus-storage-box-for-fridge-clear__1303461_pe938390_s5.jpg',
        imageAlt: 'KLIPPKAKTUS Storage box for fridge, clear, 13x6x6 "',
        url: 'https://www.ikea.com/us/en/p/klippkaktus-storage-box-for-fridge-clear-20583092/',
      },
      {
        id: '60583090',
        name: 'KLIPPKAKTUS',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '13x4x6 "',
        typeName: 'Storage box for fridge',
        image:
          'https://www.ikea.com/us/en/images/products/klippkaktus-storage-box-for-fridge-clear__1243259_pe920528_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/klippkaktus-storage-box-for-fridge-clear__1275793_pe930678_s5.jpg',
        imageAlt: 'KLIPPKAKTUS Storage box for fridge, clear, 13x4x6 "',
        url: 'https://www.ikea.com/us/en/p/klippkaktus-storage-box-for-fridge-clear-60583090/',
      },
    ],
  },
  {
    id: 's39567148',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '20 oz',
    typeName: 'Food container with lid',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-plastic__0594409_pe675726_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-plastic__0897087_pe695014_s5.jpg',
    imageAlt: 'IKEA 365+ Food container with lid, round glass/plastic, 20 oz',
    url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-round-glass-plastic-s39567148/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [
      {
        id: 's59567147',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '20 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-bamboo__0594406_pe675723_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-bamboo__1094511_pe863487_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, round glass/bamboo, 20 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-round-glass-bamboo-s59567147/',
      },
      {
        id: 's69567123',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: false,
        },
        measurement: '14 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-bamboo__0594332_pe675657_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-bamboo__1094495_pe863476_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, round glass/bamboo, 14 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-round-glass-bamboo-s69567123/',
      },
      {
        id: 's39567167',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 2.49,
          discounted: false,
        },
        measurement: '25 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-plastic__0594414_pe675731_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-plastic__0896919_pe695016_s5.jpg',
        imageAlt: 'IKEA 365+ Food container with lid, round/plastic, 25 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-round-plastic-s39567167/',
      },
      {
        id: 's49567124',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '14 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-plastic__0594334_pe675659_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-plastic__0896775_pe695012_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, round glass/plastic, 14 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-round-glass-plastic-s49567124/',
      },
      {
        id: 's19567125',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '14 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-silicone__0610423_pe684948_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-round-glass-silicone__0897198_pe681627_s5.jpg',
        imageAlt:
          'IKEA 365+ Food container with lid, round glass/silicone, 14 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-round-glass-silicone-s19567125/',
      },
      {
        id: 's69567255',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 4.99,
          discounted: false,
        },
        measurement: '20 oz',
        typeName: 'Food container with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-glass__0650352_pe706134_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-glass__1094500_pe863481_s5.jpg',
        imageAlt: 'IKEA 365+ Food container with lid, glass, 20 oz',
        url: 'https://www.ikea.com/us/en/p/ikea-365-food-container-with-lid-glass-s69567255/',
      },
    ],
  },
  {
    id: '00581800',
    name: 'KANELMOTT',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Vegetable/fruit basket, set of 2',
    image:
      'https://www.ikea.com/us/en/images/products/kanelmott-vegetable-fruit-basket-set-of-2-bamboo__1301419_pe937412_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kanelmott-vegetable-fruit-basket-set-of-2-bamboo__1340238_pe948523_s5.jpg',
    imageAlt: 'KANELMOTT Vegetable/fruit basket, set of 2, bamboo',
    url: 'https://www.ikea.com/us/en/p/kanelmott-vegetable-fruit-basket-set-of-2-bamboo-00581800/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Food containers',
        key: '20606',
      },
    ],
    variants: [],
  },
  {
    id: '00578181',
    name: 'IKEA 365+',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '44 oz',
    typeName: 'Dry food jar with lid',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-365-dry-food-jar-with-lid-clear-white__0711434_pe728250_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-365-dry-food-jar-with-lid-clear-white__1288089_pe934095_s5.jpg',
    imageAlt: 'IKEA 365+ Dry food jar with lid, clear/white, 44 oz',
    url: 'https://www.ikea.com/us/en/p/ikea-365-dry-food-jar-with-lid-clear-white-00578181/',
    categoryPath: [
      {
        name: 'Kitchenware & tableware',
        key: 'kt001',
      },
      {
        name: 'Food storage & organizing',
        key: '15937',
      },
      {
        name: 'Jars & tins',
        key: '15950',
      },
    ],
    variants: [
      {
        id: '80578182',
        name: 'IKEA 365+',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: false,
        },
        measurement: '2 qt',
        typeName: 'Dry food jar with lid',
        image:
          'https://www.ikea.com/us/en/images/products/ikea-365-dry-food-jar-with-lid-clear-white__0711438_pe728254_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/ikea-365-dry-food-jar-with-lid-clear-white__1288125_pe934101_s5.jpg',
        imageAlt: 'IKEA 365+ Dry food jar with lid, clear/white, 2 qt',
        url: 'https://www.ikea.com/us/en/p/ikea-365-dry-food-jar-with-lid-clear-white-80578182/',
      },
    ],
  },
  {
    id: '80461276',
    name: 'LILLHAVET',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Multifunctional dish rack',
    image:
      'https://www.ikea.com/us/en/images/products/lillhavet-multifunctional-dish-rack-anthracite__1057050_pe848721_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/lillhavet-multifunctional-dish-rack-anthracite__1057177_pe848766_s5.jpg',
    imageAlt: 'LILLHAVET Multifunctional dish rack, anthracite',
    url: 'https://www.ikea.com/us/en/p/lillhavet-multifunctional-dish-rack-anthracite-80461276/',
    categoryPath: [
      {
        name: 'Kitchen & appliances',
        key: 'ka001',
      },
      {
        name: 'Kitchen systems',
        key: 'ka003',
      },
      {
        name: 'KNOXHULT modular kitchen',
        key: '48977',
      },
      {
        name: 'Accessories for KNOXHULT',
        key: '48981',
      },
    ],
    variants: [],
  },
  {
    id: '70565948',
    name: 'STÄMLING',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '19 "',
    typeName: 'Dish drainer',
    image:
      'https://www.ikea.com/us/en/images/products/staemling-dish-drainer-off-white__1274939_pe930497_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/staemling-dish-drainer-off-white__1274936_pe930496_s5.jpg',
    imageAlt: 'STÄMLING Dish drainer, off-white, 19 "',
    url: 'https://www.ikea.com/us/en/p/staemling-dish-drainer-off-white-70565948/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Dish rack & dish drainers',
        key: '700196',
      },
    ],
    variants: [],
  },
  {
    id: '60556685',
    name: 'SKOLÄST',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Sink container',
    image:
      'https://www.ikea.com/us/en/images/products/skolaest-sink-container-extendable__1197603_pe903622_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/skolaest-sink-container-extendable__1238805_pe918643_s5.jpg',
    imageAlt: 'SKOLÄST Sink container, extendable',
    url: 'https://www.ikea.com/us/en/p/skolaest-sink-container-extendable-60556685/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Sink accessories',
        key: '24262',
      },
    ],
    variants: [],
  },
  {
    id: '10564616',
    name: 'NÅLBLECKA',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '15x5 1/8x11 "',
    typeName: 'Kitchen countertop organizer',
    image:
      'https://www.ikea.com/us/en/images/products/nalblecka-kitchen-countertop-organizer-metal-bamboo__1215091_pe911832_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nalblecka-kitchen-countertop-organizer-metal-bamboo__1215089_pe911834_s5.jpg',
    imageAlt:
      'NÅLBLECKA Kitchen countertop organizer, metal/bamboo, 15x5 1/8x11 "',
    url: 'https://www.ikea.com/us/en/p/nalblecka-kitchen-countertop-organizer-metal-bamboo-10564616/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Sink accessories',
        key: '24262',
      },
    ],
    variants: [],
  },
  {
    id: '80531670',
    name: 'AVSTEG',
    price: {
      currency: 'USD',
      currentPrice: 1.79,
      discounted: true,
    },
    measurement: '5 "',
    typeName: 'Utensil holder',
    image:
      'https://www.ikea.com/us/en/images/products/avsteg-utensil-holder-white__0982023_pe815529_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/avsteg-utensil-holder-white__0995431_pe821732_s5.jpg',
    imageAlt: 'AVSTEG Utensil holder, white, 5 "',
    url: 'https://www.ikea.com/us/en/p/avsteg-utensil-holder-white-80531670/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Dish rack & dish drainers',
        key: '700196',
      },
    ],
    variants: [],
  },
  {
    id: '00430142',
    name: 'VÄLVÅRDAD',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '20 ½x13 ¾ "',
    typeName: 'Dish drainer',
    image:
      'https://www.ikea.com/us/en/images/products/vaelvardad-dish-drainer-beige-galvanized__0957077_pe804905_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/vaelvardad-dish-drainer-beige-galvanized__0957078_pe804906_s5.jpg',
    imageAlt: 'VÄLVÅRDAD Dish drainer, beige/galvanized, 20 ½x13 ¾ "',
    url: 'https://www.ikea.com/us/en/p/vaelvardad-dish-drainer-beige-galvanized-00430142/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Dish rack & dish drainers',
        key: '700196',
      },
    ],
    variants: [
      {
        id: '00473725',
        name: 'VÄLVÅRDAD',
        price: {
          currency: 'USD',
          currentPrice: 5.99,
          discounted: false,
        },
        measurement: '6x13 ¾ "',
        typeName: 'Dish drainer',
        image:
          'https://www.ikea.com/us/en/images/products/vaelvardad-dish-drainer-beige-galvanized__0957073_pe804901_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/vaelvardad-dish-drainer-beige-galvanized__0957074_pe804902_s5.jpg',
        imageAlt: 'VÄLVÅRDAD Dish drainer, beige/galvanized, 6x13 ¾ "',
        url: 'https://www.ikea.com/us/en/p/vaelvardad-dish-drainer-beige-galvanized-00473725/',
      },
    ],
  },
  {
    id: 's79323709',
    name: 'RINNIG',
    price: {
      currency: 'USD',
      currentPrice: 13.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Kitchen dish rack with drainer',
    image:
      'https://www.ikea.com/us/en/images/products/rinnig-kitchen-dish-rack-with-drainer__0772257_pe755915_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rinnig-kitchen-dish-rack-with-drainer__0897675_pe718613_s5.jpg',
    imageAlt: 'RINNIG Kitchen dish rack with drainer',
    url: 'https://www.ikea.com/us/en/p/rinnig-kitchen-dish-rack-with-drainer-s79323709/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Dish rack & dish drainers',
        key: '700196',
      },
    ],
    variants: [],
  },
  {
    id: '00451059',
    name: 'NYSKÖLJD',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '17 ¼x14 ¼ "',
    typeName: 'Dish drying mat',
    image:
      'https://www.ikea.com/us/en/images/products/nyskoeljd-dish-drying-mat-dark-gray__0722169_pe733496_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/nyskoeljd-dish-drying-mat-dark-gray__0897715_pe731591_s5.jpg',
    imageAlt: 'NYSKÖLJD Dish drying mat, dark gray, 17 ¼x14 ¼ "',
    url: 'https://www.ikea.com/us/en/p/nyskoeljd-dish-drying-mat-dark-gray-00451059/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Dish rack & dish drainers',
        key: '700196',
      },
    ],
    variants: [
      {
        id: '50387259',
        name: 'NYSKÖLJD',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '17 ¼x14 ¼ "',
        typeName: 'Dish drying mat',
        image:
          'https://www.ikea.com/us/en/images/products/nyskoeljd-dish-drying-mat-blue__0712862_pe729108_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/nyskoeljd-dish-drying-mat-blue__0897766_pe660823_s5.jpg',
        imageAlt: 'NYSKÖLJD Dish drying mat, blue, 17 ¼x14 ¼ "',
        url: 'https://www.ikea.com/us/en/p/nyskoeljd-dish-drying-mat-blue-50387259/',
      },
    ],
  },
  {
    id: '40476779',
    name: 'RINNIG',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: 'M',
    typeName: 'Cleaning gloves',
    image:
      'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-green__0930407_pe790749_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-green__0930408_pe790764_s5.jpg',
    imageAlt: 'RINNIG Cleaning gloves, green, M',
    url: 'https://www.ikea.com/us/en/p/rinnig-cleaning-gloves-green-40476779/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Cleaning accessories',
        key: '20609',
      },
    ],
    variants: [
      {
        id: '60476783',
        name: 'RINNIG',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: 'S',
        typeName: 'Cleaning gloves',
        image:
          'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-green__0930415_pe790757_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-green__0930416_pe790758_s5.jpg',
        imageAlt: 'RINNIG Cleaning gloves, green, S',
        url: 'https://www.ikea.com/us/en/p/rinnig-cleaning-gloves-green-60476783/',
      },
      {
        id: '10565852',
        name: 'RINNIG',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: 'M',
        typeName: 'Cleaning gloves',
        image:
          'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-bright-yellow-off-white__1267316_pe928459_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-bright-yellow-off-white__1267314_pe928458_s5.jpg',
        imageAlt: 'RINNIG Cleaning gloves, bright yellow/off-white, M',
        url: 'https://www.ikea.com/us/en/p/rinnig-cleaning-gloves-bright-yellow-off-white-10565852/',
      },
      {
        id: '70565854',
        name: 'RINNIG',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: 'S',
        typeName: 'Cleaning gloves',
        image:
          'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-bright-yellow-off-white__1267318_pe928461_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/rinnig-cleaning-gloves-bright-yellow-off-white__1267314_pe928458_s5.jpg',
        imageAlt: 'RINNIG Cleaning gloves, bright yellow/off-white, S',
        url: 'https://www.ikea.com/us/en/p/rinnig-cleaning-gloves-bright-yellow-off-white-70565854/',
      },
    ],
  },
  {
    id: '30407814',
    name: 'RINNIG',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Dish brush',
    image:
      'https://www.ikea.com/us/en/images/products/rinnig-dish-brush-gray__0666327_pe713521_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rinnig-dish-brush-gray__0897692_pe713522_s5.jpg',
    imageAlt: 'RINNIG Dish brush, gray',
    url: 'https://www.ikea.com/us/en/p/rinnig-dish-brush-gray-30407814/',
    categoryPath: [
      {
        name: 'Laundry & cleaning',
        key: 'lc001',
      },
      {
        name: 'Dishwashing accessories',
        key: '15938',
      },
      {
        name: 'Dish cloths & gloves',
        key: '700194',
      },
    ],
    variants: [
      {
        id: '90407811',
        name: 'RINNIG',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Dish brush',
        image:
          'https://www.ikea.com/us/en/images/products/rinnig-dish-brush-green__0666332_pe713523_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/rinnig-dish-brush-green__0897695_pe713524_s5.jpg',
        imageAlt: 'RINNIG Dish brush, green',
        url: 'https://www.ikea.com/us/en/p/rinnig-dish-brush-green-90407811/',
      },
      {
        id: '20565856',
        name: 'RINNIG',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: false,
        },
        measurement: '',
        typeName: 'Dish brush',
        image:
          'https://www.ikea.com/us/en/images/products/rinnig-dish-brush-bright-yellow-off-white__1267321_pe928463_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/rinnig-dish-brush-bright-yellow-off-white__1267320_pe928464_s5.jpg',
        imageAlt: 'RINNIG Dish brush, bright yellow/off-white',
        url: 'https://www.ikea.com/us/en/p/rinnig-dish-brush-bright-yellow-off-white-20565856/',
      },
    ],
  },
  {
    id: '20476346',
    name: 'RINNIG',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '18x24 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/rinnig-dish-towel-white-dark-gray-patterned__0813216_pe772338_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/rinnig-dish-towel-white-dark-gray-patterned__0918268_pe786441_s5.jpg',
    imageAlt: 'RINNIG Dish towel, white/dark gray/patterned, 18x24 "',
    url: 'https://www.ikea.com/us/en/p/rinnig-dish-towel-white-dark-gray-patterned-20476346/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [
      {
        id: '60476354',
        name: 'RINNIG',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '18x24 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/rinnig-dish-towel-white-green-patterned__0813215_pe772339_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/rinnig-dish-towel-white-green-patterned__0918272_pe786442_s5.jpg',
        imageAlt: 'RINNIG Dish towel, white/green/patterned, 18x24 "',
        url: 'https://www.ikea.com/us/en/p/rinnig-dish-towel-white-green-patterned-60476354/',
      },
    ],
  },
  {
    id: '80484008',
    name: 'HILDEGUN',
    price: {
      currency: 'USD',
      currentPrice: 0.79,
      discounted: false,
    },
    measurement: '18x24 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/hildegun-dish-towel-blue__0956028_pe804439_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hildegun-dish-towel-blue__0956029_pe804489_s5.jpg',
    imageAlt: 'HILDEGUN Dish towel, blue, 18x24 "',
    url: 'https://www.ikea.com/us/en/p/hildegun-dish-towel-blue-80484008/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [
      {
        id: '00484007',
        name: 'HILDEGUN',
        price: {
          currency: 'USD',
          currentPrice: 0.79,
          discounted: false,
        },
        measurement: '18x24 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/hildegun-dish-towel-red__0956033_pe804444_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/hildegun-dish-towel-red__0956034_pe804445_s5.jpg',
        imageAlt: 'HILDEGUN Dish towel, red, 18x24 "',
        url: 'https://www.ikea.com/us/en/p/hildegun-dish-towel-red-00484007/',
      },
    ],
  },
  {
    id: '10493073',
    name: 'INAMARIA',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '12x16 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/inamaria-dish-towel-patterned-blue-pink__1072057_pe856516_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/inamaria-dish-towel-patterned-blue-pink__1072056_pe856515_s5.jpg',
    imageAlt: 'INAMARIA Dish towel, patterned blue/pink, 12x16 "',
    url: 'https://www.ikea.com/us/en/p/inamaria-dish-towel-patterned-blue-pink-10493073/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [
      {
        id: '40493081',
        name: 'INAMARIA',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: true,
        },
        measurement: '18x24 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/inamaria-dish-towel-patterned-red-pink__1072061_pe856520_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/inamaria-dish-towel-patterned-red-pink__1072060_pe856519_s5.jpg',
        imageAlt: 'INAMARIA Dish towel, patterned red/pink, 18x24 "',
        url: 'https://www.ikea.com/us/en/p/inamaria-dish-towel-patterned-red-pink-40493081/',
      },
      {
        id: '80493079',
        name: 'INAMARIA',
        price: {
          currency: 'USD',
          currentPrice: 1.49,
          discounted: false,
        },
        measurement: '18x22 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/inamaria-dish-towel-floral-pattern__1072069_pe856514_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/inamaria-dish-towel-floral-pattern__1072068_pe856527_s5.jpg',
        imageAlt: 'INAMARIA Dish towel, floral pattern, 18x22 "',
        url: 'https://www.ikea.com/us/en/p/inamaria-dish-towel-floral-pattern-80493079/',
      },
    ],
  },
  {
    id: '80479592',
    name: 'MARIATHERES',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '20x28 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/mariatheres-dish-towel-gray__0918026_pe786094_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mariatheres-dish-towel-gray__0918027_pe786120_s5.jpg',
    imageAlt: 'MARIATHERES Dish towel, gray, 20x28 "',
    url: 'https://www.ikea.com/us/en/p/mariatheres-dish-towel-gray-80479592/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [
      {
        id: '40479589',
        name: 'MARIATHERES',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '20x28 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/mariatheres-dish-towel-linen-beige-stripe__0918031_pe786097_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mariatheres-dish-towel-linen-beige-stripe__0918032_pe786089_s5.jpg',
        imageAlt: 'MARIATHERES Dish towel, linen beige/stripe, 20x28 "',
        url: 'https://www.ikea.com/us/en/p/mariatheres-dish-towel-linen-beige-stripe-40479589/',
      },
      {
        id: '70479583',
        name: 'MARIATHERES',
        price: {
          currency: 'USD',
          currentPrice: 8.99,
          discounted: false,
        },
        measurement: '20x28 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/mariatheres-dish-towel-stripe-gray-beige__0918036_pe786100_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mariatheres-dish-towel-stripe-gray-beige__0918037_pe786101_s5.jpg',
        imageAlt: 'MARIATHERES Dish towel, stripe/gray beige, 20x28 "',
        url: 'https://www.ikea.com/us/en/p/mariatheres-dish-towel-stripe-gray-beige-70479583/',
      },
    ],
  },
  {
    id: '30493048',
    name: 'TORVFLY',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '18x24 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/torvfly-dish-towel-patterned-orange__0956226_pe804626_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/torvfly-dish-towel-patterned-orange__0956227_pe804628_s5.jpg',
    imageAlt: 'TORVFLY Dish towel, patterned/orange, 18x24 "',
    url: 'https://www.ikea.com/us/en/p/torvfly-dish-towel-patterned-orange-30493048/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [],
  },
  {
    id: '50493066',
    name: 'TORVFLY',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '12x16 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/torvfly-dish-towel-patterned-green__0956222_pe804622_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/torvfly-dish-towel-patterned-green__0956223_pe804623_s5.jpg',
    imageAlt: 'TORVFLY Dish towel, patterned/green, 12x16 "',
    url: 'https://www.ikea.com/us/en/p/torvfly-dish-towel-patterned-green-50493066/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [],
  },
  {
    id: '00484045',
    name: 'HILDEGUN',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '25x33 "',
    typeName: 'Apron',
    image:
      'https://www.ikea.com/us/en/images/products/hildegun-apron__0930017_pe790573_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hildegun-apron__0930018_pe790572_s5.jpg',
    imageAlt: 'HILDEGUN Apron, 25x33 "',
    url: 'https://www.ikea.com/us/en/p/hildegun-apron-00484045/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Aprons',
        key: '18852',
      },
    ],
    variants: [],
  },
  {
    id: '80493116',
    name: 'KÅLFJÄRIL',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '18x24 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/kalfjaeril-dish-towel-patterned-blue-light-turquoise__1080620_pe858114_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kalfjaeril-dish-towel-patterned-blue-light-turquoise__1152236_pe885202_s5.jpg',
    imageAlt: 'KÅLFJÄRIL Dish towel, patterned blue/light turquoise, 18x24 "',
    url: 'https://www.ikea.com/us/en/p/kalfjaeril-dish-towel-patterned-blue-light-turquoise-80493116/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [
      {
        id: '90493106',
        name: 'KÅLFJÄRIL',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '18x24 "',
        typeName: 'Dish towel',
        image:
          'https://www.ikea.com/us/en/images/products/kalfjaeril-dish-towel-patterned-pink-light-beige__1080621_pe858113_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/kalfjaeril-dish-towel-patterned-pink-light-beige__1152238_pe885199_s5.jpg',
        imageAlt: 'KÅLFJÄRIL Dish towel, patterned pink/light beige, 18x24 "',
        url: 'https://www.ikea.com/us/en/p/kalfjaeril-dish-towel-patterned-pink-light-beige-90493106/',
      },
    ],
  },
  {
    id: '50571064',
    name: 'SÖTRÖNN',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '18x24 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/soetroenn-dish-towel-patterned-black-white__1267381_pe928467_s5.jpg',
    imageAlt: 'SÖTRÖNN Dish towel, patterned/black/white, 18x24 "',
    url: 'https://www.ikea.com/us/en/p/soetroenn-dish-towel-patterned-black-white-50571064/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [],
  },
  {
    id: '30564837',
    name: 'RÖDKNOT',
    price: {
      currency: 'USD',
      currentPrice: 5.99,
      discounted: false,
    },
    measurement: '18x24 "',
    typeName: 'Dish towel',
    image:
      'https://www.ikea.com/us/en/images/products/roedknot-dish-towel-patterned-light-beige-black__1214817_pe911745_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/roedknot-dish-towel-patterned-light-beige-black__1214813_pe911743_s5.jpg',
    imageAlt: 'RÖDKNOT Dish towel, patterned/light beige black, 18x24 "',
    url: 'https://www.ikea.com/us/en/p/roedknot-dish-towel-patterned-light-beige-black-30564837/',
    categoryPath: [
      {
        name: 'Home textiles',
        key: 'tl001',
      },
      {
        name: 'Kitchen linens & textiles',
        key: '18850',
      },
      {
        name: 'Kitchen towels',
        key: '18851',
      },
    ],
    variants: [],
  },
  {
    id: '00570482',
    name: 'KNOPPÄNG',
    price: {
      currency: 'USD',
      currentPrice: 23.99,
      discounted: true,
    },
    measurement: '',
    typeName: 'Frame with poster, set of 8',
    image:
      'https://www.ikea.com/us/en/images/products/knoppaeng-frame-with-poster-set-of-8-flower-market__1202273_pe905849_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/knoppaeng-frame-with-poster-set-of-8-flower-market__1244657_pe921235_s5.jpg',
    imageAlt: 'KNOPPÄNG Frame with poster, set of 8, flower market',
    url: 'https://www.ikea.com/us/en/p/knoppaeng-frame-with-poster-set-of-8-flower-market-00570482/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Wall art',
        key: '10788',
      },
    ],
    variants: [],
  },
  {
    id: '20580932',
    name: 'BILD',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '16x20 "',
    typeName: 'Poster',
    image:
      'https://www.ikea.com/us/en/images/products/bild-poster-vintage-food-labels-collage__1237239_pe917872_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bild-poster-vintage-food-labels-collage__1277154_pe930993_s5.jpg',
    imageAlt: 'BILD Poster, vintage food labels collage, 16x20 "',
    url: 'https://www.ikea.com/us/en/p/bild-poster-vintage-food-labels-collage-20580932/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Art posters and prints',
        key: '10787',
      },
    ],
    variants: [],
  },
  {
    id: '30548932',
    name: 'RÖDALM',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '24x36 "',
    typeName: 'Frame',
    image:
      'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251479_pe924229_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251478_pe924230_s5.jpg',
    imageAlt: 'RÖDALM Frame, black, 24x36 "',
    url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-30548932/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Picture & photo frames',
        key: '18746',
      },
    ],
    variants: [
      {
        id: '00548863',
        name: 'RÖDALM',
        price: {
          currency: 'USD',
          currentPrice: 2.99,
          discounted: false,
        },
        measurement: '4x6 "',
        typeName: 'Frame',
        image:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251183_pe924161_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251182_pe924162_s5.jpg',
        imageAlt: 'RÖDALM Frame, black, 4x6 "',
        url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-00548863/',
      },
      {
        id: '00548896',
        name: 'RÖDALM',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '12x16 "',
        typeName: 'Frame',
        image:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251233_pe924195_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251232_pe924196_s5.jpg',
        imageAlt: 'RÖDALM Frame, black, 12x16 "',
        url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-00548896/',
      },
      {
        id: '10548867',
        name: 'RÖDALM',
        price: {
          currency: 'USD',
          currentPrice: 3.99,
          discounted: false,
        },
        measurement: '5x7 "',
        typeName: 'Frame',
        image:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251199_pe924170_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251198_pe924171_s5.jpg',
        imageAlt: 'RÖDALM Frame, black, 5x7 "',
        url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-10548867/',
      },
      {
        id: '40548903',
        name: 'RÖDALM',
        price: {
          currency: 'USD',
          currentPrice: 12.99,
          discounted: false,
        },
        measurement: '16x20 "',
        typeName: 'Frame',
        image:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251244_pe924208_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251243_pe924209_s5.jpg',
        imageAlt: 'RÖDALM Frame, black, 16x20 "',
        url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-40548903/',
      },
      {
        id: '50548889',
        name: 'RÖDALM',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: false,
        },
        measurement: '8x10 "',
        typeName: 'Frame',
        image:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251212_pe924178_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1329797_pe945264_s5.jpg',
        imageAlt: 'RÖDALM Frame, black, 8x10 "',
        url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-50548889/',
      },
      {
        id: '70548925',
        name: 'RÖDALM',
        price: {
          currency: 'USD',
          currentPrice: 16.99,
          discounted: false,
        },
        measurement: '19 ¾x27 ½ "',
        typeName: 'Frame',
        image:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251252_pe924216_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/roedalm-frame-black__1251251_pe924217_s5.jpg',
        imageAlt: 'RÖDALM Frame, black, 19 ¾x27 ½ "',
        url: 'https://www.ikea.com/us/en/p/roedalm-frame-black-70548925/',
      },
    ],
  },

  {
    id: '00465773',
    name: 'KNOPPÄNG',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '16x20 "',
    typeName: 'Frame with poster',
    image:
      'https://www.ikea.com/us/en/images/products/knoppaeng-frame-with-poster-garden__0771328_pe755690_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/knoppaeng-frame-with-poster-garden__0919782_ph168020_s5.jpg',
    imageAlt: 'KNOPPÄNG Frame with poster, garden, 16x20 "',
    url: 'https://www.ikea.com/us/en/p/knoppaeng-frame-with-poster-garden-00465773/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Wall art',
        key: '10788',
      },
    ],
    variants: [],
  },
  {
    id: 's19508942',
    name: 'BJÖRKSTA',
    price: {
      currency: 'USD',
      currentPrice: 122.99,
      discounted: false,
    },
    measurement: '78 ¾x55 "',
    typeName: 'Picture and frame',
    image:
      'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-periodic-table-black__1175834_pe895339_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-periodic-table-black__1215839_pe912227_s5.jpg',
    imageAlt: 'BJÖRKSTA Picture and frame, periodic table/black, 78 ¾x55 "',
    url: 'https://www.ikea.com/us/en/p/bjoerksta-picture-and-frame-periodic-table-black-s19508942/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Wall art',
        key: '10788',
      },
    ],
    variants: [
      {
        id: 's59508940',
        name: 'BJÖRKSTA',
        price: {
          currency: 'USD',
          currentPrice: 122.99,
          discounted: false,
        },
        measurement: '78 ¾x55 "',
        typeName: 'Picture and frame',
        image:
          'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-periodic-table-aluminum-color__1175835_pe895338_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-periodic-table-aluminum-color__1215835_pe912224_s5.jpg',
        imageAlt:
          'BJÖRKSTA Picture and frame, periodic table/aluminum color, 78 ¾x55 "',
        url: 'https://www.ikea.com/us/en/p/bjoerksta-picture-and-frame-periodic-table-aluminum-color-s59508940/',
      },
    ],
  },
  {
    id: 's29508927',
    name: 'BJÖRKSTA',
    price: {
      currency: 'USD',
      currentPrice: 84.99,
      discounted: false,
    },
    measurement: '55x22 "',
    typeName: 'Picture and frame',
    image:
      'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-green-nature-black__1176868_pe895325_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-green-nature-black__1215820_pe912211_s5.jpg',
    imageAlt: 'BJÖRKSTA Picture and frame, green nature/black, 55x22 "',
    url: 'https://www.ikea.com/us/en/p/bjoerksta-picture-and-frame-green-nature-black-s29508927/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Wall art',
        key: '10788',
      },
    ],
    variants: [
      {
        id: 's69508925',
        name: 'BJÖRKSTA',
        price: {
          currency: 'USD',
          currentPrice: 84.99,
          discounted: false,
        },
        measurement: '55x22 "',
        typeName: 'Picture and frame',
        image:
          'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-green-nature-aluminum-color__1176864_pe895326_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/bjoerksta-picture-and-frame-green-nature-aluminum-color__1215816_pe912207_s5.jpg',
        imageAlt:
          'BJÖRKSTA Picture and frame, green nature/aluminum color, 55x22 "',
        url: 'https://www.ikea.com/us/en/p/bjoerksta-picture-and-frame-green-nature-aluminum-color-s69508925/',
      },
    ],
  },

  {
    id: '70568046',
    name: 'BILD',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '16x20 "',
    typeName: 'Poster',
    image:
      'https://www.ikea.com/us/en/images/products/bild-poster-life-is-beutiful__1193735_pe901567_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bild-poster-life-is-beutiful__1212952_pe910851_s5.jpg',
    imageAlt: 'BILD Poster, life is beutiful, 16x20 "',
    url: 'https://www.ikea.com/us/en/p/bild-poster-life-is-beutiful-70568046/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Art posters and prints',
        key: '10787',
      },
    ],
    variants: [],
  },
  {
    id: '90292103',
    name: 'MOSSLANDA',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: true,
    },
    measurement: '45 1/4 "',
    typeName: 'Picture ledge',
    image:
      'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white__0634121_pe696313_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white__0905845_pe556438_s5.jpg',
    imageAlt: 'MOSSLANDA Picture ledge, white, 45 1/4 "',
    url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-white-90292103/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Display shelves & picture ledges',
        key: '16305',
      },
    ],
    variants: [
      {
        id: '10497815',
        name: 'MOSSLANDA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '21 5/8 "',
        typeName: 'Picture ledge',
        image:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white-stained-pine-effect__0990574_pe819076_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white-stained-pine-effect__0990575_pe819079_s5.jpg',
        imageAlt:
          'MOSSLANDA Picture ledge, white stained pine effect, 21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-white-stained-pine-effect-10497815/',
      },
      {
        id: '40497814',
        name: 'MOSSLANDA',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: true,
        },
        measurement: '45 1/4 "',
        typeName: 'Picture ledge',
        image:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white-stained-pine-effect__0990548_pe819042_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white-stained-pine-effect__0990549_pe819048_s5.jpg',
        imageAlt:
          'MOSSLANDA Picture ledge, white stained pine effect, 45 1/4 "',
        url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-white-stained-pine-effect-40497814/',
      },
      {
        id: '80511337',
        name: 'MOSSLANDA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: true,
        },
        measurement: '21 5/8 "',
        typeName: 'Picture ledge',
        image:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-walnut-effect__1006959_pe825921_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-walnut-effect__1006960_pe825923_s5.jpg',
        imageAlt: 'MOSSLANDA Picture ledge, walnut effect, 21 5/8 "',
        url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-walnut-effect-80511337/',
      },
      {
        id: '20291767',
        name: 'MOSSLANDA',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: true,
        },
        measurement: '21 ¾ "',
        typeName: 'Picture ledge',
        image:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-black__0634118_pe696312_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-black__1346811_pe951130_s5.jpg',
        imageAlt: 'MOSSLANDA Picture ledge, black, 21 ¾ "',
        url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-black-20291767/',
      },
      {
        id: '70292104',
        name: 'MOSSLANDA',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: true,
        },
        measurement: '45 1/4 "',
        typeName: 'Picture ledge',
        image:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-black__0634120_pe696314_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-black__1346811_pe951130_s5.jpg',
        imageAlt: 'MOSSLANDA Picture ledge, black, 45 1/4 "',
        url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-black-70292104/',
      },
      {
        id: '40291766',
        name: 'MOSSLANDA',
        price: {
          currency: 'USD',
          currentPrice: 6.99,
          discounted: true,
        },
        measurement: '21 ¾ "',
        typeName: 'Picture ledge',
        image:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white__0634119_pe696315_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/mosslanda-picture-ledge-white__0905845_pe556438_s5.jpg',
        imageAlt: 'MOSSLANDA Picture ledge, white, 21 ¾ "',
        url: 'https://www.ikea.com/us/en/p/mosslanda-picture-ledge-white-40291766/',
      },
    ],
  },
  {
    id: '10540847',
    name: 'PLUTTIS',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '11 "',
    typeName: 'Wall clock',
    image:
      'https://www.ikea.com/us/en/images/products/pluttis-wall-clock-black__1013114_pe829054_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/pluttis-wall-clock-black__1013115_pe829056_s5.jpg',
    imageAlt: 'PLUTTIS Wall clock, black, 11 "',
    url: 'https://www.ikea.com/us/en/p/pluttis-wall-clock-black-10540847/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Wall clocks',
        key: '10785',
      },
    ],
    variants: [
      {
        id: '30540851',
        name: 'PLUTTIS',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '11 "',
        typeName: 'Wall clock',
        image:
          'https://www.ikea.com/us/en/images/products/pluttis-wall-clock-red__1013097_pe829051_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/pluttis-wall-clock-red__1013098_pe829053_s5.jpg',
        imageAlt: 'PLUTTIS Wall clock, red, 11 "',
        url: 'https://www.ikea.com/us/en/p/pluttis-wall-clock-red-30540851/',
      },
    ],
  },
  {
    id: '30358781',
    name: 'KUPONG',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: false,
    },
    measurement: '1 ½x2 ¼ "',
    typeName: 'Alarm clock',
    image:
      'https://www.ikea.com/us/en/images/products/kupong-alarm-clock-green__0997354_pe822655_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/kupong-alarm-clock-green__1036059_pe838288_s5.jpg',
    imageAlt: 'KUPONG Alarm clock, green, 1 ½x2 ¼ "',
    url: 'https://www.ikea.com/us/en/p/kupong-alarm-clock-green-30358781/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Alarm clocks',
        key: '10786',
      },
    ],
    variants: [],
  },
  {
    id: '30557078',
    name: 'TROMMA',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '9 ¾ "',
    typeName: 'Wall clock',
    image:
      'https://www.ikea.com/us/en/images/products/tromma-wall-clock-white__0836082_pe778497_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/tromma-wall-clock-white__0945357_pe797625_s5.jpg',
    imageAlt: 'TROMMA Wall clock, white, 9 ¾ "',
    url: 'https://www.ikea.com/us/en/p/tromma-wall-clock-white-30557078/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Wall clocks',
        key: '10785',
      },
    ],
    variants: [],
  },
  {
    id: '10568978',
    name: 'TESAMMANS',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '8 ¼ "',
    typeName: 'Wall clock',
    image:
      'https://www.ikea.com/us/en/images/products/tesammans-wall-clock-multicolor__1231604_pe915951_s5.jpg',
    imageAlt: 'TESAMMANS Wall clock, multicolor, 8 ¼ "',
    url: 'https://www.ikea.com/us/en/p/tesammans-wall-clock-multicolor-10568978/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Wall clocks',
        key: '10785',
      },
    ],
    variants: [],
  },
  {
    id: '10575064',
    name: 'IKEA PS 1995',
    price: {
      currency: 'USD',
      currentPrice: 39.99,
      discounted: false,
    },
    measurement: '19 "',
    typeName: 'Clock',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-ps-1995-clock-blue__1277238_pe931019_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/ikea-ps-1995-clock-blue__1283569_pe932533_s5.jpg',
    imageAlt: 'IKEA PS 1995 Clock, blue, 19 "',
    url: 'https://www.ikea.com/us/en/p/ikea-ps-1995-clock-blue-10575064/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Wall clocks',
        key: '10785',
      },
    ],
    variants: [],
  },
  {
    id: '30540827',
    name: 'FILMIS',
    price: {
      currency: 'USD',
      currentPrice: 17.99,
      discounted: false,
    },
    measurement: '6 ½x3 ½ "',
    typeName: 'Clock/thermometer/alarm',
    image:
      'https://www.ikea.com/us/en/images/products/filmis-clock-thermometer-alarm-black__0588935_pe673258_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/filmis-clock-thermometer-alarm-black__0905217_pe713197_s5.jpg',
    imageAlt: 'FILMIS Clock/thermometer/alarm, black, 6 ½x3 ½ "',
    url: 'https://www.ikea.com/us/en/p/filmis-clock-thermometer-alarm-black-30540827/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Alarm clocks',
        key: '10786',
      },
    ],
    variants: [],
  },
  {
    id: '80277004',
    name: 'KLOCKIS',
    price: {
      currency: 'USD',
      currentPrice: 7.99,
      discounted: false,
    },
    measurement: '2 ¾x2 ¾ "',
    typeName: 'Clock/thermometer/alarm/timer',
    image:
      'https://www.ikea.com/us/en/images/products/klockis-clock-thermometer-alarm-timer-white__0637382_pe698266_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/klockis-clock-thermometer-alarm-timer-white__0905262_pe597342_s5.jpg',
    imageAlt: 'KLOCKIS Clock/thermometer/alarm/timer, white, 2 ¾x2 ¾ "',
    url: 'https://www.ikea.com/us/en/p/klockis-clock-thermometer-alarm-timer-white-80277004/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Wall clocks',
        key: '10785',
      },
    ],
    variants: [],
  },
  {
    id: '90540891',
    name: 'TJINGA',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '3 ¼x3 ¼ "',
    typeName: 'Alarm clock',
    image:
      'https://www.ikea.com/us/en/images/products/tjinga-alarm-clock-turquoise__0997358_pe822657_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/tjinga-alarm-clock-turquoise__0997359_pe822656_s5.jpg',
    imageAlt: 'TJINGA Alarm clock, turquoise, 3 ¼x3 ¼ "',
    url: 'https://www.ikea.com/us/en/p/tjinga-alarm-clock-turquoise-90540891/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Alarm clocks',
        key: '10786',
      },
    ],
    variants: [],
  },
  {
    id: '10543092',
    name: 'BONDIS',
    price: {
      currency: 'USD',
      currentPrice: 24.99,
      discounted: false,
    },
    measurement: '15 "',
    typeName: 'Wall clock',
    image:
      'https://www.ikea.com/us/en/images/products/bondis-wall-clock-black__0638616_pe699035_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bondis-wall-clock-black__0905562_pe598726_s5.jpg',
    imageAlt: 'BONDIS Wall clock, black, 15 "',
    url: 'https://www.ikea.com/us/en/p/bondis-wall-clock-black-10543092/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Wall clocks',
        key: '10785',
      },
    ],
    variants: [],
  },
  {
    id: '30511014',
    name: 'BONDTOLVAN',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '3 ¼x3 ½ "',
    typeName: 'Alarm clock',
    image:
      'https://www.ikea.com/us/en/images/products/bondtolvan-alarm-clock-analog-pale-pink__1038506_pe839707_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/bondtolvan-alarm-clock-analog-pale-pink__1038507_pe839709_s5.jpg',
    imageAlt: 'BONDTOLVAN Alarm clock, analog/pale pink, 3 ¼x3 ½ "',
    url: 'https://www.ikea.com/us/en/p/bondtolvan-alarm-clock-analog-pale-pink-30511014/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Clocks',
        key: '10759',
      },
      {
        name: 'Alarm clocks',
        key: '10786',
      },
    ],
    variants: [],
  },
  {
    id: '00470982',
    name: 'FINSMAK',
    price: {
      currency: 'USD',
      currentPrice: 0.49,
      discounted: false,
    },
    measurement: '1 "',
    typeName: 'Tealight holder',
    image:
      'https://www.ikea.com/us/en/images/products/finsmak-tealight-holder-clear-glass__0940797_pe795200_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/finsmak-tealight-holder-clear-glass__0966528_pe809828_s5.jpg',
    imageAlt: 'FINSMAK Tealight holder, clear glass, 1 "',
    url: 'https://www.ikea.com/us/en/p/finsmak-tealight-holder-clear-glass-00470982/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Candle holders',
        key: '10784',
      },
    ],
    variants: [],
  },
  {
    id: '50097995',
    name: 'GLIMMA',
    price: {
      currency: 'USD',
      currentPrice: 4.49,
      discounted: true,
    },
    measurement: '100 pack',
    typeName: 'Unscented tealights',
    image:
      'https://www.ikea.com/us/en/images/products/glimma-unscented-tealights__0638201_pe698764_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/glimma-unscented-tealights__1059580_pe849678_s5.jpg',
    imageAlt: 'GLIMMA Unscented tealights',
    url: 'https://www.ikea.com/us/en/p/glimma-unscented-tealights-50097995/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Unscented candles',
        key: '10782',
      },
    ],
    variants: [],
  },
  {
    id: '80377937',
    name: 'FENOMEN',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Unscented block candle, set of 5',
    image:
      'https://www.ikea.com/us/en/images/products/fenomen-unscented-block-candle-set-of-5-natural__0577466_pe668898_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fenomen-unscented-block-candle-set-of-5-natural__0904278_pe670010_s5.jpg',
    imageAlt: 'FENOMEN Unscented block candle, set of 5, natural',
    url: 'https://www.ikea.com/us/en/p/fenomen-unscented-block-candle-set-of-5-natural-80377937/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Unscented candles',
        key: '10782',
      },
    ],
    variants: [],
  },
  {
    id: '60191916',
    name: 'JUBLA',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '7 ½ "',
    typeName: 'Unscented chandelier candle',
    image:
      'https://www.ikea.com/us/en/images/products/jubla-unscented-chandelier-candle-white__0638475_pe698968_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/jubla-unscented-chandelier-candle-white__0962723_ph173892_s5.jpg',
    imageAlt: 'JUBLA Unscented chandelier candle, white, 7 ½ "',
    url: 'https://www.ikea.com/us/en/p/jubla-unscented-chandelier-candle-white-60191916/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Unscented candles',
        key: '10782',
      },
    ],
    variants: [],
  },
  {
    id: '40342134',
    name: 'FULLTALIG',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Candlestick, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/fulltalig-candlestick-set-of-3-black__0523288_pe643714_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/fulltalig-candlestick-set-of-3-black__1140431_pe880651_s5.jpg',
    imageAlt: 'FULLTALIG Candlestick, set of 3, black',
    url: 'https://www.ikea.com/us/en/p/fulltalig-candlestick-set-of-3-black-40342134/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Candle holders',
        key: '10784',
      },
    ],
    variants: [],
  },
  {
    id: '20574889',
    name: 'DAGLIGEN',
    price: {
      currency: 'USD',
      currentPrice: 1.99,
      discounted: true,
    },
    measurement: '5 ½ "',
    typeName: 'Unscented pillar candle',
    image:
      'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-green__1250780_pe924015_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-green__1250778_pe924014_s5.jpg',
    imageAlt: 'DAGLIGEN Unscented pillar candle, green, 5 ½ "',
    url: 'https://www.ikea.com/us/en/p/dagligen-unscented-pillar-candle-green-20574889/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Unscented candles',
        key: '10782',
      },
    ],
    variants: [
      {
        id: '80574886',
        name: 'DAGLIGEN',
        price: {
          currency: 'USD',
          currentPrice: 2.49,
          discounted: true,
        },
        measurement: '5 ½ "',
        typeName: 'Unscented pillar candle',
        image:
          'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-light-yellow__1250774_pe924008_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-light-yellow__1250772_pe924007_s5.jpg',
        imageAlt: 'DAGLIGEN Unscented pillar candle, light yellow, 5 ½ "',
        url: 'https://www.ikea.com/us/en/p/dagligen-unscented-pillar-candle-light-yellow-80574886/',
      },
      {
        id: '60574887',
        name: 'DAGLIGEN',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: true,
        },
        measurement: '5 ½ "',
        typeName: 'Unscented pillar candle',
        image:
          'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-light-lilac__1250797_pe924024_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-light-lilac__1250795_pe924023_s5.jpg',
        imageAlt: 'DAGLIGEN Unscented pillar candle, light lilac, 5 ½ "',
        url: 'https://www.ikea.com/us/en/p/dagligen-unscented-pillar-candle-light-lilac-60574887/',
      },
      {
        id: '40574888',
        name: 'DAGLIGEN',
        price: {
          currency: 'USD',
          currentPrice: 1.99,
          discounted: true,
        },
        measurement: '5 ½ "',
        typeName: 'Unscented pillar candle',
        image:
          'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-light-pink__1250793_pe924020_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/dagligen-unscented-pillar-candle-light-pink__1250791_pe924019_s5.jpg',
        imageAlt: 'DAGLIGEN Unscented pillar candle, light pink, 5 ½ "',
        url: 'https://www.ikea.com/us/en/p/dagligen-unscented-pillar-candle-light-pink-40574888/',
      },
    ],
  },
  {
    id: '70124262',
    name: 'HEMSJÖ',
    price: {
      currency: 'USD',
      currentPrice: 3.99,
      discounted: false,
    },
    measurement: '3 ¼ "',
    typeName: 'Unscented block candle',
    image:
      'https://www.ikea.com/us/en/images/products/hemsjoe-unscented-block-candle-natural__0637443_pe698308_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/hemsjoe-unscented-block-candle-natural__0903845_pe586200_s5.jpg',
    imageAlt: 'HEMSJÖ Unscented block candle, natural, 3 ¼ "',
    url: 'https://www.ikea.com/us/en/p/hemsjoe-unscented-block-candle-natural-70124262/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Unscented candles',
        key: '10782',
      },
    ],
    variants: [],
  },
  {
    id: '60574986',
    name: 'SILVERPÄRON',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '11 "',
    typeName: 'Candlestick/tealight holder ',
    image:
      'https://www.ikea.com/us/en/images/products/silverpaeron-candlestick-tealight-holder-bright-red__1291541_pe934922_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/silverpaeron-candlestick-tealight-holder-bright-red__1291539_pe934923_s5.jpg',
    imageAlt: 'SILVERPÄRON Candlestick/tealight holder, bright red, 11 "',
    url: 'https://www.ikea.com/us/en/p/silverpaeron-candlestick-tealight-holder-bright-red-60574986/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Candle holders',
        key: '10784',
      },
    ],
    variants: [],
  },
  {
    id: '50504423',
    name: 'ADLAD',
    price: {
      currency: 'USD',
      currentPrice: 0.59,
      discounted: true,
    },
    measurement: '12 hr',
    typeName: 'Scented candle in glass',
    image:
      'https://www.ikea.com/us/en/images/products/adlad-scented-candle-in-glass-scandinavian-woods-white__1060247_pe849857_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/adlad-scented-candle-in-glass-scandinavian-woods-white__1079922_pe857778_s5.jpg',
    imageAlt: 'ADLAD Scented candle in glass, Scandinavian Woods/white, 12 hr',
    url: 'https://www.ikea.com/us/en/p/adlad-scented-candle-in-glass-scandinavian-woods-white-50504423/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Scented candles',
        key: '10783',
      },
    ],
    variants: [],
  },
  {
    id: '00574814',
    name: 'KLOKHET',
    price: {
      currency: 'USD',
      currentPrice: 7.99,
      discounted: false,
    },
    measurement: '9 ¾ "',
    typeName: 'Unscented candle',
    image:
      'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-light-lilac__1250579_pe923853_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-light-lilac__1250578_pe923854_s5.jpg',
    imageAlt: 'KLOKHET Unscented candle, light lilac, 9 ¾ "',
    url: 'https://www.ikea.com/us/en/p/klokhet-unscented-candle-light-lilac-00574814/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Candle holders & candles',
        key: '10760',
      },
      {
        name: 'Unscented candles',
        key: '10782',
      },
    ],
    variants: [
      {
        id: '30574803',
        name: 'KLOKHET',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '9 ¾ "',
        typeName: 'Unscented candle',
        image:
          'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-green__1250575_pe923849_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-green__1250574_pe923850_s5.jpg',
        imageAlt: 'KLOKHET Unscented candle, green, 9 ¾ "',
        url: 'https://www.ikea.com/us/en/p/klokhet-unscented-candle-green-30574803/',
      },
      {
        id: '40574807',
        name: 'KLOKHET',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '9 ¾ "',
        typeName: 'Unscented candle',
        image:
          'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-yellow__1250581_pe923855_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-yellow__1250580_pe923856_s5.jpg',
        imageAlt: 'KLOKHET Unscented candle, yellow, 9 ¾ "',
        url: 'https://www.ikea.com/us/en/p/klokhet-unscented-candle-yellow-40574807/',
      },
      {
        id: '50574798',
        name: 'KLOKHET',
        price: {
          currency: 'USD',
          currentPrice: 7.99,
          discounted: false,
        },
        measurement: '9 ¾ "',
        typeName: 'Unscented candle',
        image:
          'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-light-pink__1250577_pe923851_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/klokhet-unscented-candle-light-pink__1250576_pe923852_s5.jpg',
        imageAlt: 'KLOKHET Unscented candle, light pink, 9 ¾ "',
        url: 'https://www.ikea.com/us/en/p/klokhet-unscented-candle-light-pink-50574798/',
      },
    ],
  },
  {
    id: '10442045',
    name: 'STILREN',
    price: {
      currency: 'USD',
      currentPrice: 15.99,
      discounted: false,
    },
    measurement: '8 ¾ "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/stilren-vase-white__0704329_pe725345_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/stilren-vase-white__1091034_pe862271_s5.jpg',
    imageAlt: 'STILREN Vase, white, 8 ¾ "',
    url: 'https://www.ikea.com/us/en/p/stilren-vase-white-10442045/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [
      {
        id: '50571403',
        name: 'STILREN',
        price: {
          currency: 'USD',
          currentPrice: 15.99,
          discounted: false,
        },
        measurement: '8 ¾ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/stilren-vase-gray__1192432_pe901088_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stilren-vase-gray__1192431_pe901089_s5.jpg',
        imageAlt: 'STILREN Vase, gray, 8 ¾ "',
        url: 'https://www.ikea.com/us/en/p/stilren-vase-gray-50571403/',
      },
      {
        id: '30562782',
        name: 'STILREN',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '8 ¾ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/stilren-vase-black__1257022_pe925532_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/stilren-vase-black__1257019_pe925531_s5.jpg',
        imageAlt: 'STILREN Vase, black, 8 ¾ "',
        url: 'https://www.ikea.com/us/en/p/stilren-vase-black-30562782/',
      },
    ],
  },
  {
    id: '90511959',
    name: 'KONSTFULL',
    price: {
      currency: 'USD',
      currentPrice: 7.99,
      discounted: false,
    },
    measurement: '4 "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/konstfull-vase-frosted-glass-green__1030416_pe836271_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/konstfull-vase-frosted-glass-green__1030417_pe836273_s5.jpg',
    imageAlt: 'KONSTFULL Vase, frosted glass/green, 4 "',
    url: 'https://www.ikea.com/us/en/p/konstfull-vase-frosted-glass-green-90511959/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [
      {
        id: '10511963',
        name: 'KONSTFULL',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '6 ¼ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/konstfull-vase-green-brown__1030420_pe836274_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/konstfull-vase-green-brown__1030421_pe836276_s5.jpg',
        imageAlt: 'KONSTFULL Vase, green-brown, 6 ¼ "',
        url: 'https://www.ikea.com/us/en/p/konstfull-vase-green-brown-10511963/',
      },
      {
        id: '30511962',
        name: 'KONSTFULL',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '7 ½ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/konstfull-vase-green__1030424_pe836277_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/konstfull-vase-green__1079610_pe857624_s5.jpg',
        imageAlt: 'KONSTFULL Vase, green, 7 ½ "',
        url: 'https://www.ikea.com/us/en/p/konstfull-vase-green-30511962/',
      },
      {
        id: '20511953',
        name: 'KONSTFULL',
        price: {
          currency: 'USD',
          currentPrice: 24.99,
          discounted: false,
        },
        measurement: '10 ¼ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/konstfull-vase-clear-glass-patterned__1030738_pe836342_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/konstfull-vase-clear-glass-patterned__1079650_pe857633_s5.jpg',
        imageAlt: 'KONSTFULL Vase, clear glass/patterned, 10 ¼ "',
        url: 'https://www.ikea.com/us/en/p/konstfull-vase-clear-glass-patterned-20511953/',
      },
    ],
  },
  {
    id: '00537652',
    name: 'RÄFFELBJÖRK',
    price: {
      currency: 'USD',
      currentPrice: 29.99,
      discounted: false,
    },
    measurement: '7 ¾ "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/raeffelbjoerk-vase-mother-of-pearl-color__1115553_pe872281_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/raeffelbjoerk-vase-mother-of-pearl-color__1168200_pe891824_s5.jpg',
    imageAlt: 'RÄFFELBJÖRK Vase, mother-of-pearl color, 7 ¾ "',
    url: 'https://www.ikea.com/us/en/p/raeffelbjoerk-vase-mother-of-pearl-color-00537652/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [
      {
        id: '10537656',
        name: 'RÄFFELBJÖRK',
        price: {
          currency: 'USD',
          currentPrice: 19.99,
          discounted: false,
        },
        measurement: '4 ¾ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/raeffelbjoerk-vase-mother-of-pearl-color__1115542_pe872277_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/raeffelbjoerk-vase-mother-of-pearl-color__1115815_pe872280_s5.jpg',
        imageAlt: 'RÄFFELBJÖRK Vase, mother-of-pearl color, 4 ¾ "',
        url: 'https://www.ikea.com/us/en/p/raeffelbjoerk-vase-mother-of-pearl-color-10537656/',
      },
    ],
  },
  {
    id: '80457774',
    name: 'BERÄKNA',
    price: {
      currency: 'USD',
      currentPrice: 4.99,
      discounted: false,
    },
    measurement: '6 "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0639826_pe699591_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0512922_pe638718_s5.jpg',
    imageAlt: 'BERÄKNA Vase, clear glass, 6 "',
    url: 'https://www.ikea.com/us/en/p/beraekna-vase-clear-glass-80457774/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [
      {
        id: '20327945',
        name: 'BERÄKNA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '7 "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0490874_pe624746_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0908949_pe624748_s5.jpg',
        imageAlt: 'BERÄKNA Vase, clear glass, 7 "',
        url: 'https://www.ikea.com/us/en/p/beraekna-vase-clear-glass-20327945/',
      },
      {
        id: '20406297',
        name: 'BERÄKNA',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '11 ¾ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0490878_pe624750_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0512928_pe638724_s5.jpg',
        imageAlt: 'BERÄKNA Vase, clear glass, 11 ¾ "',
        url: 'https://www.ikea.com/us/en/p/beraekna-vase-clear-glass-20406297/',
      },
      {
        id: '40327949',
        name: 'BERÄKNA',
        price: {
          currency: 'USD',
          currentPrice: 27.99,
          discounted: false,
        },
        measurement: '17 ¾ "',
        typeName: 'Vase',
        image:
          'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0639834_pe699599_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/beraekna-vase-clear-glass__0512930_pe638726_s5.jpg',
        imageAlt: 'BERÄKNA Vase, clear glass, 17 ¾ "',
        url: 'https://www.ikea.com/us/en/p/beraekna-vase-clear-glass-40327949/',
      },
    ],
  },
  {
    id: '30309781',
    name: 'BEGÄRLIG',
    price: {
      currency: 'USD',
      currentPrice: 27.99,
      discounted: false,
    },
    measurement: '11 ½ "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/begaerlig-vase-clear-glass__0637227_pe698196_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/begaerlig-vase-clear-glass__0392614_pe560409_s5.jpg',
    imageAlt: 'BEGÄRLIG Vase, clear glass, 11 ½ "',
    url: 'https://www.ikea.com/us/en/p/begaerlig-vase-clear-glass-30309781/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [],
  },
  {
    id: '40567109',
    name: 'DAKSJUS',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Vase, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/daksjus-vase-set-of-3-mixed-colors__1221377_pe913763_s5.jpg',
    imageAlt: 'DAKSJUS Vase, set of 3, mixed colors',
    url: 'https://www.ikea.com/us/en/p/daksjus-vase-set-of-3-mixed-colors-40567109/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [],
  },
  {
    id: '90562779',
    name: 'BERÄKNA',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '10 "',
    typeName: 'Bowl',
    image:
      'https://www.ikea.com/us/en/images/products/beraekna-bowl-dark-green__1257008_pe925525_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/beraekna-bowl-dark-green__1257006_pe925527_s5.jpg',
    imageAlt: 'BERÄKNA Bowl, dark green, 10 "',
    url: 'https://www.ikea.com/us/en/p/beraekna-bowl-dark-green-90562779/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Decorative bowls & plates',
        key: '16308',
      },
    ],
    variants: [
      {
        id: '00329040',
        name: 'BERÄKNA',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '10 "',
        typeName: 'Bowl',
        image:
          'https://www.ikea.com/us/en/images/products/beraekna-bowl-clear-glass__0490840_pe624720_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/beraekna-bowl-clear-glass__0903172_pe624724_s5.jpg',
        imageAlt: 'BERÄKNA Bowl, clear glass, 10 "',
        url: 'https://www.ikea.com/us/en/p/beraekna-bowl-clear-glass-00329040/',
      },
    ],
  },
  {
    id: '10470991',
    name: 'PÅDRAG',
    price: {
      currency: 'USD',
      currentPrice: 2.99,
      discounted: false,
    },
    measurement: '6 ¾ "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/padrag-vase-clear-glass__0969056_pe810681_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/padrag-vase-clear-glass__0941050_pe795311_s5.jpg',
    imageAlt: 'PÅDRAG Vase, clear glass, 6 ¾ "',
    url: 'https://www.ikea.com/us/en/p/padrag-vase-clear-glass-10470991/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [],
  },
  {
    id: '80148465',
    name: 'SOCKERÄRT',
    price: {
      currency: 'USD',
      currentPrice: 17.99,
      discounted: false,
    },
    measurement: '8 ¾ "',
    typeName: 'Vase/jug',
    image:
      'https://www.ikea.com/us/en/images/products/sockeraert-vase-jug-white__0091175_pe226468_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sockeraert-vase-jug-white__0397390_ph122231_s5.jpg',
    imageAlt: 'SOCKERÄRT Vase/jug, white, 8 ¾ "',
    url: 'https://www.ikea.com/us/en/p/sockeraert-vase-jug-white-80148465/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [
      {
        id: '00551756',
        name: 'SOCKERÄRT',
        price: {
          currency: 'USD',
          currentPrice: 13.99,
          discounted: false,
        },
        measurement: '8 ¾ "',
        typeName: 'Vase/jug',
        image:
          'https://www.ikea.com/us/en/images/products/sockeraert-vase-jug-dark-gray-beige__1197009_pe904925_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sockeraert-vase-jug-dark-gray-beige__1197006_pe904924_s5.jpg',
        imageAlt: 'SOCKERÄRT Vase/jug, dark gray-beige, 8 ¾ "',
        url: 'https://www.ikea.com/us/en/p/sockeraert-vase-jug-dark-gray-beige-00551756/',
      },
      {
        id: '10148464',
        name: 'SOCKERÄRT',
        price: {
          currency: 'USD',
          currentPrice: 14.99,
          discounted: false,
        },
        measurement: '6 "',
        typeName: 'Vase/jug',
        image:
          'https://www.ikea.com/us/en/images/products/sockeraert-vase-jug-white__0091174_pe226467_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/sockeraert-vase-jug-white__0903299_pe584248_s5.jpg',
        imageAlt: 'SOCKERÄRT Vase/jug, white, 6 "',
        url: 'https://www.ikea.com/us/en/p/sockeraert-vase-jug-white-10148464/',
      },
    ],
  },
  {
    id: '00338577',
    name: 'VILJESTARK',
    price: {
      currency: 'USD',
      currentPrice: 0.99,
      discounted: false,
    },
    measurement: '6 ¾ "',
    typeName: 'Vase',
    image:
      'https://www.ikea.com/us/en/images/products/viljestark-vase-clear-glass__0640433_pe699813_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/viljestark-vase-clear-glass__0903223_pe629545_s5.jpg',
    imageAlt: 'VILJESTARK Vase, clear glass, 6 ¾ "',
    url: 'https://www.ikea.com/us/en/p/viljestark-vase-clear-glass-00338577/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Vases & decorating bowls',
        key: '10769',
      },
      {
        name: 'Flower vases',
        key: '10776',
      },
    ],
    variants: [],
  },
  {
    id: '50537664',
    name: 'DVÄRGTALL',
    price: {
      currency: 'USD',
      currentPrice: 12.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Decorative figure, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/dvaergtall-decorative-figure-set-of-3-solid-wood-black__1115488_pe872261_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/dvaergtall-decorative-figure-set-of-3-solid-wood-black__1168146_pe891788_s5.jpg',
    imageAlt: 'DVÄRGTALL Decorative figure, set of 3, solid wood/black',
    url: 'https://www.ikea.com/us/en/p/dvaergtall-decorative-figure-set-of-3-solid-wood-black-50537664/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '00537954',
    name: 'TRÄDGRÄNSEN',
    price: {
      currency: 'USD',
      currentPrice: 19.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Wall decoration, set of 2',
    image:
      'https://www.ikea.com/us/en/images/products/traedgraensen-wall-decoration-set-of-2-ceramic-stones-beige__1137097_pe879571_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/traedgraensen-wall-decoration-set-of-2-ceramic-stones-beige__1168084_pe891772_s5.jpg',
    imageAlt: 'TRÄDGRÄNSEN Wall decoration, set of 2, ceramic/stones beige',
    url: 'https://www.ikea.com/us/en/p/traedgraensen-wall-decoration-set-of-2-ceramic-stones-beige-00537954/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '00343282',
    name: 'SJÄLSLIGT',
    price: {
      currency: 'USD',
      currentPrice: 17.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Decoration, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/sjaelsligt-decoration-set-of-3-green__0637480_pe698310_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/sjaelsligt-decoration-set-of-3-green__0903281_pe626420_s5.jpg',
    imageAlt: 'SJÄLSLIGT Decoration, set of 3, green',
    url: 'https://www.ikea.com/us/en/p/sjaelsligt-decoration-set-of-3-green-00343282/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '90424146',
    name: 'HANDSKALAD',
    price: {
      currency: 'USD',
      currentPrice: 15.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Decoration, hand',
    image:
      'https://www.ikea.com/us/en/images/products/handskalad-decoration-hand-natural__0628918_pe694107_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/handskalad-decoration-hand-natural__1091032_pe862269_s5.jpg',
    imageAlt: 'HANDSKALAD Decoration, hand, natural',
    url: 'https://www.ikea.com/us/en/p/handskalad-decoration-hand-natural-90424146/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '00495483',
    name: 'EFTERTÄNKA',
    price: {
      currency: 'USD',
      currentPrice: 11.99,
      discounted: false,
    },
    measurement: '6 "',
    typeName: 'Decorative hourglass',
    image:
      'https://www.ikea.com/us/en/images/products/eftertaenka-decorative-hourglass-clear-glass-sand__1006432_pe825811_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/eftertaenka-decorative-hourglass-clear-glass-sand__1006433_pe825813_s5.jpg',
    imageAlt: 'EFTERTÄNKA Decorative hourglass, clear glass/sand, 6 "',
    url: 'https://www.ikea.com/us/en/p/eftertaenka-decorative-hourglass-clear-glass-sand-00495483/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [
      {
        id: '50495485',
        name: 'EFTERTÄNKA',
        price: {
          currency: 'USD',
          currentPrice: 9.99,
          discounted: false,
        },
        measurement: '4 "',
        typeName: 'Decorative hourglass',
        image:
          'https://www.ikea.com/us/en/images/products/eftertaenka-decorative-hourglass-clear-glass-sand__1006429_pe825808_s5.jpg',
        contextualImageUrl:
          'https://www.ikea.com/us/en/images/products/eftertaenka-decorative-hourglass-clear-glass-sand__1006430_pe825810_s5.jpg',
        imageAlt: 'EFTERTÄNKA Decorative hourglass, clear glass/sand, 4 "',
        url: 'https://www.ikea.com/us/en/p/eftertaenka-decorative-hourglass-clear-glass-sand-50495485/',
      },
    ],
  },
  {
    id: '50343939',
    name: 'BEGÅVNING',
    price: {
      currency: 'USD',
      currentPrice: 17.99,
      discounted: false,
    },
    measurement: '10 "',
    typeName: 'Glass dome with base',
    image:
      'https://www.ikea.com/us/en/images/products/begavning-glass-dome-with-base__0639835_pe699600_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/begavning-glass-dome-with-base__0904079_pe644670_s5.jpg',
    imageAlt: 'BEGÅVNING Glass dome with base, 10 "',
    url: 'https://www.ikea.com/us/en/p/begavning-glass-dome-with-base-50343939/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '70568975',
    name: 'TESAMMANS',
    price: {
      currency: 'USD',
      currentPrice: 9.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Hanging decoration',
    image:
      'https://www.ikea.com/us/en/images/products/tesammans-hanging-decoration-multicolor__1243075_pe920488_s5.jpg',
    imageAlt: 'TESAMMANS Hanging decoration, multicolor',
    url: 'https://www.ikea.com/us/en/p/tesammans-hanging-decoration-multicolor-70568975/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '20518030',
    name: 'GILLSTAD',
    price: {
      currency: 'USD',
      currentPrice: 22.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Wall decoration, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/gillstad-wall-decoration-set-of-3-sedge-handmade__1110045_pe870334_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gillstad-wall-decoration-set-of-3-sedge-handmade__1110166_pe870384_s5.jpg',
    imageAlt: 'GILLSTAD Wall decoration, set of 3, sedge handmade',
    url: 'https://www.ikea.com/us/en/p/gillstad-wall-decoration-set-of-3-sedge-handmade-20518030/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Wall décor',
        key: '10757',
      },
      {
        name: 'Wall art',
        key: '10788',
      },
    ],
    variants: [],
  },
  {
    id: '40255462',
    name: 'GESTALTA',
    price: {
      currency: 'USD',
      currentPrice: 7.99,
      discounted: true,
    },
    measurement: '13 "',
    typeName: "Artist's figure",
    image:
      'https://www.ikea.com/us/en/images/products/gestalta-artists-figure-natural__24799_pe109573_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/gestalta-artists-figure-natural__1091030_pe862268_s5.jpg',
    imageAlt: 'GESTALTA Artist\'s figure, natural, 13 "',
    url: 'https://www.ikea.com/us/en/p/gestalta-artists-figure-natural-40255462/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
  {
    id: '60570790',
    name: 'ALLUND',
    price: {
      currency: 'USD',
      currentPrice: 14.99,
      discounted: false,
    },
    measurement: '',
    typeName: 'Decoration, set of 3',
    image:
      'https://www.ikea.com/us/en/images/products/allund-decoration-set-of-3-animal-black__0445081_pe595513_s5.jpg',
    contextualImageUrl:
      'https://www.ikea.com/us/en/images/products/allund-decoration-set-of-3-animal-black__0904368_pe595243_s5.jpg',
    imageAlt: 'ALLUND Decoration, set of 3, animal/black',
    url: 'https://www.ikea.com/us/en/p/allund-decoration-set-of-3-animal-black-60570790/',
    categoryPath: [
      {
        name: 'Home decor & accessories',
        key: 'de001',
      },
      {
        name: 'Table decor & decorative accessories',
        key: '24924',
      },
    ],
    variants: [],
  },
];

const producIdsBySubcategory = [
  {
    subcategory_name: 'TV & media furniture',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ce4',
    },
    products: [
      's19566512',
      's49568048',
      '40565775',
      's99567225',
      '40569486',
      's29494666',
      's19572749',
      '10413528',
      's99568569',
      's39567997',
    ],
  },
  {
    subcategory_name: 'Decorative pillows & cushion covers',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ce5',
    },
    products: [
      '60343646',
      '60543004',
      '20395821',
      '40561800',
      '20572376',
      '70570959',
      '80572241',
      '00572419',
      '30576703',
      '80568965',
    ],
  },
  {
    subcategory_name: 'Rugs',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ce6',
    },
    products: [
      '40559166',
      '50578107',
      '80537281',
      '70560031',
      '60492542',
      '70507915',
      '00277395',
      '10559894',
      '20426808',
      '20566587',
    ],
  },
  {
    subcategory_name: 'Living room & entryway tables',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ce7',
    },
    products: [
      's49139722',
      's69325191',
      's89209826',
      's59278307',
      '90491720',
      '30574351',
      '70568720',
      's09421949',
      's69324530',
      's29195672',
    ],
  },
  {
    subcategory_name: 'Sofas & sectionals',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ce8',
    },
    products: [
      's29482847',
      's69216757',
      's19384116',
      's89318321',
      '70512243',
      's19389468',
      's39440593',
      's99319099',
      's79440478',
      's39491323',
    ],
  },
  {
    subcategory_name: 'Bathroom accessories',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ce9',
    },
    products: [
      '60579229',
      '60303363',
      '30587037',
      '70433364',
      '70429003',
      '50523271',
      '90498260',
      '20468105',
      '30408979',
      '30501920',
    ],
  },
  {
    subcategory_name: 'Bathroom lighting',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cea',
    },
    products: [
      '10489820',
      '70328626',
      '80306940',
      's19516824',
      '90439671',
      '20431635',
      '10250084',
      '20499258',
      '80488370',
      '00502501',
    ],
  },
  {
    subcategory_name: 'Bathroom vanities',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ceb',
    },
    products: [
      's39530715',
      's59536844',
      's39530744',
      's99536390',
      '20535355',
      's29534295',
      's39557837',
      's79557821',
      '30180995',
      's19535931',
    ],
  },
  {
    subcategory_name: 'Bathroom sinks',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cec',
    },
    products: [
      's89516905',
      's79517024',
      's79443090',
      '80195555',
      's29517007',
      '20223698',
      '50499025',
      's89516910',
      '70358944',
      '60193944',
    ],
  },
  {
    subcategory_name: 'Bathroom storage',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8ced',
    },
    products: [
      '60574905',
      '00471222',
      '80535319',
      '20535181',
      '30574902',
      '90554538',
      '40307866',
      '30564333',
      '30535307',
      '00562104',
    ],
  },
  {
    subcategory_name: 'Armoires & wardrobes',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cee',
    },
    products: [
      '90574800',
      '20441757',
      '30574799',
      '60453767',
      '90586803',
      '90437238',
      's29555103',
      '40586805',
      '10394558',
      '20458837',
    ],
  },
  {
    subcategory_name: 'Nightstands',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cef',
    },
    products: [
      '80214549',
      '20576322',
      '80242627',
      '80340454',
      '60447677',
      '60322130',
      '90388978',
      '10584191',
      '20200456',
      '10483470',
    ],
  },
  {
    subcategory_name: 'Beds with mattresses included',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf0',
    },
    products: [
      's09544568',
      's39545000',
      's89428126',
      's19537505',
      's39559855',
      's99543159',
      's39559214',
      's69495956',
      's09428093',
      's49494547',
    ],
  },
  {
    subcategory_name: 'Bedding',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf1',
    },
    products: [
      '10423184',
      '30579805',
      '30577825',
      '30577892',
      '50580836',
      '60574774',
      '90587478',
      '70577833',
      '00518502',
      '00318541',
    ],
  },
  {
    subcategory_name: 'Dressers & storage drawers',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf2',
    },
    products: [
      '10576191',
      '70576211',
      '50572836',
      '50584165',
      '10576209',
      '50576212',
      '30572837',
      '00582164',
      '90576210',
      '00473546',
    ],
  },
  {
    subcategory_name: 'Outdoor umbrellas, canopies, gazebos & more',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf3',
    },
    products: [
      '30387868',
      '70522765',
      '20532743',
      '50578287',
      's49251803',
      '30554230',
      's39324616',
      '00445351',
      '00532013',
      '80515509',
    ],
  },
  {
    subcategory_name: 'Outdoor cushions',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf4',
    },
    products: [
      's59253081',
      's89253107',
      '50547205',
      '90391749',
      '60586673',
      '60480841',
      's59304919',
      '60570733',
      '70570737',
      '20391743',
    ],
  },
  {
    subcategory_name: 'Outdoor lighting',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf5',
    },
    products: [
      '00570590',
      '60575981',
      '80575980',
      '80556199',
      '90552539',
      '20585840',
      '40570574',
      '60578456',
      '40570692',
      '80570591',
    ],
  },
  {
    subcategory_name: 'Outdoor rugs',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf6',
    },
    products: [
      '80198295',
      '50495409',
      '30569321',
      '50517944',
      '20573111',
      '30553235',
      '50495391',
      '00570774',
      '70423685',
      '00517946',
    ],
  },
  {
    subcategory_name: 'Outdoor kitchen & accessories',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf7',
    },
    products: [
      '00553388',
      's29390107',
      's89496554',
      '50471446',
      's79495244',
      's59505098',
      's19547825',
      's99546539',
      '70489662',
      '00553369',
    ],
  },
  {
    subcategory_name: 'Tables & desks',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf8',
    },
    products: [
      's99431982',
      's29932181',
      '80213074',
      's59417153',
      '00485224',
      '40460815',
      '90214308',
      's69416817',
      's59417619',
      's19022808',
    ],
  },
  {
    subcategory_name: 'Chairs',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cf9',
    },
    products: [
      's59305928',
      's89336023',
      '80570831',
      's29470236',
      '20361897',
      '70078463',
      '30533493',
      '10219178',
      '90568903',
      's79553842',
    ],
  },
  {
    subcategory_name: 'Storage solution systems',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cfa',
    },
    products: [
      '00522330',
      's89508118',
      's79057526',
      's59046708',
      's09331524',
      's69548912',
      '50494297',
      's79388003',
      's69228473',
      's39429699',
    ],
  },
  {
    subcategory_name: 'Bulletin boards, peg boards, pin boards & more',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cfb',
    },
    products: [
      '10321618',
      '00440363',
      '60532468',
      '40518246',
      '20440362',
      '00541574',
      '80423388',
      '70474769',
      '20498353',
      '70562068',
    ],
  },
  {
    subcategory_name: 'Cable management & cord organizers',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cfc',
    },
    products: [
      '30200253',
      '00573188',
      '90534625',
      '30147425',
      '60563737',
      '30573021',
      '90555745',
      '10507838',
      '30528632',
      '50474770',
    ],
  },
  {
    subcategory_name: 'Baby textiles',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cfd',
    },
    products: [
      '60526373',
      '60521196',
      '90521190',
      '80515137',
      '30514395',
      '90515127',
      '80572383',
      '80421252',
      '90526376',
      '30521193',
    ],
  },
  {
    subcategory_name: 'Kids furniture',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cfe',
    },
    products: [
      '50298418',
      '50178411',
      '50365177',
      '30472499',
      '10407136',
      '10201673',
      's09417589',
      '40365371',
      '70228325',
      '20273594',
    ],
  },
  {
    subcategory_name: 'Nursery furniture',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8cff',
    },
    products: [
      '50248541',
      '30248575',
      's79506577',
      's09480854',
      's89228434',
      '00466701',
      '00472702',
      '50576575',
      '30467087',
      '20269016',
    ],
  },
  {
    subcategory_name: 'Kids storage & organization',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d00',
    },
    products: [
      's69228473',
      's69478711',
      's19389152',
      '40512471',
      '50527127',
      's09480854',
      's19102659',
      '00472702',
      's29228470',
      's29042877',
    ],
  },
  {
    subcategory_name: 'Kids tableware & dinnerware',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d01',
    },
    products: [
      '80461380',
      '70461385',
      '20461378',
      '60137571',
      '00461379',
      '60426934',
      '70137575',
      '30479580',
      '70455695',
    ],
  },
  {
    subcategory_name: 'Storage boxes & organization bins',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d02',
    },
    products: [
      '60580812',
      's59561188',
      '20546467',
      '00526875',
      '00563815',
      '40216357',
      '40515021',
      '70576715',
      '00571778',
      '20468105',
    ],
  },
  {
    subcategory_name: 'Underbed storage bags & bins',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d03',
    },
    products: [
      '50590166',
      '00538543',
      '50395382',
      '10493638',
      '20238223',
      '20411524',
      '10372542',
      '40474209',
      '60481303',
      '40504193',
    ],
  },
  {
    subcategory_name: 'Kitchen drawer organization',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d04',
    },
    products: [
      '40544194',
      '10177220',
      '20491356',
      '50502985',
      '60136623',
      's19432706',
      '70265662',
      '90491367',
      '10517795',
      '70154800',
    ],
  },
  {
    subcategory_name: 'Laundry cabinets & shelving',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d05',
    },
    products: [
      's69548894',
      's89297130',
      's69548912',
      's79305098',
      's99548864',
      's99297144',
      's59386482',
      's09297657',
      's49311492',
      's59297141',
    ],
  },
  {
    subcategory_name: 'Kitchen islands & carts',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d06',
    },
    products: [
      '40391657',
      '20359154',
      '20580847',
      '80486724',
      '60333850',
      '60399412',
      '20382932',
      '00471222',
      '40366115',
      's59276228',
    ],
  },
  {
    subcategory_name: 'Knives & cutting boards',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d07',
    },
    products: [
      '80233430',
      '00309829',
      '10346831',
      '20557168',
      '00233429',
      '40578358',
      '10578109',
      '20578359',
      '30512810',
      '70233421',
    ],
  },
  {
    subcategory_name: 'Food storage & organizing',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d08',
    },
    products: [
      's29563117',
      's19567168',
      's69563120',
      '60580317',
      '10579892',
      '00581796',
      '40583091',
      's39567148',
      '00581800',
      '00578181',
    ],
  },
  {
    subcategory_name: 'Dishwashing accessories',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d09',
    },
    products: [
      '80461276',
      '70565948',
      '60556685',
      '10564616',
      '80531670',
      '00430142',
      's79323709',
      '00451059',
      '40476779',
      '30407814',
    ],
  },
  {
    subcategory_name: 'Kitchen linens & textiles',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d0a',
    },
    products: [
      '20476346',
      '80484008',
      '10493073',
      '80479592',
      '30493048',
      '50493066',
      '00484045',
      '80493116',
      '50571064',
      '30564837',
    ],
  },
  {
    subcategory_name: 'Wall décor',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d0b',
    },
    products: [
      '00570482',
      '20580932',
      '30548932',
      '00537954',
      '00465773',
      's19508942',
      's29508927',
      '20518030',
      '70568046',
      '90292103',
    ],
  },
  {
    subcategory_name: 'Clocks',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d0c',
    },
    products: [
      '10540847',
      '30358781',
      '30557078',
      '10568978',
      '10575064',
      '30540827',
      '80277004',
      '90540891',
      '10543092',
      '30511014',
    ],
  },
  {
    subcategory_name: 'Candle holders & candles',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d0d',
    },
    products: [
      '00470982',
      '50097995',
      '80377937',
      '60191916',
      '40342134',
      '20574889',
      '70124262',
      '60574986',
      '50504423',
      '00574814',
    ],
  },
  {
    subcategory_name: 'Vases & decorating bowls',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d0e',
    },
    products: [
      '10442045',
      '90511959',
      '00537652',
      '80457774',
      '30309781',
      '40567109',
      '90562779',
      '10470991',
      '80148465',
      '00338577',
    ],
  },
  {
    subcategory_name: 'Table decor & decorative accessories',
    subcategory_id: {
      $oid: '667aac74547fb73491fc8d0f',
    },
    products: [
      '50537664',
      '00537954',
      '00343282',
      '90424146',
      '00495483',
      '50343939',
      '70568975',
      '20518030',
      '40255462',
      '60570790',
    ],
  },
];

const productsWith3dUrls = [
  {
    productId: 's69216757',
    productName: 'FRIHETEN',
    url: 'https://web-api.ikea.com/dimma/assets/geomagical/39216754/PS01_S01_NV01/simple/glb_draco/G-39216754-f25e21c62bb42236a3c337e5b312c6e2e0af6675_32b57f91c53445e0b9e6460ba2f5593d.glb?cn=pip',
  },
  {
    productId: 's19384116',
    productName: 'EKTORP',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/19384116/PS01_S01_NV01/isp3/glb_draco/19384116_PS01_S01_NV01_ISP3_2.0_d0e9b84105cb437f912058794571b78c.glb?cn=pip',
  },
  {
    productId: '70078463',
    productName: 'PELLO',
    url: 'https://web-api.ikea.com/dimma/assets/geomagical/50078464/PS01_S01_NV01/simple/glb_draco/G-50078464-64f22ff99df8ee9b49ab96011a4f831a3d093fd1_232940f2effe49d39c637af82ee6fc7e.glb?cn=pip',
  },
  {
    productId: '10219178',
    productName: 'ADDE',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/10219178/PS01_S01_NV01/isp3/glb_draco/10219178_PS01_S01_NV01_ISP3_2.0_3396b27fbd7d4c95b6459e4afa0b9917.glb?cn=pip',
  },
  {
    productId: '90568903',
    productName: 'ÖSTANÖ',
    url: 'https://web-api.ikea.com/dimma/assets/geomagical/50568900/PS01_S01_NV01/simple/glb_draco/G-50568900-053a31aeb64b232da6b2ab370f0384b286101c2b_853c7afc44714e168cfb592c7336aed7.glb?cn=pip',
  },
  {
    productId: 's89209826',
    productName: 'BESTÅ',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/89209826/PS01_S01_NV01/isp3/glb_draco/89209826_PS01_S01_NV01_ISP3_2.0_7197bac1babb48ed85f4b1ef608adf4d.glb?cn=pip',
  },
  {
    productId: 's99431982',
    productName: 'LAGKAPTEN',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/99431982/PS01_S01_NV01/isp1/glb_draco/99431982_PS01_S01_NV01_ISP1_2.0_0fb41bcccb494937b4c9ce0e6e64d875.glb?cn=pip',
  },
  {
    productId: 's59417153',
    productName: 'LAGKAPTEN',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/59417153/PS01_S01_NV01/isp3/glb_draco/59417153_PS01_S01_NV01_ISP3_2.0_e2f9cf54f68940468580f2273a3d1e01.glb?cn=pip',
  },
  {
    productId: '10489820',
    productName: 'KABOMBA',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/10489820/PS01_S01_NV01/iqp3/glb_draco/10489820_PS01_S01_NV01_IQP3_2.0_70dc47e637fa4a55800d154bdbc23b2b.glb?cn=pip',
  },
  {
    productId: '10442045',
    productName: 'STILREN',
    url: 'https://web-api.ikea.com/dimma/assets/1.2/10442045/PS01_S01_NV01/iqp3/glb_draco/10442045_PS01_S01_NV01_iqp3_v1.4.6_2230a6d2624e4f4196add4e621a53eb0.glb?cn=pip',
  },
];

module.exports = {
  products,
  categories,
  subcategories,
  producIdsBySubcategory,
  productsWith3dUrls,
};
