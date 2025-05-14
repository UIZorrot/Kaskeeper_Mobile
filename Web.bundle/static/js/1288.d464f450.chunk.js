"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1288],{

/***/ 71288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L2: () => (/* binding */ krc20_blacklist_issue),
/* harmony export */   LL: () => (/* binding */ krc20_burn_issue),
/* harmony export */   Lr: () => (/* binding */ krc20_burn),
/* harmony export */   RX: () => (/* binding */ krc20_deploy_issue),
/* harmony export */   RZ: () => (/* binding */ krc20_issue),
/* harmony export */   Vk: () => (/* binding */ krc20_chown_issue),
/* harmony export */   cG: () => (/* binding */ krc20_mint_back),
/* harmony export */   cc: () => (/* binding */ krc20_trans_issue),
/* harmony export */   ok: () => (/* binding */ krc20_trans),
/* harmony export */   q4: () => (/* binding */ krc20_mint_once),
/* harmony export */   tq: () => (/* binding */ krc20_chown),
/* harmony export */   xX: () => (/* binding */ krc20_deploy)
/* harmony export */ });
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45989);
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__["default"])();

// log('Main: starting rpc connection', 'INFO');
// const RPC = new RpcClient({
//   resolver: new Resolver(),
//   encoding: Encoding.Borsh,
//   networkId: "testnet"
// });

// await RPC.disconnect();
// await RPC.connect();
// log('Main: RPC connection established', 'INFO');
// log(RPC)

