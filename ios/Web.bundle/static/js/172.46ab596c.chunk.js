"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[172],{

/***/ 60172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EN: () => (/* binding */ krc20_chown),
/* harmony export */   G0: () => (/* binding */ krc20_trans),
/* harmony export */   QT: () => (/* binding */ krc20_trans_issue),
/* harmony export */   Qj: () => (/* binding */ krc20_blacklist_issue),
/* harmony export */   Wy: () => (/* binding */ krc20_mint_back),
/* harmony export */   _K: () => (/* binding */ krc20_issue),
/* harmony export */   _g: () => (/* binding */ krc20_deploy_issue),
/* harmony export */   aS: () => (/* binding */ krc20_burn),
/* harmony export */   ig: () => (/* binding */ krc20_mint_parallel),
/* harmony export */   k1: () => (/* binding */ krc20_chown_issue),
/* harmony export */   mE: () => (/* binding */ krc20_burn_issue),
/* harmony export */   ov: () => (/* binding */ krc20_deploy),
/* harmony export */   yo: () => (/* binding */ krc20_mint_once)
/* harmony export */ });
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21704);
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];

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

const timeout_first = 2000; // 2 sec - 优化等待时间以提高性能
const timeout_rev = 800; // 0.8 sec - 优化等待时间以提高性能
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

