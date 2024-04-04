import { useState } from 'react';
import Web3 from 'web3';
import { ethers } from 'ethers'
import ContractABI from '../contracts/Token.json'

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Use your preferred provider


function TokenForm() {
  const [address, setAddress] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState('');
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [loadingTransfer, setLoadingTransfer] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch balance
  const fetchBalance = async () => {
    try {
      setLoadingBalance(true);
      const tokenContract = new web3.eth.Contract(ContractABI.abi, ContractABI.address);
      const balance = await tokenContract.methods.balanceOf(address).call();
      setBalance(balance);
      setLoadingBalance(false);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setError('Error fetching balance');
      setLoadingBalance(false);
    }
  };

  const transferTokens = async () => {
    try {
      setLoadingTransfer(true);
      const tokenContract = new web3.eth.Contract(ContractABI.abi, ContractABI.address);
      await tokenContract.methods.transfer(recipient, amount).send({ from: address });
      setLoadingTransfer(false);
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error('Error transferring tokens:', error);
      setError('Error transferring tokens');
      setLoadingTransfer(false);
    }
  };

  // Function to handle form submission for balance fetch
  const handleBalanceSubmit = (e) => {
    e.preventDefault();
    fetchBalance();
  };

  // Function to handle form submission for token transfer
  const handleTransferSubmit = (e) => {
    e.preventDefault();
    transferTokens();
  };

  return (
    <div>
      <h1>ERC20 Token Interaction</h1>
      <form onSubmit={handleBalanceSubmit}>
        <label>Enter Ethereum Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Check Balance</button>
      </form>
      {loadingBalance && <p>Loading balance...</p>}
      {balance && <p>Balance: {balance}</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleTransferSubmit}>
        <label>Recipient Address:</label>
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <button type="submit">Transfer</button>
      </form>
      {loadingTransfer && <p>Transferring tokens...</p>}
    </div>
  );
};

export default TokenForm