const timeout_first = 3500; // 5 sec
const timeout_rev = 1500; // 5 sec
const ComFeeMint = "0.5";
const ComFeeDeploy = "0.5";
const gasOwnerTest_Scale = "kaspatest:qzt3zr4grnn9c38dkunuwvnuypfl8qwz9ssljyjxz69fwm6lq4n3j4h2tcjtp";
const gasOwnerTest = "kaspatest:qzt3zr4grnn9c38dkunuwvnuypfl8qwz9ssljyjxz69fwm6lq4n3j4h2tcjtp";
const gasOwnerMain_Scale = "kaspa:qzt3zr4grnn9c38dkunuwvnuypfl8qwz9ssljyjxz69fwm6lq4n3j53vshv69";
const gasOwnerMain = "kaspa:qypqy44vzddfxujuc7xpcu8klgr2q5fs62wr6mkzv7g39mvalnzvx8s4qlmnjvf";
function getOwner(network) {
  if (network == "mainnet") {
    return gasOwnerMain;
  } else {
    return gasOwnerTest;
  }
}
function getOwnerScale(network) {
  if (network == "mainnet") {
    return gasOwnerMain_Scale;
  } else {
    return gasOwnerTest_Scale;
  }
}
async function krc20_mint_back(privateKeyArg, network, ticker, priorityFeeValue) {
  // ticker 代币简称 'TCHIMP'
  let addedEventTrxId;
  let SubmittedtrxId;
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    if (revealUTXOs.entries) {
      log('HAS!');
      log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
      for (let i = 0; i < revealUTXOs.entries.length; i++) {
        const {
          transactions: revealTransactions
        } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
          entries: [revealUTXOs.entries[i]],
          outputs: [],
          changeAddress: address.toString(),
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("0.001"),
          networkId: network
        });
        let revealHash;
        for (const transaction of revealTransactions) {
          transaction.sign([privateKey], false);
          log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
          const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
          if (ourOutput !== -1) {
            const signature = await transaction.createInputSignature(ourOutput, privateKey);
            transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
          }
          revealHash = await transaction.submit(RPC);
          log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
          SubmittedtrxId = revealHash;
        }
      }
      await new Promise(resolve => setTimeout(resolve, timeout_rev));

      // Check if the reveal transaction has been accepted
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === transactionId;
      });
      if (revealAccepted) {
        log(`Reveal transaction has been accepted`, 'INFO');
        // Only disconnect after completing all loops
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: ""
        };
      } else if (!eventReceived) {
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } else {
      return {
        status: true,
        msg: 'No extra UTXOs find',
        hash: ''
      };
    }
  } catch (e) {
    return {
      status: false,
      msg: e,
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_mint_once(privateKeyArg, network, ticker, priorityFeeValue, Num) {
  // ticker 代币简称 'TCHIMP'
  let addedEventTrxId;
  let SubmittedtrxId;
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    let selected_UTXO;
    if (revealUTXOs.entries) {
      for (let i = 0; i < revealUTXOs.entries.length; i++) {
        if (revealUTXOs.entries[i].entry.amount > (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1.1")) {
          selected_UTXO = revealUTXOs.entries[i];
          break;
        }
      }
    }
    if (selected_UTXO) {
      log('HAS!');
      log(`Main: Creating Transaction with revealUTX0s entries: ${selected_UTXO}`, 'INFO');
      const {
        transactions: revealTransactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        entries: [selected_UTXO],
        outputs: [],
        changeAddress: P2SHAddress.toString(),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1"),
        networkId: network
      });
      let revealHash;
      for (const transaction of revealTransactions) {
        transaction.sign([privateKey], false);
        log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
        const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
        if (ourOutput !== -1) {
          const signature = await transaction.createInputSignature(ourOutput, privateKey);
          transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
        }
        revealHash = await transaction.submit(RPC);
        log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
        SubmittedtrxId = revealHash;
      }
      await new Promise(resolve => setTimeout(resolve, timeout_rev));

      // Check if the reveal transaction has been accepted
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        // Only disconnect after completing all loops
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } else {
      try {
        const {
          entries
        } = await RPC.getUtxosByAddresses({
          addresses: [address.toString()]
        });
        const {
          transactions
        } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
          priorityEntries: [],
          entries,
          outputs: [{
            address: P2SHAddress.toString(),
            amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)((Num + Num * 0.01 + 0.1).toString())
          }, {
            address: getOwner(network),
            amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(ComFeeMint)
          }, {
            address: getOwnerScale(network),
            amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(ComFeeMint)
          }],
          changeAddress: address.toString(),
          priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
          networkId: network
        });
        for (const transaction of transactions) {
          transaction.sign([privateKey]);
          log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
          const hash = await transaction.submit(RPC);
          log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
          SubmittedtrxId = hash;
        }

        // Wait for the maturity event
        // TODO: BOSS SAID NO
        await new Promise(resolve => setTimeout(resolve, timeout_first));
      } catch (initialError) {
        log(`Initial transaction error: ${initialError}`, 'ERROR');
        return {
          status: false,
          msg: `Initial transaction error: ${initialError}`,
          hash: ''
        };
      }

      // Continue with reveal transaction after maturity event
      // if(eventReceived){
      eventReceived = false;
      log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
      log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
      const revealUTXOs = await RPC.getUtxosByAddresses({
        addresses: [P2SHAddress.toString()]
      });
      log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries[0]}`, 'INFO');
      let selected_UTXO;
      if (revealUTXOs.entries) {
        for (let i = 0; i < revealUTXOs.entries.length; i++) {
          if (revealUTXOs.entries[i].entry.amount > (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1.1")) {
            selected_UTXO = revealUTXOs.entries[i];
            break;
          }
        }
      }
      const {
        transactions: revealTransactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        entries: [selected_UTXO],
        outputs: [],
        changeAddress: P2SHAddress.toString(),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1"),
        networkId: network
      });
      let revealHash;
      for (const transaction of revealTransactions) {
        transaction.sign([privateKey], false);
        log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
        const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
        if (ourOutput !== -1) {
          const signature = await transaction.createInputSignature(ourOutput, privateKey);
          transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
        }
        revealHash = await transaction.submit(RPC);
        log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
        SubmittedtrxId = revealHash;
      }

      // Wait for the maturity event
      // eslint-disable-next-line no-loop-func
      // const revealTimeout = setTimeout(() => {
      //   if (!eventReceived) {
      //     log(`Timeout: Commit transaction did not mature within ${timeout}`, 'ERROR');
      //     return {
      //       status: false,
      //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
      //       hash: ''
      //     }
      //   }
      // }, timeout);

      // while (!eventReceived) {
      //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
      // }

      // clearTimeout(revealTimeout);
      // eventReceived = false;

      await new Promise(resolve => setTimeout(resolve, timeout_rev));

      // Check if the reveal transaction has been accepted
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        // Only disconnect after completing all loops
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    }

    // }
    // else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    return {
      status: false,
      msg: e,
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_deploy(privateKeyArg, network, ticker, priorityFeeValue, max, lim, dec) {
  let pre = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  let addedEventTrxId;
  let SubmittedtrxId;

  // const dup_res = await axios.get('https://tn10api.kasplex.org/v1/krc20/token/' + ticker)
  // if(dup_res.data.result[0].state == 'deployed')
  // {
  //   return {
  //     status: false,
  //     msg: 'Error: Ticker has deployed',
  //     hash: ''
  //   }
  // }

  log('Main: starting rpc connection', 'INFO');
  const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
    resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
    encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
    networkId: network
  });
  await RPC.disconnect();
  await RPC.connect();
  log('Main: RPC connection established', 'INFO');
  printResolverUrls(RPC);
  log('Main: Submitting private key', 'INFO');
  const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
  log('Main: Determining public key', 'INFO');
  const publicKey = privateKey.toPublicKey();
  log('Main: Determining wallet address', 'INFO');
  const address = publicKey.toAddress(network);
  log(`Address: ${address.toString()}`, 'INFO');

  // New UTXO subscription setup (ADD this):
  log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
  await RPC.subscribeUtxosChanged([address.toString()]);
  RPC.addEventListener('utxos-changed', async event => {
    log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

    // Check for UTXOs removed for the specific address
    const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
    const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
    if (removedEntry) {
      // Use custom replacer function in JSON.stringify to handle BigInt
      log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
      log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
      addedEventTrxId = addedEntry.outpoint.transactionId;
      log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
      if (addedEventTrxId == SubmittedtrxId) {
        eventReceived = true;
      }
    } else {
      log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
    }
  });
  const data = {
    'p': 'KRC-20',
    'op': 'deploy',
    'tick': ticker.toString(),
    'max': max.toString(),
    'lim': lim.toString(),
    'dec': dec.toString(),
    'pre': pre.toString()
  };
  log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
  const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
  const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
  let eventReceived = false;
  log(`Constructed Script: ${script.toString()}`, 'INFO');
  log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
  try {
    const {
      entries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      priorityEntries: [],
      entries,
      outputs: [{
        address: P2SHAddress.toString(),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1001")
      }, {
        address: getOwner(network),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(ComFeeDeploy)
      }, {
        address: getOwnerScale(network),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(ComFeeDeploy)
      }],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });

    // {
    //   address: getOwnerScale(network),
    //   amount: kaspaToSompi(ComFeeDeploy)!
    // }

    for (const transaction of transactions) {
      transaction.sign([privateKey]);
      log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
      const hash = await transaction.submit(RPC);
      log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
      SubmittedtrxId = hash;
    }

    // Set a timeout to handle failure cases
    await new Promise(resolve => setTimeout(resolve, timeout_first));
  } catch (initialError) {
    log(`Initial transaction error: ${initialError}`, 'ERROR');
    return {
      status: false,
      msg: `Initial transaction error: ${initialError}`,
      hash: ''
    };
  }

  // if (eventReceived) {
  eventReceived = false;
  log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
  log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
  const revealUTXOs = await RPC.getUtxosByAddresses({
    addresses: [P2SHAddress.toString()]
  });
  const {
    transactions
  } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
    entries: [revealUTXOs.entries[0]],
    outputs: [],
    changeAddress: address.toString(),
    priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1000"),
    networkId: network
  });
  let revealHash;
  for (const transaction of transactions) {
    transaction.sign([privateKey], false);
    log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
    const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
    if (ourOutput !== -1) {
      const signature = await transaction.createInputSignature(ourOutput, privateKey);
      transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
    }
    revealHash = await transaction.submit(RPC);
    log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
    SubmittedtrxId = revealHash;
  }

  // const revealTimeout = setTimeout(() => {
  //   if (!eventReceived) {
  //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
  //     return {
  //       status: false,
  //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
  //       hash: ''
  //     }
  //   }
  // }, timeout);

  // // // Wait until the maturity event has been received
  // while (!eventReceived) {
  //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
  // }

  // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

  await new Promise(resolve => setTimeout(resolve, timeout_rev));
  try {
    // Fetch the updated UTXOs
    const updatedUTXOs = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });

    // Check if the reveal transaction is accepted
    const revealAccepted = updatedUTXOs.entries.some(entry => {
      const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
      return transactionId === revealHash;
    });

    // If reveal transaction is accepted
    if (revealAccepted) {
      log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
      await RPC.disconnect();
      log('RPC client disconnected.', 'INFO');
      return {
        status: true,
        msg: 'Success',
        hash: revealHash
      };
    } else if (!eventReceived) {
      // Check eventReceived here
      return {
        status: true,
        msg: 'Reveal transaction has not been accepted yet',
        hash: ''
      };
    }
  } catch (error) {
    log(`Error checking reveal transaction status: ${error}`, 'ERROR');
    return {
      status: false,
      msg: `Error checking reveal transaction status: ${error}`,
      hash: ''
    };
  }

  // } else {
  //   log('Error: No UTXOs available for reveal', 'ERROR');
  //   return {
  //     status: false,
  //     msg: 'Error: No UTXOs available for reveal',
  //     hash: ''
  //   }
  // }
  return {
    status: true,
    msg: `Timeout`,
    hash: ''
  };
}
async function krc20_deploy_issue(privateKeyArg, network, name, priorityFeeValue, max, lim, dec) {
  let pre = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  let addedEventTrxId;
  let SubmittedtrxId;

  // const dup_res = await axios.get('https://tn10api.kasplex.org/v1/krc20/token/' + ticker)
  // if(dup_res.data.result[0].state == 'deployed')
  // {
  //   return {
  //     status: false,
  //     msg: 'Error: Ticker has deployed',
  //     hash: ''
  //   }
  // }

  log('Main: starting rpc connection', 'INFO');
  const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
    resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
    encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
    networkId: network
  });
  await RPC.disconnect();
  await RPC.connect();
  log('Main: RPC connection established', 'INFO');
  printResolverUrls(RPC);
  log('Main: Submitting private key', 'INFO');
  const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
  log('Main: Determining public key', 'INFO');
  const publicKey = privateKey.toPublicKey();
  log('Main: Determining wallet address', 'INFO');
  const address = publicKey.toAddress(network);
  log(`Address: ${address.toString()}`, 'INFO');

  // New UTXO subscription setup (ADD this):
  log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
  await RPC.subscribeUtxosChanged([address.toString()]);
  RPC.addEventListener('utxos-changed', async event => {
    log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

    // Check for UTXOs removed for the specific address
    const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
    const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
    if (removedEntry) {
      // Use custom replacer function in JSON.stringify to handle BigInt
      log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
      log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
      addedEventTrxId = addedEntry.outpoint.transactionId;
      log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
      if (addedEventTrxId == SubmittedtrxId) {
        eventReceived = true;
      }
    } else {
      log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
    }
  });
  const data = {
    'p': 'KRC-20',
    'op': 'deploy',
    'mod': 'issue',
    'name': name.toString(),
    'max': max.toString(),
    'dec': dec.toString(),
    'pre': pre.toString()
  };
  log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
  const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
  const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
  let eventReceived = false;
  log(`Constructed Script: ${script.toString()}`, 'INFO');
  log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
  try {
    const {
      entries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      priorityEntries: [],
      entries,
      outputs: [{
        address: P2SHAddress.toString(),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1001")
      }, {
        address: getOwner(network),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(ComFeeDeploy)
      }, {
        address: getOwnerScale(network),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(ComFeeDeploy)
      }],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });

    // {
    //   address: getOwnerScale(network),
    //   amount: kaspaToSompi(ComFeeDeploy)!
    // }

    for (const transaction of transactions) {
      transaction.sign([privateKey]);
      log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
      const hash = await transaction.submit(RPC);
      log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
      SubmittedtrxId = hash;
    }

    // Set a timeout to handle failure cases
    await new Promise(resolve => setTimeout(resolve, timeout_first));
  } catch (initialError) {
    log(`Initial transaction error: ${initialError}`, 'ERROR');
    return {
      status: false,
      msg: `Initial transaction error: ${initialError}`,
      hash: ''
    };
  }

  // if (eventReceived) {
  eventReceived = false;
  log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
  log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
  const revealUTXOs = await RPC.getUtxosByAddresses({
    addresses: [P2SHAddress.toString()]
  });
  const {
    transactions
  } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
    entries: [revealUTXOs.entries[0]],
    outputs: [],
    changeAddress: address.toString(),
    priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1000"),
    networkId: network
  });
  let revealHash;
  for (const transaction of transactions) {
    transaction.sign([privateKey], false);
    log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
    const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
    if (ourOutput !== -1) {
      const signature = await transaction.createInputSignature(ourOutput, privateKey);
      transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
    }
    revealHash = await transaction.submit(RPC);
    log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
    SubmittedtrxId = revealHash;
  }

  // const revealTimeout = setTimeout(() => {
  //   if (!eventReceived) {
  //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
  //     return {
  //       status: false,
  //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
  //       hash: ''
  //     }
  //   }
  // }, timeout);

  // // // Wait until the maturity event has been received
  // while (!eventReceived) {
  //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
  // }

  // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

  await new Promise(resolve => setTimeout(resolve, timeout_rev));
  try {
    // Fetch the updated UTXOs
    const updatedUTXOs = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });

    // Check if the reveal transaction is accepted
    const revealAccepted = updatedUTXOs.entries.some(entry => {
      const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
      return transactionId === revealHash;
    });

    // If reveal transaction is accepted
    if (revealAccepted) {
      log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
      await RPC.disconnect();
      log('RPC client disconnected.', 'INFO');
      return {
        status: true,
        msg: 'Success',
        hash: revealHash
      };
    } else if (!eventReceived) {
      // Check eventReceived here
      return {
        status: true,
        msg: 'Reveal transaction has not been accepted yet',
        hash: ''
      };
    }
  } catch (error) {
    log(`Error checking reveal transaction status: ${error}`, 'ERROR');
    return {
      status: false,
      msg: `Error checking reveal transaction status: ${error}`,
      hash: ''
    };
  }

  // } else {
  //   log('Error: No UTXOs available for reveal', 'ERROR');
  //   return {
  //     status: false,
  //     msg: 'Error: No UTXOs available for reveal',
  //     hash: ''
  //   }
  // }
  return {
    status: true,
    msg: `Timeout`,
    hash: ''
  };
}
async function krc20_trans(privateKeyArg, network, ticker, priorityFeeValue, dest, amount) {
  console.log('priorityFeeValue', priorityFeeValue);
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'transfer',
      'tick': ticker,
      'amt': amount.toString(),
      'to': dest.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_trans_issue(privateKeyArg, network, ca, priorityFeeValue, dest, amount) {
  console.log('priorityFeeValue', priorityFeeValue);
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'transfer',
      'ca': ca,
      'amt': amount.toString(),
      'to': dest.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_issue(privateKeyArg, network, ca, priorityFeeValue, dest, amount) {
  console.log('priorityFeeValue', priorityFeeValue);
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'issue',
      'ca': ca,
      'amt': amount.toString(),
      'to': dest.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_burn(privateKeyArg, network, tick, priorityFeeValue, amount) {
  console.log('priorityFeeValue', priorityFeeValue);
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'burn',
      'tick': tick,
      'amt': amount.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_burn_issue(privateKeyArg, network, ca, priorityFeeValue, amount) {
  console.log('priorityFeeValue', priorityFeeValue);
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'burn',
      'ca': ca,
      'amt': amount.toString()
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_blacklist_issue(privateKeyArg, network, ca, mod, to, priorityFeeValue) {
  console.log('priorityFeeValue', priorityFeeValue);
  // mod = "add" || "remove"."
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'blacklist',
      'ca': ca,
      'mod': mod,
      'to': to
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_chown(privateKeyArg, network, tick, to, priorityFeeValue) {
  console.log('priorityFeeValue', priorityFeeValue);
  // mod = "add" || "remove"."
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'chown',
      'tick': tick,
      'to': to
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}
async function krc20_chown_issue(privateKeyArg, network, ca, to, priorityFeeValue) {
  console.log('priorityFeeValue', priorityFeeValue);
  // mod = "add" || "remove"."
  let addedEventTrxId;
  let SubmittedtrxId;
  const gasOwner = getOwner(network);
  try {
    log('Main: starting rpc connection', 'INFO');
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    log('Main: RPC connection established', 'INFO');
    printResolverUrls(RPC);
    log('Main: Submitting private key', 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    log('Main: Determining public key', 'INFO');
    const publicKey = privateKey.toPublicKey();
    log('Main: Determining wallet address', 'INFO');
    const address = publicKey.toAddress(network);
    log(`Address: ${address.toString()}`, 'INFO');

    // New UTXO subscription setup (ADD this):
    log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'chown',
      'ca': ca,
      'to': to
    };
    log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log(`Constructed Script: ${script.toString()}`, 'INFO');
    log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    try {
      const {
        entries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      const {
        transactions
      } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
        priorityEntries: [],
        entries: entries,
        outputs: [{
          address: P2SHAddress.toString(),
          amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1")
        }],
        changeAddress: address.toString(),
        priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
        networkId: network
      });
      console.log("CREATE TRANS");
      for (const transaction of transactions) {
        transaction.sign([privateKey]);
        log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
        const hash = await transaction.submit(RPC);
        log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log(`Initial transaction error: ${initialError}`, 'ERROR');
      return {
        status: false,
        msg: `Initial transaction error: ${initialError}`,
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries}`, 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      entries: revealUTXOs.entries,
      outputs: [],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    let revealHash;
    for (const transaction of transactions) {
      transaction.sign([privateKey], false);
      log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
      SubmittedtrxId = revealHash;
    }

    // const revealTimeout = setTimeout(() => {
    //   if (!eventReceived) {
    //     log(`Timeout: Commit transaction did not mature within ${timeout} minutes`, 'ERROR');
    //     return {
    //       status: false,
    //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
    //       hash: ''
    //     }
    //   }
    // }, timeout);

    // // Wait until the maturity event has been received
    // while (!eventReceived) {
    //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
    // }

    // clearTimeout(revealTimeout);  // Clear the reveal timeout if the event is received

    await new Promise(resolve => setTimeout(resolve, timeout_rev));
    try {
      // Fetch the updated UTXOs
      const updatedUTXOs = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });

      // Check if the reveal transaction is accepted
      const revealAccepted = updatedUTXOs.entries.some(entry => {
        const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
        return transactionId === revealHash;
      });

      // If reveal transaction is accepted
      if (revealAccepted) {
        log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
        await RPC.disconnect();
        log('RPC client disconnected.', 'INFO');
        return {
          status: true,
          msg: 'Success',
          hash: revealHash
        };
      } else if (!eventReceived) {
        // Check eventReceived here
        return {
          status: true,
          msg: 'Reveal transaction has not been accepted yet',
          hash: ''
        };
      }
    } catch (error) {
      log(`Error checking reveal transaction status: ${error}`, 'ERROR');
      return {
        status: false,
        msg: `Error checking reveal transaction status: ${error}`,
        hash: ''
      };
    }

    // } else {
    //   log('Error: No UTXOs available for reveal', 'ERROR');
    //   return {
    //     status: false,
    //     msg: 'Error: No UTXOs available for reveal',
    //     hash: ''
    //   }
    // }
  } catch (e) {
    log(e);
    return {
      status: false,
      msg: 'RPC Connection or Keypair Errr',
      hash: ''
    };
  }
  return {
    status: true,
    msg: 'Timeout',
    hash: ''
  };
}

