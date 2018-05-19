const HDWalletProvider = require("truffle-hdwallet-provider");
const { ROPSTEN_MNEMONIC } = process.env
console.log("ROPSTEN_MNEMONIC ",ROPSTEN_MNEMONIC)
module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(ROPSTEN_MNEMONIC, "https://ropsten.infura.io/8wEJLs1EO2BoAewPXTCL"),
      gas: 4698712,
      network_id: '3',
    }
  },
  mocha: {
    useColors: true
   }
};