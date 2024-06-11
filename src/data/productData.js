const productData = [
  {
    id: 1,
    title: "Modern Glass Coffee Table",
    price: 149.99,
    category: "Living Room",
    description:
      "Add a touch of elegance to your living room with this modern glass coffee table. Featuring a sleek design and durable construction, it's perfect for entertaining guests or enjoying your morning cup of coffee.",
    image:
      "https://www.roomservice360.com/media/catalog/product/i/n/infinity-coffee-table-01_1.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 2,
    title: "Soft Plush Throw Blanket",
    price: 29.99,
    category: "Bedroom",
    description:
      "Stay warm and cozy on chilly nights with this soft plush throw blanket. Made from high-quality materials, it's perfect for snuggling up on the couch or adding a decorative touch to your bed.",
    image:
      "https://i5.walmartimages.com/asr/5be308c7-4cfd-4509-83aa-47646ff6355d.38f798e857b038f6f5f6f5b3f1ae9b7d.jpeg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 3,
    title: "Ceramic Dinner Set for 6",
    price: 39.99,
    category: "Kitchen",
    description:
      "Upgrade your dinnerware with this beautiful ceramic dinner set for 6. With its elegant design and durable construction, it is perfect for everyday use or special occasions.",
    image:
      "https://www.jiomart.com/images/product/original/rv48cqzbp1/renhomz-ceramic-dinner-set-set-of-19-pieces-seashell-grey-green-design-6-dinner-plates-12-bowls-1-serving-bowl-lead-and-cadmium-free-100-food-grade-19-product-images-orv48cqzbp1-p594767605-2-202210220432.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 4,
    title: "Rustic Wooden Bedside Table",
    price: 79.99,
    category: "Bedroom",
    description:
      "Add a touch of rustic charm to your bedroom with this wooden bedside table. Perfect for storing books, lamps, or other bedside essentials.",
    image:
      "https://m.media-amazon.com/images/I/91xDzd5TQFL._AC_UF894,1000_QL80_.jpg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 5,
    title: "Decorative Throw Pillow Set",
    price: 19.99,
    category: "Living Room",
    description:
      "Enhance the comfort and style of your living room with this set of decorative throw pillows. Featuring a variety of colors and patterns, they're perfect for adding a pop of personality to your sofa or armchair.",
    image:
      "https://images.thdstatic.com/productImages/d9d1b0bd-3e5f-4d45-bf31-afe25295d56b/svn/brielle-home-throw-pillows-807000281527-44_600.jpg",
    free_shipping: true,
    amount: 1,
  },

  {
    id: 6,
    title: "Mid-Century Modern Armchair",
    price: 199.9,
    category: "Living Room",
    description:
      "Add a touch of retro charm to your living room with this mid-century modern armchair. Featuring a sleek design and comfortable cushioning, it's perfect for lounging or entertaining guests.",
    image:
      "https://i5.walmartimages.com/seo/Bonzy-Home-Mid-Century-Modern-Accent-Chair-Single-Fabric-Lounge-Reading-Armchair-Solid-Wood-Frame-Easy-Assembly-Arm-Chairs-Living-Room-GREEN_3803425f-8096-432e-9f81-a62ad0984ecd.0990f2b6b7a7e9441dfc48317646f0b4.jpeg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 7,
    title: "Wooden Wall Shelf with Hooks",
    price: 34.99,
    category: "Living Room",
    description:
      "Add storage and style to your entryway or living room with this wooden wall shelf featuring hooks. Perfect for organizing keys, coats, or decorative items.",
    image:
      "https://m.media-amazon.com/images/I/71IyCClkbES._AC_UF894,1000_QL80_DpWeblab_.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 8,
    title: "Set of 4 Ceramic Plant Pots",
    price: 29.99,
    category: "Living Room",
    description:
      "Bring the beauty of nature indoors with this set of 4 ceramic plant pots. Perfect for displaying your favorite houseplants or succulents.",
    image:
      "https://www.csstudios.co.nz/cdn/shop/products/SET4_Oslo_Kobe_Stockholm_Origami_Vert3.jpg?v=1669192476",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 9,
    title: "Modern Pendant Light Fixture",
    price: 129.99,
    category: "Living Room",
    description:
      "Illuminate your living space with this modern pendant light fixture. Featuring a sleek design and adjustable height, it's perfect for adding ambiance to any room.",
    image:
      "https://i5.walmartimages.com/seo/FETCOI-Modern-Design-LED-Ceiling-Lights-Dimmable-Pendant-Lighting-Remote-Control-Contemporary-Hanging-Light-Fixture-Dining-Room-Kitchen-Island-Living_988b6eb4-4c85-4beb-a490-884022b49448.79a482c3dd63f6d1094eb56c4868bf7d.jpeg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 10,
    title: "Cotton Bed Sheet Set",
    price: 49.99,
    category: "Bedroom",
    description:
      "Upgrade your bedding with this luxurious cotton bed sheet set. Soft, breathable, and wrinkle-resistant, it's perfect for a good night's sleep.",
    image:
      "https://ae01.alicdn.com/kf/Sf79d4b4f128248bea6d54beddc717d2fY/Modern-Luxury-Digital-Printing-Bedding-Set-300TC-Cotton-Soft-Bed-Sheet-Pillowcases-Duvet-Cover-4Pcs-Queen.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 11,
    title: "Wooden Spice Rack Organizer",
    price: 19.99,
    category: "Kitchen",
    description:
      "Keep your spices organized and easily accessible with this wooden spice rack organizer. Perfect for saving space and adding style to your kitchen.",
    image:
      "https://www.bigw.com.au/medias/sys_master/images/images/h24/h9f/48465529012254.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 12,
    title: "Abstract Canvas Wall Art",
    price: 69.99,
    category: "Living Room",
    description:
      "Add a touch of sophistication to your living room with this abstract canvas wall art. Featuring vibrant colors and a modern design, it's sure to be a conversation starter.",
    image:
      "https://kotart.in/cdn/shop/products/Kotart-Modern-Abstract-Art-Canvas-Paintings-for-Home-and-Office-Wall-Decor-Living-room-Bedroom-Wall-Decor-Paintings-4.jpg?v=1697553852&width=1946",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 13,
    title: "Bedside Lamp",
    price: 44.99,
    category: "Bedroom",
    description:
      "Illuminate your bedside with this special bedside lamp. Featuring a natural look and dimmable light settings, it's perfect for reading or creating a cozy ambiance.",
    image:
      "https://www.amoslighting.co.uk/wp-content/uploads/2023/08/Drisana-Mango-Wood-Bedside-Table-Lamp-DL0301-Natural-One-Size-1.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 14,
    title: "Wooden Nightstand with Drawer",
    price: 99.99,
    category: "Bedroom",
    description:
      "Keep your bedside essentials organized and within reach with this wooden nightstand featuring a drawer. With its classic design and sturdy construction, it's perfect for any bedroom decor.",
    image: "https://m.media-amazon.com/images/I/8133kASk6AL.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 15,
    title: "Modern Leather Sofa",
    price: 599.99,
    category: "Living Room",
    description:
      "Create a stylish and comfortable seating area with this modern leather sofa. Featuring a sleek design and plush cushions, it's perfect for lounging or entertaining guests.",
    image:
      "https://media.karousell.com/media/photos/products/2023/6/25/italian_style_leather_sofa_1687696915_39d0f261.jpg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 16,
    title: "Stainless Steel Knife Set",
    price: 39.99,
    category: "Kitchen",
    description:
      "Upgrade your kitchen arsenal with this stainless steel knife set. Includes all the essential knives you need for slicing, dicing, and chopping.",
    image:
      "https://www.cuisinart.com/globalassets/cuisinart-image-feed/c77ss-15pga/c77ss_15pga_1.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 17,
    title: "Floral Patterned Area Rug",
    price: 149.99,
    category: "Living Room",
    description:
      "Add warmth and style to your living room with this floral patterned area rug. Made from high-quality materials, it's soft underfoot and easy to clean.",
    image:
      "https://warmlyhome.com/wp-content/uploads/2021/08/vine-flower-rug-5.jpg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 18,
    title: "Faux Fur Area Rug",
    price: 89.99,
    category: "Living Room",
    description:
      "Add warmth and texture to your living space with this faux fur area rug. Luxuriously soft and stylishly versatile, it's perfect for creating a cozy atmosphere in any room.",
    image:
      "https://m.media-amazon.com/images/I/71J1aVPFyyL._AC_UF894,1000_QL80_.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 19,
    title: "Modern Wall Clock",
    price: 59.99,
    category: "Living Room",
    description:
      "Keep track of time in style with this modern wall clock. Featuring a sleek design and silent quartz movement, it's perfect for any room in your home.",
    image:
      "https://i.etsystatic.com/43722341/r/il/f198e7/4920360682/il_570xN.4920360682_9qcz.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 20,
    title: "Bamboo Cutting Board Set",
    price: 29.99,
    category: "Kitchen",
    description:
      "Upgrade your kitchen with this bamboo cutting board set. Made from sustainable bamboo, it's durable, eco-friendly, and perfect for all your food prep needs.",
    image:
      "https://www.kitchenstuffplus.com/media/catalog/product/7/5/75044_ksp-cut-board-w-silicone-s-2_211223162111132_t9rcnwczzvprmwpn.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 21,
    title: "Cozy Knit Throw Blanket",
    price: 39.99,
    category: "Bedroom",
    description:
      "Stay warm and cozy on cold nights with this cozy knit throw blanket. Made from soft, luxurious yarn, it's perfect for snuggling up on the couch or adding an extra layer of warmth to your bed.",
    image:
      "https://image.made-in-china.com/2f0j00dGektUchhmug/Soft-Warm-Throw-Blanket-for-Couch-Cozy-Knit-Throw-for-Bed-Sofa-Living-Room-Lightweight-Decorative-Throw-Blanket.webp",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 22,
    title: "Set of 6 Ceramic Soup Bowls",
    price: 19.99,
    category: "Kitchen",
    description:
      "Serve up delicious soups and stews with this set of 6 ceramic soup bowls. With their classic design and durable construction, they're perfect for everyday use.",
    image:
      "https://i5.walmartimages.com/asr/e7767359-4f1a-4e40-a73e-367ecc622b0f.bfef3127ec711db740eec42a3965038d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 23,
    title: "Vintage Industrial Floor Lamp",
    price: 179.99,
    category: "Living Room",
    description:
      "Add character to your living space with this vintage industrial floor lamp. Featuring a rustic metal base and adjustable height, it's perfect for reading nooks or cozy corners.",
    image:
      "https://m.media-amazon.com/images/I/81vUvV3vKaL._AC_UF894,1000_QL80_.jpg",
    free_shipping: false,
    amount: 1,
  },
  {
    id: 24,
    title: "Marble Coaster Set",
    price: 14.99,
    category: "Living Room",
    description:
      "Protect your furniture in style with this marble coaster set. Featuring a sleek design and non-slip backing, they're perfect for use with hot or cold drinks.",
    image: "https://wallmantra.com/wp-content/uploads/02.jpg",
    free_shipping: true,
    amount: 1,
  },
  {
    id: 25,
    title: "Set of 3 Decorative Wall Mirrors",
    price: 49.99,
    category: "Living Room",
    description:
      "Add depth and dimension to your living space with this set of 3 decorative wall mirrors. Featuring unique shapes and finishes, they're perfect for creating an eye-catching focal point on any wall.",
    image: "https://m.media-amazon.com/images/I/71wK5iDPuaL.jpg",
    free_shipping: true,
    amount: 1,
  },
];

export default productData;