// 优化的佣金支付函数 - 复用RPC连接和UTXO
async function payCommissionFees(privateKey, address, network, feeAmount, priorityFeeValue, RPC, entries) {
  try {
    log('Starting commission fee payment', 'INFO');
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      priorityEntries: [],
      entries,
      outputs: [{
        address: getOwner(network),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(feeAmount)
      }, {
        address: getOwnerScale(network),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(feeAmount)
      }],
      changeAddress: address.toString(),
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
      networkId: network
    });
    for (const transaction of transactions) {
      transaction.sign([privateKey]);
      const hash = await transaction.submit(RPC);
      log("Commission fee payment submitted: ".concat(hash), 'INFO');
    }
    log('Commission fee payment completed', 'INFO');
    return {
      status: true,
      msg: 'Commission fees paid successfully'
    };
  } catch (error) {
    log("Commission fee payment error: ".concat(error), 'ERROR');
    return {
      status: false,
      msg: "Commission fee payment failed: ".concat(error)
    };
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    if (revealUTXOs.entries) {
      log('HAS!');
      log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
      for (let i = 0; i < revealUTXOs.entries.length; i++) {
        const {
          transactions: revealTransactions
        } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
          entries: [revealUTXOs.entries[i]],
          outputs: [],
          changeAddress: address.toString(),
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("0.01"),
          networkId: network
        });
        let revealHash;
        for (const transaction of revealTransactions) {
          transaction.sign([privateKey], false);
          log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
          const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
          if (ourOutput !== -1) {
            const signature = await transaction.createInputSignature(ourOutput, privateKey);
            transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
          }
          revealHash = await transaction.submit(RPC);
          log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted", 'INFO');
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
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
      log("Main: Creating Transaction with revealUTX0s entries: ".concat(selected_UTXO), 'INFO');
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
        log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
        const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
        if (ourOutput !== -1) {
          const signature = await transaction.createInputSignature(ourOutput, privateKey);
          transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
        }
        revealHash = await transaction.submit(RPC);
        log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
        // 先获取UTXO
        const {
          entries
        } = await RPC.getUtxosByAddresses({
          addresses: [address.toString()]
        });

        // 先支付佣金
        log('Paying commission fees before mint', 'INFO');
        const commissionResult = await payCommissionFees(privateKey, address, network, ComFeeMint, priorityFeeValue, RPC, entries);
        if (!commissionResult.status) {
          log("Commission payment failed: ".concat(commissionResult.msg), 'ERROR');
          return {
            status: false,
            msg: "Commission payment failed: ".concat(commissionResult.msg),
            hash: ''
          };
        }

        // 佣金支付成功后，等待一下确保UTXO状态同步，然后重新获取UTXO状态
        log('Waiting for commission transaction to be processed...', 'INFO');
        await new Promise(resolve => setTimeout(resolve, 2000));
        const {
          entries: refreshedEntries
        } = await RPC.getUtxosByAddresses({
          addresses: [address.toString()]
        });
        log("Found ".concat(refreshedEntries.length, " UTXOs after commission payment"), 'INFO');

        // 验证是否有足够的UTXO进行mint交易
        const requiredAmount = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)((Num + Num * 0.01 + 0.1).toString()) + (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString());
        const totalAvailable = refreshedEntries.reduce((sum, entry) => sum + entry.entry.amount, 0n);
        if (totalAvailable < requiredAmount) {
          log("Insufficient funds after commission: need ".concat(requiredAmount, ", have ").concat(totalAvailable), 'ERROR');
          return {
            status: false,
            msg: "Insufficient funds after commission payment",
            hash: ''
          };
        }
        const {
          transactions
        } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
          priorityEntries: [],
          entries: refreshedEntries,
          outputs: [{
            address: P2SHAddress.toString(),
            amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)((Num + Num * 0.01 + 0.1).toString())
          }],
          changeAddress: address.toString(),
          priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString()),
          networkId: network
        });
        for (const transaction of transactions) {
          transaction.sign([privateKey]);
          log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
          const hash = await transaction.submit(RPC);
          log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
          SubmittedtrxId = hash;
        }

        // Wait for the maturity event
        // TODO: BOSS SAID NO
        await new Promise(resolve => setTimeout(resolve, timeout_first));
      } catch (initialError) {
        log("Initial transaction error: ".concat(initialError), 'ERROR');
        return {
          status: false,
          msg: "Initial transaction error: ".concat(initialError),
          hash: ''
        };
      }

      // Continue with reveal transaction after maturity event
      // if(eventReceived){
      eventReceived = false;
      log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
      log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
      const revealUTXOs = await RPC.getUtxosByAddresses({
        addresses: [P2SHAddress.toString()]
      });
      log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries[0]), 'INFO');
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
        log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
        const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
        if (ourOutput !== -1) {
          const signature = await transaction.createInputSignature(ourOutput, privateKey);
          transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
        }
        revealHash = await transaction.submit(RPC);
        log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
  log("Address: ".concat(address.toString()), 'INFO');

  // New UTXO subscription setup (ADD this):
  log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
  await RPC.subscribeUtxosChanged([address.toString()]);
  RPC.addEventListener('utxos-changed', async event => {
    log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

    // Check for UTXOs removed for the specific address
    const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
    const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
    if (removedEntry) {
      // Use custom replacer function in JSON.stringify to handle BigInt
      log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
      log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
      addedEventTrxId = addedEntry.outpoint.transactionId;
      log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
      if (addedEventTrxId == SubmittedtrxId) {
        eventReceived = true;
      }
    } else {
      log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
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
  log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
  const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
  const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
  let eventReceived = false;
  log("Constructed Script: ".concat(script.toString()), 'INFO');
  log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
  try {
    // 先获取UTXO
    const {
      entries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });

    // 先支付佣金
    log('Paying commission fees before deploy', 'INFO');
    const commissionResult = await payCommissionFees(privateKey, address, network, ComFeeDeploy, priorityFeeValue, RPC, entries);
    if (!commissionResult.status) {
      log("Commission payment failed: ".concat(commissionResult.msg), 'ERROR');
      return {
        status: false,
        msg: "Commission payment failed: ".concat(commissionResult.msg),
        hash: ''
      };
    }

    // 佣金支付成功后，等待一下确保UTXO状态同步，然后重新获取UTXO状态
    log('Waiting for commission transaction to be processed...', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 2000));
    const {
      entries: refreshedEntries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });
    log("Found ".concat(refreshedEntries.length, " UTXOs after commission payment"), 'INFO');

    // 验证是否有足够的UTXO进行deploy交易
    const requiredAmount = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1001") + (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString());
    const totalAvailable = refreshedEntries.reduce((sum, entry) => sum + entry.entry.amount, 0n);
    if (totalAvailable < requiredAmount) {
      log("Insufficient funds after commission: need ".concat(requiredAmount, ", have ").concat(totalAvailable), 'ERROR');
      return {
        status: false,
        msg: "Insufficient funds after commission payment",
        hash: ''
      };
    }
    console.log('ComFeeDeploy', ComFeeDeploy);
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      priorityEntries: [],
      entries: refreshedEntries,
      outputs: [{
        address: P2SHAddress.toString(),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1001")
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
      log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
      const hash = await transaction.submit(RPC);
      log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
      SubmittedtrxId = hash;
    }

    // Set a timeout to handle failure cases
    await new Promise(resolve => setTimeout(resolve, timeout_first));
  } catch (initialError) {
    log("Initial transaction error: ".concat(initialError), 'ERROR');
    return {
      status: false,
      msg: "Initial transaction error: ".concat(initialError),
      hash: ''
    };
  }

  // if (eventReceived) {
  eventReceived = false;
  log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
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
    log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
    const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
    if (ourOutput !== -1) {
      const signature = await transaction.createInputSignature(ourOutput, privateKey);
      transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
    }
    revealHash = await transaction.submit(RPC);
    log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
      log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
    log("Error checking reveal transaction status: ".concat(error), 'ERROR');
    return {
      status: false,
      msg: "Error checking reveal transaction status: ".concat(error),
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
    msg: "Timeout",
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
  log("Address: ".concat(address.toString()), 'INFO');

  // New UTXO subscription setup (ADD this):
  log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
  await RPC.subscribeUtxosChanged([address.toString()]);
  RPC.addEventListener('utxos-changed', async event => {
    log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

    // Check for UTXOs removed for the specific address
    const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
    const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
    if (removedEntry) {
      // Use custom replacer function in JSON.stringify to handle BigInt
      log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
      log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
      addedEventTrxId = addedEntry.outpoint.transactionId;
      log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
      if (addedEventTrxId == SubmittedtrxId) {
        eventReceived = true;
      }
    } else {
      log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
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
  log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
  const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
  const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
  let eventReceived = false;
  log("Constructed Script: ".concat(script.toString()), 'INFO');
  log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
  try {
    // 先获取UTXO
    const {
      entries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });

    // 先支付佣金
    log('Paying commission fees before deploy issue', 'INFO');
    const commissionResult = await payCommissionFees(privateKey, address, network, ComFeeDeploy, priorityFeeValue, RPC, entries);
    if (!commissionResult.status) {
      log("Commission payment failed: ".concat(commissionResult.msg), 'ERROR');
      return {
        status: false,
        msg: "Commission payment failed: ".concat(commissionResult.msg),
        hash: ''
      };
    }

    // 佣金支付成功后，等待一下确保UTXO状态同步，然后重新获取UTXO状态
    log('Waiting for commission transaction to be processed...', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 2000));
    const {
      entries: refreshedEntries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });
    log("Found ".concat(refreshedEntries.length, " UTXOs after commission payment"), 'INFO');

    // 验证是否有足够的UTXO进行deploy交易
    const requiredAmount = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1001") + (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)(priorityFeeValue.toString());
    const totalAvailable = refreshedEntries.reduce((sum, entry) => sum + entry.entry.amount, 0n);
    if (totalAvailable < requiredAmount) {
      log("Insufficient funds after commission: need ".concat(requiredAmount, ", have ").concat(totalAvailable), 'ERROR');
      return {
        status: false,
        msg: "Insufficient funds after commission payment",
        hash: ''
      };
    }
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      priorityEntries: [],
      entries: refreshedEntries,
      outputs: [{
        address: P2SHAddress.toString(),
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1001")
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
      log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
      const hash = await transaction.submit(RPC);
      log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
      SubmittedtrxId = hash;
    }

    // Set a timeout to handle failure cases
    await new Promise(resolve => setTimeout(resolve, timeout_first));
  } catch (initialError) {
    log("Initial transaction error: ".concat(initialError), 'ERROR');
    return {
      status: false,
      msg: "Initial transaction error: ".concat(initialError),
      hash: ''
    };
  }

  // if (eventReceived) {
  eventReceived = false;
  log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
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
    log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
    const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
    if (ourOutput !== -1) {
      const signature = await transaction.createInputSignature(ourOutput, privateKey);
      transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
    }
    revealHash = await transaction.submit(RPC);
    log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
      log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
    log("Error checking reveal transaction status: ".concat(error), 'ERROR');
    return {
      status: false,
      msg: "Error checking reveal transaction status: ".concat(error),
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
    msg: "Timeout",
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'transfer',
      'tick': ticker,
      'amt': amount.toString(),
      'to': dest.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'transfer',
      'ca': ca,
      'amt': amount.toString(),
      'to': dest.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'issue',
      'ca': ca,
      'amt': amount.toString(),
      'to': dest.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'burn',
      'tick': tick,
      'amt': amount.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'burn',
      'ca': ca,
      'amt': amount.toString()
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'blacklist',
      'ca': ca,
      'mod': mod,
      'to': to
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'chown',
      'tick': tick,
      'to': to
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
    log("Address: ".concat(address.toString()), 'INFO');

    // New UTXO subscription setup (ADD this):
    log("Subscribing to UTXO changes for address: ".concat(address.toString()), 'INFO');
    await RPC.subscribeUtxosChanged([address.toString()]);
    // const gasFeefetch = await RPC.getFeeEstimate({})

    RPC.addEventListener('utxos-changed', async event => {
      log("UTXO changes detected for address: ".concat(address.toString()), 'INFO');

      // Check for UTXOs removed for the specific address
      const removedEntry = event.data.removed.find(entry => entry.address.payload === address.toString().split(':')[1]);
      const addedEntry = event.data.added.find(entry => entry.address.payload === address.toString().split(':')[1]);
      if (removedEntry) {
        // Use custom replacer function in JSON.stringify to handle BigInt
        log("Added UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(addedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        log("Removed UTXO found for address: ".concat(address.toString(), " with UTXO: ").concat(JSON.stringify(removedEntry, (key, value) => typeof value === 'bigint' ? value.toString() + 'n' : value)), 'INFO');
        addedEventTrxId = addedEntry.outpoint.transactionId;
        log("Added UTXO TransactionId: ".concat(addedEventTrxId), 'INFO');
        if (addedEventTrxId == SubmittedtrxId) {
          eventReceived = true;
        }
      } else {
        log("No removed UTXO found for address: ".concat(address.toString(), " in this UTXO change event"), 'INFO');
      }
    });
    const data = {
      'p': 'krc-20',
      'op': 'chown',
      'ca': ca,
      'to': to
    };
    log("Main: Data to use for ScriptBuilder: ".concat(JSON.stringify(data)), 'INFO');
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)).buffer)).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);
    let eventReceived = false;
    log("Constructed Script: ".concat(script.toString()), 'INFO');
    log("P2SH Address: ".concat(P2SHAddress.toString()), 'INFO');
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
        log("Main: Transaction signed with ID: ".concat(transaction.id), 'INFO');
        const hash = await transaction.submit(RPC);
        log("submitted P2SH commit sequence transaction on: ".concat(hash), 'INFO');
        SubmittedtrxId = hash;
      }

      // Set a timeout to handle failure cases
      await new Promise(resolve => setTimeout(resolve, timeout_first));
    } catch (initialError) {
      log("Initial transaction error: ".concat(initialError), 'ERROR');
      return {
        status: false,
        msg: "Initial transaction error: ".concat(initialError),
        hash: ''
      };
    }

    // if (eventReceived) {
    eventReceived = false;
    log("Main: creating UTXO entries from ".concat(address.toString()), 'INFO');
    log('Main: creating revealUTXOs from P2SHAddress', 'INFO');
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress.toString()]
    });
    log("Main: Creating Transaction with revealUTX0s entries: ".concat(revealUTXOs.entries), 'INFO');
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
      log("Main: Transaction with revealUTX0s signed with ID: ".concat(transaction.id), 'INFO');
      const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
      if (ourOutput !== -1) {
        const signature = await transaction.createInputSignature(ourOutput, privateKey);
        transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
      }
      revealHash = await transaction.submit(RPC);
      log("submitted reveal tx sequence transaction: ".concat(revealHash), 'INFO');
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
        log("Reveal transaction has been accepted: ".concat(revealHash), 'INFO');
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
      log("Error checking reveal transaction status: ".concat(error), 'ERROR');
      return {
        status: false,
        msg: "Error checking reveal transaction status: ".concat(error),
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
  console.log("[".concat(timestamp, "] [").concat(level, "] ").concat(message));
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

// 设置跳板地址并预分配资金
async function setupStagingAddressForMint(privateKey, address, network, ticker, mintCount, priorityFeeValue) {
  try {
    log('Setting up staging address for parallel mint', 'INFO');
    const RPC = new RpcClient({
      resolver: new Resolver(),
      encoding: Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    const publicKey = privateKey.toPublicKey();

    // 创建mint脚本和P2SH地址
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    const script = new ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(Opcodes.OpCheckSig).addOp(Opcodes.OpFalse).addOp(Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(Opcodes.OpEndIf);
    const P2SHAddress = addressFromScriptPublicKey(script.createPayToScriptHashScript(), network);
    log("P2SH Address for staging: ".concat(P2SHAddress.toString()), 'INFO');

    // 计算需要的总金额：每个mint需要的金额 * mint数量
    const amountPerMint = 1 + 1 * 0.01 + 0.1; // Num + (Num * 0.01) + 0.1
    const totalAmount = amountPerMint * mintCount;

    // 获取UTXO并创建预分配交易
    const {
      entries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });

    // 为每个mint创建单独的UTXO，因为每个reveal交易只能完成一次mint
    const outputs = [];
    for (let i = 0; i < mintCount; i++) {
      outputs.push({
        address: P2SHAddress.toString(),
        amount: kaspaToSompi(amountPerMint.toString())
      });
    }
    log("Creating ".concat(mintCount, " UTXOs for ").concat(mintCount, " mints (1 mint per UTXO)"), 'INFO');
    const {
      transactions
    } = await createTransactions({
      priorityEntries: [],
      entries,
      outputs,
      changeAddress: address.toString(),
      priorityFee: kaspaToSompi(priorityFeeValue.toString()),
      networkId: network
    });
    for (const transaction of transactions) {
      transaction.sign([privateKey]);
      const hash = await transaction.submit(RPC);
      log("Staging transaction submitted: ".concat(hash), 'INFO');
    }
    await RPC.disconnect();

    // 等待交易确认 - 减少等待时间以提高并行mint性能
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      status: true,
      msg: 'Staging address setup completed',
      P2SHAddress: P2SHAddress.toString(),
      script,
      totalAmount
    };
  } catch (error) {
    log("Staging setup error: ".concat(error), 'ERROR');
    return {
      status: false,
      msg: "Staging setup failed: ".concat(error),
      P2SHAddress: null,
      script: null,
      totalAmount: 0
    };
  }
}

// 从跳板地址拆分UTXO并执行mint操作
async function splitAndMintFromStaging(privateKey, network, ticker, P2SHAddress, mintCount) {
  const results = [];
  try {
    log("Splitting UTXOs and executing ".concat(mintCount, " mints from staging address"), 'INFO');
    const RPC = new RpcClient({
      resolver: new Resolver(),
      encoding: Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();
    const publicKey = privateKey.toPublicKey();
    const address = publicKey.toAddress(network);

    // 重新创建脚本（需要与staging时相同）
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    const script = new ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(Opcodes.OpCheckSig).addOp(Opcodes.OpFalse).addOp(Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(Opcodes.OpEndIf);

    // 获取P2SH地址的所有UTXO
    const revealUTXOs = await RPC.getUtxosByAddresses({
      addresses: [P2SHAddress]
    });
    if (!revealUTXOs.entries || revealUTXOs.entries.length === 0) {
      await RPC.disconnect();
      return {
        status: false,
        msg: 'No UTXOs available in staging address',
        results: []
      };
    }
    log("Found ".concat(revealUTXOs.entries.length, " UTXOs in staging address"), 'INFO');

    // 对每个UTXO进行处理
    let processedMints = 0;
    for (const utxoEntry of revealUTXOs.entries) {
      if (processedMints >= mintCount) break;
      try {
        // 每个UTXO只能完成一次mint操作
        log("Processing UTXO for single mint operation", 'INFO');
        if (processedMints >= mintCount) break;

        // 创建reveal交易
        const {
          transactions: revealTransactions
        } = await createTransactions({
          entries: [utxoEntry],
          outputs: [],
          changeAddress: address.toString(),
          priorityFee: kaspaToSompi("1"),
          networkId: network
        });
        for (const transaction of revealTransactions) {
          transaction.sign([privateKey], false);
          const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
          if (ourOutput !== -1) {
            const signature = await transaction.createInputSignature(ourOutput, privateKey);
            transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
          }
          const revealHash = await transaction.submit(RPC);
          log("UTXO reveal transaction submitted: ".concat(revealHash), 'INFO');

          // 每个reveal交易只完成一次mint
          results.push({
            success: true,
            index: processedMints,
            result: {
              status: true,
              hash: revealHash,
              msg: 'Mint completed successfully'
            }
          });
          processedMints += 1;
        }

        // 在处理下一个UTXO前稍作延迟 - 减少延迟以提高并行mint性能
        if (processedMints < mintCount) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      } catch (error) {
        log("Error processing UTXO: ".concat(error), 'ERROR');
        // 为失败的mint添加错误结果
        results.push({
          success: false,
          index: processedMints,
          error: error
        });
        processedMints++;
      }
    }
    await RPC.disconnect();
    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;
    return {
      status: successCount > 0,
      msg: "Split and mint completed: ".concat(successCount, " success, ").concat(failureCount, " failed"),
      results
    };
  } catch (error) {
    log("Split and mint error: ".concat(error), 'ERROR');
    return {
      status: false,
      msg: "Split and mint failed: ".concat(error),
      results
    };
  }
}

// const RPC_FAST_TEST = new RpcClient({
//   resolver: new Resolver(),
//   encoding: Encoding.Borsh,
//   networkId: "testnet-10"
// });

//   const RPC_FAST_MAIN = new RpcClient({
//   resolver: new Resolver(),
//   encoding: Encoding.Borsh,
//   networkId: "mainnet"
// });

// 真正的并行mint函数 - 预计算所有交易并同时提交
async function krc20_mint_parallel(privateKeyArg, network, ticker, priorityFeeValue, mintCount) {
  let successCount = 0;
  let failureCount = 0;
  const results = [];
  try {
    log("Starting parallel mint for ".concat(mintCount, " tokens"), 'INFO');
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.PrivateKey(privateKeyArg);
    const publicKey = privateKey.toPublicKey();
    const address = publicKey.toAddress(network);

    // let RPC;
    // if(network == "testnet-10"){
    //   RPC = RPC_FAST_TEST;
    // }else{
    //   RPC = RPC_FAST_MAIN;
    // }

    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Encoding.Borsh,
      networkId: network
    });
    await RPC.disconnect();
    await RPC.connect();

    // 第一步：获取当前UTXO状态
    log('Step 1: Getting current UTXO state', 'INFO');
    const {
      entries
    } = await RPC.getUtxosByAddresses({
      addresses: [address.toString()]
    });

    // 第二步：准备mint交易
    log('Step 2: Preparing mint transactions', 'INFO');
    if (!entries || entries.length === 0) {
      await RPC.disconnect();
      return {
        status: false,
        msg: 'No UTXOs available',
        successCount: 0,
        failureCount: mintCount,
        results: []
      };
    }

    // 第三步：创建单个commit交易和mint脚本
    log('Step 3: Creating single commit transaction for chain reveal', 'INFO');

    // 计算需要的总金额（足够支持所有mint的链式操作）
    // 每个reveal需要1 KAS基础费 + 0.25 KAS优先费 = 1.25 KAS
    const revealBaseFee = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("1"); // 协议固定费用
    const revealPriorityFee = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("0.25"); // 优先费减少孤块率
    const revealTotalFee = revealBaseFee + revealPriorityFee; // 1.25 KAS
    const totalRevealFees = revealTotalFee * BigInt(mintCount);
    const commitAmount = totalRevealFees + (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("0.1"); // 额外0.1 KAS作为缓冲
    // 提高commit交易的优先费以减少孤块率
    const commitPriorityFee = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("0.25"); // 从用户设置提高到0.25
    const totalRequired = commitAmount + commitPriorityFee;
    ;

    //log(`Calculated amounts:`, 'INFO');
    //log(`  Reveal base fee: ${revealBaseFee} (1 KAS)`, 'INFO');
    //log(`  Reveal priority fee: ${revealPriorityFee} (0.25 KAS)`, 'INFO');
    //log(`  Reveal total fee per mint: ${revealTotalFee} (1.25 KAS)`, 'INFO');
    //log(`  Total reveal fees: ${totalRevealFees} (${mintCount} × 1.25 KAS)`, 'INFO');
    //log(`  Commit amount: ${commitAmount}`, 'INFO');
    //log(`  Commit priority fee: ${commitPriorityFee} (0.25 KAS)`, 'INFO');
    //log(`  Total required: ${totalRequired}`, 'INFO');

    // 检查是否有足够的资金
    const totalAvailable = entries.reduce((sum, entry) => sum + entry.entry.amount, 0n);
    if (totalAvailable < totalRequired) {
      await RPC.disconnect();
      return {
        status: false,
        msg: "Insufficient funds. Need ".concat(totalRequired, " sompi, but only have ").concat(totalAvailable, " sompi"),
        successCount: 0,
        failureCount: mintCount,
        results: []
      };
    }

    // 创建mint脚本（所有mint使用相同的脚本）
    const data = {
      'p': 'krc-20',
      'op': 'mint',
      'tick': ticker.toString()
    };
    const script = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.ScriptBuilder().addData(publicKey.toXOnlyPublicKey().toString()).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpCheckSig).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpFalse).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpIf).addData(new Uint8Array(Buffer.from('kasplex').buffer)).addI64(0n).addData(new Uint8Array(Buffer.from(JSON.stringify(data, null, 0)))).addOp(kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.Opcodes.OpEndIf);
    const P2SHAddress = (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.addressFromScriptPublicKey)(script.createPayToScriptHashScript(), network);

    // 第四步：直接创建commit交易
    log('Step 4: Creating commit transaction', 'INFO');

    // 创建commit交易，使用原始UTXO
    const {
      transactions: commitTxs
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
      priorityEntries: [],
      entries,
      outputs: [{
        address: P2SHAddress.toString(),
        amount: commitAmount
      }],
      changeAddress: address.toString(),
      priorityFee: commitPriorityFee,
      // 使用更高的优先费
      networkId: network
    });
    if (!commitTxs || commitTxs.length === 0) {
      await RPC.disconnect();
      return {
        status: false,
        msg: 'Failed to create commit transaction',
        successCount: 0,
        failureCount: mintCount,
        results: []
      };
    }

    //log(`Commit transaction details:`, 'INFO');
    //log(`  P2SH Address: ${P2SHAddress.toString()}`, 'INFO');
    //log(`  Output amount: ${commitAmount}`, 'INFO');
    //log(`  Priority fee: ${commitPriorityFee} (0.25 KAS for faster confirmation)`, 'INFO');
    //log(`  Change address: ${address.toString()}`, 'INFO');

    let commitHash;
    try {
      for (const transaction of commitTxs) {
        transaction.sign([privateKey]);
        commitHash = await transaction.submit(RPC);
        //log(`Commit transaction submitted: ${commitHash}`, 'INFO');
      }
    } catch (error) {
      //log(`Commit transaction error: ${error}`, 'ERROR');
      await RPC.disconnect();
      return {
        status: false,
        msg: "Commit transaction failed: ".concat(error),
        successCount: 0,
        failureCount: mintCount,
        results: []
      };
    }

    // 等待commit交易确认 - 增加等待时间确保交易被确认
    log('Waiting for commit transaction to be confirmed...', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 验证commit交易是否成功 - 检查P2SH地址是否有UTXO
    log('Verifying commit transaction success...', 'INFO');
    let commitVerified = false;
    for (let attempt = 0; attempt < 5; attempt++) {
      const checkUTXOs = await RPC.getUtxosByAddresses({
        addresses: [P2SHAddress.toString()]
      });
      if (checkUTXOs.entries && checkUTXOs.entries.length > 0) {
        //log(`Commit transaction verified: found ${checkUTXOs.entries.length} UTXOs at P2SH address`, 'INFO');
        commitVerified = true;
        break;
      }
      //log(`Commit verification attempt ${attempt + 1}/5: No UTXOs found, waiting...`, 'INFO');
    }
    if (!commitVerified) {
      await RPC.disconnect();
      return {
        status: false,
        msg: 'Commit transaction failed to confirm - no UTXOs found at P2SH address',
        successCount: 0,
        failureCount: mintCount,
        results: []
      };
    }

    // 第五步：链式执行reveal交易
    log('Step 5: Executing chain reveal transactions', 'INFO');
    const currentP2SHAddress = P2SHAddress;
    for (let i = 0; i < mintCount; i++) {
      try {
        //log(`Processing reveal ${i + 1} of ${mintCount}`, 'INFO');

        // 获取当前P2SH地址的UTXO
        //log(`Getting UTXOs for P2SH address: ${currentP2SHAddress.toString()}`, 'INFO');
        const revealUTXOs = await RPC.getUtxosByAddresses({
          addresses: [currentP2SHAddress.toString()]
        });

        //log(`Found ${revealUTXOs.entries?.length || 0} UTXOs for reveal ${i + 1}`, 'INFO');
        if (revealUTXOs.entries && revealUTXOs.entries.length > 0) {
          for (let j = 0; j < revealUTXOs.entries.length; j++) {
            //log(`UTXO ${j}: amount=${revealUTXOs.entries[j].entry.amount}, txId=${revealUTXOs.entries[j].entry.outpoint.transactionId}`, 'INFO');
          }
        }
        if (!revealUTXOs.entries || revealUTXOs.entries.length === 0) {
          throw new Error("No reveal UTXOs found for mint ".concat(i + 1));
        }

        // 如果这是最后一个mint，输出到用户地址；否则输出到同一个P2SH地址继续链式
        const outputs = [];
        if (i < mintCount - 1) {
          // 不是最后一个，继续输出到P2SH地址供下一个reveal使用
          // 输出金额 = 输入金额 - 总费用 - 一点余量
          const outputAmount = revealUTXOs.entries[0].entry.amount - revealTotalFee - (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.kaspaToSompi)("0.001");
          if (outputAmount <= 0) {
            throw new Error("Insufficient funds for reveal ".concat(i + 1, ": input=").concat(revealUTXOs.entries[0].entry.amount, ", fee=").concat(revealTotalFee, ", remaining=").concat(outputAmount));
          }
          outputs.push({
            address: currentP2SHAddress.toString(),
            amount: outputAmount
          });
          //log(`Reveal ${i + 1}: Creating output to P2SH for next reveal, amount=${outputAmount}`, 'INFO');
        } else {
          //log(`Reveal ${i + 1}: Final reveal, no output (funds return to user)`, 'INFO');
        }
        // 如果是最后一个mint，不添加输出，所有资金作为找零返回用户地址

        // 创建reveal交易
        //log(`Creating reveal transaction ${i + 1}:`, 'INFO');
        //log(`  Input UTXO amount: ${revealUTXOs.entries[0].entry.amount}`, 'INFO');
        //log(`  Outputs count: ${outputs.length}`, 'INFO');
        //log(`  Base fee: ${revealBaseFee} (1 KAS)`, 'INFO');
        //log(`  Priority fee: ${revealPriorityFee} (0.25 KAS)`, 'INFO');
        //log(`  Total fee: ${revealTotalFee} (1.25 KAS)`, 'INFO');
        //log(`  Change address: ${address.toString()}`, 'INFO');

        const {
          transactions: revealTxs
        } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.createTransactions)({
          entries: [revealUTXOs.entries[0]],
          outputs,
          changeAddress: address.toString(),
          priorityFee: revealTotalFee,
          // 使用总费用（1 KAS基础费 + 0.25 KAS优先费）
          networkId: network
        });

        //log(`Created ${revealTxs.length} reveal transactions for mint ${i + 1}`, 'INFO');

        let revealHash;
        for (const transaction of revealTxs) {
          transaction.sign([privateKey], false);
          const ourOutput = transaction.transaction.inputs.findIndex(input => input.signatureScript === '');
          if (ourOutput !== -1) {
            const signature = transaction.createInputSignature(ourOutput, privateKey);
            transaction.fillInput(ourOutput, script.encodePayToScriptHashSignatureScript(signature));
          }

          // 检查交易是否已经被提交过
          try {
            revealHash = await transaction.submit(RPC);
            //log(`Reveal transaction ${i + 1} submitted: ${revealHash}`, 'INFO');
          } catch (submitError) {
            const errorStr = String(submitError);
            if (errorStr.includes('already accepted by the consensus') || errorStr.includes('already in the mempool')) {
              //log(`Reveal transaction ${i + 1} was already submitted (${errorStr.includes('mempool') ? 'in mempool' : 'accepted'}), skipping`, 'WARN');
              // 如果交易已经被提交或接受，我们使用交易ID
              revealHash = transaction.id;
            } else {
              throw submitError;
            }
          }
        }
        results.push({
          success: true,
          hash: revealHash,
          mintIndex: i,
          result: {
            status: true,
            hash: revealHash,
            msg: 'Mint completed successfully'
          }
        });
        await new Promise(resolve => setTimeout(resolve, 250));
      } catch (error) {
        //log(`Reveal transaction ${i + 1} error: ${error}`, 'ERROR');
        ////log(`Error details: ${JSON.stringify(error)}`, 'ERROR');
        results.push({
          success: false,
          error,
          mintIndex: i
        });
        // 如果某个reveal失败，后续的也无法继续
        break;
      }
    }

    // 第六步：支付commission费用（异步发送，不等待确认）
    log('Step 6: Sending commission fees (async, no confirmation wait)', 'INFO');
    try {
      // 重新获取最新的UTXO状态用于commission支付
      const {
        entries: commissionEntries
      } = await RPC.getUtxosByAddresses({
        addresses: [address.toString()]
      });
      if (commissionEntries && commissionEntries.length > 0) {
        // 异步发送commission，不等待结果
        payCommissionFees(privateKey, address, network, ComFeeMint, priorityFeeValue, RPC, commissionEntries).then(() => {
          log('Commission payment sent successfully', 'INFO');
        }).catch(error => {
          //log(`Commission payment error: ${error}`, 'WARN');
        });
        log('Commission payment initiated (not waiting for confirmation)', 'INFO');
      } else {
        log('No UTXOs available for commission payment', 'WARN');
      }
    } catch (error) {
      //log(`Commission payment setup error: ${error}`, 'WARN');
    }
    await RPC.disconnect();
    successCount = results.filter(r => r.success).length;
    failureCount = results.filter(r => !r.success).length;

    //log(`True parallel mint completed: ${successCount} success, ${failureCount} failed`, 'INFO');

    return {
      status: successCount > 0,
      msg: "True parallel mint completed: ".concat(successCount, " success, ").concat(failureCount, " failed"),
      successCount,
      failureCount,
      results
    };
  } catch (error) {
    //log(`Parallel mint error: ${error}`, 'ERROR');
    return {
      status: false,
      msg: "Parallel mint error: ".concat(error),
      successCount,
      failureCount: mintCount - successCount,
      results
    };
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);