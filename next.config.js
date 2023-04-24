/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    // devnet
    // 0xb0e7ceb0578d0a80eacd385be72ecb072843f6b4c93dd8e2ff654df168eadbbc
    // SUI_PCK_ADDRESS: '0xb72ea030a9c94ed5da5490096a7d9a06376ce751a771a1b813aeae196c10c3fe'
    // SUI_PCK_ADDRESS: '0xc639523137ad6381ce1b4dd841f1ed523d145526036be0e8b7f672e7e64bdfe1',

    // testnet
    // SUI_PCK_ADDRESS: '0x4fc5c574a8283435851de066dbd878655c739205f82eecc0d2f1a532f7a7ee2b'
    SUI_PCK_ADDRESS: '0x6fe32366bc8db1c69328c7bfd41b4d863e2419456614e520de1fe5af8a599527'
  }

}

module.exports = nextConfig
