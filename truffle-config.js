var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";

const privateKeys = []
const infuraKey = ""

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
      },
      network_id: '*'
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKeys, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};