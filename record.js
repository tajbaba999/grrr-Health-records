import Web3 from 'web3';
import contractAbi from './contracts/Record.json';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.log(error);
    web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b1a0254328ed4ce2bfe43e2ac9064473'));
  }
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b1a0254328ed4ce2bfe43e2ac9064473'));
}

const contractAddress = '0x82Cb68A02fc7e64b29926903023055329603d526';
const doctor = new web3.eth.Contract(contractAbi, contractAddress);

export default doctor;