//---------------- HELPER --------------------

function log(message) {
  let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'INFO';
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}
function printResolverUrls(rpcClient) {
  const resolver = rpcClient.resolver;
  if (resolver && resolver.urls) {
    log('Resolver URLs:', 'INFO');
    resolver.urls.forEach(url => {
      log(url, 'INFO');
    });
  } else {
    log('No URLs found in the Resolver.', 'INFO');
  }
}

// const k = await krc20_deploy('b2cda8339f0835d60aa73d8f3ef9ac8f92ab32024f32c8ae40eb9cfde811ebf4', 'testnet-10', 'JIENEQ', 1.5, 1000000000000, 100000, 8, 0)
// console.log('The result is')
// console.log(k)
// export async function krc20_mint_once(privateKeyArg, network, ticker, priorityFeeValue, Num){
//   // ticker 代币简称 'TCHIMP'
//   let addedEventTrxId;
//   let SubmittedtrxId;
//   let Num_Left = Num

//   try{
//     log('Main: starting rpc connection', 'INFO');
//     const RPC = new RpcClient({
//       resolver: new Resolver(),
//       encoding: Encoding.Borsh,
//       networkId: network
//     });

//     await RPC.disconnect();
//     await RPC.connect();
//     log('Main: RPC connection established', 'INFO');

