// https://eth-sepolia.g.alchemy.com/v2/wCWmkUj1Upi9prgP6pwfnjZwEDf_M1M-

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/wCWmkUj1Upi9prgP6pwfnjZwEDf_M1M-',
      accounts:['f27a73b2382dfbf55bf736b9c9a64e6dcb18a3f6bfd300c87168ff9b9dbbff6d'],
    }
  }
}