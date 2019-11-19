# Request Smart Contracts Documentation 

## Introduction

Welcome to the Request Network Smart Contracts documentation. 
Using the smart contracts you can create new requests, pay them, consult them or update them from your own on-chain applications. 

If your application is off-chain, you can interact with the JS library: [view JS Library Documentation](https://github.com/RequestNetwork/requestNetwork).

### Warning

This is still an early version which is likely to significantly evolve. 

### Request Hub Slack

If you need help, [join the Request Hub Slack](https://request-slack.herokuapp.com/).

### Detailled documentation

Detailled API reference for the smart contracts is available on [docs-smart-contracts.request.network](https://docs-smart-contracts.request.network/) 

### When developing you should know

Everything that is specified in the [documentation of the protocol](https://docs.request.network/development/protocol).

Among other things, this documentation specifies the smart contract architecture, the different actions that can be done at specific times, the statuses, how to use the extensions, the fee management system, the cross currency feature, how to manage identity and what to expect from the reputation system.

### Tutorials

No tutorial available yet. Feel free to suggest yours and we will refer to it.

### Develop on test-rpc

You can deploy your own contracts on testrpc thanks to the truffle project:
```git clone https://github.com/RequestNetwork/requestNetwork 
cd packages/requestNetworkSmartContracts 
truffle deploy --network development
```

### Develop on Rinkeby

Contract addresses
* RequestCore: 0x8fc2e7f2498f1d06461ee2d547002611b801202b
* RequestEthereum: 0xd88ab9b1691340e04a5bbf78529c11d592d35f57
* RequestERC20 token CTBK: 0xe241d3757dad0ef86d0fcc5fe90e20f955743ed5  (test token CTBK 0x995d6a8c21f24be1dd04e105dd0d83758343e258)
* RequestBitcoinNodesValidation: 0x580bce13f6d97c15d364048c6c00fb3fb03a1416

### Develop on the Main net 

Contract addresses
* RequestCore: 0xdb600fda54568a35b78565b5257125bebc51eb27
* RequestEthereum: 0x3038045cd883abff0c6eea4b1954843c0fa5a735
* RequestERC20 token REQ: 0xc77ceefa6960174accca0c6fdecb5dbd95042cda
* RequestERC20 token KNC: 0xa9566758d054f6efcf9b00095538fda3d9d75844
* RequestERC20 token OMG: 0xe44d5393cc60d67c7858aa75cf307c00e837f0e5
* RequestERC20 token SAI: 0x3baa64a4401bbe18865547e916a9be8e6dd89a5a
* RequestERC20 token DAI: 0x62b37F0547047D99cC59e2F0db549Ab1D97149B5
* RequestERC20 token DGX: 0x891a1f07cbf6325192d830f4399932d4d1d66e89
* RequestERC20 token KIN: 0x63afd0d2b9653552ac775b714d9a488658a637c5 
* RequestERC20 token ZRX: 0xbBE47EFe1A2cEf913562fE454f6EB75A9F75E6d6 
* RequestERC20 token BAT: 0x3f90549bAF95c3c0b7E5bBB66B39EDaEfc7BD25e 
* RequestERC20 token BNB: 0x1fC6CCEafaAc97261E248FF5b8C6387696F14225 
* RequestERC20 token LINK: 0x8f9224e619921923fcb0f2e1a31502bF22b87CFF
* Request Bitcoin with node validation: 0x6f33a7842ad134B2F4BCbEDB34BCE299DAD56C97
* RequestERC20 token BNTY: 0xfa7B14e5e5e0b59ef6fB86f56928349EB607CbB3 
* RequestERC20 token MKR: 0x23d33c46F64eF9AfEC6A19e7AD758E99c87ae129
* RequestERC20 token RSR: 0x548AC0EC13B132f3B58bD8aFd83eBD2e225eB1A6


## Request Ethereum smart contracts

See API reference: https://docs-smart-contracts.request.network/docs/RequestEthereum/

## Request ERC20 smart contracts

See API reference: https://docs-smart-contracts.request.network/docs/RequestERC20/

## Request Bitcoin nodes validation smart contracts

See API reference: https://docs-smart-contracts.request.network/docs/RequestBitcoinNodesValidation/

## Bug bounty

See this article https://blog.request.network/request-network-bug-bounty-live-ee3297e46695

## Developing

### Set up

Install ganache globally if it isn't already installed
`npm install -g ganache-cli`

Install lerna and bootstrap it, to install the dependencies and link the packages together
`npm install --global lerna`

`lerna bootstrap`

### Running the tests

Launch a ganache-cli instance on a terminal:

`npm run ganache`

You can now launch the unit tests:

`npm run test`


### Building the artifacts

To build the artifacts, run
`npm run build`
This will compile the contracts through truffle and run exportArtifacts.js on the export of truffle. 
The output will be accessible in export/

To clean build/ (temporary folder, output of truffle) and export/, run
`npm run clean`