//     printResolverUrls(RPC);

//     log('Main: Submitting private key', 'INFO');
//     const privateKey = new PrivateKey(privateKeyArg);
//     log('Main: Determining public key', 'INFO');
//     const publicKey = privateKey.toPublicKey();
//     log('Main: Determining wallet address', 'INFO');
//     const address = publicKey.toAddress(network);
//     log(`Address: ${address.toString()}`, 'INFO');

//     // New UTXO subscription setup (ADD this):
//     log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
//     await RPC.subscribeUtxosChanged([address.toString()]);

//     RPC.addEventListener('utxos-changed', async (event: any) => {
//       log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

//       // Check for UTXOs removed for the specific address
//       const removedEntry = event.data.removed.find((entry: any) =>
//         entry.address.payload === address.toString().split(':')[1]
//       );
//       const addedEntry = event.data.added.find((entry: any) =>
//         entry.address.payload === address.toString().split(':')[1]
//       );

//       if (removedEntry) {
//       // Use custom replacer function in JSON.stringify to handle BigInt
//         log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) =>
//           typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
//         log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) =>
//           typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
//         addedEventTrxId = addedEntry.outpoint.transactionId;
//         log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
//         if (addedEventTrxId == SubmittedtrxId) {
//           eventReceived = true;
//         }
//       } else {
//         log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
//       }
//     });

