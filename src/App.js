import './App.css';
import React, {useState} from 'react';
import { Web3 } from 'web3';

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const web3 = new Web3('https://mainnet.infura.io/v3/438f0c4eb4ab46168d928e77ca363c0f');
  const [balanceInEther] = useState("")

    async function requestAccount() {
        console.log('Requesting account...')
        if(window.ethereum) {
            console.log('Metamask Wallet Detected')
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0])
                console.log(walletAddress)
                }
            catch(error) {
                console.log("Error connecting Wallet")
        }
        }
        else {
            console.log('Metamask Wallet Absent')
        }
    }

    async function getBalance() {
        const balanceInWei = await web3.eth.getBalance(walletAddress);
        const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
        console.log(`${Number(balanceInEther)} Ether `);
    }

    return (
      return (
        <div className="App">
          <header className="App-header">
           <button
           onClick={requestAccount}
           >Connect Metamask Wallet</button>
            <h3>Wallet Address: {walletAddress}</h3>
              <button onClick={getBalance}>Get Account Balance</button>
              <h2>Wallet Balance: {Number(balanceInEther)} </h2>
          </header>
        </div>
      );
    }
export default App;