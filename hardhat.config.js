require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv")

dotenv.config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
defaultNetwork: "alfajores"
};
