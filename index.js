const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545/")); // Use this URL if you're going to use Ganache Truffle.

const addresses = []; // Fill this array with the Ethereum addresses to be checked (Whether manually or from a Database).

async function main() {
    setInterval(async function () {
        console.clear();

        try {
            let tasks = [];
            for (let i = 0; i < addresses.length; i++) tasks.push(web3.eth.getBalance(addresses[i]));

            const balances = await Promise.all(tasks);

            for (let i = 0; i < balances.length; i++) console.log(`Address ${addresses[i]}: ${balances[i]}`);
        } catch (e) {
            console.log("Error get balance. Waiting for retry...");
        }
    }, 5000)
}

main().then();
