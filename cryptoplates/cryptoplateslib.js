
var web3;

async function initPlateLib() {
    await loadScript("./blockies.min.js").then()
    await loadScript("./web3.min.js")
    await loadWeb3()

    await loadScript("./plate.js")
    await loadScript("./selector.js")
    await loadScript("./press.js")

    onPlateLibInitialized()
}

async function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.onload = function () {
            resolve()
        };
        script.src = src;
        document.head.appendChild(script);
    })
}

async function firstAccount() {
    let accounts = await window.web3.eth.getAccounts()
    return accounts[0]
}

async function loadWeb3() {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}