//     const data = { 'p': 'krc-20', 'op': 'mint', 'tick': ticker.toString() };
//     log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');

//     const script = new ScriptBuilder()
//       .addData(publicKey.toXOnlyPublicKey().toString())
//       .addOp(Opcodes.OpCheckSig)
//       .addOp(Opcodes.OpFalse)
//       .addOp(Opcodes.OpIf)
//       .addData(new Uint8Array(Buffer.from('kasplex').buffer))
//       .addI64(0n)
//       .addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0))))
//       .addOp(Opcodes.OpEndIf);

//     const P2SHAddress = addressFromScriptPublicKey(script.createPayToScriptHashScript(), network)!;
//     let eventReceived = false;

//     for(let i = 0; i < Num; i++)
//     {

//       log(`Constructed Script: ${script.toString()}`, 'INFO');
//       log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');

//       log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');

//       log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
//       const revealUTXOs = await RPC.getUtxosByAddresses({ addresses: [P2SHAddress.toString()] });
//       let selected_UTXO;

//       if(revealUTXOs.entries){
//           for( let i = 0; i < revealUTXOs.entries.length; i++)
//           {

//               if(revealUTXOs.entries[i].entry.amount > kaspaToSompi("1.1")!) {
//                 selected_UTXO = revealUTXOs.entries[i];
//                 break;
//               }
//           }
//       }

