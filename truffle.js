const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'wrist sadness mansion leader gadget gloom motor attend diary scissors transfer harbor'
const wallet = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/8wEJLs1EO2BoAewPXTCL")

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: wallet,
      gas: 4698712,
      network_id: '3',
    }
  },
  mocha: {
    useColors: true
   }
};