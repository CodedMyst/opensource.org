module.exports = {
    solidity: "0.8.17",
    networks: {
      rinkeby: {
        url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
        accounts: [process.env.PRIVATE_KEY],
      },
    },
  };
  