//       if(selected_UTXO)
//         {
//           log('HAS!')
//           log(`Main: Creating Transaction with revealUTX0s entries: ${selected_UTXO}`, 'INFO');

//           const { transactions: revealTransactions } = await createTransactions({
//             entries: [selected_UTXO],
//             outputs: [],
//             changeAddress: P2SHAddress.toString(),
//             // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//             priorityFee: kaspaToSompi("1")!,
//             networkId: network
//           });
//           let revealHash: any;

//           for (const transaction of revealTransactions) {
//             transaction.sign([privateKey], false);
//             log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
//             const ourOutput = transaction.transaction.inputs.findIndex((input) => input.signatureScript === '');

//             if (ourOutput !== -1) {
//               const signature = await transaction.createInputSignature(ourOutput, privateKey);
//               transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
//             }
//             revealHash = await transaction.submit(RPC);
//             log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
//             SubmittedtrxId = revealHash;
//           }
//           Num_Left = Num_Left-1
//           await new Promise(resolve => setTimeout(resolve, timeout_rev));

//         }

//     else{
//       try {
//         const { entries } = await RPC.getUtxosByAddresses({ addresses: [address.toString()] });
//         const { transactions } = await createTransactions({
//           priorityEntries: [],
//           entries,
//           outputs: [{
//             address: P2SHAddress.toString(),
//             amount: kaspaToSompi((Num_Left+(Num_Left*0.01)+0.1).toString())!
//           },
//           {
//           address: getOwner(network),
//           amount: kaspaToSompi("1")!
//           }
//        ],
//           changeAddress: address.toString(),
//           priorityFee: kaspaToSompi(priorityFeeValue.toString())!,
//           networkId: network
//         });

//         for (const transaction of transactions) {
//           transaction.sign([privateKey]);
//           log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
//           const hash = await transaction.submit(RPC);
//           log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
//           SubmittedtrxId = hash;
//         }

//         // Wait for the maturity event
//         // TODO: BOSS SAID NO
//         await new Promise(resolve => setTimeout(resolve, timeout_first));
//       } catch (initialError) {
//         log(`Initial transaction error: ${initialError}`, 'ERROR');
//         return {
//           status: false,
//           msg: `Initial transaction error: ${initialError}`,
//           hash: ''
//         }
//       }

//             eventReceived = false;

//             log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');

//             log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
//             const revealUTXOs = await RPC.getUtxosByAddresses({ addresses: [P2SHAddress.toString()] });

//             log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries[0]}`, 'INFO');

//             let selected_UTXO;
//             if(revealUTXOs.entries){
//             for( let i = 0; i < revealUTXOs.entries.length; i++)
//             {

