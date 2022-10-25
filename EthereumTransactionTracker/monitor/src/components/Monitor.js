import { useContext, useState, useEffect } from "react";
import { ConfigContext } from "../contexts/configContext";
import config from '../config/config.json'
import * as txService from '../services/tansaction'
import { Transaction } from "./Transaction";
const Web3 = require('web3');

export function Monitor() {
    const web3 = new Web3(config.httpProviderURL);
    
    let [lastSyncedBlock, setLastSyncedBlock] = useState();
    let { configuration } = useContext(ConfigContext)
    
    useEffect(() => {
        try {
            setLast(getLastBlockNumber());
            console.log('Looking for transactions...')
            searchTransaction();
            setInterval(async () => {
                searchTransaction();
            }, 6 * 10 * 1000);
        } catch (error) {
            console.log(error);
        }
    }, [])
    


    async function getBlock(blockNumber) {
        return await web3.eth.getBlock(blockNumber, true);
    }

   async function getLastBlockNumber() {
        return await web3.eth.getBlockNumber();
    }
    async function setLast(prms) {
        let num = await prms;
        setLastSyncedBlock(num);
    }

    function checkBlockTransaction(block) {
        if (block) {
            return !!block.transactions;
        }
        return false;
    }

    function checkIfConfigurationMatchTheTransaction(tx) {
        let match = false;

        if (tx?.chainId == configuration?.chainId) { match = true; }
        else if (tx?.from == configuration?.from) { match = true; }
        else if (tx?.gas == configuration?.gas) { match = true; }
        else if (tx?.gasPrice == configuration?.gasPrice) { match = true; }
        else if (tx?.hash == configuration?.hash) { match = true; }
        else if (tx?.input == configuration?.input) { match = true; }
        else if (tx?.nonce == configuration?.nonce) { match = true; }
        else if (tx?.r == configuration?.r) { match = true; }
        else if (tx?.s == configuration?.s) { match = true; }
        else if (tx?.to == configuration?.to) { match = true; }
        else if (tx?.transactionIndex == configuration?.transactionIndex) { match = true; }
        else if (tx?.type == configuration?.type) { match = true; }
        else if (tx?.v == configuration?.v) { match = true; }
        else if (tx?.value == configuration?.value) { match = true; }

        return match;
    }

    function insertTransaction(tx) {
        debugger
        txService.insert(tx)
            .then((data) => {
                if (!data.message) {
                    <Transaction input={data} />
                }
            })
    };

   async function searchTransaction() {
        const lastBlock = await getLastBlockNumber();
        console.log(`Searching blocks: ${lastSyncedBlock + 1} - ${lastBlock}`);

        for (let i = lastSyncedBlock + 1; i < lastBlock; i++) {
            const block = await getBlock(i);

            if (checkBlockTransaction(block)) {
                for (const tx of block.transactions) {
                    if (checkIfConfigurationMatchTheTransaction(tx)) {
                        insertTransaction(tx);
                    }
                }
            }
        }
        setLastSyncedBlock(lastBlock);
        console.log(
            `Finished searching blocks: ${lastSyncedBlock + 1} - ${lastBlock}`
        );
    }

    return (<></>);
}