import Web3 from 'web3';
import contractAbi from './contracts/Record.json';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.log(error);
    web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b98f73314a454085bc23f5820e9252f9'));
  }
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b98f73314a454085bc23f5820e9252f9'));
}

const contractAddress = '0xC55227B5cE0E024D78b62dB10691Da5b547AC7e1';
const doctor = new web3.eth.Contract(contractAbi, contractAddress);

export default doctor;
