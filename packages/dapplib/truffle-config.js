require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot alone response mean essay hope opinion swear gesture'; 
let testAccounts = [
"0x46d00641eaa7c52b66c2dde44d2a3ebc4ec90d05527f0154a74e3972a22e234a",
"0xfc152553e7830a05ed0e7dc63511171601462f0b05ebbdaf6caf018159078745",
"0xcfcb3db7a1edf83c82c75528dcbe3631bd65db8e8c220088cbc680358ae3d63d",
"0xbe50d3a05b6c2b31b1234fd60ce3902f1c3918dd034f6535574fbd3f40978576",
"0xafb07df72d7b0aa9b99e6872a547881fb6662ac3fd673b540d24df96e3d66ec0",
"0xa02e30baf3878f4c1fe468ee378e18eeccf92dc6836ac77d064abea12aea77c3",
"0x96976df45b2389fa7e60f5ab600bbc9dd471ee5567cffea8e3aa16b6e1a0f92d",
"0xf86c30bde3f2b0c510efa51d4ac7ac2942ee2df416bd76d3fe86a0d5c9eb2985",
"0x8c3efc543d32c94723f1524b34f3cf442164305286ef612726c56dc543e1b705",
"0x0cb79f35c0e4ed2fa03aa66f9366fffcc918a6d02c726a6e50e965a7758fe2ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

