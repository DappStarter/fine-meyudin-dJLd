require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food stone royal stereo minor hotel light army gather'; 
let testAccounts = [
"0xe66b40daa05277cc953e4be6e76f4c476588c0e309008235827441817c0bc1d0",
"0x94f53688b047e07c4a058380b4dc64e00e79b427c11f74c50d7f15123da40026",
"0x0355c53b50531ff370cc3bdc6cab1e3d4698835e10e3ecccca1572e9de9d29d3",
"0xc671a314f54748e82536105f684034c66641b20f15c7954ee18a667221cc2107",
"0xa8bcbff1cf06b4438a332fb9b05dcdbc1c6ceec46e3829e9da163787a74b9c7b",
"0x78fa4d727b1d04c26824fb89a115ce22b27ad40bb583a285d82c629646887b99",
"0xf53cd82d3472032bddbc242bd7fab4c0b2fe322e4b828b80f4657187b9670f6a",
"0x94c987a9feaf82090a0cb6ccf7003b49a3da89d7fdce84eb45703964d7144450",
"0xc44cf14bc38abae2fb598edc7a62638e095b6f53fee80b6cd07d1839b48b4a3e",
"0xcab607cef92510aedde31115ca46ed4f08e9cf494711ded5fa3f579b033f211f"
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

