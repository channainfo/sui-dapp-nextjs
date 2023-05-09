/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    SUI_NET: 'devnet',

    // devnet
    SUI_PCK_ADDRESS: '0xaaf7075991885411f5b409b5dbe84f4c4a4fb57c480bbd52873a674c0a34a151',
    SUI_TABLE: '0xaeeb2b5a40d886b07880ec208c4310cc6cbf3ff73588e96f200fb745771b59b9',
    SUI_ADMIN_CAP: '0x99e10e8d0965afdcaa94e29e664d40c2f06388f6e83c71b2da5c79fa973cbb28',
    SUI_SHARED_TIERS: '0xa955a88bd851145f24fb41be5055d78f6880ec475ea04899026463a4dca4761d',
    SUI_UPGRADE_CAP: '0xd41b9d3ec48dbcb222fe9c5cfa8138b234f79515be0981356d854bca1e7fee9f',
  
    // sui.keystore
    SUI_ADMIN_KEYSTORE: 'ANnVaUPQl1EbgzVOc2cPkUdv3mhAkGwAZMX8BfL3z/+N',
    // testnet
    // SUI_PCK_ADDRESS: '0xfd206d74927008e79122911c35c69843cc4bcd34e568536e90cb6e90d7c0850d',
    // SUI_TABLE: '0xedc8a67689cdeb51a310e54f97c89689432cae759438c19eeede9f9c9a04ea61',
    // SUI_ADMIN_CAP: '0xe28d05d270be56130710113aad52086dbc76f53e3d53a36fc7c291d735a48ca0',
    // SUI_SHARED_TIERS: '0x6b031a74b333bb114618df1dd0d02d81b56f0ee8d4d770978c33fbe58cc7ef14',
    // SUI_UPGRADE_CAP: '0x1679602bc5210465695dc21a6df37d54aba90a7466c9e857f55ebd120381f79b'

  }

}

module.exports = nextConfig