//                 if(revealUTXOs.entries[i].entry.amount > kaspaToSompi("1.1")!) {
//                   selected_UTXO = revealUTXOs.entries[i];
//                   break;
//                 }
//               }
//             }

//             const { transactions: revealTransactions } = await createTransactions({
//               entries: [selected_UTXO],
//               outputs: [],
//               changeAddress: P2SHAddress.toString(),
//               // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//               priorityFee: kaspaToSompi("1")!,
//               networkId: network
//             });
//             let revealHash: any;

//             for (const transaction of revealTransactions) {
//               transaction.sign([privateKey], false);
//               log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
//               const ourOutput = transaction.transaction.inputs.findIndex((input) => input.signatureScript === '');

//               if (ourOutput !== -1) {
//                 const signature = await transaction.createInputSignature(ourOutput, privateKey);
//                 transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
//               }
//               revealHash = await transaction.submit(RPC);
//               log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
//               SubmittedtrxId = revealHash;
//             }

//             // Wait for the maturity event
//             // eslint-disable-next-line no-loop-func
//             // const revealTimeout = setTimeout(() => {
//             //   if (!eventReceived) {
//             //     log(`Timeout: Commit transaction did not mature within ${timeout}`, 'ERROR');
//             //     return {
//             //       status: false,
//             //       msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`,
//             //       hash: ''
//             //     }
//             //   }
//             // }, timeout);

//             // while (!eventReceived) {
//             //   await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
//             // }

//             // clearTimeout(revealTimeout);
//             // eventReceived = false;

//             await new Promise(resolve => setTimeout(resolve, timeout_rev));
//     }
//   }
//     // }
//   } catch(e) {
//     return {
//       status: false,
//       msg: e,
//       hash: ''
//     }
//   }
//   return {
//     status: true,
//     msg: 'Success',
//     hash: ''
//   }
// }

// export async function krc20_mint(privateKeyArg, network, ticker, priorityFeeValue, loops){
//   // ticker 代币简称 'TCHIMP'
//   let addedEventTrxId;
//   let SubmittedtrxId;

//   try{
//     log('Main: starting rpc connection', 'INFO');
//     const RPC = new RpcClient({
//       resolver: new Resolver(),
//       encoding: Encoding.Borsh,
//       networkId: network
//     });

//     await RPC.disconnect();
//     await RPC.connect();
//     log('Main: RPC connection established', 'INFO');

//     printResolverUrls(RPC);

//     log('Main: Submitting private key', 'INFO');
//     const privateKey = new PrivateKey(privateKeyArg);
//     log('Main: Determining public key', 'INFO');
//     const publicKey = privateKey.toPublicKey();
//     log('Main: Determining wallet address', 'INFO');
//     const address = publicKey.toAddress(network);
//     log(`Address: ${address.toString()}`, 'INFO');

//     // New UTXO subscription setup (ADD this):
//     log(`Subscribing to UTXO changes for address: ${address.toString()}`, 'INFO');
//     await RPC.subscribeUtxosChanged([address.toString()]);

//     RPC.addEventListener('utxos-changed', async (event: any) => {
//       log(`UTXO changes detected for address: ${address.toString()}`, 'INFO');

//       // Check for UTXOs removed for the specific address
//       const removedEntry = event.data.removed.find((entry: any) =>
//         entry.address.payload === address.toString().split(':')[1]
//       );
//       const addedEntry = event.data.added.find((entry: any) =>
//         entry.address.payload === address.toString().split(':')[1]
//       );

//       if (removedEntry) {
//       // Use custom replacer function in JSON.stringify to handle BigInt
//         log(`Added UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(addedEntry, (key, value) =>
//           typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
//         log(`Removed UTXO found for address: ${address.toString()} with UTXO: ${JSON.stringify(removedEntry, (key, value) =>
//           typeof value === 'bigint' ? value.toString() + 'n' : value)}`, 'INFO');
//         addedEventTrxId = addedEntry.outpoint.transactionId;
//         log(`Added UTXO TransactionId: ${addedEventTrxId}`, 'INFO');
//         if (addedEventTrxId == SubmittedtrxId) {
//           eventReceived = true;
//         }
//       } else {
//         log(`No removed UTXO found for address: ${address.toString()} in this UTXO change event`, 'INFO');
//       }
//     });

//     const gasFee = 1
//     const data = { 'p': 'krc-20', 'op': 'mint', 'tick': ticker };
//     log(`Main: Data to use for ScriptBuilder: ${JSON.stringify(data)}`, 'INFO');

//     const script = new ScriptBuilder()
//       .addData(publicKey.toXOnlyPublicKey().toString())
//       .addOp(Opcodes.OpCheckSig)
//       .addOp(Opcodes.OpFalse)
//       .addOp(Opcodes.OpIf)
//       .addData(new Uint8Array(Buffer.from('kasplex').buffer))
//       .addI64(0n)
//       .addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0))))
//       .addOp(Opcodes.OpEndIf);

//     const P2SHAddress = addressFromScriptPublicKey(script.createPayToScriptHashScript(), network)!;
//     let eventReceived = false;

