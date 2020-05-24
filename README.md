# Reacmchain

Reacmchain is a React and Blockchain platform to manage and improve the supply chains of a company, aimed at revamping the supply chain management by incorporating the entire network of suppliers, manufacturers, dealers and consumers on a single unified blockchain. 


### **FEATURES**

* ***Automated Order Placing and Tracking:*** 	All processes such as placing the order, updating the order and providing feedback after the order has been received will be carried out using the web portal.
* ***End to end encryption:*** All the transactions will be end to end encrypted to ensure privacy. So that with the transperancy of the blockchain, the privacy of the users in not compromised.
* ***Keeping Records:*** The organisation will have access to the private blockchain associated with it. It will be allowed to view the history of all the transactions that it has been involved in so far.
* ***Data Trends:*** It will also be able to view the data trends provided by the blockchain conveniently. This will enable it to increase sales by analysing the relationship between sales in particular geographic regions with time to anticipate the demand of the product in that region and prepare accordingly. 
* ***Issue Tracking:*** In an event of complaint from the client, it can track down the history of the product and all those associated with its production to find out the defaulter. 
* ***Decide Reliability:*** It will be able to judge reliability on the basis of user feedback. In case, a particular supplier loses reliability, it can shift to a more suitable supplier with the help of its reliability rank.
* ***Inventory Alerts:*** We can also analyse and automatically suggest the orders that will be required based on the flow of the goods in the blockchain without compromising the privacy of either party. This will save the expenses of maintaining an inventory.
* ***Geo-based Inventory Alerts:*** The manufacturer can analyse the quality of the raw materials being supplied by studying the customer evaluation of the end product, for a given period of time, to shift resources accordingly. 

 This will perform the following:
		
	    1. Interact with each other and keep the transaction encrypted and 
               secure
        2.  Provide customer feedback directly to the concerned party. 	
        3.  Give alerts in case of an issue
        4.  Provide inventory suggestions.


## Installation

* To clone Reachmchain to your system use following commands in your command terminal.

```bash
git clone https://github.com/manakpandey/reacmchain.git
```
* To install truffle suite and ganache(private blockchain) go to the desired directory and give command:
```bash
npm install -g truffle
git clone https://github.com/trufflesuite/ganache.git

cd ganache

npm install
```

* To start the ganache blockchain, open ganache application and click on Quickstart Ethereum. 

![](https://github.com/manakpandey/reacmchain/blob/master/client/public/ganache.PNG)
* In the command terminal give the following commands to migrate the contracts to the ganache private blockchain.


```bash
cd reacmchain
cd blockchain
truffle compile
truffle migrate
```
This will give you following output:
![](https://github.com/manakpandey/reacmchain/blob/master/client/public/contract_add.PNG)

* Copy the contract address for user,product, rawproduct, mapping and order from the terminal output and paste them in reachmchain/client/src/config.js

![](https://github.com/manakpandey/reacmchain/blob/master/client/public/config.PNG)

* To employ Metamask to get the wallet key for accessing the Blockchain, install the Metamask browser extension.
Click on the "Import using account seed phrase" link at the bottom of the popup.
Open Ganache window and copy the mnemonic. Paste the mnemonic in the Seed phrase textbox of the Metamask, choose a password and restore your account.

![](https://github.com/manakpandey/reacmchain/blob/master/client/public/ganache_internal.PNG)

* To run the web application go to reachmchain directory in the terminal and give following commands:
```bash
cd client
npm install
npm start
```
* In the localhost address, Metamask will be activated and the dashboard for factory will be loaded.

* To access multiple accounts use the private keys from the Ganache application for different contract addresses and import those accounts.

# Developers
* [Akshita Saini](https://www.linkedin.com/in/akshita-saini-0782a61a1)

* [Harshal Shree](https://www.linkedin.com/in/harshal-shree)

* [Manak Pandey](https://www.linkedin.com/in/manakpandey)

* [Shreya Shrivastava](https://www.linkedin.com/in/shreya-shrivastava-6b1aba192)







