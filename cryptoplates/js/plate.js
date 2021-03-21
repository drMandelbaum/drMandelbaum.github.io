function createPlateContract(adress) {
    return new web3.eth.Contract([
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_pressedBy",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_totalSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_data",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "delegate",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "delegate",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "tokenOwner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "data",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pressedAt",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pressedBy",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "buyer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        adress
    );
}

async function renderPlate(address) {
    let contract = createPlateContract(address)
    let pressedBy = await contract.methods.pressedBy().call()
    let pressedAt = await contract.methods.pressedAt().call()
    let name = await contract.methods.name().call()
    let data = await contract.methods.data().call()


    let mainElement = document.createElement("div")
    mainElement.setAttribute("class", "plate")


    // INFO ELEMENT
    let infoElement = document.createElement("div")
    infoElement.setAttribute("class", "plate_info")

    let plateIcon = blockies.create({
        seed: address,
        size: 10,
        scale: 8,
        spotcolor: -1
    });
    plateIcon.setAttribute("class", "plate_icon")

    let nameParagraph = document.createElement("p")
    nameParagraph.setAttribute("class", "plate_name")
    nameParagraph.textContent = name;

    let plateAddressParagraph = document.createElement("a")
    plateAddressParagraph.setAttribute("class", "plate_address")
    plateAddressParagraph.setAttribute("href", "?plate=" + address)
    plateAddressParagraph.setAttribute("target", "blank")
    plateAddressParagraph.textContent = address

    let pressedAtParagraph = document.createElement("p")
    pressedAtParagraph.setAttribute("class", "plate_pressed_at")
    pressedAtParagraph.textContent = "pressed at " + new Date(pressedAt * 1000).toLocaleString()

    infoElement.appendChild(plateIcon)
    infoElement.appendChild(nameParagraph)
    infoElement.appendChild(plateAddressParagraph)
    infoElement.appendChild(pressedAtParagraph)


    // PRESSED BY ELEMENT

    let pressedByElement = document.createElement("div")
    pressedByElement.setAttribute("class", "plate_pressed_by")

    let pressedByIcon = blockies.create({
        seed: pressedBy,
        size: 10,
        scale: 5,
        spotcolor: -1
    });
    pressedByIcon.setAttribute("class", "plate_pressed_by_icon")

    let pressedByLabelParagraph = document.createElement("p")
    pressedByLabelParagraph.setAttribute("class", "plate_pressed_by_label")
    pressedByLabelParagraph.textContent = "pressed by";

    let pressedByAddressParagraph = document.createElement("a")
    pressedByAddressParagraph.setAttribute("class", "plate_pressed_by_address")
    pressedByAddressParagraph.setAttribute("href", "?pressedBy=" + pressedBy)
    pressedByAddressParagraph.setAttribute("target", "blank")
    pressedByAddressParagraph.textContent = pressedBy;

    pressedByElement.appendChild(pressedByIcon)
    pressedByElement.appendChild(pressedByLabelParagraph)
    pressedByElement.appendChild(pressedByAddressParagraph)


    // CONTENT ELEMENT
    let dom = new DOMParser().parseFromString(data, "text/html")
    let dataElement = dom.body.firstElementChild


    // FINALIZE
    mainElement.appendChild(infoElement)
    mainElement.appendChild(pressedByElement)
    mainElement.appendChild(dataElement)
    return mainElement
}
