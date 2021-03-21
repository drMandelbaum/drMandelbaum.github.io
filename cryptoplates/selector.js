let selectorContract = new web3.eth.Contract([
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_press",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "collectionOf",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
], "0x89110355bA28e64A5C6239d56b9593772725814b")