//     log(`Constructed Script: ${script.toString()}`, 'INFO');
//     log(`P2SH Address: ${P2SHAddress.toString()}`, 'INFO');

//     for (let i = 0; i < loops; i++) {
//       log(`Starting loop iteration ${i + 1} of ${loops}`, 'INFO');

//       try {
//         const { entries } = await RPC.getUtxosByAddresses({ addresses: [address.toString()] });
//         const slice: UtxoEntryReference[] = entries.slice(0, 10);
//         const { transactions } = await createTransactions({
//           priorityEntries: [],
//           entries: slice,
//           outputs: [{
//             address: P2SHAddress.toString(),
//             amount: kaspaToSompi('0.3')!
//           }],
//           changeAddress: address.toString(),
//           priorityFee: kaspaToSompi(priorityFeeValue.toString())!,
//           networkId: network
//         });

//         for (const transaction of transactions) {
//           transaction.sign([privateKey]);
//           log(`Main: Transaction signed with ID: ${transaction.id}`, 'INFO');
//           const hash = await transaction.submit(RPC);
//           log(`submitted P2SH commit sequence transaction on: ${hash}`, 'INFO');
//           SubmittedtrxId = hash;
//         }

//         // Wait for the maturity event
//         // eslint-disable-next-line no-loop-func
//         const commitTimeout = setTimeout(() => {
//           if (!eventReceived) {
//             log(`Timeout: Commit transaction did not mature within ${timeout}`, 'ERROR');
//             return {
//               status: false,
//               msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`
//             }
//           }
//         }, timeout);

//         while (!eventReceived) {
//           await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
//         }

//         clearTimeout(commitTimeout);

//         // Continue with reveal transaction after maturity event
//         eventReceived = false;
//         log(`Main: creating UTXO entries from ${address.toString()}`, 'INFO');
//         const { entries: newEntries } = await RPC.getUtxosByAddresses({ addresses: [address.toString()] });
//         log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
//         const revealUTXOs = await RPC.getUtxosByAddresses({ addresses: [P2SHAddress.toString()] });

//         log(`Main: Creating Transaction with revealUTX0s entries: ${revealUTXOs.entries[0]}`, 'INFO');
//         const newSlice: UtxoEntryReference[] = newEntries.slice(0, 10);
//         const { transactions: revealTransactions } = await createTransactions({
//           priorityEntries: [revealUTXOs.entries[0]],
//           entries: newSlice,
//           outputs: [],
//           changeAddress: address.toString(),
//           // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//           priorityFee: kaspaToSompi(gasFee.toString())!,
//           networkId: network
//         });
//         let revealHash: any;

//         for (const transaction of revealTransactions) {
//           transaction.sign([privateKey], false);
//           log(`Main: Transaction with revealUTX0s signed with ID: ${transaction.id}`, 'INFO');
//           const ourOutput = transaction.transaction.inputs.findIndex((input) => input.signatureScript === '');

//           if (ourOutput !== -1) {
//             const signature = await transaction.createInputSignature(ourOutput, privateKey);
//             transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
//           }
//           revealHash = await transaction.submit(RPC);
//           log(`submitted reveal tx sequence transaction: ${revealHash}`, 'INFO');
//           SubmittedtrxId = revealHash;
//         }

//         // Wait for the maturity event
//         // eslint-disable-next-line no-loop-func
//         const revealTimeout = setTimeout(() => {
//           if (!eventReceived) {
//             log(`Timeout: Commit transaction did not mature within ${timeout}`, 'ERROR');
//             return {
//               status: false,
//               msg: `Timeout: Commit transaction did not mature within ${timeout} minutes`
//             }
//           }
//         }, timeout);

//         while (!eventReceived) {
//           await new Promise(resolve => setTimeout(resolve, 500)); // wait and check every 500ms
//         }

//         clearTimeout(revealTimeout);
//         eventReceived = false;

//         // Check if the reveal transaction has been accepted
//         const updatedUTXOs = await RPC.getUtxosByAddresses({ addresses: [address.toString()] });
//         const revealAccepted = updatedUTXOs.entries.some(entry => {
//           const transactionId = entry.entry.outpoint ? entry.entry.outpoint.transactionId : undefined;
//           return transactionId === revealHash;
//         });

//         if (revealAccepted) {
//           log(`Reveal transaction has been accepted: ${revealHash}`, 'INFO');
//           // Only disconnect after completing all loops
//           if (i === loops - 1) {
//             await RPC.disconnect();
//             log('RPC client disconnected.', 'INFO');
//           }
//         } else if (!eventReceived) {
//           log('Reveal transaction has not been accepted yet.', 'INFO');
//         }

//       } catch (initialError) {
//         log(`Initial transaction error: ${initialError}`, 'ERROR');
//         return {
//           status: false,
//           msg: `Initial transaction error: ${initialError}`
//         }
//       }
//     }
//   } catch {
//     log('RPC Connection or Keypair Errr', 'ERROR');
//     return {
//       status: false,
//       msg: 'RPC Connection or Keypair Errr'
//     }
//   }
//   return {
//     status: true,
//     msg: 'Success'
//   }
// }
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);