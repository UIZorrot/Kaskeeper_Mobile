(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1590],{

/***/ 21240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ wallet)
});

// UNUSED EXPORTS: WalletController

// EXTERNAL MODULE: ./src/background/service/index.ts + 18 modules
var service = __webpack_require__(32176);
// EXTERNAL MODULE: ./src/shared/constant/index.ts
var constant = __webpack_require__(46956);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(40256);
// EXTERNAL MODULE: ./src/shared/utils/index.ts + 3 modules
var utils = __webpack_require__(40560);
// EXTERNAL MODULE: ./dependency/kaspa-core-dev/kaspa.js
var kaspa = __webpack_require__(21704);
;// CONCATENATED MODULE: ./src/background/controller/base.ts
class BaseController {
  // getCurrentAccount = async () => {
  //   let account = preferenceService.getCurrentAccount();
  //   if (account) {
  //     const accounts = await this.getAccounts();
  //     const matchAcct = accounts.find((acct) => account!.address === acct.address);
  //     if (!matchAcct) account = undefined;
  //   }
  //   if (!account) {
  //     [account] = await this.getAccounts();
  //     if (!account) return null;
  //     preferenceService.setCurrentAccount(account);
  //   }
  //   return cloneDeep(account) as Account;
  // };
  // syncGetCurrentAccount = () => {
  //   return preferenceService.getCurrentAccount() || null;
  // };
  // getAccounts = (): Promise<Account[]> => {
  //   return keyringService.getAllVisibleAccountsArray();
  // };
}
/* harmony default export */ const base = (BaseController);
// EXTERNAL MODULE: ./src/background/krc20/l2Ethers.ts
var l2Ethers = __webpack_require__(5140);
;// CONCATENATED MODULE: ./src/background/controller/wallet.ts
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */




// import i18n from '@pages/background/service/i18n';




const stashKeyrings = {};
class WalletController extends base {
  constructor() {
    var _this;
    super(...arguments);
    _this = this;
    this.offline = true;
    this.openapi = service/* openapiService */.A5;
    /* wallet */
    this.boot = password => service/* keyringService */.yG.boot(password);
    this.isBooted = () => service/* keyringService */.yG.isBooted();
    this.getApproval = service/* notificationService */._M.getApproval;
    this.resolveApproval = service/* notificationService */._M.resolveApproval;
    this.rejectApproval = service/* notificationService */._M.rejectApproval;
    this.setOffline = offline => {
      this.offline = offline;
    };
    this.hasVault = async () => service/* keyringService */.yG.hasVault();
    this.verifyPassword = password => service/* keyringService */.yG.verifyPassword(password);
    this.changePassword = (password, newPassword) => service/* keyringService */.yG.changePassword(password, newPassword);
    this.initAlianNames = async () => {
      service/* preferenceService */.Kk.changeInitAlianNameStatus();
      const contacts = this.listContact();
      const keyrings = await service/* keyringService */.yG.getAllDisplayedKeyrings();
      keyrings.forEach(v => {
        v.accounts.forEach((w, index) => {
          this.updateAlianName(w.pubkey, "".concat(constant/* BRAND_ALIAN_TYPE_TEXT */.eE[v.type], " ").concat(index + 1));
        });
      });
      if (contacts.length !== 0 && keyrings.length !== 0) {
        const allAccounts = keyrings.map(item => item.accounts).flat();
        const sameAddressList = contacts.filter(item => allAccounts.find(contact => contact.pubkey == item.address));
        if (sameAddressList.length > 0) {
          sameAddressList.forEach(item => this.updateAlianName(item.address, item.name));
        }
      }
    };
    this.disconnectRpc = async () => {
      await this.openapi.disconnectRpc();
    };
    this.handleRpcConnect = async () => {
      await this.openapi.handleRpcConnect('connectRPC');
    };
    this.subscribeUtxosChanged = async () => {
      const currentAccount = service/* preferenceService */.Kk.getCurrentAccount();
      if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address) {
        await service/* openapiService */.A5.subscribeUtxosChanged(currentAccount.address);
      }
    };
    this.isReady = () => {
      if (service/* contactBookService */.ec.store) {
        return true;
      } else {
        return false;
      }
    };
    this.unlock = async password => {
      const alianNameInited = service/* preferenceService */.Kk.getInitAlianNameStatus();
      const alianNames = service/* contactBookService */.ec.listAlias();
      await service/* keyringService */.yG.submitPassword(password);
      service/* sessionService */.UV.broadcastEvent('unlock');
      if (!alianNameInited && alianNames.length === 0) {
        this.initAlianNames();
      }
    };
    this.isUnlocked = async () => {
      return service/* keyringService */.yG.memStore.getState().isUnlocked;
    };
    this.lockWallet = async () => {
      await service/* keyringService */.yG.setLocked();
      service/* sessionService */.UV.broadcastEvent('accountsChanged', []);
      service/* sessionService */.UV.broadcastEvent('lock');
      this.disconnectRpc();
    };
    this.setPopupOpen = isOpen => {
      service/* preferenceService */.Kk.setPopupOpen(isOpen);
    };
    this.getAddressBalance = async address => {
      const data = await service/* openapiService */.A5.getAddressBalance(address);
      service/* preferenceService */.Kk.updateAddressBalance(address, data);
      return data;
    };
    this.getAddressesBalance = async addresses => {
      const data = await service/* openapiService */.A5.getAddressesBalance(addresses);
      for (let i = 0; i < addresses.length; i++) {
        service/* preferenceService */.Kk.updateAddressBalance(addresses[i], data[i]);
      }
      return data;
    };
    this.getMultiAddressAssets = async addresses => {
      return service/* openapiService */.A5.getMultiAddressAssets(addresses);
    };
    this.findGroupAssets = async groups => {
      const scannedGroup = await service/* openapiService */.A5.findGroupAssets(groups);
      return scannedGroup;
    };
    this.getAddressCacheBalance = address => {
      const defaultBalance = {
        confirm_amount: '0',
        pending_amount: '0',
        amount: '0',
        usd_value: '0',
        confirm_kas_amount: '0',
        pending_kas_amount: '0',
        kas_amount: '0'
      };
      if (!address) return defaultBalance;
      return service/* preferenceService */.Kk.getAddressBalance(address) || defaultBalance;
    };
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    this.getAddressHistory = async address => {
      // const data = await openapiService.getAddressRecentHistory(address);
      // preferenceService.updateAddressHistory(address, data);
      // return data;
      //   todo
    };
    this.getAddressCacheHistory = address => {
      if (!address) return [];
      return service/* preferenceService */.Kk.getAddressHistory(address);
    };
    this.getExternalLinkAck = () => {
      service/* preferenceService */.Kk.getExternalLinkAck();
    };
    this.setExternalLinkAck = ack => {
      service/* preferenceService */.Kk.setExternalLinkAck(ack);
    };
    this.getLocale = () => {
      return service/* preferenceService */.Kk.getLocale();
    };
    this.setLocale = locale => {
      service/* preferenceService */.Kk.setLocale(locale);
    };
    this.getCurrency = () => {
      return service/* preferenceService */.Kk.getCurrency();
    };
    this.setCurrency = currency => {
      service/* preferenceService */.Kk.setCurrency(currency);
    };
    /* keyrings */
    this.clearKeyrings = () => service/* keyringService */.yG.clearKeyrings();
    this.getPrivateKey = async (password, _ref) => {
      let {
        pubkey,
        type
      } = _ref;
      await this.verifyPassword(password);
      const keyring = await service/* keyringService */.yG.getKeyringForAccount(pubkey, type);
      if (!keyring) return null;
      const privateKey = await keyring.exportAccount(pubkey);
      const hex = privateKey;
      const wif = 'wif';
      return {
        hex,
        wif
      };
    };
    // TODO: Safty?
    this.getPrivateKeyAny = async _ref2 => {
      let {
        pubkey,
        type
      } = _ref2;
      const keyring = await service/* keyringService */.yG.getKeyringForAccount(pubkey, type);
      if (!keyring) return null;
      const privateKey = await keyring.exportAccount(pubkey);
      const hex = privateKey;
      const wif = 'wif';
      return {
        hex,
        wif
      };
    };
    this.getMnemonics = async (password, keyring) => {
      await this.verifyPassword(password);
      const originKeyring = service/* keyringService */.yG.keyrings[keyring.index];
      const serialized = await originKeyring.serialize();
      return {
        mnemonic: serialized.mnemonic,
        hdPath: serialized.hdPath,
        passphrase: serialized.passphrase
      };
    };
    this.createKeyringWithPrivateKey = async (data, addressType, alianName) => {
      // const error = new Error(i18n.t('The private key is invalid'));
      let originKeyring;
      try {
        originKeyring = await service/* keyringService */.yG.importPrivateKey(data, addressType);
      } catch (e) {
        console.log(e);
        throw e;
      }
      const pubkeys = await originKeyring.getAccounts();
      if (alianName) this.updateAlianName(pubkeys[0], alianName);
      const displayedKeyring = await service/* keyringService */.yG.displayForKeyring(originKeyring, addressType, service/* keyringService */.yG.keyrings.length - 1);
      const keyring = await this.displayedKeyringToWalletKeyring(displayedKeyring, service/* keyringService */.yG.keyrings.length - 1);
      for (const j in keyring.accounts) {
        const privateKey = await this.getPrivateKeyAny({
          pubkey: keyring.accounts[j].pubkey,
          type: keyring.accounts[j].type
        });
        const l2Info = await (0,l2Ethers/* eth_address */.SO)("0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
        // console.log('privateKey2', l2Info)
        // console.log('1260', keyring)
        keyring.accounts[j].addressL2 = l2Info.address;
        keyring.accounts[j].pubkeyL2 = l2Info.privateKey;
      }
      // console.log('272', keyring)
      this.changeKeyring(keyring);
    };
    this.getPreMnemonics = function () {
      let wordCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      return service/* keyringService */.yG.getPreMnemonics(wordCount);
    };
    this.generatePreMnemonic = function () {
      let wordCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      return service/* keyringService */.yG.generatePreMnemonic(wordCount);
    };
    this.removePreMnemonics = () => service/* keyringService */.yG.removePreMnemonics();
    this.createKeyringWithMnemonics = async function (mnemonic, hdPath, passphrase, addressType, activeIndexes) {
      let activeChangeIndexes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
      const originKeyring = await service/* keyringService */.yG.createKeyringWithMnemonics(mnemonic, hdPath, passphrase, addressType,
      // accountCount,
      // startIndex
      activeIndexes, activeChangeIndexes);
      service/* keyringService */.yG.removePreMnemonics();
      const displayedKeyring = await service/* keyringService */.yG.displayForKeyring(originKeyring, addressType, service/* keyringService */.yG.keyrings.length - 1);
      const keyring = await _this.displayedKeyringToWalletKeyring(displayedKeyring, service/* keyringService */.yG.keyrings.length - 1);
      for (const j in keyring.accounts) {
        const privateKey = await _this.getPrivateKeyAny({
          pubkey: keyring.accounts[j].pubkey,
          type: keyring.accounts[j].type
        });
        // console.log('privateKey1', privateKey)
        const l2Info = await (0,l2Ethers/* eth_address */.SO)("0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
        // console.log('privateKey2', l2Info)
        // console.log('1260', keyring)
        keyring.accounts[j].addressL2 = l2Info.address;
        keyring.accounts[j].pubkeyL2 = l2Info.privateKey;
      }
      // console.log('307', keyring) 
      _this.changeKeyring(keyring);
      service/* preferenceService */.Kk.setShowSafeNotice(false);
    };
    this.createTmpKeyringWithMnemonics = async function (mnemonic, hdPath, passphrase, addressType) {
      let accountCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      let startIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      const activeIndexes = [];
      for (let i = startIndex; i < accountCount + startIndex; i++) {
        activeIndexes.push(i);
      }
      const originKeyring = service/* keyringService */.yG.createTmpKeyring('HD Key Tree', {
        mnemonic,
        activeIndexes,
        activeChangeIndexes: accountCount > 1 ? activeIndexes : [],
        hdPath,
        passphrase,
        addressType
      });
      const displayedKeyring = await service/* keyringService */.yG.displayForKeyring(originKeyring, addressType, -1);
      const keyring = await _this.displayedKeyringToWalletKeyring(displayedKeyring, -1, false);
      // console.log('334', keyring)
      return keyring;
    };
    this.createTmpKeyringWithMnemonicsWithAddressDiscovery = async function (mnemonic, hdPath, passphrase, addressType) {
      let accountCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;
      let startIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      const activeIndexes = [];
      for (let i = startIndex; i < accountCount + startIndex; i++) {
        activeIndexes.push(i);
      }
      const originKeyring = service/* keyringService */.yG.createTmpKeyring('HD Key Tree', {
        mnemonic,
        activeIndexes,
        activeChangeIndexes: accountCount > 1 ? activeIndexes : [],
        hdPath,
        passphrase,
        addressType
      });
      const address_arr_final = [];
      const sompi_arr_final = [];
      const dtype_arr_final = [];
      const index_arr_final = [];
      for (let i = 0;; i = i + accountCount) {
        const receiveAddressObjArr = originKeyring.getAddresses(i, i + accountCount, 0);
        const address_arr = [];
        const sompi_arr = [];
        const dtype_arr = [];
        const index_arr = [];
        const networkType = service/* preferenceService */.Kk.getNetworkType();
        receiveAddressObjArr.forEach(a => {
          const address = service/* keyringService */.yG.publicKeyToAddress(a.address, addressType, networkType);
          address_arr.push(address);
          dtype_arr.push(0);
          index_arr.push(Number('10' + a.index.toString()));
        });
        const changeAddressObjArr = originKeyring.getAddresses(i, i + accountCount, 1);
        changeAddressObjArr.forEach(a => {
          const address = service/* keyringService */.yG.publicKeyToAddress(a.address, addressType, networkType);
          address_arr.push(address);
          dtype_arr.push(1);
          index_arr.push(Number('11' + a.index.toString()));
        });
        const groups = [];
        groups.push({
          type: addressType,
          address_arr: address_arr,
          sompi_arr: sompi_arr,
          dtype_arr,
          index_arr
        });
        const groupRes = await _this.findGroupAssets(groups);
        if (groupRes.length > 0) {
          const res = groupRes[0];
          address_arr_final.splice(address_arr_final.length, 0, ...res.address_arr);
          sompi_arr_final.splice(sompi_arr_final.length, 0, ...res.sompi_arr);
          dtype_arr_final.splice(dtype_arr_final.length, 0, ...res.dtype_arr);
          index_arr_final.splice(index_arr_final.length, 0, ...res.index_arr);
        } else {
          // stop for iteration
          break;
        }
      }
      const groupsFinal = [];
      if (sompi_arr_final.length > 0) {
        groupsFinal.push({
          type: addressType,
          address_arr: address_arr_final,
          sompi_arr: sompi_arr_final,
          dtype_arr: dtype_arr_final,
          index_arr: index_arr_final
        });
      }
      if (groupsFinal.length > 0) {
        return groupsFinal[0];
      } else {
        return null;
      }
    };
    this.discoverAddressesWithBalance = async function (keyring) {
      let accountCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      let startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      const oKeyring = service/* keyringService */.yG.keyrings[keyring.index];
      const serialized = await oKeyring.serialize();
      const group = await _this.createTmpKeyringWithMnemonicsWithAddressDiscovery(serialized.mnemonic, serialized.hdPath, serialized.passphrase, keyring.addressType, accountCount, startIndex);
      if (group == null) {
        return null;
      }
      const address_arr = group.address_arr;
      const sompi_arr = group.sompi_arr;
      const dtype_arr = group.dtype_arr;
      const index_arr = group.index_arr;
      for (let i = 0; i < address_arr.length;) {
        const idDuplicated = keyring.accounts.find(a => a.address == address_arr[i]);
        if (idDuplicated) {
          address_arr.splice(i, 1);
          sompi_arr.splice(i, 1);
          dtype_arr.splice(i, 1);
          index_arr.splice(i, 1);
        } else {
          const index = Number(index_arr[i].toString().slice(2));
          await service/* keyringService */.yG.addNewAccount(oKeyring, dtype_arr[i], index);
          i++;
        }
      }
      if (address_arr.length == 0) return null;
      const currentKeyringTemp = await _this.getCurrentKeyring();
      if (!currentKeyringTemp) throw new Error('no current keyring');
      currentKeyringTemp.accounts.forEach(account => {
        if (address_arr.includes(account.address)) {
          _this.setAccountAlianName(account, "Discovery ".concat(account.index));
        }
      });
      return group;
    };
    // compoundUtxos = async (accounts: Account[]) => {
    //   const addresses: string[] = [];
    //   accounts.forEach((account) => {
    //     addresses.push(account.address);
    //   });
    //   const currentAccount = preferenceService.getCurrentAccount();
    //   if (!currentAccount?.address) throw new Error('current address is null');
    //   console.log("the account is " + currentAccount)
    //   const entries = await openapiService.getKASUtxos(addresses);
    //   const keyring = await this.getCurrentKeyring();
    //   if (!keyring) throw new Error('no current keyring');
    //   const _keyring = keyringService.keyrings[keyring.index];
    //   if (!entries.length) {
    //     console.error(`No UTXOs found for address ${addresses}`);
    //     return null
    //   } else {
    //     const totalAmount = 0n;
    //     const nonKrc20Entries: UtxoEntryReference[] = [];
    //     entries.forEach((utxo) => {
    //       nonKrc20Entries.push(utxo);
    //       totalAmount == totalAmount + utxo.amount;
    //     });
    //     if (!nonKrc20Entries.length) {
    //       console.error('No valid non-KRC20 UTXOs found');
    //       return null
    //     }
    //     const fee = 1n
    //     try {
    //       const networkId = openapiService.getNetworkId();
    //       const generator = new Generator({
    //         entries: nonKrc20Entries,
    //         // priorityFee,
    //         changeAddress: currentAccount.address,
    //         networkId,
    //         outputs: new PaymentOutput(new Address(currentAccount.address), totalAmount - fee)
    //       });
    //       let pending;
    //       while ((pending = await generator.next())) {
    //         const toSignInputs: ToSignInput[] = [];
    //         accounts.forEach((account) => {
    //           const publicKey = account.pubkey;
    //           const index = account.index as number;
    //           toSignInputs.push({ index, publicKey });
    //         });
    //         const preSubmitPending = await keyringService.signTransaction(_keyring, pending, toSignInputs);
    //         // submit
    //         const txid = await openapiService.submitTransaction(preSubmitPending);
    //         return txid;
    //       }
    //     } catch (e) {
    //       console.error(`Error during UTXO compound: ${e}`);
    //       return null
    //     }
    //   }
    // };
    this.compoundUtxos = async accounts => {
      const addresses = [];
      accounts.forEach(account => {
        addresses.push(account.address);
      });
      const currentAccount = service/* preferenceService */.Kk.getCurrentAccount();
      if (!(currentAccount !== null && currentAccount !== void 0 && currentAccount.address)) throw new Error('current address is null');
      const entries = await service/* openapiService */.A5.getKASUtxos(addresses);
      const keyring = await this.getCurrentKeyring();
      if (!keyring) throw new Error('no current keyring');
      const _keyring = service/* keyringService */.yG.keyrings[keyring.index];
      if (!entries.length) {
        throw new Error("No UTXOs found for address ".concat(addresses));
      } else {
        // entries.sort((a, b) => a.amount > b.amount || -(a.amount < b.amount));
        try {
          const networkId = service/* openapiService */.A5.getNetworkId();
          const generator = new kaspa.Generator({
            entries,
            outputs: [],
            priorityFee: (0,kaspa.kaspaToSompi)("0.001"),
            changeAddress: currentAccount.address,
            networkId
          });
          let pending;
          while (pending = await generator.next()) {
            const toSignInputs = [];
            accounts.forEach(account => {
              const publicKey = account.pubkey;
              const index = account.index;
              toSignInputs.push({
                index,
                publicKey
              });
            });
            const preSubmitPending = await service/* keyringService */.yG.signTransaction(_keyring, pending, toSignInputs);
            // submit
            const txid = await service/* openapiService */.A5.submitTransaction(preSubmitPending);
            return txid;
          }
        } catch (e) {
          console.log(e);
          return null;
        }
      }
    };
    this.createTmpKeyringWithPrivateKey = async (privateKey, addressType) => {
      const originKeyring = service/* keyringService */.yG.createTmpKeyring(constant/* KEYRING_TYPE */.OE.SimpleKeyring, [privateKey]);
      const displayedKeyring = await service/* keyringService */.yG.displayForKeyring(originKeyring, addressType, -1);
      service/* preferenceService */.Kk.setShowSafeNotice(false);
      const keyring = await this.displayedKeyringToWalletKeyring(displayedKeyring, -1, false);
      // console.log('573', keyring)
      return keyring;
    };
    this.removeKeyring = async keyring => {
      await service/* keyringService */.yG.removeKeyring(keyring.index);
      const keyrings = await this.getKeyrings();
      const nextKeyring = keyrings[keyrings.length - 1];
      if (nextKeyring && nextKeyring.accounts[0]) {
        this.changeKeyring(nextKeyring);
        return nextKeyring;
      }
    };
    this.getKeyringByType = type => {
      return service/* keyringService */.yG.getKeyringByType(type);
    };
    this.deriveNewAccountFromMnemonic = async (keyring, alianName) => {
      const _keyring = service/* keyringService */.yG.keyrings[keyring.index];
      const result = await service/* keyringService */.yG.addNewAccount(_keyring);
      if (alianName) this.updateAlianName(result[0], alianName);
      const currentKeyring = await this.getCurrentKeyring();
      if (!currentKeyring) throw new Error('no current keyring');
      keyring = currentKeyring;
      const account = keyring.accounts.find(a => a.pubkey == result[0]);
      const accountIndex = account ? account.index : 100;
      this.changeKeyring(keyring, accountIndex);
    };
    this.getAccountsCount = async () => {
      const accounts = await service/* keyringService */.yG.getAccounts();
      return accounts.filter(x => x).length;
    };
    this.changeKeyring = function (keyring) {
      let accountIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      service/* preferenceService */.Kk.setCurrentKeyringIndex(keyring.index);
      // console.log('changeKeyring') 
      // preferenceService.setCurrentAccount(keyring.accounts[accountIndex]);
      // const flag = preferenceService.getAddressFlag(keyring.accounts[accountIndex].address);
      // openapiService.setClientAddress(keyring.accounts[accountIndex].address, flag);
      let account = keyring.accounts.find(a => a.index === accountIndex);
      if (account == undefined) {
        account = keyring.accounts[0];
      }
      service/* preferenceService */.Kk.setCurrentAccount(account);
      const flag = service/* preferenceService */.Kk.getAddressFlag(account.address);
      service/* openapiService */.A5.setClientAddress(account.address, flag);
    };
    this.getAllAddresses = (keyring, index) => {
      const networkType = this.getNetworkType();
      const addresses = [];
      const _keyring = service/* keyringService */.yG.keyrings[keyring.index];
      if (keyring.type === constant/* KEYRING_TYPE */.OE.HdKeyring) {
        const pathPubkey = {};
        constant/* ADDRESS_TYPES */.Pt.filter(v => v.displayIndex >= 0).forEach(v => {
          let pubkey = pathPubkey[v.hdPath];
          if (!pubkey && _keyring.getAccountByHdPath) {
            pubkey = _keyring.getAccountByHdPath(v.hdPath, index);
          }
          // const address = publicKeyToAddress(pubkey, v.value, networkType);
          const address = service/* keyringService */.yG.publicKeyToAddress(pubkey, v.value, networkType);
          addresses.push(address);
        });
      } else {
        constant/* ADDRESS_TYPES */.Pt.filter(v => v.displayIndex >= 0 && v.isKaswareLegacy === false).forEach(v => {
          const pubkey = keyring.accounts[index].pubkey;
          // const address = publicKeyToAddress(pubkey, v.value, networkType);
          const address = service/* keyringService */.yG.publicKeyToAddress(pubkey, v.value, networkType);
          // const address = 'address'
          addresses.push(address);
        });
      }
      return addresses;
    };
    this.changeAddressType = async addressType => {
      const currentAccount = await this.getCurrentAccount();
      const currentKeyringIndex = service/* preferenceService */.Kk.getCurrentKeyringIndex();
      await service/* keyringService */.yG.changeAddressType(currentKeyringIndex, addressType);
      const keyring = await this.getCurrentKeyring();
      if (!keyring) throw new Error('no current keyring');
      this.changeKeyring(keyring, currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.index);
    };
    this.signTransaction = async (type, from, psbt, inputs) => {
      const keyring = await service/* keyringService */.yG.getKeyringForAccount(from, type);
      return service/* keyringService */.yG.signTransaction(keyring, psbt, inputs);
    };
    this.formatOptionsToSignInputs = async (_psbt, options) => {
      const account = await this.getCurrentAccount();
      if (!account) throw null;
      let toSignInputs = [];
      if (options && options.toSignInputs) {
        // We expect userToSignInputs objects to be similar to ToSignInput interface,
        // but we allow address to be specified in addition to publicKey for convenience.
        toSignInputs = options.toSignInputs.map(input => {
          var _input$sighashTypes;
          const index = Number(input.index);
          if (isNaN(index)) throw new Error('invalid index in toSignInput');
          if (!input.address && !input.publicKey) {
            throw new Error('no address or public key in toSignInput');
          }
          if (input.address && input.address != account.address) {
            throw new Error('invalid address in toSignInput');
          }
          if (input.publicKey && input.publicKey != account.pubkey) {
            throw new Error('invalid public key in toSignInput');
          }
          const sighashTypes = (_input$sighashTypes = input.sighashTypes) === null || _input$sighashTypes === void 0 ? void 0 : _input$sighashTypes.map(Number);
          if (sighashTypes !== null && sighashTypes !== void 0 && sighashTypes.some(isNaN)) throw new Error('invalid sighash type in toSignInput');
          return {
            index,
            publicKey: account.pubkey,
            sighashTypes,
            disableTweakSigner: input.disableTweakSigner
          };
        });
      } else {
        const networkType = this.getNetworkType();
        // const psbtNetwork = toPsbtNetwork(networkType);
        // const psbtNetwork = 'mainnet';

        const psbt = typeof _psbt === 'string' ?
        // ? bitcoin.Psbt.fromHex(_psbt as string, { network: psbtNetwork })
        'string' : _psbt;
        psbt.data.inputs.forEach((v, index) => {
          let script = null;
          let value = 0;
          if (v.witnessUtxo) {
            script = v.witnessUtxo.script;
            value = v.witnessUtxo.value;
          } else if (v.nonWitnessUtxo) {
            // TODO: NOT SURE
            const output = psbt.outs[psbt.txInputs[index].index];
            script = output.script;
            value = output.value;
          }
          const isSigned = v.finalScriptSig || v.finalScriptWitness;
          if (script && !isSigned) {
            // const address = scriptPkToAddress(script, networkType);
            const address = script;
            if (account.address === address) {
              toSignInputs.push({
                index,
                publicKey: account.pubkey,
                sighashTypes: v.sighashType ? [v.sighashType] : undefined
              });
            }
          }
        });
      }
      return toSignInputs;
    };
    this.signPsbt = async (psbt, toSignInputs, autoFinalized) => {
      const account = await this.getCurrentAccount();
      if (!account) throw new Error('no current account');
      const keyring = await this.getCurrentKeyring();
      if (!keyring) throw new Error('no current keyring');
      const _keyring = service/* keyringService */.yG.keyrings[keyring.index];

      // const networkType = this.getNetworkType();
      // const psbtNetwork = toPsbtNetwork(networkType);
      // const psbtNetwork = 'mainnet';

      if (!toSignInputs) {
        // Compatibility with legacy code.
        toSignInputs = await this.formatOptionsToSignInputs(psbt);
        if (autoFinalized !== false) autoFinalized = true;
      }
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      psbt.data.inputs.forEach((v, index) => {
        const isNotSigned = !(v.finalScriptSig || v.finalScriptWitness);
        // const isP2TR = keyring.addressType === AddressType.P2TR || keyring.addressType === AddressType.M44_P2TR;
        const isP2TR = false;
        const lostInternalPubkey = !v.tapInternalKey;
        // Special measures taken for compatibility with certain applications.
        if (isNotSigned && isP2TR && lostInternalPubkey) {
          var _v$witnessUtxo;
          // const tapInternalKey = toXOnly(Buffer.from(account.pubkey, 'hex'));
          const tapInternalKey = '0xonly';
          const output = 'output';
          // TODO: NOT SURE
          if (((_v$witnessUtxo = v.witnessUtxo) === null || _v$witnessUtxo === void 0 ? void 0 : _v$witnessUtxo.script.toString('hex')) == Buffer.from(output, 'utf8').toString('hex')) {
            v.tapInternalKey = tapInternalKey;
          }
        }
      });
      psbt = await service/* keyringService */.yG.signTransaction(_keyring, psbt, toSignInputs);
      if (autoFinalized) {
        toSignInputs.forEach(v => {
          // psbt.validateSignaturesOfInput(v.index, validator);
          psbt.finalizeInput(v.index);
        });
      }
      return psbt;
    };
    this.signMessage = async text => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      return service/* keyringService */.yG.signMessage(account.pubkey, text);
    };
    this.verifyMessage = async (text, signature) => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      return service/* keyringService */.yG.verifyMessage(account.pubkey, text, signature);
    };
    this.signMessageL2 = async text => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      const privateKey = await this.getPrivateKeyAny({
        pubkey: account.pubkey,
        type: account.type
      });
      return await (0,l2Ethers/* signMessage */.ao)(text, "0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
    };
    this.verifyMessageL2 = async (text, signature) => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      return await (0,l2Ethers/* verifyMessage */.Sq)(text, signature, account.addressL2);
    };
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    this.signBIP322Simple = async text => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      // const networkType = this.getNetworkType();
      // return signMessageOfBIP322Simple({
      //   message: text,
      //   address: account.address,
      //   networkType,
      //   wallet: this as any
      // });
      return null;
    };
    this.requestKeyring = function (type, methodName, keyringId) {
      let keyring;
      if (keyringId !== null && keyringId !== undefined) {
        keyring = stashKeyrings[keyringId];
      } else {
        try {
          keyring = _this._getKeyringByType(type);
        } catch {
          const Keyring = service/* keyringService */.yG.getKeyringClassForType(type);
          keyring = new Keyring();
        }
      }
      if (keyring[methodName]) {
        for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          params[_key - 3] = arguments[_key];
        }
        return keyring[methodName].call(keyring, ...params);
      }
    };
    this._getKeyringByType = type => {
      const keyring = service/* keyringService */.yG.getKeyringsByType(type)[0];
      if (keyring) {
        return keyring;
      }
      throw new Error("No ".concat(type, " keyring found"));
    };
    this.addContact = data => {
      service/* contactBookService */.ec.addContact(data);
    };
    this.updateContact = data => {
      service/* contactBookService */.ec.updateContact(data);
    };
    this.removeContact = address => {
      service/* contactBookService */.ec.removeContact(address);
    };
    this.listContact = function () {
      let includeAlias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      const list = service/* contactBookService */.ec.listContacts();
      if (includeAlias) {
        return list;
      } else {
        return list.filter(item => !item.isAlias);
      }
    };
    this.getContactsByMap = () => {
      return service/* contactBookService */.ec.getContactsByMap();
    };
    this.getContactByAddress = address => {
      return service/* contactBookService */.ec.getContactByAddress(address);
    };
    this.addERC20Token = data => {
      service/* erc20ListService */.F1.updateERC20List(data);
    };
    this.getERC20ListByAddress = address => {
      console.log('getERC20ListByAddress', address);
      return service/* erc20ListService */.F1.getERC20ListByAddress(address);
    };
    this._generateAlianName = (type, index) => {
      const alianName = "".concat(constant/* BRAND_ALIAN_TYPE_TEXT */.eE[type], " ").concat(index);
      return alianName;
    };
    this.getNextAlianName = keyring => {
      return this._generateAlianName(keyring.type, keyring.accounts.length + 1);
    };
    this.getHighlightWalletList = () => {
      return service/* preferenceService */.Kk.getWalletSavedList();
    };
    this.updateHighlightWalletList = list => {
      return service/* preferenceService */.Kk.updateWalletSavedList(list);
    };
    this.getAlianName = pubkey => {
      var _contactBookService$g;
      const contactName = (_contactBookService$g = service/* contactBookService */.ec.getContactByAddress(pubkey)) === null || _contactBookService$g === void 0 ? void 0 : _contactBookService$g.name;
      return contactName;
    };
    this.updateAlianName = (pubkey, name) => {
      service/* contactBookService */.ec.updateAlias({
        name,
        address: pubkey
      });
    };
    this.getAllAlianName = () => {
      return service/* contactBookService */.ec.listAlias();
    };
    this.getInitAlianNameStatus = () => {
      return service/* preferenceService */.Kk.getInitAlianNameStatus();
    };
    this.updateInitAlianNameStatus = () => {
      service/* preferenceService */.Kk.changeInitAlianNameStatus();
    };
    this.getIsFirstOpen = () => {
      return service/* preferenceService */.Kk.getIsFirstOpen();
    };
    this.updateIsFirstOpen = () => {
      return service/* preferenceService */.Kk.updateIsFirstOpen();
    };
    this.listChainAssets = async pubkeyAddress => {
      const balance = await service/* openapiService */.A5.getAddressBalance(pubkeyAddress);
      const assets = [{
        name: constant/* COIN_NAME */.eA,
        symbol: constant/* COIN_SYMBOL */.iG,
        amount: balance.amount,
        value: balance.usd_value
      }];
      return assets;
    };
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    this.reportErrors = error => {
      console.error('report not implemented');
    };
    this.getNetworkType = () => {
      const networkType = service/* preferenceService */.Kk.getNetworkType();
      return networkType;
    };
    this.getRpcLinks = () => {
      const rpcLinks = service/* preferenceService */.Kk.getRpcLinks();
      return rpcLinks;
    };
    this.getRpcStatus = () => {
      const status = service/* openapiService */.A5.getRpcStatus();
      return this.offline ? status : false;
    };
    this.setNetworkType = async networkType => {
      console.log('setNetworkType', networkType);
      service/* preferenceService */.Kk.setNetworkType(networkType);
      const rpcLinks = service/* preferenceService */.Kk.getRpcLinks();
      if (networkType === types/* NetworkType */.U5.Mainnet) {
        this.openapi.setHost(constant/* OPENAPI_URL_MAINNET */.AR);
        this.openapi.setNetworkId('mainnet');
        this.openapi.setRpcHost(rpcLinks[0].url);
      } else if (networkType === types/* NetworkType */.U5.Testnet) {
        this.openapi.setHost(constant/* OPENAPI_URL_TESTNET */.CS);
        this.openapi.setNetworkId('testnet-10');
        this.openapi.setRpcHost(rpcLinks[1].url);
      } else if (networkType === types/* NetworkType */.U5.Devnet) {
        this.openapi.setHost(constant/* OPENAPI_URL_DEVNET */.KE);
        this.openapi.setNetworkId('devnet');
        this.openapi.setRpcHost(rpcLinks[2].url);
      }
      const network = this.getNetworkName();
      service/* sessionService */.UV.broadcastEvent('networkChanged', {
        network
      });
      const currentAccount = await this.getCurrentAccount();
      const keyring = await this.getCurrentKeyring();
      if (!keyring) throw new Error('no current keyring');
      this.changeKeyring(keyring, currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.index);
    };
    this.setRpcLinks = async rpcLinks => {
      service/* preferenceService */.Kk.setRpcLinks(rpcLinks);
    };
    this.getNetworkName = () => {
      const networkType = service/* preferenceService */.Kk.getNetworkType();
      return constant/* NETWORK_TYPES */.CY[networkType].name;
    };
    this.getKASUtxos = async () => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      const utxos = await service/* openapiService */.A5.getKASUtxos([account.address]);

      // if (openapiService.addressFlag == 1) {
      //   utxos = utxos.filter((v) => (v as any).height !== 4194303);
      // }

      const kasUtxos = (0,utils/* getKaspaUTXOWithoutBigint */.cV)(utxos);
      return kasUtxos;
    };
    this.getTxActivities = async () => {
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      const trans = await service/* openapiService */.A5.getTxActivities(account.address);
      return trans;
    };
    // 1. create and sign a transaction
    this.sendKAS = async _ref3 => {
      let {
        to,
        amount,
        feeRate,
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        enableRBF,
        kasUtxos
      } = _ref3;
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');
      if (!kasUtxos) {
        kasUtxos = await this.getKASUtxos();
      }
      if (kasUtxos.length == 0) {
        throw new Error('Insufficient balance.');
      }
      try {
        const account = service/* preferenceService */.Kk.getCurrentAccount();
        if (!account) throw new Error('no current account');
        const sourceAddress = account.address;
        const destinationAddress = to;
        const changeAddress = sourceAddress;
        const moneySompi = BigInt(amount);
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const generator = await service/* openapiService */.A5.createGenerator(sourceAddress, destinationAddress, changeAddress, moneySompi);
        const summary = await generator.estimate();
        const sompiFee = Number(summary.fees);
        const resultJson = {
          to,
          amountSompi: amount,
          feeRate,
          fee: sompiFee
        };
        return JSON.stringify(resultJson);
      } catch (e) {
        throw new Error(e);
      }
    };
    this.sendAllKAS = async _ref4 => {
      let {
        to,
        feeRate,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        enableRBF,
        kasUtxos
      } = _ref4;
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      if (!account) throw new Error('no current account');

      // const networkType = this.getNetworkType();

      if (!kasUtxos) {
        kasUtxos = await this.getKASUtxos();
      }
      if (kasUtxos.length == 0) {
        throw new Error('Insufficient balance.');
      }
      const sourceAddress = account.address;
      const destinationAddress = to;
      const changeAddress = destinationAddress;
      const total = await service/* openapiService */.A5.getAddressBalanceOfKas(sourceAddress);
      const moneySompi = BigInt(total * 0.5);
      const generator = await service/* openapiService */.A5.createGenerator(sourceAddress, destinationAddress, changeAddress, moneySompi);
      try {
        const summary = await generator.estimate();
        const sompiFee = Number(summary.fees);
        const resultJson = {
          to,
          amountSompi: Number(total) - sompiFee * feeRate,
          feeRate,
          fee: sompiFee
        };
        return JSON.stringify(resultJson);
      } catch (e) {
        throw new Error(e);
      }
    };
    this.pushTx = async rawtx => {
      const result = JSON.parse(rawtx);
      const toAddress = result.to;
      const inputAmountSompi = result.amountSompi;
      const priorityFeeSompi = result.feeRate * result.fee;
      const account = await this.getCurrentAccount();
      if (!account) throw new Error('no current account');
      const keyring = await this.getCurrentKeyring();
      if (!keyring) throw new Error('no current keyring');
      const _keyring = service/* keyringService */.yG.keyrings[keyring.index];
      const sourceAddress = account.address;
      const destinationAddress = toAddress;
      const entries = await service/* openapiService */.A5.getKASUtxos([sourceAddress]);
      if (!entries.length) {
        throw new Error("No UTXOs found for address ".concat(sourceAddress));
      } else {
        entries.sort((a, b) => a.amount < b.amount ? -1 : a.amount > b.amount ? 1 : 0);
        // const sigOpCount = 10;
        // const minimumSignatures = 1;
        // const payload = 'test';
        const money = Number(inputAmountSompi);
        const priorityFee = BigInt(priorityFeeSompi);
        // 1. create
        try {
          const total = entries.reduce((agg, curr) => {
            return curr.amount + agg;
          }, BigInt(0));
          let generator;
          if (Number(total) == money) {
            const moneySompi = BigInt(money * 0.5);
            const changeAddress = destinationAddress.toString();
            generator = await service/* openapiService */.A5.createGenerator(sourceAddress, destinationAddress, changeAddress, moneySompi, priorityFee);
          } else {
            const changeAddress = sourceAddress;
            const moneySompi = BigInt(money);
            generator = await service/* openapiService */.A5.createGenerator(sourceAddress, destinationAddress, changeAddress, moneySompi, priorityFee);
          }
          let pending;
          const txids = [];
          while (pending = await generator.next()) {
            // await pending.sign([privateKey]);
            // const txid = await pending.submit(rpc);
            const publicKey = account.pubkey;
            const index = account.index;
            const toSignInputs = [{
              index,
              publicKey
            }];
            const preSubmitPending = await service/* keyringService */.yG.signTransaction(_keyring, pending, toSignInputs);
            // submit
            const txid = await service/* openapiService */.A5.submitTransaction(preSubmitPending);
            txids.push(txid);
          }
          // const publicKey = account.pubkey;
          // const index = account.index as number;
          // const toSignInputs: ToSignInput[] = [{ index, publicKey }];
          // const preSubmitPending = await keyringService.signTransaction(_keyring, pending, toSignInputs);
          // // submit
          // const txid = await openapiService.submitTransaction(preSubmitPending);
          return txids[0];
        } catch (e) {
          throw new Error();
        }
      }
      // }
    };
    this.getAccounts = async () => {
      const keyrings = await this.getKeyrings();
      const accounts = keyrings.reduce((pre, cur) => pre.concat(cur.accounts), []);
      return accounts;
    };
    this.displayedKeyringToWalletKeyring = async function (displayedKeyring, index) {
      let initName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      const networkType = service/* preferenceService */.Kk.getNetworkType();
      const addressType = displayedKeyring.addressType;
      const key = 'keyring_' + index;
      const type = displayedKeyring.type;
      const accounts = [];
      for (let j = 0; j < displayedKeyring.accounts.length; j++) {
        const {
          pubkey,
          index,
          deriveType
        } = displayedKeyring.accounts[j];
        const accountIndex = Number('1' + deriveType.toString() + index.toString());
        const address = service/* keyringService */.yG.publicKeyToAddress(pubkey, addressType, networkType);
        const accountKey = key + '#' + j;
        const defaultName = _this.getAlianName(pubkey) || _this._generateAlianName(type, j + 1);
        const alianName = service/* preferenceService */.Kk.getAccountAlianName(accountKey, defaultName);
        const flag = service/* preferenceService */.Kk.getAddressFlag(address);
        const pubkeyL2 = '';
        const addressL2 = '';
        accounts.push({
          type,
          pubkey,
          pubkeyL2,
          address,
          addressL2,
          alianName,
          index: accountIndex,
          deriveType,
          key: accountKey,
          flag
        });
      }
      const hdPath = type === constant/* KEYRING_TYPE */.OE.HdKeyring ? displayedKeyring.keyring.hdPath : '';
      const alianName = service/* preferenceService */.Kk.getKeyringAlianName(key, initName ? "".concat(constant/* KEYRING_TYPES */.cV[type].alianName, " ").concat(index + 1) : '');
      const keyring = {
        index,
        key,
        type,
        addressType,
        accounts,
        alianName,
        hdPath,
        balanceKas: 0
      };
      return keyring;
    };
    this.getKeyrings = async () => {
      const displayedKeyrings = await service/* keyringService */.yG.getAllDisplayedKeyrings();
      const keyrings = [];
      for (let index = 0; index < displayedKeyrings.length; index++) {
        const displayedKeyring = displayedKeyrings[index];
        if (displayedKeyring.type !== constant/* KEYRING_TYPE */.OE.Empty) {
          const keyring = await this.displayedKeyringToWalletKeyring(displayedKeyring, displayedKeyring.index);
          for (const j in keyring.accounts) {
            const privateKey = await this.getPrivateKeyAny({
              pubkey: keyring.accounts[j].pubkey,
              type: keyring.accounts[j].type
            });
            // console.log('privateKey1', privateKey)
            const l2Info = await (0,l2Ethers/* eth_address */.SO)("0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
            // console.log('privateKey2', l2Info)
            // console.log('1260', keyring)
            keyring.accounts[j].addressL2 = l2Info.address;
            keyring.accounts[j].pubkeyL2 = l2Info.privateKey;
          }
          keyrings.push(keyring);
        }
      }
      return keyrings;
    };
    this.getCurrentKeyring = async () => {
      let currentKeyringIndex = service/* preferenceService */.Kk.getCurrentKeyringIndex();
      const displayedKeyrings = await service/* keyringService */.yG.getAllDisplayedKeyrings();
      if (currentKeyringIndex === undefined) {
        const currentAccount = service/* preferenceService */.Kk.getCurrentAccount();
        for (let i = 0; i < displayedKeyrings.length; i++) {
          if (displayedKeyrings[i].type !== (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.type)) {
            continue;
          }
          const found = displayedKeyrings[i].accounts.find(v => v.pubkey === (currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.pubkey));
          if (found) {
            currentKeyringIndex = i;
            break;
          }
        }
        if (currentKeyringIndex === undefined) {
          currentKeyringIndex = 0;
        }
      }
      if (!displayedKeyrings[currentKeyringIndex] || displayedKeyrings[currentKeyringIndex].type === constant/* KEYRING_TYPE */.OE.Empty || !displayedKeyrings[currentKeyringIndex].accounts[0]) {
        for (let i = 0; i < displayedKeyrings.length; i++) {
          if (displayedKeyrings[i].type !== constant/* KEYRING_TYPE */.OE.Empty) {
            currentKeyringIndex = i;
            service/* preferenceService */.Kk.setCurrentKeyringIndex(currentKeyringIndex);
            break;
          }
        }
      }
      const displayedKeyring = displayedKeyrings[currentKeyringIndex];
      if (!displayedKeyring) return null;
      const keyring = await this.displayedKeyringToWalletKeyring(displayedKeyring, currentKeyringIndex);
      for (const j in keyring.accounts) {
        const privateKey = await this.getPrivateKeyAny({
          pubkey: keyring.accounts[j].pubkey,
          type: keyring.accounts[j].type
        });
        // console.log('privateKey1', privateKey)
        const l2Info = await (0,l2Ethers/* eth_address */.SO)("0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
        // console.log('privateKey2', l2Info)
        // console.log('privateKey3', keyring)
        keyring.accounts[j].addressL2 = l2Info.address;
        keyring.accounts[j].pubkeyL2 = l2Info.privateKey;
      }
      // console.log('1304', keyring)
      return keyring;
    };
    this.getCurrentAccount = async () => {
      const currentKeyring = await this.getCurrentKeyring();
      if (!currentKeyring) return null;
      const account = service/* preferenceService */.Kk.getCurrentAccount();
      let currentAccount = undefined;
      currentKeyring.accounts.forEach(v => {
        if (v.pubkey === (account === null || account === void 0 ? void 0 : account.pubkey)) {
          currentAccount = v;
        }
      });
      if (!currentAccount) {
        currentAccount = currentKeyring.accounts[0];
      }
      if (currentAccount) {
        currentAccount.flag = service/* preferenceService */.Kk.getAddressFlag(currentAccount.address);
        service/* openapiService */.A5.setClientAddress(currentAccount.address, currentAccount.flag);
      }
      return currentAccount;
    };
    this.getEditingKeyring = async () => {
      const editingKeyringIndex = service/* preferenceService */.Kk.getEditingKeyringIndex();
      const displayedKeyrings = await service/* keyringService */.yG.getAllDisplayedKeyrings();
      const displayedKeyring = displayedKeyrings[editingKeyringIndex];
      const keyring = await this.displayedKeyringToWalletKeyring(displayedKeyring, editingKeyringIndex);
      return keyring;
    };
    this.setEditingKeyring = async index => {
      service/* preferenceService */.Kk.setEditingKeyringIndex(index);
    };
    this.getEditingAccount = async () => {
      const account = service/* preferenceService */.Kk.getEditingAccount();
      return account;
    };
    this.setEditingAccount = async account => {
      service/* preferenceService */.Kk.setEditingAccount(account);
    };
    this.getAppSummary = async () => {
      const appTab = service/* preferenceService */.Kk.getAppTab();
      try {
        const data = await service/* openapiService */.A5.getAppSummary();
        const readTabTime = appTab.readTabTime;
        data.apps.forEach(w => {
          const readAppTime = appTab.readAppTime[w.id];
          if (w.time) {
            if (Date.now() > w.time + 1000 * 60 * 60 * 24 * 7) {
              w.new = false;
            } else if (readAppTime && readAppTime > w.time) {
              w.new = false;
            } else {
              w.new = true;
            }
          } else {
            w.new = false;
          }
        });
        data.readTabTime = readTabTime;
        service/* preferenceService */.Kk.setAppSummary(data);
        return data;
      } catch (e) {
        return appTab.summary;
      }
    };
    this.readTab = async () => {
      return service/* preferenceService */.Kk.setReadTabTime(Date.now());
    };
    this.readApp = async appid => {
      return service/* preferenceService */.Kk.setReadAppTime(appid, Date.now());
    };
    this.getAddressUtxo = async address => {
      const data = await service/* openapiService */.A5.getKASUtxos([address]);
      return data;
    };
    this.getConnectedSite = service/* permissionService */.Wg.getConnectedSite;
    this.getSite = service/* permissionService */.Wg.getSite;
    this.getConnectedSites = service/* permissionService */.Wg.getConnectedSites;
    this.setRecentConnectedSites = sites => {
      service/* permissionService */.Wg.setRecentConnectedSites(sites);
    };
    this.getRecentConnectedSites = () => {
      return service/* permissionService */.Wg.getRecentConnectedSites();
    };
    this.getCurrentSite = tabId => {
      const {
        origin,
        name,
        icon
      } = service/* sessionService */.UV.getSession(tabId) || {};
      if (!origin) {
        return null;
      }
      const site = service/* permissionService */.Wg.getSite(origin);
      if (site) {
        return site;
      }
      return {
        origin,
        name,
        icon,
        chain: constant/* CHAINS_ENUM */.gx.KAS,
        isConnected: false,
        isSigned: false,
        isTop: false
      };
    };
    this.getCurrentConnectedSite = tabId => {
      const {
        origin
      } = service/* sessionService */.UV.getSession(tabId) || {};
      return service/* permissionService */.Wg.getWithoutUpdate(origin);
    };
    this.setSite = data => {
      service/* permissionService */.Wg.setSite(data);
      if (data.isConnected) {
        const network = this.getNetworkName();
        service/* sessionService */.UV.broadcastEvent('networkChanged', {
          network
        }, data.origin);
      }
    };
    this.updateConnectSite = (origin, data) => {
      service/* permissionService */.Wg.updateConnectSite(origin, data);
      const network = this.getNetworkName();
      service/* sessionService */.UV.broadcastEvent('networkChanged', {
        network
      }, data.origin);
    };
    this.removeAllRecentConnectedSites = () => {
      const sites = service/* permissionService */.Wg.getRecentConnectedSites().filter(item => !item.isTop);
      sites.forEach(item => {
        this.removeConnectedSite(item.origin);
      });
    };
    this.removeConnectedSite = origin => {
      service/* sessionService */.UV.broadcastEvent('accountsChanged', [], origin);
      service/* permissionService */.Wg.removeConnectedSite(origin);
    };
    this.setKeyringAlianName = (keyring, name) => {
      service/* preferenceService */.Kk.setKeyringAlianName(keyring.key, name);
      keyring.alianName = name;
      return keyring;
    };
    this.setAccountAlianName = (account, name) => {
      service/* preferenceService */.Kk.setAccountAlianName(account.key, name);
      account.alianName = name;
      return account;
    };
    this.addAddressFlag = (account, flag) => {
      account.flag = service/* preferenceService */.Kk.addAddressFlag(account.address, flag);
      service/* openapiService */.A5.setClientAddress(account.address, account.flag);
      return account;
    };
    this.removeAddressFlag = (account, flag) => {
      account.flag = service/* preferenceService */.Kk.removeAddressFlag(account.address, flag);
      service/* openapiService */.A5.setClientAddress(account.address, account.flag);
      return account;
    };
    this.getFeeSummary = async () => {
      return service/* openapiService */.A5.getFeeSummary();
    };
    this.decodePsbt = psbtHex => {
      return service/* openapiService */.A5.decodePsbt(psbtHex);
    };
    this.createMoonpayUrl = address => {
      return service/* openapiService */.A5.createMoonpayUrl(address);
    };
    this.getWalletConfig = () => {
      return service/* openapiService */.A5.getWalletConfig();
    };
    this.getSkippedVersion = () => {
      return service/* preferenceService */.Kk.getSkippedVersion();
    };
    this.setSkippedVersion = version => {
      return service/* preferenceService */.Kk.setSkippedVersion(version);
    };
    this.checkWebsite = website => {
      return service/* openapiService */.A5.checkWebsite(website);
    };
    // it's used for ori. ---from shawn
    this.getAddressSummary = async address => {
      const data = await service/* openapiService */.A5.getAddressSummary(address);
      // preferenceService.updateAddressBalance(address, data);
      return data;
    };
    this.getShowSafeNotice = () => {
      return service/* preferenceService */.Kk.getShowSafeNotice();
    };
    this.setShowSafeNotice = show => {
      return service/* preferenceService */.Kk.setShowSafeNotice(show);
    };
    this.getVersionDetail = version => {
      return service/* openapiService */.A5.getVersionDetail(version);
    };
    this.isValidKaspaAddr = addr => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        const addr2 = new kaspa.Address(addr);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    };
    this.openDeployKrc20View = async () => {
      return await service/* openapiService */.A5.openDeployKrc20View();
    };
    this.openMintKrc20View = async () => {
      return await service/* openapiService */.A5.openMintKrc20View();
    };
    // setLayerType = async (layerType: string) => {
    //   return await preferenceService.setLayerType(layerType);
    // }
    this.getLayer = () => {
      const layer = service/* preferenceService */.Kk.getLayer();
      return layer;
    };
    this.setLayer = type => {
      service/* preferenceService */.Kk.setLayer(type);
      service/* sessionService */.UV.broadcastEvent('layerChanged', {
        layer: type
      });
    };
    this.getBalanceByAddress = async sourceAddress => {
      const accountBalance = await service/* openapiService */.A5.getAddressBalance(sourceAddress);
      return accountBalance;
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPsbtSignNonSegwitEnable(psbt, enabled) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    psbt.__CACHE.__UNSAFE_SIGN_NONSEGWIT = enabled;
  }
}
/* harmony default export */ const wallet = (new WalletController());

/***/ }),

/***/ 13760:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46956);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40560);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32176);
/* harmony import */ var _webapi_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9364);


// import { openExtensionInTab } from '@/ui/features/browser/tabs';



// import { browserRuntimeOnConnect, browserRuntimeOnInstalled } from './webapi/browser';

const {
  PortMessage
} = _shared_utils__WEBPACK_IMPORTED_MODULE_1__.Message;
let appStoreLoaded = false;
async function restoreAppState() {
  console.log('restoreAppState', restoreAppState);
  const keyringState = await _webapi_storage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .cp.get('keyringState');
  _service__WEBPACK_IMPORTED_MODULE_2__/* .keyringService */ .yG.loadStore(keyringState);
  _service__WEBPACK_IMPORTED_MODULE_2__/* .keyringService */ .yG.store.subscribe(value => _webapi_storage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .cp.set('keyringState', value));
  await _service__WEBPACK_IMPORTED_MODULE_2__/* .keyringService */ .yG.initKapaWasm();
  await _service__WEBPACK_IMPORTED_MODULE_2__/* .preferenceService */ .Kk.init();
  await _service__WEBPACK_IMPORTED_MODULE_2__/* .openapiService */ .A5.init();
  await _service__WEBPACK_IMPORTED_MODULE_2__/* .permissionService */ .Wg.init();
  await _service__WEBPACK_IMPORTED_MODULE_2__/* .contactBookService */ .ec.init();
  await _service__WEBPACK_IMPORTED_MODULE_2__/* .erc20ListService */ .F1.init();
  // await initWebFuc();

  appStoreLoaded = true;
}
restoreAppState();

// for page provider
// browserRuntimeOnConnect((port) => {
//   if (port.name === 'popup' || port.name === 'notification' || port.name === 'tab') {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const pm = new PortMessage(port as any);
//     pm.listen((data) => {
//       if (data?.type) {
//         switch (data.type) {
//           case 'broadcast':
//             eventBus.emit(data.method, data.params);
//             break;
//           case 'openapi':
//             if (walletController.openapi[data.method]) {
//               return walletController.openapi[data.method].apply(null, data.params);
//             }
//             break;
//           case 'controller':
//           default:
//             if (data.method) {
//               return walletController[data.method].apply(null, data.params);
//             }
//         }
//       }
//     });

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const boardcastCallback = (data: any) => {
//       pm.request({
//         type: 'broadcast',
//         method: data.method,
//         params: data.params
//       });
//     };

//     if (port.name === 'popup') {
//       preferenceService.setPopupOpen(true);

//       port.onDisconnect.addListener(() => {
//         preferenceService.setPopupOpen(false);
//       });
//     }

//     eventBus.addEventListener(EVENTS.broadcastToUI, boardcastCallback);
//     port.onDisconnect.addListener(() => {
//       eventBus.removeEventListener(EVENTS.broadcastToUI, boardcastCallback);
//       // gradually close rpc when popup window is closed --shwan
//       openapiService.countDownToCloseRpc()
//     });

//     return;
//   }

//   const pm = new PortMessage(port);
//   pm.listen(async (data) => {
//     if (!appStoreLoaded) {
//       // todo
//     }
//     const sessionId = port.sender?.tab?.id;
//     const session = sessionService.getOrCreateSession(sessionId);

//     const req = { data, session };
//     // for background push to respective page
//     req.session.pushMessage = (event, data) => {
//       pm.send('message', { event, data });
//     };

//     return providerController(req);
//   });

//   port.onDisconnect.addListener(() => {
//     // todo
//   });
// });

const addAppInstalledEvent = () => {
  if (appStoreLoaded) {
    // openExtensionInTab();
    return;
  }
  setTimeout(() => {
    addAppInstalledEvent();
  }, 1000);
};

// browserRuntimeOnInstalled((details) => {
//   if (details.reason === 'install') {
//     addAppInstalledEvent();
//   }
// });

if (_shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .MANIFEST_VERSION */ .iz === 'mv3') {
  // Keep alive for MV3
  const INTERNAL_STAYALIVE_PORT = 'CT_Internal_port_alive';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let alivePort = null;
  setInterval(() => {
    // console.log('Highlander', Date.now());
    if (alivePort == null) {
      // eslint-disable-next-line no-undef
      alivePort = chrome.runtime.connect({
        name: INTERNAL_STAYALIVE_PORT
      });

      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      alivePort.onDisconnect.addListener(p => {
        // eslint-disable-next-line no-undef
        if (chrome.runtime.lastError) {
          // console.log('(DEBUG Highlander) Expected disconnect (on error). SW should be still running.');
        } else {
          // console.log('(DEBUG Highlander): port disconnected');
        }
        alivePort = null;
      });
    }
    if (alivePort) {
      alivePort.postMessage({
        content: 'keep alive~'
      });

      // eslint-disable-next-line no-undef
      if (chrome.runtime.lastError) {
        // console.log(`(DEBUG Highlander): postMessage error: ${chrome.runtime.lastError.message}`);
      } else {
        // console.log(`(DEBUG Highlander): sent through ${alivePort.name} port`);
      }
    }
  }, 5000);
}

/***/ }),

/***/ 57360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CA: () => (/* binding */ fetch_Activity),
/* harmony export */   GW: () => (/* binding */ get_kns_list),
/* harmony export */   IL: () => (/* binding */ get_erc20_list_by_address),
/* harmony export */   Oy: () => (/* binding */ get_krc20_issue_info),
/* harmony export */   UF: () => (/* binding */ fetch_erc20),
/* harmony export */   W8: () => (/* binding */ getBalanceByAddress),
/* harmony export */   gt: () => (/* binding */ fetch_tx),
/* harmony export */   mq: () => (/* binding */ fetch_krc20_oplist),
/* harmony export */   s5: () => (/* binding */ fetch_krc20_list),
/* harmony export */   sN: () => (/* binding */ get_krc20_icon_url)
/* harmony export */ });
/* unused harmony export fetch_UTXO */
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46956);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40256);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32432);



// [
//   {
//   address: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//   outpoint: {
//   transactionId: "61122b023061a8256de6d81ea6c73b82fe6d266eed990a3b083284978d86f609",
//   index: 0
//   },
//   utxoEntry: {
//   amount: "10488418979",
//   scriptPublicKey: {
//   scriptPublicKey: "20e08da324934af0d9eaecf051435a52752d66a8b686d8d7cc3f225887d0e957f3ac"
//   },
//   blockDaaScore: "82234251",
//   isCoinbase: true
//   }
//   }
// ]

async function fetch_UTXO(network, address) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log("".concat(rest_api_url(network), "addresses/").concat(address, "/utxos"));
  try {
    const res = await axios.get("".concat(rest_api_url(network), "addresses/").concat(address, "/utxos"), {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}

// {
//   message: "successful",
//   prev: "825858630000",
//   next: "819459140000",
//   result: [
//     {
//       p: "KRC-20",
//       op: "mint",
//       tick: "MMSSDD",
//       amt: "100000000000",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825858630000",
//       hashRev: "31cf7059a9ef661781ae789f965cb85ce861a9b02bf9984fd310fde41613e681",
//       feeRev: "100001624",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "a983842832ec8accc7f10e49a3edfbaf3c5b96da9d312463f17be77faee61f8e",
//       mtsAdd: "1735151689594",
//       mtsMod: "1735151689594",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "MMSSDQ",
//       max: "10000000000000000",
//       lim: "10000000000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825850900000",
//       hashRev: "5352d61078f5e5419030edbc38ccfb1dce4e04652c33430d6df8783850ad2f0a",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "5ae77e4a0f37f7ff301e5485f549b3f0c62497dad56f34dcf723d4256404c9ba",
//       mtsAdd: "1735150949519",
//       mtsMod: "1735150949519",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "JIENEQ",
//       max: "1000000000000",
//       lim: "100000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825274750000",
//       hashRev: "81b972210810758ae112d0dc68fca3baa1b6d4cf77bb85a07f0a2fadabee35b9",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "-1",
//       opError: "tick existed",
//       checkpoint: "",
//       mtsAdd: "1735093622162",
//       mtsMod: "1735093622162",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "MMSSDG",
//       max: "10000000000000000",
//       lim: "10000000000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825259970000",
//       hashRev: "c92540c073421e474a5ed8e012e3a1382f04ab41183e80608fbc2de6d92ca70d",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "0de7aaa7cd29a5508e7ccfe108d7baae9fe5687eec3c56b9385f55ce279284a6",
//       mtsAdd: "1735092150303",
//       mtsMod: "1735092150303",
//     }
// }

async function fetch_krc20_list(network, address) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log("".concat(rest_api_url_krc20(network), "krc20/address/").concat(address, "/tokenlist"));
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(rest_api_url_krc20(network), "krc20/address/").concat(address, "/tokenlist"), {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data.result; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_krc20_oplist(network, address, tick) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(rest_api_url_krc20(network), "krc20/oplist?address=").concat(address, "&tick=").concat(tick), {
      headers
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return res.data.result; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_erc20(networkType, address, tokenAddress) {
  const baseUrl = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_MAINNET_L2 */ .Qy : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Testnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_TESTNET_L2 */ .E$ : _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_DEVNET_L2 */ .MZ;
  return axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(baseUrl, "/api/v2/addresses/").concat(address, "/token-transfers"), {
    params: {
      token: tokenAddress,
      type: 'ERC-20',
      filter: encodeURIComponent('to | from')
    }
  });
}
async function get_erc20_list_by_address(networkType, address) {
  const baseUrl = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_MAINNET_L2 */ .Qy : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Testnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_TESTNET_L2 */ .E$ : _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_DEVNET_L2 */ .MZ;
  return axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(baseUrl, "/api/v2/addresses/").concat(address, "/tokens"), {
    params: {
      type: 'ERC-20'
    }
  });
}

// export async function fetch_krc20_oplist(network: string, address: string, tick: string) {
//   const headers = {
//     // 'X-Client': 'KasWare Wallet',
//     // 'X-Version': VERSION,
//     // 'x-address': this.clientAddress,
//     // 'x-flag': this.addressFlag + '',
//     // 'x-channel': CHANNEL,
//     // 'x-udid': this.store.deviceId,
//   };
//   console.log(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}`)
//   try {
//     const res = await axios.get(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}`, {
//       headers,
//       withCredentials: true, // 如果需要处理跨域请求
//     });
//     return res.data; // 返回实际数据
//   } catch (e: any) {
//     throw new Error('Network error: ' + e.message);
//   }
// }

// [
// {
//   subnetwork_id: "0000000000000000000000000000000000000000",
//   transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//   hash: "9cb87d328116073b65c6bde9695b0c8515a1a41740c8e3245cf01473198fb8bb",
//   mass: "98890",
//   block_hash: [
//   "13d2c1c701f8c9f026f8e3effc233af1b11ec0701b330a097cc2107a26f7fe99"
//   ],
//   block_time: 1735193690277,
//   is_accepted: true,
//   accepting_block_hash: "755bf8b4d99b4db724e2ca991481f80ef71a3e499cff0b76e8949d34a9a2dd24",
//   accepting_block_blue_score: 81532868,
//   inputs: [
//     {
//       transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//       index: 0,
//       previous_outpoint_hash: "949aa138192e3dbed7aac4be2e587e58e9d24d7008425ee3db277b6c5b80ce32",
//       previous_outpoint_index: "0",
//       previous_outpoint_resolved: null,
//       previous_outpoint_address: null,
//       previous_outpoint_amount: null,
//       signature_script: "415dc645e77cd726412371717aa4c39807a8d7401e7ace0dcdb020dd25e864a747731f8d7842a08bd95ca32d50762d4aa4fe7f0d8792322f92a2620a43a08d9bf801",
//       sig_op_count: "1"
//       }
//   ],
//   outputs: [
//   {
//   transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//   index: 0,
//   amount: 922530241358,
//   script_public_key: "20e08da324934af0d9eaecf051435a52752d66a8b686d8d7cc3f225887d0e957f3ac",
//   script_public_key_address: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//   script_public_key_type: "pubkey",
//   accepting_block_hash: null
//   }
//   ]
//   }
// ]

async function fetch_Activity(network, address, limit, offest) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log("".concat(rest_api_url(network), "addresses/").concat(address, "/full-transactions?limit=").concat(limit, "&offset=").concat(offest));
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(rest_api_url(network), "addresses/").concat(address, "/full-transactions?limit=").concat(limit, "&offset=").concat(offest), {
      // headers,
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_tx(network, tx) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log("".concat(rest_api_url(network), "transactions/").concat(tx));
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(rest_api_url(network), "transactions/").concat(tx), {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
const get_krc20_issue_info = async (network, krc20_issue_ca) => {
  try {
    var _res$data, _res$data$result;
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("".concat(get_api_base_url_krc20(network), "krc20/token/").concat(krc20_issue_ca), {
      // headers,
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$result = _res$data.result) === null || _res$data$result === void 0 ? void 0 : _res$data$result[0]) || {}; // 返回实际数据
  } catch (e) {
    console.error('Error fetching data:', e);
    throw new Error('Invalid Ticker');
  }
};

// 主网获取krc20图标
const get_krc20_icon_url = async tick => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get("https://api-v2-do.kas.fyi/token/krc20/".concat(tick, "/info"));
    return res.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
const get_kns_list = (network, params) => {
  let url = 'https://api.knsdomains.org';
  if (network === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Testnet) {
    url += '/tn10';
  } else {
    url += '/mainnet';
  }
  return axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get(url + '/api/v1/assets', {
    params
  });
};
const getBalanceByAddress = async (network, address) => {
  const temp_url = network === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_MAINNET */ .AR + "/addresses/" + address + "/balance" : _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_TESTNET */ .CS + "/addresses/" + address + "/balance";
  return axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c.get(temp_url);
};
function get_api_base_url_krc20(network) {
  if (network === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Testnet) {
    return 'https://tn10api.kasplex.org/v1/';
  }
  return 'https://api.kasplex.org/v1/';
}
function rest_api_url(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://api-tn10.kaspa.org/';
  }
  return 'https://api.kaspa.org/';
}
function rest_api_url_krc20(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://tn10api.kasplex.org/v1/';
  }
  return 'https://api.kasplex.org/v1/';
}

// const a = await fetch_Activity('testnet-10', 'kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr', 10, 0);
// console.log(a);

/***/ }),

/***/ 34780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CT: () => (/* binding */ send_erc20_transaction),
/* harmony export */   EI: () => (/* binding */ send_eth_transaction),
/* harmony export */   Ej: () => (/* binding */ send_kaspa_with_evm_payload),
/* harmony export */   SO: () => (/* reexport safe */ _l2Ethers__WEBPACK_IMPORTED_MODULE_3__.SO),
/* harmony export */   YZ: () => (/* binding */ send_erc20_with_evm_payload),
/* harmony export */   gB: () => (/* binding */ send_kaspa_with_dapp_payload),
/* harmony export */   kz: () => (/* binding */ send_kaspa_with_dapp_evm_payload)
/* harmony export */ });
/* unused harmony exports prepare_eth_payload, sign_eth_trans_payload, prepare_eth_erc20_payload */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17108);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21704);
/* harmony import */ var _l2Ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5140);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59564);
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];




await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__["default"])();
const BASE_FEE = '0.0003'; // Kaspa 基础费用，单位 KAS

// 使用指定的 RPC URL 和链 ID
const rpcUrl = 'https://rpc.kasplextest.xyz';

// 定义返回类型的接口

/**
 * 根据私钥生成以太坊地址
 * @param privateKeyArg 私钥，必须是有效的以太坊私钥
 * @returns 包含私钥、公钥和地址的对象
 * @throws 如果私钥不合法，抛出错误
 */
// export function eth_address(privateKeyArg: string): EthAddressResult {
//   try {
//     // 验证私钥是否提供
//     if (!privateKeyArg) {
//       throw new Error('Private key is required');
//     }

//     // 验证私钥格式（必须是64个字符的十六进制字符串，以0x开头）
//     if (!ethers.isHexString(privateKeyArg) || privateKeyArg.length !== 66) {
//       throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
//     }

//     // 创建钱包实例
//     const wallet = new Wallet(privateKeyArg);

//     // 如果需要公钥，可以通过 SigningKey 计算
//     const signingKey = new ethers.SigningKey(privateKeyArg);
//     const publicKey = signingKey.publicKey;

//     return {
//       privateKey: wallet.privateKey,
//       address: wallet.address,
//       publicKey: publicKey 
//     };
//   } catch (error) {
//     throw new Error(`Failed to generate Ethereum address: ${error}`);
//   }
// }

// 使用示例：
// try {
// const privateKey = '你的KASPA私钥';
// const result = eth_address(privateKey);
// console.log('Address from private key:', result);
// } catch (error) {
// console.error(error);
// }

/**
 * 构建以太坊交易并返回签名后的字节码
 * @param params 交易参数
 * @returns 签名后的交易字节码（十六进制字符串）
 * @throws 如果参数不合法，抛出错误
 */
async function prepare_eth_payload(privateKey, toAddress, amountEth) {
  try {
    // 验证私钥格式
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isHexStrict */ .cp3.utils.isHexStrict(privateKey) || privateKey.length !== 66) {
      throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
    }

    // 验证接收地址
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(toAddress)) {
      throw new Error('Invalid recipient address');
    }

    // 验证金额
    const amount = web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toWei */ .cp3.utils.toWei(amountEth, 'ether');
    if (BigInt(amount) <= 0n) {
      throw new Error('Amount must be greater than 0');
    }
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .cp3(new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].providers */ .cp3.providers.HttpProvider(rpcUrl));

    // 获取发送方地址
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const fromAddress = account.address;

    // 获取 nonce
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'pending');

    // 获取 chainId
    const chainId = await web3.eth.net.getId();

    // 获取 gas price
    const gasPrice = await web3.eth.getGasPrice();
    if (!gasPrice) {
      throw new Error('Failed to fetch gas price');
    }

    // 设置 gas 限制（普通转账建议至少 21000）
    const gasLimit = 21000;
    if (gasLimit <= 0) {
      throw new Error('Gas limit must be greater than 0');
    }

    // 构建未签名的交易对象
    const unsignedTx = {
      from: fromAddress,
      to: toAddress,
      value: amount,
      gas: gasLimit,
      gasPrice: gasPrice,
      nonce: nonce,
      chainId: chainId
    };

    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(unsignedTx, privateKey);
    if (!signedTx.rawTransaction) {
      throw new Error('Failed to sign transaction');
    }

    // 将 RLP 编码后的 rawTransaction 转换为 Uint8Array
    const signedTxBytes = Buffer.from(signedTx.rawTransaction.slice(2), 'hex'); // 去掉 0x

    // 构造带前缀的 payload
    const payload = new Uint8Array([...Buffer.from('kasplex', 'utf-8'), 0x01,
    // 版本字节：0x01 表示 Binary 模式
    ...signedTxBytes]);

    // 返回十六进制字符串
    return '0x' + Buffer.from(payload).toString('hex');
  } catch (error) {
    throw new Error("Failed to prepare Ethereum transaction: ".concat(error instanceof Error ? error.message : 'Unknown error'));
  }
}

/**
 * 构造并返回签名后的交易字节码（支持 EVM 和 Kaspa）
 * @param params 交易参数
 * @returns 签名后的交易字节码（十六进制字符串）
 * @throws 如果参数不合法或构造失败，抛出错误
 */
async function send_kaspa_with_evm_payload(networkId, privateKeyArg, kaspaAddress, priorityFeeValue, ethToAddress, amountEth) {
  try {
    // 1. 获取带前缀的 EVM 交易字节码
    const ethSignedTx = await prepare_eth_payload(privateKeyArg, ethToAddress, amountEth);
    const ethPayload = ethers__WEBPACK_IMPORTED_MODULE_2__/* .getBytes */ .qg(ethSignedTx); // 转换为 Uint8Array，已包含 kasplex 和版本字节

    // 2. 构造 Kaspa 交易
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Encoding.Borsh,
      networkId
    });
    await RPC.disconnect();
    await RPC.connect();
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.PrivateKey(privateKeyArg.replace('0x', '')); // 去掉 0x
    const publicKey = privateKey.toPublicKey();
    const address = publicKey.toAddress(networkId);
    let kaspaToAddr;
    try {
      kaspaToAddr = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Address(kaspaAddress);
    } catch {
      throw new Error('Invalid Kaspa recipient address');
    }
    const {
      entries
    } = await RPC.getUtxosByAddresses([address.toString()]);
    if (!entries.length) {
      throw new Error('No UTXOs available');
    }

    // const targetAmount = BigInt(Math.floor(parseFloat(amountKas) * 1e8));
    // const priorityFee = BigInt(Math.floor(parseFloat(priorityFeeKas) * 1e8));
    // if (targetAmount <= 0n || priorityFee <= 0n) {
    //   throw new Error('Kaspa amount and priority fee must be greater than 0');
    // }

    // const outputs = [
    //   {
    //     address: kaspaToAddr.toString(),
    //     amount: targetAmount
    //   }
    // ];

    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.createTransactions)({
      entries,
      outputs: [],
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(priorityFeeValue.toString()),
      changeAddress: address.toString(),
      networkId,
      payload: ethPayload // 直接使用带前缀的 EVM 字节码
    });
    if (!transactions.length) {
      throw new Error('Failed to create Kaspa transaction');
    }
    let submit_hash;
    for (const transaction of transactions) {
      await transaction.sign([privateKey]);
      const hash = await transaction.submit(RPC);
      submit_hash = hash;
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      status: false,
      msg: "Success",
      hash: submit_hash
    };
  } catch (error) {
    throw new Error("Failed to prepare Kaspa transaction with EVM payload: ".concat(error));
  }
}
async function send_eth_transaction(toAddress, amountInEther, privateKey) {
  try {
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .cp3(new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].providers */ .cp3.providers.HttpProvider(rpcUrl));

    // 验证地址格式
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(toAddress)) {
      throw new Error('Invalid recipient address');
    }

    // 私钥转账户对象
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const fromAddress = account.address;

    // 验证发送方地址是否合法
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(fromAddress)) {
      throw new Error('Invalid sender address');
    }

    // 转换金额到 wei
    const amount = web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toWei */ .cp3.utils.toWei(amountInEther, 'ether');

    // 获取 nonce
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'pending');

    // 获取 gas price
    const gasPrice = await web3.eth.getGasPrice();
    if (!gasPrice) {
      throw new Error('Failed to fetch gas price');
    }

    // 估算 gas limit
    const gasLimit = await web3.eth.estimateGas({
      from: fromAddress,
      to: toAddress,
      value: amount
    });
    const chainId = await web3.eth.net.getId();

    // 构建交易对象
    const tx = {
      from: fromAddress,
      to: toAddress,
      value: amount,
      gas: gasLimit,
      gasPrice: gasPrice,
      nonce: nonce,
      chainId: Number(chainId) // 使用文件顶部定义的 chainId 常量
    };

    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    if (!signedTx.rawTransaction) {
      throw new Error('Failed to sign transaction');
    }

    // 发送交易
    const txResponse = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction sent:', txResponse.transactionHash);
    console.log('Block number:', txResponse.blockNumber);
    return {
      transactionHash: txResponse.transactionHash,
      blockNumber: txResponse.blockNumber
    };
  } catch (error) {
    throw new Error("Transaction failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
  }
}
async function sign_eth_trans_payload(unsignedTx, privateKeyArg) {
  try {
    // 验证私钥
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isHexStrict */ .cp3.utils.isHexStrict(privateKeyArg) || privateKeyArg.length !== 66) {
      throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
    }

    // 创建 web3 实例
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .cp3(new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].providers */ .cp3.providers.HttpProvider(rpcUrl));

    // 获取账户
    const account = web3.eth.accounts.privateKeyToAccount(privateKeyArg);
    const fromAddress = account.address;
    const chainId = await web3.eth.net.getId();

    // 补全交易对象必要字段
    if (!unsignedTx.chainId) {
      unsignedTx.chainId = Number(chainId); // 使用文件顶部定义的 chainId 常量
    }
    if (!unsignedTx.from) {
      unsignedTx.from = fromAddress; // 添加发送方地址
    }

    // 如果未提供 gas limit，进行估算
    if (!unsignedTx.gas && unsignedTx.to && unsignedTx.data) {
      unsignedTx.gas = await web3.eth.estimateGas(unsignedTx);
    }

    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(unsignedTx, privateKeyArg);
    if (!signedTx.rawTransaction) {
      throw new Error('Failed to sign transaction');
    }

    // 将 RLP 编码后的 rawTransaction 转换为 Uint8Array
    const signedTxBytes = Buffer.from(signedTx.rawTransaction.slice(2), 'hex'); // 去掉 0x

    // 构造带前缀的 payload
    const payload = new Uint8Array([...Buffer.from('kasplex', 'utf-8'), 0x01,
    // 版本字节：0x01 表示 Binary 模式
    ...signedTxBytes]);

    // 返回十六进制字符串
    return '0x' + Buffer.from(payload).toString('hex');
  } catch (error) {
    throw new Error("Failed to prepare Ethereum transaction: ".concat(error instanceof Error ? error.message : 'Unknown error'));
  }
}
async function send_kaspa_with_dapp_evm_payload(unsignedTx, networkId, privateKeyArg, kaspaAddress, priorityFeeValue) {
  const ethSignedTx = await sign_eth_trans_payload(unsignedTx, privateKeyArg);
  const ethPayload = ethers__WEBPACK_IMPORTED_MODULE_2__/* .getBytes */ .qg(ethSignedTx);
  try {
    // 2. 构造 Kaspa 交易
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Encoding.Borsh,
      networkId
    });
    await RPC.disconnect();
    await RPC.connect();
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.PrivateKey(privateKeyArg.replace('0x', '')); // 去掉 0x
    const publicKey = privateKey.toPublicKey();
    const address = publicKey.toAddress(networkId);
    let kaspaToAddr;
    try {
      kaspaToAddr = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Address(kaspaAddress);
    } catch {
      throw new Error('Invalid Kaspa recipient address');
    }
    const {
      entries
    } = await RPC.getUtxosByAddresses([address.toString()]);
    if (!entries.length) {
      throw new Error('No UTXOs available');
    }

    // const targetAmount = BigInt(Math.floor(parseFloat(amountKas) * 1e8));
    // const priorityFee = BigInt(Math.floor(parseFloat(priorityFeeKas) * 1e8));
    // if (targetAmount <= 0n || priorityFee <= 0n) {
    //   throw new Error('Kaspa amount and priority fee must be greater than 0');
    // }

    // const outputs = [
    //   {
    //     address: kaspaToAddr.toString(),
    //     amount: targetAmount
    //   }
    // ];

    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.createTransactions)({
      entries,
      outputs: [],
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(priorityFeeValue.toString()),
      changeAddress: address.toString(),
      networkId,
      payload: ethPayload // 直接使用带前缀的 EVM 字节码
    });
    if (!transactions.length) {
      throw new Error('Failed to create Kaspa transaction');
    }
    let submit_hash;
    for (const transaction of transactions) {
      await transaction.sign([privateKey]);
      const hash = await transaction.submit(RPC);
      submit_hash = hash;
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      status: false,
      msg: "Success",
      hash: submit_hash
    };
  } catch (error) {
    throw new Error("Failed to prepare Kaspa transaction with EVM payload: ".concat(error));
  }
}
async function send_kaspa_with_dapp_payload(networkId, amount, privateKeyArg, kaspaAddress, priorityFeeValue, payload) {
  try {
    // 2. 构造 Kaspa 交易
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Encoding.Borsh,
      networkId
    });
    await RPC.disconnect();
    await RPC.connect();
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.PrivateKey(privateKeyArg.replace('0x', '')); // 去掉 0x
    const publicKey = privateKey.toPublicKey();
    const address = publicKey.toAddress(networkId);
    let kaspaToAddr;
    try {
      kaspaToAddr = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Address(kaspaAddress);
    } catch {
      throw new Error('Invalid Kaspa recipient address');
    }
    const {
      entries
    } = await RPC.getUtxosByAddresses([address.toString()]);
    if (!entries.length) {
      throw new Error('No UTXOs available');
    }

    // const targetAmount = BigInt(Math.floor(parseFloat(amountKas) * 1e8));
    // const priorityFee = BigInt(Math.floor(parseFloat(priorityFeeKas) * 1e8));
    // if (targetAmount <= 0n || priorityFee <= 0n) {
    //   throw new Error('Kaspa amount and priority fee must be greater than 0');
    // }

    // const outputs = [
    //   {
    //     address: kaspaToAddr.toString(),
    //     amount: targetAmount
    //   }
    // ];

    console.log({
      entries,
      outputs: [{
        address: kaspaAddress,
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(amount)
      }],
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(priorityFeeValue.toString()),
      changeAddress: address.toString(),
      networkId,
      payload: payload // 直接使用带前缀的 EVM 字节码
    });
    const newPayload = new Uint8Array([...new TextEncoder().encode(payload)]);
    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.createTransactions)({
      entries,
      outputs: [{
        address: kaspaAddress,
        amount: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(amount)
      }],
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(priorityFeeValue.toString()),
      changeAddress: address.toString(),
      networkId,
      payload: newPayload // 直接使用带前缀的 EVM 字节码
    });
    if (!transactions.length) {
      throw new Error('Failed to create Kaspa transaction');
    }
    let submit_hash;
    for (const transaction of transactions) {
      await transaction.sign([privateKey]);
      const hash = await transaction.submit(RPC);
      submit_hash = hash;
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      status: false,
      msg: "Success",
      hash: submit_hash
    };
  } catch (error) {
    throw new Error("Failed to prepare Kaspa transaction with EVM payload: ".concat(error));
  }
}
async function prepare_eth_erc20_payload(privateKey, tokenContractAddress, toAddress, amount) {
  try {
    // 验证私钥
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isHexStrict */ .cp3.utils.isHexStrict(privateKey) || privateKey.length !== 66) {
      throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
    }

    // 验证接收地址
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(toAddress)) {
      throw new Error('Invalid recipient address');
    }

    // 验证代币合约地址
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(tokenContractAddress)) {
      throw new Error('Invalid token contract address');
    }

    // 创建 web3 实例
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .cp3(new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].providers */ .cp3.providers.HttpProvider(rpcUrl));

    // 获取账户
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const fromAddress = account.address;

    // 获取 nonce
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'pending');

    // 获取 chainId
    const chainId = await web3.eth.net.getId();
    ; // 使用文件顶部定义的 chainId 常量

    // 获取 gas 费用数据
    const gasPrice = await web3.eth.getGasPrice();
    if (!gasPrice) {
      throw new Error('Failed to fetch gas price');
    }

    // 设置 gas 限制（ERC20 transfer 通常需要更多 gas）
    const gasLimit = 60000; // 合理估计

    // ERC20 合约 ABI（只需要 transfer 函数的 ABI）
    const erc20Abi = [{
      "constant": false,
      "inputs": [{
        "name": "to",
        "type": "address"
      }, {
        "name": "amount",
        "type": "uint256"
      }],
      "name": "transfer",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }];

    // 创建合约实例
    const contract = new web3.eth.Contract(erc20Abi, tokenContractAddress);

    // 转换金额到最小单位
    const amountInSmallestUnit = web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toWei */ .cp3.utils.toWei(amount, 'ether');

    // 构建 transfer 函数的 data
    const data = contract.methods.transfer(toAddress, amountInSmallestUnit).encodeABI();

    // 构建未签名的交易对象
    const unsignedTx = {
      from: fromAddress,
      to: tokenContractAddress,
      // 交易目标是代币合约地址
      value: '0x0',
      // 不发送 ETH
      data,
      // 包含 transfer 函数调用数据
      gas: web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toHex */ .cp3.utils.toHex(gasLimit),
      gasPrice: web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toHex */ .cp3.utils.toHex(gasPrice),
      nonce: web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toHex */ .cp3.utils.toHex(nonce),
      chainId: chainId
    };

    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(unsignedTx, privateKey);
    if (!signedTx.rawTransaction) {
      throw new Error('Failed to sign transaction');
    }

    // 将 RLP 编码后的 rawTransaction 转换为 Uint8Array
    const signedTxBytes = Buffer.from(signedTx.rawTransaction.slice(2), 'hex'); // 去掉 0x

    // 构造带前缀的 payload
    const payload = new Uint8Array([...Buffer.from('kasplex', 'utf-8'), 0x01,
    // 版本字节：0x01 表示 Binary 模式
    ...signedTxBytes]);

    // 返回十六进制字符串
    return '0x' + Buffer.from(payload).toString('hex');
  } catch (error) {
    throw new Error("Failed to prepare ERC20 transaction: ".concat(error instanceof Error ? error.message : 'Unknown error'));
  }
}
async function send_erc20_with_evm_payload(networkId, privateKeyArg, kaspaAddress, priorityFeeValue, ethToAddress, amountEth, tokenContractAddress) {
  try {
    // 1. 获取带前缀的 EVM 交易字节码
    const ethSignedTx = await prepare_eth_erc20_payload(privateKeyArg, tokenContractAddress, ethToAddress, amountEth);
    const ethPayload = ethers__WEBPACK_IMPORTED_MODULE_2__/* .getBytes */ .qg(ethSignedTx); // 转换为 Uint8Array，已包含 kasplex 和版本字节

    // 2. 构造 Kaspa 交易
    const RPC = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.RpcClient({
      resolver: new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Resolver(),
      encoding: kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Encoding.Borsh,
      networkId
    });
    await RPC.disconnect();
    await RPC.connect();
    const privateKey = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.PrivateKey(privateKeyArg.replace('0x', '')); // 去掉 0x
    const publicKey = privateKey.toPublicKey();
    const address = publicKey.toAddress(networkId);
    let kaspaToAddr;
    try {
      kaspaToAddr = new kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.Address(kaspaAddress);
    } catch {
      throw new Error('Invalid Kaspa recipient address');
    }
    const {
      entries
    } = await RPC.getUtxosByAddresses([address.toString()]);
    if (!entries.length) {
      throw new Error('No UTXOs available');
    }

    // const targetAmount = BigInt(Math.floor(parseFloat(amountKas) * 1e8));
    // const priorityFee = BigInt(Math.floor(parseFloat(priorityFeeKas) * 1e8));
    // if (targetAmount <= 0n || priorityFee <= 0n) {
    //   throw new Error('Kaspa amount and priority fee must be greater than 0');
    // }

    // const outputs = [
    //   {
    //     address: kaspaToAddr.toString(),
    //     amount: targetAmount
    //   }
    // ];

    const {
      transactions
    } = await (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.createTransactions)({
      entries,
      outputs: [],
      priorityFee: (0,kaspa_wasm__WEBPACK_IMPORTED_MODULE_1__.kaspaToSompi)(priorityFeeValue.toString()),
      changeAddress: address.toString(),
      networkId,
      payload: ethPayload // 直接使用带前缀的 EVM 字节码
    });
    if (!transactions.length) {
      throw new Error('Failed to create Kaspa transaction');
    }
    let submit_hash;
    for (const transaction of transactions) {
      await transaction.sign([privateKey]);
      const hash = await transaction.submit(RPC);
      submit_hash = hash;
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      status: false,
      msg: "Success",
      hash: submit_hash
    };
  } catch (error) {
    throw new Error("Failed to prepare Kaspa transaction with EVM payload: ".concat(error));
  }
}
async function send_erc20_transaction(toAddress, amountInTokens, privateKey, contractAddress) {
  try {
    // 创建 web3 实例
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .cp3(new web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].providers */ .cp3.providers.HttpProvider(rpcUrl));

    // 验证私钥
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isHexStrict */ .cp3.utils.isHexStrict(privateKey) || privateKey.length !== 66) {
      throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
    }

    // 获取账户
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const fromAddress = account.address;

    // 验证地址
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(toAddress)) {
      throw new Error('Invalid recipient address');
    }
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(fromAddress)) {
      throw new Error('Invalid sender address');
    }
    if (!web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.isAddress */ .cp3.utils.isAddress(contractAddress)) {
      throw new Error('Invalid contract address');
    }

    // ERC20 合约 ABI（只需要 transfer 函数的 ABI）
    const erc20Abi = [{
      "constant": false,
      "inputs": [{
        "name": "to",
        "type": "address"
      }, {
        "name": "amount",
        "type": "uint256"
      }],
      "name": "transfer",
      "outputs": [{
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [{
        "name": "",
        "type": "uint8"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }];

    // 创建合约实例
    const contract = new web3.eth.Contract(erc20Abi, contractAddress);

    // 转换金额
    const amountInSmallestUnit = web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toWei */ .cp3.utils.toWei(amountInTokens, 'ether');

    // 获取 nonce
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'pending');

    // 获取 gas price
    const gasPrice = await web3.eth.getGasPrice();
    if (!gasPrice) {
      throw new Error('Failed to fetch gas price');
    }

    // 估算 gas limit
    const gasLimit = await contract.methods.transfer(toAddress, amountInSmallestUnit.toString()).estimateGas({
      from: fromAddress,
      value: '0x0'
    });
    const chainId = await web3.eth.net.getId();
    // 构建交易对象
    const unsignedTx = {
      from: fromAddress,
      to: contractAddress,
      value: '0x0',
      data: contract.methods.transfer(toAddress, amountInSmallestUnit.toString()).encodeABI(),
      gas: web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toHex */ .cp3.utils.toHex(gasLimit),
      gasPrice: web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toHex */ .cp3.utils.toHex(gasPrice),
      nonce: web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].utils.toHex */ .cp3.utils.toHex(nonce),
      chainId: Number(chainId)
    };

    // 签名交易
    const signedTx = await web3.eth.accounts.signTransaction(unsignedTx, privateKey);
    if (!signedTx.rawTransaction) {
      throw new Error('Failed to sign transaction');
    }

    // 发送交易
    const txResponse = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction sent:', txResponse.transactionHash);
    console.log('Block number:', txResponse.blockNumber);
    return {
      transactionHash: txResponse.transactionHash,
      blockNumber: txResponse.blockNumber
    };
  } catch (error) {
    throw new Error("Transaction failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
  }
}

// export async function signMessage(
//   message: string,
//   privateKeyArg: string
// ): Promise<string> {
//   try {
//     // 清理私钥格式
//     const privateKey = privateKeyArg.replace('0x', '');

//     // 验证私钥
//     if (!ethers.isHexString(`0x${privateKey}`) || privateKey.length !== 64) {
//       throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
//     }

//     // 创建 wallet
//     const wallet = new ethers.Wallet(privateKey);

//     // 对消息进行以太坊标准的签名
//     // 以太坊签名需要对消息进行 keccak256 哈希并加上前缀 "\x19Ethereum Signed Message:\n"
//     const signature = await wallet.signMessage(message);

//     return signature; // 返回签名（0x 开头的 hex 字符串）
//   } catch (error) {
//     throw new Error(`Failed to sign message: ${error}`);
//   }
// }

// export async function verifyMessage(
//   message: string,
//   signature: string,
//   expectedAddress: string
// ): Promise<boolean> {
//   try {
//     // 验证签名格式
//     if (!ethers.isHexString(signature) || signature.length !== 132) {
//       throw new Error('Invalid signature format. Must be 65 bytes hex string (130 characters + 0x)');
//     }

//     // 验证地址格式
//     if (!ethers.isAddress(expectedAddress)) {
//       throw new Error('Invalid Ethereum address');
//     }

//     // 恢复签名对应的地址
//     const recoveredAddress = ethers.verifyMessage(message, signature);

//     // 比较恢复的地址和预期地址
//     return recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
//   } catch (error) {
//     throw new Error(`Failed to verify signature: ${error}`);
//   }
// }


//testcase
// await prepare_eth_payload(
// "0x07f677966b280b7f0a9bbc47428da55dba07d0782f4afc9b14a4b17f5c3e6b32",
// "0xc51535980856E91cFa2997211838A31A3F18F333",
// "1",false
// )

// 使用示例：
// try {
//   const privateKey = '0x07f677966b280b7f0a9bbc47428da55dba07d0782f4afc9b14a4b17f5c3e6b32';
//   const result = eth_address(privateKey);
//   console.log('Address from private key:', result);
//   } catch (error) {
//   console.error(error);
//   }

// await prepare_eth_payload(
// "0x07f677966b280b7f0a9bbc47428da55dba07d0782f4afc9b14a4b17f5c3e6b32",
// "0xc51535980856E91cFa2997211838A31A3F18F333",
// "1",false
// )
// await send_eth_transaction("0xc51535980856E91cFa2997211838A31A3F18F333",1,"0x07f677966b280b7f0a9bbc47428da55dba07d0782f4afc9b14a4b17f5c3e6b32")
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 5140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SO: () => (/* binding */ eth_address),
/* harmony export */   Sq: () => (/* binding */ verifyMessage),
/* harmony export */   ao: () => (/* binding */ signMessage)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17108);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77640);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83024);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63116);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75790);


// 定义返回类型的接口

/**
 * 根据私钥生成以太坊地址
 * @param privateKeyArg 私钥，必须是有效的以太坊私钥
 * @returns 包含私钥、公钥和地址的对象
 * @throws 如果私钥不合法，抛出错误
 */
function eth_address(privateKeyArg) {
  try {
    // 验证私钥是否提供
    if (!privateKeyArg) {
      throw new Error('Private key is required');
    }

    // 验证私钥格式（必须是64个字符的十六进制字符串，以0x开头）
    if (!ethers__WEBPACK_IMPORTED_MODULE_0__/* .isHexString */ .DI(privateKeyArg) || privateKeyArg.length !== 66) {
      throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
    }

    // 创建钱包实例
    const wallet = new ethers__WEBPACK_IMPORTED_MODULE_1__/* .Wallet */ .o(privateKeyArg);

    // 如果需要公钥，可以通过 SigningKey 计算
    const signingKey = new ethers__WEBPACK_IMPORTED_MODULE_2__/* .SigningKey */ .o(privateKeyArg);
    const publicKey = signingKey.publicKey;
    return {
      privateKey: wallet.privateKey,
      address: wallet.address,
      publicKey: publicKey
    };
  } catch (error) {
    throw new Error("Failed to generate Ethereum address: ".concat(error));
  }
}
async function signMessage(message, privateKeyArg) {
  try {
    // 清理私钥格式
    const privateKey = privateKeyArg.replace('0x', '');

    // 验证私钥
    if (!ethers__WEBPACK_IMPORTED_MODULE_0__/* .isHexString */ .DI("0x".concat(privateKey)) || privateKey.length !== 64) {
      throw new Error('Invalid private key format. Must be 64 characters hex string starting with 0x');
    }

    // 创建 wallet
    const wallet = new ethers__WEBPACK_IMPORTED_MODULE_1__/* .Wallet */ .o(privateKey);

    // 对消息进行以太坊标准的签名
    // 以太坊签名需要对消息进行 keccak256 哈希并加上前缀 "\x19Ethereum Signed Message:\n"
    const signature = await wallet.signMessage(message);
    return signature; // 返回签名（0x 开头的 hex 字符串）
  } catch (error) {
    throw new Error("Failed to sign message: ".concat(error));
  }
}
async function verifyMessage(message, signature, expectedAddress) {
  try {
    // 验证签名格式
    if (!ethers__WEBPACK_IMPORTED_MODULE_0__/* .isHexString */ .DI(signature) || signature.length !== 132) {
      throw new Error('Invalid signature format. Must be 65 bytes hex string (130 characters + 0x)');
    }

    // 验证地址格式
    if (!ethers__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .C2(expectedAddress)) {
      throw new Error('Invalid Ethereum address');
    }

    // 恢复签名对应的地址
    const recoveredAddress = ethers__WEBPACK_IMPORTED_MODULE_4__/* .verifyMessage */ .A(message, signature);

    // 比较恢复的地址和预期地址
    return recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
  } catch (error) {
    throw new Error("Failed to verify signature: ".concat(error));
  }
}

/***/ }),

/***/ 32176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ec: () => (/* reexport */ contactBook),
  F1: () => (/* reexport */ erc20List),
  _s: () => (/* reexport */ i18n),
  yG: () => (/* reexport */ service_keyring),
  _M: () => (/* reexport */ notification),
  A5: () => (/* reexport */ openapi),
  Wg: () => (/* reexport */ permission),
  Kk: () => (/* reexport */ preference),
  UV: () => (/* reexport */ session)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/debounce@1.2.1/node_modules/debounce/index.js
var debounce = __webpack_require__(54960);
// EXTERNAL MODULE: ./src/background/webapi/storage.ts
var storage = __webpack_require__(9364);
;// CONCATENATED MODULE: ./src/background/utils/persisitStore.ts
/* eslint-disable @typescript-eslint/ban-types */


const persistStorage = (name, obj) => {
  (0,debounce.debounce)(storage/* default */.cp.set(name, obj), 1000);
};
const createPersistStore = async _ref => {
  let {
    name,
    template = Object.create(null),
    fromStorage = true
  } = _ref;
  let tpl = template;
  if (fromStorage) {
    console.log('createPersistStore', name);
    const storageCache = await storage/* default */.cp.get(name);
    tpl = storageCache || template;
    if (!storageCache) {
      await storage/* default */.cp.set(name, tpl);
    }
  }
  const createProxy = obj => new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      persistStorage(name, target);
      return true;
    },
    deleteProperty(target, prop) {
      if (Reflect.has(target, prop)) {
        Reflect.deleteProperty(target, prop);
        persistStorage(name, target);
      }
      return true;
    }
  });
  return createProxy(tpl);
};
/* harmony default export */ const persisitStore = (createPersistStore);
// EXTERNAL MODULE: ./node_modules/.pnpm/koa-compose@4.1.0/node_modules/koa-compose/index.js
var koa_compose = __webpack_require__(70168);
;// CONCATENATED MODULE: ./src/background/utils/promiseFlow.ts
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

class PromiseFlow {
  constructor() {
    this._tasks = [];
    this._context = {};
    this.requestedApproval = false;
  }
  use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('promise need function to handle');
    }
    this._tasks.push(fn);
    return this;
  }
  callback() {
    return compose(this._tasks);
  }
}
;// CONCATENATED MODULE: ./src/background/utils/index.ts


const underline2Camelcase = str => {
  return str.replace(/_(.)/g, (m, p1) => p1.toUpperCase());
};
const wait = function (fn) {
  let ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      fn();
      resolve(true);
    }, ms);
  });
};
;// CONCATENATED MODULE: ./src/background/service/contactBook.ts

class ContactBook {
  constructor() {
    this.store = void 0;
    this.init = async () => {
      this.store = await persisitStore({
        name: 'contactBook',
        template: {}
      });
    };
    this.getContactByAddress = address => {
      return this.store[address.toLowerCase()];
    };
    this.removeContact = address => {
      var _this$store$key;
      const key = address.toLowerCase();
      if (!this.store[key]) return;
      if ((_this$store$key = this.store[key]) !== null && _this$store$key !== void 0 && _this$store$key.isAlias) {
        this.store[key] = Object.assign({}, this.store[key], {
          isContact: false
        });
      } else {
        delete this.store[key];
      }
    };
    this.updateContact = data => {
      if (this.store[data.address.toLowerCase()]) {
        this.store[data.address.toLowerCase()] = Object.assign({}, this.store[data.address.toLowerCase()], {
          name: data.name,
          address: data.address,
          isContact: true
        });
      } else {
        this.store[data.address.toLowerCase()] = {
          name: data.name,
          address: data.address,
          isContact: true,
          isAlias: false
        };
      }
    };
    this.addContact = this.updateContact;
    this.listContacts = () => {
      const list = Object.values(this.store);
      return list.filter(item => !!(item !== null && item !== void 0 && item.isContact)) || [];
    };
    this.listAlias = () => {
      return Object.values(this.store).filter(item => item === null || item === void 0 ? void 0 : item.isAlias);
    };
    this.updateAlias = data => {
      const key = data.address.toLowerCase();
      if (this.store[key]) {
        this.store[key] = Object.assign({}, this.store[key], {
          name: data.name,
          address: data.address,
          isAlias: true
        });
      } else {
        this.store[key] = {
          name: data.name,
          address: data.address,
          isAlias: true,
          isContact: false
        };
      }
    };
    this.addAlias = this.updateAlias;
    this.removeAlias = address => {
      const key = address.toLowerCase();
      if (!this.store[key]) return;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (this.store[key].isContact) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.store[key] = Object.assign({}, this.store[key], {
          isAlias: false
        });
      } else {
        delete this.store[key];
      }
    };
    this.getContactsByMap = () => {
      Object.values(this.store).filter(item => item === null || item === void 0 ? void 0 : item.isContact).reduce((res, item) => ({
        ...res,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [item.address.toLowerCase()]: item
      }), {});
      return this.store;
    };
  }
}
/* harmony default export */ const contactBook = (new ContactBook());
// EXTERNAL MODULE: ./node_modules/.pnpm/i18next@21.10.0/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(11960);
// EXTERNAL MODULE: ./build/_raw/_locales/en/messages.json
var messages = __webpack_require__(32536);
;// CONCATENATED MODULE: ./src/background/service/i18n.ts


const fetchLocale = async locale => {
  const data = messages;
  return Object.keys(data).reduce((res, key) => {
    return {
      ...res,
      [key.replace(/__/g, ' ')]: data[key].message
    };
  }, {});
};
i18next/* default.init */.cp.init({
  fallbackLng: 'en',
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
const I18N_NS = 'translations';
const addResourceBundle = async locale => {
  if (i18next/* default */.cp.hasResourceBundle(locale, I18N_NS)) return;
  const bundle = await fetchLocale(locale);
  i18next/* default */.cp.addResourceBundle(locale, 'translations', bundle);
};
addResourceBundle('en');
i18next/* default */.cp.on('languageChanged', function (lng) {
  addResourceBundle(lng);
});
/* harmony default export */ const i18n = (i18next/* default */.cp);
// EXTERNAL MODULE: ./node_modules/.pnpm/bip39@3.1.0/node_modules/bip39/src/index.js
var src = __webpack_require__(26348);
// EXTERNAL MODULE: ./node_modules/.pnpm/browser-passworder@2.0.3/node_modules/browser-passworder/index.js
var browser_passworder = __webpack_require__(11444);
var browser_passworder_default = /*#__PURE__*/__webpack_require__.n(browser_passworder);
// EXTERNAL MODULE: ./node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
var events = __webpack_require__(58560);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
// EXTERNAL MODULE: ./dependency/kaspa-core-dev/kaspa.js
var kaspa = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/.pnpm/loglevel@1.9.1/node_modules/loglevel/lib/loglevel.js
var loglevel = __webpack_require__(49816);
var loglevel_default = /*#__PURE__*/__webpack_require__.n(loglevel);
// EXTERNAL MODULE: ./src/shared/constant/index.ts
var constant = __webpack_require__(46956);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(40256);
// EXTERNAL MODULE: ./node_modules/.pnpm/@metamask+obs-store@7.0.0/node_modules/@metamask/obs-store/dist/index.js
var dist = __webpack_require__(3816);
// EXTERNAL MODULE: ./node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/sha256.js
var sha256 = __webpack_require__(32976);
// EXTERNAL MODULE: ./node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var buffer = __webpack_require__(87597);
// EXTERNAL MODULE: ./node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/hmac.js
var hmac = __webpack_require__(71744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@noble+secp256k1@1.7.1/node_modules/@noble/secp256k1/lib/esm/index.js
var esm = __webpack_require__(68880);
// EXTERNAL MODULE: ./node_modules/.pnpm/bitcoinjs-lib@6.1.5/node_modules/bitcoinjs-lib/src/index.js
var bitcoinjs_lib_src = __webpack_require__(12732);
;// CONCATENATED MODULE: ./src/background/utils/onekey/nobleSecp256k1Wrapper.ts





esm/* utils */.c$.sha256Sync = function () {
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const bufs = messages.map(m => buffer.Buffer.isBuffer(m) ? m : buffer.Buffer.from(m));
  return bitcoinjs_lib_src/* crypto */.Ej.sha256(buffer.Buffer.concat(bufs));
};
esm/* utils */.c$.hmacSha256Sync = function (key) {
  const hash = hmac/* hmac */.y.create(sha256/* sha256 */.M, buffer.Buffer.from(key));
  for (var _len2 = arguments.length, messages = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    messages[_key2 - 1] = arguments[_key2];
  }
  messages.forEach(m => hash.update(m));
  return Uint8Array.from(hash.digest());
};
const normalizePrivateKey = esm/* utils */.c$._normalizePrivateKey;
function hexToNumber(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError("hexToNumber: expected string, got ".concat(typeof hex));
  }
  return BigInt("0x".concat(hex));
}
function bytesToNumber(bytes) {
  return hexToNumber(esm/* utils */.c$.bytesToHex(bytes));
}
function normalizeScalar(scalar) {
  let num;
  if (typeof scalar === 'bigint') {
    num = scalar;
  } else if (typeof scalar === 'number' && Number.isSafeInteger(scalar) && scalar >= 0) {
    num = BigInt(scalar);
  } else if (typeof scalar === 'string') {
    if (scalar.length !== 64) throw new Error('Expected 32 bytes of private scalar');
    num = hexToNumber(scalar);
  } else if (scalar instanceof Uint8Array) {
    if (scalar.length !== 32) throw new Error('Expected 32 bytes of private scalar');
    num = bytesToNumber(scalar);
  } else {
    throw new TypeError('Expected valid private scalar');
  }
  if (num < 0) throw new Error('Expected private scalar >= 0');
  return num;
}
const privateAdd = (privateKey, tweak) => {
  const p = normalizePrivateKey(privateKey);
  const t = normalizeScalar(tweak);
  const add = esm/* utils */.c$._bigintTo32Bytes(esm/* utils */.c$.mod(p + t, esm/* CURVE */.OQ.n));
  if (esm/* utils */.c$.isValidPrivateKey(add)) return add;
  return null;
};
const privateNegate = privateKey => {
  const p = normalizePrivateKey(privateKey);
  const not = esm/* utils */.c$._bigintTo32Bytes(esm/* CURVE */.OQ.n - p);
  if (esm/* utils */.c$.isValidPrivateKey(not)) return not;
  return null;
};
const pointAddScalar = (p, tweak, isCompressed) => {
  const P = esm/* Point */.wb.fromHex(p);
  const t = normalizeScalar(tweak);
  const Q = esm/* Point */.wb.BASE.multiplyAndAddUnsafe(P, t, 1n);
  if (!Q) throw new Error('Tweaked point at infinity');
  return Q.toRawBytes(isCompressed);
};
const pointMultiply = (p, tweak, isCompressed) => {
  const P = esm/* Point */.wb.fromHex(p);
  const h = typeof tweak === 'string' ? tweak : esm/* utils */.c$.bytesToHex(tweak);
  const t = BigInt("0x".concat(h));
  return P.multiply(t).toRawBytes(isCompressed);
};
const defaultTrue = param => param !== false;
function throwToNull(fn) {
  try {
    return fn();
  } catch (e) {
    if (e) e.$$autoPrintErrorIgnore = true;
    return null;
  }
}
function innerIsPoint(p, xOnly) {
  if (p.length === 32 !== xOnly) return false;
  try {
    return !!esm/* Point */.wb.fromHex(p);
  } catch (e) {
    if (e) e.$$autoPrintErrorIgnore = true;
    return false;
  }
}
const nobleSecp256k1Wrapper_ecc = {
  isPoint: p => innerIsPoint(p, false),
  isPrivate: d => esm/* utils */.c$.isValidPrivateKey(d),
  isXOnlyPoint: p => innerIsPoint(p, true),
  xOnlyPointAddTweak: (p, tweak) => throwToNull(() => {
    const P = pointAddScalar(p, tweak, true);
    const parity = P[0] % 2 === 1 ? 1 : 0;
    return {
      parity,
      xOnlyPubkey: P.slice(1)
    };
  }),
  pointFromScalar: (sk, compressed) => throwToNull(() => esm/* getPublicKey */.Mh(sk, defaultTrue(compressed))),
  pointCompress: (p, compressed) => esm/* Point */.wb.fromHex(p).toRawBytes(defaultTrue(compressed)),
  pointMultiply: (a, tweak, compressed) => throwToNull(() => pointMultiply(a, tweak, defaultTrue(compressed))),
  pointAdd: (a, b, compressed) => throwToNull(() => {
    const A = esm/* Point */.wb.fromHex(a);
    const B = esm/* Point */.wb.fromHex(b);
    return A.add(B).toRawBytes(defaultTrue(compressed));
  }),
  pointAddScalar: (p, tweak, compressed) => throwToNull(() => pointAddScalar(p, tweak, defaultTrue(compressed))),
  privateAdd: (d, tweak) => throwToNull(() => privateAdd(d, tweak)),
  privateNegate: d => privateNegate(d),
  sign: (h, d, e) => esm/* signSync */.IB(h, d, {
    der: false,
    extraEntropy: e
  }),
  signSchnorr: function (h, d) {
    let e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buffer.Buffer.alloc(32, 0x00);
    return esm/* schnorr */.cD.signSync(h, d, e);
  },
  verify: (h, Q, signature, strict) => esm/* verify */.gT(signature, h, Q, {
    strict
  }),
  verifySchnorr: (h, Q, signature) => esm/* schnorr */.cD.verifySync(signature, h, Q)
};
/* harmony default export */ const nobleSecp256k1Wrapper = (nobleSecp256k1Wrapper_ecc);
;// CONCATENATED MODULE: ./src/background/utils/onekey/bip340.ts



const TAGGED_HASH_PREFIXES = {
  TapLeaf: buffer.Buffer.from([174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238, 174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238]),
  TapBranch: buffer.Buffer.from([25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21, 25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21]),
  TapSighash: buffer.Buffer.from([244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49, 244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49]),
  TapTweak: buffer.Buffer.from([232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233, 232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233])
};
function taggedHash(prefix, data) {
  const tagged = TAGGED_HASH_PREFIXES[prefix];
  const hash = sha256/* sha256 */.M.create();
  hash.update(tagged);
  hash.update(data);
  return buffer.Buffer.from(hash.digest());
}
function tapTweakHash(pubKey, h) {
  return taggedHash('TapTweak', buffer.Buffer.concat(h ? [pubKey, h] : [pubKey]));
}
function tweakPublicKey(pubKey) {
  let h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (!Buffer.isBuffer(pubKey)) return null;
  if (pubKey.length !== 32) return null;
  if (h && h.length !== 32) return null;
  const tweakHash = tapTweakHash(pubKey, h);
  const res = ecc.xOnlyPointAddTweak(pubKey, tweakHash);
  if (!res || res.xOnlyPubkey === null) return null;
  return {
    parity: res.parity,
    x: Buffer.from(res.xOnlyPubkey)
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@brucelei+kaspacore@1.6.7/node_modules/@brucelei/kaspacore/index.js
var kaspacore = __webpack_require__(13552);
// EXTERNAL MODULE: ./node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/utils.js
var utils = __webpack_require__(44876);
;// CONCATENATED MODULE: ./src/background/service/keyringclass/simple-keyring.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use strict";


const type = 'Simple Key Pair';
class SimpleKeyring {
  constructor(password, kaspaWasm, opts) {
    this.type = void 0;
    this.network = void 0;
    this.wallets = void 0;
    this.kaspaWasm = void 0;
    this.getAccountsAndIndexAndDType = async () => {
      // const Arr: tempAccount[] = [];
      const Arr = this.wallets.map(_ref => {
        let {
          publicKey
        } = _ref;
        return {
          publickey: publicKey,
          deriveType: 0,
          index: 0
        };
      });
      // Arr.push(obj);

      const result = await Promise.all(Arr);
      return result;
    };
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    this.signTransaction = async (psbt, inputs, opts) => {
      // psbt means pending in generator
      const privateKeys = [];
      inputs.forEach(input => {
        const keyPair = this._getPrivateKeyFor(input.publicKey);
        const privateKey = keyPair.privateKey;
        privateKeys.push(privateKey);
      });
      await psbt.sign(privateKeys);
      return psbt;
    };
    // super();
    this.type = type;
    this.kaspaWasm = kaspaWasm;
    this.wallets = [];
    if (opts) {
      this.deserialize(opts);
    }
  }
  serialize() {
    const seralizedWallets = this.wallets.map(wallet => wallet.privateKey.toString());
    return Promise.resolve(seralizedWallets);
  }
  deserialize(opts) {
    const privateKeys = opts;
    this.wallets = privateKeys.map(key => {
      // From Hex string
      const privateKey = new kaspa.PrivateKey(key); // From BIP0340
      const keyPair = privateKey.toKeypair();
      return keyPair;
    });
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  addAccounts() {
    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  } // return __awaiter(this, void 0, void 0, function* () {
  //     const newWallets = [];
  //     for (let i = 0; i < n; i++) {
  //         newWallets.push(kaspa_core.ECPair.makeRandom());
  //     }
  //     this.wallets = this.wallets.concat(newWallets);
  //     const hexWallets = newWallets.map(({ publicKey }) => publicKey.toString("hex"));
  //     return hexWallets;
  // });
  getAccounts() {
    return this.wallets.map(_ref2 => {
      let {
        publicKey
      } = _ref2;
      return publicKey;
    });
  }
  signMessage(publicKey, text) {
    const keyPair = this._getPrivateKeyFor(publicKey);
    const {
      signMessage
    } = this.kaspaWasm;
    const signature = signMessage({
      message: text,
      privateKey: keyPair.privateKey.toString()
    });
    return Promise.resolve(signature);
  }
  verifyMessage(publicKey, message, signature) {
    const {
      verifyMessage
    } = this.kaspaWasm;
    const isVerified = verifyMessage({
      message,
      signature,
      publicKey
    });
    return Promise.resolve(isVerified);
  }
  _getPrivateKeyFor(publicKey) {
    if (!publicKey) {
      throw new Error('Must specify publicKey.');
    }
    const wallet = this._getWalletForAccount(publicKey);
    return wallet;
  }
  exportAccount(publicKey) {
    const wallet = this._getWalletForAccount(publicKey);
    return wallet.privateKey.toString();
  }
  removeAccount(publicKey) {
    if (!this.wallets.map(wallet => wallet.publicKey.toString()).includes(publicKey)) {
      throw new Error("PublicKey ".concat(publicKey, " not found in this keyring"));
    }
    this.wallets = this.wallets.filter(wallet => wallet.publicKey.toString() !== publicKey);
  }
  _getWalletForAccount(publicKey) {
    const wallet = this.wallets.find(wallet => wallet.publicKey == publicKey);
    if (!wallet) {
      throw new Error('Simple Keyring - Unable to find matching publicKey.');
    }
    return wallet;
  }
}
SimpleKeyring.type = void 0;
SimpleKeyring.type = type;

;// CONCATENATED MODULE: ./src/background/service/keyringclass/hd-keyring.ts










const hdPathString = 'm/44\'/111111\'/0\'';
const hd_keyring_type = 'HD Key Tree';
class HdKeyring extends SimpleKeyring {
  /* PUBLIC METHODS */
  constructor(password, kaspaWasm, opts) {
    super(null, kaspaWasm, null);
    // this.kaspaWasm = kaspaWasm;
    //   type: string;
    this.mnemonic = void 0;
    // kaspaWasm: TKaspaWasm;
    this.xpriv = void 0;
    this.passphrase = void 0;
    this.hdPath = void 0;
    this.root = void 0;
    this.hdWallet = void 0;
    // in order to check if it's onekey address
    this.addressType = void 0;
    this._index2wallet = void 0;
    // key:dType.toString() + index.toString()
    // indexes for receive address
    this.activeIndexes = void 0;
    // indexes for change address
    this.activeChangeIndexes = void 0;
    this.page = void 0;
    this.perPage = void 0;
    //  get public keys
    this.getAccounts = async () => {
      const pubkeys = await Promise.all(this.wallets.map(w => {
        return w.publicKey;
      }));
      return pubkeys;
    };
    this.getAccountsAndIndexAndDType = async () => {
      const Arr = [];
      for (const key in this._index2wallet) {
        const obj = {
          publickey: this._index2wallet[key][0],
          deriveType: this._index2wallet[key][2],
          index: this._index2wallet[key][3]
        };
        Arr.push(obj);
      }
      const result = await Promise.all(Arr);
      return result;
    };
    this.type = hd_keyring_type;
    this.mnemonic = null;
    this.xpriv = null;
    this.network = 'network';
    this.hdPath = hdPathString || (opts === null || opts === void 0 ? void 0 : opts.hdPath);
    this.root = null;
    this.wallets = [];
    this._index2wallet = {};
    this.activeIndexes = [];
    this.activeChangeIndexes = [];
    this.page = 0;
    this.perPage = 5;
    if (opts) {
      this.deserialize(opts);
    }
  }
  serialize() {
    return Promise.resolve({
      mnemonic: this.mnemonic,
      xpriv: this.xpriv,
      activeIndexes: this.activeIndexes,
      activeChangeIndexes: this.activeChangeIndexes,
      hdPath: this.hdPath,
      passphrase: this.passphrase,
      addressType: this.addressType
    });
  }
  // deserialize(_opts: DeserializeOption = {}): Promise<void>{
  deserialize() {
    let _opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.root) {
      throw new Error('KAS-HD-Keyring: Seed phrase already provided');
    }
    const opts = _opts;
    this.wallets = [];
    this.mnemonic = null;
    this.xpriv = null;
    this.root = null;
    this.hdPath = opts.hdPath || hdPathString;
    if (opts.addressType) {
      this.addressType = opts.addressType;
    }
    if (opts.passphrase) {
      this.passphrase = opts.passphrase;
    }
    if (opts.mnemonic) {
      this.initFromMnemonic(opts.mnemonic);
    } else if (opts.xpriv) {
      this.initFromXpriv(opts.xpriv);
    }
    if (opts.activeIndexes) {
      this.activeAccounts(opts.activeIndexes, 0);
    }
    if (opts.activeChangeIndexes && opts.activeChangeIndexes.length > 0) {
      this.activeAccounts(opts.activeChangeIndexes, 1);
    }
  }
  initFromXpriv(xpriv) {
    if (this.root) {
      throw new Error('KAS-HD-Keyring: Seed phrase already provided');
    }
    this.xpriv = xpriv;
    this._index2wallet = {};
    // this.hdWallet = hdkey.fromJSON({ xpriv });
    this.hdWallet = null;
    this.root = this.hdWallet;
  }
  initFromMnemonic(mnemonic) {
    if (this.root) {
      throw new Error('Kas-Hd-Keyring: Seed phrase already provided');
    }
    this.mnemonic = mnemonic;
    this._index2wallet = {};
    const {
      Mnemonic,
      XPrv
    } = this.kaspaWasm;
    const mnemonicObject = new Mnemonic(this.mnemonic);
    const seed = mnemonicObject.toSeed(this.passphrase);
    this.hdWallet = new XPrv(seed);
    // new XPrivateKey has include derivePath method
    this.root = this.hdWallet;
  }
  changeHdPath(hdPath) {
    if (!this.mnemonic) {
      throw new Error('KAS-HD-Keyring: Not support');
    }
    this.hdPath = hdPath;
    this.root = this.hdWallet.derivePath(this.hdPath);
    const indexes = this.activeIndexes;
    this._index2wallet = {};
    this.activeIndexes = [];
    this.wallets = [];
    this.activeAccounts(indexes);
  }
  getAccountByHdPath(hdPath, index) {
    if (!this.mnemonic) {
      throw new Error('KAS-HD-Keyring: Not support');
    }
    this.root = this.hdWallet.derivePath(hdPath);
    const root_xprv_str = this.root.intoString('xprv');
    const child = new kaspa.PrivateKeyGenerator(root_xprv_str, false, 0n);
    const receivePrivateKey = child.receiveKey(index);
    const keyPair = receivePrivateKey.toKeypair();
    const address = keyPair.publicKey;
    return address;
  }
  addAccounts() {
    let numberOfAccounts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    let dType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let currentIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let count = numberOfAccounts;
    // let currentIdx = 0;
    const newWallets = [];
    while (count) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const [address, wallet, ddType, i] = this._addressFromIndex(currentIdx, dType);
      if (this.wallets.includes(wallet)) {
        currentIdx++;
      } else {
        this.wallets.push(wallet);
        newWallets.push(wallet);
        if (dType == 0) {
          this.activeIndexes.push(currentIdx);
        } else if (dType == 1) {
          this.activeChangeIndexes.push(currentIdx);
        }
        count--;
      }
    }
    const hexWallets = newWallets.map(w => {
      return w.publicKey;
    });
    return Promise.resolve(hexWallets);
  }
  activeAccounts(indexes) {
    let dType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const accounts = [];
    for (const index of indexes) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const [address, wallet, ddType, i] = this._addressFromIndex(index, dType);
      this.wallets.push(wallet);
      if (dType == 0) {
        this.activeIndexes.push(index);
      } else {
        this.activeChangeIndexes.push(index);
      }
      accounts.push(address);
    }
    return accounts;
  }
  getFirstPage() {
    this.page = 0;
    return this.__getPage(1);
  }
  getNextPage() {
    return this.__getPage(1);
  }
  getPreviousPage() {
    return this.__getPage(-1);
  }
  // generate address
  getAddresses(start, end) {
    let dType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const from = start;
    const to = end;
    const accounts = [];
    for (let i = from; i < to; i++) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const [address, wallet, ddType, index] = this._addressFromIndex(i, dType);
      accounts.push({
        address: address,
        index: i
      });
    }
    return accounts;
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  __getPage(increment) {
    // return __awaiter(this, void 0, void 0, function* () {
    //     this.page += increment;
    //     if (!this.page || this.page <= 0) {
    //         this.page = 1;
    //     }
    //     const from = (this.page - 1) * this.perPage;
    //     const to = from + this.perPage;
    //     const accounts = [];
    //     for (let i = from; i < to; i++) {
    //         const [address] = this._addressFromIndex(i);
    //         accounts.push({
    //             address,
    //             index: i + 1,
    //         });
    //     }
    //     return accounts;
    // });
  }
  getIndexByAddress(address) {
    for (const key in this._index2wallet) {
      if (this._index2wallet[key][0] === address) {
        return Number(key);
      }
    }
    return null;
  }
  _onekeyPrivateKeyFromOriginPrivateKey(pri, pub) {
    let privateKey = new Uint8Array(pri);
    const publicKey = pub;
    if (publicKey[0] === 3) {
      privateKey = nobleSecp256k1Wrapper.privateNegate(privateKey);
    }
    if (!privateKey) {
      throw new Error('Private key is required for tweaking signer!');
    }
    const tweakedPrivateKey = nobleSecp256k1Wrapper.privateAdd(privateKey, tapTweakHash(publicKey.slice(1), undefined));
    return new kaspa.PrivateKey((0,utils/* bytesToHex */.EH)(tweakedPrivateKey));
  }
  _addressFromIndex(i) {
    let dType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const key = dType.toString() + i.toString();
    if (!this._index2wallet[key]) {
      // 0
      const root_xprv_str = this.root.intoString('xprv');
      // eslint-disable-next-line quotes
      if (this.hdPath == "m/44'/972/0'") {
        const privKey = root_xprv_str;
        const HDWallet = new kaspacore.HDPrivateKey(privKey);
        const {
          privateKey
        } = HDWallet.deriveChild("m/44'/972/0'/".concat(dType, "'/").concat(i, "'"));
        const {
          PrivateKey
        } = this.kaspaWasm;
        const privateKeyWasm = new PrivateKey(privateKey.toString());
        const keyPair = privateKeyWasm.toKeypair();
        const address = keyPair.publicKey;
        this._index2wallet[key] = [address, keyPair, dType, i];
        // handle onekey tweaked private key
      } else if (this.addressType && this.addressType == types/* AddressType */.im.KASPA_ONEKEY_44_111111) {
        // this.hdPath == "m/44'/111111'/0'"
        const child = new kaspa.PrivateKeyGenerator(root_xprv_str, false, 0n);
        if (dType == 0) {
          const kaspaReceivePrivateKey = child.receiveKey(i);
          const kaspaKeyPair = kaspaReceivePrivateKey.toKeypair();
          const kaspaPubkey = kaspaKeyPair.publicKey;
          const kaspaPrivateKeyBuf = buffer.Buffer.from(buffer.Buffer.from((0,utils/* hexToBytes */._U)(kaspaReceivePrivateKey.toString())));
          const kaspaPublicKeyBuf = buffer.Buffer.from(buffer.Buffer.from((0,utils/* hexToBytes */._U)(kaspaPubkey)));
          const onekeyPrivateKey = this._onekeyPrivateKeyFromOriginPrivateKey(kaspaPrivateKeyBuf, kaspaPublicKeyBuf);
          const receivePrivateKey = new kaspa.PrivateKey(onekeyPrivateKey.toString());
          const keyPair = receivePrivateKey.toKeypair();
          const address = keyPair.publicKey;
          this._index2wallet[key] = [address, keyPair, dType, i];
        } else {
          const kaspaChangePrivateKey = child.changeKey(i);
          const kaspaKeyPair = kaspaChangePrivateKey.toKeypair();
          const kaspaPubkey = kaspaKeyPair.publicKey;
          const kaspaPrivateKeyBuf = buffer.Buffer.from(buffer.Buffer.from((0,utils/* hexToBytes */._U)(kaspaChangePrivateKey.toString())));
          const kaspaPublicKeyBuf = buffer.Buffer.from(buffer.Buffer.from((0,utils/* hexToBytes */._U)(kaspaPubkey)));
          const onekeyPrivateKey = this._onekeyPrivateKeyFromOriginPrivateKey(kaspaPrivateKeyBuf, kaspaPublicKeyBuf);
          const changePrivateKey = new kaspa.PrivateKey(onekeyPrivateKey.toString());
          const keyPair = changePrivateKey.toKeypair();
          const address = keyPair.publicKey;
          this._index2wallet[key] = [address, keyPair, dType, i];
        }
      } else {
        // this.hdPath == "m/44'/111111'/0'"
        const child = new kaspa.PrivateKeyGenerator(root_xprv_str, false, 0n);
        // 3  generate kaspa address e.g. receive_pubkeys,changes_pubkeys
        if (dType == 0) {
          const receivePrivateKey = child.receiveKey(i);
          const keyPair = receivePrivateKey.toKeypair();
          const address = keyPair.publicKey;
          this._index2wallet[key] = [address, keyPair, dType, i];
        } else {
          const changePrivateKey = child.changeKey(i);
          const keyPair = changePrivateKey.toKeypair();
          const address = keyPair.publicKey;
          this._index2wallet[key] = [address, keyPair, dType, i];
        }
      }
    }
    return this._index2wallet[key];
  }
}
HdKeyring.type = void 0;
HdKeyring.type = hd_keyring_type;

;// CONCATENATED MODULE: ./src/background/service/keyringclass/index.ts
// "use strict";
// var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     var desc = Object.getOwnPropertyDescriptor(m, k);
//     if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
//       desc = { enumerable: true, get: function() { return m[k]; } };
//     }
//     Object.defineProperty(o, k2, desc);
// }) : (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     o[k2] = m[k];
// }));
// var __exportStar = (this && this.__exportStar) || function(m, exports) {
//     for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// __exportStar(require("./hd-keyring"), exports);
// __exportStar(require("./simple-keyring"), exports);



/* harmony default export */ const keyringclass = ({
  HdKeyring: HdKeyring,
  SimpleKeyring: SimpleKeyring
});
// EXTERNAL MODULE: ./node_modules/.pnpm/compare-versions@4.1.4/node_modules/compare-versions/index.mjs
var compare_versions = __webpack_require__(61612);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(77856);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./src/shared/eventBus.ts
var eventBus = __webpack_require__(68640);
;// CONCATENATED MODULE: ./src/background/service/preference.ts







// import browser from '../webapi/browser';
// import { i18n, sessionService } from './index';


// eslint-disable-next-line no-undef
const version =  false || '0';
const SUPPORT_LOCALES = (/* unused pure expression or super */ null && (['en']));
class PreferenceService {
  constructor() {
    var _this = this;
    this.store = void 0;
    this.popupOpen = false;
    this.hasOtherProvider = false;
    this.init = async () => {
      console.log('init');
      const defaultLang = 'en';
      console.log('init');
      this.store = await persisitStore({
        name: 'preference',
        template: {
          currentKeyringIndex: 0,
          currentAccount: undefined,
          editingKeyringIndex: 0,
          editingAccount: undefined,
          externalLinkAck: false,
          balanceMap: {},
          historyMap: {},
          locale: defaultLang,
          watchAddressPreference: {},
          walletSavedList: [],
          alianNames: {},
          initAlianNames: false,
          currentVersion: '0',
          firstOpen: false,
          currency: 'USD',
          addressType: types/* AddressType */.im.KASPA_44_111111,
          networkType: types/* NetworkType */.U5.Mainnet,
          rpcLinks: constant/* NETWORK_TYPES */.CY,
          keyringAlianNames: {},
          accountAlianNames: {},
          skippedVersion: '',
          appTab: {
            summary: {
              apps: []
            },
            readAppTime: {},
            readTabTime: 1
          },
          showSafeNotice: false,
          addressFlags: {},
          layerType: '1',
          layer: 'L1'
        }
      });
      if (!this.store.locale || this.store.locale !== defaultLang) {
        this.store.locale = defaultLang;
      }
      i18n.changeLanguage(this.store.locale);
      if (!this.store.currency) {
        this.store.currency = 'USD';
      }
      if (!this.store.initAlianNames) {
        this.store.initAlianNames = false;
      }
      if (!this.store.externalLinkAck) {
        this.store.externalLinkAck = false;
      }
      if (!this.store.balanceMap) {
        this.store.balanceMap = {};
      }
      if (!this.store.historyMap) {
        this.store.historyMap = {};
      }
      if (!this.store.walletSavedList) {
        this.store.walletSavedList = [];
      }
      if (this.store.addressType === undefined || this.store.addressType === null) {
        this.store.addressType = types/* AddressType */.im.KASPA_44_111111;
      }
      if (!this.store.networkType) {
        this.store.networkType = types/* NetworkType */.U5.Mainnet;
      }
      if (this.store.currentAccount) {
        if (!this.store.currentAccount.pubkey) {
          // old version.
          this.store.currentAccount = undefined; // will restored to new version
        }
      }
      if (!this.store.keyringAlianNames) {
        this.store.keyringAlianNames = {};
      }
      if (!this.store.accountAlianNames) {
        this.store.accountAlianNames = {};
      }
      if (!this.store.skippedVersion) {
        this.store.skippedVersion = '';
      }
      if (!this.store.appTab) {
        this.store.appTab = {
          summary: {
            apps: []
          },
          readTabTime: 1,
          readAppTime: {}
        };
      }
      if (!this.store.appTab.readAppTime) {
        this.store.appTab.readAppTime = {};
      }
      if (typeof this.store.showSafeNotice !== 'boolean') {
        this.store.showSafeNotice = false;
      }
      if (!this.store.addressFlags) {
        this.store.addressFlags = {};
      }
      if (!this.store.layer) {
        this.store.layer = 'L1';
      }
    };
    // getAcceptLanguages = async () => {
    //   let langs = await browser.i18n.getAcceptLanguages();
    //   if (!langs) langs = [];
    //   return langs.map((lang) => lang.replace(/-/g, '_')).filter((lang) => SUPPORT_LOCALES.includes(lang));
    // };
    this.getCurrentAccount = () => {
      return cloneDeep_default()(this.store.currentAccount);
    };
    this.setCurrentAccount = account => {
      this.store.currentAccount = account;
      if (account) {
        session.broadcastEvent('accountsChanged', [account.address]);
        eventBus/* default */.c.emit('accountsChanged', account);
      }
    };
    // popupOpen
    this.setPopupOpen = isOpen => {
      this.popupOpen = isOpen;
    };
    this.getPopupOpen = () => {
      return this.popupOpen;
    };
    // addressBalance
    this.updateAddressBalance = (address, data) => {
      const balanceMap = this.store.balanceMap || {};
      this.store.balanceMap = {
        ...balanceMap,
        [address]: data
      };
    };
    this.removeAddressBalance = address => {
      const key = address;
      if (key in this.store.balanceMap) {
        const map = this.store.balanceMap;
        delete map[key];
        this.store.balanceMap = map;
      }
    };
    this.getAddressBalance = address => {
      const balanceMap = this.store.balanceMap || {};
      return balanceMap[address] || null;
    };
    // addressHistory
    this.updateAddressHistory = (address, data) => {
      const historyMap = this.store.historyMap || {};
      this.store.historyMap = {
        ...historyMap,
        [address]: data
      };
    };
    this.removeAddressHistory = address => {
      const key = address;
      if (key in this.store.historyMap) {
        const map = this.store.historyMap;
        delete map[key];
        this.store.historyMap = map;
      }
    };
    this.getAddressHistory = address => {
      const historyMap = this.store.historyMap || {};
      return historyMap[address] || [];
    };
    // externalLinkAck
    this.getExternalLinkAck = () => {
      return this.store.externalLinkAck;
    };
    this.setExternalLinkAck = function () {
      let ack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _this.store.externalLinkAck = ack;
    };
    // locale
    this.getLocale = () => {
      return this.store.locale;
    };
    this.setLocale = locale => {
      this.store.locale = locale;
      i18n.changeLanguage(locale);
    };
    // currency
    this.getCurrency = () => {
      return this.store.currency;
    };
    this.setCurrency = currency => {
      this.store.currency = currency;
    };
    // walletSavedList
    this.getWalletSavedList = () => {
      return this.store.walletSavedList || [];
    };
    this.updateWalletSavedList = list => {
      this.store.walletSavedList = list;
    };
    // alianNames
    this.getInitAlianNameStatus = () => {
      return this.store.initAlianNames;
    };
    this.changeInitAlianNameStatus = () => {
      this.store.initAlianNames = true;
    };
    // isFirstOpen
    this.getIsFirstOpen = () => {
      if (!this.store.currentVersion || (0,compare_versions/* default */.cp)(version, this.store.currentVersion)) {
        this.store.currentVersion = version;
        this.store.firstOpen = true;
      }
      return this.store.firstOpen;
    };
    this.updateIsFirstOpen = () => {
      this.store.firstOpen = false;
    };
    // deprecate
    this.getAddressType = () => {
      return this.store.addressType;
    };
    // network type
    this.getNetworkType = () => {
      return this.store.networkType;
    };
    this.getRpcLinks = () => {
      return this.store.rpcLinks;
    };
    this.setNetworkType = networkType => {
      this.store.networkType = networkType;
    };
    this.setRpcLinks = rpcLinks => {
      this.store.rpcLinks = rpcLinks;
    };
    // currentKeyringIndex
    this.getCurrentKeyringIndex = () => {
      return this.store.currentKeyringIndex;
    };
    this.setCurrentKeyringIndex = keyringIndex => {
      this.store.currentKeyringIndex = keyringIndex;
    };
    // keyringAlianNames
    this.setKeyringAlianName = (keyringKey, name) => {
      this.store.keyringAlianNames = Object.assign({}, this.store.keyringAlianNames, {
        [keyringKey]: name
      });
    };
    this.getKeyringAlianName = (keyringKey, defaultName) => {
      const name = this.store.keyringAlianNames[keyringKey];
      if (!name && defaultName) {
        this.store.keyringAlianNames[keyringKey] = defaultName;
      }
      return this.store.keyringAlianNames[keyringKey];
    };
    // accountAlianNames
    this.setAccountAlianName = (accountKey, name) => {
      this.store.accountAlianNames = Object.assign({}, this.store.accountAlianNames, {
        [accountKey]: name
      });
    };
    this.getAccountAlianName = (accountKey, defaultName) => {
      const name = this.store.accountAlianNames[accountKey];
      if (!name && defaultName) {
        this.store.accountAlianNames[accountKey] = defaultName;
      }
      return this.store.accountAlianNames[accountKey];
    };
    // get address flag
    this.getAddressFlag = address => {
      return this.store.addressFlags[address] || 0;
    };
    this.setAddressFlag = (address, flag) => {
      this.store.addressFlags = Object.assign({}, this.store.addressFlags, {
        [address]: flag
      });
    };
    // Add address flag
    this.addAddressFlag = (address, flag) => {
      const finalFlag = (this.store.addressFlags[address] || 0) | flag;
      this.store.addressFlags = Object.assign({}, this.store.addressFlags, {
        [address]: finalFlag
      });
      return finalFlag;
    };
    // Remove address flag
    this.removeAddressFlag = (address, flag) => {
      const finalFlag = (this.store.addressFlags[address] || 0) & ~flag;
      this.store.addressFlags = Object.assign({}, this.store.addressFlags, {
        [address]: finalFlag
      });
      return finalFlag;
    };
    // editingKeyringIndex
    this.getEditingKeyringIndex = () => {
      return this.store.editingKeyringIndex;
    };
    this.setEditingKeyringIndex = keyringIndex => {
      this.store.editingKeyringIndex = keyringIndex;
    };
    // editingAccount
    this.getEditingAccount = () => {
      return cloneDeep_default()(this.store.editingAccount);
    };
    this.setEditingAccount = account => {
      this.store.editingAccount = account;
    };
    this.getSkippedVersion = () => {
      return this.store.skippedVersion;
    };
    this.setSkippedVersion = version => {
      this.store.skippedVersion = version;
    };
    this.getAppTab = () => {
      return this.store.appTab;
    };
    this.setAppSummary = appSummary => {
      this.store.appTab.summary = appSummary;
    };
    this.setReadTabTime = timestamp => {
      this.store.appTab.readTabTime = timestamp;
    };
    this.setReadAppTime = (appid, timestamp) => {
      this.store.appTab.readAppTime[appid] = timestamp;
    };
    this.getShowSafeNotice = () => {
      return this.store.showSafeNotice;
    };
    this.setShowSafeNotice = showSafeNotice => {
      this.store.showSafeNotice = showSafeNotice;
    };
    // setLayerType = (layerType: string) => {
    //   this.store.layerType = layerType;
    // };
    this.getLayer = () => {
      return this.store.layer;
    };
    this.setLayer = type => {
      this.store.layer = type || 'L1';
    };
  }
}
/* harmony default export */ const preference = (new PreferenceService());
;// CONCATENATED MODULE: ./src/background/service/keyring/display.ts

class DisplayKeyring {
  constructor(_keyring) {
    this.accounts = [];
    this.type = '';
    this.hdPath = '';
    this.unlock = async () => {
      const keyring = await service_keyring.getKeyringForAccount(this.accounts[0], this.type);
      if (keyring.unlock) await keyring.unlock();
    };
    this.getFirstPage = async () => {
      const keyring = await service_keyring.getKeyringForAccount(this.accounts[0], this.type);
      if (keyring.getFirstPage) {
        return await keyring.getFirstPage();
      } else {
        return [];
      }
    };
    this.getNextPage = async () => {
      const keyring = await service_keyring.getKeyringForAccount(this.accounts[0], this.type);
      if (keyring.getNextPage) {
        return await keyring.getNextPage();
      } else {
        return [];
      }
    };
    this.getAccounts = async () => {
      const keyring = await service_keyring.getKeyringForAccount(this.accounts[0], this.type);
      return await keyring.getAccounts();
    };
    this.activeAccounts = async indexes => {
      const keyring = await service_keyring.getKeyringForAccount(this.accounts[0], this.type);
      if (keyring.activeAccounts) {
        return keyring.activeAccounts(indexes);
      } else {
        return [];
      }
    };
    this.accounts = _keyring.accounts || [];
    this.type = _keyring.type;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.hdPath = _keyring.hdPath;
  }
}
/* harmony default export */ const display = (DisplayKeyring);
;// CONCATENATED MODULE: ./src/background/service/keyring/index.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/// fork from https://github.com/MetaMask/KeyringController/blob/master/index.js


// import encryptor from '@/ui/utils/encyptor';


// import i18n from '../i18n';







const {
  SimpleKeyring: keyring_SimpleKeyring,
  HdKeyring: keyring_HdKeyring
} = keyringclass;
const KEYRING_SDK_TYPES = {
  SimpleKeyring: keyring_SimpleKeyring,
  HdKeyring: keyring_HdKeyring
};
const KEYRING_CLASS = {
  PRIVATE_KEY: keyring_SimpleKeyring.type,
  MNEMONIC: keyring_HdKeyring.type
};
class EmptyKeyring {
  constructor() {
    this.type = constant/* KEYRING_TYPE */.OE.Empty;
  } // todo
  async addAccounts(n, dType, startIndex) {
    return [];
  }
  async getAccounts() {
    return [];
  }
  async getAccountsAndIndexAndDType() {
    return [];
  }
  signTransaction(psbt, inputs) {
    throw new Error('Method not implemented.');
  }
  signMessage(address, message) {
    throw new Error('Method not implemented.');
  }
  verifyMessage(address, message, sig) {
    throw new Error('Method not implemented.');
  }
  exportAccount(address) {
    throw new Error('Method not implemented.');
  }
  removeAccount(address) {
    throw new Error('Method not implemented.');
  }
  async serialize() {
    return '';
  }
  async deserialize(opts) {
    return;
  }
}
class KeyringService extends events.EventEmitter {
  constructor() {
    var _this;
    super();
    _this = this;
    //
    // PUBLIC METHODS
    //
    this.kaspaWasm = void 0;
    this.keyringTypes = void 0;
    this.store = void 0;
    this.memStore = void 0;
    // store!: any
    // memStore: any
    this.keyrings = void 0;
    this.addressTypes = void 0;
    this.encryptor = (browser_passworder_default());
    this.password = null;
    this.initKapaWasm = async () => {
      this.kaspaWasm = kaspa;
      await this.kaspaWasm.default();
    };
    this.loadStore = initState => {
      this.store = new dist.ObservableStore(initState);
    };
    this.boot = async password => {
      this.password = password;
      const encryptBooted = await this.encryptor.encrypt(password, 'true');
      console.log('encryptBooted', encryptBooted);
      this.store.updateState({
        booted: encryptBooted
      });
      this.memStore.updateState({
        isUnlocked: true
      });
    };
    this.isBooted = () => {
      return !!this.store.getState().booted;
    };
    this.hasVault = () => {
      return !!this.store.getState().vault;
      // vault是ObservableStore对象
    };
    /**
     * Full Update
     *
     * Emits the `update` event and @returns a Promise that resolves to
     * the current state.
     *
     * Frequently used to end asynchronous chains in this class,
     * indicating consumers can often either listen for updates,
     * or accept a state-resolving promise to consume their results.
     *
     * @returns {Object} The controller state.
     */
    this.fullUpdate = () => {
      this.emit('update', this.memStore.getState());
      return this.memStore.getState();
    };
    /**
     * Import Keychain using Private key
     *
     * @emits KeyringController#unlock
     * @param  privateKey - The privateKey to generate address
     * @returns  A Promise that resolves to the state.
     */
    this.importPrivateKey = async (privateKey, addressType) => {
      await this.persistAllKeyrings();
      const keyring = await this.addNewKeyring('Simple Key Pair', [privateKey], addressType);
      await this.persistAllKeyrings();
      this.setUnlocked();
      this.fullUpdate();
      return keyring;
    };
    this.generateMnemonic = function () {
      let wordCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      // return bip39.generateMnemonic(128);
      const mnemonic1 = _this.kaspaWasm.Mnemonic.random(wordCount);
      // an object
      return mnemonic1.phrase;
    };
    this.generatePreMnemonic = async function () {
      let wordCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      if (!_this.password) {
        // throw new Error(i18n.t('you need to unlock wallet first'));
        throw new Error('you need to unlock wallet first');
      }
      const mnemonic = _this.generateMnemonic(wordCount);
      const preMnemonics = await _this.encryptor.encrypt(_this.password, mnemonic);
      _this.memStore.updateState({
        preMnemonics
      });
      return mnemonic;
    };
    this.getKeyringByType = type => {
      const keyring = this.keyrings.find(keyring => keyring.type === type);
      return keyring;
    };
    this.removePreMnemonics = () => {
      this.memStore.updateState({
        preMnemonics: ''
      });
    };
    this.getPreMnemonics = async function () {
      let wordCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      if (!_this.memStore.getState().preMnemonics) {
        return '';
      }
      if (!_this.password) {
        // throw new Error(i18n.t('you need to unlock wallet first'));
        throw new Error('you need to unlock wallet first');
      }
      const _menmonics = await _this.encryptor.decrypt(_this.password, _this.memStore.getState().preMnemonics);
      if (_menmonics && _menmonics.length > 0 && _menmonics.split(' ').length === wordCount) {
        return _menmonics;
      } else {
        return '';
      }
    };
    /**
     * CreateNewVaultAndRestore Mnenoic
     *
     * Destroys any old encrypted storage,
     * creates a new HD wallet from the given seed with 1 account.
     *
     * @emits KeyringController#unlock
     * @param  seed - The BIP44-compliant seed phrase.
     * @returns  A Promise that resolves to the state.
     */
    this.createKeyringWithMnemonics = async function (seed, hdPath, passphrase, addressType, activeIndexes) {
      let activeChangeIndexes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
      // if (accountCount < 1) {
      //   // throw new Error(i18n.t('account count must be greater than 0'));
      //   throw new Error('account count must be greater than 0');
      // }
      if (!src/* validateMnemonic */.oT(seed)) {
        // return Promise.reject(new Error(i18n.t('mnemonic phrase is invalid')));
        return Promise.reject(new Error('mnemonic phrase is invalid'));
      }
      await _this.persistAllKeyrings();
      // const activeIndexes: number[] = [];
      // for (let i = startIndex; i < accountCount + startIndex; i++) {
      //   activeIndexes.push(i);
      // }
      const keyring = await _this.addNewKeyring('HD Key Tree', {
        mnemonic: seed,
        activeIndexes,
        activeChangeIndexes,
        hdPath,
        passphrase,
        addressType
      }, addressType);
      const accounts = await keyring.getAccounts();
      if (!accounts[0]) {
        throw new Error('KeyringController - First Account not found.');
      }
      _this.persistAllKeyrings();
      _this.setUnlocked();
      _this.fullUpdate();
      return keyring;
    };
    this.addKeyring = async (keyring, addressType) => {
      const accounts = await keyring.getAccounts();
      await this.checkForDuplicate(keyring.type, accounts);
      this.keyrings.push(keyring);
      this.addressTypes.push(addressType);
      await this.persistAllKeyrings();
      await this._updateMemStoreKeyrings();
      await this.fullUpdate();
      return keyring;
    };
    this.changeAddressType = async (keyringIndex, addressType) => {
      const keyring = this.keyrings[keyringIndex];
      if (keyring.type === constant/* KEYRING_TYPE */.OE.HdKeyring) {
        const hdPath = constant/* ADDRESS_TYPES */.Pt[addressType].hdPath;
        if (keyring.hdPath !== hdPath && keyring.changeHdPath) {
          keyring.changeHdPath(hdPath);
        }
      }
      this.addressTypes[keyringIndex] = addressType;
      await this.persistAllKeyrings();
      await this._updateMemStoreKeyrings();
      await this.fullUpdate();
      return keyring;
    };
    /**
     * Set Locked
     * This method deallocates all secrets, and effectively locks MetaMask.
     *
     * @emits KeyringController#lock
     * @returns {Promise<Object>} A Promise that resolves to the state.
     */
    this.setLocked = async () => {
      // set locked
      this.password = null;
      this.memStore.updateState({
        isUnlocked: false
      });
      // remove keyrings
      this.keyrings = [];
      await this._updateMemStoreKeyrings();
      this.emit('lock');
      return this.fullUpdate();
    };
    /**
     * Submit Password
     *
     * Attempts to decrypt the current vault and load its keyrings
     * into memory.
     *
     * Temporarily also migrates any old-style vaults first, as well.
     * (Pre MetaMask 3.0.0)
     *
     * @emits KeyringController#unlock
     * @param {string} password - The keyring controller password.
     * @returns {Promise<Object>} A Promise that resolves to the state.
     */
    this.submitPassword = async password => {
      await this.verifyPassword(password);
      this.password = password;
      try {
        this.keyrings = await this.unlockKeyrings(password);
      } catch {
        //
      } finally {
        this.setUnlocked();
      }
      return this.fullUpdate();
    };
    this.changePassword = async (oldPassword, newPassword) => {
      await this.verifyPassword(oldPassword);
      await this.unlockKeyrings(oldPassword);
      this.password = newPassword;
      const encryptBooted = await this.encryptor.encrypt(newPassword, 'true');
      this.store.updateState({
        booted: encryptBooted
      });
      if (this.memStore.getState().preMnemonics) {
        const mnemonic = await this.encryptor.decrypt(oldPassword, this.memStore.getState().preMnemonics);
        const preMnemonics = await this.encryptor.encrypt(newPassword, mnemonic);
        this.memStore.updateState({
          preMnemonics
        });
      }
      await this.persistAllKeyrings();
      await this._updateMemStoreKeyrings();
      await this.fullUpdate();
    };
    /**
     * Verify Password
     *
     * Attempts to decrypt the current vault with a given password
     * to verify its validity.
     *
     * @param {string} password
     */
    this.verifyPassword = async password => {
      const encryptedBooted = this.store.getState().booted;
      if (!encryptedBooted) {
        // throw new Error(i18n.t('Cannot unlock without a previous vault'));
        throw new Error('Cannot unlock without a previous vault');
      }
      await this.encryptor.decrypt(password, encryptedBooted);
    };
    /**
     * Add New Keyring
     *
     * Adds a new Keyring of the given `type` to the vault
     * and the current decrypted Keyrings array.
     *
     * All Keyring classes implement a unique `type` string,
     * and this is used to retrieve them from the keyringTypes array.
     *
     * @param  type - The type of keyring to add.
     * @param  opts - The constructor options for the keyring.
     * @returns  The new keyring.
     */
    this.addNewKeyring = async (type, opts, addressType) => {
      const Keyring = this.getKeyringClassForType(type);
      const keyring = new Keyring(this.password, this.kaspaWasm, opts);
      return await this.addKeyring(keyring, addressType);
    };
    // * @param {string} type - HD Key Tree | simple keyring.
    this.createTmpKeyring = (type, opts) => {
      const Keyring = this.getKeyringClassForType(type);
      const keyring = new Keyring(this.password, this.kaspaWasm, opts);
      return keyring;
    };
    /**
     * Checks for duplicate keypairs, using the the first account in the given
     * array. Rejects if a duplicate is found.
     *
     * Only supports 'Simple Key Pair'.
     *
     * @param {string} type - The key pair type to check for.
     * @param {Array<string>} newAccountArray - Array of new accounts.
     * @returns {Promise<Array<string>>} The account, if no duplicate is found.
     */
    this.checkForDuplicate = async (type, newAccountArray) => {
      const keyrings = this.getKeyringsByType(type);
      const _accounts = await Promise.all(keyrings.map(keyring => keyring.getAccounts()));
      const accounts = _accounts.reduce((m, n) => m.concat(n), []);
      const isIncluded = newAccountArray.some(account => {
        return accounts.find(key => key === account);
      });

      // return isIncluded ? Promise.reject(new Error(i18n.t('Wallet existed.'))) : Promise.resolve(newAccountArray);
      return isIncluded ? Promise.reject(new Error('Wallet existed.')) : Promise.resolve(newAccountArray);
    };
    /**
     * Add New Account
     *
     * Calls the `addAccounts` method on the given keyring,
     * and then saves those changes.
     *
     * @param {Keyring} selectedKeyring - The currently selected keyring.
     * @returns {Promise<Object>} A Promise that resolves to the state.
     */
    this.addNewAccount = async function (selectedKeyring) {
      let dType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let startIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      const accounts = await selectedKeyring.addAccounts(1, dType, startIdx);
      console.log(accounts);
      accounts.forEach(hexAccount => {
        _this.emit('newAccount', hexAccount);
      });
      await _this.persistAllKeyrings();
      await _this._updateMemStoreKeyrings();
      await _this.fullUpdate();
      return accounts;
    };
    /**
     * Export Account
     *
     * Requests the private key from the keyring controlling
     * the specified address.
     *
     * Returns a Promise that may resolve with the private key string.
     *
     * @param {string} address - The address of the account to export.
     * @returns {Promise<string>} The private key of the account.
     */
    this.exportAccount = async address => {
      const keyring = await this.getKeyringForAccount(address);
      const privkey = await keyring.exportAccount(address);
      return privkey;
    };
    /**
     *
     * Remove Account
     *
     * Removes a specific account from a keyring
     * If the account is the last/only one then it also removes the keyring.
     *
     * @param {string} address - The address of the account to remove.
     * @returns {Promise<void>} A Promise that resolves if the operation was successful.
     */
    this.removeAccount = async (address, type, brand) => {
      const keyring = await this.getKeyringForAccount(address, type);

      // Not all the keyrings support this, so we have to check
      if (typeof keyring.removeAccount != 'function') {
        throw new Error("Keyring ".concat(keyring.type, " doesn't support account removal operations"));
      }
      keyring.removeAccount(address);
      this.emit('removedAccount', address);
      await this.persistAllKeyrings();
      await this._updateMemStoreKeyrings();
      await this.fullUpdate();
    };
    this.removeKeyring = async keyringIndex => {
      delete this.keyrings[keyringIndex];
      this.keyrings[keyringIndex] = new EmptyKeyring();
      await this.persistAllKeyrings();
      await this._updateMemStoreKeyrings();
      await this.fullUpdate();
    };
    //
    // SIGNING METHODS
    //
    /**
     * Sign KAS Transaction
     *
     * Signs an KAS transaction object.
     *
     * @param kasTx - The transaction to sign.
     * @param fromAddress - The transaction 'from' address.
     * @returns  The signed transactio object.
     */
    this.signTransaction = (keyring, psbt, inputs) => {
      return keyring.signTransaction(psbt, inputs);
    };
    /**
     * Sign Message
     *
     * Attempts to sign the provided message parameters.
     * address here means publickey string
     */
    this.signMessage = async (pubkey, data) => {
      const keyring = await this.getKeyringForAccount(pubkey);
      const sig = await keyring.signMessage(pubkey, data);
      return sig;
    };
    /**
     * Decrypt Message
     *
     * Attempts to verify the provided message parameters.
     */
    this.verifyMessage = async (address, data, sig) => {
      const keyring = await this.getKeyringForAccount(address);
      const result = await keyring.verifyMessage(address, data, sig);
      return result;
    };
    //
    // PRIVATE METHODS
    //
    /**
     * Persist All Keyrings
     *
     * Iterates the current `keyrings` array,
     * serializes each one into a serialized array,
     * encrypts that array with the provided `password`,
     * and persists that encrypted string to storage.
     *
     * @param {string} password - The keyring controller password.
     * @returns {Promise<boolean>} Resolves to true once keyrings are persisted.
     */
    this.persistAllKeyrings = () => {
      if (!this.password || typeof this.password !== 'string') {
        return Promise.reject(new Error('KeyringController - password is not a string'));
      }
      return Promise.all(this.keyrings.map((keyring, index) => {
        return Promise.all([keyring.type, keyring.serialize()]).then(serializedKeyringArray => {
          // Label the output values on each serialized Keyring:
          return {
            type: serializedKeyringArray[0],
            data: serializedKeyringArray[1],
            addressType: this.addressTypes[index]
          };
        });
      })).then(serializedKeyrings => {
        // eslint-disable-next-line no-undef
        return this.encryptor.encrypt(this.password, serializedKeyrings);
      }).then(encryptedString => {
        this.store.updateState({
          vault: encryptedString
        });
        return true;
      });
    };
    /**
     * Unlock Keyrings
     *
     * Attempts to unlock the persisted encrypted storage,
     * initializing the persisted keyrings to RAM.
     *
     * @param {string} password - The keyring controller password.
     * @returns {Promise<Array<Keyring>>} The keyrings.
     */
    this.unlockKeyrings = async password => {
      const encryptedVault = this.store.getState().vault;
      if (!encryptedVault) {
        // throw new Error(i18n.t('Cannot unlock without a previous vault'));
        throw new Error('Cannot unlock without a previous vault');
      }
      await this.clearKeyrings();
      const vault = await this.encryptor.decrypt(password, encryptedVault);
      const arr = Array.from(vault);
      for (let i = 0; i < arr.length; i++) {
        const {
          keyring,
          addressType
        } = await this._restoreKeyring(arr[i]);
        this.keyrings.push(keyring);
        this.addressTypes.push(addressType);
      }
      await this._updateMemStoreKeyrings();
      return this.keyrings;
    };
    /**
     * Restore Keyring
     *
     * Attempts to initialize a new keyring from the provided serialized payload.
     * On success, updates the memStore keyrings and returns the resulting
     * keyring instance.
     *
     * @param {Object} serialized - The serialized keyring.
     * @returns {Promise<Keyring>} The deserialized keyring.
     */
    this.restoreKeyring = async serialized => {
      const {
        keyring
      } = await this._restoreKeyring(serialized);
      await this._updateMemStoreKeyrings();
      return keyring;
    };
    /**
     * Restore Keyring Helper
     *
     * Attempts to initialize a new keyring from the provided serialized payload.
     * On success, returns the resulting keyring instance.
     *
     * @param {Object} serialized - The serialized keyring.
     * @returns {Promise<Keyring>} The deserialized keyring.
     */
    this._restoreKeyring = async serialized => {
      const {
        type,
        data,
        addressType
      } = serialized;
      if (type === constant/* KEYRING_TYPE */.OE.Empty) {
        const keyring = new EmptyKeyring();
        return {
          keyring,
          addressType: addressType === undefined ? preference.getAddressType() : addressType
        };
      }
      const Keyring = this.getKeyringClassForType(type);
      const keyring = new Keyring(this.password, this.kaspaWasm);
      await keyring.deserialize(data);

      // getAccounts also validates the accounts for some keyrings
      await keyring.getAccounts();
      return {
        keyring,
        addressType: addressType === undefined ? preference.getAddressType() : addressType
      };
    };
    /**
     * Get Keyring Class For Type
     *
     * Searches the current `keyringTypes` array
     * for a Keyring class whose unique `type` property
     * matches the provided `type`,
     * returning it if it exists.
     *
     * @param {string} type - The type whose class to get.
     * @returns {Keyring|undefined} The class, if it exists.
     */
    this.getKeyringClassForType = type => {
      return this.keyringTypes.find(kr => kr.type === type);
    };
    /**
     * Get Keyrings by Type
     *
     * Gets all keyrings of the given type.
     *
     * @param {string} type - The keyring types to retrieve.
     * @returns {Array<Keyring>} The keyrings.
     */
    this.getKeyringsByType = type => {
      return this.keyrings.filter(keyring => keyring.type === type);
    };
    /**
     * Get Accounts
     *
     * Returns the public addresses of all current accounts
     * managed by all currently unlocked keyrings.
     *
     * @returns {Promise<Array<string>>} The array of accounts.
     */
    this.getAccounts = async () => {
      const keyrings = this.keyrings || [];
      let addrs = [];
      for (let i = 0; i < keyrings.length; i++) {
        const keyring = keyrings[i];
        const accounts = await keyring.getAccounts();
        addrs = addrs.concat(accounts);
      }
      return addrs;
    };
    /**
     * Get Keyring For Account
     *
     * Returns the currently initialized keyring that manages
     * the specified `address` if one exists.
     *
     * @param {string} address - An account address(pubkey).
     * @returns {Promise<Keyring>} The keyring of the account, if it exists.
     */
    this.getKeyringForAccount = async function (address, type, start, end) {
      let includeWatchKeyring = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      loglevel_default().debug("KeyringController - getKeyringForAccount: ".concat(address));
      const keyrings = type ? _this.keyrings.filter(keyring => keyring.type === type) : _this.keyrings;
      for (let i = 0; i < keyrings.length; i++) {
        const keyring = keyrings[i];
        const accounts = await keyring.getAccounts();
        if (accounts.includes(address)) {
          return keyring;
        }
      }
      throw new Error('No keyring found for the requested account.');
    };
    /**
     * Display For Keyring
     *
     * Is used for adding the current keyrings to the state object.
     * @param {Keyring} keyring
     * @returns {Promise<Object>} A keyring display object, with type and accounts properties.
     */
    this.displayForKeyring = async (keyring, addressType, index) => {
      // const accounts = await keyring.getAccounts();
      const accounts = await keyring.getAccountsAndIndexAndDType();
      const all_accounts = [];
      for (let i = 0; i < accounts.length; i++) {
        // const pubkey = accounts[i];
        all_accounts.push({
          pubkey: accounts[i].publickey,
          brandName: keyring.type,
          deriveType: accounts[i].deriveType,
          index: accounts[i].index
        });
      }
      return {
        type: keyring.type,
        accounts: all_accounts,
        keyring: new display(keyring),
        addressType,
        index
      };
    };
    this.getAllDisplayedKeyrings = () => {
      return Promise.all(this.keyrings.map((keyring, index) => this.displayForKeyring(keyring, this.addressTypes[index], index)));
    };
    this.getAllVisibleAccountsArray = async () => {
      const typedAccounts = await this.getAllDisplayedKeyrings();
      const result = [];
      typedAccounts.forEach(accountGroup => {
        result.push(...accountGroup.accounts.map(account => ({
          pubkey: account.pubkey,
          brandName: account.brandName,
          type: accountGroup.type
        })));
      });
      return result;
    };
    this.getAllPubkeys = async () => {
      const keyrings = await this.getAllDisplayedKeyrings();
      const result = [];
      keyrings.forEach(accountGroup => {
        result.push(...accountGroup.accounts.map(account => ({
          pubkey: account.pubkey,
          brandName: account.brandName,
          type: accountGroup.type
        })));
      });
      return result;
    };
    this.hasPubkey = async pubkey => {
      const addresses = await this.getAllPubkeys();
      return !!addresses.find(item => item.pubkey === pubkey);
    };
    /**
     * Clear Keyrings
     *
     * Deallocates all currently managed keyrings and accounts.
     * Used before initializing a new vault.
     */
    /* eslint-disable require-await */
    this.clearKeyrings = async () => {
      // clear keyrings from memory
      this.keyrings = [];
      this.memStore.updateState({
        keyrings: []
      });
    };
    /**
     * Update Memstore Keyrings
     *
     * Updates the in-memory keyrings, without persisting.
     */
    this._updateMemStoreKeyrings = async () => {
      const keyrings = await Promise.all(this.keyrings.map((keyring, index) => this.displayForKeyring(keyring, this.addressTypes[index], index)));
      return this.memStore.updateState({
        keyrings
      });
    };
    /**
     * Unlock Keyrings
     *
     * Unlocks the keyrings.
     *
     * @emits KeyringController#unlock
     */
    this.setUnlocked = () => {
      this.memStore.updateState({
        isUnlocked: true
      });
      this.emit('unlock');
    };
    this.publicKeyToAddress = (pubkey, addressType, networkType) => {
      const {
        createAddress
      } = this.kaspaWasm;
      if (addressType == types/* AddressType */.im.KASPA_TANGEM_44_111111) {
        const addr = createAddress(pubkey, networkType, true).toString();
        return addr;
      } else {
        const addr = createAddress(pubkey, networkType).toString();
        return addr;
      }
    };
    this.keyringTypes = Object.values(KEYRING_SDK_TYPES);
    this.memStore = new dist.ObservableStore({
      isUnlocked: false,
      keyringTypes: this.keyringTypes.map(krt => krt.type),
      keyrings: [],
      preMnemonics: '',
      addressTypes: []
    });
    this.keyrings = [];
    this.addressTypes = [];
  }
}
/* harmony default export */ const service_keyring = (new KeyringService());
// EXTERNAL MODULE: ./node_modules/.pnpm/randomstring@1.3.0/node_modules/randomstring/index.js
var randomstring = __webpack_require__(99896);
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var ui_utils = __webpack_require__(48818);
// EXTERNAL MODULE: ./src/ui/features/browser/tabs.ts + 1 modules
var tabs = __webpack_require__(96447);
;// CONCATENATED MODULE: ./src/background/service/openapi.ts
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */









// eslint-disable-next-line no-unused-vars
var API_STATUS = /*#__PURE__*/function (API_STATUS) {
  API_STATUS[API_STATUS["FAILED"] = -1] = "FAILED";
  API_STATUS[API_STATUS["SUCCESS"] = 0] = "SUCCESS";
  return API_STATUS;
}(API_STATUS || {});
class OpenApiService {
  constructor() {
    this.store = void 0;
    this.clientAddress = '';
    this.addressFlag = 0;
    this.encoding = void 0;
    // networkId!: 'mainnet' | 'testnet-10' | 'testnet-11' | 'devnet';
    this.networkId = void 0;
    this.rpc = void 0;
    this.shouldFireBlueScore = void 0;
    this.context = undefined;
    this.processor = undefined;
    this.closeRpctimeID = undefined;
    this.setHost = async host => {
      this.store.host = host;
      // await this.init();
    };
    this.setRpcHost = async rpchost => {
      this.store.rpchost = rpchost;
      await this.init();
      await this.disconnectRpc();
    };
    this.setNetworkId = networkId => {
      this.networkId = networkId;
    };
    this.getNetworkId = () => {
      return this.networkId;
    };
    this.getHost = () => {
      return this.store.host;
    };
    this.getRpcStatus = () => {
      if (this.rpc && this.rpc.isConnected == true) {
        return true;
      }
      return false;
    };
    this.init = async () => {
      this.shouldFireBlueScore = true;
      // if (this.rpc !== null && this.rpc !== undefined) {
      //   await this.rpc?.disconnect();
      // }
      // await this.disconnectRpc();
      // this.rpc = null as unknown as RpcClient;
      this.encoding = kaspa.Encoding.Borsh;
      this.store = await persisitStore({
        name: 'openapi',
        template: {
          host: constant/* OPENAPI_URL_MAINNET */.AR,
          rpchost: constant/* OPENAPI_RPC_MAINNET */.G4,
          deviceId: randomstring.generate(12)
        }
      });

      // if (![OPENAPI_URL_MAINNET, OPENAPI_URL_DEVNET, OPENAPI_URL_TESTNET].includes(this.store.host)) {
      //   const networkType = preferenceService.getNetworkType();
      //   if (networkType === NetworkType.Mainnet) {
      //     this.store.host = OPENAPI_URL_MAINNET;
      //   } else if (networkType === NetworkType.Devnet) {
      //     this.store.host = OPENAPI_URL_DEVNET;
      //   } else {
      //     this.store.host = OPENAPI_URL_TESTNET;
      //   }
      // }
      const networkType = preference.getNetworkType();
      if (networkType === types/* NetworkType */.U5.Mainnet) {
        this.networkId = 'mainnet';
      } else if (networkType === types/* NetworkType */.U5.Testnet) {
        this.networkId = 'testnet-10';
      } else {
        this.networkId = 'devnet';
      }
      // if (![OPENAPI_RPC_MAINNET, OPENAPI_RPC_TESTNET, OPENAPI_RPC_DEVNET].includes(this.store.rpchost)) {
      //   const networkType = preferenceService.getNetworkType();
      //   if (networkType === NetworkType.Mainnet) {
      //     this.networkId = NetworkType.Mainnet;
      //     this.store.rpchost = OPENAPI_RPC_MAINNET;
      //   } else if (networkType === NetworkType.Testnet) {
      //     this.networkId = NetworkType.Mainnet;
      //     this.store.rpchost = OPENAPI_RPC_TESTNET;
      //   } else if (networkType === NetworkType.Devnet) {
      //     this.networkId = NetworkType.Devnet;
      //     this.store.rpchost = OPENAPI_RPC_DEVNET;
      //   }
      // }

      if (!this.store.deviceId) {
        this.store.deviceId = randomstring.generate(12);
      }
      const getConfig = async () => {
        try {
          this.store.config = await this.getWalletConfig();
        } catch (e) {
          this.store.config = {
            version: '0.0.0',
            moonPayEnabled: false,
            statusMessage: e.message
          };
        }
      };
      getConfig();
    };
    this.rpc_connect = async () => {
      const networkType = preference.getNetworkType();
      if (networkType == types/* NetworkType */.U5.Devnet) {
        this.rpc = new kaspa.RpcClient({
          url: '127.0.0.1',
          encoding: this.encoding,
          networkId: 'devnet'
        });
      } else {
        this.rpc = new kaspa.RpcClient({
          resolver: new kaspa.Resolver(),
          networkId: networkType === types/* NetworkType */.U5.Mainnet ? 'mainnet' : 'testnet-10'
        });
      }
      this.processor = new kaspa.UtxoProcessor({
        rpc: this.rpc,
        networkId: this.networkId
      });
      await this.processor.start();
      this.context = await new kaspa.UtxoContext({
        processor: this.processor
      });
      await this.rpc.connect({});
    };
    // token is address
    this.setClientAddress = async (token, flag) => {
      if (this.rpc == null || this.rpc == undefined || this.rpc.isConnected == false) return;
      await this.handleRpcConnect('setClientAddress');
      // current clientAddress equals to new clientAddress
      if (this.clientAddress.length > 0 && this.clientAddress == token) return;
      // clientAddress  exists
      if (this.clientAddress.length > 0) {
        await this.rpc.unsubscribeUtxosChanged([this.clientAddress]);
        // await this.context.unregisterAddresses([new Address(this.clientAddress)]);
        await this.context.clear();
        await this.rpc.unsubscribeSinkBlueScoreChanged();
      }
      this.clientAddress = token;
      this.addressFlag = flag;
      this.rpc.subscribeUtxosChanged([token]);
      if (this.context) {
        await this.context.trackAddresses([token]);
        // await this.context.unregisterAddresses([token]);
      }
    };
    this.subscribeUtxosChanged = async address => {
      const currentAccount = preference.getCurrentAccount();
      this.rpc.addEventListener('*', async event => {
        if (event && event.type == 'open') {
          if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address) {
            await this.rpc.subscribeUtxosChanged([currentAccount.address]);
          }
          await this.rpc.subscribeBlockAdded();
          await this.rpc.subscribeFinalityConflict();
          await this.rpc.subscribeFinalityConflictResolved();
          await this.rpc.subscribeVirtualDaaScoreChanged();
        }
      });
      this.rpc.addEventListener('utxos-changed', event => {
        if (event && event.data) {
          eventBus/* default */.c.emit(constant/* EVENTS */.UH.broadcastToUI, {
            method: 'utxosChangedNotification',
            params: 'utxochanged'
          });
        }
      });
      this.rpc.addEventListener('sink-blue-score-changed', event => {
        if (event.data) {
          if (this.shouldFireBlueScore) {
            eventBus/* default */.c.emit(constant/* EVENTS */.UH.broadcastToUI, {
              method: 'eventbus-sink-blue-score-changed',
              params: Number(event.data.sinkBlueScore)
            });
            this.shouldFireBlueScore = false;
            setTimeout(() => {
              this.shouldFireBlueScore = true;
            }, 1000);
          }
        }
      });
      this.processor.addEventListener('*', e => {
        if (e !== null && e !== void 0 && e.type && e.type !== 'daa-score-change') {
          // console.log('p:', e.type, e.data);
        }
      });
      this.processor.addEventListener('utxo-proc-start', async () => {
        // console.log('utxo-proc-start', e);
        if (currentAccount !== null && currentAccount !== void 0 && currentAccount.address) await this.context.trackAddresses([currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.address]);
      });
      // utxo-proc-stop
      this.processor.addEventListener('utxo-proc-stop', async () => {
        // console.log('utxo-proc-start', e);
      });
      // daa-score-change
      this.processor.addEventListener('connect', async () => {
        // console.log('connect', this.processor, e.data);
      });
      this.processor.addEventListener('disconnect', async () => {
        // console.log('disconnect', this.processor, e);
      });
      this.processor.addEventListener('balance', async event => {
        eventBus/* default */.c.emit(constant/* EVENTS */.UH.broadcastToUI, {
          method: 'processor-balance-event',
          params: event
        });
        // IBalanceEvent
        // await this.context.trackAddresses([address]);
      });
      this.processor.addEventListener('error', async () => {
        // console.log('error', e.data);
      });
      this.processor.addEventListener('server-status', async () => {
        // console.log('server-status', e.data);
      });
      this.processor.addEventListener('sync-state', async () => {
        // console.log('sync-state', e.data);
      });
      this.processor.addEventListener('discovery', async _ref => {
        let {
          type,
          data
        } = _ref;
      } // const addr = currentAccount?.address;
      // if (addr) {
      //   const addrObj = new Address(addr);
      //   const hasAddr = data.hasAddress(addrObj);
      //   if (hasAddr) {
      //     const a = data.toJSON();
      //     // console.log('a', a);
      //   }
      // }
      );
      // await this.rpc.subscribeUtxosChanged([address]);
      await this.rpc.subscribeSinkBlueScoreChanged();
    };
    this.getRespData = async res => {
      let jsonRes;
      if (!res) throw new Error('Network error, no response');
      if (res.status !== 200) throw new Error('Network error with status: ' + res.status);
      try {
        jsonRes = await res.json();
      } catch (e) {
        throw new Error('Network error, json parse error');
      }
      if (!jsonRes) throw new Error('Network error,no response data');
      if (jsonRes.code === API_STATUS.FAILED) {
        throw new Error(jsonRes.msg);
      }
      return jsonRes.data;
    };
    this.httpGet = async (route, params) => {
      let url = this.getHost() + route;
      let c = 0;
      for (const id in params) {
        if (c == 0) {
          url += '?';
        } else {
          url += '&';
        }
        url += "".concat(id, "=").concat(params[id]);
        c++;
      }
      const headers = new Headers();
      headers.append('X-Client', 'KasWare Wallet');
      headers.append('X-Version', constant/* VERSION */.j1);
      headers.append('x-address', this.clientAddress);
      headers.append('x-flag', this.addressFlag + '');
      headers.append('x-channel', constant/* CHANNEL */.WC);
      headers.append('x-udid', this.store.deviceId);
      let res;
      try {
        res = await fetch(new Request(url), {
          method: 'GET',
          headers,
          mode: 'cors',
          cache: 'default'
        });
      } catch (e) {
        throw new Error('Network error: ' + e && e.message);
      }
      return this.getRespData(res);
    };
    this.httpPost = async (route, params) => {
      const url = this.getHost() + route;
      const headers = new Headers();
      headers.append('X-Client', 'KasWare Wallet');
      headers.append('X-Version', constant/* VERSION */.j1);
      headers.append('x-address', this.clientAddress);
      headers.append('x-flag', this.addressFlag + '');
      headers.append('x-channel', constant/* CHANNEL */.WC);
      headers.append('x-udid', this.store.deviceId);
      headers.append('Content-Type', 'application/json;charset=utf-8');
      let res;
      try {
        res = await fetch(new Request(url), {
          method: 'POST',
          headers,
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(params)
        });
      } catch (e) {
        throw new Error('Network error: ' + e && e.message);
      }
      return this.getRespData(res);
    };
  }
  async getWalletConfig() {
    // return this.httpGet('/default/config', {});
    return Promise.resolve({
      version: '0.16.0',
      moonPayEnabled: false,
      statusMessage: ''
    });
  }

  // it's used for oridnals. ---from shawn
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  async getAddressSummary(address) {
    // return this.httpGet('/address/summary', {
    //   address
    // });
    const addressSummary = {
      totalSompi: 0,
      kasSompi: 0,
      assetSompi: 0,
      loading: false
    };
    return Promise.resolve(addressSummary);
  }
  async getAddressBalance(address) {
    const totalBalance = await this.getAddressBalanceOfKas(address);
    const kaspaBalance = {
      confirm_amount: '0',
      pending_amount: '0',
      amount: '--',
      confirm_kas_amount: '0',
      pending_kas_amount: '0',
      kas_amount: '0',
      usd_value: '0'
    };
    let t = 0;
    if (totalBalance != undefined) t = totalBalance / 100000000;
    kaspaBalance.amount = t.toString();
    return kaspaBalance;
  }
  async getAddressesBalance(addresses) {
    const balanceInfo = await this.rpc.getBalancesByAddresses({
      addresses
    });
    const kaspaBalanceArray = [];
    balanceInfo.entries.forEach(entry => {
      const amount = (0,ui_utils/* sompiToAmount */.ei)(Number(entry.balance));
      kaspaBalanceArray.push({
        confirm_amount: '0',
        pending_amount: '0',
        outgoing: '0',
        amount,
        confirm_kas_amount: '0',
        pending_kas_amount: '0',
        kas_amount: amount,
        usd_value: '0'
      });
    });
    return kaspaBalanceArray;
  }
  async disconnectRpc() {
    if (this.rpc == null || this.rpc == undefined) {
      return;
    }
    console.log('disconnect rpc');
    await this.context.clear();
    this.processor.removeEventListener('*', async () => {});
    await this.processor.stop();
    if (this.rpc.isConnected == true) await this.rpc.disconnect();
    this.rpc = null;
  }
  // gradually close rpc when popup window is closed --shwan
  countDownToCloseRpc() {
    this.closeRpctimeID = setTimeout(() => {
      this.disconnectRpc();
    }, 1000 * 5);
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  async handleRpcConnect(source) {
    if (this.closeRpctimeID != undefined) {
      clearTimeout(this.closeRpctimeID);
      this.closeRpctimeID = undefined;
    }
    if (this.rpc != null && this.rpc != undefined && this.rpc.isConnected == true && this.processor.networkId == this.networkId) {
      return;
    }
    if (this.rpc != null && this.rpc != undefined && this.processor.networkId == this.networkId && this.rpc.isConnected == false) {
      // await this.rpc.connect();
      return;
    }
    if (this.rpc != null && this.rpc != undefined && this.rpc.isConnected == true) {
      await this.disconnectRpc();
    }
    if (this.rpc != null && this.rpc != undefined && this.rpc.isConnected == false) {
      this.rpc = null;
    }
    const networkType = preference.getNetworkType();
    if (networkType == types/* NetworkType */.U5.Devnet) {
      if (this.store.rpchost) {
        this.rpc = new kaspa.RpcClient({
          url: this.store.rpchost,
          encoding: this.encoding,
          networkId: 'devnet'
        });
      } else {
        this.rpc = new kaspa.RpcClient({
          url: '127.0.0.1',
          encoding: this.encoding,
          networkId: 'devnet'
        });
      }
    } else {
      if (this.store.rpchost) {
        this.rpc = new kaspa.RpcClient({
          url: this.store.rpchost,
          encoding: this.encoding,
          networkId: this.networkId
        });
      } else {
        this.rpc = new kaspa.RpcClient({
          resolver: new kaspa.Resolver(),
          // networkId: networkType === NetworkType.Mainnet ? 'mainnet' : 'testnet-11'
          networkId: this.networkId
        });
      }
    }
    this.processor = new kaspa.UtxoProcessor({
      rpc: this.rpc,
      networkId: this.networkId
    });
    await this.processor.start();
    // 3) Create one of more UtxoContext, passing UtxoProcessor to it
    // you can create UtxoContext objects as needed to monitor different
    // address sets.
    this.context = await new kaspa.UtxoContext({
      processor: this.processor
    });
    // this.rpc = new RpcClient(this.store.rpchost, this.encoding, this.networkId);
    //works in popup, not in background.
    // const rpc = new RpcClient('wss://kaspa.aspectron.com:443/mainnet', encoding, 0);
    await this.rpc.connect({});
    const currentAccount = preference.getCurrentAccount();
    if (this.rpc && this.rpc.isConnected == true && currentAccount !== null && currentAccount !== void 0 && currentAccount.address) {
      this.subscribeUtxosChanged(currentAccount.address);
    }
    // this.subscribeUtxosChanged();
  }
  //  the balance unit is sompi
  async getAddressBalanceOfKas(address) {
    await this.handleRpcConnect('getAddressBalanceOfKas');
    const {
      isSynced
    } = await this.rpc.getServerInfo();
    if (!isSynced) {
      console.error('Please wait for the node to sync');
      this.rpc.disconnect();
      return 0;
    }
    const balanceInfo = await this.rpc.getBalancesByAddresses({
      addresses: [address]
    });
    const totalBigInt = balanceInfo === null || balanceInfo === void 0 ? void 0 : balanceInfo.entries[0].balance;
    const total = Number(totalBigInt);
    // this.subscribeUtxosChanged(address)
    return total;
  }
  async getMultiAddressAssets(addresses) {
    const length = addresses.length;
    const addressSummary = [];
    for (let i = 0; i < length; i++) {
      addressSummary.push({
        totalSompi: 0,
        kasSompi: 0,
        assetSompi: 0,
        loading: false
      });
    }
    return Promise.resolve(addressSummary);
  }
  async findGroupAssets(groups) {
    // return this.httpPost('/address/find-group-assets', {
    //   groups
    // });
    const groupsResult = [];

    // groups.forEach(async (group) => {
    const group = groups[0];
    const addresses = group.address_arr;
    await this.handleRpcConnect('findGroupAssets');
    const {
      isSynced
    } = await this.rpc.getServerInfo();
    if (!isSynced) {
      console.error('Please wait for the node to sync');
      this.rpc.disconnect();
      return [];
    }
    const balanceInfo = await this.rpc.getBalancesByAddresses({
      addresses
    });
    const sompiArr = [];
    balanceInfo.entries.forEach(entry => {
      sompiArr.push(Number(entry.balance));
    });
    const balanceSompiArr = sompiArr;
    const address_arr = group.address_arr;
    const sompi_arr = balanceSompiArr;
    const dtype_arr = group.dtype_arr;
    const index_arr = group.index_arr;
    for (let i = 0; i < address_arr.length;) {
      if (sompi_arr[i] == 0) {
        address_arr.splice(i, 1);
        sompi_arr.splice(i, 1);
        dtype_arr.splice(i, 1);
        index_arr.splice(i, 1);
      } else {
        i++;
      }
    }
    if (sompi_arr.length > 0) {
      groupsResult.push({
        type: group.type,
        address_arr,
        sompi_arr,
        dtype_arr,
        index_arr
      });
    }
    return groupsResult;
  }

  // async getKASUtxos(address: string): Promise<UTXO[]> {
  async getKASUtxos(address) {
    // return this.httpGet('/address/btc-utxo', {
    //   address,
    // });
    // await this.handleRpcConnect('getKASUtxos');
    const {
      entries
    } = await this.rpc.getUtxosByAddresses(address);
    if (entries.length === 0) {
      console.info('Send some kaspa to', address, 'before proceeding with the demo');
      return [];
    }
    return entries;
  }
  async getTxActivities(address) {
    // return this.httpGet('/address/btc-utxo', {
    //   address,
    // });
    let API = 'https://api.kaspa.org';
    if (this.networkId == 'testnet' || this.networkId == "testnet-10") API = 'https://api-tn10.kaspa.org/';
    const response = await fetch("".concat(API, "/addresses/").concat(address, "/full-transactions?limit=10&resolve_previous_outpoints=light"));
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    const trans = (0,ui_utils/* handleTransactions */.Fd)(data, address);
    return trans;
  }
  async createGenerator(sourceAddress, destinationAddress, changeAddress, moneySompi) {
    let priorityFee = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : BigInt(0);
    // const entries = await this.getKASUtxos([sourceAddress]);
    // entries.sort((a, b) => (a.amount > b.amount ? 1 : -1));
    const generator = new kaspa.Generator({
      entries: this.context,
      outputs: [{
        address: destinationAddress,
        amount: moneySompi
      }],
      priorityFee: priorityFee,
      changeAddress
    });
    // const summary = await generator.estimate();
    // console.log('summary', summary);
    // return {summary };
    return generator;
  }
  async submitTransaction(preSubmitPending) {
    await this.handleRpcConnect('submitTransaction');
    const {
      isSynced
    } = await this.rpc.getServerInfo();
    if (!isSynced) {
      this.rpc.disconnect();
      throw new Error('Please wait for the node to sync');
    }
    const txid = await preSubmitPending.submit(this.rpc);
    return txid;
  }
  async getAppSummary() {
    // return this.httpGet('/default/app-summary-v2', {});
    const appInfo = [{
      logo: 'string',
      title: 'string',
      desc: 'string',
      url: 'string',
      time: 0,
      id: 1
      // tag?: 'string',
      // readtime?: 1,
      // new?: boolean;
      // tagColor?: string;
    }];
    const appSummary = {
      apps: appInfo
      // readTabTime?: 1,
    };
    return Promise.resolve(appSummary);
  }
  async getFeeSummary() {
    // return this.httpGet('/default/fee-summary', {});
    const fee = [
    // {
    //   title: 'Slow',
    //   desc: 'About 1 hour',
    //   feeRate: 0
    // },
    {
      title: 'None',
      desc: 'About 20 sec',
      feeRate: 0
    }, {
      title: 'Avg',
      desc: 'About 10 sec',
      feeRate: 10
    }, {
      title: 'Fast',
      desc: 'About 5 sec',
      feeRate: 20
    }];
    return Promise.resolve({
      list: fee
    });
  }
  async decodePsbt(psbtHex) {
    // return this.httpPost('/tx/decode', { psbtHex });
    // const estimate = await psbtHex.estimate()
    // const afee = estimate.fees
    const result = JSON.parse(psbtHex);
    // const afee = 1;
    const decodedPsbt = {
      inputInfos: [{
        txid: 'string',
        vout: 0,
        address: 'kaspadev:55555555555t550x8st82m73nujqe52j8plx2p',
        value: 0,
        sighashType: 1
      }],
      outputInfos: [{
        address: 'string',
        // value:sompi unit
        value: result.amountSompi
      }],
      feeRate: result.feeRate,
      fee: Number(result.fee),
      features: {
        rbf: false
      },
      risks: []
    };
    return Promise.resolve(decodedPsbt);
  }
  async createMoonpayUrl(address) {
    return this.httpPost('/moonpay/create', {
      address
    });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  async checkWebsite(website) {
    // return this.httpPost('/default/check-website', { website });
    return Promise.resolve({
      isScammer: false,
      warning: null
    });
  }
  async getVersionDetail(version) {
    return this.httpGet('/version/detail', {
      version
    });
  }
  async openDeployKrc20View() {
    return (0,tabs/* openExtensionInTab */.Qn)('#/depoly');
  }
  async openMintKrc20View() {
    return (0,tabs/* openExtensionInTab */.Qn)('#/mint');
  }
}
/* harmony default export */ const openapi = (new OpenApiService());
// EXTERNAL MODULE: ./node_modules/.pnpm/eth-rpc-errors@4.0.3/node_modules/eth-rpc-errors/dist/index.js
var eth_rpc_errors_dist = __webpack_require__(11511);
// EXTERNAL MODULE: ./node_modules/.pnpm/eth-rpc-errors@4.0.3/node_modules/eth-rpc-errors/dist/classes.js
var classes = __webpack_require__(49996);
;// CONCATENATED MODULE: ./src/background/service/notification.ts
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */




// import { winMgr } from '@/background/webapi';

// something need user approval in window
// should only open one window, unfocus will close the current notification
class NotificationService extends (events_default()) {
  constructor() {
    var _this;
    // winMgr.event.on('windowRemoved', (winId: number) => {
    //   if (winId === this.notifiWindowId) {
    //     this.notifiWindowId = 0;
    //     this.rejectApproval();
    //   }
    // });
    // winMgr.event.on('windowFocusChange', (winId: number) => {
    //   if (this.notifiWindowId && winId !== this.notifiWindowId) {
    //     if (IS_CHROME && winId === chrome.windows.WINDOW_ID_NONE && IS_LINUX) {
    //       // Wired issue: When notification popuped, will focus to -1 first then focus on notification
    //       return;
    //     }
    //     // this.rejectApproval();
    //   }
    // });
    super();
    _this = this;
    this.approval = null;
    this.notifiWindowId = 0;
    this.isLocked = false;
    this.getApproval = () => {
      var _this$approval;
      return (_this$approval = this.approval) === null || _this$approval === void 0 ? void 0 : _this$approval.data;
    };
    this.resolveApproval = function (data) {
      let forceReject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (forceReject) {
        var _this$approval2;
        (_this$approval2 = _this.approval) === null || _this$approval2 === void 0 ? void 0 : _this$approval2.reject(new classes.EthereumProviderError(4001, 'User Cancel'));
      } else {
        var _this$approval3;
        (_this$approval3 = _this.approval) === null || _this$approval3 === void 0 ? void 0 : _this$approval3.resolve(data);
      }
      _this.approval = null;
      _this.emit('resolve', data);
    };
    this.rejectApproval = async function (err) {
      let stay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!_this.approval) return;
      if (isInternal) {
        var _this$approval4;
        (_this$approval4 = _this.approval) === null || _this$approval4 === void 0 ? void 0 : _this$approval4.reject(eth_rpc_errors_dist/* ethErrors */.aW.rpc.internal(err));
      } else {
        var _this$approval5;
        (_this$approval5 = _this.approval) === null || _this$approval5 === void 0 ? void 0 : _this$approval5.reject(eth_rpc_errors_dist/* ethErrors */.aW.provider.userRejectedRequest(err));
      }
      await _this.clear(stay);
      _this.emit('reject', err);
    };
    // currently it only support one approval at the same time
    this.requestApproval = async (data, winProps) => {
      // if (preferenceService.getPopupOpen()) {
      //   this.approval = null;
      //   throw ethErrors.provider.userRejectedRequest('please request after user close current popup');
      // }

      // We will just override the existing open approval with the new one coming in
      return new Promise((resolve, reject) => {
        this.approval = {
          data,
          resolve,
          reject
        };
        this.openNotification(winProps);
      });
    };
    this.clear = async function () {
      let stay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _this.approval = null;
      // if (this.notifiWindowId && !stay) {
      //   await winMgr.remove(this.notifiWindowId);
      //   this.notifiWindowId = 0;
      // }
    };
    this.unLock = () => {
      this.isLocked = false;
    };
    this.lock = () => {
      this.isLocked = true;
    };
    this.openNotification = winProps => {
      // if (this.isLocked) return;
      // this.lock();
      if (this.notifiWindowId) {
        winMgr.remove(this.notifiWindowId);
        this.notifiWindowId = 0;
      }
      winMgr.openNotification(winProps).then(winId => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.notifiWindowId = winId;
      });
    };
  }
}
/* harmony default export */ const notification = (new NotificationService());
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(92469);
// EXTERNAL MODULE: ./node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js
var lru_cache = __webpack_require__(81965);
var lru_cache_default = /*#__PURE__*/__webpack_require__.n(lru_cache);
;// CONCATENATED MODULE: ./src/background/service/permission.ts




class PermissionService {
  constructor() {
    var _this = this;
    this.store = {
      dumpCache: []
    };
    this.lruCache = void 0;
    this.init = async () => {
      const storage = await persisitStore({
        name: 'permission'
      });
      this.store = storage || this.store;
      this.lruCache = new (lru_cache_default())();
      const cache = (this.store.dumpCache || []).map(item => ({
        k: item.k,
        v: item.v,
        e: 0
      }));
      this.lruCache.load(cache);
    };
    this.sync = () => {
      if (!this.lruCache) return;
      this.store.dumpCache = this.lruCache.dump();
    };
    this.getWithoutUpdate = key => {
      if (!this.lruCache) return;
      return this.lruCache.peek(key);
    };
    this.getSite = origin => {
      var _this$lruCache;
      return (_this$lruCache = this.lruCache) === null || _this$lruCache === void 0 ? void 0 : _this$lruCache.get(origin);
    };
    this.setSite = site => {
      if (!this.lruCache) return;
      this.lruCache.set(site.origin, site);
      this.sync();
    };
    this.addConnectedSite = function (origin, name, icon, defaultChain) {
      let isSigned = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      if (!_this.lruCache) return;
      _this.lruCache.set(origin, {
        origin,
        name,
        icon,
        chain: defaultChain,
        isSigned,
        isTop: false,
        isConnected: true
      });
      _this.sync();
    };
    this.touchConnectedSite = origin => {
      if (!this.lruCache) return;
      if (origin === constant/* INTERNAL_REQUEST_ORIGIN */.E7) return;
      this.lruCache.get(origin);
      this.sync();
    };
    this.updateConnectSite = (origin, value, partialUpdate) => {
      if (!this.lruCache || !this.lruCache.has(origin)) return;
      if (origin === constant/* INTERNAL_REQUEST_ORIGIN */.E7) return;
      if (partialUpdate) {
        const _value = this.lruCache.get(origin);
        this.lruCache.set(origin, {
          ..._value,
          ...value
        });
      } else {
        this.lruCache.set(origin, value);
      }
      this.sync();
    };
    this.hasPermission = origin => {
      if (!this.lruCache) return;
      if (origin === constant/* INTERNAL_REQUEST_ORIGIN */.E7) return true;
      const site = this.lruCache.get(origin);
      return site && site.isConnected;
    };
    this.setRecentConnectedSites = sites => {
      var _this$lruCache2, _this$lruCache3;
      (_this$lruCache2 = this.lruCache) === null || _this$lruCache2 === void 0 ? void 0 : _this$lruCache2.load(sites.map(item => ({
        e: 0,
        k: item.origin,
        v: item
      })).concat((((_this$lruCache3 = this.lruCache) === null || _this$lruCache3 === void 0 ? void 0 : _this$lruCache3.values()) || []).filter(item => !item.isConnected).map(item => ({
        e: 0,
        k: item.origin,
        v: item
      }))));
      this.sync();
    };
    this.getRecentConnectedSites = () => {
      var _this$lruCache4;
      const sites = (((_this$lruCache4 = this.lruCache) === null || _this$lruCache4 === void 0 ? void 0 : _this$lruCache4.values()) || []).filter(item => item.isConnected);
      const pinnedSites = sites.filter(item => item === null || item === void 0 ? void 0 : item.isTop).sort((a, b) => (a.order || 0) - (b.order || 0));
      const recentSites = sites.filter(item => !item.isTop);
      return [...pinnedSites, ...recentSites];
    };
    this.getConnectedSites = () => {
      var _this$lruCache5;
      return (((_this$lruCache5 = this.lruCache) === null || _this$lruCache5 === void 0 ? void 0 : _this$lruCache5.values()) || []).filter(item => item.isConnected);
    };
    this.getConnectedSite = key => {
      var _this$lruCache6;
      const site = (_this$lruCache6 = this.lruCache) === null || _this$lruCache6 === void 0 ? void 0 : _this$lruCache6.get(key);
      if (site && site.isConnected) {
        return site;
      }
    };
    this.topConnectedSite = (origin, order) => {
      var _order;
      const site = this.getConnectedSite(origin);
      if (!site || !this.lruCache) return;
      order = (_order = order) !== null && _order !== void 0 ? _order : ((0,lodash.max)(this.getRecentConnectedSites().map(item => item.order)) || 0) + 1;
      this.updateConnectSite(origin, {
        ...site,
        order,
        isTop: true
      });
    };
    this.unpinConnectedSite = origin => {
      const site = this.getConnectedSite(origin);
      if (!site || !this.lruCache) return;
      this.updateConnectSite(origin, {
        ...site,
        isTop: false
      });
    };
    this.removeConnectedSite = origin => {
      if (!this.lruCache) return;
      const site = this.getConnectedSite(origin);
      if (!site) {
        return;
      }
      this.setSite({
        ...site,
        isConnected: false
      });
      this.sync();
    };
    this.getSitesByDefaultChain = chain => {
      if (!this.lruCache) return [];
      return this.lruCache.values().filter(item => item.chain === chain);
    };
    this.isInternalOrigin = origin => {
      return origin === constant/* INTERNAL_REQUEST_ORIGIN */.E7;
    };
  }
}
/* harmony default export */ const permission = (new PermissionService());
;// CONCATENATED MODULE: ./src/background/service/session.ts

class Session {
  constructor(data) {
    this.origin = '';
    this.icon = '';
    this.name = '';
    if (data) {
      this.setProp(data);
    }
  }
  setProp(_ref) {
    let {
      origin,
      icon,
      name
    } = _ref;
    this.origin = origin;
    this.icon = icon;
    this.name = name;
  }
}

// for each tab
const sessionMap = new Map();
const getSession = id => {
  return sessionMap.get(id);
};
const getOrCreateSession = id => {
  if (sessionMap.has(id)) {
    return getSession(id);
  }
  return createSession(id, null);
};
const createSession = (id, data) => {
  const session = new Session(data);
  sessionMap.set(id, session);
  return session;
};
const deleteSession = id => {
  sessionMap.delete(id);
};
const broadcastEvent = (ev, data, origin) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sessions = [];
  sessionMap.forEach((session, key) => {
    if (permission.hasPermission(session.origin)) {
      sessions.push({
        key,
        ...session
      });
    }
  });

  // same origin
  if (origin) {
    sessions = sessions.filter(session => session.origin === origin);
  }
  sessions.forEach(session => {
    try {
      var _session$pushMessage;
      (_session$pushMessage = session.pushMessage) === null || _session$pushMessage === void 0 ? void 0 : _session$pushMessage.call(session, ev, data);
    } catch (e) {
      if (sessionMap.has(session.key)) {
        deleteSession(session.key);
      }
    }
  });
};
/* harmony default export */ const session = ({
  getSession,
  getOrCreateSession,
  deleteSession,
  broadcastEvent
});
;// CONCATENATED MODULE: ./src/background/service/erc20List.ts

class ERC20List {
  constructor() {
    this.store = void 0;
    this.init = async () => {
      this.store = await persisitStore({
        name: 'erc20List',
        template: {}
      });
    };
    this.getERC20ListByAddress = address => {
      var _this$store;
      console.log('getERC20ListByAddress', address, this.store);
      const addressKey = address.toLowerCase();
      return ((_this$store = this.store) === null || _this$store === void 0 ? void 0 : _this$store[addressKey]) || [];
    };
    this.removeERC20Item = (address, contractAddress) => {
      const addressKey = address.toLowerCase();
      const list = this.store[addressKey];
      this.store[addressKey] = list.filter(item => item.contractAddress !== contractAddress);
    };
    this.removeERC20ListByAddress = address => {
      const addressKey = address.toLowerCase();
      delete this.store[addressKey];
      return this.store;
    };
    this.updateERC20List = data => {
      const addressKey = data.address.toLowerCase();
      if (this.store[addressKey]) {
        this.store[addressKey].push({
          address: data.address,
          contractAddress: data.contractAddress,
          symbol: data.symbol,
          decimals: data.decimals
        });
      } else {
        this.store[addressKey] = [{
          address: data.address,
          contractAddress: data.contractAddress,
          symbol: data.symbol,
          decimals: data.decimals
        }];
      }
    };
  }
}
/* harmony default export */ const erc20List = (new ERC20List());
;// CONCATENATED MODULE: ./src/background/service/index.ts










/***/ }),

/***/ 9364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cp: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports browserStorageLocalGet, browserStorageLocalSet */
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87271);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-undef */
// import { browserStorageLocalGet, browserStorageLocalSet } from './browser';


let cacheMap;
async function browserStorageLocalGet(val) {
  return new Promise((resolve, reject) => {
    // 如果 keys 为 null 或 undefined，获取所有存储项
    if (val == null) {
      localforage__WEBPACK_IMPORTED_MODULE_0___default().keys().then(allKeys => {
        const promises = allKeys.map(key => localforage__WEBPACK_IMPORTED_MODULE_0___default().getItem(key));
        return Promise.all(promises).then(values => {
          const result = {};
          allKeys.forEach((key, index) => {
            result[key] = values[index];
          });
          resolve(result);
        });
      }).catch(error => {
        reject(error);
      });
    } else if (Array.isArray(val)) {
      // 如果 val 是一个数组，获取指定的多个存储项
      const promises = val.map(key => localforage__WEBPACK_IMPORTED_MODULE_0___default().getItem(key));
      Promise.all(promises).then(values => {
        const result = {};
        val.forEach((key, index) => {
          result[key] = values[index];
        });
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    } else {
      // 如果 val 是一个字符串，获取单个存储项
      localforage__WEBPACK_IMPORTED_MODULE_0___default().getItem(val).then(value => {
        resolve({
          [val]: value
        });
      }).catch(error => {
        reject(error);
      });
    }
  });
}
async function browserStorageLocalSet(val) {
  try {
    localforage.setItem(val, val);
  } catch (error) {
    console.error('Error setting localStorage value:', error);
  }
}
const get = async prop => {
  if (cacheMap) {
    return cacheMap.get(prop);
  }
  const result = await browserStorageLocalGet(null);
  cacheMap = new Map(Object.entries(result).map(_ref => {
    let [k, v] = _ref;
    return [k, v];
  }));
  return prop ? result[prop] : result;
};
const set = async (prop, value) => {
  await localforage__WEBPACK_IMPORTED_MODULE_0___default().setItem(prop, value); // browserStorageLocalSet({ [prop]: value });
  cacheMap.set(prop, value);
};
const byteInUse = async () => {
  return new Promise((resolve, reject) => {
    if (chrome) {
      chrome.storage.local.getBytesInUse(value => {
        resolve(value);
      });
    } else {
      reject('ByteInUse only works in Chrome');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get,
  set,
  byteInUse
});

/***/ }),

/***/ 46956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AR: () => (/* binding */ OPENAPI_URL_MAINNET),
/* harmony export */   CS: () => (/* binding */ OPENAPI_URL_TESTNET),
/* harmony export */   CY: () => (/* binding */ NETWORK_TYPES),
/* harmony export */   E$: () => (/* binding */ OPENAPI_URL_TESTNET_L2),
/* harmony export */   E7: () => (/* binding */ INTERNAL_REQUEST_ORIGIN),
/* harmony export */   G4: () => (/* binding */ OPENAPI_RPC_MAINNET),
/* harmony export */   KE: () => (/* binding */ OPENAPI_URL_DEVNET),
/* harmony export */   MZ: () => (/* binding */ OPENAPI_URL_DEVNET_L2),
/* harmony export */   OE: () => (/* binding */ KEYRING_TYPE),
/* harmony export */   Pt: () => (/* binding */ ADDRESS_TYPES),
/* harmony export */   Qj: () => (/* binding */ OPENAPI_RPC_MAINNET_L2),
/* harmony export */   Qy: () => (/* binding */ OPENAPI_URL_MAINNET_L2),
/* harmony export */   UH: () => (/* binding */ EVENTS),
/* harmony export */   WC: () => (/* binding */ CHANNEL),
/* harmony export */   c9: () => (/* binding */ COIN_DUST),
/* harmony export */   cV: () => (/* binding */ KEYRING_TYPES),
/* harmony export */   eA: () => (/* binding */ COIN_NAME),
/* harmony export */   eE: () => (/* binding */ BRAND_ALIAN_TYPE_TEXT),
/* harmony export */   fT: () => (/* binding */ CHAINS),
/* harmony export */   gx: () => (/* binding */ CHAINS_ENUM),
/* harmony export */   i8: () => (/* binding */ OPENAPI_RPC_TESTNET_L2),
/* harmony export */   iG: () => (/* binding */ COIN_SYMBOL),
/* harmony export */   iz: () => (/* binding */ MANIFEST_VERSION),
/* harmony export */   j1: () => (/* binding */ VERSION),
/* harmony export */   yQ: () => (/* binding */ RESTORE_WALLETS),
/* harmony export */   yb: () => (/* binding */ OPENAPI_RPC_DEVNET_L2)
/* harmony export */ });
/* unused harmony exports KEYRING_CLASS, KEYRING_TYPE_TEXT, IS_CHROME, IS_FIREFOX, IS_LINUX, IS_AFTER_CHROME91, GAS_LEVEL_TEXT, IS_WINDOWS, LANGS, OW_HD_PATH, DeriveType, MINIMUM_GAS_LIMIT, WATCH_ADDRESS_CONNECT_TYPE, WALLETCONNECT_STATUS_MAP, INTERNAL_REQUEST_SESSION, OPENAPI_RPC_TESTNET, OPENAPI_RPC_DEVNET, SORT_WEIGHT, GASPRICE_RANGE, TO_LOCALE_STRING_CONFIG, SUPPORTED_DOMAINS, SAFE_DOMAIN_CONFIRMATION, GITHUB_URL, DISCORD_URL, TWITTER_URL, TELEGRAM_URL, AddressFlagType */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-undef */
/* eslint-disable quotes */

/* constants pool */

let CHAINS_ENUM = /*#__PURE__*/function (CHAINS_ENUM) {
  CHAINS_ENUM["KAS"] = "KAS";
  return CHAINS_ENUM;
}({});
const CHAINS = {
  [CHAINS_ENUM.KAS]: {
    name: 'KAS',
    enum: CHAINS_ENUM.KAS,
    logo: '',
    network: 'mainnet'
  }
};
const KEYRING_TYPE = {
  HdKeyring: 'HD Key Tree',
  SimpleKeyring: 'Simple Key Pair',
  WatchAddressKeyring: 'Watch Address',
  WalletConnectKeyring: 'WalletConnect',
  Empty: 'Empty'
};
const KEYRING_CLASS = {
  PRIVATE_KEY: 'Simple Key Pair',
  MNEMONIC: 'HD Key Tree'
};
const KEYRING_TYPE_TEXT = {
  [KEYRING_TYPE.HdKeyring]: 'Created by Mnemonic',
  [KEYRING_TYPE.SimpleKeyring]: 'Imported by Private Key',
  [KEYRING_TYPE.WatchAddressKeyring]: 'Watch Mode'
};
const BRAND_ALIAN_TYPE_TEXT = {
  [KEYRING_TYPE.HdKeyring]: 'Account',
  [KEYRING_TYPE.SimpleKeyring]: 'Private Key',
  [KEYRING_TYPE.WatchAddressKeyring]: 'Watch'
};
const KEYRING_TYPES = {
  'HD Key Tree': {
    name: 'HD Key Tree',
    tag: 'HD',
    alianName: 'Wallet'
  },
  'Simple Key Pair': {
    name: 'Simple Key Pair',
    tag: 'IMPORT',
    alianName: 'Single Wallet'
  }
};
const IS_CHROME = /Chrome\//i.test(navigator.userAgent);
const IS_FIREFOX = /Firefox\//i.test(navigator.userAgent);
const IS_LINUX = /linux/i.test(navigator.userAgent);
let chromeVersion = null;
if (IS_CHROME) {
  const matches = navigator.userAgent.match(/Chrome\/(\d+[^.\s])/);
  if (matches && matches.length >= 2) {
    chromeVersion = Number(matches[1]);
  }
}
const IS_AFTER_CHROME91 = IS_CHROME ? chromeVersion && chromeVersion >= 91 : false;
const GAS_LEVEL_TEXT = {
  slow: 'Standard',
  normal: 'Fast',
  fast: 'Instant',
  custom: 'Custom'
};
const IS_WINDOWS = /windows/i.test(navigator.userAgent);
const LANGS = [{
  value: 'en',
  label: 'English'
}, {
  value: 'zh_CN',
  label: 'Chinese'
}, {
  value: 'ja',
  label: 'Japanese'
}, {
  value: 'es',
  label: 'Spanish'
}];
// should be aligned with the order of AddressType
const ADDRESS_TYPES = [{
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111,
  label: 'KASPA Default',
  name: 'Default',
  hdPath: "m/44'/111111'/0'",
  // bitcoin协议可以解析出私钥的必要参数
  displayIndex: 0,
  isKaswareLegacy: false
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_972,
  label: 'KASPA Legacy',
  name: 'Legacy',
  hdPath: "m/44'/972/0'",
  // bitcoin协议可以解析出私钥的必要参数
  displayIndex: 1,
  isKaswareLegacy: false
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_ONEKEY_44_111111,
  label: 'OneKey',
  name: 'Onekey',
  hdPath: "m/44'/111111'/0'",
  // bitcoin协议可以解析出私钥的必要参数
  displayIndex: 0,
  isKaswareLegacy: false
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_TANGEM_44_111111,
  label: 'Tangem',
  name: 'Tangem',
  hdPath: "m/44'/111111'/0'",
  displayIndex: 0,
  isKaswareLegacy: false
}];
const OW_HD_PATH = "m/86'/0'/0'";
let DeriveType = /*#__PURE__*/function (DeriveType) {
  DeriveType[DeriveType["RECEIVE"] = 0] = "RECEIVE";
  DeriveType[DeriveType["CHANGE"] = 1] = "CHANGE";
  return DeriveType;
}({});
// the sequence of RESTORE_WALLETS should be aligned with RestoreWalletType.
const RESTORE_WALLETS = [{
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.KASWARE,
  name: 'KasKeeper',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.KASPIUM,
  name: 'Kaspium Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.KASPANET_WEB,
  name: 'Kaspanet Web Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_972]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.KDX,
  name: 'KDX Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_972]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.CORE_GOLANG_CLI,
  name: 'Core Golang Cli Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.OKX,
  name: 'OKX Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.LEDGER,
  name: 'Ledger Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.ONEKEY,
  name: 'OneKey Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_ONEKEY_44_111111]
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .RestoreWalletType */ .q.TANGEM,
  name: 'Tangem Wallet',
  addressTypes: [_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_TANGEM_44_111111]
}];
const MINIMUM_GAS_LIMIT = 21000;
let WATCH_ADDRESS_CONNECT_TYPE = /*#__PURE__*/function (WATCH_ADDRESS_CONNECT_TYPE) {
  WATCH_ADDRESS_CONNECT_TYPE["WalletConnect"] = "WalletConnect";
  return WATCH_ADDRESS_CONNECT_TYPE;
}({});
const WALLETCONNECT_STATUS_MAP = {
  PENDING: 1,
  CONNECTED: 2,
  WAITING: 3,
  SIBMITTED: 4,
  REJECTED: 5,
  FAILD: 6
};
const INTERNAL_REQUEST_ORIGIN = 'https://kaspa.org/';
const INTERNAL_REQUEST_SESSION = {
  name: 'KasKeeper',
  origin: INTERNAL_REQUEST_ORIGIN,
  icon: './images/logo/logo@128x.png'
};
const OPENAPI_URL_MAINNET = 'https://api.kaspa.org';
const OPENAPI_URL_TESTNET = 'https://api-tn10.kaspa.org';
const OPENAPI_URL_DEVNET = 'https://api.kaspa.org/dev';
const OPENAPI_RPC_MAINNET = 'wss://dina.kaspa.green/kaspa/mainnet/wrpc/borsh';
const OPENAPI_RPC_TESTNET = 'wss://baryon-10.kaspa.green/kaspa/testnet-10/wrpc/borsh';
const OPENAPI_RPC_DEVNET = 'ws://127.0.0.1:17610';
const NETWORK_TYPES = [{
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType */ .U5.Mainnet,
  label: 'Kaspa Mainnet',
  name: 'kaspa_mainnet',
  validNames: [0, 'kaspa_mainnet'],
  url: undefined
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType */ .U5.Testnet,
  label: 'Kaspa Testnet 10',
  name: 'kaspa_testnet',
  validNames: ['kaspa_testnet'],
  url: undefined
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType */ .U5.Devnet,
  label: 'Kaspa Devnet',
  name: 'kaspa_devnet',
  validNames: ['kaspa_devnet'],
  url: OPENAPI_RPC_DEVNET
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType */ .U5.Simnet,
  label: 'Kaspa Simnet',
  name: 'kaspa_simnet',
  validNames: ['kaspa_simnet'],
  url: undefined
}
// { value: NetworkType.MAINNET, label: 'LIVENET', name: 'livenet', validNames: [0, 'livenet', 'mainnet'] },
// { value: NetworkType.TESTNET, label: 'TESTNET', name: 'testnet', validNames: ['testnet'] }
];
const EVENTS = {
  broadcastToUI: 'broadcastToUI',
  broadcastToBackground: 'broadcastToBackground',
  SIGN_FINISHED: 'SIGN_FINISHED',
  WALLETCONNECT: {
    STATUS_CHANGED: 'WALLETCONNECT_STATUS_CHANGED',
    INIT: 'WALLETCONNECT_INIT',
    INITED: 'WALLETCONNECT_INITED'
  }
};
const SORT_WEIGHT = {
  [KEYRING_TYPE.HdKeyring]: 1,
  [KEYRING_TYPE.SimpleKeyring]: 2,
  [KEYRING_TYPE.WalletConnectKeyring]: 4,
  [KEYRING_TYPE.WatchAddressKeyring]: 5
};
const GASPRICE_RANGE = {
  [CHAINS_ENUM.KAS]: [0, 10000]
};
const COIN_NAME = 'KAS';
const COIN_SYMBOL = 'KAS';
const COIN_DUST = 20000000;
const TO_LOCALE_STRING_CONFIG = {
  minimumFractionDigits: 8
};
const SUPPORTED_DOMAINS = (/* unused pure expression or super */ null && (['sats', 'kas', 'x', 'kas']));
const SAFE_DOMAIN_CONFIRMATION = 3;
const GITHUB_URL = '';
const DISCORD_URL = '';
const TWITTER_URL = '';
const TELEGRAM_URL = '';
const CHANNEL = undefined;
// export const VERSION = process.env.release!;
const VERSION = '0.16.0';
const MANIFEST_VERSION = undefined;
let AddressFlagType = /*#__PURE__*/function (AddressFlagType) {
  AddressFlagType[AddressFlagType["Is_Enable_Kasplex"] = 1] = "Is_Enable_Kasplex";
  return AddressFlagType;
}({});

// export const L2_RPC_URL = 'https://rpc.kasplextest.xyz';

const OPENAPI_RPC_MAINNET_L2 = 'https://rpc.kasplextest.xyz';
const OPENAPI_RPC_TESTNET_L2 = 'https://rpc.kasplextest.xyz';
const OPENAPI_RPC_DEVNET_L2 = 'https://rpc.kasplextest.xyz';
const OPENAPI_URL_MAINNET_L2 = 'https://frontend.kasplextest.xyz';
const OPENAPI_URL_TESTNET_L2 = 'https://frontend.kasplextest.xyz';
const OPENAPI_URL_DEVNET_L2 = 'https://frontend.kasplextest.xyz';

/***/ }),

/***/ 68640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

class EventBus {
  constructor() {
    var _this = this;
    this.events = {};
    this.emit = (type, params) => {
      const listeners = this.events[type];
      if (listeners) {
        listeners.forEach(fn => {
          fn(params);
        });
      }
    };
    this.once = (type, fn) => {
      const listeners = this.events[type];
      const func = function () {
        fn(...arguments);
        _this.events[type] = _this.events[type].filter(item => item !== func);
      };
      if (listeners) {
        this.events[type].push(func);
      } else {
        this.events[type] = [func];
      }
    };
    this.addEventListener = (type, fn) => {
      const listeners = this.events[type];
      if (listeners) {
        this.events[type].push(fn);
      } else {
        this.events[type] = [fn];
      }
    };
    this.removeEventListener = (type, fn) => {
      const listeners = this.events[type];
      if (listeners) {
        this.events[type] = this.events[type].filter(item => item !== fn);
      }
    };
    this.removeAllEventListeners = type => {
      this.events[type] = [];
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventBus());

/***/ }),

/***/ 40256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U5: () => (/* reexport safe */ kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__.NetworkType),
/* harmony export */   Y1: () => (/* binding */ LayerType),
/* harmony export */   Yh: () => (/* binding */ WebsiteState),
/* harmony export */   im: () => (/* binding */ AddressType),
/* harmony export */   q: () => (/* binding */ RestoreWalletType),
/* harmony export */   qA: () => (/* binding */ TxType)
/* harmony export */ });
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21704);
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

// default means KASPA_44_111111
let AddressType = /*#__PURE__*/function (AddressType) {
  AddressType[AddressType["KASPA_44_111111"] = 0] = "KASPA_44_111111";
  AddressType[AddressType["KASPA_44_972"] = 1] = "KASPA_44_972";
  AddressType[AddressType["KASPA_ONEKEY_44_111111"] = 2] = "KASPA_ONEKEY_44_111111";
  AddressType[AddressType["KASPA_TANGEM_44_111111"] = 3] = "KASPA_TANGEM_44_111111";
  return AddressType;
}({});

// export enum NetworkType {
//   KASPA_MAINNET = 0,
//   KASPA_TESTNET = 1,
//   KASPA_DEVNET = 2,
//   KASPA_SIMNET = 3,
//   MAINNET = 4,
//   TESTNET = 5,
// }

// the sequence of RestoreWalletType should be aligned with RESTORE_WALLETS.
let RestoreWalletType = /*#__PURE__*/function (RestoreWalletType) {
  RestoreWalletType[RestoreWalletType["KASWARE"] = 0] = "KASWARE";
  RestoreWalletType[RestoreWalletType["KASPIUM"] = 1] = "KASPIUM";
  RestoreWalletType[RestoreWalletType["KASPANET_WEB"] = 2] = "KASPANET_WEB";
  RestoreWalletType[RestoreWalletType["KDX"] = 3] = "KDX";
  RestoreWalletType[RestoreWalletType["CORE_GOLANG_CLI"] = 4] = "CORE_GOLANG_CLI";
  RestoreWalletType[RestoreWalletType["OKX"] = 5] = "OKX";
  RestoreWalletType[RestoreWalletType["LEDGER"] = 6] = "LEDGER";
  RestoreWalletType[RestoreWalletType["ONEKEY"] = 7] = "ONEKEY";
  RestoreWalletType[RestoreWalletType["TANGEM"] = 8] = "TANGEM";
  return RestoreWalletType;
}({});
let TxType = /*#__PURE__*/function (TxType) {
  TxType[TxType["SIGN_TX"] = 0] = "SIGN_TX";
  TxType[TxType["SEND_KASPA"] = 1] = "SEND_KASPA";
  TxType[TxType["SEND_KRC20"] = 2] = "SEND_KRC20";
  TxType[TxType["SEND_L2KASPA"] = 3] = "SEND_L2KASPA";
  TxType[TxType["SEND_L2ERC20"] = 4] = "SEND_L2ERC20";
  TxType[TxType["SEND_L2SPECAILTX"] = 5] = "SEND_L2SPECAILTX";
  return TxType;
}({});
let WebsiteState = /*#__PURE__*/function (WebsiteState) {
  WebsiteState[WebsiteState["CHECKING"] = 0] = "CHECKING";
  WebsiteState[WebsiteState["SCAMMER"] = 1] = "SCAMMER";
  WebsiteState[WebsiteState["SAFE"] = 2] = "SAFE";
  return WebsiteState;
}({});
let LayerType = /*#__PURE__*/function (LayerType) {
  LayerType["L1"] = "L1";
  LayerType["L2"] = "L2";
  return LayerType;
}({});

/***/ }),

/***/ 40560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Message: () => (/* binding */ utils_Message),
  cV: () => (/* binding */ getKaspaUTXOWithoutBigint)
});

// UNUSED EXPORTS: checkAddressFlag, format, getChain, getKaspaUTXOWithBigint, t

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(92469);
// EXTERNAL MODULE: ./src/shared/constant/index.ts
var constant = __webpack_require__(46956);
// EXTERNAL MODULE: ./node_modules/.pnpm/eth-rpc-errors@4.0.3/node_modules/eth-rpc-errors/dist/index.js
var dist = __webpack_require__(11511);
// EXTERNAL MODULE: ./node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
var events = __webpack_require__(58560);
;// CONCATENATED MODULE: ./src/shared/utils/message/index.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * this script is live in content-script / dapp's page
 */


class Message extends events.EventEmitter {
  constructor() {
    var _this;
    super(...arguments);
    _this = this;
    // available id list
    // max concurrent request limit
    this._requestIdPool = [...Array(500).keys()];
    this._EVENT_PRE = 'KASWARE_WALLET_';
    this.listenCallback = void 0;
    this._waitingMap = new Map();
    this.request = data => {
      if (!this._requestIdPool.length) {
        throw dist/* ethErrors */.aW.rpc.limitExceeded();
      }
      const ident = this._requestIdPool.shift();
      return new Promise((resolve, reject) => {
        this._waitingMap.set(ident, {
          data,
          resolve,
          reject
        });
        this.send('request', {
          ident,
          data
        });
      });
    };
    this.onResponse = async function () {
      let {
        ident,
        res,
        err
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // the url may update
      if (!_this._waitingMap.has(ident)) {
        return;
      }
      const {
        resolve,
        reject
      } = _this._waitingMap.get(ident);
      _this._requestIdPool.push(ident);
      _this._waitingMap.delete(ident);
      err ? reject(err) : resolve(res);
    };
    this.onRequest = async _ref => {
      let {
        ident,
        data
      } = _ref;
      if (this.listenCallback) {
        let res, err;
        try {
          res = await this.listenCallback(data);
        } catch (e) {
          err = {
            message: e.message,
            stack: e.stack
          };
          e.code && (err.code = e.code);
          e.data && (err.data = e.data);
        }
        this.send('response', {
          ident,
          res,
          err
        });
      }
    };
    this._dispose = () => {
      for (const request of this._waitingMap.values()) {
        request.reject(dist/* ethErrors */.aW.provider.userRejectedRequest());
      }
      this._waitingMap.clear();
    };
  }
}
/* harmony default export */ const message = (Message);
;// CONCATENATED MODULE: ./src/shared/utils/message/broadcastChannelMessage.ts

class BroadcastChannelMessage extends message {
  constructor(name) {
    super();
    this._channel = void 0;
    this.connect = () => {
      this._channel.onmessage = _ref => {
        let {
          data: {
            type,
            data
          }
        } = _ref;
        if (type === 'message') {
          this.emit('message', data);
        } else if (type === 'response') {
          this.onResponse(data);
        }
      };
      return this;
    };
    this.listen = listenCallback => {
      this.listenCallback = listenCallback;
      this._channel.onmessage = _ref2 => {
        let {
          data: {
            type,
            data
          }
        } = _ref2;
        if (type === 'request') {
          this.onRequest(data);
        }
      };
      return this;
    };
    this.send = (type, data) => {
      this._channel.postMessage({
        type,
        data
      });
    };
    this.dispose = () => {
      this._dispose();
      this._channel.close();
    };
    if (!name) {
      throw new Error('the broadcastChannel name is missing');
    }
    this._channel = new BroadcastChannel(name);
  }
}
;// CONCATENATED MODULE: ./src/shared/utils/message/portMessage.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { browserRuntimeConnect } from '@/background/webapi/browser';


class PortMessage extends message {
  constructor(port) {
    super();
    this.port = null;
    this.listenCallback = void 0;
    this.connect = name => {
      // this.port = browserRuntimeConnect(undefined, name ? { name } : undefined);
      this.port.onMessage.addListener(_ref => {
        let {
          _type_,
          data
        } = _ref;
        if (_type_ === "".concat(this._EVENT_PRE, "message")) {
          this.emit('message', data);
          return;
        }
        if (_type_ === "".concat(this._EVENT_PRE, "response")) {
          this.onResponse(data);
        }
      });
      return this;
    };
    this.listen = listenCallback => {
      if (!this.port) return;
      this.listenCallback = listenCallback;
      this.port.onMessage.addListener(_ref2 => {
        let {
          _type_,
          data
        } = _ref2;
        if (_type_ === "".concat(this._EVENT_PRE, "request")) {
          this.onRequest(data);
        }
      });
      return this;
    };
    this.send = (type, data) => {
      if (!this.port) return;
      try {
        this.port.postMessage({
          _type_: "".concat(this._EVENT_PRE).concat(type),
          data
        });
      } catch (e) {
        // DO NOTHING BUT CATCH THIS ERROR
      }
    };
    this.dispose = () => {
      var _this$port;
      this._dispose();
      (_this$port = this.port) === null || _this$port === void 0 ? void 0 : _this$port.disconnect();
    };
    if (port) {
      this.port = port;
    }
  }
}
/* harmony default export */ const portMessage = (PortMessage);
;// CONCATENATED MODULE: ./src/shared/utils/index.ts


// import browser from '@/background/webapi/browser';




const utils_Message = {
  BroadcastChannelMessage: BroadcastChannelMessage,
  PortMessage: portMessage
};
const t = name => name; // browser.i18n.getMessage(name);

const format = function (str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return args.reduce((m, n) => m.replace('_s_', n), str);
};

const chainsDict = (0,lodash.keyBy)(constant/* CHAINS */.fT, 'serverId');
const getChain = chainId => {
  if (!chainId) {
    return null;
  }
  return chainsDict[chainId];
};

// Check if address flag is enabled
const checkAddressFlag = (currentFlag, flag) => {
  return Boolean(currentFlag & flag);
};
const getKaspaUTXOWithoutBigint = utxos => {
  const newUtxos = utxos.map(v => {
    var _v$entry, _v$entry$address;
    return {
      amount: v.amount.toString(),
      blockDaaScore: v.blockDaaScore.toString(),
      entry: {
        address: (_v$entry = v.entry) === null || _v$entry === void 0 ? void 0 : (_v$entry$address = _v$entry.address) === null || _v$entry$address === void 0 ? void 0 : _v$entry$address.toString(),
        amount: v.entry.amount.toString(),
        blockDaaScore: v.entry.blockDaaScore.toString(),
        isCoinbase: v.entry.isCoinbase,
        outpoint: v.entry.outpoint,
        scriptPublicKey: v.entry.scriptPublicKey
      },
      isCoinbase: v.isCoinbase
    };
  });
  return newUtxos;
};
const getKaspaUTXOWithBigint = utxos => {
  const newUtxos = utxos.map(v => {
    if (v.entry.address) {
      return {
        amount: BigInt(v.amount),
        blockDaaScore: BigInt(v.blockDaaScore),
        entry: {
          address: new Address(v.entry.address),
          amount: BigInt(v.entry.amount),
          blockDaaScore: BigInt(v.entry.blockDaaScore.toString()),
          isCoinbase: v.entry.isCoinbase,
          outpoint: v.entry.outpoint,
          scriptPublicKey: v.entry.scriptPublicKey
        },
        isCoinbase: v.isCoinbase
      };
    } else {
      return {
        amount: BigInt(v.amount),
        blockDaaScore: BigInt(v.blockDaaScore),
        entry: {
          // address: new Address(v.entry.address),
          amount: BigInt(v.entry.amount),
          blockDaaScore: BigInt(v.entry.blockDaaScore.toString()),
          isCoinbase: v.entry.isCoinbase,
          outpoint: v.entry.outpoint,
          scriptPublicKey: v.entry.scriptPublicKey
        },
        isCoinbase: v.isCoinbase
      };
    }
  });
  return newUtxos;
};

/***/ }),

/***/ 23848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ ActionComponentProvider),
  w: () => (/* binding */ useTools)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(98104);
// EXTERNAL MODULE: ./src/ui/theme/font.ts
var font = __webpack_require__(69508);
// EXTERNAL MODULE: ./src/ui/theme/spacing.ts
var spacing = __webpack_require__(67148);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(94240);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(46476);
;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/Loading/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/Loading/index.tsx








const $baseViewStyle = {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: spacing/* spacing */.k5.small
};
function Loading(props) {
  const {
    text
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "loading-container",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: $baseViewStyle,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.c, {
        style: {
          fontSize: font/* fontSizes */.Q.icon,
          color: colors/* colors */.I.orange
        }
      }), text && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
        text: text,
        preset: "title",
        color: "orange"
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(67196);
// EXTERNAL MODULE: ./src/ui/components/Popover/index.tsx
var Popover = __webpack_require__(43336);
;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/Tip/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/Tip/index.tsx





function Tip(props) {
  const {
    text,
    onClose
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */._, {
    onClose: () => {
      onClose && onClose();
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
        text: text,
        textCenter: true
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(70884);
;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/Toast/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/Toast/index.tsx





const Toast_$baseViewStyle = {
  alignSelf: 'end',
  padding: 4,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 8,
  marginLeft: 16,
  marginRight: 16
};
const $viewPresets = {
  info: Object.assign({}, Toast_$baseViewStyle, {
    color: "".concat(colors/* colors */.I.black_dark, " !important"),
    background: '#FFF',
    boxShadow: '3px 3px 12px rgba(0,0,0, 0.2)',
    width: '90%',
    padding: '16px'
  }),
  success: Object.assign({}, Toast_$baseViewStyle, {
    color: "".concat(colors/* colors */.I.green, " !imporatnt"),
    background: '#FFF',
    boxShadow: '3px 3px 12px rgba(0,0,0, 0.2)',
    width: '90%',
    padding: '16px'
  }),
  error: Object.assign({}, Toast_$baseViewStyle, {
    color: "".concat(colors/* colors */.I.danger, " !important"),
    background: '#FFF',
    boxShadow: '3px 3px 12px rgba(0,0,0, 0.2)',
    width: '90%',
    padding: '16px'
  }),
  warning: Object.assign({}, Toast_$baseViewStyle, {
    color: "".concat(colors/* colors */.I.warning, " !important"),
    background: '#FFF',
    boxShadow: '3px 3px 12px rgba(0,0,0, 0.2)',
    width: '90%',
    padding: '16px'
  })
};
function Toast(props) {
  const {
    preset,
    content,
    onClose
  } = props;
  (0,react.useEffect)(() => {
    setTimeout(() => {
      onClose();
    }, 6000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "action-container",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "toast",
      style: $viewPresets[preset],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.c, {
        color: preset,
        align: "center",
        children: content
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/ui/components/ActionComponent/index.tsx
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */






const initContext = {
  toast: content => {
    // todo
  },
  toastSuccess: content => {
    // todo
  },
  toastError: content => {
    // todo
  },
  toastWarning: content => {
    // todo
  },
  showLoading: () => {
    // todo
  },
  showTip: content => {
    // todo
  }
};
const ActionComponentContext = /*#__PURE__*/react.createContext(initContext);
function ToastContainer(_ref) {
  let {
    handler
  } = _ref;
  const [toasts, setToasts] = (0,react.useState)([]);
  const selfRef = (0,react.useRef)({
    toasts: []
  });
  const self = selfRef.current;
  const basicToast = (0,react.useCallback)((content, preset) => {
    const key = 'Toast_' + Math.random();
    self.toasts.push({
      key,
      props: {
        preset: preset || 'info',
        content,
        onClose: () => {
          self.toasts = self.toasts.filter(v => v.key !== key);
          setToasts(self.toasts.map(v => v));
        }
      }
    });
    setToasts(self.toasts.map(v => v));
  }, [toasts]);
  handler.toast = (0,react.useCallback)(content => {
    basicToast(content);
  }, [basicToast]);
  handler.toastSuccess = (0,react.useCallback)(content => {
    basicToast(content, 'success');
  }, [basicToast]);
  handler.toastError = (0,react.useCallback)(content => {
    basicToast(content, 'error');
  }, [basicToast]);
  handler.toastWarning = (0,react.useCallback)(content => {
    basicToast(content, 'warning');
  }, [basicToast]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: toasts.map(_ref2 => {
      let {
        key,
        props
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Toast, {
        ...props
      }, key);
    })
  });
}
function LoadingContainer(_ref3) {
  let {
    handler
  } = _ref3;
  const [loadingInfo, setLoadingInfo] = (0,react.useState)({
    visible: false,
    content: ''
  });
  handler.showLoading = (0,react.useCallback)((visible, content) => {
    setLoadingInfo({
      visible,
      content
    });
  }, []);
  if (loadingInfo.visible) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Loading, {
      text: loadingInfo.content
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
  }
}
function TipContainer(_ref4) {
  let {
    handler
  } = _ref4;
  const [tipData, setTipData] = (0,react.useState)({
    visible: false,
    content: ''
  });
  handler.showTip = (0,react.useCallback)(content => {
    setTipData({
      content,
      visible: true
    });
  }, []);
  if (tipData.visible) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Tip, {
      text: tipData.content,
      onClose: () => {
        setTipData({
          visible: false,
          content: ''
        });
      }
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
  }
}
function ActionComponentProvider(_ref5) {
  let {
    children
  } = _ref5;
  const selfRef = (0,react.useRef)(initContext);
  const self = selfRef.current;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ActionComponentContext.Provider, {
    value: self,
    children: [children, /*#__PURE__*/(0,jsx_runtime.jsx)(ToastContainer, {
      handler: self
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingContainer, {
      handler: self
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TipContainer, {
      handler: self
    })]
  });
}
function useTools() {
  const ctx = (0,react.useContext)(ActionComponentContext);
  return ctx;
}

/***/ }),

/***/ 85292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ AddressBar)
/* harmony export */ });
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24468);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61942);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80864);
/* harmony import */ var _ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23848);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__]);
_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









function AddressBar(_ref) {
  let {
    props
  } = _ref;
  const {
    contentStyle = {},
    textStyle = {},
    iconStyle = {},
    activeKey = {}
  } = props || {};
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .G)();
  const tools = (0,_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .w)();
  const addressL1 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAccountAddress */ .mA)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAccountAddressL2 */ .gt)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .W, {
    selfItemsCenter: true,
    itemsCenter: true,
    style: {
      backgroundColor: 'rgba(10, 36, 99, 0.06)',
      padding: '0 12px',
      borderRadius: '16px',
      ...contentStyle
    },
    onClick: e => {
      (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .copyToClipboard */ .ye)((activeKey === null || activeKey === void 0 ? void 0 : activeKey.activeKey) === 'L2' ? addressL2 : addressL1).then(() => {
        tools.toastSuccess(t('Copied'));
      });
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .a, {
      text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .shortAddress */ .SO)((activeKey === null || activeKey === void 0 ? void 0 : activeKey.activeKey) === 'L2' ? addressL2 : addressL1, 10),
      style: {
        color: 'rgba(10,36,99,0.65)',
        ...textStyle
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      style: iconStyle
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);


const AppLoading = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col justify-center items-center h-[100vh]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      className: "-mt-10",
      width: 200,
      height: 200,
      alt: "",
      src: "./images/logo/wallet-logo.png"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "text-lg mt-6",
      children: "Welcome To KasKeeper"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLoading);

/***/ }),

/***/ 46860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ BaseView)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(98104);
// EXTERNAL MODULE: ./src/ui/theme/spacing.ts
var spacing = __webpack_require__(67148);
;// CONCATENATED MODULE: ./src/ui/components/BaseView/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/BaseView/index.tsx





function BaseView(props) {
  const {
    children,
    style: $styleBase,
    justifyCenter,
    justifyBetween,
    justifyEnd,
    itemsCenter,
    selfItemsCenter,
    gap,
    px,
    py,
    pt,
    pb,
    mt,
    mb,
    mx,
    my,
    bg,
    rounded,
    roundedTop,
    roundedBottom,
    full,
    fullX,
    fullY,
    color,
    relative,
    onClick,
    fixed,
    classname,
    overflowX,
    overflowY
  } = props;
  const $baseViewStyle = Object.assign({}, justifyCenter ? {
    justifyContent: 'center'
  } : {}, justifyBetween ? {
    justifyContent: 'space-between'
  } : {}, justifyEnd ? {
    justifyContent: 'end'
  } : {}, itemsCenter ? {
    alignItems: 'center'
  } : {}, selfItemsCenter ? {
    alignSelf: 'center'
  } : {}, gap ? {
    gap: spacing/* spacingGap */.YN[gap]
  } : {}, px ? {
    paddingLeft: spacing/* spacingGap */.YN[px],
    paddingRight: spacing/* spacingGap */.YN[px]
  } : {}, py ? {
    paddingTop: spacing/* spacingGap */.YN[py],
    paddingBottom: spacing/* spacingGap */.YN[py]
  } : {}, pt ? {
    paddingTop: spacing/* spacingGap */.YN[pt]
  } : {}, pb ? {
    paddingBottom: spacing/* spacingGap */.YN[pb]
  } : {}, mt ? {
    marginTop: spacing/* spacingGap */.YN[mt]
  } : {}, mb ? {
    marginBottom: spacing/* spacingGap */.YN[mb]
  } : {}, mx ? {
    marginLeft: spacing/* spacingGap */.YN[mx],
    marginRight: spacing/* spacingGap */.YN[mx]
  } : {}, my ? {
    marginTop: spacing/* spacingGap */.YN[my],
    marginBottom: spacing/* spacingGap */.YN[my]
  } : {}, bg ? {
    backgroundColor: colors/* colors */.I[bg]
  } : {}, rounded ? {
    borderRadius: 5
  } : {}, roundedTop ? {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  } : {}, roundedBottom ? {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  } : {}, full ? {
    flex: 1,
    alignSelf: 'stretch'
  } : {}, fullX ? {
    width: '100%'
  } : {}, fullY ? {
    height: '100%'
  } : {}, color ? {
    color: colors/* colors */.I[color]
  } : {}, onClick ? {
    cursor: 'pointer'
  } : {}, relative ? {
    position: 'relative'
  } : {}, fixed ? {
    position: 'fixed'
  } : {}, overflowX ? {
    overflowX: 'auto'
  } : {}, overflowY ? {
    overflowY: 'auto'
  } : {});
  const $style = Object.assign({}, $styleBase, $baseViewStyle);
  const $classname = [classname].join(' ').trim();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: $style,
    onClick: onClick,
    className: $classname,
    children: children
  });
}

/***/ }),

/***/ 65044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98104);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67148);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59172);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */





const $baseViewStyle = {
  display: 'flex',
  minHeight: 36,
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  // paddingVertical: spacing.small,
  // paddingHorizontal: spacing.small,
  overflow: 'hidden',
  cursor: 'pointer',
  alignSelf: 'stretch',
  paddingLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.small,
  paddingRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.small
};
const $viewPresets = {
  default: Object.assign({}, $baseViewStyle, {
    backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.black_dark
  }),
  primary: Object.assign({}, $baseViewStyle, {
    backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.aqua,
    height: '40px'
  }),
  danger: Object.assign({}, $baseViewStyle, {
    backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.red,
    height: '40px'
  }),
  bar: Object.assign({}, $baseViewStyle, {
    backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.black_dark,
    height: '75px',
    justifyContent: 'space-between',
    paddingTop: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.medium,
    paddingBottom: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.medium
  })
};
const $hoverViewPresets = {
  default: {
    backgroundColor: '#383535'
  },
  primary: {
    backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.aqua_dark
  },
  danger: {
    backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.red_dark
  },
  bar: {
    backgroundColor: '#383535'
  }
};
const $baseTextStyle = {
  // fontSize: 16,
  // lineHeight: 20,
  // fontFamily: typography.primary.medium,
  textAlign: 'center',
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
  //color: colors.white,
  paddingLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.tiny,
  paddingRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.tiny
};
const $textPresets = {
  default: $baseTextStyle,
  primary: Object.assign({}, $baseTextStyle, {
    color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.black
  }),
  danger: Object.assign({}, $baseTextStyle, {
    color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.white
  }),
  bar: Object.assign({}, $baseTextStyle, {
    textAlign: 'left',
    fontWeight: 'bold'
  })
};
const $pressedTextPresets = {
  default: {
    opacity: 0.9
  },
  primary: {
    opacity: 0.9
  },
  danger: {
    opacity: 0.9
  },
  bar: {
    opacity: 0.9
  }
};
const $rightAccessoryStyle = {
  marginLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.extraSmall,
  zIndex: 1
};
const $leftAccessoryStyle = {
  marginRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_2__/* .spacing */ .k5.extraSmall,
  zIndex: 1
};
const $baseDisabledViewStyle = {
  cursor: 'not-allowed',
  opacity: 0.5
};
function Button(props) {
  /* const {
    text,
    subText,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    onClick,
    icon,
    disabled,
    full,
    ...rest
  } = props;
   const preset: Presets = props.preset || 'default';
  const [hover, setHover] = useState(false);
  const $viewStyle = Object.assign(
    {},
    $viewPresets[preset],
    $viewStyleOverride,
    hover && !disabled ? $hoverViewPresets[preset] : {},
    disabled ? $baseDisabledViewStyle : {},
    full ? { flex: 1 } : {}
  );
  const $textStyle = Object.assign({}, $textPresets[preset], $textStyleOverride);
   const $subTextStyle = Object.assign({}, $textPresets[preset], {
    color: colors.white_muted,
    marginTop: 5,
    fontWeight: 'normal'
  } as CSSProperties);
  if (preset === 'bar') {
    return (
      <div
        style={$viewStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={disabled ? undefined : onClick}>
        <Row>
          {LeftAccessory && <div style={$leftAccessoryStyle}>{LeftAccessory}</div>}
          {icon && <Icon icon={icon} color={'white'} style={{ marginRight: spacing.tiny }} />}
          <Column justifyCenter gap="zero">
            {text && <Text text={text} style={$textStyle} />}
            {subText && <Text text={subText} style={$subTextStyle} />}
          </Column>
           {children}
        </Row>
         {RightAccessory && <div style={$rightAccessoryStyle}>{RightAccessory}</div>}
      </div>
    );
  } */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c, {
    variant: "contained",
    color: "primary",
    size: "large",
    ...props,
    style: {
      boxShadow: 'none'
    },
    sx: {
      '&.Mui-disabled': {
        background: 'linear-gradient( 315deg, #02DDA4 0%, #29FAC4 100%) !important',
        color: 'rgba(10,36,99,0.45) !important'
      },
      color: '#0A2463 !important',
      fontWeight: '500 !important'
    },
    children: props.text ? props.text : props === null || props === void 0 ? void 0 : props.children
  });
}

/***/ }),

/***/ 36224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67148);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2488);




const $baseViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.md,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5
};
const $viewPresets = {
  auto: Object.assign({}, $baseViewStyle, {
    paddingTop: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg,
    paddingBottom: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg,
    paddingLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg,
    paddingRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg,
    minHeight: 50
  }),
  style1: Object.assign({}, $baseViewStyle, {
    height: '75px',
    paddingTop: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.sm,
    paddingBottom: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.sm,
    paddingLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg,
    paddingRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg
  }),
  style2: Object.assign({}, $baseViewStyle, {
    paddingTop: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.sm,
    paddingBottom: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.sm,
    paddingLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg,
    paddingRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.lg
  }),
  style3: Object.assign({}, $baseViewStyle, {
    paddingTop: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.xs,
    paddingBottom: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.xs,
    paddingLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.sm,
    paddingRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.sm
  })
};
function Card(props) {
  const {
    style: $styleOverride,
    preset,
    ...rest
  } = props;
  const $style = Object.assign({}, $viewPresets[preset || 'auto'], $styleOverride);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_2__/* .BaseView */ .q, {
    style: $style,
    ...rest
  });
}

/***/ }),

/***/ 67196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67148);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2488);




const $columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.md
};
function Column(props) {
  const {
    style: $styleOverride,
    ...rest
  } = props;
  const $style = Object.assign({}, $columnStyle, $styleOverride);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_2__/* .BaseView */ .q, {
    style: $style,
    ...rest
  });
}

/***/ }),

/***/ 61324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ Content)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/spacing.ts
var spacing = __webpack_require__(67148);
// EXTERNAL MODULE: ./src/ui/components/BaseView/index.tsx + 1 modules
var BaseView = __webpack_require__(46860);
;// CONCATENATED MODULE: ./src/ui/components/Content/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/Content/index.tsx





const $contentStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyItems: 'center',
  gap: spacing/* spacingGap */.YN.lg,
  alignSelf: 'stretch',
  overflowY: 'auto',
  overflowX: 'hidden'
};
const $viewPresets = {
  large: Object.assign({}, $contentStyle, {
    alignItems: 'stretch',
    padding: spacing/* spacing */.k5.large,
    paddingTop: 0
  }),
  middle: Object.assign({}, $contentStyle, {
    alignItems: 'center',
    justifyContent: 'center',
    width: 285,
    alignSelf: 'center'
  })
};
function Content(props) {
  const {
    style: $styleOverride,
    preset,
    ...rest
  } = props;
  const $style = Object.assign({}, $viewPresets[preset || 'large'], $styleOverride);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(BaseView/* BaseView */.q, {
    style: $style,
    ...rest
  });
}

/***/ }),

/***/ 66744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2488);



const $footerBaseStyle = {
  display: 'block',
  minHeight: 20,
  padding: 10,
  paddingBottom: 20,
  bottom: 0
};
function Footer(props) {
  const {
    style: $styleOverride,
    ...rest
  } = props;
  const $style = Object.assign({}, $footerBaseStyle, $styleOverride);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_1__/* .BaseView */ .q, {
    style: $style,
    ...rest
  });
}

/***/ }),

/***/ 37372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67148);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2488);



const $gridStyle = {
  display: 'grid',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN.md
};
function Grid(props) {
  const {
    children,
    style: $styleOverride,
    gap,
    columns,
    onClick
  } = props;
  const $style = Object.assign({}, $gridStyle, $styleOverride, gap ? {
    gap: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_1__/* .spacingGap */ .YN[gap]
  } : {}, columns ? {
    gridTemplateColumns: "repeat(".concat(columns, ", minmax(0, 1fr))")
  } : {}, onClick ? {
    cursor: 'pointer'
  } : {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: $style,
    children: children
  });
}

/***/ }),

/***/ 36528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67196);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67172);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46476);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37656);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58088);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77980);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__]);
_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */







// import { useLocation, useNavigate } from 'react-router-dom';



function Header(props) {
  const {
    onBack,
    title,
    LeftComponent,
    RightComponent,
    children,
    parentName
  } = props;
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .i)();
  // const location = useLocation();

  const CenterComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (children) {
      return children;
    } else if (title) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .a, {
        text: title,
        preset: "regular-bold",
        classname: "!text-base text-[#0A2463]"
      });
    } else {
      return;
    }
  }, [title]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    style: {
      display: 'block'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      className: "flex justify-between items-center p-4 space-x-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        className: "space-x-2",
        children: [LeftComponent, onBack && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
          onClick: e => {
            // onBack();
            console.log('back', parentName);
            return window.history.go(-1);
            // if (!parentName) return window.history.go(-1)
            // navigate(parentName, null, true)
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .G, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
              style: {
                fontSize: 16,
                color: '#0A2463'
              }
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .W, {
        itemsCenter: true,
        children: CenterComponent
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .W, {
        full: true,
        justifyEnd: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .o, {
          selfItemsCenter: true,
          children: RightComponent
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Icon)
/* harmony export */ });
/* unused harmony export svgRegistry */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98104);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69508);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2488);




const svgRegistry = {
  history: './images/icons/clock-solid.svg',
  send: './images/icons/arrow-left-right.svg',
  receive: './images/icons/qrcode.svg',
  right: './images/icons/arrow-right.svg',
  left: './images/icons/arrow-left.svg',
  down: './images/icons/down.svg',
  link: './images/icons/view.svg',
  discord: './images/icons/discord.svg',
  telegram: './images/icons/telegram.svg',
  twitter: './images/icons/twitter.svg',
  github: './images/icons/github.svg',
  kas: './images/icons/kaspa.svg',
  'kaspa-white': './images/icons/kaspa-black.svg',
  qrcode: './images/icons/qrcode.svg',
  user: './images/icons/user-solid.svg',
  wallet: '/images/icons/wallet-solid.svg',
  compass: './images/icons/compass-solid.svg',
  settings: './images/icons/gear-solid.svg',
  grid: './images/icons/grid-solid.svg',
  delete: './images/icons/delete.svg',
  success: './images/icons/success.svg',
  check: './images/icons/check.svg',
  eye: './images/icons/eye.svg',
  'eye-slash': './images/icons/eye-slash.svg',
  copy: './images/icons/copy-solid.svg',
  close: './images/icons/xmark.svg',
  sended: './images/icons/Send.svg',
  received: './images/icons/Receive.svg',
  'circle-check': './images/icons/circle-check.svg',
  pencil: './images/icons/pencil.svg',
  'circle-info': './images/icons/circle-info.svg',
  'circle-question': './images/icons/circle-question.svg',
  split: './images/icons/scissors.svg',
  info: './images/icons/info.svg',
  warning: './images/icons/warning.svg',
  scan: './images/icons/scan.svg'
};
const iconImgList = ['success', 'delete', 'kas'];
function Icon(props) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    onClick,
    children
  } = props;
  if (!icon) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      onClick: onClick,
      style: Object.assign({}, {
        color: color ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I[color] : '#000',
        fontSizes: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.icon,
        display: 'flex'
      }, $containerStyleOverride, $imageStyleOverride || {}, onClick ? {
        cursor: 'pointer'
      } : {}),
      children: children
    });
  }
  const iconPath = svgRegistry[icon];
  if (iconImgList.includes(icon)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: iconPath,
      alt: "",
      style: Object.assign({}, $containerStyleOverride, {
        width: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.icon,
        height: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.icon
      })
    });
  }
  if (iconPath) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: $containerStyleOverride,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        onClick: onClick,
        style: Object.assign({}, {
          color: color ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I[color] : '#000',
          width: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.icon,
          height: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.icon,
          backgroundColor: color ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I[color] : '#000',
          maskImage: "url(".concat(iconPath, ")"),
          maskSize: 'cover',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: "url(".concat(iconPath, ")"),
          WebkitMaskSize: 'cover',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center'
        }, $imageStyleOverride || {}, onClick ? {
          cursor: 'pointer'
        } : {})
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {});
  }
}

/***/ }),

/***/ 49476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69508);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */



function Image(props) {
  const {
    src,
    size,
    style: $imageStyleOverride,
    onClick
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    src: src,
    alt: "",
    style: Object.assign({}, $imageStyleOverride, {
      width: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_1__/* .fontSizes */ .Q.icon,
      height: size || _ui_theme_font__WEBPACK_IMPORTED_MODULE_1__/* .fontSizes */ .Q.icon
    })
  });
}

/***/ }),

/***/ 86836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EF: () => (/* binding */ Input),
/* harmony export */   U$: () => (/* binding */ KasAmountInput)
/* harmony export */ });
/* unused harmony export AddressInput */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98104);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67148);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48818);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87136);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80864);
/* harmony import */ var _ActionComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23848);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67172);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */











// import './index.less';


const $inputPresets = {
  password: {},
  amount: {},
  address: {},
  text: {}
};
const $baseContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  //backgroundColor: '#2a2626',
  paddingLeft: 15.2,
  paddingRight: 15.2,
  paddingTop: 11,
  paddingBottom: 11,
  borderRadius: 5,
  minHeight: '46.5px',
  alignSelf: 'stretch'
};
const $baseInputStyle = Object.assign({}, _Text__WEBPACK_IMPORTED_MODULE_8__/* .$textPresets */ .GO.regular, {
  display: 'flex',
  flex: 1,
  borderWidth: 0,
  outlineWidth: 0,
  alignSelf: 'stretch'
});
function PasswordInput(props) {
  const {
    placeholder,
    containerStyle,
    style: $inputStyleOverride,
    ...rest
  } = props;
  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('password');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
    placeholder: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNull)(placeholder) ? 'Password' : placeholder,
    ...rest,
    endAdornment: type === 'password' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .G, {
      icon: "eye-slash",
      style: {
        marginLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_3__/* .spacing */ .k5.tiny
      },
      onClick: () => setType('text'),
      color: "textDim"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .G, {
      icon: "eye",
      style: {
        marginLeft: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_3__/* .spacing */ .k5.tiny
      },
      onClick: () => setType('password')
    })
  });
}
function AmountInput(props) {
  const {
    placeholder,
    onAmountInputChange,
    disabled,
    style: $inputStyleOverride,
    disableDecimal,
    ...rest
  } = props;
  const $style = Object.assign({}, $baseInputStyle, $inputStyleOverride, disabled ? {
    color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.textDim
  } : {});
  if (!onAmountInputChange) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {});
  }
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [validAmount, setValidAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onAmountInputChange(validAmount);
  }, [validAmount]);
  const handleInputAmount = e => {
    const value = e.target.value;
    if (disableDecimal) {
      if (/^[1-9]\d*$/.test(value) || value === '') {
        setValidAmount(value);
        setInputValue(value);
      }
    } else {
      if (/^\d*\.?\d{0,8}$/.test(value) || value === '') {
        setValidAmount(value);
        setInputValue(value);
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
    placeholder: placeholder || 'Amount',
    value: inputValue,
    onChange: handleInputAmount,
    style: $style,
    disabled: disabled,
    ...rest
  });
}
function KasAmountInput(props) {
  const {
    inputAmountType,
    placeholder,
    onAmountInputChange,
    disabled,
    style: $inputStyleOverride,
    disableDecimal,
    ...rest
  } = props;
  const $style = Object.assign({}, $baseInputStyle, $inputStyleOverride, disabled ? {
    color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.textDim
  } : {});
  if (!onAmountInputChange) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {});
  }
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [validAmount, setValidAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onAmountInputChange(validAmount);
  }, [validAmount]);
  const handleInputAmount = e => {
    const value = e.target.value;
    if (disableDecimal) {
      if (/^[1-9]\d*$/.test(value) || value === '') {
        setValidAmount(value);
        setInputValue(value);
      }
    } else {
      if (/^\d*\.?\d{0,8}$/.test(value) || value === '') {
        setValidAmount(value);
        setInputValue(value);
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
    placeholder: placeholder || 'Amount',
    value: inputValue,
    onChange: handleInputAmount,
    style: $style,
    disabled: disabled,
    startAdornment: inputAmountType && inputAmountType == 'usd' && Number(inputValue) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
      text: "$",
      color: "textDim",
      style: {
        marginRight: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_3__/* .spacing */ .k5.tiny
      }
    }),
    endAdornment: inputAmountType && inputAmountType == 'kas' && Number(inputValue) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
      text: "KAS",
      color: "textDim"
    }),
    ...rest
  });
}
const AddressInput = props => {
  const {
    placeholder,
    onAddressInputChange,
    addressInputData,
    style: $inputStyleOverride,
    ...rest
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__/* .useTranslation */ .G)();
  if (!addressInputData || !onAddressInputChange) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {});
  }
  const [validAddress, setValidAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(addressInputData.address);
  const [parseAddress, setParseAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(addressInputData.domain ? addressInputData.address : '');
  const [parseError, setParseError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [formatError, setFormatError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [inputVal, setInputVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(addressInputData.domain || addressInputData.address);
  const [parseName, setParseName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .e6)();
  const tools = (0,_ActionComponent__WEBPACK_IMPORTED_MODULE_5__/* .useTools */ .w)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onAddressInputChange({
      address: validAddress,
      domain: parseAddress ? inputVal : ''
    });
  }, [validAddress]);
  const [searching, setSearching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const resetState = () => {
    if (parseError) {
      setParseError('');
    }
    if (parseAddress) {
      setParseAddress('');
    }
    if (formatError) {
      setFormatError('');
    }
    if (validAddress) {
      setValidAddress('');
    }
    setParseName('');
  };
  const handleInputAddress = async e => {
    const inputAddress = e.target.value.trim();
    setInputVal(inputAddress);
    resetState();
    const isValid = await wallet.isValidKaspaAddr(inputAddress);
    if (!isValid) {
      setFormatError('Recipient address is invalid');
      return;
    }
    setValidAddress(inputAddress);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    style: {
      alignSelf: 'stretch'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      style: Object.assign({}, $baseContainerStyle, {
        flexDirection: 'column',
        minHeight: '56.5px'
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
        placeholder: t('Address'),
        type: 'text',
        style: Object.assign({}, $baseInputStyle, $inputStyleOverride),
        onChange: async e => {
          await handleInputAddress(e);
        },
        defaultValue: inputVal,
        ...rest
      }), searching && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .W, {
        full: true,
        mt: "sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
          preset: "sub",
          text: 'Loading...'
        })
      })]
    }), parseName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .W, {
      mt: "sm",
      gap: "zero",
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
        preset: "sub",
        size: "sm",
        text: 'Name recognized and resolved. ('
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
        preset: "link",
        color: "yellow",
        text: 'More details',
        onClick: () => {
          (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .openUrlLink */ .lc)('https://kaspa.org/');
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
        preset: "sub",
        size: "sm",
        text: ')'
      })]
    }) : null, parseError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
      text: parseError,
      preset: "regular",
      color: "error"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
      text: formatError,
      preset: "regular",
      color: "error"
    })]
  });
};
function TextInput(props) {
  const {
    placeholder,
    containerStyle,
    style: $inputStyleOverride,
    disabled,
    autoFocus,
    ...rest
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
    placeholder: placeholder,
    type: 'text',
    disabled: disabled,
    autoFocus: autoFocus,
    ...rest
  });
}
function Input(props) {
  const {
    type = 'text'
  } = props;
  if (type === 'password') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(PasswordInput, {
      ...props
    });
  } else if (type === 'amount') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(AmountInput, {
      ...props
    });
  } else if (type === 'address') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(AddressInput, {
      ...props
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TextInput, {
      ...props
    });
  }
}

/***/ }),

/***/ 91684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
;// CONCATENATED MODULE: ./src/ui/components/Layout/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/Layout/index.tsx



function Layout(props) {
  const {
    children,
    style: $styleBase
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "layout",
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative'
    }, $styleBase),
    children: children
  });
}

/***/ }),

/***/ 80288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75776);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);



const Loading = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col justify-center items-center h-[100vh]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
      size: 40
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "text-sm mt-4",
      children: "Loading..."
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ 28595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Logo */
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69508);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49476);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2488);






function Logo(props) {
  const {
    preset
  } = props;
  if (preset === 'large') {
    return /*#__PURE__*/_jsxs(Row, {
      justifyCenter: true,
      itemsCenter: true,
      children: [/*#__PURE__*/_jsx(Image, {
        src: "./images/logo/wallet-logo.png",
        size: fontSizes.xxxl
      }), /*#__PURE__*/_jsx(Text, {
        text: "KASKEEPER",
        preset: "title-bold",
        size: "xxl",
        disableTranslate: true
      })]
    });
  } else {
    return /*#__PURE__*/_jsxs(Row, {
      justifyCenter: true,
      itemsCenter: true,
      children: [/*#__PURE__*/_jsx(Image, {
        src: "./images/logo/wallet-logo.png",
        size: fontSizes.xxl
      }), /*#__PURE__*/_jsx(Text, {
        text: "KASKEEPER",
        preset: "title-bold",
        disableTranslate: true
      })]
    });
  }
}

/***/ }),

/***/ 63640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ NodeStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37656);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48818);
/* harmony import */ var _ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__]);
_ui_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const NodeStatus = props => {
  const {
    isShowNodeUrl = false,
    onRPCStatusChange
  } = props;
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkType */ .qS)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .e6)();
  // const [rpcStatus, setRpcStatus] = useState(false);
  const currentRpcLinks = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useRpcLinks */ .Wq)();
  const {
    rpcConnectStatus,
    setRpcConnectStatus
  } = (0,_ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_4__/* .useRPCStatusContext */ .U)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    wallet.handleRpcConnect().finally(() => {});
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const monitorRpcStatus = setInterval(async () => {
      const status = await wallet.getRpcStatus();
      console.log('monitorRpcStatus', status);
      setRpcConnectStatus(status);
      onRPCStatusChange && onRPCStatusChange(status || false);
    }, 1000);
    return () => {
      clearInterval(monitorRpcStatus);
    };
  }, []);
  const curNodeUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const rpc = currentRpcLinks.find(item => item.value === networkType);
    return (rpc === null || rpc === void 0 ? void 0 : rpc.url) || 'Automatic';
  }, [currentRpcLinks, networkType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
    className: "space-y-6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
      className: "px-4 rounded-lg flex flex-col items-center space-y-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
        className: "flex items-center justify-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
          sx: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: rpcConnectStatus ? 'rgba(11, 228, 171, 0.85)' : 'rgba(243, 59, 121, 0.85)'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
          text: rpcConnectStatus ? 'RPC Connected' : 'RPC Disconnected',
          preset: "regular",
          textCenter: true,
          style: {
            color: rpcConnectStatus ? 'rgba(11, 228, 171, 0.85)' : 'rgba(243, 59, 121, 0.85)'
          }
        })]
      }), isShowNodeUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .a, {
          text: "Connect Node Url: " + curNodeUrl,
          preset: "regular",
          textCenter: true,
          style: {
            color: 'rgba(10, 36, 99, 0.65)',
            marginTop: '10px'
          }
        })
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42269);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2488);





const Popover = _ref => {
  let {
    children,
    onClose
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "popover-container",
    style: {
      backgroundColor: '#0000007a'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        backgroundColor: '#FFF',
        width: 340,
        padding: 20,
        borderRadius: 5,
        position: 'relative'
      },
      children: [onClose && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .W, {
        style: {
          position: 'absolute',
          top: 10,
          right: 10
        },
        justifyEnd: true,
        onClick: () => {
          onClose();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {})
      }), children]
    })
  });
};

/***/ }),

/***/ 13976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ Row)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/spacing.ts
var spacing = __webpack_require__(67148);
// EXTERNAL MODULE: ./src/ui/components/BaseView/index.tsx + 1 modules
var BaseView = __webpack_require__(46860);
;// CONCATENATED MODULE: ./src/ui/components/Row/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/Row/index.tsx





const $rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: spacing/* spacingGap */.YN.md
};
function Row(props) {
  const {
    style: $styleOverride,
    ...rest
  } = props;
  const $style = Object.assign({}, $rowStyle, $styleOverride);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(BaseView/* BaseView */.q, {
    style: $style,
    ...rest,
    classname: "row-container"
  });
}

/***/ }),

/***/ 46476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GO: () => (/* binding */ $textPresets),
  a: () => (/* binding */ Text)
});

// UNUSED EXPORTS: $sizeStyles

// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(98104);
;// CONCATENATED MODULE: ./src/ui/theme/typography.ts
const fonts = {
  ProtoMono: {
    bold: 'ProtoMono-Bold',
    regular: 'ProtoMono-Regular',
    light: 'ProtoMono-Light'
  },
  Inter: {
    bold: 'Inter-Bold',
    regular: 'Inter-Regular',
    light: 'Inter-Light'
  }
};
const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.Inter
};
// EXTERNAL MODULE: ./src/ui/components/BaseView/index.tsx + 1 modules
var BaseView = __webpack_require__(46860);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/Text/index.tsx




const $sizeStyles = {
  xxxl: {
    fontSize: 32,
    lineHeight: 'normal'
  },
  xxl: {
    fontSize: 24,
    lineHeight: 'normal'
  },
  xl: {
    fontSize: 20,
    lineHeight: 'normal'
  },
  lg: {
    fontSize: 18,
    lineHeight: 'normal'
  },
  md: {
    fontSize: 16,
    lineHeight: 'normal'
  },
  sm: {
    fontSize: 14,
    lineHeight: 'normal'
  },
  xs: {
    fontSize: 12,
    lineHeight: 'normal'
  },
  xxs: {
    fontSize: 10,
    lineHeight: 'normal'
  },
  xxxs: {
    fontSize: 8,
    lineHeight: 'normal'
  }
};
const $baseStyle = Object.assign({}, $sizeStyles.sm, {
  fontFamily: typography.primary.regular,
  textAlign: 'left',
  userSelect: 'none'
});
const $presets = {
  large: Object.assign({}, $baseStyle, $sizeStyles.xl),
  title: Object.assign({}, $baseStyle, $sizeStyles.lg),
  'title-bold': Object.assign({}, $baseStyle, $sizeStyles.lg, {
    fontFamily: typography.primary.bold
  }),
  regular: Object.assign({}, $baseStyle, $sizeStyles.sm),
  'regular-bold': Object.assign({}, $baseStyle, $sizeStyles.sm, {
    fontFamily: typography.primary.bold
  }),
  bold: Object.assign({}, $baseStyle, $sizeStyles.sm, {
    fontFamily: typography.primary.bold
  }),
  sub: Object.assign({}, $baseStyle, $sizeStyles.xs, {
    color: 'inherit'
  }),
  'sub-bold': Object.assign({}, $baseStyle, $sizeStyles.xs, {
    fontFamily: typography.primary.bold
  }),
  link: Object.assign({}, $baseStyle, $sizeStyles.xs, {
    color: colors/* colors */.I.blue,
    textDecorationLine: 'underline'
  }),
  default: $baseStyle
};
const $textPresets = $presets;
function Text(props) {
  const {
    size,
    text,
    textCenter,
    textEnd,
    wrap,
    selectText,
    disableTranslate,
    style: $styleOverride,
    ...rest
  } = props;
  const preset = props.preset || 'regular';
  const $textStyle = Object.assign({}, $presets[preset], size ? $sizeStyles[size] : {}, textCenter ? {
    textAlign: 'center'
  } : {}, textEnd ? {
    textAlign: 'end'
  } : {}, wrap ? {
    overflowWrap: 'anywhere'
  } : {}, selectText ? {
    userSelect: 'text'
  } : {});
  const $style = Object.assign({}, $textStyle, $styleOverride);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(BaseView/* BaseView */.q, {
    style: $style,
    ...rest,
    children: disableTranslate ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      translate: "no",
      children: text
    }) : text
  });
}

/***/ }),

/***/ 83340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98104);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69508);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2488);





const $textAreaStyle = {
  backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.bg2,
  flexWrap: 'wrap',
  padding: 10,
  userSelect: 'text',
  maxHeight: 384,
  overflow: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.xs
};
function TextArea(props) {
  const {
    style: $styleOverride,
    text,
    ...rest
  } = props;
  const $style = Object.assign({}, $textAreaStyle, $styleOverride);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .q, {
    style: $style,
    ...rest,
    children: text
  });
}

/***/ }),

/***/ 83120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EF: () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_10__.EF),
/* harmony export */   GW: () => (/* reexport safe */ _Icon__WEBPACK_IMPORTED_MODULE_8__.G),
/* harmony export */   Go: () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_5__.G),
/* harmony export */   IF: () => (/* reexport safe */ _TextArea__WEBPACK_IMPORTED_MODULE_15__.I),
/* harmony export */   M1: () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   WA: () => (/* reexport safe */ _Row__WEBPACK_IMPORTED_MODULE_13__.W),
/* harmony export */   WC: () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_9__.W),
/* harmony export */   _W: () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_11__._),
/* harmony export */   a: () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_14__.a),
/* harmony export */   ek: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_7__.e),
/* harmony export */   kP: () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_4__.k),
/* harmony export */   ou: () => (/* reexport safe */ _Column__WEBPACK_IMPORTED_MODULE_3__.o),
/* harmony export */   q: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   s9: () => (/* reexport safe */ _NodeStatus__WEBPACK_IMPORTED_MODULE_16__.s),
/* harmony export */   uE: () => (/* reexport safe */ _AddressBar__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _AddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85292);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65044);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36224);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67196);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61324);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66744);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37372);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36528);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67172);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49476);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86836);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91684);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28595);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46476);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83340);
/* harmony import */ var _NodeStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63640);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddressBar__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_7__, _NodeStatus__WEBPACK_IMPORTED_MODULE_16__]);
([_AddressBar__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_7__, _NodeStatus__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wB: () => (/* binding */ useAccountContext),
/* harmony export */   yx: () => (/* binding */ AccountContextProvider)
/* harmony export */ });
/* unused harmony export AccountContext */
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4600);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3204);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96651);
/* harmony import */ var _state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48818);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57360);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__]);
_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const AccountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
  krc20Tokens: [],
  erc20Tokens: [],
  krc20Loading: false,
  activeToken: null,
  setActiveToken: token => {},
  refetchList: () => {},
  refreshErc20Tokens: () => {}
});
function AccountContextProvider(_ref) {
  let {
    children
  } = _ref;
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAccountAddress */ .mA)();
  const network = (0,_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkType */ .qS)();
  const [krc20Tokens, setKrc20Tokens] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [activeToken, setActiveToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .e6)();
  const [erc20Tokens, setErc20Tokens] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAccountAddressL2 */ .gt)();
  const currentLayer = (0,_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useLayerType */ .wl)();
  const fetchKrc20Tokens = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    var _jsonData$result;
    if (!address) {
      return;
    }
    setLoading(true);
    let result;
    const networkType = await wallet.getNetworkType();
    // networkType 0正式 1测试
    if (!networkType) {
      result = await fetch("https://api.kasplex.org/v1/krc20/address/".concat(address, "/tokenlist"));
    } else {
      result = await fetch("https://tn10api.kasplex.org/v1/krc20/address/".concat(address, "/tokenlist"));
    }
    const jsonData = await result.json();
    const list = await Promise.all((_jsonData$result = jsonData.result) === null || _jsonData$result === void 0 ? void 0 : _jsonData$result.map(async item => {
      // 处理issue
      const data = {
        ...item,
        isToken: true
      };
      // 处理deploy issue 模式的krc20
      if (item.ca) {
        const issueInfo = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__/* .get_krc20_issue_info */ .Oy)(networkType, item.ca);
        data.mod = issueInfo.mod;
        data.tick = issueInfo.name;
        data.to = issueInfo.to;
      }
      if (networkType === 1) {
        // 获取krc20的图标
        const iconInfo = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__/* .get_krc20_icon_url */ .sN)(data.tick); // 'TAURUS'
        if (iconInfo.status === 'finished') {
          data.icon = iconInfo.iconUrl;
        }
      }
      return data;
    }));
    console.log('tokenlist', list);
    setKrc20Tokens(list);
    setLoading(false);
  }, [address]);
  const fetchErc20Tokens = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    if (!addressL2) return;
    setLoading(true);
    // erc20 list
    try {
      const allListObj = {};
      const customList = await wallet.getERC20ListByAddress(addressL2);
      customList.forEach(token => {
        allListObj[token.contractAddress] = {
          contractAddress: token.contractAddress,
          decimals: token.decimals,
          dec: token.decimals,
          symbol: token.symbol,
          tick: token.symbol,
          isToken: true,
          balance: 0
        };
      });
      const selfList = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_6__/* .get_erc20_list_by_address */ .IL)(network, addressL2);
      let unknownIndex = 0;
      selfList.data.items.forEach(item => {
        const {
          value,
          token
        } = item;
        let symbol = token.symbol;
        if (!symbol) {
          unknownIndex += 1;
          symbol = "Unknown".concat(unknownIndex);
        }
        if (allListObj[token.address]) {
          allListObj[token.address].balance = Number(value);
        } else {
          allListObj[token.address] = {
            contractAddress: token.address,
            decimals: token.decimals,
            dec: token.decimals,
            symbol: symbol,
            tick: symbol,
            isToken: true,
            balance: Number(value)
          };
        }
      });
      setErc20Tokens(Object.values(allListObj));
    } catch (error) {
      console.log('getERC20ListByAddress error', error);
    } finally {
      setLoading(false);
    }
  }, [addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (currentLayer === 'L1' && address) {
      fetchKrc20Tokens();
    }
  }, [currentLayer, address]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (currentLayer === 'L2' && addressL2) {
      fetchErc20Tokens();
    }
  }, [currentLayer, addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    console.log('fetchKasPrice');
    fetch('https://api.kaspa.org/info/price').then(response => response.json()).then(data => {
      const price = Number(data.price);
      if (price && price > 0) dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_1__/* .accountActions */ .M7.setKasPrice(price));
    });
  }, []);
  const handleActiveToken = token => {
    setActiveToken(token);
  };
  const value = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return {
      krc20Tokens: krc20Tokens,
      krc20Loading: loading,
      activeToken: activeToken,
      erc20Tokens: erc20Tokens,
      setActiveToken: handleActiveToken,
      refetchList: fetchKrc20Tokens,
      refreshErc20Tokens: fetchErc20Tokens
    };
  }, [krc20Tokens, erc20Tokens, loading, handleActiveToken]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AccountContext.Provider, {
    value: value,
    children: children
  });
}
function useAccountContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AccountContext);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ useRPCStatusContext),
/* harmony export */   k: () => (/* binding */ RPCStatusContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2488);


const RPCStatusContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  rpcConnectStatus: false,
  setRpcConnectStatus: status => {},
  getRpcConnectStatus: () => false
});
function RPCStatusContextProvider(_ref) {
  let {
    children
  } = _ref;
  const [rpcConnectStatus, setRpcConnectStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getRpcConnectStatus = () => {
    return rpcConnectStatus;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RPCStatusContext.Provider, {
    value: {
      rpcConnectStatus,
      setRpcConnectStatus,
      getRpcConnectStatus
    },
    children: children
  });
}
function useRPCStatusContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RPCStatusContext);
}

/***/ }),

/***/ 96447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mG: () => (/* binding */ extensionIsInTab),
  YP: () => (/* binding */ getCurrentTab),
  Qn: () => (/* binding */ openExtensionInTab),
  M7: () => (/* binding */ useExtensionIsInTab),
  qt: () => (/* binding */ useOpenExtensionInTab)
});

// UNUSED EXPORTS: focusExtensionTab

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/shared/constant/index.ts
var constant = __webpack_require__(46956);
;// CONCATENATED MODULE: ./src/background/webapi/browser.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

function getBrowser() {
  if (typeof globalThis.browser === 'undefined') {
    return {}; // chrome;
  } else {
    return globalThis.browser;
  }
}
const browser_browser = getBrowser();
async function browserWindowsGetCurrent(params) {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.windows.getCurrent(params, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.windows.getCurrent(params);
  }
}
async function browserWindowsCreate(params) {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.windows.create(params, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.windows.create(params);
  }
}
async function browserWindowsUpdate(windowId, updateInfo) {
  if (MANIFEST_VERSION == 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.windows.update(windowId, updateInfo, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.windows.update(windowId, updateInfo);
  }
}
async function browserWindowsRemove(windowId) {
  if (MANIFEST_VERSION == 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.windows.remove(windowId, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.windows.remove(windowId);
  }
}
async function browserStorageLocalGet(val) {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.storage.local.get(val, res => {
        resolve(res);
      });
    });
  } else {
    return await browser_browser.storage.local.get(val);
  }
}
async function browserStorageLocalSet(val) {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.storage.local.set(val, res => {
        resolve(res);
      });
    });
  } else {
    return await browser_browser.storage.local.set(val);
  }
}
async function browser_browserTabsGetCurrent() {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.tabs.getCurrent(val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.tabs.getCurrent();
  }
}
async function browserTabsQuery(params) {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.tabs.query(params, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.tabs.query(params);
  }
}
async function browserTabsCreate(params) {
  if (constant/* MANIFEST_VERSION */.iz === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.tabs.create(params, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.tabs.create(params);
  }
}
async function browser_browserTabsUpdate(tabId, params) {
  if (MANIFEST_VERSION === 'mv2') {
    return new Promise((resolve, reject) => {
      browser_browser.tabs.update(tabId, params, val => {
        resolve(val);
      });
    });
  } else {
    return await browser_browser.tabs.update(tabId, params);
  }
}
function browserWindowsOnFocusChanged(listener) {
  browser_browser.windows.onFocusChanged.addListener(listener);
}
function browserWindowsOnRemoved(listener) {
  browser_browser.windows.onRemoved.addListener(listener);
}
function browserTabsOnUpdated(listener) {
  browser_browser.tabs.onUpdated.addListener(listener);
}
function browserTabsOnRemoved(listener) {
  browser_browser.tabs.onRemoved.addListener(listener);
}
function browserRuntimeOnConnect(listener) {
  browser_browser.runtime.onConnect.addListener(listener);
}
function browserRuntimeOnInstalled(listener) {
  browser_browser.runtime.onInstalled.addListener(listener);
}
function browserRuntimeConnect(extensionId, connectInfo) {
  return browser_browser.runtime.connect(extensionId, connectInfo);
}
/* harmony default export */ const webapi_browser = (browser_browser);
;// CONCATENATED MODULE: ./src/ui/features/browser/tabs.ts



const openExtensionInTab = async path => {
  const url = webapi_browser.runtime.getURL("index.html".concat(path || ''));
  const tab = await browserTabsCreate({
    url
  });
  return tab;
};
const extensionIsInTab = async () => {
  return true; // Boolean(await browserTabsGetCurrent());
};
const focusExtensionTab = async () => {
  const tab = await browserTabsGetCurrent();
  if (tab && isNumber(tab === null || tab === void 0 ? void 0 : tab.id) && (tab === null || tab === void 0 ? void 0 : tab.id) !== browser.tabs.TAB_ID_NONE) {
    browserTabsUpdate(tab.id, {
      active: true
    });
  }
};
const useExtensionIsInTab = () => {
  const [isInTab, setIsInTab] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const init = async () => {
      const inTab = await extensionIsInTab();
      setIsInTab(inTab);
    };
    init();
  }, []);
  return isInTab;
};
const useOpenExtensionInTab = () => {
  return (0,react.useCallback)(async path => {
    await openExtensionInTab(path);
    window.close();
  }, []);
};
const getCurrentTab = async () => {
  const tabs = []; // await browserTabsQuery({ active: true, currentWindow: true });
  return tabs[0];
};

/***/ }),

/***/ 77388:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58256);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31036);
/* harmony import */ var antd_es_locale_en_US__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48368);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47428);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54464);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13760);
/* harmony import */ var _ui_state_accounts_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63380);
/* harmony import */ var _ui_styles_global_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41920);
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15088);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9418);
/* harmony import */ var _components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23848);
/* harmony import */ var _pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77980);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11032);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48818);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5320);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97648);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _background_controller_wallet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21240);
/* harmony import */ var _context_RPCStatus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_state_accounts_updater__WEBPACK_IMPORTED_MODULE_4__, _pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__]);
([_ui_state_accounts_updater__WEBPACK_IMPORTED_MODULE_4__, _pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* eslint-disable @typescript-eslint/no-explicit-any */













// import i18n, { addResourceBundle } from './utils/i18n';







const AUTO_LOCK_TIMEOUT = 10 * 60 * 1000; // 10分钟，单位毫秒
let autoLockTimer = null;

// 重置自动锁定计时器的函数
const resetAutoLockTimer = () => {
  if (autoLockTimer) {
    clearTimeout(autoLockTimer);
  }
  autoLockTimer = setTimeout(() => {
    // 调用锁定钱包的方法
    if (_background_controller_wallet__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c && typeof _background_controller_wallet__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c.lockWallet === 'function') {
      _background_controller_wallet__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c.lockWallet().catch(error => {
        console.error('自动锁定钱包失败:', error);
      });
    }
  }, AUTO_LOCK_TIMEOUT);
};

// 添加用户活动监听器
const setupActivityListeners = () => {
  const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
  events.forEach(event => {
    window.addEventListener(event, resetAutoLockTimer, true);
  });

  // 初始化计时器
  resetAutoLockTimer();
};
dayjs__WEBPACK_IMPORTED_MODULE_11___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12___default()));

// disabled sentry
// Sentry.init({
//   dsn: 'https://15ca58bf532f4234a2f400cd11edfa2f@o4504750033403904.ingest.sentry.io/4505044300201984',
//   integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
//   // Performance Monitoring
//   tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });

// import 'default-passive-events'

// const AsyncMainRoute = lazy(() => import('./pages/MainRoute'));

antd_lib_message__WEBPACK_IMPORTED_MODULE_16__["default"].config({
  maxCount: 1
});
const antdConfig = {
  locale: antd_es_locale_en_US__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c
};
function Updaters() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_state_accounts_updater__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c, {})
  });
}
const locale = 'en';
// wallet.getLocale().then((locale) => {
//   addResourceBundle(locale).then(() => {
//     i18n.changeLanguage(locale);
// ReactDOM.render(<Views wallet={wallet} />, document.getElementById('root'));
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .C_, {
  store: _state__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .c, {
    theme: _ui_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_10__/* .WalletProvider */ .ek, {
      ...antdConfig,
      wallet: _background_controller_wallet__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .ActionComponentProvider */ .I, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_context_RPCStatus__WEBPACK_IMPORTED_MODULE_14__/* .RPCStatusContextProvider */ .k, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(Updaters, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {})]
        })
      })
    })
  })
}));
// 初始化自动锁定功能
setupActivityListeners();
//   });
// });
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   i: () => (/* binding */ useNavigate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33220);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23420);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80288);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94240);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83120);
/* harmony import */ var _context_AccountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23932);
/* harmony import */ var _state_accounts_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4600);
/* harmony import */ var _state_global_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24456);
/* harmony import */ var _state_global_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81068);
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3204);
/* harmony import */ var _state_settings_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34700);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48818);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85598);
/* harmony import */ var _components_AppLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95632);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, _context_AccountContext__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, _context_AccountContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/no-explicit-any */














const AddKeyringScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 8656).then(__webpack_require__.bind(__webpack_require__, 88656)));
const ContactBookScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(4640), __webpack_require__.e(2984), __webpack_require__.e(9332)]).then(__webpack_require__.bind(__webpack_require__, 14516)));
const CreateAccountScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 6012).then(__webpack_require__.bind(__webpack_require__, 86012)));
const CreateContactScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 8948).then(__webpack_require__.bind(__webpack_require__, 8948)));
const CreateHDWalletScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(3236), __webpack_require__.e(6704), __webpack_require__.e(4368), __webpack_require__.e(6384)]).then(__webpack_require__.bind(__webpack_require__, 96384)));
const CreatePasswordScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 2772).then(__webpack_require__.bind(__webpack_require__, 52772)));
const CreateSimpleWalletScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 9612).then(__webpack_require__.bind(__webpack_require__, 49612)));
const SwitchAccountScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 652).then(__webpack_require__.bind(__webpack_require__, 10652)));
const SwitchKeyringScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(6712), __webpack_require__.e(3040)]).then(__webpack_require__.bind(__webpack_require__, 50660)));
const UnlockScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 7796).then(__webpack_require__.bind(__webpack_require__, 17796)));
const ApprovalScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(996), __webpack_require__.e(2340), __webpack_require__.e(3260), __webpack_require__.e(172), __webpack_require__.e(7500), __webpack_require__.e(6560)]).then(__webpack_require__.bind(__webpack_require__, 82032)));
const ConnectedSitesScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 2100).then(__webpack_require__.bind(__webpack_require__, 32100)));
const ActivitiesScrren = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(404), __webpack_require__.e(4340), __webpack_require__.e(4984)]).then(__webpack_require__.bind(__webpack_require__, 24236)));

const EnterRecipientAddress = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(3236), __webpack_require__.e(996), __webpack_require__.e(6932), __webpack_require__.e(5404), __webpack_require__.e(8804)]).then(__webpack_require__.bind(__webpack_require__, 85404)));
const AppTabScrren = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 3860).then(__webpack_require__.bind(__webpack_require__, 93860)));
const BoostScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 2612).then(__webpack_require__.bind(__webpack_require__, 62612)));
// import BoostScreen from './Main/BoostScreen';
const DiscoverTabScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 5620).then(__webpack_require__.bind(__webpack_require__, 5620)));
const SettingsTabScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 4348).then(__webpack_require__.bind(__webpack_require__, 14348)));
const WalletTabScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(2220), __webpack_require__.e(2340), __webpack_require__.e(360), __webpack_require__.e(688)]).then(__webpack_require__.bind(__webpack_require__, 4776)));
const WelcomeScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 5312).then(__webpack_require__.bind(__webpack_require__, 15312)));
const AddressTypeScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 4948).then(__webpack_require__.bind(__webpack_require__, 74948)));
const ChangePasswordScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 6552).then(__webpack_require__.bind(__webpack_require__, 6552)));
const EditAccountNameScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(3236), __webpack_require__.e(2136)]).then(__webpack_require__.bind(__webpack_require__, 22136)));
const EditContactNameScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(6712), __webpack_require__.e(8688)]).then(__webpack_require__.bind(__webpack_require__, 98688)));
const EditNetworkUrlScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 4252).then(__webpack_require__.bind(__webpack_require__, 14252)));
const EditWalletNameScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(3236), __webpack_require__.e(1856)]).then(__webpack_require__.bind(__webpack_require__, 91856)));
const ExportMnemonicsScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(6704), __webpack_require__.e(392)]).then(__webpack_require__.bind(__webpack_require__, 70392)));
const ExportPrivateKeyScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(6704), __webpack_require__.e(5436)]).then(__webpack_require__.bind(__webpack_require__, 45436)));
const LanguageTypeScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 2528).then(__webpack_require__.bind(__webpack_require__, 30148)));
const NetworkTypeScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 1376).then(__webpack_require__.bind(__webpack_require__, 11376)));
const UpgradeNoticeScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 7580).then(__webpack_require__.bind(__webpack_require__, 27580)));
const TestScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 8168).then(__webpack_require__.bind(__webpack_require__, 18168)));
const ToolScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 4256).then(__webpack_require__.bind(__webpack_require__, 4256)));
const ActivityTab = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(404), __webpack_require__.e(8808)]).then(__webpack_require__.bind(__webpack_require__, 48808)));
const SelectToken = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(360), __webpack_require__.e(228)]).then(__webpack_require__.bind(__webpack_require__, 40228)));
const DeployScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(4616), __webpack_require__.e(6660), __webpack_require__.e(172), __webpack_require__.e(2296)]).then(__webpack_require__.bind(__webpack_require__, 62296)));
const MintScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(5816), __webpack_require__.e(172), __webpack_require__.e(8324)]).then(__webpack_require__.bind(__webpack_require__, 58324)));
const ChownScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(3236), __webpack_require__.e(996), __webpack_require__.e(4616), __webpack_require__.e(6932), __webpack_require__.e(172), __webpack_require__.e(5404), __webpack_require__.e(4176)]).then(__webpack_require__.bind(__webpack_require__, 82724)));
const BlacklistIssueScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(3236), __webpack_require__.e(996), __webpack_require__.e(4616), __webpack_require__.e(6932), __webpack_require__.e(172), __webpack_require__.e(5404), __webpack_require__.e(3604)]).then(__webpack_require__.bind(__webpack_require__, 80876)));
const IssueScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(3236), __webpack_require__.e(996), __webpack_require__.e(4616), __webpack_require__.e(6932), __webpack_require__.e(172), __webpack_require__.e(5404), __webpack_require__.e(2356)]).then(__webpack_require__.bind(__webpack_require__, 89252)));
const BurnScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(4616), __webpack_require__.e(172), __webpack_require__.e(7172)]).then(__webpack_require__.bind(__webpack_require__, 27172)));
const TokenScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(4340), __webpack_require__.e(6976)]).then(__webpack_require__.bind(__webpack_require__, 32068)));
const KNSScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 8876).then(__webpack_require__.bind(__webpack_require__, 68876)));
const UTXOTab = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(404), __webpack_require__.e(8228)]).then(__webpack_require__.bind(__webpack_require__, 65847)));
const FiatPayScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 1476).then(__webpack_require__.bind(__webpack_require__, 81476)));
const ReceiveScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(7488), __webpack_require__.e(9960)]).then(__webpack_require__.bind(__webpack_require__, 92172)));
const TxConfirmScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(996), __webpack_require__.e(2340), __webpack_require__.e(3260), __webpack_require__.e(172), __webpack_require__.e(7500), __webpack_require__.e(5532)]).then(__webpack_require__.bind(__webpack_require__, 95272)));
const TxCreateScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(2453), __webpack_require__.e(4640), __webpack_require__.e(5428), __webpack_require__.e(3756), __webpack_require__.e(2220), __webpack_require__.e(3236), __webpack_require__.e(996), __webpack_require__.e(6932), __webpack_require__.e(360), __webpack_require__.e(172), __webpack_require__.e(5404), __webpack_require__.e(8981)]).then(__webpack_require__.bind(__webpack_require__, 40020)));
const TxDetailScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 5780).then(__webpack_require__.bind(__webpack_require__, 45780)));
const TxFailScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 1456).then(__webpack_require__.bind(__webpack_require__, 11456)));
const TxSuccessScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 1340).then(__webpack_require__.bind(__webpack_require__, 1340)));
const UtxoDetailScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 9320).then(__webpack_require__.bind(__webpack_require__, 89320)));


const WebsiteTabScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 556).then(__webpack_require__.bind(__webpack_require__, 60556)));
const ImportERC20 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 9324).then(__webpack_require__.bind(__webpack_require__, 39324)));
const routes = {
  BoostScreen: {
    path: '/',
    element:
    /*#__PURE__*/
    // <BoostScreen />
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_AppLoading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BoostScreen, {})
    })
  },
  WelcomeScreen: {
    path: '/welcome',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(WelcomeScreen, {})
    })
  },
  MainScreen: {
    path: '/main',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(WalletTabScreen, {})
    })
  },
  ToolScreen: {
    path: '/tool',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ToolScreen, {})
    })
  },
  TokenScreen: {
    path: '/token',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TokenScreen, {})
    })
  },
  KNSScreen: {
    path: '/kns',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(KNSScreen, {})
    })
  },
  SelectToken: {
    path: '/select-token',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SelectToken, {})
    })
  },
  MintScreen: {
    path: '/mint',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(MintScreen, {})
    })
  },
  IssueScreen: {
    path: '/issue',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(IssueScreen, {})
    })
  },
  ChownScreen: {
    path: '/chown',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ChownScreen, {})
    })
  },
  BlacklistIssueScreen: {
    path: '/blacklistissue',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BlacklistIssueScreen, {})
    })
  },
  BurnScreen: {
    path: '/burn',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BurnScreen, {})
    })
  },
  ActivitiesScrren: {
    path: '/activities',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ActivitiesScrren, {})
    })
  },
  DeployScreen: {
    path: '/depoly',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(DeployScreen, {})
    })
  },
  DiscoverTabScreen: {
    path: '/discover',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(DiscoverTabScreen, {})
    })
  },
  AppTabScrren: {
    path: '/app',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AppTabScrren, {})
    })
  },
  SettingsTabScreen: {
    path: '/settings',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SettingsTabScreen, {})
    })
  },
  CreateHDWalletScreen: {
    path: '/account/create-hd-wallet',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CreateHDWalletScreen, {})
    })
  },
  CreateAccountScreen: {
    path: '/account/create',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CreateAccountScreen, {})
    })
  },
  CreateContactScreen: {
    path: '/contacts/create',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CreateContactScreen, {})
    })
  },
  CreatePasswordScreen: {
    path: '/account/create-password',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CreatePasswordScreen, {})
    })
  },
  UnlockScreen: {
    path: '/account/unlock',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(UnlockScreen, {})
    })
  },
  SwitchAccountScreen: {
    path: '/account/switch-account',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SwitchAccountScreen, {})
    })
  },
  ContackBookScreen: {
    path: '/contact-book',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ContactBookScreen, {})
    })
  },
  ReceiveScreen: {
    path: '/wallet/receive',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ReceiveScreen, {})
    })
  },
  TxCreateScreen: {
    path: '/wallet/tx/create',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TxCreateScreen, {})
    })
  },
  TxConfirmScreen: {
    path: '/wallet/tx/confirm',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TxConfirmScreen, {})
    })
  },
  TxSuccessScreen: {
    path: '/wallet/tx/success',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TxSuccessScreen, {})
    })
  },
  TxFailScreen: {
    path: '/wallet/tx/fail',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TxFailScreen, {})
    })
  },
  ActivityScreen: {
    path: '/Activity',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ActivityTab, {})
    })
  },
  UTXOScreen: {
    path: '/UTXO',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(UTXOTab, {})
    })
  },
  NetworkTypeScreen: {
    path: '/settings/network-type',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(NetworkTypeScreen, {})
    })
  },
  LanguageTypeScreen: {
    path: '/settings/language-type',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(LanguageTypeScreen, {})
    })
  },
  ChangePasswordScreen: {
    path: '/settings/password',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ChangePasswordScreen, {})
    })
  },
  ExportMnemonicsScreen: {
    path: '/settings/export-mnemonics',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ExportMnemonicsScreen, {})
    })
  },
  ExportPrivateKeyScreen: {
    path: '/settings/export-privatekey',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ExportPrivateKeyScreen, {})
    })
  },
  TxDetailScreen: {
    path: '/wallet/txdetail',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TxDetailScreen, {})
    })
  },
  UtxoDetailScreen: {
    path: '/wallet/utxodetail',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(UtxoDetailScreen, {})
    })
  },
  ApprovalScreen: {
    path: '/approval',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ApprovalScreen, {})
    })
  },
  ConnectedSitesScreen: {
    path: '/connected-sites',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ConnectedSitesScreen, {})
    })
  },
  SwitchKeyringScreen: {
    path: '/account/switch-keyring',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SwitchKeyringScreen, {})
    })
  },
  AddKeyringScreen: {
    path: '/account/add-keyring',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AddKeyringScreen, {})
    })
  },
  EditWalletNameScreen: {
    path: '/settings/edit-wallet-name',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(EditWalletNameScreen, {})
    })
  },
  EditNetworkUrlScreen: {
    path: '/settings/edit-network-url',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(EditNetworkUrlScreen, {})
    })
  },
  CreateSimpleWalletScreen: {
    path: '/account/create-simple-wallet',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CreateSimpleWalletScreen, {})
    })
  },
  UpgradeNoticeScreen: {
    path: '/settings/upgrade-notice',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(UpgradeNoticeScreen, {})
    })
  },
  AddressTypeScreen: {
    path: '/settings/address-type',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AddressTypeScreen, {})
    })
  },
  EditAccountNameScreen: {
    path: '/settings/edit-account-name',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(EditAccountNameScreen, {})
    })
  },
  EditContactNameScreen: {
    path: '/settings/edit-contact-name',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(EditContactNameScreen, {})
    })
  },
  TestScreen: {
    path: '/test',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TestScreen, {})
    })
  },
  FiatPayScreen: {
    path: '/moonpay',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(FiatPayScreen, {})
    })
  },
  WebsiteTabScreen: {
    path: '/website',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(WebsiteTabScreen, {})
    })
  },
  ImportERC20: {
    path: '/import-erc',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ImportERC20, {})
    })
  },
  EnterRecipientAddress: {
    path: '/enter-recipient-address',
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(EnterRecipientAddress, {})
    })
  }
};
function useNavigate() {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__/* .useNavigate */ .i6)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (routKey, state) {
    let replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    navigate(routes[routKey].path, {
      state,
      replace
    });
  }, [react_router_dom__WEBPACK_IMPORTED_MODULE_13__/* .useNavigate */ .i6]);
}
const Main = () => {
  const wallet = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .e6)();
  const dispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .A)();
  const isReady = true; // useIsReady();
  const isUnlocked = (0,_state_global_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useIsUnlocked */ .Yt)();
  const selfRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    settingsLoaded: false,
    summaryLoaded: false,
    accountLoaded: false,
    configLoaded: false
  });
  const self = selfRef.current;
  const init = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      if (!self.accountLoaded) {
        const currentAccount = await wallet.getCurrentAccount();
        if (currentAccount) {
          dispatch(_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_4__/* .accountActions */ .M7.setCurrent(currentAccount));
          const accounts = await wallet.getAccounts();
          dispatch(_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_4__/* .accountActions */ .M7.setAccounts(accounts));
          if (accounts.length > 0) {
            self.accountLoaded = true;
          }
        }
      }
      if (!self.settingsLoaded) {
        const networkType = await wallet.getNetworkType();
        const rpcLinks = await wallet.getRpcLinks();
        dispatch(_state_settings_reducer__WEBPACK_IMPORTED_MODULE_8__/* .settingsActions */ .eo.updateSettings({
          networkType,
          rpcLinks
        }));
        const _locale = await wallet.getLocale();
        dispatch(_state_settings_reducer__WEBPACK_IMPORTED_MODULE_8__/* .settingsActions */ .eo.updateSettings({
          locale: _locale
        }));
        self.settingsLoaded = true;
      }
      if (!self.summaryLoaded) {
        wallet.getAppSummary().then(data => {
          dispatch(_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_4__/* .accountActions */ .M7.setAppSummary(data));
        });
        self.summaryLoaded = true;
      }
      if (!self.configLoaded) {
        wallet.getWalletConfig().then(data => {
          dispatch(_state_settings_reducer__WEBPACK_IMPORTED_MODULE_8__/* .settingsActions */ .eo.updateSettings({
            walletConfig: data
          }));
        });
        try {
          wallet.getSkippedVersion().then(data => {
            dispatch(_state_settings_reducer__WEBPACK_IMPORTED_MODULE_8__/* .settingsActions */ .eo.updateSettings({
              skippedVersion: data
            }));
          });
        } catch (error) {
          // 兼容浏览器插件和app
          const skippedVersion = await wallet.getSkippedVersion();
          dispatch(_state_settings_reducer__WEBPACK_IMPORTED_MODULE_8__/* .settingsActions */ .eo.updateSettings({
            skippedVersion
          }));
        }
      }
      dispatch(_state_global_reducer__WEBPACK_IMPORTED_MODULE_6__/* .globalActions */ .Un.update({
        isReady: true
      }));
    } catch (e) {
      console.log('init error', e);
    }
  }, [wallet, dispatch, isReady, isUnlocked]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    wallet.hasVault().then(val => {
      if (val) {
        wallet.isUnlocked().then(isUnlocked => {
          dispatch(_state_global_reducer__WEBPACK_IMPORTED_MODULE_6__/* .globalActions */ .Un.update({
            isUnlocked
          }));
          if (!isUnlocked && location.href.includes(routes.UnlockScreen.path) === false) {
            const basePath = location.href.split('#')[0];
            location.href = "".concat(basePath, "#").concat(routes.UnlockScreen.path);
          }
        }).catch(error => {
          console.log('isUnlocked error', error);
        });
      }
    }).catch(error => {
      console.log('hasVault error', error);
    });
    window.addEventListener('offline', async () => {
      console.log('Network offline, disconnecting RPC');
      wallet.setOffline(false);
    });
    window.addEventListener('online', async () => {
      console.log('Network online, reconnecting RPC');
      wallet.setOffline(true);
    });
    // 监听从React Native传递的消息
    window.addEventListener('message', event => {
      // 解析消息内容
      const data = event.data;
      if (data.type === 'networkStatus') {
        // 根据网络状态进行处理
        if (data.isConnected) {
          console.log('网络已连接');
          wallet.setOffline(true);
          // 在网页中执行在线状态下的操作
        } else {
          console.log('网络已断开');
          wallet.setOffline(false);
          // 在网页中执行离线状态下的操作
        }
      }
    });
    return () => {
      window.removeEventListener('offline', () => {});
      window.removeEventListener('online', () => {});
      window.removeEventListener('message', () => {});
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, [init]);
  if (!isReady) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ ._W, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .kP, {
        justifyCenter: true,
        itemsCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .GW, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {})
        })
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__/* .AccountContextProvider */ .yx, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__/* .HashRouter */ .mk, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__/* .Routes */ .c5, {
        children: Object.keys(routes).map(v => routes[v]).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__/* .Route */ .kX, {
          path: v.path,
          element: v.element
        }, v.path))
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Af: () => (/* binding */ useKasPrice),
/* harmony export */   En: () => (/* binding */ useUnreadAppSummary),
/* harmony export */   Gk: () => (/* binding */ useFetchBalanceCallback),
/* harmony export */   Ib: () => (/* reexport safe */ _keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__.Ib),
/* harmony export */   Id: () => (/* binding */ useAccountBalance),
/* harmony export */   KM: () => (/* binding */ useReloadAccounts),
/* harmony export */   Uh: () => (/* binding */ useReadTab),
/* harmony export */   Xr: () => (/* binding */ useAppSummary),
/* harmony export */   YB: () => (/* binding */ useAccountEthBalance),
/* harmony export */   Yx: () => (/* binding */ useReadApp),
/* harmony export */   _A: () => (/* binding */ useCurrentAccount),
/* harmony export */   gt: () => (/* binding */ useAccountAddressL2),
/* harmony export */   mA: () => (/* binding */ useAccountAddress),
/* harmony export */   sL: () => (/* binding */ useFetchBalancesCallback),
/* harmony export */   uu: () => (/* binding */ useSetCurrentAccountCallback),
/* harmony export */   wH: () => (/* binding */ useFetchKeyringsBalancesCallback),
/* harmony export */   yK: () => (/* binding */ useUserPrivateKey)
/* harmony export */ });
/* unused harmony exports useAccountsState, useBlueScore, useAccounts, useAddressSummary, useHistory, useImportAccountCallback, useChangeAccountNameCallback, useChangeAddressFlagCallback, useFetchHistoryCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40256);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3204);
/* harmony import */ var _keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60440);
/* harmony import */ var _keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91588);
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34700);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4600);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34780);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63116);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15164);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46956);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_l2__WEBPACK_IMPORTED_MODULE_8__]);
_background_krc20_l2__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function useAccountsState() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(state => state.accounts);
}
function useCurrentAccount() {
  const accountsState = useAccountsState();
  return accountsState.current;
}
function useBlueScore() {
  const accountsState = useAccountsState();
  return accountsState.blueScore;
}
function useKasPrice() {
  const accountsState = useAccountsState();
  return accountsState.kasPrice;
}
function useAccounts() {
  const accountsState = useAccountsState();
  return accountsState.accounts;
}
function useAccountBalance(address) {
  const accountsState = useAccountsState();
  const currentAccount = useCurrentAccount();
  if (address) {
    return accountsState.balanceMap[address] || {
      amount: '0',
      expired: false,
      confirm_kas_amount: '0',
      pending_kas_amount: '0',
      outgoing: '0'
    };
  }
  return accountsState.balanceMap[currentAccount.address] || {
    amount: '0',
    expired: true,
    confirm_kas_amount: '0',
    pending_kas_amount: '0',
    outgoing: '0'
  };
}
async function useAccountEthBalance(address, networkType) {
  try {
    if (!ethers__WEBPACK_IMPORTED_MODULE_12__/* .isAddress */ .C2(address)) {
      throw new Error('Invalid Ethereum address');
    }
    const rpc = {
      [_shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Mainnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_10__/* .OPENAPI_RPC_MAINNET_L2 */ .Qj,
      [_shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Testnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_10__/* .OPENAPI_RPC_TESTNET_L2 */ .i8,
      [_shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .U5.Devnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_10__/* .OPENAPI_RPC_DEVNET_L2 */ .yb
    }[networkType] || '';
    const providerUrl = rpc;
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .cp3(providerUrl);
    const balanceWei = await web3.eth.getBalance(address);
    const balance = ethers__WEBPACK_IMPORTED_MODULE_13__/* .formatEther */ .UR(balanceWei);
    return {
      balance,
      balanceWei
    };
  } catch (error) {
    throw new Error("Failed to obtain the balance: ".concat(error instanceof Error ? error.message : 'Unknown erro'));
  }
}
function useAddressSummary() {
  const accountsState = useAccountsState();
  return accountsState.addressSummary;
}
function useAppSummary() {
  const accountsState = useAccountsState();
  return accountsState.appSummary;
}
function useUnreadAppSummary() {
  const accountsState = useAccountsState();
  const summary = accountsState.appSummary;
  return summary.apps.find(w => w.time && summary.readTabTime && w.time > summary.readTabTime);
}
function useReadTab() {
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  const appSummary = useAppSummary();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async name => {
    await wallet.readTab(name);
    if (name == 'app') {
      const appSummary = await wallet.getAppSummary();
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setAppSummary(appSummary));
    }
  }, [dispatch, wallet, appSummary]);
}
function useReadApp() {
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  const appSummary = useAppSummary();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    await wallet.readApp(id);
    const appSummary = await wallet.getAppSummary();
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setAppSummary(appSummary));
  }, [dispatch, wallet, appSummary]);
}
function useHistory() {
  const accountsState = useAccountsState();
  const address = useAccountAddress();
  return accountsState.historyMap[address] || {
    list: [],
    expired: true
  };
}
function useAccountAddress() {
  const currentAccount = useCurrentAccount();
  return currentAccount.address;
}
function useAccountAddressL2() {
  const currentAccount = useCurrentAccount();
  // const wallet = useWallet();
  // wallet.getCurrentAccount().then((res) => {
  //   console.log('log---', res)
  // })
  // const wallet = useWallet();
  // const [addressL2, setAddressL2] = useState('');

  // useEffect(() => {
  //   const fetchAddressL2 = async () => {
  //     try {
  //       const privateKey = await wallet.getPrivateKeyAny(currentAccount);
  //       const result = await eth_address(`0x${privateKey?.hex}`);
  //       setAddressL2(result.address || '');
  //     } catch (error) {
  //       console.error('address L2 error:', error);
  //       setAddressL2('');
  //     }
  //   };
  //   fetchAddressL2();
  // }, [wallet, currentAccount]);

  return currentAccount.addressL2;
  // return addressL2;
}
function useSetCurrentAccountCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(account => {
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setCurrent(account));
  }, [dispatch]);
}
function useUserPrivateKey() {
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const currentAccount = useCurrentAccount();
  const [privateKey, setPrivateKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const fetchPrivateKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const result = await wallet.getPrivateKeyAny(currentAccount);
      setPrivateKey(result);
    } catch (error) {
      console.log('error', error);
    }
  }, [currentAccount]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchPrivateKey();
  }, [currentAccount]);
  return {
    privateKey: privateKey
  };
}
function useImportAccountCallback() {
  const wallet = useWallet();
  const dispatch = useAppDispatch();
  const currentKeyring = useCurrentKeyring();
  return useCallback(async (privateKey, addressType) => {
    let success = false;
    let error;
    try {
      const alianName = await wallet.getNextAlianName(currentKeyring);
      await wallet.createKeyringWithPrivateKey(privateKey, addressType, alianName);
      const currentAccount = await wallet.getCurrentAccount();
      dispatch(accountActions.setCurrent(currentAccount));
      success = true;
    } catch (e) {
      console.log(e);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error = e.message;
    }
    return {
      success,
      error
    };
  }, [dispatch, wallet, currentKeyring]);
}
function useChangeAccountNameCallback() {
  const dispatch = useAppDispatch();
  const wallet = useWallet();
  const currentAccount = useCurrentAccount();
  return useCallback(async name => {
    await wallet.updateAlianName(currentAccount.pubkey, name);
    dispatch(accountActions.setCurrentAccountName(name));
  }, [dispatch, wallet, currentAccount]);
}
function useChangeAddressFlagCallback() {
  const dispatch = useAppDispatch();
  const wallet = useWallet();
  const currentAccount = useCurrentAccount();
  return useCallback(async (isAdd, flag) => {
    const account = isAdd ? await wallet.addAddressFlag(currentAccount, flag) : await wallet.removeAddressFlag(currentAccount, flag);
    dispatch(accountActions.setCurrentAddressFlag(account.flag));
  }, [dispatch, wallet, currentAccount]);
}
function useFetchHistoryCallback() {
  const dispatch = useAppDispatch();
  const wallet = useWallet();
  const address = useAccountAddress();
  return useCallback(async () => {
    const _accountHistory = await wallet.getAddressHistory(address);
    dispatch(accountActions.setHistory({
      address: address,
      list: _accountHistory
    }));
  }, [dispatch, wallet, address]);
}
function useFetchBalanceCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const currentAccount = useCurrentAccount();
  const balance = useAccountBalance();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (!currentAccount.address) return;
    const cachedBalance = await wallet.getAddressCacheBalance(currentAccount.address);
    const _accountBalance = await wallet.getAddressBalance(currentAccount.address);
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setBalance({
      address: currentAccount.address,
      amount: _accountBalance.amount,
      kas_amount: _accountBalance.kas_amount,
      confirm_kas_amount: _accountBalance.confirm_kas_amount,
      pending_kas_amount: _accountBalance.pending_kas_amount,
      outgoing: _accountBalance !== null && _accountBalance !== void 0 && _accountBalance.pending_kas_amount ? _accountBalance === null || _accountBalance === void 0 ? void 0 : _accountBalance.pending_kas_amount : '0'
    }));
    if (cachedBalance.amount !== _accountBalance.amount) {
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.expireHistory());
    }
    const summary = await wallet.getAddressSummary(currentAccount.address);
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setAddressSummary(summary));
  }, [dispatch, wallet, currentAccount, balance]);
}
function useFetchBalancesCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const accounts = useAccounts();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const addresses = accounts.map(item => item.address);
    if (!addresses || addresses.length == 0) return;
    const _accountsBalanceArray = await wallet.getAddressesBalance(addresses);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const balanceArray = [];
    for (let i = 0; i < _accountsBalanceArray.length; i++) {
      balanceArray.push({
        address: addresses[i],
        amount: _accountsBalanceArray[i].amount,
        kas_amount: _accountsBalanceArray[i].kas_amount,
        confirm_kas_amount: _accountsBalanceArray[i].confirm_kas_amount,
        pending_kas_amount: _accountsBalanceArray[i].pending_kas_amount
      });
    }
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setBalances(balanceArray));
  }, [dispatch, wallet, accounts]);
}
function useFetchKeyringsBalancesCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const keyrings = (0,_keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useKeyrings */ .C)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    for (let i = 0; i < keyrings.length; i++) {
      const addresses = keyrings[i].accounts.map(item => item.address);
      if (!addresses || addresses.length == 0) break;
      const _accountsBalanceArray = await wallet.getAddressesBalance(addresses);
      const balanceKas = _accountsBalanceArray.reduce((pre, cur) => pre + Number(cur === null || cur === void 0 ? void 0 : cur.amount), 0);
      dispatch(_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__/* .keyringsActions */ .IH.setKeyringBalanceKas({
        key: keyrings[i].key,
        balanceKas
      }));
    }
  }, [dispatch, wallet, keyrings]);
}
function useReloadAccounts() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const originalKeyrings = await wallet.getKeyrings();
    const keyrings = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.cloneDeep)(originalKeyrings);
    if (keyrings !== null && keyrings !== void 0 && keyrings.length) {
      await Promise.all(keyrings.map(async (keyring, i) => {
        var _keyring$accounts;
        if (keyring !== null && keyring !== void 0 && (_keyring$accounts = keyring.accounts) !== null && _keyring$accounts !== void 0 && _keyring$accounts.length) {
          const newAccounts = await Promise.all(keyring.accounts.map(async item => {
            if (!item.addressL2) {
              const privateKey = await wallet.getPrivateKeyAny(item);
              const result = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_8__/* .eth_address */ .SO)("0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
              return {
                ...item,
                addressL2: result.address || ''
              };
            } else {
              return item;
            }
          }));
          keyrings[i].accounts = newAccounts;
        }
      }));
    }
    dispatch(_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__/* .keyringsActions */ .IH.setKeyrings(keyrings));
    const currentKeyring = await wallet.getCurrentKeyring();
    dispatch(_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__/* .keyringsActions */ .IH.setCurrent(currentKeyring));
    const originalAccounts = await wallet.getAccounts();
    const _accounts = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.cloneDeep)(originalAccounts);
    if (_accounts !== null && _accounts !== void 0 && _accounts.length) {
      const updatedAccounts = await Promise.all(_accounts.map(async item => {
        if (!item.addressL2) {
          const privateKey = await wallet.getPrivateKeyAny(item);
          const result = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_8__/* .eth_address */ .SO)("0x".concat(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex));
          return {
            ...item,
            addressL2: result.address || ''
          };
        } else {
          return item;
        }
      }));
      for (let i = 0; i < _accounts.length; i++) {
        _accounts[i] = updatedAccounts[i];
      }
    }
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setAccounts(_accounts));
    const account = await wallet.getCurrentAccount();
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.setCurrent(account));
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .accountActions */ .M7.expireBalance());
    wallet.getWalletConfig().then(data => {
      dispatch(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__/* .settingsActions */ .eo.updateSettings({
        walletConfig: data
      }));
    });
  }, [dispatch, wallet]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M7: () => (/* binding */ accountActions),
/* harmony export */   cp: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22768);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43740);
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */



const initialAccount = {
  type: '',
  address: '',
  addressL2: '',
  brandName: '',
  alianName: '',
  displayBrandName: '',
  index: 0,
  balance: 0,
  pubkey: '',
  pubkeyL2: '',
  key: '',
  flag: 0
};
const initialState = {
  accounts: [],
  current: initialAccount,
  loading: false,
  balanceMap: {},
  historyMap: {},
  appSummary: {
    apps: []
  },
  addressSummary: {
    totalSompi: 0,
    kasSompi: 0,
    assetSompi: 0,
    loading: true
  },
  blueScore: 0,
  kasPrice: 0
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__/* .createSlice */ .is)({
  name: 'accounts',
  initialState,
  reducers: {
    pendingLogin(state) {
      state.loading = true;
    },
    setCurrent(state, action) {
      const {
        payload
      } = action;
      state.current = payload || initialAccount;
    },
    setAccounts(state, action) {
      const {
        payload
      } = action;
      state.accounts = payload;
    },
    setBalance(state, action) {
      const {
        payload: {
          address,
          amount,
          kas_amount,
          confirm_kas_amount,
          pending_kas_amount,
          outgoing
        }
      } = action;
      state.balanceMap[address] = state.balanceMap[address] || {
        amount: '0',
        kas_amount: '0',
        confirm_kas_amount: '0',
        pending_kas_amount: '0',
        outgoing: '0',
        expired: true
      };
      state.balanceMap[address].amount = amount;
      state.balanceMap[address].kas_amount = kas_amount;
      state.balanceMap[address].confirm_kas_amount = confirm_kas_amount;
      state.balanceMap[address].pending_kas_amount = pending_kas_amount;
      state.balanceMap[address].outgoing = outgoing ? outgoing : '0';
      state.balanceMap[address].expired = false;
    },
    setBalances(state, action) {
      const {
        payload
      } = action;
      for (let i = 0; i < payload.length; i++) {
        const address = payload[i].address;
        const amount = payload[i].amount;
        state.balanceMap[address] = state.balanceMap[address] || {
          amount: '0',
          kas_amount: '0',
          confirm_kas_amount: '0',
          pending_kas_amount: '0',
          outgoing: '0',
          expired: true
        };
        state.balanceMap[address].amount = amount;
        state.balanceMap[address].kas_amount = '0';
        state.balanceMap[address].confirm_kas_amount = '0';
        state.balanceMap[address].pending_kas_amount = '0';
        state.balanceMap[address].outgoing = '0';
        state.balanceMap[address].expired = false;
      }
    },
    setAddressSummary(state, action) {
      state.addressSummary = action.payload;
    },
    expireBalance(state) {
      const balance = state.balanceMap[state.current.address];
      if (balance) {
        balance.expired = true;
      }
    },
    setHistory(state, action) {
      const {
        payload: {
          address,
          list
        }
      } = action;
      state.historyMap[address] = state.historyMap[address] || {
        list: [],
        expired: true
      };
      state.historyMap[address].list = list;
      state.historyMap[address].expired = false;
    },
    expireHistory(state) {
      const history = state.historyMap[state.current.address];
      if (history) {
        history.expired = true;
      }
    },
    setCurrentAccountName(state, action) {
      const {
        payload
      } = action;
      state.current.alianName = payload;
      const account = state.accounts.find(v => v.address === state.current.address);
      if (account) {
        account.alianName = payload;
      }
    },
    setCurrentAddressFlag(state, action) {
      const {
        payload
      } = action;
      state.current.flag = payload;
      const account = state.accounts.find(v => v.address === state.current.address);
      if (account) {
        account.flag = payload;
      }
    },
    setAppSummary(state, action) {
      const {
        payload
      } = action;
      state.appSummary = payload;
    },
    setBlueScore(state, action) {
      const {
        payload
      } = action;
      state.blueScore = payload;
    },
    setKasPrice(state, action) {
      const {
        payload
      } = action;
      state.kasPrice = payload;
    },
    rejectLogin(state) {
      state.loading = false;
    },
    reset(state) {
      return initialState;
    },
    updateAccountName(state, action) {
      const account = action.payload;
      if (state.current.key === account.key) {
        state.current.alianName = account.alianName;
      }
      state.accounts.forEach(v => {
        if (v.key === account.key) {
          v.alianName = account.alianName;
        }
      });
    }
  },
  extraReducers: builder => {
    builder.addCase(_global_actions__WEBPACK_IMPORTED_MODULE_0__/* .updateVersion */ .y, state => {
      // todo
      if (!state.addressSummary) {
        state.addressSummary = {
          totalSompi: 0,
          kasSompi: 0,
          assetSompi: 0
        };
      }
    });
  }
});
const accountActions = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ }),

/***/ 63380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ AccountUpdater)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68640);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _global_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24456);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3204);
/* harmony import */ var _transactions_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37660);
/* harmony import */ var _transactions_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96900);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24468);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4600);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_transactions_hooks__WEBPACK_IMPORTED_MODULE_5__, _hooks__WEBPACK_IMPORTED_MODULE_7__]);
([_transactions_hooks__WEBPACK_IMPORTED_MODULE_5__, _hooks__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/no-empty-function */









function AccountUpdater() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const currentAccount = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentAccount */ ._A)();
  const isUnlocked = (0,_global_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useIsUnlocked */ .Yt)();
  const balance = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAccountBalance */ .Id)();
  const selfRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    preAccountKey: '',
    loadingBalance: false,
    loadingHistory: false
  });
  const self = selfRef.current;
  const reloadAccounts = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useReloadAccounts */ .KM)();
  const onCurrentChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (isUnlocked && currentAccount && currentAccount.key != self.preAccountKey) {
      self.preAccountKey = currentAccount.key;

      // setLoading(true);

      reloadAccounts();

      // setLoading(false);
    }
  }, [dispatch, currentAccount, wallet, isUnlocked]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onCurrentChange();
  }, [currentAccount && currentAccount.key, isUnlocked]);
  const fetchBalance = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useFetchBalanceCallback */ .Gk)();
  const fetchTxActivities = (0,_transactions_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFetchTxActivitiesCallback */ .sh)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (self.loadingBalance) {
      return;
    }
    if (!isUnlocked) {
      return;
    }
    if (!balance.expired) {
      return;
    }
    self.loadingBalance = true;
    fetchBalance().finally(() => {
      self.loadingBalance = false;
    });
  }, [fetchBalance, wallet, isUnlocked, self]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const accountChangeHandler = account => {
      if (account && account.address) {
        dispatch(_reducer__WEBPACK_IMPORTED_MODULE_8__/* .accountActions */ .M7.setCurrent(account));
      }
    };
    _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.addEventListener('accountsChanged', accountChangeHandler);
    _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.addEventListener('utxosChangedNotification', () => {
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_8__/* .accountActions */ .M7.expireBalance());
      dispatch(_transactions_reducer__WEBPACK_IMPORTED_MODULE_6__/* .transactionsActions */ .C4.setIncomingTx(true));
      setTimeout(() => {
        fetchTxActivities();
        console.log('utxosChangedNotification true');
      }, 15000);
    });
    _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.addEventListener('processor-balance-event', event => {
      var _event$balance, _event$balance2, _event$balance3;
      const amount = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sompiToKas */ .ch)((_event$balance = event.balance) === null || _event$balance === void 0 ? void 0 : _event$balance.mature);
      const pending = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sompiToKas */ .ch)((_event$balance2 = event.balance) === null || _event$balance2 === void 0 ? void 0 : _event$balance2.pending);
      const outgoing = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sompiToKas */ .ch)((_event$balance3 = event.balance) === null || _event$balance3 === void 0 ? void 0 : _event$balance3.outgoing);
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_8__/* .accountActions */ .M7.setBalance({
        address: currentAccount.address,
        amount: amount,
        kas_amount: amount,
        confirm_kas_amount: '0',
        pending_kas_amount: pending,
        outgoing
      }));
      wallet.expireUICachedData(currentAccount.address);
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_8__/* .accountActions */ .M7.expireHistory());
    });
    _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.addEventListener('eventbus-sink-blue-score-changed', event => {
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_8__/* .accountActions */ .M7.setBlueScore(event));
    });
    return () => {
      _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.removeEventListener('accountsChanged', accountChangeHandler);
      _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.removeEventListener('utxosChangedNotification', () => {
        // console.log('removed utxo changed');
      });
      _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.removeEventListener('processor-balance-event', () => {});
      _shared_eventBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c.removeEventListener('eventbus-sink-blue-score-changed', () => {});
      wallet.disconnectRpc();
    };
  }, [dispatch]);
  return null;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ updateVersion)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22768);


// fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage
const updateVersion = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .Uh)('global/updateVersion');

/***/ }),

/***/ 24456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SS: () => (/* binding */ useCreateAccountByPrivateKeyCallback),
/* harmony export */   UD: () => (/* binding */ useUnlockCallback),
/* harmony export */   Yt: () => (/* binding */ useIsUnlocked),
/* harmony export */   gb: () => (/* binding */ useCreateAccountCallback)
/* harmony export */ });
/* unused harmony exports useGlobalState, useTab, useSetTabCallback, useIsReady */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48818);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3204);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81068);




function useGlobalState() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(state => state.global);
}
function useTab() {
  const globalState = useGlobalState();
  return globalState.tab;
}
function useSetTabCallback() {
  const dispatch = useAppDispatch();
  return useCallback(tab => {
    dispatch(globalActions.update({
      tab
    }));
  }, [dispatch]);
}
function useIsUnlocked() {
  const globalState = useGlobalState();
  return globalState.isUnlocked;
}
function useIsReady() {
  const globalState = useGlobalState();
  return globalState.isReady;
}
function useUnlockCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .e6)();
  const [, resolveApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useApproval */ .kf)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async password => {
    await wallet.unlock(password);
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_3__/* .globalActions */ .Un.update({
      isUnlocked: true
    }));
    resolveApproval();
  }, [dispatch, wallet]);
}
function useCreateAccountCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .e6)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async function (mnemonics, hdPath, passphrase, addressType, accountCount) {
    let startIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    let scannedGroup = arguments.length > 6 ? arguments[6] : undefined;
    const activeIndexes = [];
    if (accountCount < 1) {
      // throw new Error(i18n.t('account count must be greater than 0'));
      throw new Error('account count must be greater than 0');
    } else if (accountCount == 1 && scannedGroup == undefined) {
      const activeIndexes = [startIndex];
      // await wallet.createKeyringWithMnemonics(mnemonics, hdPath, passphrase, addressType, accountCount, startIndex);
      await wallet.createKeyringWithMnemonics(mnemonics, hdPath, passphrase, addressType, activeIndexes);
    } else if (accountCount >= 1 && scannedGroup !== undefined) {
      const activeIndexes = [];
      const activeChangeIndexes = [];
      scannedGroup.dtype_arr.forEach(async (dType, i) => {
        // index_arr[i] = 1 + dtype + index
        if (dType == 0) {
          const str = scannedGroup.index_arr[i].toString();
          const index = str.substring(2);
          activeIndexes.push(Number(index));
        } else {
          const str = scannedGroup.index_arr[i].toString();
          const index = str.substring(2);
          activeChangeIndexes.push(Number(index));
        }
      });
      // activeIndexes = [0, 1, 3, 5, 7, 9]
      // activeChangeIndexes = [2, 4, 6, 8, 10]
      await wallet.createKeyringWithMnemonics(mnemonics, hdPath, passphrase, addressType, activeIndexes, activeChangeIndexes);
    } else {
      const activeIndexes = [];
      for (let i = startIndex; i < accountCount + startIndex; i++) {
        activeIndexes.push(i);
      }
      await wallet.createKeyringWithMnemonics(mnemonics, hdPath, passphrase, addressType, activeIndexes);
    }
    for (let i = startIndex; i < accountCount + startIndex; i++) {
      activeIndexes.push(i);
    }
    // await wallet.createKeyringWithMnemonics(mnemonics, hdPath, passphrase, addressType, accountCount, startIndex);
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_3__/* .globalActions */ .Un.update({
      isUnlocked: true
    }));
  }, [dispatch, wallet]);
}
function useCreateAccountByPrivateKeyCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .e6)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (privateKey, addressType) => {
    await wallet.createKeyringWithPrivateKey(privateKey, addressType);
    // await wallet.createKeyringWithMnemonics(mnemonics, hdPath, passphrase, addressType, accountCount, startIndex);
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_3__/* .globalActions */ .Un.update({
      isUnlocked: true
    }));
  }, [dispatch, wallet]);
}

/***/ }),

/***/ 81068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Un: () => (/* binding */ globalActions),
/* harmony export */   cp: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22768);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43740);
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */


const initialState = {
  tab: 'home',
  isUnlocked: false,
  isReady: false,
  isBooted: false
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__/* .createSlice */ .is)({
  name: 'global',
  initialState,
  reducers: {
    reset(state) {
      return initialState;
    },
    update(state, action) {
      const {
        payload
      } = action;
      state = Object.assign({}, state, payload);
      return state;
    }
  },
  extraReducers: builder => {
    builder.addCase(_global_actions__WEBPACK_IMPORTED_MODULE_0__/* .updateVersion */ .y, state => {
      // todo
    });
  }
});
const globalActions = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ }),

/***/ 3204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useAppDispatch),
/* harmony export */   C: () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54464);

const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .OY)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .w1;

/***/ }),

/***/ 11032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50551);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22768);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97620);
/* harmony import */ var _accounts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4600);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43740);
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81068);
/* harmony import */ var _keyrings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91588);
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34700);
/* harmony import */ var _transactions_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96900);









const PERSISTED_KEYS = ['settings'
// 'keyrings', 'accounts', 'global', 'transactions'
];
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__/* .configureStore */ .eS)({
  reducer: {
    accounts: _accounts_reducer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .cp,
    transactions: _transactions_reducer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .cp,
    settings: _settings_reducer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .cp,
    global: _global_reducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .cp,
    keyrings: _keyrings_reducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .cp
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: true
  }).concat((0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_0__/* .save */ .eI)({
    states: PERSISTED_KEYS,
    namespace: 'kaspa-wallet'
  })),
  preloadedState: (0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_0__/* .load */ .AJ)({
    states: PERSISTED_KEYS,
    disableWarnings: true,
    namespace: 'kaspa-wallet'
  }),
  devTools: true
});
store.dispatch((0,_global_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateVersion */ .y)());
(0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_8__/* .setupListeners */ .eE)(store.dispatch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ 60440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useKeyrings),
/* harmony export */   Ib: () => (/* binding */ useCurrentKeyring)
/* harmony export */ });
/* unused harmony export useKeyringsState */
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3204);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function useKeyringsState() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .C)(state => state.keyrings);
}
function useKeyrings() {
  const keyringsState = useKeyringsState();
  return keyringsState.keyrings;
}
function useCurrentKeyring() {
  const originalKeyringsState = useKeyringsState();
  const keyringsState = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(originalKeyringsState);
  // const wallet = useWallet();
  // keyringsState.current.accounts.forEach(async (item) => {
  //   const privateKey = await wallet.getPrivateKeyAny(item);
  //   const result = await eth_address(`0x${privateKey?.hex}`);
  //   item.addressL2 = result.address || '';
  // })
  return keyringsState.current;
}

/***/ }),

/***/ 91588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IH: () => (/* binding */ keyringsActions),
/* harmony export */   cp: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22768);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43740);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */



const initialKeyring = {
  key: '',
  index: 0,
  type: '',
  addressType: _shared_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111,
  accounts: [],
  alianName: '',
  hdPath: '',
  // kaspa amount
  balanceKas: 0
};
const initialState = {
  keyrings: [],
  current: initialKeyring
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__/* .createSlice */ .is)({
  name: 'keyrings',
  initialState,
  reducers: {
    setCurrent(state, action) {
      const {
        payload
      } = action;
      state.current = payload || initialKeyring;
    },
    setKeyrings(state, action) {
      const {
        payload
      } = action;
      state.keyrings = payload;
    },
    setKeyringBalanceKas(state, action) {
      const {
        payload
      } = action;
      for (let i = 0; i < state.keyrings.length; i++) {
        if (state.keyrings[i].key === payload.key) {
          state.keyrings[i].balanceKas = payload.balanceKas;
        }
      }
      if (state.current.key === payload.key) {
        state.current.balanceKas = payload.balanceKas;
      }
    },
    reset(state) {
      return initialState;
    },
    updateKeyringName(state, action) {
      const keyring = action.payload;
      if (state.current.key === keyring.key) {
        state.current.alianName = keyring.alianName;
      }
      state.keyrings.forEach(v => {
        if (v.key === keyring.key) {
          v.alianName = keyring.alianName;
        }
      });
    },
    updateAccountName(state, action) {
      const account = action.payload;
      state.current.accounts.forEach(v => {
        if (v.key === account.key) {
          v.alianName = account.alianName;
        }
      });
      state.keyrings.forEach(v => {
        v.accounts.forEach(w => {
          if (w.key === account.key) {
            w.alianName = account.alianName;
          }
        });
      });
    }
  },
  extraReducers: builder => {
    builder.addCase(_global_actions__WEBPACK_IMPORTED_MODULE_1__/* .updateVersion */ .y, state => {
      // todo
    });
  }
});
const keyringsActions = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ }),

/***/ 17534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Aq: () => (/* binding */ useBlockstreamUrl),
  kz: () => (/* binding */ useChangeLayerTypeCallback),
  et: () => (/* binding */ useChangeLocaleCallback),
  eo: () => (/* binding */ useChangeNetworkTypeCallback),
  k$: () => (/* binding */ useChangeRpcLinksCallback),
  wl: () => (/* binding */ useLayerType),
  y_: () => (/* binding */ useLocale),
  qS: () => (/* binding */ useNetworkType),
  Wq: () => (/* binding */ useRpcLinks),
  cb: () => (/* binding */ useSkipVersionCallback),
  sb: () => (/* binding */ useVersionInfo),
  SG: () => (/* binding */ useWalletConfig)
});

// UNUSED EXPORTS: useAddressType, useKaswareWebsite, useSettingsState, useTxIdUrl

// EXTERNAL MODULE: ./node_modules/.pnpm/compare-versions@4.1.4/node_modules/compare-versions/index.mjs
var compare_versions = __webpack_require__(61612);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/shared/constant/index.ts
var constant = __webpack_require__(46956);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(40256);
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(48818);
// EXTERNAL MODULE: ./node_modules/.pnpm/i18next@21.10.0/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(11960);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@11.18.6_i18next@21.10.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-i18next/dist/es/context.js + 1 modules
var context = __webpack_require__(82484);
// EXTERNAL MODULE: ./build/_raw/_locales/en/messages.json
var messages = __webpack_require__(32536);
;// CONCATENATED MODULE: ./src/ui/utils/i18n.ts



const fetchLocale = async locale => {
  const data = messages;
  return Object.keys(data).reduce((res, key) => {
    return {
      ...res,
      [key.replace(/__/g, ' ')]: data[key].message
    };
  }, {});
};
i18next/* default.use */.cp.use(context/* initReactI18next */.K2) // passes i18n down to react-i18next
.init({
  fallbackLng: 'en',
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
const I18N_NS = 'translations';
const addResourceBundle = async locale => {
  if (i18next/* default */.cp.hasResourceBundle(locale, I18N_NS)) return;
  const bundle = await fetchLocale(locale);
  i18next/* default */.cp.addResourceBundle(locale, 'translations', bundle);
};
addResourceBundle('en');
i18next/* default */.cp.on('languageChanged', function (lng) {
  addResourceBundle(lng);
});
/* harmony default export */ const i18n = (i18next/* default */.cp);
// EXTERNAL MODULE: ./src/ui/state/hooks.ts
var hooks = __webpack_require__(3204);
// EXTERNAL MODULE: ./src/ui/state/settings/reducer.ts
var reducer = __webpack_require__(34700);
;// CONCATENATED MODULE: ./src/ui/state/settings/hooks.ts
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */








function useSettingsState() {
  return (0,hooks/* useAppSelector */.C)(state => state.settings);
}
function useLocale() {
  const settings = useSettingsState();
  return settings.locale;
}
function useChangeLocaleCallback() {
  const dispatch = (0,hooks/* useAppDispatch */.A)();
  const wallet = (0,utils/* useWallet */.e6)();
  return (0,react.useCallback)(async locale => {
    await wallet.setLocale(locale);
    await addResourceBundle(locale);
    i18n.changeLanguage(locale);
    dispatch(reducer/* settingsActions */.eo.updateSettings({
      locale
    }));

    // window.location.reload();
  }, [dispatch, wallet]);
}
function useAddressType() {
  const accountsState = useSettingsState();
  return accountsState.addressType;
}
function useNetworkType() {
  const accountsState = useSettingsState();
  return accountsState.networkType;
}
function useRpcLinks() {
  const settings = useSettingsState();
  return settings.rpcLinks;
}
function useChangeNetworkTypeCallback() {
  const dispatch = (0,hooks/* useAppDispatch */.A)();
  const wallet = (0,utils/* useWallet */.e6)();
  return (0,react.useCallback)(async type => {
    await wallet.setNetworkType(type);
    dispatch(reducer/* settingsActions */.eo.updateSettings({
      networkType: type
    }));
  }, [dispatch]);
}
function useChangeRpcLinksCallback() {
  const dispatch = (0,hooks/* useAppDispatch */.A)();
  const wallet = (0,utils/* useWallet */.e6)();
  return (0,react.useCallback)(async type => {
    await wallet.setRpcLinks(type);
    dispatch(reducer/* settingsActions */.eo.updateSettings({
      rpcLinks: type
    }));
  }, [dispatch]);
}
function useBlockstreamUrl() {
  const networkType = useNetworkType();
  const currentLayer = useLayerType();
  if (currentLayer === 'L1') {
    if (networkType === types/* NetworkType */.U5.Mainnet) {
      return 'https://kas.fyi';
    } else {
      return 'https://explorer-tn10.kaspa.org';
    }
  }
  if (currentLayer === 'L2') {
    if (networkType === types/* NetworkType */.U5.Mainnet) {
      return constant/* OPENAPI_URL_MAINNET_L2 */.Qy;
    } else {
      return constant/* OPENAPI_URL_TESTNET_L2 */.E$;
    }
  }
}
function useTxIdUrl(txid) {
  const networkType = useNetworkType();
  if (networkType === NetworkType.Mainnet) {
    return "https://mempool.space/tx/".concat(txid);
  } else {
    return "https://mempool.space/testnet/tx/".concat(txid);
  }
}
function useKaswareWebsite() {
  const networkType = useNetworkType();
  if (networkType === NetworkType.Mainnet) {
    return 'https://kaspa.org';
  } else {
    return 'https://kaspa.org';
  }
}
function useWalletConfig() {
  const accountsState = useSettingsState();
  return accountsState.walletConfig;
}
function useVersionInfo() {
  const accountsState = useSettingsState();
  const walletConfig = accountsState.walletConfig;
  const newVersion = walletConfig.version;
  const skippedVersion = accountsState.skippedVersion;
  const currentVesion = constant/* VERSION */.j1;
  let skipped = false;
  let latestVersion = '';
  // skip if new version is empty
  if (!newVersion) {
    skipped = true;
  }

  // skip if skipped
  if (newVersion == skippedVersion) {
    skipped = true;
  }

  // skip if current version is greater or equal to new version
  if (newVersion) {
    if ((0,compare_versions/* default */.cp)(currentVesion, newVersion) >= 0) {
      skipped = true;
    } else {
      latestVersion = newVersion;
    }
  }

  // skip if current version is 0.0.0
  if (currentVesion === '0.0.0') {
    skipped = true;
  }
  return {
    currentVesion,
    newVersion,
    latestVersion,
    skipped
  };
}
function useSkipVersionCallback() {
  const wallet = (0,utils/* useWallet */.e6)();
  const dispatch = (0,hooks/* useAppDispatch */.A)();
  return (0,react.useCallback)(version => {
    wallet.setSkippedVersion(version).then(v => {
      dispatch(reducer/* settingsActions */.eo.updateSettings({
        skippedVersion: version
      }));
    });
  }, []);
}
function useLayerType() {
  const settings = useSettingsState();
  return settings.layerType;
}
function useChangeLayerTypeCallback() {
  const dispatch = (0,hooks/* useAppDispatch */.A)();
  const wallet = (0,utils/* useWallet */.e6)();
  return (0,react.useCallback)(async type => {
    await wallet.setLayer(type);
    dispatch(reducer/* settingsActions */.eo.updateSettings({
      layerType: type
    }));
  }, [dispatch]);
}

/***/ }),

/***/ 34700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cp: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   eo: () => (/* binding */ settingsActions)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22768);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46956);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43740);




const initialState = {
  locale: 'English',
  addressType: _shared_types__WEBPACK_IMPORTED_MODULE_0__/* .AddressType */ .im.KASPA_44_111111,
  networkType: _shared_types__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType */ .U5.Mainnet,
  rpcLinks: _shared_constant__WEBPACK_IMPORTED_MODULE_1__/* .NETWORK_TYPES */ .CY,
  walletConfig: {
    version: '',
    moonPayEnabled: false,
    statusMessage: ''
  },
  skippedVersion: '',
  layerType: _shared_types__WEBPACK_IMPORTED_MODULE_0__/* .LayerType */ .Y1.L1
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .createSlice */ .is)({
  name: 'settings',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    reset(state) {
      return initialState;
    },
    updateSettings(state, action) {
      const {
        payload
      } = action;
      state = Object.assign({}, state, payload);
      return state;
    }
  },
  extraReducers: builder => {
    builder.addCase(_global_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateVersion */ .y, state => {
      // todo
      if (!state.networkType) {
        state.networkType = _shared_types__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType */ .U5.Mainnet;
      }
    });
  }
});
const settingsActions = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ }),

/***/ 37660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lx: () => (/* binding */ useUtxos),
/* harmony export */   MJ: () => (/* binding */ useKaspaTx),
/* harmony export */   Se: () => (/* binding */ useSafeBalance),
/* harmony export */   Y5: () => (/* binding */ usePrepareSendKASCallback),
/* harmony export */   b3: () => (/* binding */ useFetchUtxosCallback),
/* harmony export */   cl: () => (/* binding */ usePushKaspaTxCallback),
/* harmony export */   sh: () => (/* binding */ useFetchTxActivitiesCallback),
/* harmony export */   wz: () => (/* binding */ useCurrentAddressTxs)
/* harmony export */ });
/* unused harmony exports useTransactionsState, useTxActivities, useIncomingTx */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23848);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24468);
/* harmony import */ var _accounts_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4600);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3204);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96900);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__]);
_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function useTransactionsState() {
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)(state => state.transactions);
}
function useKaspaTx() {
  const transactionsState = useTransactionsState();
  return transactionsState.kaspaTx;
}
function useCurrentAddressTxs() {
  const transactionsState = useTransactionsState();
  const fromAddress = (0,_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddress */ .mA)();
  console.log(transactionsState.nativeTxs);
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(transactionsState.nativeTxs)) {
    return [];
  } else {
    return transactionsState.nativeTxs.filter(item => item.to === fromAddress || item.from === fromAddress);
  }
}
function usePrepareSendKASCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const fromAddress = (0,_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddress */ .mA)();
  const utxos = useUtxos();
  const fetchUtxos = useFetchUtxosCallback();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async _ref => {
    let {
      toAddressInfo,
      // toAmount is sompi unit
      toAmount,
      feeRate,
      enableRBF
    } = _ref;
    let _utxos = utxos;
    if (_utxos.length === 0) {
      _utxos = await fetchUtxos();
    }
    const safeBalance = _utxos.reduce((pre, cur) => pre + Number(cur.amount), 0);
    if (safeBalance < toAmount) {
      throw new Error("Insufficient balance. Balance(".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sompiToAmount */ .ei)(safeBalance), " KAS) is lower than ").concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sompiToAmount */ .ei)(toAmount), " KAS "));
    }
    if (!feeRate) {
      const summary = await wallet.getFeeSummary();
      feeRate = summary.list[0].feeRate;
    }
    let psbtHex;
    if (safeBalance === toAmount) {
      psbtHex = await wallet.sendAllKAS({
        to: toAddressInfo.address,
        kasUtxos: _utxos,
        enableRBF,
        feeRate
      });
    } else {
      psbtHex = await wallet.sendKAS({
        to: toAddressInfo.address,
        amount: toAmount,
        kasUtxos: _utxos,
        enableRBF,
        feeRate
      });
      // psbtHex = result.psbtHex;
      // fee = result.fee;
    }
    const result = JSON.parse(psbtHex);
    const rawtx = psbtHex;
    const fee = result.fee;
    // const rawtx = psbt.extractTransaction().toHex();
    // const fee = psbt.getFee();
    // const rawtx = '0x1';
    // const rawtx = psbtHex;
    // const estimate = await psbtHex.estimate()
    // const fee = estimate.fees
    // psbtHex = '';
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .transactionsActions */ .C4.updateKaspaTx({
      rawtx,
      psbtHex,
      fromAddress,
      feeRate
    }));
    const rawTxInfo = {
      psbtHex,
      rawtx,
      toAddressInfo,
      fee
    };
    return rawTxInfo;
  }, [dispatch, wallet, fromAddress, utxos, fetchUtxos]);
}
function usePushKaspaTxCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__/* .useTools */ .w)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async rawtx => {
    const ret = {
      success: false,
      txid: '',
      error: ''
    };
    try {
      //tools.showLoading(true);
      const txid = await wallet.pushTx(rawtx);
      await (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sleep */ .W_)(3); // Wait for transaction synchronization
      tools.showLoading(false);
      dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .transactionsActions */ .C4.updateKaspaTx({
        txid
      }));
      dispatch(_accounts_reducer__WEBPACK_IMPORTED_MODULE_5__/* .accountActions */ .M7.expireBalance());
      setTimeout(() => {
        dispatch(_accounts_reducer__WEBPACK_IMPORTED_MODULE_5__/* .accountActions */ .M7.expireBalance());
      }, 2000);
      setTimeout(() => {
        dispatch(_accounts_reducer__WEBPACK_IMPORTED_MODULE_5__/* .accountActions */ .M7.expireBalance());
      }, 5000);
      ret.success = true;
      ret.txid = txid;
    } catch (e) {
      ret.error = e.message;
      tools.showLoading(false);
    }
    return ret;
  }, [dispatch, wallet]);
}
function useUtxos() {
  const transactionsState = useTransactionsState();
  return transactionsState.utxos;
}
function useTxActivities() {
  const transactionsState = useTransactionsState();
  return transactionsState.txActivities;
}
function useIncomingTx() {
  const transactionsState = useTransactionsState();
  return transactionsState.incomingTx;
}
function useFetchUtxosCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const account = (0,_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentAccount */ ._A)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const data = await wallet.getKASUtxos();
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .transactionsActions */ .C4.setUtxos(data));
    // dispatch(transactionsActions.setKasUtxos(kasUtxosStr));
    return data;
  }, [wallet, account]);
}
function useFetchTxActivitiesCallback() {
  const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .A)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const incomingTx = useIncomingTx();
  const account = (0,_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentAccount */ ._A)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const data = await wallet.getTxActivities();
    dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .transactionsActions */ .C4.setTxActivities(data));
    if (incomingTx) dispatch(_reducer__WEBPACK_IMPORTED_MODULE_7__/* .transactionsActions */ .C4.setIncomingTx(false));
    // dispatch(transactionsActions.setKasUtxos(kasUtxosStr));
    return data;
  }, [wallet, account]);
}
function useSafeBalance() {
  const utxos = useUtxos();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const sompi = utxos.reduce((agg, curr) => {
      return Number(curr.amount) + agg;
    }, 0);
    return (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .sompiToAmount */ .ei)(sompi);
  }, [utxos]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C4: () => (/* binding */ transactionsActions),
/* harmony export */   cp: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22768);
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43740);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */




const initialState = {
  kaspaTx: {
    fromAddress: '',
    toAddress: '',
    toSompi: 0,
    rawtx: '',
    txid: '',
    fee: 0,
    estimateFee: 0,
    changeSompi: 0,
    sending: false,
    autoAdjust: false,
    psbtHex: '',
    feeRate: 5,
    toDomain: ''
  },
  utxos: [],
  kasUtxos: '',
  txActivities: [],
  incomingTx: false,
  nativeTxs: []
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__/* .createSlice */ .is)({
  name: 'transactions',
  initialState,
  reducers: {
    updateKaspaTx(state, action) {
      const {
        payload
      } = action;
      state.kaspaTx = Object.assign({}, state.kaspaTx, payload);
    },
    setUtxos(state, action) {
      state.utxos = action.payload;
    },
    setTxActivities(state, action) {
      state.txActivities = action.payload;
    },
    setIncomingTx(state, action) {
      state.incomingTx = action.payload;
    },
    setKasUtxos(state, action) {
      state.kasUtxos = action.payload;
    },
    reset(state) {
      return initialState;
    },
    updateNativeTxs(state, _ref) {
      let {
        payload
      } = _ref;
      const {
        from,
        info
      } = payload;
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(state.nativeTxs)) {
        state.nativeTxs = [{
          ...info,
          from
        }];
      } else {
        state.nativeTxs = [{
          ...info,
          from
        }, ...state.nativeTxs];
      }
    }
  },
  extraReducers: builder => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    builder.addCase(_global_actions__WEBPACK_IMPORTED_MODULE_0__/* .updateVersion */ .y, state => {});
  }
});
const transactionsActions = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ }),

/***/ 98104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ colors)
/* harmony export */ });
// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  white: '#0A2463',
  white_muted: '#0A246365',
  black: '#FFF',
  black_muted: '#0A246350',
  black_muted2: '#0A246350',
  dark: '#1E283C',
  grey: '#495361',
  light: '#A2A4AA',
  black_dark: '#197BE4',
  green_dark: '#379a29',
  green: '#0BE4AB',
  green_light: '#5ec04f',
  yellow_dark: '#d5ac00',
  yellow: 'rgb(253,224,71)',
  yellow_light: '#fcd226',
  red_dark: '#c92b40',
  red: '#F33B79',
  red_light: '#f05266',
  red_lucency_65: 'rgb(243,59,121,0.65)',
  blue_dark: '#1461d1',
  blue: '#1872F6',
  blue_light: '#c6dcfd',
  orange_dark: '#d9691c',
  orange: '#FF7B21',
  orange_light: '#ff8f42',
  gold: '#eac249',
  aqua_dark: '#339999',
  aqua: '#48e3c5',
  aqua_light: '#adfff3'
};
const colors = Object.assign({}, palette, {
  transparent: 'rgba(0, 0, 0, 0)',
  text: '#0A2463',
  textDim: '#0A246365',
  background: '#FFF',
  error: '#e52937',
  danger: palette.red,
  card: '#0A246365',
  warning: palette.orange,
  primary: '#0A2463',
  bg2: '#FFF',
  bg3: '#0A246365',
  bg4: '#0A246365',
  border: 'rgba(0,0,0,0.1)',
  icon_yellow: '#FFBA33',
  text_minor: 'rgba(10, 36, 99, 0.65)',
  white_minor: 'rgba(10,36,99,0.65)',
  blue: '#0BE4AB'
});

/***/ }),

/***/ 69508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ fontSizes)
/* harmony export */ });
const fontSizes = {
  xxxl: 48,
  xxl: 24,
  xl: 20,
  lg: 18,
  md: 16,
  sm: 14,
  xs: 12,
  xxs: 10,
  banner: 30,
  title: 26,
  tiny: 14,
  tinyShort: 12,
  logo: 32,
  icon: 14,
  iconMiddle: 20,
  iconLarge: 32
};

/***/ }),

/***/ 15088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23616);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76440);

// A custom theme for this app
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c)({
  cssVariables: true,
  palette: {
    primary: {
      main: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* .darken */ .sP)('#02DDA4', 0.1),
      contrastText: '#000'
    },
    secondary: {
      main: '#29FAC4',
      contrastText: '#000'
    },
    error: {
      main: '#F33B79',
      contrastText: '#FFF'
    },
    success: {
      main: '#0BE4AB',
      contrastText: '#FFF'
    },
    text: {
      primary: '#0A2463',
      secondary: '#0A246365'
    },
    info: {
      main: '#0A2463'
    },
    background: {
      default: '#FFF',
      paper: 'rgba(10, 36, 99, 0.03)'
    },
    action: {
      disabledOpacity: 0.5,
      disabled: '#0A2463'
    }
  },
  typography: {
    fontFamily: 'Inter-Regular, Inter, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '32px'
    },
    h2: {
      fontSize: '28px'
    },
    h3: {
      fontSize: '24px'
    },
    h4: {
      fontSize: '20px'
    },
    h5: {
      fontSize: '18px'
    },
    h6: {
      fontSize: '16px'
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 400
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter-Regular, Inter, Arial, sans-serif'
        }
      },
      defaultProps: {
        variantMapping: {
          body1: 'div',
          body2: 'div'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: '#F5F5F5',
          fontFamily: 'Inter-Regular, Inter, Arial, sans-serif'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '3px 3px 12px rgba(0,0,0, 0.2)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '40px',
          fontFamily: 'Inter-Regular, Inter, Arial, sans-serif'
        },
        containedPrimary: {
          background: 'linear-gradient(to right, #29FAC4, #02DDA4)',
          color: '#000 !important'
        },
        sizeLarge: {
          height: 56
        },
        sizeSmall: {
          height: 32
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          height: 56
        },
        sizeSmall: {
          height: 40
        },
        multiline: {
          height: 'auto',
          borderRadius: '8px'
        }
      }
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 67148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KK: () => (/* binding */ sizes),
/* harmony export */   YN: () => (/* binding */ spacingGap),
/* harmony export */   k5: () => (/* binding */ spacing)
/* harmony export */ });
/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
const spacing = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64
};
const spacingGap = {
  xxl: 40,
  xl: 20,
  lg: 12,
  md: 8,
  sm: 4,
  xs: 2,
  zero: 0
};
const sizes = {
  qrcode: 180
};

/***/ }),

/***/ 48818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ek: () => (/* reexport */ WalletProvider),
  s1: () => (/* binding */ amountToSompi),
  ye: () => (/* binding */ copyToClipboard),
  iy: () => (/* reexport */ parse/* formatNumber */.iy),
  wX: () => (/* binding */ generateHdPath),
  K2: () => (/* binding */ getPasswordFromApp),
  Ad: () => (/* binding */ getUiType),
  Fd: () => (/* binding */ handleTransactions),
  Mv: () => (/* binding */ handleTransactionsAddresses),
  AL: () => (/* reexport */ mathUtils/* isGreaterThan */.AL),
  g5: () => (/* reexport */ parse/* isNumeric */.g5),
  Up: () => (/* binding */ isValidAddress),
  I3: () => (/* binding */ isValidEthereumAddress),
  ey: () => (/* binding */ isValidWalletAddress),
  lc: () => (/* binding */ openUrlLink),
  hH: () => (/* reexport */ parse/* parseTokenBalance */.hH),
  _s: () => (/* reexport */ parse/* parseUnits */._s),
  ec: () => (/* binding */ readClipboard),
  SO: () => (/* binding */ shortAddress),
  U1: () => (/* binding */ shortDesc),
  W_: () => (/* binding */ sleep),
  ei: () => (/* binding */ sompiToAmount),
  KK: () => (/* binding */ sompiToKAS),
  ch: () => (/* binding */ sompiToKas),
  g7: () => (/* reexport */ mathUtils/* times */.g7),
  oN: () => (/* binding */ updatePasswordToApp),
  kf: () => (/* reexport */ useApproval),
  l1: () => (/* binding */ useLocationState),
  e6: () => (/* reexport */ useWallet),
  Qf: () => (/* reexport */ useWalletRequest),
  CA: () => (/* binding */ validateERC20Token)
});

// UNUSED EXPORTS: abs, bigIntMulDiv, bigIntMulDiv2, bigintCeilDiv, ceilDiv, div, ellipsisOverflowedText, floorDiv, formatDate, formatDecimalPlaces, getERCBalance, getOriginName, getUITypeName, hashCode, hex2Text, isApp, isEqualTo, isGreaterThanOrEqual, isLessThan, isLessThanOrEqualTo, isNegative, isPositive, isZero, minBigint, minus, mod, mulDiv, neg, plus, rest_api_url, sendErc20, solveQuadraticEquation, toDecimalPlaces, useHover, useSelectOption

// EXTERNAL MODULE: ./src/shared/constant/index.ts
var constant = __webpack_require__(46956);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(40256);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(32496);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.22.0_react@18.2.0/node_modules/react-router/dist/index.js
var dist = __webpack_require__(33220);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/utils/WalletContext.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */


const WalletContext = /*#__PURE__*/(0,react.createContext)(null);
const WalletProvider = _ref => {
  let {
    children,
    wallet
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(WalletContext.Provider, {
    value: {
      wallet
    },
    children: children
  });
};
const useWallet = () => {
  const {
    wallet
  } = (0,react.useContext)(WalletContext);
  return wallet;
};

;// CONCATENATED MODULE: ./src/ui/utils/hooks.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */




const useApproval = () => {
  const wallet = useWallet();
  const navigate = (0,dist/* useNavigate */.i6)();
  const getApproval = wallet.getApproval;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resolveApproval = async function (data) {
    let stay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let forceReject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const approval = await getApproval();
    if (approval) {
      wallet.resolveApproval(data, forceReject);
    }
    if (stay) {
      return;
    }
    setTimeout(() => {
      navigate('/');
    });
  };
  const rejectApproval = async function (err) {
    let stay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const approval = await getApproval();
    if (approval) {
      await wallet.rejectApproval(err, stay, isInternal);
    }
    if (!stay) {
      navigate('/');
    }
  };
  (0,react.useEffect)(() => {
    if (!getUiType().isNotification) {
      return;
    }
    window.addEventListener('beforeunload', rejectApproval);
    return () => window.removeEventListener('beforeunload', rejectApproval);
  }, []);
  return [getApproval, resolveApproval, rejectApproval];
};
const useSelectOption = _ref => {
  let {
    options,
    defaultValue = [],
    onChange,
    value
  } = _ref;
  const isControlled = useRef(typeof value !== 'undefined').current;
  const [idxs, setChoosedIdxs] = useState((isControlled ? value : defaultValue).map(x => options.indexOf(x)));
  useEffect(() => {
    if (!isControlled) {
      return;
    }

    // shallow compare
    if (value && idxs.some((x, i) => options[x] != value[i])) {
      setChoosedIdxs(value.map(x => options.indexOf(x)));
    }
  }, [value]);
  const changeValue = idxs => {
    setChoosedIdxs([...idxs]);
    onChange && onChange(idxs.map(o => options[o]));
  };
  const handleRemove = i => {
    idxs.splice(i, 1);
    changeValue(idxs);
  };
  const handleChoose = i => {
    if (idxs.includes(i)) {
      return;
    }
    idxs.push(i);
    changeValue(idxs);
  };
  const handleToggle = i => {
    const inIdxs = idxs.indexOf(i);
    if (inIdxs !== -1) {
      handleRemove(inIdxs);
    } else {
      handleChoose(i);
    }
  };
  const handleClear = () => {
    changeValue([]);
  };
  return [idxs.map(o => options[o]), handleRemove, handleChoose, handleToggle, handleClear, idxs];
};
const useWalletRequest = (requestFn, _ref2) => {
  let {
    onSuccess,
    onError
  } = _ref2;
  const mounted = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  const [loading, setLoading] = (0,react.useState)(false);
  const [res, setRes] = (0,react.useState)();
  const [err, setErr] = (0,react.useState)();
  const run = async function () {
    setLoading(true);
    try {
      const _res = await Promise.resolve(requestFn(...arguments));
      if (!mounted.current) {
        return;
      }
      setRes(_res);
      onSuccess && onSuccess(_res);
    } catch (err) {
      if (!mounted.current) {
        return;
      }
      setErr(err);
      onError && onError(err);
    } finally {
      if (mounted.current) {
        setLoading(false);
      }
    }
  };
  return [run, loading, res, err];
};
const useHover = function () {
  let {
    mouseEnterDelayMS = 0,
    mouseLeaveDelayMS = 0
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const [isHovering, setIsHovering] = useState(false);
  let mouseEnterTimer;
  let mouseOutTimer;
  return [isHovering, {
    onMouseEnter: () => {
      clearTimeout(mouseOutTimer);
      mouseEnterTimer = window.setTimeout(() => setIsHovering(true), mouseEnterDelayMS);
    },
    onMouseLeave: () => {
      clearTimeout(mouseEnterTimer);
      mouseOutTimer = window.setTimeout(() => setIsHovering(false), mouseLeaveDelayMS);
    }
  }];
};
// EXTERNAL MODULE: ./src/ui/utils/parse.ts
var parse = __webpack_require__(22920);
// EXTERNAL MODULE: ./src/ui/utils/mathUtils.ts
var mathUtils = __webpack_require__(39280);
;// CONCATENATED MODULE: ./src/ui/utils/index.ts









const UI_TYPE = {
  Tab: 'index',
  Pop: 'popup',
  Notification: 'notification'
};
const getUiType = () => {
  const {
    pathname
  } = window.location;
  return Object.entries(UI_TYPE).reduce((m, _ref) => {
    let [key, value] = _ref;
    m["is".concat(key)] = pathname === "/".concat(value, ".html");
    return m;
  }, {});
};
const hex2Text = hex => {
  try {
    return hex.startsWith('0x') ? decodeURIComponent(hex.replace(/^0x/, '').replace(/[0-9a-f]{2}/g, '%$&')) : hex;
  } catch {
    return hex;
  }
};
const getUITypeName = () => {
  // need to refact
  const UIType = getUiType();
  if (UIType.isPop) return 'popup';
  if (UIType.isNotification) return 'notification';
  if (UIType.isTab) return 'tab';
  return '';
};

/**
 *
 * @param origin (exchange.pancakeswap.finance)
 * @returns (pancakeswap)
 */
const getOriginName = origin => {
  const matches = origin.replace(/https?:\/\//, '').match(/^([^.]+\.)?(\S+)\./);
  return matches ? matches[2] || origin : origin;
};
const hashCode = str => {
  if (!str) return 0;
  let hash = 0,
    i,
    chr,
    len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
const ellipsisOverflowedText = function (str) {
  let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  let removeLastComma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (str.length <= length) return str;
  let cut = str.substring(0, length);
  if (removeLastComma) {
    if (cut.endsWith(',')) {
      cut = cut.substring(0, length - 1);
    }
  }
  return "".concat(cut, "...");
};
const sompiToKAS = amount => {
  return amount / 100000000;
};
function shortAddress(address) {
  let len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  if (!address) return '';
  if (address.length <= len * 2) return address;
  return address.slice(0, len + 2) + '...' + address.slice(address.length - len);
}
function shortDesc(desc) {
  let len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  if (!desc) return '';
  if (desc.length <= len) return desc;
  return desc.slice(0, len) + '...';
}
async function sleep(timeSec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, timeSec * 1000);
  });
}
function isValidAddress(address) {
  if (!address) return false;
  return true;
}
const copyToClipboard = textToCopy => {
  if (isApp()) {
    const {
      NativeCallbacks
    } = window;
    return new Promise((res, rej) => {
      const params = {
        action: 'openCopyText',
        payload: {
          textToCopy
        },
        success: () => {
          res(null);
        },
        fail: data => {
          rej();
        }
      };
      NativeCallbacks === null || NativeCallbacks === void 0 ? void 0 : NativeCallbacks.register(params);
    });
  }
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(textToCopy.toString());
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy.toString();
    textArea.style.position = 'absolute';
    textArea.style.opacity = '0';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
    });
  }
};
const readClipboard = async () => {
  if (isApp()) {
    const {
      NativeCallbacks
    } = window;
    return new Promise((res, rej) => {
      const params = {
        action: 'readPasteText',
        payload: {},
        success: data => {
          res(data.text);
        },
        fail: data => {
          rej(data.text);
        }
      };
      NativeCallbacks === null || NativeCallbacks === void 0 ? void 0 : NativeCallbacks.register(params);
    });
  }
  // 如果是浏览器环境，使用 Clipboard API
  // 需要在安全上下文中使用（如 HTTPS 或 localhost）
  if (navigator.clipboard && window.isSecureContext) {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (error) {
      console.error('Failed to read clipboard contents: ', error);
      return '';
    }
  } else {
    console.error('无法读取剪贴板内容:');
    return '';
  }
};
function formatDate(date) {
  let fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, "".concat(date.getFullYear()).substr(4 - RegExp.$1.length));
  for (const k in o) if (new RegExp("(".concat(k, ")")).test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length));
  return fmt;
}
function sompiToAmount(val) {
  let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  const num = new bignumber/* default */.c(val);
  return num.dividedBy(10 ** decimals).toString();
}
function sompiToKas(val) {
  if (val === undefined) return '0';
  const num = Number(val);
  return (num / 100000000).toString();
}
function amountToSompi(val) {
  const num = new bignumber/* default */.c(val);
  return num.multipliedBy(100000000).toNumber();
}
function useLocationState() {
  const {
    state
  } = (0,dist/* useLocation */.IT)();
  return state;
}
function handleTransactions(data, address) {
  const transactionInfos = [];
  for (let i = 0; i < data.length; i++) {
    let mode = '';
    const isAccepted = data[i].is_accepted;
    let amount = '0';
    let usdValue = '0';
    const block_time = data[i].block_time;
    const transaction_id = data[i].transaction_id;
    const item = data[i];
    let inputAmountSelf = 0;
    let inputAmountOther = 0;
    let outputAmountSelf = 0;
    let outputAmountOther = 0;
    item.inputs.map(e => {
      if (e.previous_outpoint_address == address) {
        inputAmountSelf = e.previous_outpoint_amount + inputAmountSelf;
      } else {
        inputAmountOther = e.previous_outpoint_amount + inputAmountOther;
      }
    });
    item.outputs.map(e => {
      if (e.script_public_key_address == address) {
        outputAmountSelf = e.amount + outputAmountSelf;
      } else {
        outputAmountOther = e.amount + outputAmountOther;
      }
    });
    if (inputAmountSelf == 0) {
      mode = 'Receive';
      amount = sompiToAmount(outputAmountSelf).replace(/\.0+$/, '');
      usdValue = amount;
    } else if (inputAmountSelf - outputAmountSelf >= 0) {
      mode = 'Send';
      amount = sompiToAmount(inputAmountSelf - outputAmountSelf).replace(/\.0+$/, '');
      usdValue = amount;
    } else if (inputAmountSelf - outputAmountSelf < 0) {
      mode = 'Receive';
      amount = sompiToAmount(outputAmountSelf - inputAmountSelf).replace(/\.0+$/, '');
      usdValue = amount;
    }
    transactionInfos.push({
      mode,
      isAccepted,
      amount,
      usdValue,
      block_time,
      transaction_id,
      txDetail: data[i]
    });
  }
  return transactionInfos;
}
function handleTransactionsAddresses(data, address) {
  const transactionInfos = [];
  for (let i = 0; i < data.length; i++) {
    let mode = '';
    const block_time = data[i].block_time;
    const transaction_id = data[i].transaction_id;
    const item = data[i];
    let inputAmountSelf = 0;
    let inputAmountOther = 0;
    let outputAmountSelf = 0;
    let outputAmountOther = 0;
    const relatedAddresses = [];
    item.inputs.map(e => {
      if (e.previous_outpoint_address == address) {
        inputAmountSelf = e.previous_outpoint_amount + inputAmountSelf;
      } else {
        inputAmountOther = e.previous_outpoint_amount + inputAmountOther;
      }
    });
    item.outputs.map(e => {
      if (e.script_public_key_address == address) {
        outputAmountSelf = e.amount + outputAmountSelf;
      } else {
        outputAmountOther = e.amount + outputAmountOther;
      }
    });
    if (inputAmountSelf == 0) {
      mode = 'Receive';
      item.inputs.map(e => {
        if (e.previous_outpoint_address != address) {
          relatedAddresses.push(e.previous_outpoint_address);
        }
      });
    } else {
      mode = 'Send';
      item.outputs.map(e => {
        if (e.script_public_key_address != address) {
          relatedAddresses.push(e.script_public_key_address);
        }
      });
    }
    transactionInfos.push({
      mode,
      block_time,
      transaction_id,
      relatedAddresses
    });
  }
  return transactionInfos;
}
const generateHdPath = (hdPath, dType, index) => {
  // eslint-disable-next-line quotes
  if (hdPath == "m/44'/972/0'") {
    // m/44'/972/0'/0'/0'
    // eslint-disable-next-line quotes
    return hdPath + '/' + dType + "'/" + index + "'";
  } else {
    // m/44'/111111'/0'/0/0
    return hdPath + '/' + dType + '/' + index;
  }
};
const isValidWalletAddress = address => {
  // 以kaspatest:开头 后面61位数字或英文字符
  return /^kaspatest:([0-9a-zA-Z]{61})$/.test(address);
};
const isApp = () => {
  // return window.location.href.indexOf('app=') > -1;
  // navigator.userAgent.includes('ReactNative') || navigator.userAgent.includes('uni-app')
  if (window.ReactNativeWebView) {
    console.log('页面嵌套在 React Native 或 UniApp 的 WebView 中');
    return true;
  } else {
    console.log('页面不是嵌套在 React Native 或 UniApp 的 WebView 中');
    return false;
  }
};
const openUrlLink = function (url) {
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_blank';
  if (isApp()) {
    const {
      NativeCallbacks
    } = window;
    // app
    const params = {
      action: 'openBrowser',
      payload: {
        url
      },
      success: () => {
        console.log('success');
      },
      fail: data => {
        console.log('fail', data.result);
      }
    };
    return NativeCallbacks === null || NativeCallbacks === void 0 ? void 0 : NativeCallbacks.register(params);
  }
  window.open(url, target);
};
const isValidEthereumAddress = address => {
  // 检查是否是有效的以太坊地址格式
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};
const ERC20_ABI = (/* unused pure expression or super */ null && (["function name() view returns (string)", "function symbol() view returns (string)", "function decimals() view returns (uint8)", "function balanceOf(address owner) view returns (uint256)", "function transfer(address recipient, uint256 amount) returns (bool)"]));
const validateERC20Token = async (tokenAddress, networkType) => {
  const rpc = {
    [types/* NetworkType */.U5.Mainnet]: constant/* OPENAPI_RPC_MAINNET_L2 */.Qj,
    [types/* NetworkType */.U5.Testnet]: constant/* OPENAPI_RPC_TESTNET_L2 */.i8,
    [types/* NetworkType */.U5.Devnet]: constant/* OPENAPI_RPC_DEVNET_L2 */.yb
  }[networkType] || '';
  try {
    const baseUrl = networkType === types/* NetworkType */.U5.Mainnet ? constant/* OPENAPI_URL_MAINNET_L2 */.Qy : networkType === types/* NetworkType */.U5.Testnet ? constant/* OPENAPI_URL_TESTNET_L2 */.E$ : constant/* OPENAPI_URL_DEVNET_L2 */.MZ;
    const response = await fetch("".concat(baseUrl, "/api/v2/tokens/").concat(tokenAddress));
    const data = await response.json();
    console.log('data', data);
    return {
      isValid: true,
      symbol: data.symbol || '',
      decimals: Number(data.decimals)
    };
  } catch (error) {
    console.error("Error validating token:", error);
    throw {
      isValid: false,
      message: "Invalid address"
    };
  }
};
const getERCBalance = async (tokenAddress, address, networkType) => {
  const rpc = {
    [NetworkType.Mainnet]: OPENAPI_RPC_MAINNET_L2,
    [NetworkType.Testnet]: OPENAPI_RPC_TESTNET_L2,
    [NetworkType.Devnet]: OPENAPI_RPC_DEVNET_L2
  }[networkType] || '';
  const provider = new ethers.JsonRpcProvider(rpc);
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  return tokenContract.balanceOf(address); // address
};
const sendErc20 = async (networkType, toAddress, amount, tokenAddress, privateKey) => {
  const rpc = {
    [NetworkType.Mainnet]: OPENAPI_RPC_MAINNET_L2,
    [NetworkType.Testnet]: OPENAPI_RPC_TESTNET_L2,
    [NetworkType.Devnet]: OPENAPI_RPC_DEVNET_L2
  }[networkType] || '';
  const provider = new ethers.JsonRpcProvider(rpc);
  const wallet = new ethers.Wallet(privateKey, provider);
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, wallet);

  // 调用 transfer 方法
  const tx = await tokenContract.transfer(toAddress, amount);

  // 等待交易确认
  const receipt = await tx.wait();
  console.log("Transaction receipt:", receipt);
  return receipt;
};

// 向app更新密码
const updatePasswordToApp = async password => {
  if (isApp()) {
    const {
      NativeCallbacks
    } = window;
    localStorage.setItem("app-save-password", password);
    const params = {
      action: 'updatePasswordToApp',
      payload: {
        password
      },
      success: () => {
        console.log('success');
      },
      fail: data => {
        console.log('fail', data.result);
      }
    };
    NativeCallbacks === null || NativeCallbacks === void 0 ? void 0 : NativeCallbacks.register(params);
  }
};
const getPasswordFromApp = () => {
  if (isApp()) {
    return localStorage.getItem("app-save-password");
  }
};

/***/ }),

/***/ 39280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AL: () => (/* binding */ isGreaterThan),
/* harmony export */   W4: () => (/* binding */ minus),
/* harmony export */   g7: () => (/* binding */ times),
/* harmony export */   qo: () => (/* binding */ toDecimalPlaces)
/* harmony export */ });
/* unused harmony exports plus, div, abs, neg, mod, isGreaterThanOrEqual, isLessThan, isLessThanOrEqualTo, isEqualTo, isZero, isPositive, isNegative, mulDiv, bigIntMulDiv, bigIntMulDiv2, ceilDiv, bigintCeilDiv, floorDiv, minBigint, solveQuadraticEquation, formatDecimalPlaces */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32496);
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22920);


const DEFAULT_PRECISION = 6;
function plus(value1, value2) {
  // if (import.meta.env.MODE === Env.production) {
  if (!isNumeric(value1) || !isNumeric(value2)) return '0';
  // }
  return new Decimal(value1).plus(value2).toString();
}
function minus(value1, value2) {
  // if (import.meta.env.MODE === Env.production) {
  if (!(0,_parse__WEBPACK_IMPORTED_MODULE_1__/* .isNumeric */ .g5)(value1) || !(0,_parse__WEBPACK_IMPORTED_MODULE_1__/* .isNumeric */ .g5)(value2)) return '0';
  // }
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value1).minus(value2).toString();
}
function times(value1, value2) {
  // if (import.meta.env.MODE === Env.production) {
  if (!(0,_parse__WEBPACK_IMPORTED_MODULE_1__/* .isNumeric */ .g5)(value1) || !(0,_parse__WEBPACK_IMPORTED_MODULE_1__/* .isNumeric */ .g5)(value2)) return '0';
  // }
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value1).times(value2).toString();
}
function div(value1, value2) {
  // if (import.meta.env.MODE === Env.production) {
  if (!isNumeric(value1) || !isNumeric(value2)) return '0';
  // }
  return new Decimal(value1).div(value2).toString();
}
function abs(value) {
  if (!isNumeric(value)) return '0';
  return new Decimal(value).abs().toString();
}
function neg(value) {
  if (!isNumeric(value)) return '0';
  return new Decimal(value).isNegative().toString();
}
function mod(value1, value2) {
  // if (import.meta.env.MODE === Env.production) {
  if (!isNumeric(value1) || !isNumeric(value2)) return '0';
  // }
  return new Decimal(value1).mod(value2).toString();
}
function isGreaterThan(value1, value2) {
  if (!(0,_parse__WEBPACK_IMPORTED_MODULE_1__/* .isNumeric */ .g5)(value1) || !(0,_parse__WEBPACK_IMPORTED_MODULE_1__/* .isNumeric */ .g5)(value2)) return false;
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value1).gt(value2);
}
function isGreaterThanOrEqual(value1, value2) {
  if (!isNumeric(value1) || !isNumeric(value2)) return false;
  return new Decimal(value1).gte(value2);
}
function isLessThan(value1, value2) {
  if (!isNumeric(value1) || !isNumeric(value2)) return false;
  return new Decimal(value1).lt(value2);
}
function isLessThanOrEqualTo(value1, value2) {
  if (!isNumeric(value1) || !isNumeric(value2)) return false;
  return new Decimal(value1).lte(value2);
}
function isEqualTo(value1, value2) {
  if (!isNumeric(value1) || !isNumeric(value2)) return false;
  return new Decimal(value1).eq(value2);
}
function isZero(value) {
  if (value === undefined) {
    return false;
  }
  try {
    return new Decimal(value).isZero();
  } catch {
    return false;
  }
}
function isPositive(value) {
  if (value === undefined) {
    return false;
  }
  if (!isNumeric(value)) {
    return false;
  }
  try {
    return new Decimal(value).gt(0);
  } catch {
    return false;
  }
}
function isNegative(value) {
  if (value === undefined) {
    return false;
  }
  try {
    return new Decimal(value).isNegative();
  } catch {
    return false;
  }
}
function mulDiv(a, b, c) {
  let roundingMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Decimal.ROUND_DOWN;
  let precision = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return new Decimal(a).times(b).div(c).toFixed(precision, roundingMode);
}
function bigIntMulDiv(x, y, denominator, ceil) {
  let result = x * y / denominator;
  if (ceil && x * y % denominator !== 0n) result += 1n;
  return result;
}
function bigIntMulDiv2(x, y, denominator) {
  const down = x * y / denominator;
  let up = down;
  if (x * y % denominator !== 0n) up += 1n;
  return {
    down,
    up
  };
}
function ceilDiv(a, b) {
  let precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return new Decimal(a).div(b).toFixed(precision, Decimal.ROUND_UP).toString();
}
function bigintCeilDiv(a, b) {
  const result = a / b;
  return result * b < a ? result + 1n : result;
}
function floorDiv(a, b) {
  let precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return new Decimal(a).div(b).toFixed(precision, Decimal.ROUND_DOWN).toString();
}
function minBigint(a, b) {
  return BigInt(Math.min(Number(a), Number(b)));
}
function solveQuadraticEquation(a, b, c) {
  // b^2 - 4ac
  const discriminant = minus(times(b, b), times(4, times(a, c)));
  if (isGreaterThan(discriminant, 0)) {
    const x1 = div(plus(-b, new Decimal(discriminant).sqrt()), times(2, a));
    const x2 = div(minus(-b, new Decimal(discriminant).sqrt()), times(2, a));
    return [x1, x2];
  } else if (isEqualTo(discriminant, 0)) {
    const x = div(-b, times(2, a));
    return [x];
  } else {
    return [];
  }
}
function toDecimalPlaces(value) {
  let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PRECISION;
  let roundingMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c.ROUND_DOWN;
  try {
    const num = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value).toFixed(precision, roundingMode);
    return num;
  } catch (e) {
    return String(value || '-');
  }
}
function formatDecimalPlaces(value) {
  let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PRECISION;
  if (value.includes('.')) {
    const parts = value.split('.');
    const partsLength = parts[1].length;
    if (partsLength > precision) {
      return toDecimalPlaces(value, precision);
    }
  }
  return value;
}

/***/ }),

/***/ 22920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _s: () => (/* binding */ parseUnits),
/* harmony export */   g5: () => (/* binding */ isNumeric),
/* harmony export */   hH: () => (/* binding */ parseTokenBalance),
/* harmony export */   iy: () => (/* binding */ formatNumber)
/* harmony export */ });
/* unused harmony export rest_api_url */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32496);
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39280);


function rest_api_url(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://api-tn10.kaspa.org/';
  }
  return 'https://api.kaspa.org/';
}
function isNumeric(value) {
  return !Number.isNaN(Number(value));
}
function parseUnits(value, precision) {
  let roundingMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c.ROUND_DOWN;
  if (!isNumeric(value) || !precision) {
    return '0';
  }
  try {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__/* .toDecimalPlaces */ .qo)(value, precision, roundingMode)).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(10).pow(precision)).toFixed();
  } catch (error) {
    console.error(error.message);
    return '0';
  }
}
function parseTokenBalance(value) {
  let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  if (!isNumeric(value)) {
    return '';
  }
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(10).pow(decimals)).decimalPlaces(2, bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c.ROUND_DOWN).toString();
}
function formatNumber(value) {
  let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  if (value == 0) return '0';
  try {
    const _value = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(10).pow(decimals)).decimalPlaces(4, bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c.ROUND_DOWN);
    let n = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(_value).toFixed(4);
    const p = n.indexOf('.');
    const originalValue = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(value);
    const threshold = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(1).dividedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c(10).pow(precision));
    if (originalValue.lt(threshold)) {
      n = "<".concat(threshold.toFixed(precision));
    }
    if (originalValue.toNumber() > 1) {
      return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => p < 0 || i < p ? "".concat(m, ",") : m);
    } else {
      return n;
    }
  } catch (error) {
    return '';
  }
}

/***/ }),

/***/ 85598:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 41920:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 46724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ded782ab48b915e93fd7.wasm";

/***/ }),

/***/ 95852:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 68270:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 55416:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 43704:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 73712:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 81740:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 88740:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 24352:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61020:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 17336:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 21704:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Abortable: () => (/* binding */ Abortable),
/* harmony export */   Aborted: () => (/* binding */ Aborted),
/* harmony export */   AccountKind: () => (/* binding */ AccountKind),
/* harmony export */   AccountsDiscoveryKind: () => (/* binding */ AccountsDiscoveryKind),
/* harmony export */   Address: () => (/* binding */ Address),
/* harmony export */   AddressVersion: () => (/* binding */ AddressVersion),
/* harmony export */   AgentConstructorOptions: () => (/* binding */ AgentConstructorOptions),
/* harmony export */   AppendFileOptions: () => (/* binding */ AppendFileOptions),
/* harmony export */   AssertionErrorOptions: () => (/* binding */ AssertionErrorOptions),
/* harmony export */   Balance: () => (/* binding */ Balance),
/* harmony export */   BalanceStrings: () => (/* binding */ BalanceStrings),
/* harmony export */   ConnectStrategy: () => (/* binding */ ConnectStrategy),
/* harmony export */   ConsoleConstructorOptions: () => (/* binding */ ConsoleConstructorOptions),
/* harmony export */   CreateHookCallbacks: () => (/* binding */ CreateHookCallbacks),
/* harmony export */   CreateReadStreamOptions: () => (/* binding */ CreateReadStreamOptions),
/* harmony export */   CreateWriteStreamOptions: () => (/* binding */ CreateWriteStreamOptions),
/* harmony export */   CryptoBox: () => (/* binding */ CryptoBox),
/* harmony export */   CryptoBoxPrivateKey: () => (/* binding */ CryptoBoxPrivateKey),
/* harmony export */   CryptoBoxPublicKey: () => (/* binding */ CryptoBoxPublicKey),
/* harmony export */   DerivationPath: () => (/* binding */ DerivationPath),
/* harmony export */   Encoding: () => (/* binding */ Encoding),
/* harmony export */   FeeSource: () => (/* binding */ FeeSource),
/* harmony export */   FormatInputPathObject: () => (/* binding */ FormatInputPathObject),
/* harmony export */   Generator: () => (/* binding */ Generator),
/* harmony export */   GeneratorSummary: () => (/* binding */ GeneratorSummary),
/* harmony export */   GetNameOptions: () => (/* binding */ GetNameOptions),
/* harmony export */   Hash: () => (/* binding */ Hash),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Keypair: () => (/* binding */ Keypair),
/* harmony export */   Language: () => (/* binding */ Language),
/* harmony export */   MkdtempSyncOptions: () => (/* binding */ MkdtempSyncOptions),
/* harmony export */   Mnemonic: () => (/* binding */ Mnemonic),
/* harmony export */   NetServerOptions: () => (/* binding */ NetServerOptions),
/* harmony export */   NetworkId: () => (/* binding */ NetworkId),
/* harmony export */   NetworkType: () => (/* binding */ NetworkType),
/* harmony export */   NewAddressKind: () => (/* binding */ NewAddressKind),
/* harmony export */   NodeDescriptor: () => (/* binding */ NodeDescriptor),
/* harmony export */   Opcodes: () => (/* binding */ Opcodes),
/* harmony export */   PSKT: () => (/* binding */ PSKT),
/* harmony export */   PaymentOutput: () => (/* binding */ PaymentOutput),
/* harmony export */   PaymentOutputs: () => (/* binding */ PaymentOutputs),
/* harmony export */   PendingTransaction: () => (/* binding */ PendingTransaction),
/* harmony export */   PipeOptions: () => (/* binding */ PipeOptions),
/* harmony export */   PoW: () => (/* binding */ PoW),
/* harmony export */   PrivateKey: () => (/* binding */ PrivateKey),
/* harmony export */   PrivateKeyGenerator: () => (/* binding */ PrivateKeyGenerator),
/* harmony export */   ProcessSendOptions: () => (/* binding */ ProcessSendOptions),
/* harmony export */   PrvKeyDataInfo: () => (/* binding */ PrvKeyDataInfo),
/* harmony export */   PublicKey: () => (/* binding */ PublicKey),
/* harmony export */   PublicKeyGenerator: () => (/* binding */ PublicKeyGenerator),
/* harmony export */   ReadStream: () => (/* binding */ ReadStream),
/* harmony export */   Resolver: () => (/* binding */ Resolver),
/* harmony export */   RpcClient: () => (/* binding */ RpcClient),
/* harmony export */   ScriptBuilder: () => (/* binding */ ScriptBuilder),
/* harmony export */   ScriptPublicKey: () => (/* binding */ ScriptPublicKey),
/* harmony export */   SetAadOptions: () => (/* binding */ SetAadOptions),
/* harmony export */   SigHashType: () => (/* binding */ SigHashType),
/* harmony export */   SighashType: () => (/* binding */ SighashType),
/* harmony export */   Storage: () => (/* binding */ Storage),
/* harmony export */   StreamTransformOptions: () => (/* binding */ StreamTransformOptions),
/* harmony export */   Transaction: () => (/* binding */ Transaction),
/* harmony export */   TransactionInput: () => (/* binding */ TransactionInput),
/* harmony export */   TransactionOutpoint: () => (/* binding */ TransactionOutpoint),
/* harmony export */   TransactionOutput: () => (/* binding */ TransactionOutput),
/* harmony export */   TransactionRecord: () => (/* binding */ TransactionRecord),
/* harmony export */   TransactionRecordNotification: () => (/* binding */ TransactionRecordNotification),
/* harmony export */   TransactionSigningHash: () => (/* binding */ TransactionSigningHash),
/* harmony export */   TransactionSigningHashECDSA: () => (/* binding */ TransactionSigningHashECDSA),
/* harmony export */   TransactionUtxoEntry: () => (/* binding */ TransactionUtxoEntry),
/* harmony export */   UserInfoOptions: () => (/* binding */ UserInfoOptions),
/* harmony export */   UtxoContext: () => (/* binding */ UtxoContext),
/* harmony export */   UtxoEntries: () => (/* binding */ UtxoEntries),
/* harmony export */   UtxoEntry: () => (/* binding */ UtxoEntry),
/* harmony export */   UtxoEntryReference: () => (/* binding */ UtxoEntryReference),
/* harmony export */   UtxoProcessor: () => (/* binding */ UtxoProcessor),
/* harmony export */   Wallet: () => (/* binding */ Wallet),
/* harmony export */   WalletDescriptor: () => (/* binding */ WalletDescriptor),
/* harmony export */   WasiOptions: () => (/* binding */ WasiOptions),
/* harmony export */   WriteFileSyncOptions: () => (/* binding */ WriteFileSyncOptions),
/* harmony export */   WriteStream: () => (/* binding */ WriteStream),
/* harmony export */   XOnlyPublicKey: () => (/* binding */ XOnlyPublicKey),
/* harmony export */   XPrv: () => (/* binding */ XPrv),
/* harmony export */   XPub: () => (/* binding */ XPub),
/* harmony export */   addressFromScriptPublicKey: () => (/* binding */ addressFromScriptPublicKey),
/* harmony export */   argon2sha256ivFromBinary: () => (/* binding */ argon2sha256ivFromBinary),
/* harmony export */   argon2sha256ivFromText: () => (/* binding */ argon2sha256ivFromText),
/* harmony export */   calculateTarget: () => (/* binding */ calculateTarget),
/* harmony export */   calculateTransactionFee: () => (/* binding */ calculateTransactionFee),
/* harmony export */   calculateTransactionMass: () => (/* binding */ calculateTransactionMass),
/* harmony export */   createAddress: () => (/* binding */ createAddress),
/* harmony export */   createInputSignature: () => (/* binding */ createInputSignature),
/* harmony export */   createMultisigAddress: () => (/* binding */ createMultisigAddress),
/* harmony export */   createTransaction: () => (/* binding */ createTransaction),
/* harmony export */   createTransactions: () => (/* binding */ createTransactions),
/* harmony export */   decryptXChaCha20Poly1305: () => (/* binding */ decryptXChaCha20Poly1305),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defer: () => (/* binding */ defer),
/* harmony export */   encryptXChaCha20Poly1305: () => (/* binding */ encryptXChaCha20Poly1305),
/* harmony export */   estimateTransactions: () => (/* binding */ estimateTransactions),
/* harmony export */   initBrowserPanicHook: () => (/* binding */ initBrowserPanicHook),
/* harmony export */   initConsolePanicHook: () => (/* binding */ initConsolePanicHook),
/* harmony export */   initSync: () => (/* binding */ initSync),
/* harmony export */   initWASM32Bindings: () => (/* binding */ initWASM32Bindings),
/* harmony export */   isScriptPayToPubkey: () => (/* binding */ isScriptPayToPubkey),
/* harmony export */   isScriptPayToPubkeyECDSA: () => (/* binding */ isScriptPayToPubkeyECDSA),
/* harmony export */   isScriptPayToScriptHash: () => (/* binding */ isScriptPayToScriptHash),
/* harmony export */   kaspaToSompi: () => (/* binding */ kaspaToSompi),
/* harmony export */   maximumStandardTransactionMass: () => (/* binding */ maximumStandardTransactionMass),
/* harmony export */   payToAddressScript: () => (/* binding */ payToAddressScript),
/* harmony export */   payToScriptHashScript: () => (/* binding */ payToScriptHashScript),
/* harmony export */   payToScriptHashSignatureScript: () => (/* binding */ payToScriptHashSignatureScript),
/* harmony export */   presentPanicHookLogs: () => (/* binding */ presentPanicHookLogs),
/* harmony export */   setDefaultStorageFolder: () => (/* binding */ setDefaultStorageFolder),
/* harmony export */   setDefaultWalletFile: () => (/* binding */ setDefaultWalletFile),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel),
/* harmony export */   sha256FromBinary: () => (/* binding */ sha256FromBinary),
/* harmony export */   sha256FromText: () => (/* binding */ sha256FromText),
/* harmony export */   sha256dFromBinary: () => (/* binding */ sha256dFromBinary),
/* harmony export */   sha256dFromText: () => (/* binding */ sha256dFromText),
/* harmony export */   signMessage: () => (/* binding */ signMessage),
/* harmony export */   signScriptHash: () => (/* binding */ signScriptHash),
/* harmony export */   signTransaction: () => (/* binding */ signTransaction),
/* harmony export */   sompiToKaspaString: () => (/* binding */ sompiToKaspaString),
/* harmony export */   sompiToKaspaStringWithSuffix: () => (/* binding */ sompiToKaspaStringWithSuffix),
/* harmony export */   updateTransactionMass: () => (/* binding */ updateTransactionMass),
/* harmony export */   verifyMessage: () => (/* binding */ verifyMessage),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];
let wasm;
function logError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    let error = function () {
      try {
        return e instanceof Error ? "".concat(e.message, "\n\nStack:\n").concat(e.stack) : e.toString();
      } catch (_) {
        return "<failed to stringify thrown value>";
      }
    }();
    console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
    throw e;
  }
}
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_export_2.set(idx, obj);
  return idx;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
let WASM_VECTOR_LEN = 0;
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
const cachedTextEncoder = typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : {
  encode: () => {
    throw Error('TextEncoder not available');
  }
};
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (typeof arg !== 'string') throw new Error("expected a string argument, found ".concat(typeof arg));
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    if (ret.read !== arg.length) throw new Error('failed to pass whole string');
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
const cachedTextDecoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
}) : {
  decode: () => {
    throw Error('TextDecoder not available');
  }
};
if (typeof TextDecoder !== 'undefined') {
  cachedTextDecoder.decode();
}
;
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function isLikeNone(x) {
  return x === undefined || x === null;
}
function _assertBoolean(n) {
  if (typeof n !== 'boolean') {
    throw new Error("expected a boolean argument, found ".concat(typeof n));
  }
}
function _assertNum(n) {
  if (typeof n !== 'number') throw new Error("expected a number argument, found ".concat(typeof n));
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
function _assertBigInt(n) {
  if (typeof n !== 'bigint') throw new Error("expected a bigint argument, found ".concat(typeof n));
}
const CLOSURE_DTORS = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(state => {
  wasm.__wbindgen_export_6.get(state.dtor)(state.a, state.b);
});
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0,
    b: arg1,
    cnt: 1,
    dtor
  };
  const real = function () {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_6.get(state.dtor)(a, state.b);
        CLOSURE_DTORS.unregister(state);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function makeClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0,
    b: arg1,
    cnt: 1,
    dtor
  };
  const real = function () {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    try {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return f(state.a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_6.get(state.dtor)(state.a, state.b);
        state.a = 0;
        CLOSURE_DTORS.unregister(state);
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function debugString(val) {
  // primitive types
  const type = typeof val;
  if (type == 'number' || type == 'boolean' || val == null) {
    return "".concat(val);
  }
  if (type == 'string') {
    return "\"".concat(val, "\"");
  }
  if (type == 'symbol') {
    const description = val.description;
    if (description == null) {
      return 'Symbol';
    } else {
      return "Symbol(".concat(description, ")");
    }
  }
  if (type == 'function') {
    const name = val.name;
    if (typeof name == 'string' && name.length > 0) {
      return "Function(".concat(name, ")");
    } else {
      return 'Function';
    }
  }
  // objects
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = '[';
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }
    debug += ']';
    return debug;
  }
  // Test for built-in
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }
  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
      return 'Object';
    }
  }
  // errors
  if (val instanceof Error) {
    return "".concat(val.name, ": ").concat(val.message, "\n").concat(val.stack);
  }
  // TODO we could test for more things here, like `Set`s and `Map`s.
  return className;
}
/**
 * Returns the version of the Rusty Kaspa framework.
 * @category General
 * @returns {string}
 */
function version() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm.version();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_export_2.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
/**
 * Set the logger log level using a string representation.
 * Available variants are: 'off', 'error', 'warn', 'info', 'debug', 'trace'
 * @category General
 * @param {"off" | "error" | "warn" | "info" | "debug" | "trace"} level
 */
function setLogLevel(level) {
  wasm.setLogLevel(level);
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0(array[i]);
    getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm.__wbindgen_export_2.get(mem.getUint32(i, true)));
  }
  wasm.__externref_drop_slice(ptr, len);
  return result;
}
/**
 * Initialize Rust panic handler in console mode.
 *
 * This will output additional debug information during a panic to the console.
 * This function should be called right after loading WASM libraries.
 * @category General
 */
function initConsolePanicHook() {
  wasm.initConsolePanicHook();
}

/**
 * Initialize Rust panic handler in browser mode.
 *
 * This will output additional debug information during a panic in the browser
 * by creating a full-screen `DIV`. This is useful on mobile devices or where
 * the user otherwise has no access to console/developer tools. Use
 * {@link presentPanicHookLogs} to activate the panic logs in the
 * browser environment.
 * @see {@link presentPanicHookLogs}
 * @category General
 */
function initBrowserPanicHook() {
  wasm.initBrowserPanicHook();
}

/**
 * Present panic logs to the user in the browser.
 *
 * This function should be called after a panic has occurred and the
 * browser-based panic hook has been activated. It will present the
 * collected panic logs in a full-screen `DIV` in the browser.
 * @see {@link initBrowserPanicHook}
 * @category General
 */
function presentPanicHookLogs() {
  wasm.presentPanicHookLogs();
}

/**
 * Configuration for the WASM32 bindings runtime interface.
 * @see {@link IWASM32BindingsConfig}
 * @category General
 * @param {IWASM32BindingsConfig} config
 */
function initWASM32Bindings(config) {
  const ret = wasm.initWASM32Bindings(config);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}

/**
 * r" Deferred promise - an object that has `resolve()` and `reject()`
 * r" functions that can be called outside of the promise body.
 * r" WARNING: This function uses `eval` and can not be used in environments
 * r" where dynamically-created code can not be executed such as web browser
 * r" extensions.
 * r" @category General
 * @returns {Promise<any>}
 */
function defer() {
  const ret = wasm.defer();
  return ret;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error("expected instance of ".concat(klass.name));
  }
}
/**
 * Returns true if the script passed is a pay-to-script-hash (P2SH) format, false otherwise.
 * @param script - The script ({@link HexString} or Uint8Array).
 * @category Wallet SDK
 * @param {HexString | Uint8Array} script
 * @returns {boolean}
 */
function isScriptPayToScriptHash(script) {
  const ret = wasm.isScriptPayToScriptHash(script);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ret[0] !== 0;
}

/**
 * Returns returns true if the script passed is an ECDSA pay-to-pubkey.
 * @param script - The script ({@link HexString} or Uint8Array).
 * @category Wallet SDK
 * @param {HexString | Uint8Array} script
 * @returns {boolean}
 */
function isScriptPayToPubkeyECDSA(script) {
  const ret = wasm.isScriptPayToPubkeyECDSA(script);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ret[0] !== 0;
}

/**
 * Returns true if the script passed is a pay-to-pubkey.
 * @param script - The script ({@link HexString} or Uint8Array).
 * @category Wallet SDK
 * @param {HexString | Uint8Array} script
 * @returns {boolean}
 */
function isScriptPayToPubkey(script) {
  const ret = wasm.isScriptPayToPubkey(script);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ret[0] !== 0;
}

/**
 * Returns the address encoded in a script public key.
 * @param script_public_key - The script public key ({@link ScriptPublicKey}).
 * @param network - The network type.
 * @category Wallet SDK
 * @param {ScriptPublicKey | HexString} script_public_key
 * @param {NetworkType | NetworkId | string} network
 * @returns {Address | undefined}
 */
function addressFromScriptPublicKey(script_public_key, network) {
  const ret = wasm.addressFromScriptPublicKey(script_public_key, network);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * Generates a signature script that fits a pay-to-script-hash script.
 * @param redeem_script - The redeem script ({@link HexString} or Uint8Array).
 * @param signature - The signature ({@link HexString} or Uint8Array).
 * @category Wallet SDK
 * @param {HexString | Uint8Array} redeem_script
 * @param {HexString | Uint8Array} signature
 * @returns {HexString}
 */
function payToScriptHashSignatureScript(redeem_script, signature) {
  const ret = wasm.payToScriptHashSignatureScript(redeem_script, signature);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * Takes a script and returns an equivalent pay-to-script-hash script.
 * @param redeem_script - The redeem script ({@link HexString} or Uint8Array).
 * @category Wallet SDK
 * @param {HexString | Uint8Array} redeem_script
 * @returns {ScriptPublicKey}
 */
function payToScriptHashScript(redeem_script) {
  const ret = wasm.payToScriptHashScript(redeem_script);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ScriptPublicKey.__wrap(ret[0]);
}

/**
 * Creates a new script to pay a transaction output to the specified address.
 * @category Wallet SDK
 * @param {Address | string} address
 * @returns {ScriptPublicKey}
 */
function payToAddressScript(address) {
  const ret = wasm.payToAddressScript(address);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ScriptPublicKey.__wrap(ret[0]);
}

/**
 * @category Wallet SDK
 * @param {PublicKey | string} key
 * @param {NetworkType | NetworkId | string} network
 * @param {boolean | null} [ecdsa]
 * @param {AccountKind | null} [account_kind]
 * @returns {Address}
 */
function createAddress(key, network, ecdsa, account_kind) {
  if (!isLikeNone(ecdsa)) {
    _assertBoolean(ecdsa);
  }
  let ptr0 = 0;
  if (!isLikeNone(account_kind)) {
    _assertClass(account_kind, AccountKind);
    if (account_kind.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    ptr0 = account_kind.__destroy_into_raw();
  }
  const ret = wasm.createAddress(key, network, isLikeNone(ecdsa) ? 0xFFFFFF : ecdsa ? 1 : 0, ptr0);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return Address.__wrap(ret[0]);
}

/**
 * @category Wallet SDK
 * @param {number} minimum_signatures
 * @param {(PublicKey | string)[]} keys
 * @param {NetworkType} network_type
 * @param {boolean | null} [ecdsa]
 * @param {AccountKind | null} [account_kind]
 * @returns {Address}
 */
function createMultisigAddress(minimum_signatures, keys, network_type, ecdsa, account_kind) {
  _assertNum(minimum_signatures);
  _assertNum(network_type);
  if (!isLikeNone(ecdsa)) {
    _assertBoolean(ecdsa);
  }
  let ptr0 = 0;
  if (!isLikeNone(account_kind)) {
    _assertClass(account_kind, AccountKind);
    if (account_kind.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    ptr0 = account_kind.__destroy_into_raw();
  }
  const ret = wasm.createMultisigAddress(minimum_signatures, keys, network_type, isLikeNone(ecdsa) ? 0xFFFFFF : ecdsa ? 1 : 0, ptr0);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return Address.__wrap(ret[0]);
}

/**
 *
 * Format a Sompi amount to a string representation of the amount in Kaspa with a suffix
 * based on the network type (e.g. `KAS` for mainnet, `TKAS` for testnet,
 * `SKAS` for simnet, `DKAS` for devnet).
 *
 * @category Wallet SDK
 * @param {bigint | number | HexString} sompi
 * @param {NetworkType | NetworkId | string} network
 * @returns {string}
 */
function sompiToKaspaStringWithSuffix(sompi, network) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ret = wasm.sompiToKaspaStringWithSuffix(sompi, network);
    var ptr1 = ret[0];
    var len1 = ret[1];
    if (ret[3]) {
      ptr1 = 0;
      len1 = 0;
      throw takeFromExternrefTable0(ret[2]);
    }
    deferred2_0 = ptr1;
    deferred2_1 = len1;
    return getStringFromWasm0(ptr1, len1);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}

/**
 *
 * Convert Sompi to a string representation of the amount in Kaspa.
 *
 * @category Wallet SDK
 * @param {bigint | number | HexString} sompi
 * @returns {string}
 */
function sompiToKaspaString(sompi) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ret = wasm.sompiToKaspaString(sompi);
    var ptr1 = ret[0];
    var len1 = ret[1];
    if (ret[3]) {
      ptr1 = 0;
      len1 = 0;
      throw takeFromExternrefTable0(ret[2]);
    }
    deferred2_0 = ptr1;
    deferred2_1 = len1;
    return getStringFromWasm0(ptr1, len1);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}

/**
 * Convert a Kaspa string to Sompi represented by bigint.
 * This function provides correct precision handling and
 * can be used to parse user input.
 * @category Wallet SDK
 * @param {string} kaspa
 * @returns {bigint | undefined}
 */
function kaspaToSompi(kaspa) {
  const ptr0 = passStringToWasm0(kaspa, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.kaspaToSompi(ptr0, len0);
  return ret;
}

/**
 * Helper function that creates an estimate using the transaction {@link Generator}
 * by producing only the {@link GeneratorSummary} containing the estimate.
 * @see {@link IGeneratorSettingsObject}, {@link Generator}, {@link createTransactions}
 * @category Wallet SDK
 * @param {IGeneratorSettingsObject} settings
 * @returns {Promise<GeneratorSummary>}
 */
function estimateTransactions(settings) {
  const ret = wasm.estimateTransactions(settings);
  return ret;
}

/**
 * Helper function that creates a set of transactions using the transaction {@link Generator}.
 * @see {@link IGeneratorSettingsObject}, {@link Generator}, {@link estimateTransactions}
 * @category Wallet SDK
 * @param {IGeneratorSettingsObject} settings
 * @returns {Promise<ICreateTransactions>}
 */
function createTransactions(settings) {
  const ret = wasm.createTransactions(settings);
  return ret;
}

/**
 * Create a basic transaction without any mass limit checks.
 * @category Wallet SDK
 * @param {IUtxoEntry[]} utxo_entry_source
 * @param {IPaymentOutput[]} outputs
 * @param {bigint} priority_fee
 * @param {HexString | Uint8Array | null} [payload]
 * @param {number | null} [sig_op_count]
 * @returns {Transaction}
 */
function createTransaction(utxo_entry_source, outputs, priority_fee, payload, sig_op_count) {
  if (!isLikeNone(sig_op_count)) {
    _assertNum(sig_op_count);
  }
  const ret = wasm.createTransaction(utxo_entry_source, outputs, priority_fee, isLikeNone(payload) ? 0 : addToExternrefTable0(payload), isLikeNone(sig_op_count) ? 0xFFFFFF : sig_op_count);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return Transaction.__wrap(ret[0]);
}

/**
 * `calculateTransactionFee()` returns minimum fees needed for the transaction to be
 * accepted by the network. If the transaction is invalid or the mass can not be calculated,
 * the function throws an error. If the mass exceeds the maximum standard transaction mass,
 * the function returns `undefined`.
 *
 * @category Wallet SDK
 * @see {@link maximumStandardTransactionMass}
 * @see {@link calculateTransactionMass}
 * @see {@link updateTransactionMass}
 * @param {NetworkId | string} network_id
 * @param {ITransaction | Transaction} tx
 * @param {number | null} [minimum_signatures]
 * @returns {bigint | undefined}
 */
function calculateTransactionFee(network_id, tx, minimum_signatures) {
  if (!isLikeNone(minimum_signatures)) {
    _assertNum(minimum_signatures);
  }
  const ret = wasm.calculateTransactionFee(network_id, tx, isLikeNone(minimum_signatures) ? 0xFFFFFF : minimum_signatures);
  if (ret[3]) {
    throw takeFromExternrefTable0(ret[2]);
  }
  return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
}

/**
 * `updateTransactionMass()` updates the mass property of the passed transaction.
 * If the transaction is invalid, the function throws an error.
 *
 * The function returns `true` if the mass is within the maximum standard transaction mass and
 * the transaction mass is updated. Otherwise, the function returns `false`.
 *
 * This is similar to `calculateTransactionMass()` but modifies the supplied
 * `Transaction` object.
 *
 * @category Wallet SDK
 * @see {@link maximumStandardTransactionMass}
 * @see {@link calculateTransactionMass}
 * @see {@link calculateTransactionFee}
 * @param {NetworkId | string} network_id
 * @param {Transaction} tx
 * @param {number | null} [minimum_signatures]
 * @returns {boolean}
 */
function updateTransactionMass(network_id, tx, minimum_signatures) {
  _assertClass(tx, Transaction);
  if (tx.__wbg_ptr === 0) {
    throw new Error('Attempt to use a moved value');
  }
  if (!isLikeNone(minimum_signatures)) {
    _assertNum(minimum_signatures);
  }
  const ret = wasm.updateTransactionMass(network_id, tx.__wbg_ptr, isLikeNone(minimum_signatures) ? 0xFFFFFF : minimum_signatures);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ret[0] !== 0;
}

/**
 * `calculateTransactionMass()` returns the mass of the passed transaction.
 * If the transaction is invalid, or the mass can not be calculated
 * the function throws an error.
 *
 * The mass value must not exceed the maximum standard transaction mass
 * that can be obtained using `maximumStandardTransactionMass()`.
 *
 * @category Wallet SDK
 * @see {@link maximumStandardTransactionMass}
 * @param {NetworkId | string} network_id
 * @param {ITransaction | Transaction} tx
 * @param {number | null} [minimum_signatures]
 * @returns {bigint}
 */
function calculateTransactionMass(network_id, tx, minimum_signatures) {
  if (!isLikeNone(minimum_signatures)) {
    _assertNum(minimum_signatures);
  }
  const ret = wasm.calculateTransactionMass(network_id, tx, isLikeNone(minimum_signatures) ? 0xFFFFFF : minimum_signatures);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return BigInt.asUintN(64, ret[0]);
}

/**
 * `maximumStandardTransactionMass()` returns the maximum transaction
 * size allowed by the network.
 *
 * @category Wallet SDK
 * @see {@link calculateTransactionMass}
 * @see {@link updateTransactionMass}
 * @see {@link calculateTransactionFee}
 * @returns {bigint}
 */
function maximumStandardTransactionMass() {
  const ret = wasm.maximumStandardTransactionMass();
  return BigInt.asUintN(64, ret);
}

/**
 * Set a custom storage folder for the wallet SDK
 * subsystem.  Encrypted wallet files and transaction
 * data will be stored in this folder. If not set
 * the storage folder will default to `~/.kaspa`
 * (note that the folder is hidden).
 *
 * This must be called before using any other wallet
 * SDK functions.
 *
 * NOTE: This function will create a folder if it
 * doesn't exist. This function will have no effect
 * if invoked in the browser environment.
 *
 * @param {String} folder - the path to the storage folder
 *
 * @category Wallet API
 */
function setDefaultStorageFolder(folder) {
  const ptr0 = passStringToWasm0(folder, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.setDefaultStorageFolder(ptr0, len0);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}

/**
 * Set the name of the default wallet file name
 * or the `localStorage` key.  If `Wallet::open`
 * is called without a wallet file name, this name
 * will be used.  Please note that this name
 * will be suffixed with `.wallet` suffix.
 *
 * This function should be called before using any
 * other wallet SDK functions.
 *
 * @param {String} folder - the name to the wallet file or key.
 *
 * @category Wallet API
 * @param {string} folder
 */
function setDefaultWalletFile(folder) {
  const ptr0 = passStringToWasm0(folder, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.setDefaultWalletFile(ptr0, len0);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}

/**
 * WASM32 binding for `argon2sha256iv` hash function.
 * @param text - The text string to hash.
 * @category Encryption
 * @param {string} text
 * @param {number} byteLength
 * @returns {HexString}
 */
function argon2sha256ivFromText(text, byteLength) {
  const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  _assertNum(byteLength);
  const ret = wasm.argon2sha256ivFromText(ptr0, len0, byteLength);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * WASM32 binding for `argon2sha256iv` hash function.
 * @param data - The data to hash ({@link HexString} or Uint8Array).
 * @category Encryption
 * @param {HexString | Uint8Array} data
 * @param {number} hashLength
 * @returns {HexString}
 */
function argon2sha256ivFromBinary(data, hashLength) {
  _assertNum(hashLength);
  const ret = wasm.argon2sha256ivFromBinary(data, hashLength);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * WASM32 binding for `SHA256d` hash function.
 * @param {string} text - The text string to hash.
 * @category Encryption
 * @param {string} text
 * @returns {HexString}
 */
function sha256dFromText(text) {
  const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.sha256dFromText(ptr0, len0);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * WASM32 binding for `SHA256d` hash function.
 * @param data - The data to hash ({@link HexString} or Uint8Array).
 * @category Encryption
 * @param {HexString | Uint8Array} data
 * @returns {HexString}
 */
function sha256dFromBinary(data) {
  const ret = wasm.sha256dFromBinary(data);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * WASM32 binding for `SHA256` hash function.
 * @param {string} text - The text string to hash.
 * @category Encryption
 * @param {string} text
 * @returns {HexString}
 */
function sha256FromText(text) {
  const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.sha256FromText(ptr0, len0);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * WASM32 binding for `SHA256` hash function.
 * @param data - The data to hash ({@link HexString} or Uint8Array).
 * @category Encryption
 * @param {HexString | Uint8Array} data
 * @returns {HexString}
 */
function sha256FromBinary(data) {
  const ret = wasm.sha256FromBinary(data);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * WASM32 binding for `decryptXChaCha20Poly1305` function.
 * @category Encryption
 * @param {string} base64string
 * @param {string} password
 * @returns {string}
 */
function decryptXChaCha20Poly1305(base64string, password) {
  let deferred4_0;
  let deferred4_1;
  try {
    const ptr0 = passStringToWasm0(base64string, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.decryptXChaCha20Poly1305(ptr0, len0, ptr1, len1);
    var ptr3 = ret[0];
    var len3 = ret[1];
    if (ret[3]) {
      ptr3 = 0;
      len3 = 0;
      throw takeFromExternrefTable0(ret[2]);
    }
    deferred4_0 = ptr3;
    deferred4_1 = len3;
    return getStringFromWasm0(ptr3, len3);
  } finally {
    wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
  }
}

/**
 * WASM32 binding for `encryptXChaCha20Poly1305` function.
 * @returns The encrypted text as a base64 string.
 * @category Encryption
 * @param {string} plainText
 * @param {string} password
 * @returns {string}
 */
function encryptXChaCha20Poly1305(plainText, password) {
  let deferred4_0;
  let deferred4_1;
  try {
    const ptr0 = passStringToWasm0(plainText, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.encryptXChaCha20Poly1305(ptr0, len0, ptr1, len1);
    var ptr3 = ret[0];
    var len3 = ret[1];
    if (ret[3]) {
      ptr3 = 0;
      len3 = 0;
      throw takeFromExternrefTable0(ret[2]);
    }
    deferred4_0 = ptr3;
    deferred4_1 = len3;
    return getStringFromWasm0(ptr3, len3);
  } finally {
    wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
  }
}

/**
 * @category Wallet SDK
 * @param {any} script_hash
 * @param {PrivateKey} privkey
 * @returns {string}
 */
function signScriptHash(script_hash, privkey) {
  let deferred2_0;
  let deferred2_1;
  try {
    _assertClass(privkey, PrivateKey);
    if (privkey.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.signScriptHash(script_hash, privkey.__wbg_ptr);
    var ptr1 = ret[0];
    var len1 = ret[1];
    if (ret[3]) {
      ptr1 = 0;
      len1 = 0;
      throw takeFromExternrefTable0(ret[2]);
    }
    deferred2_0 = ptr1;
    deferred2_1 = len1;
    return getStringFromWasm0(ptr1, len1);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}

/**
 * `createInputSignature()` is a helper function to sign a transaction input with a specific SigHash type using a private key.
 * @category Wallet SDK
 * @param {Transaction} tx
 * @param {number} input_index
 * @param {PrivateKey} private_key
 * @param {SighashType | null} [sighash_type]
 * @returns {HexString}
 */
function createInputSignature(tx, input_index, private_key, sighash_type) {
  _assertClass(tx, Transaction);
  if (tx.__wbg_ptr === 0) {
    throw new Error('Attempt to use a moved value');
  }
  _assertNum(input_index);
  _assertClass(private_key, PrivateKey);
  if (private_key.__wbg_ptr === 0) {
    throw new Error('Attempt to use a moved value');
  }
  if (!isLikeNone(sighash_type)) {
    _assertNum(sighash_type);
  }
  const ret = wasm.createInputSignature(tx.__wbg_ptr, input_index, private_key.__wbg_ptr, isLikeNone(sighash_type) ? 6 : sighash_type);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * `signTransaction()` is a helper function to sign a transaction using a private key array or a signer array.
 * @category Wallet SDK
 * @param {Transaction} tx
 * @param {(PrivateKey | HexString | Uint8Array)[]} signer
 * @param {boolean} verify_sig
 * @returns {Transaction}
 */
function signTransaction(tx, signer, verify_sig) {
  _assertClass(tx, Transaction);
  if (tx.__wbg_ptr === 0) {
    throw new Error('Attempt to use a moved value');
  }
  _assertBoolean(verify_sig);
  const ret = wasm.signTransaction(tx.__wbg_ptr, signer, verify_sig);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return Transaction.__wrap(ret[0]);
}

/**
 * Verifies with a public key the signature of the given message
 * @category Message Signing
 */
function verifyMessage(value) {
  const ret = wasm.verifyMessage(value);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return ret[0] !== 0;
}

/**
 * Signs a message with the given private key
 * @category Message Signing
 * @param {ISignMessage} value
 * @returns {HexString}
 */
function signMessage(value) {
  const ret = wasm.signMessage(value);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}

/**
 * Calculates target from difficulty, based on set_difficulty function on
 * <https://github.com/tmrlvi/kaspa-miner/blob/bf361d02a46c580f55f46b5dfa773477634a5753/src/client/stratum.rs#L375>
 * @category Mining
 * @param {number} difficulty
 * @returns {bigint}
 */
function calculateTarget(difficulty) {
  const ret = wasm.calculateTarget(difficulty);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}
function __wbg_adapter_64(arg0, arg1, arg2, arg3) {
  _assertNum(arg0);
  _assertNum(arg1);
  _assertNum(arg3);
  const ret = wasm.closure60_externref_shim(arg0, arg1, arg2, arg3);
  return ret;
}
function __wbg_adapter_67(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  _assertNum(arg2);
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hab22d44cd93cc0a5(arg0, arg1, arg2);
}
function __wbg_adapter_70(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.closure58_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_73(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.closure150_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_76(arg0, arg1) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h55c84732c099ecdd(arg0, arg1);
}
function __wbg_adapter_79(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.closure633_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_82(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.closure631_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_85(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.closure2643_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_88(arg0, arg1) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h64a4e4b61bc75ece(arg0, arg1);
}
function __wbg_adapter_91(arg0, arg1, arg2) {
  _assertNum(arg0);
  _assertNum(arg1);
  const ret = wasm.closure7485_externref_shim_multivalue_shim(arg0, arg1, arg2);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
function __wbg_adapter_383(arg0, arg1, arg2, arg3) {
  _assertNum(arg0);
  _assertNum(arg1);
  wasm.closure191_externref_shim(arg0, arg1, arg2, arg3);
}

/**
 * @category Wallet API
 * @enum {0}
 */
const AccountsDiscoveryKind = Object.freeze({
  Bip44: 0,
  "0": "Bip44"
});
/**
 *
 *  Kaspa `Address` version (`PubKey`, `PubKey ECDSA`, `ScriptHash`)
 *
 * @category Address
 * @enum {0 | 1 | 8}
 */
const AddressVersion = Object.freeze({
  /**
   * PubKey addresses always have the version byte set to 0
   */
  PubKey: 0,
  "0": "PubKey",
  /**
   * PubKey ECDSA addresses always have the version byte set to 1
   */
  PubKeyECDSA: 1,
  "1": "PubKeyECDSA",
  /**
   * ScriptHash addresses always have the version byte set to 8
   */
  ScriptHash: 8,
  "8": "ScriptHash"
});
/**
 * `ConnectionStrategy` specifies how the WebSocket `async fn connect()`
 * function should behave during the first-time connectivity phase.
 * @category WebSocket
 * @enum {0 | 1}
 */
const ConnectStrategy = Object.freeze({
  /**
   * Continuously attempt to connect to the server. This behavior will
   * block `connect()` function until the connection is established.
   */
  Retry: 0,
  "0": "Retry",
  /**
   * Causes `connect()` to return immediately if the first-time connection
   * has failed.
   */
  Fallback: 1,
  "1": "Fallback"
});
/**
 * wRPC protocol encoding: `Borsh` or `JSON`
 * @category Transport
 * @enum {0 | 1}
 */
const Encoding = Object.freeze({
  Borsh: 0,
  "0": "Borsh",
  SerdeJson: 1,
  "1": "SerdeJson"
});
/**
 *
 * @see {@link IFees}, {@link IGeneratorSettingsObject}, {@link Generator}, {@link estimateTransactions}, {@link createTransactions}
 * @category Wallet SDK
 * @enum {0 | 1}
 */
const FeeSource = Object.freeze({
  SenderPays: 0,
  "0": "SenderPays",
  ReceiverPays: 1,
  "1": "ReceiverPays"
});
/**
 *
 * Languages supported by BIP39.
 *
 * Presently only English is specified by the BIP39 standard.
 *
 * @see {@link Mnemonic}
 *
 * @category Wallet SDK
 * @enum {0}
 */
const Language = Object.freeze({
  /**
   * English is presently the only supported language
   */
  English: 0,
  "0": "English"
});
/**
 * @category Consensus
 * @enum {0 | 1 | 2 | 3}
 */
const NetworkType = Object.freeze({
  Mainnet: 0,
  "0": "Mainnet",
  Testnet: 1,
  "1": "Testnet",
  Devnet: 2,
  "2": "Devnet",
  Simnet: 3,
  "3": "Simnet"
});
/**
 * Specifies the type of an account address to create.
 * The address can bea receive address or a change address.
 *
 * @category Wallet API
 * @enum {0 | 1}
 */
const NewAddressKind = Object.freeze({
  Receive: 0,
  "0": "Receive",
  Change: 1,
  "1": "Change"
});
/**
 * Kaspa Transaction Script Opcodes
 * @see {@link ScriptBuilder}
 * @category Consensus
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255}
 */
const Opcodes = Object.freeze({
  OpFalse: 0,
  "0": "OpFalse",
  OpData1: 1,
  "1": "OpData1",
  OpData2: 2,
  "2": "OpData2",
  OpData3: 3,
  "3": "OpData3",
  OpData4: 4,
  "4": "OpData4",
  OpData5: 5,
  "5": "OpData5",
  OpData6: 6,
  "6": "OpData6",
  OpData7: 7,
  "7": "OpData7",
  OpData8: 8,
  "8": "OpData8",
  OpData9: 9,
  "9": "OpData9",
  OpData10: 10,
  "10": "OpData10",
  OpData11: 11,
  "11": "OpData11",
  OpData12: 12,
  "12": "OpData12",
  OpData13: 13,
  "13": "OpData13",
  OpData14: 14,
  "14": "OpData14",
  OpData15: 15,
  "15": "OpData15",
  OpData16: 16,
  "16": "OpData16",
  OpData17: 17,
  "17": "OpData17",
  OpData18: 18,
  "18": "OpData18",
  OpData19: 19,
  "19": "OpData19",
  OpData20: 20,
  "20": "OpData20",
  OpData21: 21,
  "21": "OpData21",
  OpData22: 22,
  "22": "OpData22",
  OpData23: 23,
  "23": "OpData23",
  OpData24: 24,
  "24": "OpData24",
  OpData25: 25,
  "25": "OpData25",
  OpData26: 26,
  "26": "OpData26",
  OpData27: 27,
  "27": "OpData27",
  OpData28: 28,
  "28": "OpData28",
  OpData29: 29,
  "29": "OpData29",
  OpData30: 30,
  "30": "OpData30",
  OpData31: 31,
  "31": "OpData31",
  OpData32: 32,
  "32": "OpData32",
  OpData33: 33,
  "33": "OpData33",
  OpData34: 34,
  "34": "OpData34",
  OpData35: 35,
  "35": "OpData35",
  OpData36: 36,
  "36": "OpData36",
  OpData37: 37,
  "37": "OpData37",
  OpData38: 38,
  "38": "OpData38",
  OpData39: 39,
  "39": "OpData39",
  OpData40: 40,
  "40": "OpData40",
  OpData41: 41,
  "41": "OpData41",
  OpData42: 42,
  "42": "OpData42",
  OpData43: 43,
  "43": "OpData43",
  OpData44: 44,
  "44": "OpData44",
  OpData45: 45,
  "45": "OpData45",
  OpData46: 46,
  "46": "OpData46",
  OpData47: 47,
  "47": "OpData47",
  OpData48: 48,
  "48": "OpData48",
  OpData49: 49,
  "49": "OpData49",
  OpData50: 50,
  "50": "OpData50",
  OpData51: 51,
  "51": "OpData51",
  OpData52: 52,
  "52": "OpData52",
  OpData53: 53,
  "53": "OpData53",
  OpData54: 54,
  "54": "OpData54",
  OpData55: 55,
  "55": "OpData55",
  OpData56: 56,
  "56": "OpData56",
  OpData57: 57,
  "57": "OpData57",
  OpData58: 58,
  "58": "OpData58",
  OpData59: 59,
  "59": "OpData59",
  OpData60: 60,
  "60": "OpData60",
  OpData61: 61,
  "61": "OpData61",
  OpData62: 62,
  "62": "OpData62",
  OpData63: 63,
  "63": "OpData63",
  OpData64: 64,
  "64": "OpData64",
  OpData65: 65,
  "65": "OpData65",
  OpData66: 66,
  "66": "OpData66",
  OpData67: 67,
  "67": "OpData67",
  OpData68: 68,
  "68": "OpData68",
  OpData69: 69,
  "69": "OpData69",
  OpData70: 70,
  "70": "OpData70",
  OpData71: 71,
  "71": "OpData71",
  OpData72: 72,
  "72": "OpData72",
  OpData73: 73,
  "73": "OpData73",
  OpData74: 74,
  "74": "OpData74",
  OpData75: 75,
  "75": "OpData75",
  OpPushData1: 76,
  "76": "OpPushData1",
  OpPushData2: 77,
  "77": "OpPushData2",
  OpPushData4: 78,
  "78": "OpPushData4",
  Op1Negate: 79,
  "79": "Op1Negate",
  OpReserved: 80,
  "80": "OpReserved",
  OpTrue: 81,
  "81": "OpTrue",
  Op2: 82,
  "82": "Op2",
  Op3: 83,
  "83": "Op3",
  Op4: 84,
  "84": "Op4",
  Op5: 85,
  "85": "Op5",
  Op6: 86,
  "86": "Op6",
  Op7: 87,
  "87": "Op7",
  Op8: 88,
  "88": "Op8",
  Op9: 89,
  "89": "Op9",
  Op10: 90,
  "90": "Op10",
  Op11: 91,
  "91": "Op11",
  Op12: 92,
  "92": "Op12",
  Op13: 93,
  "93": "Op13",
  Op14: 94,
  "94": "Op14",
  Op15: 95,
  "95": "Op15",
  Op16: 96,
  "96": "Op16",
  OpNop: 97,
  "97": "OpNop",
  OpVer: 98,
  "98": "OpVer",
  OpIf: 99,
  "99": "OpIf",
  OpNotIf: 100,
  "100": "OpNotIf",
  OpVerIf: 101,
  "101": "OpVerIf",
  OpVerNotIf: 102,
  "102": "OpVerNotIf",
  OpElse: 103,
  "103": "OpElse",
  OpEndIf: 104,
  "104": "OpEndIf",
  OpVerify: 105,
  "105": "OpVerify",
  OpReturn: 106,
  "106": "OpReturn",
  OpToAltStack: 107,
  "107": "OpToAltStack",
  OpFromAltStack: 108,
  "108": "OpFromAltStack",
  Op2Drop: 109,
  "109": "Op2Drop",
  Op2Dup: 110,
  "110": "Op2Dup",
  Op3Dup: 111,
  "111": "Op3Dup",
  Op2Over: 112,
  "112": "Op2Over",
  Op2Rot: 113,
  "113": "Op2Rot",
  Op2Swap: 114,
  "114": "Op2Swap",
  OpIfDup: 115,
  "115": "OpIfDup",
  OpDepth: 116,
  "116": "OpDepth",
  OpDrop: 117,
  "117": "OpDrop",
  OpDup: 118,
  "118": "OpDup",
  OpNip: 119,
  "119": "OpNip",
  OpOver: 120,
  "120": "OpOver",
  OpPick: 121,
  "121": "OpPick",
  OpRoll: 122,
  "122": "OpRoll",
  OpRot: 123,
  "123": "OpRot",
  OpSwap: 124,
  "124": "OpSwap",
  OpTuck: 125,
  "125": "OpTuck",
  /**
   * Splice opcodes.
   */
  OpCat: 126,
  "126": "OpCat",
  OpSubStr: 127,
  "127": "OpSubStr",
  OpLeft: 128,
  "128": "OpLeft",
  OpRight: 129,
  "129": "OpRight",
  OpSize: 130,
  "130": "OpSize",
  /**
   * Bitwise logic opcodes.
   */
  OpInvert: 131,
  "131": "OpInvert",
  OpAnd: 132,
  "132": "OpAnd",
  OpOr: 133,
  "133": "OpOr",
  OpXor: 134,
  "134": "OpXor",
  OpEqual: 135,
  "135": "OpEqual",
  OpEqualVerify: 136,
  "136": "OpEqualVerify",
  OpReserved1: 137,
  "137": "OpReserved1",
  OpReserved2: 138,
  "138": "OpReserved2",
  /**
   * Numeric related opcodes.
   */
  Op1Add: 139,
  "139": "Op1Add",
  Op1Sub: 140,
  "140": "Op1Sub",
  Op2Mul: 141,
  "141": "Op2Mul",
  Op2Div: 142,
  "142": "Op2Div",
  OpNegate: 143,
  "143": "OpNegate",
  OpAbs: 144,
  "144": "OpAbs",
  OpNot: 145,
  "145": "OpNot",
  Op0NotEqual: 146,
  "146": "Op0NotEqual",
  OpAdd: 147,
  "147": "OpAdd",
  OpSub: 148,
  "148": "OpSub",
  OpMul: 149,
  "149": "OpMul",
  OpDiv: 150,
  "150": "OpDiv",
  OpMod: 151,
  "151": "OpMod",
  OpLShift: 152,
  "152": "OpLShift",
  OpRShift: 153,
  "153": "OpRShift",
  OpBoolAnd: 154,
  "154": "OpBoolAnd",
  OpBoolOr: 155,
  "155": "OpBoolOr",
  OpNumEqual: 156,
  "156": "OpNumEqual",
  OpNumEqualVerify: 157,
  "157": "OpNumEqualVerify",
  OpNumNotEqual: 158,
  "158": "OpNumNotEqual",
  OpLessThan: 159,
  "159": "OpLessThan",
  OpGreaterThan: 160,
  "160": "OpGreaterThan",
  OpLessThanOrEqual: 161,
  "161": "OpLessThanOrEqual",
  OpGreaterThanOrEqual: 162,
  "162": "OpGreaterThanOrEqual",
  OpMin: 163,
  "163": "OpMin",
  OpMax: 164,
  "164": "OpMax",
  OpWithin: 165,
  "165": "OpWithin",
  /**
   * Undefined opcodes.
   */
  OpUnknown166: 166,
  "166": "OpUnknown166",
  OpUnknown167: 167,
  "167": "OpUnknown167",
  /**
   * Crypto opcodes.
   */
  OpSHA256: 168,
  "168": "OpSHA256",
  OpCheckMultiSigECDSA: 169,
  "169": "OpCheckMultiSigECDSA",
  OpBlake2b: 170,
  "170": "OpBlake2b",
  OpCheckSigECDSA: 171,
  "171": "OpCheckSigECDSA",
  OpCheckSig: 172,
  "172": "OpCheckSig",
  OpCheckSigVerify: 173,
  "173": "OpCheckSigVerify",
  OpCheckMultiSig: 174,
  "174": "OpCheckMultiSig",
  OpCheckMultiSigVerify: 175,
  "175": "OpCheckMultiSigVerify",
  OpCheckLockTimeVerify: 176,
  "176": "OpCheckLockTimeVerify",
  OpCheckSequenceVerify: 177,
  "177": "OpCheckSequenceVerify",
  /**
   * Undefined opcodes.
   */
  OpUnknown178: 178,
  "178": "OpUnknown178",
  OpUnknown179: 179,
  "179": "OpUnknown179",
  OpUnknown180: 180,
  "180": "OpUnknown180",
  OpUnknown181: 181,
  "181": "OpUnknown181",
  OpUnknown182: 182,
  "182": "OpUnknown182",
  OpUnknown183: 183,
  "183": "OpUnknown183",
  OpUnknown184: 184,
  "184": "OpUnknown184",
  OpUnknown185: 185,
  "185": "OpUnknown185",
  OpUnknown186: 186,
  "186": "OpUnknown186",
  OpUnknown187: 187,
  "187": "OpUnknown187",
  OpUnknown188: 188,
  "188": "OpUnknown188",
  OpUnknown189: 189,
  "189": "OpUnknown189",
  OpUnknown190: 190,
  "190": "OpUnknown190",
  OpUnknown191: 191,
  "191": "OpUnknown191",
  OpUnknown192: 192,
  "192": "OpUnknown192",
  OpUnknown193: 193,
  "193": "OpUnknown193",
  OpUnknown194: 194,
  "194": "OpUnknown194",
  OpUnknown195: 195,
  "195": "OpUnknown195",
  OpUnknown196: 196,
  "196": "OpUnknown196",
  OpUnknown197: 197,
  "197": "OpUnknown197",
  OpUnknown198: 198,
  "198": "OpUnknown198",
  OpUnknown199: 199,
  "199": "OpUnknown199",
  OpUnknown200: 200,
  "200": "OpUnknown200",
  OpUnknown201: 201,
  "201": "OpUnknown201",
  OpUnknown202: 202,
  "202": "OpUnknown202",
  OpUnknown203: 203,
  "203": "OpUnknown203",
  OpUnknown204: 204,
  "204": "OpUnknown204",
  OpUnknown205: 205,
  "205": "OpUnknown205",
  OpUnknown206: 206,
  "206": "OpUnknown206",
  OpUnknown207: 207,
  "207": "OpUnknown207",
  OpUnknown208: 208,
  "208": "OpUnknown208",
  OpUnknown209: 209,
  "209": "OpUnknown209",
  OpUnknown210: 210,
  "210": "OpUnknown210",
  OpUnknown211: 211,
  "211": "OpUnknown211",
  OpUnknown212: 212,
  "212": "OpUnknown212",
  OpUnknown213: 213,
  "213": "OpUnknown213",
  OpUnknown214: 214,
  "214": "OpUnknown214",
  OpUnknown215: 215,
  "215": "OpUnknown215",
  OpUnknown216: 216,
  "216": "OpUnknown216",
  OpUnknown217: 217,
  "217": "OpUnknown217",
  OpUnknown218: 218,
  "218": "OpUnknown218",
  OpUnknown219: 219,
  "219": "OpUnknown219",
  OpUnknown220: 220,
  "220": "OpUnknown220",
  OpUnknown221: 221,
  "221": "OpUnknown221",
  OpUnknown222: 222,
  "222": "OpUnknown222",
  OpUnknown223: 223,
  "223": "OpUnknown223",
  OpUnknown224: 224,
  "224": "OpUnknown224",
  OpUnknown225: 225,
  "225": "OpUnknown225",
  OpUnknown226: 226,
  "226": "OpUnknown226",
  OpUnknown227: 227,
  "227": "OpUnknown227",
  OpUnknown228: 228,
  "228": "OpUnknown228",
  OpUnknown229: 229,
  "229": "OpUnknown229",
  OpUnknown230: 230,
  "230": "OpUnknown230",
  OpUnknown231: 231,
  "231": "OpUnknown231",
  OpUnknown232: 232,
  "232": "OpUnknown232",
  OpUnknown233: 233,
  "233": "OpUnknown233",
  OpUnknown234: 234,
  "234": "OpUnknown234",
  OpUnknown235: 235,
  "235": "OpUnknown235",
  OpUnknown236: 236,
  "236": "OpUnknown236",
  OpUnknown237: 237,
  "237": "OpUnknown237",
  OpUnknown238: 238,
  "238": "OpUnknown238",
  OpUnknown239: 239,
  "239": "OpUnknown239",
  OpUnknown240: 240,
  "240": "OpUnknown240",
  OpUnknown241: 241,
  "241": "OpUnknown241",
  OpUnknown242: 242,
  "242": "OpUnknown242",
  OpUnknown243: 243,
  "243": "OpUnknown243",
  OpUnknown244: 244,
  "244": "OpUnknown244",
  OpUnknown245: 245,
  "245": "OpUnknown245",
  OpUnknown246: 246,
  "246": "OpUnknown246",
  OpUnknown247: 247,
  "247": "OpUnknown247",
  OpUnknown248: 248,
  "248": "OpUnknown248",
  OpUnknown249: 249,
  "249": "OpUnknown249",
  OpSmallInteger: 250,
  "250": "OpSmallInteger",
  OpPubKeys: 251,
  "251": "OpPubKeys",
  OpUnknown252: 252,
  "252": "OpUnknown252",
  OpPubKeyHash: 253,
  "253": "OpPubKeyHash",
  OpPubKey: 254,
  "254": "OpPubKey",
  OpInvalidOpCode: 255,
  "255": "OpInvalidOpCode"
});
/**
 * Kaspa Sighash types allowed by consensus
 * @category Consensus
 * @enum {0 | 1 | 2 | 3 | 4 | 5}
 */
const SighashType = Object.freeze({
  All: 0,
  "0": "All",
  None: 1,
  "1": "None",
  Single: 2,
  "2": "Single",
  AllAnyOneCanPay: 3,
  "3": "AllAnyOneCanPay",
  NoneAnyOneCanPay: 4,
  "4": "NoneAnyOneCanPay",
  SingleAnyOneCanPay: 5,
  "5": "SingleAnyOneCanPay"
});
const __wbindgen_enum_BinaryType = ["blob", "arraybuffer"];
const __wbindgen_enum_IdbCursorDirection = ["next", "nextunique", "prev", "prevunique"];
const __wbindgen_enum_IdbRequestReadyState = ["pending", "done"];
const __wbindgen_enum_IdbTransactionMode = ["readonly", "readwrite", "versionchange", "readwriteflush", "cleanup"];
const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];
const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];
const AbortableFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_abortable_free(ptr >>> 0, 1));
/**
 *
 * Abortable trigger wraps an `Arc<AtomicBool>`, which can be cloned
 * to signal task terminating using an atomic bool.
 *
 * ```text
 * let abortable = Abortable::default();
 * let result = my_task(abortable).await?;
 * // ... elsewhere
 * abortable.abort();
 * ```
 *
 * @category General
 */
class Abortable {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AbortableFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_abortable_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.abortable_new();
    this.__wbg_ptr = ret >>> 0;
    AbortableFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {boolean}
   */
  isAborted() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.abortable_isAborted(this.__wbg_ptr);
    return ret !== 0;
  }
  abort() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.abortable_abort(this.__wbg_ptr);
  }
  check() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.abortable_check(this.__wbg_ptr);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  reset() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.abortable_reset(this.__wbg_ptr);
  }
}
const AbortedFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_aborted_free(ptr >>> 0, 1));
/**
 * Error emitted by [`Abortable`].
 * @category General
 */
class Aborted {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Aborted.prototype);
    obj.__wbg_ptr = ptr;
    AbortedFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AbortedFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_aborted_free(ptr, 0);
  }
}
const AccountKindFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_accountkind_free(ptr >>> 0, 1));
/**
 *
 * Account kind is a string signature that represents an account type.
 * Account kind is used to identify the account type during
 * serialization, deserialization and various API calls.
 *
 * @category Wallet SDK
 */
class AccountKind {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(AccountKind.prototype);
    obj.__wbg_ptr = ptr;
    AccountKindFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountKindFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountkind_free(ptr, 0);
  }
  /**
   * @param {string} kind
   */
  constructor(kind) {
    const ptr0 = passStringToWasm0(kind, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.accountkind_ctor(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    AccountKindFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.accountkind_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const AddressFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_address_free(ptr >>> 0, 1));
/**
 * Kaspa [`Address`] struct that serializes to and from an address format string: `kaspa:qz0s...t8cv`.
 *
 * @category Address
 */
class Address {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Address.prototype);
    obj.__wbg_ptr = ptr;
    AddressFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      version: this.version,
      prefix: this.prefix,
      payload: this.payload
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AddressFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_address_free(ptr, 0);
  }
  /**
   * @param {string} address
   */
  constructor(address) {
    const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.address_constructor(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    AddressFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {string} address
   * @returns {boolean}
   */
  static validate(address) {
    const ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.address_validate(ptr0, len0);
    return ret !== 0;
  }
  /**
   * Convert an address to a string.
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.address_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  get version() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.address_version(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  get prefix() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.address_prefix(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} prefix
   */
  set setPrefix(prefix) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.address_set_setPrefix(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get payload() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.address_payload(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {number} n
   * @returns {string}
   */
  short(n) {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      _assertNum(n);
      const ret = wasm.address_short(this.__wbg_ptr, n);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const AgentConstructorOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_agentconstructoroptions_free(ptr >>> 0, 1));
class AgentConstructorOptions {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AgentConstructorOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_agentconstructoroptions_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get keep_alive_msecs() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.agentconstructoroptions_keep_alive_msecs(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} value
   */
  set keep_alive_msecs(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.agentconstructoroptions_set_keep_alive_msecs(this.__wbg_ptr, value);
  }
  /**
   * @returns {boolean}
   */
  get keep_alive() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.agentconstructoroptions_keep_alive(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} value
   */
  set keep_alive(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBoolean(value);
    wasm.agentconstructoroptions_set_keep_alive(this.__wbg_ptr, value);
  }
  /**
   * @returns {number}
   */
  get max_free_sockets() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.agentconstructoroptions_max_free_sockets(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} value
   */
  set max_free_sockets(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.agentconstructoroptions_set_max_free_sockets(this.__wbg_ptr, value);
  }
  /**
   * @returns {number}
   */
  get max_sockets() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.agentconstructoroptions_max_sockets(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} value
   */
  set max_sockets(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.agentconstructoroptions_set_max_sockets(this.__wbg_ptr, value);
  }
  /**
   * @returns {number}
   */
  get timeout() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.agentconstructoroptions_timeout(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} value
   */
  set timeout(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.agentconstructoroptions_set_timeout(this.__wbg_ptr, value);
  }
}
const AppendFileOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_appendfileoptions_free(ptr >>> 0, 1));
class AppendFileOptions {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(AppendFileOptions.prototype);
    obj.__wbg_ptr = ptr;
    AppendFileOptionsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AppendFileOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_appendfileoptions_free(ptr, 0);
  }
  /**
   * @param {string | null} [encoding]
   * @param {number | null} [mode]
   * @param {string | null} [flag]
   */
  constructor(encoding, mode, flag) {
    if (!isLikeNone(mode)) {
      _assertNum(mode);
    }
    const ret = wasm.appendfileoptions_new_with_values(isLikeNone(encoding) ? 0 : addToExternrefTable0(encoding), isLikeNone(mode) ? 0x100000001 : mode >>> 0, isLikeNone(flag) ? 0 : addToExternrefTable0(flag));
    this.__wbg_ptr = ret >>> 0;
    AppendFileOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {AppendFileOptions}
   */
  static new() {
    const ret = wasm.appendfileoptions_new();
    return AppendFileOptions.__wrap(ret);
  }
  /**
   * @returns {string | undefined}
   */
  get encoding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.appendfileoptions_encoding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set encoding(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.appendfileoptions_set_encoding(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {number | undefined}
   */
  get mode() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.appendfileoptions_mode(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set mode(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.appendfileoptions_set_mode(this.__wbg_ptr, isLikeNone(value) ? 0x100000001 : value >>> 0);
  }
  /**
   * @returns {string | undefined}
   */
  get flag() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.appendfileoptions_flag(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set flag(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.appendfileoptions_set_flag(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
}
const AssertionErrorOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_assertionerroroptions_free(ptr >>> 0, 1));
class AssertionErrorOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AssertionErrorOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_assertionerroroptions_free(ptr, 0);
  }
  /**
   * @param {string | null | undefined} message
   * @param {any} actual
   * @param {any} expected
   * @param {string} operator
   */
  constructor(message, actual, expected, operator) {
    const ret = wasm.assertionerroroptions_new(isLikeNone(message) ? 0 : addToExternrefTable0(message), actual, expected, operator);
    this.__wbg_ptr = ret >>> 0;
    AssertionErrorOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * If provided, the error message is set to this value.
   * @returns {string | undefined}
   */
  get message() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.assertionerroroptions_message(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set message(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.assertionerroroptions_set_message(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * The actual property on the error instance.
   * @returns {any}
   */
  get actual() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.assertionerroroptions_actual(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} value
   */
  set actual(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.assertionerroroptions_set_actual(this.__wbg_ptr, value);
  }
  /**
   * The expected property on the error instance.
   * @returns {any}
   */
  get expected() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.assertionerroroptions_expected(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} value
   */
  set expected(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.assertionerroroptions_set_expected(this.__wbg_ptr, value);
  }
  /**
   * The operator property on the error instance.
   * @returns {string}
   */
  get operator() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.assertionerroroptions_operator(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string} value
   */
  set operator(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.assertionerroroptions_set_operator(this.__wbg_ptr, value);
  }
}
const BalanceFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_balance_free(ptr >>> 0, 1));
/**
 *
 * Represents a {@link UtxoContext} (account) balance.
 *
 * @see {@link IBalance}, {@link UtxoContext}
 *
 * @category Wallet SDK
 */
class Balance {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Balance.prototype);
    obj.__wbg_ptr = ptr;
    BalanceFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    BalanceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_balance_free(ptr, 0);
  }
  /**
   * Confirmed amount of funds available for spending.
   * @returns {bigint}
   */
  get mature() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.balance_mature(this.__wbg_ptr);
    return ret;
  }
  /**
   * Amount of funds that are being received and are not yet confirmed.
   * @returns {bigint}
   */
  get pending() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.balance_pending(this.__wbg_ptr);
    return ret;
  }
  /**
   * Amount of funds that are being send and are not yet accepted by the network.
   * @returns {bigint}
   */
  get outgoing() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.balance_outgoing(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {NetworkType | NetworkId | string} network_type
   * @returns {BalanceStrings}
   */
  toBalanceStrings(network_type) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.balance_toBalanceStrings(this.__wbg_ptr, network_type);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return BalanceStrings.__wrap(ret[0]);
  }
}
const BalanceStringsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_balancestrings_free(ptr >>> 0, 1));
/**
 *
 * Formatted string representation of the {@link Balance}.
 *
 * The value is formatted as `123,456.789`.
 *
 * @category Wallet SDK
 */
class BalanceStrings {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(BalanceStrings.prototype);
    obj.__wbg_ptr = ptr;
    BalanceStringsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    BalanceStringsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_balancestrings_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get mature() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.balancestrings_mature(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string | undefined}
   */
  get pending() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.balancestrings_pending(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
}
const ConsoleConstructorOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_consoleconstructoroptions_free(ptr >>> 0, 1));
class ConsoleConstructorOptions {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(ConsoleConstructorOptions.prototype);
    obj.__wbg_ptr = ptr;
    ConsoleConstructorOptionsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ConsoleConstructorOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_consoleconstructoroptions_free(ptr, 0);
  }
  /**
   * @param {any} stdout
   * @param {any} stderr
   * @param {boolean | null | undefined} ignore_errors
   * @param {any} color_mod
   * @param {object | null} [inspect_options]
   */
  constructor(stdout, stderr, ignore_errors, color_mod, inspect_options) {
    if (!isLikeNone(ignore_errors)) {
      _assertBoolean(ignore_errors);
    }
    const ret = wasm.consoleconstructoroptions_new_with_values(stdout, stderr, isLikeNone(ignore_errors) ? 0xFFFFFF : ignore_errors ? 1 : 0, color_mod, isLikeNone(inspect_options) ? 0 : addToExternrefTable0(inspect_options));
    this.__wbg_ptr = ret >>> 0;
    ConsoleConstructorOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {any} stdout
   * @param {any} stderr
   * @returns {ConsoleConstructorOptions}
   */
  static new(stdout, stderr) {
    const ret = wasm.consoleconstructoroptions_new(stdout, stderr);
    return ConsoleConstructorOptions.__wrap(ret);
  }
  /**
   * @returns {any}
   */
  get stdout() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.consoleconstructoroptions_stdout(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} value
   */
  set stdout(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.consoleconstructoroptions_set_stdout(this.__wbg_ptr, value);
  }
  /**
   * @returns {any}
   */
  get stderr() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.consoleconstructoroptions_stderr(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} value
   */
  set stderr(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.consoleconstructoroptions_set_stderr(this.__wbg_ptr, value);
  }
  /**
   * @returns {boolean | undefined}
   */
  get ignore_errors() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.consoleconstructoroptions_ignore_errors(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set ignore_errors(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.consoleconstructoroptions_set_ignore_errors(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
  /**
   * @returns {any}
   */
  get color_mod() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.consoleconstructoroptions_color_mod(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} value
   */
  set color_mod(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.consoleconstructoroptions_set_color_mod(this.__wbg_ptr, value);
  }
  /**
   * @returns {object | undefined}
   */
  get inspect_options() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.consoleconstructoroptions_inspect_options(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {object | null} [value]
   */
  set inspect_options(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.consoleconstructoroptions_set_inspect_options(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
}
const CreateHookCallbacksFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_createhookcallbacks_free(ptr >>> 0, 1));
class CreateHookCallbacks {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    CreateHookCallbacksFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_createhookcallbacks_free(ptr, 0);
  }
  /**
   * @param {Function} init
   * @param {Function} before
   * @param {Function} after
   * @param {Function} destroy
   * @param {Function} promise_resolve
   */
  constructor(init, before, after, destroy, promise_resolve) {
    const ret = wasm.createhookcallbacks_new(init, before, after, destroy, promise_resolve);
    this.__wbg_ptr = ret >>> 0;
    CreateHookCallbacksFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Function}
   */
  get init() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createhookcallbacks_init(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set init(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createhookcallbacks_set_init(this.__wbg_ptr, value);
  }
  /**
   * @returns {Function}
   */
  get before() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createhookcallbacks_before(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set before(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createhookcallbacks_set_before(this.__wbg_ptr, value);
  }
  /**
   * @returns {Function}
   */
  get after() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createhookcallbacks_after(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set after(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createhookcallbacks_set_after(this.__wbg_ptr, value);
  }
  /**
   * @returns {Function}
   */
  get destroy() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createhookcallbacks_destroy(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set destroy(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createhookcallbacks_set_destroy(this.__wbg_ptr, value);
  }
  /**
   * @returns {Function}
   */
  get promise_resolve() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createhookcallbacks_promise_resolve(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set promise_resolve(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createhookcallbacks_set_promise_resolve(this.__wbg_ptr, value);
  }
}
const CreateReadStreamOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_createreadstreamoptions_free(ptr >>> 0, 1));
class CreateReadStreamOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    CreateReadStreamOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_createreadstreamoptions_free(ptr, 0);
  }
  /**
   * @param {boolean | null} [auto_close]
   * @param {boolean | null} [emit_close]
   * @param {string | null} [encoding]
   * @param {number | null} [end]
   * @param {number | null} [fd]
   * @param {string | null} [flags]
   * @param {number | null} [high_water_mark]
   * @param {number | null} [mode]
   * @param {number | null} [start]
   */
  constructor(auto_close, emit_close, encoding, end, fd, flags, high_water_mark, mode, start) {
    if (!isLikeNone(auto_close)) {
      _assertBoolean(auto_close);
    }
    if (!isLikeNone(emit_close)) {
      _assertBoolean(emit_close);
    }
    if (!isLikeNone(end)) {
      _assertNum(end);
    }
    if (!isLikeNone(fd)) {
      _assertNum(fd);
    }
    if (!isLikeNone(high_water_mark)) {
      _assertNum(high_water_mark);
    }
    if (!isLikeNone(mode)) {
      _assertNum(mode);
    }
    if (!isLikeNone(start)) {
      _assertNum(start);
    }
    const ret = wasm.createreadstreamoptions_new_with_values(isLikeNone(auto_close) ? 0xFFFFFF : auto_close ? 1 : 0, isLikeNone(emit_close) ? 0xFFFFFF : emit_close ? 1 : 0, isLikeNone(encoding) ? 0 : addToExternrefTable0(encoding), !isLikeNone(end), isLikeNone(end) ? 0 : end, isLikeNone(fd) ? 0x100000001 : fd >>> 0, isLikeNone(flags) ? 0 : addToExternrefTable0(flags), !isLikeNone(high_water_mark), isLikeNone(high_water_mark) ? 0 : high_water_mark, isLikeNone(mode) ? 0x100000001 : mode >>> 0, !isLikeNone(start), isLikeNone(start) ? 0 : start);
    this.__wbg_ptr = ret >>> 0;
    CreateReadStreamOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {boolean | undefined}
   */
  get auto_close() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_auto_close(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set auto_close(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.createreadstreamoptions_set_auto_close(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
  /**
   * @returns {boolean | undefined}
   */
  get emit_close() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_emit_close(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set emit_close(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.createreadstreamoptions_set_emit_close(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
  /**
   * @returns {string | undefined}
   */
  get encoding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_encoding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set encoding(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createreadstreamoptions_set_encoding(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {number | undefined}
   */
  get end() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_end(this.__wbg_ptr);
    return ret[0] === 0 ? undefined : ret[1];
  }
  /**
   * @param {number | null} [value]
   */
  set end(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createreadstreamoptions_set_end(this.__wbg_ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
  }
  /**
   * @returns {number | undefined}
   */
  get fd() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_fd(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set fd(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createreadstreamoptions_set_fd(this.__wbg_ptr, isLikeNone(value) ? 0x100000001 : value >>> 0);
  }
  /**
   * @returns {string | undefined}
   */
  get flags() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_flags(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set flags(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createreadstreamoptions_set_flags(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {number | undefined}
   */
  get high_water_mark() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_high_water_mark(this.__wbg_ptr);
    return ret[0] === 0 ? undefined : ret[1];
  }
  /**
   * @param {number | null} [value]
   */
  set high_water_mark(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createreadstreamoptions_set_high_water_mark(this.__wbg_ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
  }
  /**
   * @returns {number | undefined}
   */
  get mode() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_mode(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set mode(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createreadstreamoptions_set_mode(this.__wbg_ptr, isLikeNone(value) ? 0x100000001 : value >>> 0);
  }
  /**
   * @returns {number | undefined}
   */
  get start() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createreadstreamoptions_start(this.__wbg_ptr);
    return ret[0] === 0 ? undefined : ret[1];
  }
  /**
   * @param {number | null} [value]
   */
  set start(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createreadstreamoptions_set_start(this.__wbg_ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
  }
}
const CreateWriteStreamOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_createwritestreamoptions_free(ptr >>> 0, 1));
class CreateWriteStreamOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    CreateWriteStreamOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_createwritestreamoptions_free(ptr, 0);
  }
  /**
   * @param {boolean | null} [auto_close]
   * @param {boolean | null} [emit_close]
   * @param {string | null} [encoding]
   * @param {number | null} [fd]
   * @param {string | null} [flags]
   * @param {number | null} [mode]
   * @param {number | null} [start]
   */
  constructor(auto_close, emit_close, encoding, fd, flags, mode, start) {
    if (!isLikeNone(auto_close)) {
      _assertBoolean(auto_close);
    }
    if (!isLikeNone(emit_close)) {
      _assertBoolean(emit_close);
    }
    if (!isLikeNone(fd)) {
      _assertNum(fd);
    }
    if (!isLikeNone(mode)) {
      _assertNum(mode);
    }
    if (!isLikeNone(start)) {
      _assertNum(start);
    }
    const ret = wasm.createwritestreamoptions_new_with_values(isLikeNone(auto_close) ? 0xFFFFFF : auto_close ? 1 : 0, isLikeNone(emit_close) ? 0xFFFFFF : emit_close ? 1 : 0, isLikeNone(encoding) ? 0 : addToExternrefTable0(encoding), isLikeNone(fd) ? 0x100000001 : fd >>> 0, isLikeNone(flags) ? 0 : addToExternrefTable0(flags), isLikeNone(mode) ? 0x100000001 : mode >>> 0, !isLikeNone(start), isLikeNone(start) ? 0 : start);
    this.__wbg_ptr = ret >>> 0;
    CreateWriteStreamOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {boolean | undefined}
   */
  get auto_close() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_auto_close(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set auto_close(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.createwritestreamoptions_set_auto_close(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
  /**
   * @returns {boolean | undefined}
   */
  get emit_close() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_emit_close(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set emit_close(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.createwritestreamoptions_set_emit_close(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
  /**
   * @returns {string | undefined}
   */
  get encoding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_encoding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set encoding(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createwritestreamoptions_set_encoding(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {number | undefined}
   */
  get fd() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_fd(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set fd(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createwritestreamoptions_set_fd(this.__wbg_ptr, isLikeNone(value) ? 0x100000001 : value >>> 0);
  }
  /**
   * @returns {string | undefined}
   */
  get flags() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_flags(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set flags(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.createwritestreamoptions_set_flags(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {number | undefined}
   */
  get mode() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_mode(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set mode(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createwritestreamoptions_set_mode(this.__wbg_ptr, isLikeNone(value) ? 0x100000001 : value >>> 0);
  }
  /**
   * @returns {number | undefined}
   */
  get start() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.createwritestreamoptions_start(this.__wbg_ptr);
    return ret[0] === 0 ? undefined : ret[1];
  }
  /**
   * @param {number | null} [value]
   */
  set start(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.createwritestreamoptions_set_start(this.__wbg_ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
  }
}
const CryptoBoxFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_cryptobox_free(ptr >>> 0, 1));
/**
 *
 * CryptoBox allows for encrypting and decrypting messages using the `crypto_box` crate.
 *
 * <https://docs.rs/crypto_box/0.9.1/crypto_box/>
 *
 *  @category Wallet SDK
 */
class CryptoBox {
  toJSON() {
    return {
      publicKey: this.publicKey
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    CryptoBoxFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_cryptobox_free(ptr, 0);
  }
  /**
   * @param {CryptoBoxPrivateKey | HexString | Uint8Array} secretKey
   * @param {CryptoBoxPublicKey | HexString | Uint8Array} peerPublicKey
   */
  constructor(secretKey, peerPublicKey) {
    const ret = wasm.cryptobox_ctor(secretKey, peerPublicKey);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    CryptoBoxFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  get publicKey() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.cryptobox_publicKey(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} plaintext
   * @returns {string}
   */
  encrypt(plaintext) {
    let deferred3_0;
    let deferred3_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ptr0 = passStringToWasm0(plaintext, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.cryptobox_encrypt(this.__wbg_ptr, ptr0, len0);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  /**
   * @param {string} base64string
   * @returns {string}
   */
  decrypt(base64string) {
    let deferred3_0;
    let deferred3_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ptr0 = passStringToWasm0(base64string, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.cryptobox_decrypt(this.__wbg_ptr, ptr0, len0);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
}
const CryptoBoxPrivateKeyFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_cryptoboxprivatekey_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class CryptoBoxPrivateKey {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    CryptoBoxPrivateKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_cryptoboxprivatekey_free(ptr, 0);
  }
  /**
   * @param {HexString | Uint8Array} secretKey
   */
  constructor(secretKey) {
    const ret = wasm.cryptoboxprivatekey_ctor(secretKey);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    CryptoBoxPrivateKeyFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {CryptoBoxPublicKey}
   */
  to_public_key() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.cryptoboxprivatekey_to_public_key(this.__wbg_ptr);
    return CryptoBoxPublicKey.__wrap(ret);
  }
}
const CryptoBoxPublicKeyFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_cryptoboxpublickey_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class CryptoBoxPublicKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(CryptoBoxPublicKey.prototype);
    obj.__wbg_ptr = ptr;
    CryptoBoxPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    CryptoBoxPublicKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_cryptoboxpublickey_free(ptr, 0);
  }
  /**
   * @param {HexString | Uint8Array} publicKey
   */
  constructor(publicKey) {
    const ret = wasm.cryptoboxpublickey_ctor(publicKey);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    CryptoBoxPublicKeyFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.cryptoboxpublickey_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const DerivationPathFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_derivationpath_free(ptr >>> 0, 1));
/**
 *
 * Key derivation path
 *
 * @category Wallet SDK
 */
class DerivationPath {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(DerivationPath.prototype);
    obj.__wbg_ptr = ptr;
    DerivationPathFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    DerivationPathFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_derivationpath_free(ptr, 0);
  }
  /**
   * @param {string} path
   */
  constructor(path) {
    const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.derivationpath_new(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    DerivationPathFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Is this derivation path empty? (i.e. the root)
   * @returns {boolean}
   */
  isEmpty() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.derivationpath_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Get the count of [`ChildNumber`] values in this derivation path.
   * @returns {number}
   */
  length() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.derivationpath_length(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get the parent [`DerivationPath`] for the current one.
   *
   * Returns `Undefined` if this is already the root path.
   * @returns {DerivationPath | undefined}
   */
  parent() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.derivationpath_parent(this.__wbg_ptr);
    return ret === 0 ? undefined : DerivationPath.__wrap(ret);
  }
  /**
   * Push a [`ChildNumber`] onto an existing derivation path.
   * @param {number} child_number
   * @param {boolean | null} [hardened]
   */
  push(child_number, hardened) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(child_number);
    if (!isLikeNone(hardened)) {
      _assertBoolean(hardened);
    }
    const ret = wasm.derivationpath_push(this.__wbg_ptr, child_number, isLikeNone(hardened) ? 0xFFFFFF : hardened ? 1 : 0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.derivationpath_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const FormatInputPathObjectFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_formatinputpathobject_free(ptr >>> 0, 1));
class FormatInputPathObject {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(FormatInputPathObject.prototype);
    obj.__wbg_ptr = ptr;
    FormatInputPathObjectFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FormatInputPathObjectFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_formatinputpathobject_free(ptr, 0);
  }
  /**
   * @param {string | null} [base]
   * @param {string | null} [dir]
   * @param {string | null} [ext]
   * @param {string | null} [name]
   * @param {string | null} [root]
   */
  constructor(base, dir, ext, name, root) {
    const ret = wasm.formatinputpathobject_new_with_values(isLikeNone(base) ? 0 : addToExternrefTable0(base), isLikeNone(dir) ? 0 : addToExternrefTable0(dir), isLikeNone(ext) ? 0 : addToExternrefTable0(ext), isLikeNone(name) ? 0 : addToExternrefTable0(name), isLikeNone(root) ? 0 : addToExternrefTable0(root));
    this.__wbg_ptr = ret >>> 0;
    FormatInputPathObjectFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {FormatInputPathObject}
   */
  static new() {
    const ret = wasm.formatinputpathobject_new();
    return FormatInputPathObject.__wrap(ret);
  }
  /**
   * @returns {string | undefined}
   */
  get base() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.formatinputpathobject_base(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set base(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.formatinputpathobject_set_base(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {string | undefined}
   */
  get dir() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.formatinputpathobject_dir(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set dir(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.formatinputpathobject_set_dir(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {string | undefined}
   */
  get ext() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.formatinputpathobject_ext(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set ext(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.formatinputpathobject_set_ext(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {string | undefined}
   */
  get name() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.formatinputpathobject_name(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set name(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.formatinputpathobject_set_name(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {string | undefined}
   */
  get root() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.formatinputpathobject_root(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set root(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.formatinputpathobject_set_root(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
}
const GeneratorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_generator_free(ptr >>> 0, 1));
/**
 * Generator is a type capable of generating transactions based on a supplied
 * set of UTXO entries or a UTXO entry producer (such as {@link UtxoContext}). The Generator
 * accumulates UTXO entries until it can generate a transaction that meets the
 * requested amount or until the total mass of created inputs exceeds the allowed
 * transaction mass, at which point it will produce a compound transaction by forwarding
 * all selected UTXO entries to the supplied change address and prepare to start generating
 * a new transaction.  Such sequence of daisy-chained transactions is known as a "batch".
 * Each compound transaction results in a new UTXO, which is immediately reused in the
 * subsequent transaction.
 *
 * The Generator constructor accepts a single {@link IGeneratorSettingsObject} object.
 *
 * ```javascript
 *
 * let generator = new Generator({
 *     utxoEntries : [...],
 *     changeAddress : "kaspa:...",
 *     outputs : [
 *         { amount : kaspaToSompi(10.0), address: "kaspa:..."},
 *         { amount : kaspaToSompi(20.0), address: "kaspa:..."},
 *         ...
 *     ],
 *     priorityFee : 1000n,
 * });
 *
 * let pendingTransaction;
 * while(pendingTransaction = await generator.next()) {
 *     await pendingTransaction.sign(privateKeys);
 *     await pendingTransaction.submit(rpc);
 * }
 *
 * let summary = generator.summary();
 * console.log(summary);
 *
 * ```
 * @see
 *     {@link IGeneratorSettingsObject},
 *     {@link PendingTransaction},
 *     {@link UtxoContext},
 *     {@link createTransactions},
 *     {@link estimateTransactions},
 * @category Wallet SDK
 */
class Generator {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    GeneratorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_generator_free(ptr, 0);
  }
  /**
   * @param {IGeneratorSettingsObject} args
   */
  constructor(args) {
    const ret = wasm.generator_ctor(args);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    GeneratorFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Generate next transaction
   * @returns {Promise<any>}
   */
  next() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generator_next(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<GeneratorSummary>}
   */
  estimate() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generator_estimate(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {GeneratorSummary}
   */
  summary() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generator_summary(this.__wbg_ptr);
    return GeneratorSummary.__wrap(ret);
  }
}
const GeneratorSummaryFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_generatorsummary_free(ptr >>> 0, 1));
/**
 *
 * A class containing a summary produced by transaction {@link Generator}.
 * This class contains the number of transactions, the aggregated fees,
 * the aggregated UTXOs and the final transaction amount that includes
 * both network and QoS (priority) fees.
 *
 * @see {@link createTransactions}, {@link IGeneratorSettingsObject}, {@link Generator}
 * @category Wallet SDK
 */
class GeneratorSummary {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(GeneratorSummary.prototype);
    obj.__wbg_ptr = ptr;
    GeneratorSummaryFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      networkType: this.networkType,
      utxos: this.utxos,
      fees: this.fees,
      transactions: this.transactions,
      finalAmount: this.finalAmount,
      finalTransactionId: this.finalTransactionId
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    GeneratorSummaryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_generatorsummary_free(ptr, 0);
  }
  /**
   * @returns {NetworkType}
   */
  get networkType() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generatorsummary_networkType(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  get utxos() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generatorsummary_utxos(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {bigint}
   */
  get fees() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generatorsummary_fees(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  get transactions() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generatorsummary_transactions(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {bigint | undefined}
   */
  get finalAmount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generatorsummary_finalAmount(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string | undefined}
   */
  get finalTransactionId() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.generatorsummary_finalTransactionId(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
}
const GetNameOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_getnameoptions_free(ptr >>> 0, 1));
class GetNameOptions {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(GetNameOptions.prototype);
    obj.__wbg_ptr = ptr;
    GetNameOptionsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    GetNameOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_getnameoptions_free(ptr, 0);
  }
  /**
   * @param {number | null | undefined} family
   * @param {string} host
   * @param {string} local_address
   * @param {number} port
   * @returns {GetNameOptions}
   */
  static new(family, host, local_address, port) {
    if (!isLikeNone(family)) {
      _assertNum(family);
    }
    _assertNum(port);
    const ret = wasm.getnameoptions_new(isLikeNone(family) ? 0xFFFFFF : family, host, local_address, port);
    return GetNameOptions.__wrap(ret);
  }
  /**
   * @returns {number | undefined}
   */
  get family() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.getnameoptions_family(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set family(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.getnameoptions_set_family(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value);
  }
  /**
   * @returns {string}
   */
  get host() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.getnameoptions_host(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string} value
   */
  set host(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.getnameoptions_set_host(this.__wbg_ptr, value);
  }
  /**
   * @returns {string}
   */
  get local_address() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.getnameoptions_local_address(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string} value
   */
  set local_address(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.getnameoptions_set_local_address(this.__wbg_ptr, value);
  }
  /**
   * @returns {number}
   */
  get port() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.getnameoptions_port(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} value
   */
  set port(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(value);
    wasm.getnameoptions_set_port(this.__wbg_ptr, value);
  }
}
const HashFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_hash_free(ptr >>> 0, 1));
/**
 * @category General
 */
class Hash {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Hash.prototype);
    obj.__wbg_ptr = ptr;
    HashFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    HashFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_hash_free(ptr, 0);
  }
  /**
   * @param {string} hex_str
   */
  constructor(hex_str) {
    const ptr0 = passStringToWasm0(hex_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.hash_constructor(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    HashFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.hash_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const HeaderFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_header_free(ptr >>> 0, 1));
/**
 * Kaspa Block Header
 *
 * @category Consensus
 */
class Header {
  toJSON() {
    return {
      version: this.version,
      timestamp: this.timestamp,
      bits: this.bits,
      nonce: this.nonce,
      daaScore: this.daaScore,
      blueScore: this.blueScore,
      hash: this.hash,
      hashMerkleRoot: this.hashMerkleRoot,
      acceptedIdMerkleRoot: this.acceptedIdMerkleRoot,
      utxoCommitment: this.utxoCommitment,
      pruningPoint: this.pruningPoint,
      parentsByLevel: this.parentsByLevel,
      blueWork: this.blueWork
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    HeaderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_header_free(ptr, 0);
  }
  /**
   * @param {Header | IHeader | IRawHeader} js_value
   */
  constructor(js_value) {
    const ret = wasm.header_constructor(js_value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    HeaderFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Finalizes the header and recomputes (updates) the header hash
   * @return { String } header hash
   * @returns {string}
   */
  finalize() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_finalize(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Obtain `JSON` representation of the header. JSON representation
   * should be obtained using WASM, to ensure proper serialization of
   * big integers.
   * @returns {string}
   */
  asJSON() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_asJSON(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {number}
   */
  get version() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_get_version(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} version
   */
  set version(version) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(version);
    wasm.header_set_version(this.__wbg_ptr, version);
  }
  /**
   * @returns {bigint}
   */
  get timestamp() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_get_timestamp(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} timestamp
   */
  set timestamp(timestamp) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(timestamp);
    wasm.header_set_timestamp(this.__wbg_ptr, timestamp);
  }
  /**
   * @returns {number}
   */
  get bits() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_bits(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} bits
   */
  set bits(bits) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(bits);
    wasm.header_set_bits(this.__wbg_ptr, bits);
  }
  /**
   * @returns {bigint}
   */
  get nonce() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_nonce(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} nonce
   */
  set nonce(nonce) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(nonce);
    wasm.header_set_nonce(this.__wbg_ptr, nonce);
  }
  /**
   * @returns {bigint}
   */
  get daaScore() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_daa_score(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} daa_score
   */
  set daaScore(daa_score) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(daa_score);
    wasm.header_set_daa_score(this.__wbg_ptr, daa_score);
  }
  /**
   * @returns {bigint}
   */
  get blueScore() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_blue_score(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} blue_score
   */
  set blueScore(blue_score) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(blue_score);
    wasm.header_set_blue_score(this.__wbg_ptr, blue_score);
  }
  /**
   * @returns {string}
   */
  get hash() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_get_hash_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  get hashMerkleRoot() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_get_hash_merkle_root_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set hashMerkleRoot(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.header_set_hash_merkle_root_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {string}
   */
  get acceptedIdMerkleRoot() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_get_accepted_id_merkle_root_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set acceptedIdMerkleRoot(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.header_set_accepted_id_merkle_root_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {string}
   */
  get utxoCommitment() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_get_utxo_commitment_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set utxoCommitment(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.header_set_utxo_commitment_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {string}
   */
  get pruningPoint() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_get_pruning_point_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set pruningPoint(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.header_set_pruning_point_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {any}
   */
  get parentsByLevel() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_get_parents_by_level_as_js_value(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} js_value
   */
  set parentsByLevel(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.header_set_parents_by_level_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {bigint}
   */
  get blueWork() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.header_blue_work(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  getBlueWorkAsHex() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.header_getBlueWorkAsHex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set blueWork(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.header_set_blue_work_from_js_value(this.__wbg_ptr, js_value);
  }
}
const KeypairFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_keypair_free(ptr >>> 0, 1));
/**
 * Data structure that contains a secret and public keys.
 * @category Wallet SDK
 */
class Keypair {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Keypair.prototype);
    obj.__wbg_ptr = ptr;
    KeypairFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      publicKey: this.publicKey,
      privateKey: this.privateKey,
      xOnlyPublicKey: this.xOnlyPublicKey
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    KeypairFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_keypair_free(ptr, 0);
  }
  /**
   * Get the [`PublicKey`] of this [`Keypair`].
   * @returns {string}
   */
  get publicKey() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.keypair_get_public_key(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the [`PrivateKey`] of this [`Keypair`].
   * @returns {string}
   */
  get privateKey() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.keypair_get_private_key(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the `XOnlyPublicKey` of this [`Keypair`].
   * @returns {any}
   */
  get xOnlyPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.keypair_get_xonly_public_key(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get the [`Address`] of this Keypair's [`PublicKey`].
   * Receives a [`NetworkType`](kaspa_consensus_core::network::NetworkType)
   * to determine the prefix of the address.
   * JavaScript: `let address = keypair.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddress(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.keypair_toAddress(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Get `ECDSA` [`Address`] of this Keypair's [`PublicKey`].
   * Receives a [`NetworkType`](kaspa_consensus_core::network::NetworkType)
   * to determine the prefix of the address.
   * JavaScript: `let address = keypair.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddressECDSA(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.keypair_toAddressECDSA(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Create a new random [`Keypair`].
   * JavaScript: `let keypair = Keypair::random();`.
   * @returns {Keypair}
   */
  static random() {
    const ret = wasm.keypair_random();
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Keypair.__wrap(ret[0]);
  }
  /**
   * Create a new [`Keypair`] from a [`PrivateKey`].
   * JavaScript: `let privkey = new PrivateKey(hexString); let keypair = privkey.toKeypair();`.
   * @param {PrivateKey} secret_key
   * @returns {Keypair}
   */
  static fromPrivateKey(secret_key) {
    _assertClass(secret_key, PrivateKey);
    if (secret_key.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.keypair_fromPrivateKey(secret_key.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Keypair.__wrap(ret[0]);
  }
}
const MkdtempSyncOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_mkdtempsyncoptions_free(ptr >>> 0, 1));
class MkdtempSyncOptions {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(MkdtempSyncOptions.prototype);
    obj.__wbg_ptr = ptr;
    MkdtempSyncOptionsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    MkdtempSyncOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_mkdtempsyncoptions_free(ptr, 0);
  }
  /**
   * @param {string | null} [encoding]
   */
  constructor(encoding) {
    const ret = wasm.mkdtempsyncoptions_new_with_values(isLikeNone(encoding) ? 0 : addToExternrefTable0(encoding));
    this.__wbg_ptr = ret >>> 0;
    MkdtempSyncOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {MkdtempSyncOptions}
   */
  static new() {
    const ret = wasm.mkdtempsyncoptions_new();
    return MkdtempSyncOptions.__wrap(ret);
  }
  /**
   * @returns {string | undefined}
   */
  get encoding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.mkdtempsyncoptions_encoding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set encoding(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.mkdtempsyncoptions_set_encoding(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
}
const MnemonicFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_mnemonic_free(ptr >>> 0, 1));
/**
 * BIP39 mnemonic phrases: sequences of words representing cryptographic keys.
 * @category Wallet SDK
 */
class Mnemonic {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Mnemonic.prototype);
    obj.__wbg_ptr = ptr;
    MnemonicFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      entropy: this.entropy,
      phrase: this.phrase
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    MnemonicFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_mnemonic_free(ptr, 0);
  }
  /**
   * @param {string} phrase
   * @param {Language | null} [language]
   */
  constructor(phrase, language) {
    const ptr0 = passStringToWasm0(phrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    if (!isLikeNone(language)) {
      _assertNum(language);
    }
    const ret = wasm.mnemonic_constructor(ptr0, len0, isLikeNone(language) ? 1 : language);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    MnemonicFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Validate mnemonic phrase. Returns `true` if the phrase is valid, `false` otherwise.
   * @param {string} phrase
   * @param {Language | null} [language]
   * @returns {boolean}
   */
  static validate(phrase, language) {
    const ptr0 = passStringToWasm0(phrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    if (!isLikeNone(language)) {
      _assertNum(language);
    }
    const ret = wasm.mnemonic_validate(ptr0, len0, isLikeNone(language) ? 1 : language);
    return ret !== 0;
  }
  /**
   * @returns {string}
   */
  get entropy() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.mnemonic_entropy(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} entropy
   */
  set entropy(entropy) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(entropy, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.mnemonic_set_entropy(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {number | null} [word_count]
   * @returns {Mnemonic}
   */
  static random(word_count) {
    if (!isLikeNone(word_count)) {
      _assertNum(word_count);
    }
    const ret = wasm.mnemonic_random(isLikeNone(word_count) ? 0x100000001 : word_count >>> 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Mnemonic.__wrap(ret[0]);
  }
  /**
   * @returns {string}
   */
  get phrase() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.mnemonic_phrase(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} phrase
   */
  set phrase(phrase) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(phrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.mnemonic_set_phrase(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string | null} [password]
   * @returns {string}
   */
  toSeed(password) {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      var ptr0 = isLikeNone(password) ? 0 : passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      const ret = wasm.mnemonic_toSeed(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
}
const NetServerOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_netserveroptions_free(ptr >>> 0, 1));
class NetServerOptions {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NetServerOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_netserveroptions_free(ptr, 0);
  }
  /**
   * @returns {boolean | undefined}
   */
  get allow_half_open() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    const ptr = this.__destroy_into_raw();
    _assertNum(ptr);
    const ret = wasm.netserveroptions_allow_half_open(ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set allow_half_open(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    const ptr = this.__destroy_into_raw();
    _assertNum(ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.netserveroptions_set_allow_half_open(ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
  /**
   * @returns {boolean | undefined}
   */
  get pause_on_connect() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    const ptr = this.__destroy_into_raw();
    _assertNum(ptr);
    const ret = wasm.netserveroptions_pause_on_connect(ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set pause_on_connect(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    const ptr = this.__destroy_into_raw();
    _assertNum(ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.netserveroptions_set_pause_on_connect(ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
}
const NetworkIdFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_networkid_free(ptr >>> 0, 1));
/**
 *
 * NetworkId is a unique identifier for a kaspa network instance.
 * It is composed of a network type and an optional suffix.
 *
 * @category Consensus
 */
class NetworkId {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(NetworkId.prototype);
    obj.__wbg_ptr = ptr;
    NetworkIdFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      type: this.type,
      suffix: this.suffix,
      id: this.id
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NetworkIdFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_networkid_free(ptr, 0);
  }
  /**
   * @returns {NetworkType}
   */
  get type() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_networkid_type(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {NetworkType} arg0
   */
  set type(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(arg0);
    wasm.__wbg_set_networkid_type(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {number | undefined}
   */
  get suffix() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_networkid_suffix(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [arg0]
   */
  set suffix(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(arg0)) {
      _assertNum(arg0);
    }
    wasm.__wbg_set_networkid_suffix(this.__wbg_ptr, isLikeNone(arg0) ? 0x100000001 : arg0 >>> 0);
  }
  /**
   * @param {any} value
   */
  constructor(value) {
    const ret = wasm.networkid_ctor(value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    NetworkIdFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  get id() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.networkid_id(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.networkid_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  addressPrefix() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.networkid_addressPrefix(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const NodeDescriptorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_nodedescriptor_free(ptr >>> 0, 1));
/**
 *
 * Data structure representing a Node connection endpoint
 * as provided by the {@link Resolver}.
 *
 * @category Node RPC
 */
class NodeDescriptor {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(NodeDescriptor.prototype);
    obj.__wbg_ptr = ptr;
    NodeDescriptorFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      uid: this.uid,
      url: this.url
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NodeDescriptorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_nodedescriptor_free(ptr, 0);
  }
  /**
   * The unique identifier of the node.
   * @returns {string}
   */
  get uid() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.__wbg_get_nodedescriptor_uid(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The unique identifier of the node.
   * @param {string} arg0
   */
  set uid(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_nodedescriptor_uid(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The URL of the node WebSocket (wRPC URL).
   * @returns {string}
   */
  get url() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.__wbg_get_nodedescriptor_url(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The URL of the node WebSocket (wRPC URL).
   * @param {string} arg0
   */
  set url(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_nodedescriptor_url(this.__wbg_ptr, ptr0, len0);
  }
}
const PSKTFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_pskt_free(ptr >>> 0, 1));
class PSKT {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(PSKT.prototype);
    obj.__wbg_ptr = ptr;
    PSKTFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      role: this.role,
      payload: this.payload
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PSKTFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_pskt_free(ptr, 0);
  }
  /**
   * @param {PSKT | Transaction | string | undefined} payload
   */
  constructor(payload) {
    const ret = wasm.pskt_new(payload);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    PSKTFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  get role() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.pskt_role(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get payload() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_payload(this.__wbg_ptr);
    return ret;
  }
  /**
   * Change role to `CREATOR`
   * #[wasm_bindgen(js_name = toCreator)]
   * @returns {PSKT}
   */
  creator() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_creator(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * Change role to `CONSTRUCTOR`
   * @returns {PSKT}
   */
  toConstructor() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_toConstructor(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * Change role to `UPDATER`
   * @returns {PSKT}
   */
  toUpdater() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_toUpdater(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * Change role to `SIGNER`
   * @returns {PSKT}
   */
  toSigner() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_toSigner(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * Change role to `COMBINER`
   * @returns {PSKT}
   */
  toCombiner() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_toCombiner(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * Change role to `FINALIZER`
   * @returns {PSKT}
   */
  toFinalizer() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_toFinalizer(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * Change role to `EXTRACTOR`
   * @returns {PSKT}
   */
  toExtractor() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_toExtractor(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @param {bigint} lock_time
   * @returns {PSKT}
   */
  fallbackLockTime(lock_time) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(lock_time);
    const ret = wasm.pskt_fallbackLockTime(this.__wbg_ptr, lock_time);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @returns {PSKT}
   */
  inputsModifiable() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_inputsModifiable(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @returns {PSKT}
   */
  outputsModifiable() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_outputsModifiable(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @returns {PSKT}
   */
  noMoreInputs() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_noMoreInputs(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @returns {PSKT}
   */
  noMoreOutputs() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_noMoreOutputs(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @param {ITransactionInput | TransactionInput} input
   * @returns {PSKT}
   */
  input(input) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_input(this.__wbg_ptr, input);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @param {ITransactionOutput | TransactionOutput} output
   * @returns {PSKT}
   */
  output(output) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_output(this.__wbg_ptr, output);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @param {bigint} n
   * @param {number} input_index
   * @returns {PSKT}
   */
  setSequence(n, input_index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(n);
    _assertNum(input_index);
    const ret = wasm.pskt_setSequence(this.__wbg_ptr, n, input_index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PSKT.__wrap(ret[0]);
  }
  /**
   * @returns {Hash}
   */
  calculateId() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pskt_calculateId(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Hash.__wrap(ret[0]);
  }
}
const PaymentOutputFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_paymentoutput_free(ptr >>> 0, 1));
/**
 * A Rust data structure representing a single payment
 * output containing a destination address and amount.
 *
 * @category Wallet SDK
 */
class PaymentOutput {
  toJSON() {
    return {
      address: this.address,
      amount: this.amount
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PaymentOutputFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_paymentoutput_free(ptr, 0);
  }
  /**
   * @returns {Address}
   */
  get address() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_paymentoutput_address(this.__wbg_ptr);
    return Address.__wrap(ret);
  }
  /**
   * @param {Address} arg0
   */
  set address(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, Address);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_paymentoutput_address(this.__wbg_ptr, ptr0);
  }
  /**
   * @returns {bigint}
   */
  get amount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_paymentoutput_amount(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} arg0
   */
  set amount(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(arg0);
    wasm.__wbg_set_paymentoutput_amount(this.__wbg_ptr, arg0);
  }
  /**
   * @param {Address} address
   * @param {bigint} amount
   */
  constructor(address, amount) {
    _assertClass(address, Address);
    if (address.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = address.__destroy_into_raw();
    _assertBigInt(amount);
    const ret = wasm.paymentoutput_new(ptr0, amount);
    this.__wbg_ptr = ret >>> 0;
    PaymentOutputFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
}
const PaymentOutputsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_paymentoutputs_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class PaymentOutputs {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PaymentOutputsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_paymentoutputs_free(ptr, 0);
  }
  /**
   * @param {IPaymentOutput[]} output_array
   */
  constructor(output_array) {
    const ret = wasm.paymentoutputs_constructor(output_array);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    PaymentOutputsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
}
const PendingTransactionFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_pendingtransaction_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class PendingTransaction {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(PendingTransaction.prototype);
    obj.__wbg_ptr = ptr;
    PendingTransactionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      id: this.id,
      paymentAmount: this.paymentAmount,
      changeAmount: this.changeAmount,
      feeAmount: this.feeAmount,
      mass: this.mass,
      minimumSignatures: this.minimumSignatures,
      aggregateInputAmount: this.aggregateInputAmount,
      aggregateOutputAmount: this.aggregateOutputAmount,
      type: this.type,
      transaction: this.transaction
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PendingTransactionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_pendingtransaction_free(ptr, 0);
  }
  /**
   * Transaction Id
   * @returns {string}
   */
  get id() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.pendingtransaction_id(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Total amount transferred to the destination (aggregate output - change).
   * @returns {any}
   */
  get paymentAmount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_paymentAmount(this.__wbg_ptr);
    return ret;
  }
  /**
   * Change amount (if any).
   * @returns {bigint}
   */
  get changeAmount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_changeAmount(this.__wbg_ptr);
    return ret;
  }
  /**
   * Total transaction fees (network fees + priority fees).
   * @returns {bigint}
   */
  get feeAmount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_feeAmount(this.__wbg_ptr);
    return ret;
  }
  /**
   * Calculated transaction mass.
   * @returns {bigint}
   */
  get mass() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_mass(this.__wbg_ptr);
    return ret;
  }
  /**
   * Minimum number of signatures required by the transaction.
   * (as specified during the transaction creation).
   * @returns {number}
   */
  get minimumSignatures() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_minimumSignatures(this.__wbg_ptr);
    return ret;
  }
  /**
   * Total aggregate input amount.
   * @returns {bigint}
   */
  get aggregateInputAmount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_aggregateInputAmount(this.__wbg_ptr);
    return ret;
  }
  /**
   * Total aggregate output amount.
   * @returns {bigint}
   */
  get aggregateOutputAmount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_aggregateOutputAmount(this.__wbg_ptr);
    return ret;
  }
  /**
   * Transaction type ("batch" or "final").
   * @returns {string}
   */
  get type() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.pendingtransaction_type(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * List of unique addresses used by transaction inputs.
   * This method can be used to determine addresses used by transaction inputs
   * in order to select private keys needed for transaction signing.
   * @returns {Array<any>}
   */
  addresses() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_addresses(this.__wbg_ptr);
    return ret;
  }
  /**
   * Provides a list of UTXO entries used by the transaction.
   * @returns {Array<any>}
   */
  getUtxoEntries() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_getUtxoEntries(this.__wbg_ptr);
    return ret;
  }
  /**
   * Creates and returns a signature for the input at the specified index.
   * @param {number} input_index
   * @param {PrivateKey} private_key
   * @param {SighashType | null} [sighash_type]
   * @returns {HexString}
   */
  createInputSignature(input_index, private_key, sighash_type) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(input_index);
    _assertClass(private_key, PrivateKey);
    if (private_key.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    if (!isLikeNone(sighash_type)) {
      _assertNum(sighash_type);
    }
    const ret = wasm.pendingtransaction_createInputSignature(this.__wbg_ptr, input_index, private_key.__wbg_ptr, isLikeNone(sighash_type) ? 6 : sighash_type);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Sets a signature to the input at the specified index.
   * @param {number} input_index
   * @param {HexString | Uint8Array} signature_script
   */
  fillInput(input_index, signature_script) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(input_index);
    const ret = wasm.pendingtransaction_fillInput(this.__wbg_ptr, input_index, signature_script);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Signs the input at the specified index with the supplied private key
   * and an optional SighashType.
   * @param {number} input_index
   * @param {PrivateKey} private_key
   * @param {SighashType | null} [sighash_type]
   */
  signInput(input_index, private_key, sighash_type) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(input_index);
    _assertClass(private_key, PrivateKey);
    if (private_key.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    if (!isLikeNone(sighash_type)) {
      _assertNum(sighash_type);
    }
    const ret = wasm.pendingtransaction_signInput(this.__wbg_ptr, input_index, private_key.__wbg_ptr, isLikeNone(sighash_type) ? 6 : sighash_type);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Signs transaction with supplied [`Array`] or [`PrivateKey`] or an array of
   * raw private key bytes (encoded as `Uint8Array` or as hex strings)
   * @param {(PrivateKey | HexString | Uint8Array)[]} js_value
   * @param {boolean | null} [check_fully_signed]
   */
  sign(js_value, check_fully_signed) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(check_fully_signed)) {
      _assertBoolean(check_fully_signed);
    }
    const ret = wasm.pendingtransaction_sign(this.__wbg_ptr, js_value, isLikeNone(check_fully_signed) ? 0xFFFFFF : check_fully_signed ? 1 : 0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Submit transaction to the supplied [`RpcClient`]
   * **IMPORTANT:** This method will remove UTXOs from the associated
   * {@link UtxoContext} if one was used to create the transaction
   * and will return UTXOs back to {@link UtxoContext} in case of
   * a failed submission.
   *
   * # Important
   *
   * Make sure to consume the returned `txid` value. Always invoke this method
   * as follows `let txid = await pendingTransaction.submit(rpc);`. If you do not
   * consume the returned value and the rpc object is temporary, the GC will
   * collect the `rpc` object passed to submit() potentially causing a panic.
   *
   * @see {@link RpcClient.submitTransaction}
   * @param {RpcClient} wasm_rpc_client
   * @returns {Promise<string>}
   */
  submit(wasm_rpc_client) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(wasm_rpc_client, RpcClient);
    if (wasm_rpc_client.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.pendingtransaction_submit(this.__wbg_ptr, wasm_rpc_client.__wbg_ptr);
    return ret;
  }
  /**
   * Returns encapsulated network [`Transaction`]
   * @returns {Transaction}
   */
  get transaction() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_transaction(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Transaction.__wrap(ret[0]);
  }
  /**
   * Serializes the transaction to a pure JavaScript Object.
   * The schema of the JavaScript object is defined by {@link ISerializableTransaction}.
   * @see {@link ISerializableTransaction}
   * @see {@link Transaction}, {@link ISerializableTransaction}
   * @returns {ITransaction | Transaction}
   */
  serializeToObject() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pendingtransaction_serializeToObject(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Serializes the transaction to a JSON string.
   * The schema of the JSON is defined by {@link ISerializableTransaction}.
   * Once serialized, the transaction can be deserialized using {@link Transaction.deserializeFromJSON}.
   * @see {@link Transaction}, {@link ISerializableTransaction}
   * @returns {string}
   */
  serializeToJSON() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.pendingtransaction_serializeToJSON(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Serializes the transaction to a "Safe" JSON schema where it converts all `bigint` values to `string` to avoid potential client-side precision loss.
   * Once serialized, the transaction can be deserialized using {@link Transaction.deserializeFromSafeJSON}.
   * @see {@link Transaction}, {@link ISerializableTransaction}
   * @returns {string}
   */
  serializeToSafeJSON() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.pendingtransaction_serializeToSafeJSON(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
}
const PipeOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_pipeoptions_free(ptr >>> 0, 1));
class PipeOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PipeOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_pipeoptions_free(ptr, 0);
  }
  /**
   * @param {boolean | null} [end]
   */
  constructor(end) {
    if (!isLikeNone(end)) {
      _assertBoolean(end);
    }
    const ret = wasm.pipeoptions_new(isLikeNone(end) ? 0xFFFFFF : end ? 1 : 0);
    this.__wbg_ptr = ret >>> 0;
    PipeOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {boolean | undefined}
   */
  get end() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    const ptr = this.__destroy_into_raw();
    _assertNum(ptr);
    const ret = wasm.pipeoptions_end(ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set end(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    const ptr = this.__destroy_into_raw();
    _assertNum(ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.pipeoptions_set_end(ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
}
const PoWFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_pow_free(ptr >>> 0, 1));
/**
 * Represents a Kaspa header PoW manager
 * @category Mining
 */
class PoW {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(PoW.prototype);
    obj.__wbg_ptr = ptr;
    PoWFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      target: this.target,
      prePoWHash: this.prePoWHash
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PoWFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_pow_free(ptr, 0);
  }
  /**
   * @param {Header | IHeader | IRawHeader} header
   * @param {bigint | null} [timestamp]
   */
  constructor(header, timestamp) {
    if (!isLikeNone(timestamp)) {
      _assertBigInt(timestamp);
    }
    const ret = wasm.pow_new(header, !isLikeNone(timestamp), isLikeNone(timestamp) ? BigInt(0) : timestamp);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    PoWFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * The target based on the provided bits.
   * @returns {bigint}
   */
  get target() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.pow_target(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Checks if the computed target meets or exceeds the difficulty specified in the template.
   * @returns A boolean indicating if it reached the target and a bigint representing the reached target.
   * @param {bigint} nonce
   * @returns {[boolean, bigint]}
   */
  checkWork(nonce) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(nonce);
    const ret = wasm.pow_checkWork(this.__wbg_ptr, nonce);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Hash of the header without timestamp and nonce.
   * @returns {string}
   */
  get prePoWHash() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.pow_get_pre_pow_hash(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Can be used for parsing Stratum templates.
   * @param {string} pre_pow_hash
   * @param {bigint} timestamp
   * @param {number | null} [target_bits]
   * @returns {PoW}
   */
  static fromRaw(pre_pow_hash, timestamp, target_bits) {
    const ptr0 = passStringToWasm0(pre_pow_hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    _assertBigInt(timestamp);
    if (!isLikeNone(target_bits)) {
      _assertNum(target_bits);
    }
    const ret = wasm.pow_fromRaw(ptr0, len0, timestamp, isLikeNone(target_bits) ? 0x100000001 : target_bits >>> 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PoW.__wrap(ret[0]);
  }
}
const PrivateKeyFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_privatekey_free(ptr >>> 0, 1));
/**
 * Data structure that envelops a Private Key.
 * @category Wallet SDK
 */
class PrivateKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(PrivateKey.prototype);
    obj.__wbg_ptr = ptr;
    PrivateKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PrivateKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_privatekey_free(ptr, 0);
  }
  /**
   * Create a new [`PrivateKey`] from a hex-encoded string.
   * @param {string} key
   */
  constructor(key) {
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.privatekey_try_new(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    PrivateKeyFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Returns the [`PrivateKey`] key encoded as a hex string.
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.privatekey_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Generate a [`Keypair`] from this [`PrivateKey`].
   * @returns {Keypair}
   */
  toKeypair() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.privatekey_toKeypair(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Keypair.__wrap(ret[0]);
  }
  /**
   * @returns {PublicKey}
   */
  toPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.privatekey_toPublicKey(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PublicKey.__wrap(ret[0]);
  }
  /**
   * Get the [`Address`] of the PublicKey generated from this PrivateKey.
   * Receives a [`NetworkType`](kaspa_consensus_core::network::NetworkType)
   * to determine the prefix of the address.
   * JavaScript: `let address = privateKey.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddress(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.privatekey_toAddress(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Get `ECDSA` [`Address`] of the PublicKey generated from this PrivateKey.
   * Receives a [`NetworkType`](kaspa_consensus_core::network::NetworkType)
   * to determine the prefix of the address.
   * JavaScript: `let address = privateKey.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddressECDSA(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.privatekey_toAddressECDSA(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
}
const PrivateKeyGeneratorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_privatekeygenerator_free(ptr >>> 0, 1));
/**
 *
 * Helper class to generate private keys from an extended private key (XPrv).
 * This class accepts the master Kaspa XPrv string (e.g. `xprv1...`) and generates
 * private keys for the receive and change paths given the pre-set parameters
 * such as account index, multisig purpose and cosigner index.
 *
 * Please note that in Kaspa master private keys use `kprv` prefix.
 *
 * @see {@link PublicKeyGenerator}, {@link XPub}, {@link XPrv}, {@link Mnemonic}
 * @category Wallet SDK
 */
class PrivateKeyGenerator {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PrivateKeyGeneratorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_privatekeygenerator_free(ptr, 0);
  }
  /**
   * @param {XPrv | string} xprv
   * @param {boolean} is_multisig
   * @param {bigint} account_index
   * @param {number | null} [cosigner_index]
   */
  constructor(xprv, is_multisig, account_index, cosigner_index) {
    _assertBoolean(is_multisig);
    _assertBigInt(account_index);
    if (!isLikeNone(cosigner_index)) {
      _assertNum(cosigner_index);
    }
    const ret = wasm.privatekeygenerator_new(xprv, is_multisig, account_index, isLikeNone(cosigner_index) ? 0x100000001 : cosigner_index >>> 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    PrivateKeyGeneratorFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {number} index
   * @returns {PrivateKey}
   */
  receiveKey(index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(index);
    const ret = wasm.privatekeygenerator_receiveKey(this.__wbg_ptr, index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PrivateKey.__wrap(ret[0]);
  }
  /**
   * @param {number} index
   * @returns {PrivateKey}
   */
  changeKey(index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(index);
    const ret = wasm.privatekeygenerator_changeKey(this.__wbg_ptr, index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PrivateKey.__wrap(ret[0]);
  }
}
const ProcessSendOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_processsendoptions_free(ptr >>> 0, 1));
class ProcessSendOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ProcessSendOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_processsendoptions_free(ptr, 0);
  }
  /**
   * @param {boolean | null} [swallow_errors]
   */
  constructor(swallow_errors) {
    if (!isLikeNone(swallow_errors)) {
      _assertBoolean(swallow_errors);
    }
    const ret = wasm.processsendoptions_new(isLikeNone(swallow_errors) ? 0xFFFFFF : swallow_errors ? 1 : 0);
    this.__wbg_ptr = ret >>> 0;
    ProcessSendOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {boolean | undefined}
   */
  get swallow_errors() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.processsendoptions_swallow_errors(this.__wbg_ptr);
    return ret === 0xFFFFFF ? undefined : ret !== 0;
  }
  /**
   * @param {boolean | null} [value]
   */
  set swallow_errors(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertBoolean(value);
    }
    wasm.processsendoptions_set_swallow_errors(this.__wbg_ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
  }
}
const PrvKeyDataInfoFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_prvkeydatainfo_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class PrvKeyDataInfo {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PrvKeyDataInfoFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_prvkeydatainfo_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get id() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.prvkeydatainfo_id(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get name() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.prvkeydatainfo_name(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {any}
   */
  get isEncrypted() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.prvkeydatainfo_isEncrypted(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string} _name
   */
  setName(_name) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.prvkeydatainfo_setName(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
}
const PublicKeyFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_publickey_free(ptr >>> 0, 1));
/**
 * Data structure that envelopes a PublicKey.
 * Only supports Schnorr-based addresses.
 * @category Wallet SDK
 */
class PublicKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(PublicKey.prototype);
    obj.__wbg_ptr = ptr;
    PublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PublicKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_publickey_free(ptr, 0);
  }
  /**
   * Create a new [`PublicKey`] from a hex-encoded string.
   * @param {string} key
   */
  constructor(key) {
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.publickey_try_new(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    PublicKeyFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.publickey_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the [`Address`] of this PublicKey.
   * Receives a [`NetworkType`] to determine the prefix of the address.
   * JavaScript: `let address = publicKey.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddress(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.publickey_toAddress(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Get `ECDSA` [`Address`] of this PublicKey.
   * Receives a [`NetworkType`] to determine the prefix of the address.
   * JavaScript: `let address = publicKey.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddressECDSA(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.publickey_toAddressECDSA(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * @returns {XOnlyPublicKey}
   */
  toXOnlyPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.publickey_toXOnlyPublicKey(this.__wbg_ptr);
    return XOnlyPublicKey.__wrap(ret);
  }
  /**
   * Compute a 4-byte key fingerprint for this public key as a hex string.
   * Default implementation uses `RIPEMD160(SHA256(public_key))`.
   * @returns {HexString | undefined}
   */
  fingerprint() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.publickey_fingerprint(this.__wbg_ptr);
    return ret;
  }
}
const PublicKeyGeneratorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_publickeygenerator_free(ptr >>> 0, 1));
/**
 *
 * Helper class to generate public keys from an extended public key (XPub)
 * that has been derived up to the co-signer index.
 *
 * Please note that in Kaspa master public keys use `kpub` prefix.
 *
 * @see {@link PrivateKeyGenerator}, {@link XPub}, {@link XPrv}, {@link Mnemonic}
 * @category Wallet SDK
 */
class PublicKeyGenerator {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(PublicKeyGenerator.prototype);
    obj.__wbg_ptr = ptr;
    PublicKeyGeneratorFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PublicKeyGeneratorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_publickeygenerator_free(ptr, 0);
  }
  /**
   * @param {XPub | string} kpub
   * @param {number | null} [cosigner_index]
   * @returns {PublicKeyGenerator}
   */
  static fromXPub(kpub, cosigner_index) {
    if (!isLikeNone(cosigner_index)) {
      _assertNum(cosigner_index);
    }
    const ret = wasm.publickeygenerator_fromXPub(kpub, isLikeNone(cosigner_index) ? 0x100000001 : cosigner_index >>> 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PublicKeyGenerator.__wrap(ret[0]);
  }
  /**
   * @param {XPrv | string} xprv
   * @param {boolean} is_multisig
   * @param {bigint} account_index
   * @param {number | null} [cosigner_index]
   * @returns {PublicKeyGenerator}
   */
  static fromMasterXPrv(xprv, is_multisig, account_index, cosigner_index) {
    _assertBoolean(is_multisig);
    _assertBigInt(account_index);
    if (!isLikeNone(cosigner_index)) {
      _assertNum(cosigner_index);
    }
    const ret = wasm.publickeygenerator_fromMasterXPrv(xprv, is_multisig, account_index, isLikeNone(cosigner_index) ? 0x100000001 : cosigner_index >>> 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PublicKeyGenerator.__wrap(ret[0]);
  }
  /**
   * Generate Receive Public Key derivations for a given range.
   * @param {number} start
   * @param {number} end
   * @returns {(PublicKey | string)[]}
   */
  receivePubkeys(start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_receivePubkeys(this.__wbg_ptr, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Receive Public Key derivation at a given index.
   * @param {number} index
   * @returns {PublicKey}
   */
  receivePubkey(index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(index);
    const ret = wasm.publickeygenerator_receivePubkey(this.__wbg_ptr, index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PublicKey.__wrap(ret[0]);
  }
  /**
   * Generate a range of Receive Public Key derivations and return them as strings.
   * @param {number} start
   * @param {number} end
   * @returns {Array<string>}
   */
  receivePubkeysAsStrings(start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_receivePubkeysAsStrings(this.__wbg_ptr, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Receive Public Key derivation at a given index and return it as a string.
   * @param {number} index
   * @returns {string}
   */
  receivePubkeyAsString(index) {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      _assertNum(index);
      const ret = wasm.publickeygenerator_receivePubkeyAsString(this.__wbg_ptr, index);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Generate Receive Address derivations for a given range.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} start
   * @param {number} end
   * @returns {Address[]}
   */
  receiveAddresses(networkType, start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_receiveAddresses(this.__wbg_ptr, networkType, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Receive Address derivation at a given index.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} index
   * @returns {Address}
   */
  receiveAddress(networkType, index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(index);
    const ret = wasm.publickeygenerator_receiveAddress(this.__wbg_ptr, networkType, index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Generate a range of Receive Address derivations and return them as strings.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} start
   * @param {number} end
   * @returns {Array<string>}
   */
  receiveAddressAsStrings(networkType, start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_receiveAddressAsStrings(this.__wbg_ptr, networkType, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Receive Address derivation at a given index and return it as a string.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} index
   * @returns {string}
   */
  receiveAddressAsString(networkType, index) {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      _assertNum(index);
      const ret = wasm.publickeygenerator_receiveAddressAsString(this.__wbg_ptr, networkType, index);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Generate Change Public Key derivations for a given range.
   * @param {number} start
   * @param {number} end
   * @returns {(PublicKey | string)[]}
   */
  changePubkeys(start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_changePubkeys(this.__wbg_ptr, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Change Public Key derivation at a given index.
   * @param {number} index
   * @returns {PublicKey}
   */
  changePubkey(index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(index);
    const ret = wasm.publickeygenerator_changePubkey(this.__wbg_ptr, index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PublicKey.__wrap(ret[0]);
  }
  /**
   * Generate a range of Change Public Key derivations and return them as strings.
   * @param {number} start
   * @param {number} end
   * @returns {Array<string>}
   */
  changePubkeysAsStrings(start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_changePubkeysAsStrings(this.__wbg_ptr, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Change Public Key derivation at a given index and return it as a string.
   * @param {number} index
   * @returns {string}
   */
  changePubkeyAsString(index) {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      _assertNum(index);
      const ret = wasm.publickeygenerator_changePubkeyAsString(this.__wbg_ptr, index);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Generate Change Address derivations for a given range.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} start
   * @param {number} end
   * @returns {Address[]}
   */
  changeAddresses(networkType, start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_changeAddresses(this.__wbg_ptr, networkType, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Change Address derivation at a given index.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} index
   * @returns {Address}
   */
  changeAddress(networkType, index) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(index);
    const ret = wasm.publickeygenerator_changeAddress(this.__wbg_ptr, networkType, index);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Generate a range of Change Address derivations and return them as strings.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} start
   * @param {number} end
   * @returns {Array<string>}
   */
  changeAddressAsStrings(networkType, start, end) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(start);
    _assertNum(end);
    const ret = wasm.publickeygenerator_changeAddressAsStrings(this.__wbg_ptr, networkType, start, end);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Generate a single Change Address derivation at a given index and return it as a string.
   * @param {NetworkType | NetworkId | string} networkType
   * @param {number} index
   * @returns {string}
   */
  changeAddressAsString(networkType, index) {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      _assertNum(index);
      const ret = wasm.publickeygenerator_changeAddressAsString(this.__wbg_ptr, networkType, index);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.publickeygenerator_toString(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
}
const ReadStreamFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_readstream_free(ptr >>> 0, 1));
class ReadStream {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ReadStreamFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_readstream_free(ptr, 0);
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  add_listener_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_add_listener_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  add_listener_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_add_listener_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  on_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_on_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  on_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_on_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  once_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_once_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  once_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_once_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_listener_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_prepend_listener_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_listener_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_prepend_listener_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_once_listener_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_prepend_once_listener_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_once_listener_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.readstream_prepend_once_listener_with_close(this.__wbg_ptr, listener);
    return ret;
  }
}
const ResolverFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_resolver_free(ptr >>> 0, 1));
/**
 *
 * Resolver is a client for obtaining public Kaspa wRPC URL.
 *
 * Resolver queries a list of public Kaspa Resolver URLs using HTTP to fetch
 * wRPC endpoints for the given encoding, network identifier and other
 * parameters. It then provides this information to the {@link RpcClient}.
 *
 * Each time {@link RpcClient} disconnects, it will query the resolver
 * to fetch a new wRPC URL.
 *
 * ```javascript
 * // using integrated public URLs
 * let rpc = RpcClient({
 *     resolver: new Resolver(),
 *     networkId : "mainnet"
 * });
 *
 * // specifying custom resolver URLs
 * let rpc = RpcClient({
 *     resolver: new Resolver({urls: ["<resolver-url>",...]}),
 *     networkId : "mainnet"
 * });
 * ```
 *
 * @see {@link IResolverConfig}, {@link IResolverConnect}, {@link RpcClient}
 * @category Node RPC
 */
class Resolver {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Resolver.prototype);
    obj.__wbg_ptr = ptr;
    ResolverFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      urls: this.urls
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ResolverFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_resolver_free(ptr, 0);
  }
  /**
   * List of public Kaspa Resolver URLs.
   * @returns {string[] | undefined}
   */
  get urls() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.resolver_urls(this.__wbg_ptr);
    return ret;
  }
  /**
   * Fetches a public Kaspa wRPC endpoint for the given encoding and network identifier.
   * @see {@link Encoding}, {@link NetworkId}, {@link Node}
   * @param {Encoding} encoding
   * @param {NetworkId | string} network_id
   * @returns {Promise<NodeDescriptor>}
   */
  getNode(encoding, network_id) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(encoding);
    const ret = wasm.resolver_getNode(this.__wbg_ptr, encoding, network_id);
    return ret;
  }
  /**
   * Fetches a public Kaspa wRPC endpoint URL for the given encoding and network identifier.
   * @see {@link Encoding}, {@link NetworkId}
   * @param {Encoding} encoding
   * @param {NetworkId | string} network_id
   * @returns {Promise<string>}
   */
  getUrl(encoding, network_id) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(encoding);
    const ret = wasm.resolver_getUrl(this.__wbg_ptr, encoding, network_id);
    return ret;
  }
  /**
   * Connect to a public Kaspa wRPC endpoint for the given encoding and network identifier
   * supplied via {@link IResolverConnect} interface.
   * @see {@link IResolverConnect}, {@link RpcClient}
   * @param {IResolverConnect | NetworkId | string} options
   * @returns {Promise<RpcClient>}
   */
  connect(options) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.resolver_connect(this.__wbg_ptr, options);
    return ret;
  }
  /**
   * Creates a new Resolver client with the given
   * configuration supplied as {@link IResolverConfig}
   * interface. If not supplied, the default configuration
   * containing a list of community-operated resolvers
   * will be used.
   * @param {IResolverConfig | string[] | null} [args]
   */
  constructor(args) {
    const ret = wasm.resolver_ctor(isLikeNone(args) ? 0 : addToExternrefTable0(args));
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    ResolverFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
}
const RpcClientFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_rpcclient_free(ptr >>> 0, 1));
/**
 *
 *
 * Kaspa RPC client uses ([wRPC](https://github.com/workflow-rs/workflow-rs/tree/master/rpc))
 * interface to connect directly with Kaspa Node. wRPC supports
 * two types of encodings: `borsh` (binary, default) and `json`.
 *
 * There are two ways to connect: Directly to any Kaspa Node or to a
 * community-maintained public node infrastructure using the {@link Resolver} class.
 *
 * **Connecting to a public node using a resolver**
 *
 * ```javascript
 * let rpc = new RpcClient({
 *    resolver : new Resolver(),
 *    networkId : "mainnet",
 * });
 *
 * await rpc.connect();
 * ```
 *
 * **Connecting to a Kaspa Node directly**
 *
 * ```javascript
 * let rpc = new RpcClient({
 *    // if port is not provided it will default
 *    // to the default port for the networkId
 *    url : "127.0.0.1",
 *    networkId : "mainnet",
 * });
 * ```
 *
 * **Example usage**
 *
 * ```javascript
 *
 * // Create a new RPC client with a URL
 * let rpc = new RpcClient({ url : "wss://<node-wrpc-address>" });
 *
 * // Create a new RPC client with a resolver
 * // (networkId is required when using a resolver)
 * let rpc = new RpcClient({
 *     resolver : new Resolver(),
 *     networkId : "mainnet",
 * });
 *
 * rpc.addEventListener("connect", async (event) => {
 *     console.log("Connected to", rpc.url);
 *     await rpc.subscribeDaaScore();
 * });
 *
 * rpc.addEventListener("disconnect", (event) => {
 *     console.log("Disconnected from", rpc.url);
 * });
 *
 * try {
 *     await rpc.connect();
 * } catch(err) {
 *     console.log("Error connecting:", err);
 * }
 *
 * ```
 *
 * You can register event listeners to receive notifications from the RPC client
 * using {@link RpcClient.addEventListener} and {@link RpcClient.removeEventListener} functions.
 *
 * **IMPORTANT:** If RPC is disconnected, upon reconnection you do not need
 * to re-register event listeners, but your have to re-subscribe for Kaspa node
 * notifications:
 *
 * ```typescript
 * rpc.addEventListener("connect", async (event) => {
 *     console.log("Connected to", rpc.url);
 *     // re-subscribe each time we connect
 *     await rpc.subscribeDaaScore();
 *     // ... perform wallet address subscriptions
 * });
 *
 * ```
 *
 * If using NodeJS, it is important that {@link RpcClient.disconnect} is called before
 * the process exits to ensure that the WebSocket connection is properly closed.
 * Failure to do this will prevent the process from exiting.
 *
 * @category Node RPC
 */
class RpcClient {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(RpcClient.prototype);
    obj.__wbg_ptr = ptr;
    RpcClientFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      url: this.url,
      resolver: this.resolver,
      isConnected: this.isConnected,
      encoding: this.encoding,
      nodeId: this.nodeId
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    RpcClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rpcclient_free(ptr, 0);
  }
  /**
   * Retrieves the current number of blocks in the Kaspa BlockDAG.
   * This is not a block count, not a "block height" and can not be
   * used for transaction validation.
   * Returned information: Current block count.
   * @see {@link IGetBlockCountRequest}, {@link IGetBlockCountResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetBlockCountRequest | null} [request]
   * @returns {Promise<IGetBlockCountResponse>}
   */
  getBlockCount(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBlockCount(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Provides information about the Directed Acyclic Graph (DAG)
   * structure of the Kaspa BlockDAG.
   * Returned information: Number of blocks in the DAG,
   * number of tips in the DAG, hash of the selected parent block,
   * difficulty of the selected parent block, selected parent block
   * blue score, selected parent block time.
   * @see {@link IGetBlockDagInfoRequest}, {@link IGetBlockDagInfoResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetBlockDagInfoRequest | null} [request]
   * @returns {Promise<IGetBlockDagInfoResponse>}
   */
  getBlockDagInfo(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBlockDagInfo(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Returns the total current coin supply of Kaspa network.
   * Returned information: Total coin supply.
   * @see {@link IGetCoinSupplyRequest}, {@link IGetCoinSupplyResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetCoinSupplyRequest | null} [request]
   * @returns {Promise<IGetCoinSupplyResponse>}
   */
  getCoinSupply(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getCoinSupply(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves information about the peers connected to the Kaspa node.
   * Returned information: Peer ID, IP address and port, connection
   * status, protocol version.
   * @see {@link IGetConnectedPeerInfoRequest}, {@link IGetConnectedPeerInfoResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetConnectedPeerInfoRequest | null} [request]
   * @returns {Promise<IGetConnectedPeerInfoResponse>}
   */
  getConnectedPeerInfo(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getConnectedPeerInfo(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves general information about the Kaspa node.
   * Returned information: Version of the Kaspa node, protocol
   * version, network identifier.
   * This call is primarily used by gRPC clients.
   * For wRPC clients, use {@link RpcClient.getServerInfo}.
   * @see {@link IGetInfoRequest}, {@link IGetInfoResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetInfoRequest | null} [request]
   * @returns {Promise<IGetInfoResponse>}
   */
  getInfo(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getInfo(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Provides a list of addresses of known peers in the Kaspa
   * network that the node can potentially connect to.
   * Returned information: List of peer addresses.
   * @see {@link IGetPeerAddressesRequest}, {@link IGetPeerAddressesResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetPeerAddressesRequest | null} [request]
   * @returns {Promise<IGetPeerAddressesResponse>}
   */
  getPeerAddresses(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getPeerAddresses(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves various metrics and statistics related to the
   * performance and status of the Kaspa node.
   * Returned information: Memory usage, CPU usage, network activity.
   * @see {@link IGetMetricsRequest}, {@link IGetMetricsResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetMetricsRequest | null} [request]
   * @returns {Promise<IGetMetricsResponse>}
   */
  getMetrics(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getMetrics(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves current number of network connections
   * @see {@link IGetConnectionsRequest}, {@link IGetConnectionsResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetConnectionsRequest | null} [request]
   * @returns {Promise<IGetConnectionsResponse>}
   */
  getConnections(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getConnections(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves the current sink block, which is the block with
   * the highest cumulative difficulty in the Kaspa BlockDAG.
   * Returned information: Sink block hash, sink block height.
   * @see {@link IGetSinkRequest}, {@link IGetSinkResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetSinkRequest | null} [request]
   * @returns {Promise<IGetSinkResponse>}
   */
  getSink(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getSink(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Returns the blue score of the current sink block, indicating
   * the total amount of work that has been done on the main chain
   * leading up to that block.
   * Returned information: Blue score of the sink block.
   * @see {@link IGetSinkBlueScoreRequest}, {@link IGetSinkBlueScoreResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetSinkBlueScoreRequest | null} [request]
   * @returns {Promise<IGetSinkBlueScoreResponse>}
   */
  getSinkBlueScore(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getSinkBlueScore(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Tests the connection and responsiveness of a Kaspa node.
   * Returned information: None.
   * @see {@link IPingRequest}, {@link IPingResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IPingRequest | null} [request]
   * @returns {Promise<IPingResponse>}
   */
  ping(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_ping(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Gracefully shuts down the Kaspa node.
   * Returned information: None.
   * @see {@link IShutdownRequest}, {@link IShutdownResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IShutdownRequest | null} [request]
   * @returns {Promise<IShutdownResponse>}
   */
  shutdown(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_shutdown(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves information about the Kaspa server.
   * Returned information: Version of the Kaspa server, protocol
   * version, network identifier.
   * @see {@link IGetServerInfoRequest}, {@link IGetServerInfoResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetServerInfoRequest | null} [request]
   * @returns {Promise<IGetServerInfoResponse>}
   */
  getServerInfo(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getServerInfo(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Obtains basic information about the synchronization status of the Kaspa node.
   * Returned information: Syncing status.
   * @see {@link IGetSyncStatusRequest}, {@link IGetSyncStatusResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetSyncStatusRequest | null} [request]
   * @returns {Promise<IGetSyncStatusResponse>}
   */
  getSyncStatus(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getSyncStatus(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Feerate estimates
   * @see {@link IGetFeeEstimateRequest}, {@link IGetFeeEstimateResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetFeeEstimateRequest | null} [request]
   * @returns {Promise<IGetFeeEstimateResponse>}
   */
  getFeeEstimate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getFeeEstimate(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Retrieves the current network configuration.
   * Returned information: Current network configuration.
   * @see {@link IGetCurrentNetworkRequest}, {@link IGetCurrentNetworkResponse}
   * @throws `string` on an RPC error or a server-side error.
   * @param {IGetCurrentNetworkRequest | null} [request]
   * @returns {Promise<IGetCurrentNetworkResponse>}
   */
  getCurrentNetwork(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getCurrentNetwork(this.__wbg_ptr, isLikeNone(request) ? 0 : addToExternrefTable0(request));
    return ret;
  }
  /**
   * Adds a peer to the Kaspa node's list of known peers.
   * Returned information: None.
   * @see {@link IAddPeerRequest}, {@link IAddPeerResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IAddPeerRequest} request
   * @returns {Promise<IAddPeerResponse>}
   */
  addPeer(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_addPeer(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Bans a peer from connecting to the Kaspa node for a specified duration.
   * Returned information: None.
   * @see {@link IBanRequest}, {@link IBanResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IBanRequest} request
   * @returns {Promise<IBanResponse>}
   */
  ban(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_ban(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Estimates the network's current hash rate in hashes per second.
   * Returned information: Estimated network hashes per second.
   * @see {@link IEstimateNetworkHashesPerSecondRequest}, {@link IEstimateNetworkHashesPerSecondResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IEstimateNetworkHashesPerSecondRequest} request
   * @returns {Promise<IEstimateNetworkHashesPerSecondResponse>}
   */
  estimateNetworkHashesPerSecond(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_estimateNetworkHashesPerSecond(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves the balance of a specific address in the Kaspa BlockDAG.
   * Returned information: Balance of the address.
   * @see {@link IGetBalanceByAddressRequest}, {@link IGetBalanceByAddressResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetBalanceByAddressRequest} request
   * @returns {Promise<IGetBalanceByAddressResponse>}
   */
  getBalanceByAddress(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBalanceByAddress(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves balances for multiple addresses in the Kaspa BlockDAG.
   * Returned information: Balances of the addresses.
   * @see {@link IGetBalancesByAddressesRequest}, {@link IGetBalancesByAddressesResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetBalancesByAddressesRequest | Address[] | string[]} request
   * @returns {Promise<IGetBalancesByAddressesResponse>}
   */
  getBalancesByAddresses(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBalancesByAddresses(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves a specific block from the Kaspa BlockDAG.
   * Returned information: Block information.
   * @see {@link IGetBlockRequest}, {@link IGetBlockResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetBlockRequest} request
   * @returns {Promise<IGetBlockResponse>}
   */
  getBlock(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBlock(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves multiple blocks from the Kaspa BlockDAG.
   * Returned information: List of block information.
   * @see {@link IGetBlocksRequest}, {@link IGetBlocksResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetBlocksRequest} request
   * @returns {Promise<IGetBlocksResponse>}
   */
  getBlocks(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBlocks(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Generates a new block template for mining.
   * Returned information: Block template information.
   * @see {@link IGetBlockTemplateRequest}, {@link IGetBlockTemplateResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetBlockTemplateRequest} request
   * @returns {Promise<IGetBlockTemplateResponse>}
   */
  getBlockTemplate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getBlockTemplate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Checks if block is blue or not.
   * Returned information: Block blueness.
   * @see {@link IGetCurrentBlockColorRequest}, {@link IGetCurrentBlockColorResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetCurrentBlockColorRequest} request
   * @returns {Promise<IGetCurrentBlockColorResponse>}
   */
  getCurrentBlockColor(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getCurrentBlockColor(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves the estimated DAA (Difficulty Adjustment Algorithm)
   * score timestamp estimate.
   * Returned information: DAA score timestamp estimate.
   * @see {@link IGetDaaScoreTimestampEstimateRequest}, {@link IGetDaaScoreTimestampEstimateResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetDaaScoreTimestampEstimateRequest} request
   * @returns {Promise<IGetDaaScoreTimestampEstimateResponse>}
   */
  getDaaScoreTimestampEstimate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getDaaScoreTimestampEstimate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Feerate estimates (experimental)
   * @see {@link IGetFeeEstimateExperimentalRequest}, {@link IGetFeeEstimateExperimentalResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetFeeEstimateExperimentalRequest} request
   * @returns {Promise<IGetFeeEstimateExperimentalResponse>}
   */
  getFeeEstimateExperimental(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getFeeEstimateExperimental(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves block headers from the Kaspa BlockDAG.
   * Returned information: List of block headers.
   * @see {@link IGetHeadersRequest}, {@link IGetHeadersResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetHeadersRequest} request
   * @returns {Promise<IGetHeadersResponse>}
   */
  getHeaders(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getHeaders(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves mempool entries from the Kaspa node's mempool.
   * Returned information: List of mempool entries.
   * @see {@link IGetMempoolEntriesRequest}, {@link IGetMempoolEntriesResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetMempoolEntriesRequest} request
   * @returns {Promise<IGetMempoolEntriesResponse>}
   */
  getMempoolEntries(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getMempoolEntries(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves mempool entries associated with specific addresses.
   * Returned information: List of mempool entries.
   * @see {@link IGetMempoolEntriesByAddressesRequest}, {@link IGetMempoolEntriesByAddressesResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetMempoolEntriesByAddressesRequest} request
   * @returns {Promise<IGetMempoolEntriesByAddressesResponse>}
   */
  getMempoolEntriesByAddresses(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getMempoolEntriesByAddresses(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves a specific mempool entry by transaction ID.
   * Returned information: Mempool entry information.
   * @see {@link IGetMempoolEntryRequest}, {@link IGetMempoolEntryResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetMempoolEntryRequest} request
   * @returns {Promise<IGetMempoolEntryResponse>}
   */
  getMempoolEntry(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getMempoolEntry(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves information about a subnetwork in the Kaspa BlockDAG.
   * Returned information: Subnetwork information.
   * @see {@link IGetSubnetworkRequest}, {@link IGetSubnetworkResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetSubnetworkRequest} request
   * @returns {Promise<IGetSubnetworkResponse>}
   */
  getSubnetwork(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getSubnetwork(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves unspent transaction outputs (UTXOs) associated with
   * specific addresses.
   * Returned information: List of UTXOs.
   * @see {@link IGetUtxosByAddressesRequest}, {@link IGetUtxosByAddressesResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetUtxosByAddressesRequest | Address[] | string[]} request
   * @returns {Promise<IGetUtxosByAddressesResponse>}
   */
  getUtxosByAddresses(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getUtxosByAddresses(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Retrieves the virtual chain corresponding to a specified block hash.
   * Returned information: Virtual chain information.
   * @see {@link IGetVirtualChainFromBlockRequest}, {@link IGetVirtualChainFromBlockResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IGetVirtualChainFromBlockRequest} request
   * @returns {Promise<IGetVirtualChainFromBlockResponse>}
   */
  getVirtualChainFromBlock(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_getVirtualChainFromBlock(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Resolves a finality conflict in the Kaspa BlockDAG.
   * Returned information: None.
   * @see {@link IResolveFinalityConflictRequest}, {@link IResolveFinalityConflictResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IResolveFinalityConflictRequest} request
   * @returns {Promise<IResolveFinalityConflictResponse>}
   */
  resolveFinalityConflict(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_resolveFinalityConflict(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Submits a block to the Kaspa network.
   * Returned information: None.
   * @see {@link ISubmitBlockRequest}, {@link ISubmitBlockResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {ISubmitBlockRequest} request
   * @returns {Promise<ISubmitBlockResponse>}
   */
  submitBlock(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_submitBlock(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Submits a transaction to the Kaspa network.
   * Returned information: Submitted Transaction Id.
   * @see {@link ISubmitTransactionRequest}, {@link ISubmitTransactionResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {ISubmitTransactionRequest} request
   * @returns {Promise<ISubmitTransactionResponse>}
   */
  submitTransaction(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_submitTransaction(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Submits an RBF transaction to the Kaspa network.
   * Returned information: Submitted Transaction Id, Transaction that was replaced.
   * @see {@link ISubmitTransactionReplacementRequest}, {@link ISubmitTransactionReplacementResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {ISubmitTransactionReplacementRequest} request
   * @returns {Promise<ISubmitTransactionReplacementResponse>}
   */
  submitTransactionReplacement(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_submitTransactionReplacement(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Unbans a previously banned peer, allowing it to connect
   * to the Kaspa node again.
   * Returned information: None.
   * @see {@link IUnbanRequest}, {@link IUnbanResponse}
   * @throws `string` on an RPC error, a server-side error or when supplying incorrect arguments.
   * @param {IUnbanRequest} request
   * @returns {Promise<IUnbanResponse>}
   */
  unban(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unban(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * Manage subscription for a block added notification event.
   * Block added notification event is produced when a new
   * block is added to the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  subscribeBlockAdded() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeBlockAdded(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  unsubscribeBlockAdded() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeBlockAdded(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a finality conflict notification event.
   * Finality conflict notification event is produced when a finality
   * conflict occurs in the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  subscribeFinalityConflict() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeFinalityConflict(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  unsubscribeFinalityConflict() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeFinalityConflict(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a finality conflict resolved notification event.
   * Finality conflict resolved notification event is produced when a finality
   * conflict in the Kaspa BlockDAG is resolved.
   * @returns {Promise<void>}
   */
  subscribeFinalityConflictResolved() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeFinalityConflictResolved(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  unsubscribeFinalityConflictResolved() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeFinalityConflictResolved(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a sink blue score changed notification event.
   * Sink blue score changed notification event is produced when the blue
   * score of the sink block changes in the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  subscribeSinkBlueScoreChanged() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeSinkBlueScoreChanged(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  unsubscribeSinkBlueScoreChanged() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeSinkBlueScoreChanged(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a pruning point UTXO set override notification event.
   * Pruning point UTXO set override notification event is produced when the
   * UTXO set override for the pruning point changes in the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  subscribePruningPointUtxoSetOverride() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribePruningPointUtxoSetOverride(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  unsubscribePruningPointUtxoSetOverride() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribePruningPointUtxoSetOverride(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a new block template notification event.
   * New block template notification event is produced when a new block
   * template is generated for mining in the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  subscribeNewBlockTemplate() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeNewBlockTemplate(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  unsubscribeNewBlockTemplate() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeNewBlockTemplate(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a virtual DAA score changed notification event.
   * Virtual DAA score changed notification event is produced when the virtual
   * Difficulty Adjustment Algorithm (DAA) score changes in the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  subscribeVirtualDaaScoreChanged() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeVirtualDaaScoreChanged(this.__wbg_ptr);
    return ret;
  }
  /**
   * Manage subscription for a virtual DAA score changed notification event.
   * Virtual DAA score changed notification event is produced when the virtual
   * Difficulty Adjustment Algorithm (DAA) score changes in the Kaspa BlockDAG.
   * @returns {Promise<void>}
   */
  unsubscribeVirtualDaaScoreChanged() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeVirtualDaaScoreChanged(this.__wbg_ptr);
    return ret;
  }
  /**
   * Subscribe for a UTXOs changed notification event.
   * UTXOs changed notification event is produced when the set
   * of unspent transaction outputs (UTXOs) changes in the
   * Kaspa BlockDAG. The event notification will be scoped to the
   * provided list of addresses.
   * @param {(Address | string)[]} addresses
   * @returns {Promise<void>}
   */
  subscribeUtxosChanged(addresses) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_subscribeUtxosChanged(this.__wbg_ptr, addresses);
    return ret;
  }
  /**
   * Unsubscribe from UTXOs changed notification event
   * for a specific set of addresses.
   * @param {(Address | string)[]} addresses
   * @returns {Promise<void>}
   */
  unsubscribeUtxosChanged(addresses) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_unsubscribeUtxosChanged(this.__wbg_ptr, addresses);
    return ret;
  }
  /**
   * Manage subscription for a virtual chain changed notification event.
   * Virtual chain changed notification event is produced when the virtual
   * chain changes in the Kaspa BlockDAG.
   * @param {boolean} include_accepted_transaction_ids
   * @returns {Promise<void>}
   */
  subscribeVirtualChainChanged(include_accepted_transaction_ids) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBoolean(include_accepted_transaction_ids);
    const ret = wasm.rpcclient_subscribeVirtualChainChanged(this.__wbg_ptr, include_accepted_transaction_ids);
    return ret;
  }
  /**
   * Manage subscription for a virtual chain changed notification event.
   * Virtual chain changed notification event is produced when the virtual
   * chain changes in the Kaspa BlockDAG.
   * @param {boolean} include_accepted_transaction_ids
   * @returns {Promise<void>}
   */
  unsubscribeVirtualChainChanged(include_accepted_transaction_ids) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBoolean(include_accepted_transaction_ids);
    const ret = wasm.rpcclient_unsubscribeVirtualChainChanged(this.__wbg_ptr, include_accepted_transaction_ids);
    return ret;
  }
  /**
   * @param {Encoding} encoding
   * @param {NetworkType | NetworkId | string} network
   * @returns {number}
   */
  static defaultPort(encoding, network) {
    _assertNum(encoding);
    const ret = wasm.rpcclient_defaultPort(encoding, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0];
  }
  /**
   * Constructs an WebSocket RPC URL given the partial URL or an IP, RPC encoding
   * and a network type.
   *
   * # Arguments
   *
   * * `url` - Partial URL or an IP address
   * * `encoding` - RPC encoding
   * * `network_type` - Network type
   * @param {string} url
   * @param {Encoding} encoding
   * @param {NetworkId} network
   * @returns {string}
   */
  static parseUrl(url, encoding, network) {
    let deferred4_0;
    let deferred4_1;
    try {
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      _assertNum(encoding);
      _assertClass(network, NetworkId);
      if (network.__wbg_ptr === 0) {
        throw new Error('Attempt to use a moved value');
      }
      var ptr1 = network.__destroy_into_raw();
      const ret = wasm.rpcclient_parseUrl(ptr0, len0, encoding, ptr1);
      var ptr3 = ret[0];
      var len3 = ret[1];
      if (ret[3]) {
        ptr3 = 0;
        len3 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred4_0 = ptr3;
      deferred4_1 = len3;
      return getStringFromWasm0(ptr3, len3);
    } finally {
      wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
  }
  /**
   *
   * Create a new RPC client with optional {@link Encoding} and a `url`.
   *
   * @see {@link IRpcConfig} interface for more details.
   * @param {IRpcConfig | null} [config]
   */
  constructor(config) {
    const ret = wasm.rpcclient_ctor(isLikeNone(config) ? 0 : addToExternrefTable0(config));
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    RpcClientFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * The current URL of the RPC client.
   * @returns {string | undefined}
   */
  get url() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_url(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * Current rpc resolver
   * @returns {Resolver | undefined}
   */
  get resolver() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_resolver(this.__wbg_ptr);
    return ret === 0 ? undefined : Resolver.__wrap(ret);
  }
  /**
   * Set the resolver for the RPC client.
   * This setting will take effect on the next connection.
   * @param {Resolver} resolver
   */
  setResolver(resolver) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(resolver, Resolver);
    if (resolver.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = resolver.__destroy_into_raw();
    const ret = wasm.rpcclient_setResolver(this.__wbg_ptr, ptr0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Set the network id for the RPC client.
   * This setting will take effect on the next connection.
   * @param {NetworkId} network_id
   */
  setNetworkId(network_id) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(network_id, NetworkId);
    if (network_id.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.rpcclient_setNetworkId(this.__wbg_ptr, network_id.__wbg_ptr);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * The current connection status of the RPC client.
   * @returns {boolean}
   */
  get isConnected() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_isConnected(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * The current protocol encoding.
   * @returns {string}
   */
  get encoding() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.rpcclient_encoding(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Optional: Resolver node id.
   * @returns {string | undefined}
   */
  get nodeId() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_nodeId(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * Connect to the Kaspa RPC server. This function starts a background
   * task that connects and reconnects to the server if the connection
   * is terminated.  Use [`disconnect()`](Self::disconnect()) to
   * terminate the connection.
   * @see {@link IConnectOptions} interface for more details.
   * @param {IConnectOptions | undefined | null} [args]
   * @returns {Promise<void>}
   */
  connect(args) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_connect(this.__wbg_ptr, isLikeNone(args) ? 0 : addToExternrefTable0(args));
    return ret;
  }
  /**
   * Disconnect from the Kaspa RPC server.
   * @returns {Promise<void>}
   */
  disconnect() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_disconnect(this.__wbg_ptr);
    return ret;
  }
  /**
   * Start background RPC services (automatically started when invoking {@link RpcClient.connect}).
   * @returns {Promise<void>}
   */
  start() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_start(this.__wbg_ptr);
    return ret;
  }
  /**
   * Stop background RPC services (automatically stopped when invoking {@link RpcClient.disconnect}).
   * @returns {Promise<void>}
   */
  stop() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_stop(this.__wbg_ptr);
    return ret;
  }
  /**
   * Triggers a disconnection on the underlying WebSocket
   * if the WebSocket is in connected state.
   * This is intended for debug purposes only.
   * Can be used to test application reconnection logic.
   */
  triggerAbort() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.rpcclient_triggerAbort(this.__wbg_ptr);
  }
  /**
   *
   * Register an event listener callback.
   *
   * Registers a callback function to be executed when a specific event occurs.
   * The callback function will receive an {@link RpcEvent} object with the event `type` and `data`.
   *
   * **RPC Subscriptions vs Event Listeners**
   *
   * Subscriptions are used to receive notifications from the RPC client.
   * Event listeners are client-side application registrations that are
   * triggered when notifications are received.
   *
   * If node is disconnected, upon reconnection you do not need to re-register event listeners,
   * however, you have to re-subscribe for Kaspa node notifications. As such, it is recommended
   * to register event listeners when the RPC `open` event is received.
   *
   * ```javascript
   * rpc.addEventListener("connect", async (event) => {
   *     console.log("Connected to", rpc.url);
   *     await rpc.subscribeDaaScore();
   *     // ... perform wallet address subscriptions
   * });
   * ```
   *
   * **Multiple events and listeners**
   *
   * `addEventListener` can be used to register multiple event listeners for the same event
   * as well as the same event listener for multiple events.
   *
   * ```javascript
   * // Registering a single event listener for multiple events:
   * rpc.addEventListener(["connect", "disconnect"], (event) => {
   *     console.log(event);
   * });
   *
   * // Registering event listener for all events:
   * // (by omitting the event type)
   * rpc.addEventListener((event) => {
   *     console.log(event);
   * });
   *
   * // Registering multiple event listeners for the same event:
   * rpc.addEventListener("connect", (event) => { // first listener
   *     console.log(event);
   * });
   * rpc.addEventListener("connect", (event) => { // second listener
   *     console.log(event);
   * });
   * ```
   *
   * **Use of context objects**
   *
   * You can also register an event with a `context` object. When the event is triggered,
   * the `handleEvent` method of the `context` object will be called while `this` value
   * will be set to the `context` object.
   * ```javascript
   * // Registering events with a context object:
   *
   * const context = {
   *     someProperty: "someValue",
   *     handleEvent: (event) => {
   *         // the following will log "someValue"
   *         console.log(this.someProperty);
   *         console.log(event);
   *     }
   * };
   * rpc.addEventListener(["connect","disconnect"], context);
   *
   * ```
   *
   * **General use examples**
   *
   * In TypeScript you can use {@link RpcEventType} enum (such as `RpcEventType.Connect`)
   * or `string` (such as "connect") to register event listeners.
   * In JavaScript you can only use `string`.
   *
   * ```typescript
   * // Example usage (TypeScript):
   *
   * rpc.addEventListener(RpcEventType.Connect, (event) => {
   *     console.log("Connected to", rpc.url);
   * });
   *
   * rpc.addEventListener(RpcEventType.VirtualDaaScoreChanged, (event) => {
   *     console.log(event.type,event.data);
   * });
   * await rpc.subscribeDaaScore();
   *
   * rpc.addEventListener(RpcEventType.BlockAdded, (event) => {
   *     console.log(event.type,event.data);
   * });
   * await rpc.subscribeBlockAdded();
   *
   * // Example usage (JavaScript):
   *
   * rpc.addEventListener("virtual-daa-score-changed", (event) => {
   *     console.log(event.type,event.data);
   * });
   *
   * await rpc.subscribeDaaScore();
   * rpc.addEventListener("block-added", (event) => {
   *     console.log(event.type,event.data);
   * });
   * await rpc.subscribeBlockAdded();
   * ```
   *
   * @see {@link RpcEventType} for a list of supported events.
   * @see {@link RpcEventData} for the event data interface specification.
   * @see {@link RpcClient.removeEventListener}, {@link RpcClient.removeAllEventListeners}
   * @param {RpcEventType | string | RpcEventCallback} event
   * @param {RpcEventCallback | null} [callback]
   */
  addEventListener(event, callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_addEventListener(this.__wbg_ptr, event, isLikeNone(callback) ? 0 : addToExternrefTable0(callback));
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   *
   * Unregister an event listener.
   * This function will remove the callback for the specified event.
   * If the `callback` is not supplied, all callbacks will be
   * removed for the specified event.
   *
   * @see {@link RpcClient.addEventListener}
   * @param {RpcEventType | string} event
   * @param {RpcEventCallback | null} [callback]
   */
  removeEventListener(event, callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_removeEventListener(this.__wbg_ptr, event, isLikeNone(callback) ? 0 : addToExternrefTable0(callback));
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   *
   * Unregister a single event listener callback from all events.
   *
   *
   * @param {RpcEventCallback} callback
   */
  clearEventListener(callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_clearEventListener(this.__wbg_ptr, callback);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   *
   * Unregister all notification callbacks for all events.
   */
  removeAllEventListeners() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.rpcclient_removeAllEventListeners(this.__wbg_ptr);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
}
const ScriptBuilderFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_scriptbuilder_free(ptr >>> 0, 1));
/**
 * ScriptBuilder provides a facility for building custom scripts. It allows
 * you to push opcodes, ints, and data while respecting canonical encoding. In
 * general it does not ensure the script will execute correctly, however any
 * data pushes which would exceed the maximum allowed script engine limits and
 * are therefore guaranteed not to execute will not be pushed and will result in
 * the Script function returning an error.
 * @category Consensus
 */
class ScriptBuilder {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(ScriptBuilder.prototype);
    obj.__wbg_ptr = ptr;
    ScriptBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ScriptBuilderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_scriptbuilder_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.scriptbuilder_new();
    this.__wbg_ptr = ret >>> 0;
    ScriptBuilderFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Creates a new ScriptBuilder over an existing script.
   * Supplied script can be represented as an `Uint8Array` or a `HexString`.
   * @param {HexString | Uint8Array} script
   * @returns {ScriptBuilder}
   */
  static fromScript(script) {
    const ret = wasm.scriptbuilder_fromScript(script);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * Pushes the passed opcode to the end of the script. The script will not
   * be modified if pushing the opcode would cause the script to exceed the
   * maximum allowed script engine size.
   * @param {number} op
   * @returns {ScriptBuilder}
   */
  addOp(op) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(op);
    const ret = wasm.scriptbuilder_addOp(this.__wbg_ptr, op);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * Adds the passed opcodes to the end of the script.
   * Supplied opcodes can be represented as an `Uint8Array` or a `HexString`.
   * @param {HexString | Uint8Array} opcodes
   * @returns {ScriptBuilder}
   */
  addOps(opcodes) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.scriptbuilder_addOps(this.__wbg_ptr, opcodes);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * AddData pushes the passed data to the end of the script. It automatically
   * chooses canonical opcodes depending on the length of the data.
   *
   * A zero length buffer will lead to a push of empty data onto the stack (Op0 = OpFalse)
   * and any push of data greater than [`MAX_SCRIPT_ELEMENT_SIZE`](kaspa_txscript::MAX_SCRIPT_ELEMENT_SIZE) will not modify
   * the script since that is not allowed by the script engine.
   *
   * Also, the script will not be modified if pushing the data would cause the script to
   * exceed the maximum allowed script engine size [`MAX_SCRIPTS_SIZE`](kaspa_txscript::MAX_SCRIPTS_SIZE).
   * @param {HexString | Uint8Array} data
   * @returns {ScriptBuilder}
   */
  addData(data) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.scriptbuilder_addData(this.__wbg_ptr, data);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * @param {bigint} value
   * @returns {ScriptBuilder}
   */
  addI64(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(value);
    const ret = wasm.scriptbuilder_addI64(this.__wbg_ptr, value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * @param {bigint} lock_time
   * @returns {ScriptBuilder}
   */
  addLockTime(lock_time) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(lock_time);
    const ret = wasm.scriptbuilder_addLockTime(this.__wbg_ptr, lock_time);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * @param {bigint} sequence
   * @returns {ScriptBuilder}
   */
  addSequence(sequence) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(sequence);
    const ret = wasm.scriptbuilder_addSequence(this.__wbg_ptr, sequence);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ScriptBuilder.__wrap(ret[0]);
  }
  /**
   * @param {HexString | Uint8Array} data
   * @returns {number}
   */
  static canonicalDataSize(data) {
    const ret = wasm.scriptbuilder_canonicalDataSize(data);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] >>> 0;
  }
  /**
   * Get script bytes represented by a hex string.
   * @returns {HexString}
   */
  toString() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.scriptbuilder_toString(this.__wbg_ptr);
    return ret;
  }
  /**
   * Drains (empties) the script builder, returning the
   * script bytes represented by a hex string.
   * @returns {HexString}
   */
  drain() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.scriptbuilder_drain(this.__wbg_ptr);
    return ret;
  }
  /**
   * Creates an equivalent pay-to-script-hash script.
   * Can be used to create an P2SH address.
   * @see {@link addressFromScriptPublicKey}
   * @returns {ScriptPublicKey}
   */
  createPayToScriptHashScript() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.scriptbuilder_createPayToScriptHashScript(this.__wbg_ptr);
    return ScriptPublicKey.__wrap(ret);
  }
  /**
   * Generates a signature script that fits a pay-to-script-hash script.
   * @param {HexString | Uint8Array} signature
   * @returns {HexString}
   */
  encodePayToScriptHashSignatureScript(signature) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.scriptbuilder_encodePayToScriptHashSignatureScript(this.__wbg_ptr, signature);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * @param {IHexViewConfig | null} [args]
   * @returns {string}
   */
  hexView(args) {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.scriptbuilder_hexView(this.__wbg_ptr, isLikeNone(args) ? 0 : addToExternrefTable0(args));
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
}
const ScriptPublicKeyFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_scriptpublickey_free(ptr >>> 0, 1));
/**
 * Represents a Kaspad ScriptPublicKey
 * @category Consensus
 */
class ScriptPublicKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(ScriptPublicKey.prototype);
    obj.__wbg_ptr = ptr;
    ScriptPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      version: this.version,
      script: this.script
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ScriptPublicKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_scriptpublickey_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get version() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_scriptpublickey_version(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} arg0
   */
  set version(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(arg0);
    wasm.__wbg_set_scriptpublickey_version(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} version
   * @param {any} script
   */
  constructor(version, script) {
    _assertNum(version);
    const ret = wasm.scriptpublickey_constructor(version, script);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    ScriptPublicKeyFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  get script() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.scriptpublickey_script_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const SetAadOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_setaadoptions_free(ptr >>> 0, 1));
class SetAadOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SetAadOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_setaadoptions_free(ptr, 0);
  }
  /**
   * @param {Function} flush
   * @param {number} plaintext_length
   * @param {Function} transform
   */
  constructor(flush, plaintext_length, transform) {
    const ret = wasm.setaadoptions_new(flush, plaintext_length, transform);
    this.__wbg_ptr = ret >>> 0;
    SetAadOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Function}
   */
  get flush() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.setaadoptions_flush(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set flush(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.setaadoptions_set_flush(this.__wbg_ptr, value);
  }
  /**
   * @returns {number}
   */
  get plaintextLength() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.setaadoptions_plaintextLength(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} value
   */
  set plaintext_length(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.setaadoptions_set_plaintext_length(this.__wbg_ptr, value);
  }
  /**
   * @returns {Function}
   */
  get transform() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.setaadoptions_transform(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set transform(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.setaadoptions_set_transform(this.__wbg_ptr, value);
  }
}
const SigHashTypeFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_sighashtype_free(ptr >>> 0, 1));
class SigHashType {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SigHashTypeFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_sighashtype_free(ptr, 0);
  }
}
const StorageFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_storage_free(ptr >>> 0, 1));
/**
 * Wallet file storage interface
 * @category Wallet SDK
 */
class Storage {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  toJSON() {
    return {
      filename: this.filename
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    StorageFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_storage_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get filename() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.storage_filename(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const StreamTransformOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_streamtransformoptions_free(ptr >>> 0, 1));
class StreamTransformOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    StreamTransformOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_streamtransformoptions_free(ptr, 0);
  }
  /**
   * @param {Function} flush
   * @param {Function} transform
   */
  constructor(flush, transform) {
    const ret = wasm.streamtransformoptions_new(flush, transform);
    this.__wbg_ptr = ret >>> 0;
    StreamTransformOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Function}
   */
  get flush() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.streamtransformoptions_flush(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set flush(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.streamtransformoptions_set_flush(this.__wbg_ptr, value);
  }
  /**
   * @returns {Function}
   */
  get transform() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.streamtransformoptions_transform(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} value
   */
  set transform(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.streamtransformoptions_set_transform(this.__wbg_ptr, value);
  }
}
const TransactionFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transaction_free(ptr >>> 0, 1));
/**
 * Represents a Kaspa transaction.
 * This is an artificial construct that includes additional
 * transaction-related data such as additional data from UTXOs
 * used by transaction inputs.
 * @category Consensus
 */
class Transaction {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Transaction.prototype);
    obj.__wbg_ptr = ptr;
    TransactionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      id: this.id,
      inputs: this.inputs,
      outputs: this.outputs,
      version: this.version,
      lockTime: this.lockTime,
      gas: this.gas,
      subnetworkId: this.subnetworkId,
      payload: this.payload,
      mass: this.mass
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transaction_free(ptr, 0);
  }
  /**
   * Determines whether or not a transaction is a coinbase transaction. A coinbase
   * transaction is a special transaction created by miners that distributes fees and block subsidy
   * to the previous blocks' miners, and specifies the script_pub_key that will be used to pay the current
   * miner in future blocks.
   * @returns {boolean}
   */
  is_coinbase() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_is_coinbase(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Recompute and finalize the tx id based on updated tx fields
   * @returns {Hash}
   */
  finalize() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_finalize(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Hash.__wrap(ret[0]);
  }
  /**
   * Returns the transaction ID
   * @returns {string}
   */
  get id() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transaction_id(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {ITransaction | Transaction} js_value
   */
  constructor(js_value) {
    const ret = wasm.transaction_constructor(js_value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    TransactionFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {TransactionInput[]}
   */
  get inputs() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_get_inputs_as_js_array(this.__wbg_ptr);
    return ret;
  }
  /**
   * Returns a list of unique addresses used by transaction inputs.
   * This method can be used to determine addresses used by transaction inputs
   * in order to select private keys needed for transaction signing.
   * @param {NetworkType | NetworkId | string} network_type
   * @returns {Address[]}
   */
  addresses(network_type) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_addresses(this.__wbg_ptr, network_type);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * @param {(ITransactionInput | TransactionInput)[]} js_value
   */
  set inputs(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.transaction_set_inputs_from_js_array(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {TransactionOutput[]}
   */
  get outputs() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_get_outputs_as_js_array(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {(ITransactionOutput | TransactionOutput)[]} js_value
   */
  set outputs(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.transaction_set_outputs_from_js_array(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {number}
   */
  get version() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_version(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} v
   */
  set version(v) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(v);
    wasm.transaction_set_version(this.__wbg_ptr, v);
  }
  /**
   * @returns {bigint}
   */
  get lockTime() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_lockTime(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} v
   */
  set lockTime(v) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(v);
    wasm.transaction_set_lockTime(this.__wbg_ptr, v);
  }
  /**
   * @returns {bigint}
   */
  get gas() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_gas(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} v
   */
  set gas(v) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(v);
    wasm.transaction_set_gas(this.__wbg_ptr, v);
  }
  /**
   * @returns {string}
   */
  get subnetworkId() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transaction_get_subnetwork_id_as_hex(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set subnetworkId(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.transaction_set_subnetwork_id_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {string}
   */
  get payload() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transaction_get_payload_as_hex_string(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {any} js_value
   */
  set payload(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.transaction_set_payload_from_js_value(this.__wbg_ptr, js_value);
  }
  /**
   * @returns {bigint}
   */
  get mass() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_get_mass(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} v
   */
  set mass(v) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(v);
    wasm.transaction_set_mass(this.__wbg_ptr, v);
  }
  /**
   * Serializes the transaction to a pure JavaScript Object.
   * The schema of the JavaScript object is defined by {@link ISerializableTransaction}.
   * @see {@link ISerializableTransaction}
   * @returns {ISerializableTransaction}
   */
  serializeToObject() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transaction_serializeToObject(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Serializes the transaction to a JSON string.
   * The schema of the JSON is defined by {@link ISerializableTransaction}.
   * @returns {string}
   */
  serializeToJSON() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transaction_serializeToJSON(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Serializes the transaction to a "Safe" JSON schema where it converts all `bigint` values to `string` to avoid potential client-side precision loss.
   * @returns {string}
   */
  serializeToSafeJSON() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transaction_serializeToSafeJSON(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Deserialize the {@link Transaction} Object from a pure JavaScript Object.
   * @param {any} js_value
   * @returns {Transaction}
   */
  static deserializeFromObject(js_value) {
    const ret = wasm.transaction_deserializeFromObject(js_value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Transaction.__wrap(ret[0]);
  }
  /**
   * Deserialize the {@link Transaction} Object from a JSON string.
   * @param {string} json
   * @returns {Transaction}
   */
  static deserializeFromJSON(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.transaction_deserializeFromJSON(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Transaction.__wrap(ret[0]);
  }
  /**
   * Deserialize the {@link Transaction} Object from a "Safe" JSON schema where all `bigint` values are represented as `string`.
   * @param {string} json
   * @returns {Transaction}
   */
  static deserializeFromSafeJSON(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.transaction_deserializeFromSafeJSON(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Transaction.__wrap(ret[0]);
  }
}
const TransactionInputFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactioninput_free(ptr >>> 0, 1));
/**
 * Represents a Kaspa transaction input
 * @category Consensus
 */
class TransactionInput {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(TransactionInput.prototype);
    obj.__wbg_ptr = ptr;
    TransactionInputFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      previousOutpoint: this.previousOutpoint,
      signatureScript: this.signatureScript,
      sequence: this.sequence,
      sigOpCount: this.sigOpCount,
      utxo: this.utxo
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionInputFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactioninput_free(ptr, 0);
  }
  /**
   * @param {ITransactionInput | TransactionInput} value
   */
  constructor(value) {
    const ret = wasm.transactioninput_constructor(value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    TransactionInputFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {TransactionOutpoint}
   */
  get previousOutpoint() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_get_previous_outpoint(this.__wbg_ptr);
    return TransactionOutpoint.__wrap(ret);
  }
  /**
   * @param {any} js_value
   */
  set previousOutpoint(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_set_previous_outpoint(this.__wbg_ptr, js_value);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {string | undefined}
   */
  get signatureScript() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_get_signature_script_as_hex(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * @param {any} js_value
   */
  set signatureScript(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_set_signature_script_from_js_value(this.__wbg_ptr, js_value);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {bigint}
   */
  get sequence() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_get_sequence(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} sequence
   */
  set sequence(sequence) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(sequence);
    wasm.transactioninput_set_sequence(this.__wbg_ptr, sequence);
  }
  /**
   * @returns {number}
   */
  get sigOpCount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_get_sig_op_count(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} sig_op_count
   */
  set sigOpCount(sig_op_count) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(sig_op_count);
    wasm.transactioninput_set_sig_op_count(this.__wbg_ptr, sig_op_count);
  }
  /**
   * @returns {UtxoEntryReference | undefined}
   */
  get utxo() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactioninput_get_utxo(this.__wbg_ptr);
    return ret === 0 ? undefined : UtxoEntryReference.__wrap(ret);
  }
}
const TransactionOutpointFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionoutpoint_free(ptr >>> 0, 1));
/**
 * Represents a Kaspa transaction outpoint.
 * NOTE: This struct is immutable - to create a custom outpoint
 * use the `TransactionOutpoint::new` constructor. (in JavaScript
 * use `new TransactionOutpoint(transactionId, index)`).
 * @category Consensus
 */
class TransactionOutpoint {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(TransactionOutpoint.prototype);
    obj.__wbg_ptr = ptr;
    TransactionOutpointFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      transactionId: this.transactionId,
      index: this.index
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionOutpointFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionoutpoint_free(ptr, 0);
  }
  /**
   * @param {Hash} transaction_id
   * @param {number} index
   */
  constructor(transaction_id, index) {
    _assertClass(transaction_id, Hash);
    if (transaction_id.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = transaction_id.__destroy_into_raw();
    _assertNum(index);
    const ret = wasm.transactionoutpoint_ctor(ptr0, index);
    this.__wbg_ptr = ret >>> 0;
    TransactionOutpointFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  getId() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transactionoutpoint_getId(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  get transactionId() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transactionoutpoint_transactionId(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {number}
   */
  get index() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionoutpoint_index(this.__wbg_ptr);
    return ret >>> 0;
  }
}
const TransactionOutputFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionoutput_free(ptr >>> 0, 1));
/**
 * Represents a Kaspad transaction output
 * @category Consensus
 */
class TransactionOutput {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(TransactionOutput.prototype);
    obj.__wbg_ptr = ptr;
    TransactionOutputFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      value: this.value,
      scriptPublicKey: this.scriptPublicKey
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionOutputFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionoutput_free(ptr, 0);
  }
  /**
   * TransactionOutput constructor
   * @param {bigint} value
   * @param {ScriptPublicKey} script_public_key
   */
  constructor(value, script_public_key) {
    _assertBigInt(value);
    _assertClass(script_public_key, ScriptPublicKey);
    if (script_public_key.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.transactionoutput_ctor(value, script_public_key.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    TransactionOutputFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {bigint}
   */
  get value() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionoutput_value(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} v
   */
  set value(v) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(v);
    wasm.transactionoutput_set_value(this.__wbg_ptr, v);
  }
  /**
   * @returns {ScriptPublicKey}
   */
  get scriptPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionoutput_scriptPublicKey(this.__wbg_ptr);
    return ScriptPublicKey.__wrap(ret);
  }
  /**
   * @param {ScriptPublicKey} v
   */
  set scriptPublicKey(v) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(v, ScriptPublicKey);
    if (v.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    wasm.transactionoutput_set_scriptPublicKey(this.__wbg_ptr, v.__wbg_ptr);
  }
}
const TransactionRecordFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionrecord_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class TransactionRecord {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(TransactionRecord.prototype);
    obj.__wbg_ptr = ptr;
    TransactionRecordFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      id: this.id,
      unixtimeMsec: this.unixtimeMsec,
      network: this.network,
      note: this.note,
      metadata: this.metadata,
      value: this.value,
      blockDaaScore: this.blockDaaScore,
      binding: this.binding,
      data: this.data,
      type: this.type
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionRecordFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionrecord_free(ptr, 0);
  }
  /**
   * @returns {Hash}
   */
  get id() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionrecord_id(this.__wbg_ptr);
    return Hash.__wrap(ret);
  }
  /**
   * @param {Hash} arg0
   */
  set id(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, Hash);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_transactionrecord_id(this.__wbg_ptr, ptr0);
  }
  /**
   * Unix time in milliseconds
   * @returns {bigint | undefined}
   */
  get unixtimeMsec() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionrecord_unixtimeMsec(this.__wbg_ptr);
    return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
  }
  /**
   * Unix time in milliseconds
   * @param {bigint | null} [arg0]
   */
  set unixtimeMsec(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(arg0)) {
      _assertBigInt(arg0);
    }
    wasm.__wbg_set_transactionrecord_unixtimeMsec(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
  }
  /**
   * @returns {NetworkId}
   */
  get network() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionrecord_network(this.__wbg_ptr);
    return NetworkId.__wrap(ret);
  }
  /**
   * @param {NetworkId} arg0
   */
  set network(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, NetworkId);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_transactionrecord_network(this.__wbg_ptr, ptr0);
  }
  /**
   * @returns {string | undefined}
   */
  get note() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionrecord_note(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * @param {string | null} [arg0]
   */
  set note(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_transactionrecord_note(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string | undefined}
   */
  get metadata() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionrecord_metadata(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * @param {string | null} [arg0]
   */
  set metadata(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_transactionrecord_metadata(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {bigint}
   */
  get value() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionrecord_value(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {bigint}
   */
  get blockDaaScore() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionrecord_blockDaaScore(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {IBinding}
   */
  get binding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionrecord_binding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {ITransactionData}
   */
  get data() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionrecord_data(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get type() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transactionrecord_type(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Check if the transaction record has the given address within the associated UTXO set.
   * @param {Address} address
   * @returns {boolean}
   */
  hasAddress(address) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(address, Address);
    if (address.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.transactionrecord_hasAddress(this.__wbg_ptr, address.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Serialize the transaction record to a JavaScript object.
   * @returns {any}
   */
  serialize() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionrecord_serialize(this.__wbg_ptr);
    return ret;
  }
}
const TransactionRecordNotificationFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionrecordnotification_free(ptr >>> 0, 1));
class TransactionRecordNotification {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(TransactionRecordNotification.prototype);
    obj.__wbg_ptr = ptr;
    TransactionRecordNotificationFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      type: this.type,
      data: this.data
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionRecordNotificationFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionrecordnotification_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get type() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.__wbg_get_transactionrecordnotification_type(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set type(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_transactionrecordnotification_type(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {TransactionRecord}
   */
  get data() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionrecordnotification_data(this.__wbg_ptr);
    return TransactionRecord.__wrap(ret);
  }
  /**
   * @param {TransactionRecord} arg0
   */
  set data(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, TransactionRecord);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_transactionrecordnotification_data(this.__wbg_ptr, ptr0);
  }
}
const TransactionSigningHashFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionsigninghash_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class TransactionSigningHash {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionSigningHashFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionsigninghash_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.transactionsigninghash_new();
    this.__wbg_ptr = ret >>> 0;
    TransactionSigningHashFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {HexString | Uint8Array} data
   */
  update(data) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionsigninghash_update(this.__wbg_ptr, data);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {string}
   */
  finalize() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transactionsigninghash_finalize(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const TransactionSigningHashECDSAFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionsigninghashecdsa_free(ptr >>> 0, 1));
/**
 * @category Wallet SDK
 */
class TransactionSigningHashECDSA {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionSigningHashECDSAFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionsigninghashecdsa_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.transactionsigninghashecdsa_new();
    this.__wbg_ptr = ret >>> 0;
    TransactionSigningHashECDSAFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {HexString | Uint8Array} data
   */
  update(data) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.transactionsigninghashecdsa_update(this.__wbg_ptr, data);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {string}
   */
  finalize() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.transactionsigninghashecdsa_finalize(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const TransactionUtxoEntryFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_transactionutxoentry_free(ptr >>> 0, 1));
/**
 * Holds details about an individual transaction output in a utxo
 * set such as whether or not it was contained in a coinbase tx, the daa
 * score of the block that accepts the tx, its public key script, and how
 * much it pays.
 * @category Consensus
 */
class TransactionUtxoEntry {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  toJSON() {
    return {
      amount: this.amount,
      scriptPublicKey: this.scriptPublicKey,
      blockDaaScore: this.blockDaaScore,
      isCoinbase: this.isCoinbase
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionUtxoEntryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionutxoentry_free(ptr, 0);
  }
  /**
   * @returns {bigint}
   */
  get amount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionutxoentry_amount(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} arg0
   */
  set amount(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(arg0);
    wasm.__wbg_set_transactionutxoentry_amount(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {ScriptPublicKey}
   */
  get scriptPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionutxoentry_scriptPublicKey(this.__wbg_ptr);
    return ScriptPublicKey.__wrap(ret);
  }
  /**
   * @param {ScriptPublicKey} arg0
   */
  set scriptPublicKey(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, ScriptPublicKey);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_transactionutxoentry_scriptPublicKey(this.__wbg_ptr, ptr0);
  }
  /**
   * @returns {bigint}
   */
  get blockDaaScore() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionutxoentry_blockDaaScore(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} arg0
   */
  set blockDaaScore(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(arg0);
    wasm.__wbg_set_transactionutxoentry_blockDaaScore(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {boolean}
   */
  get isCoinbase() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_transactionutxoentry_isCoinbase(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set isCoinbase(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBoolean(arg0);
    wasm.__wbg_set_transactionutxoentry_isCoinbase(this.__wbg_ptr, arg0);
  }
}
const UserInfoOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_userinfooptions_free(ptr >>> 0, 1));
class UserInfoOptions {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(UserInfoOptions.prototype);
    obj.__wbg_ptr = ptr;
    UserInfoOptionsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UserInfoOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_userinfooptions_free(ptr, 0);
  }
  /**
   * @param {string | null} [encoding]
   */
  constructor(encoding) {
    const ret = wasm.userinfooptions_new_with_values(isLikeNone(encoding) ? 0 : addToExternrefTable0(encoding));
    this.__wbg_ptr = ret >>> 0;
    UserInfoOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {UserInfoOptions}
   */
  static new() {
    const ret = wasm.userinfooptions_new();
    return UserInfoOptions.__wrap(ret);
  }
  /**
   * @returns {string | undefined}
   */
  get encoding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.userinfooptions_encoding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set encoding(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.userinfooptions_set_encoding(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
}
const UtxoContextFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_utxocontext_free(ptr >>> 0, 1));
/**
 *
 * UtxoContext is a class that provides a way to track addresses activity
 * on the Kaspa network.  When an address is registered with UtxoContext
 * it aggregates all UTXO entries for that address and emits events when
 * any activity against these addresses occurs.
 *
 * UtxoContext constructor accepts {@link IUtxoContextArgs} interface that
 * can contain an optional id parameter.  If supplied, this `id` parameter
 * will be included in all notifications emitted by the UtxoContext as
 * well as included as a part of {@link ITransactionRecord} emitted when
 * transactions occur. If not provided, a random id will be generated. This id
 * typically represents an account id in the context of a wallet application.
 * The integrated Wallet API uses UtxoContext to represent wallet accounts.
 *
 * **Exchanges:** if you are building an exchange wallet, it is recommended
 * to use UtxoContext for each user account.  This way you can track and isolate
 * each user activity (use address set, balances, transaction records).
 *
 * UtxoContext maintains a real-time cumulative balance of all addresses
 * registered against it and provides balance update notification events
 * when the balance changes.
 *
 * The UtxoContext balance is comprised of 3 values:
 * - `mature`: amount of funds available for spending.
 * - `pending`: amount of funds that are being received.
 * - `outgoing`: amount of funds that are being sent but are not yet accepted by the network.
 *
 * Please see {@link IBalance} interface for more details.
 *
 * UtxoContext can be supplied as a UTXO source to the transaction {@link Generator}
 * allowing the {@link Generator} to create transactions using the
 * UTXO entries it manages.
 *
 * **IMPORTANT:** UtxoContext is meant to represent a single account.  It is not
 * designed to be used as a global UTXO manager for all addresses in a very large
 * wallet (such as an exchange wallet). For such use cases, it is recommended to
 * perform manual UTXO management by subscribing to UTXO notifications using
 * {@link RpcClient.subscribeUtxosChanged} and {@link RpcClient.getUtxosByAddresses}.
 *
 * @see {@link IUtxoContextArgs},
 * {@link UtxoProcessor},
 * {@link Generator},
 * {@link createTransactions},
 * {@link IBalance},
 * {@link IBalanceEvent},
 * {@link IPendingEvent},
 * {@link IReorgEvent},
 * {@link IStasisEvent},
 * {@link IMaturityEvent},
 * {@link IDiscoveryEvent},
 * {@link IBalanceEvent},
 * {@link ITransactionRecord}
 *
 * @category Wallet SDK
 */
class UtxoContext {
  toJSON() {
    return {
      isActive: this.isActive,
      matureLength: this.matureLength,
      balance: this.balance,
      balanceStrings: this.balanceStrings
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UtxoContextFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_utxocontext_free(ptr, 0);
  }
  /**
   * @param {IUtxoContextArgs} js_value
   */
  constructor(js_value) {
    const ret = wasm.utxocontext_ctor(js_value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    UtxoContextFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Performs a scan of the given addresses and registers them in the context for event notifications.
   * @param {(Address | string)[]} addresses
   * @param {bigint | null} [optional_current_daa_score]
   * @returns {Promise<void>}
   */
  trackAddresses(addresses, optional_current_daa_score) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_trackAddresses(this.__wbg_ptr, addresses, isLikeNone(optional_current_daa_score) ? 0 : addToExternrefTable0(optional_current_daa_score));
    return ret;
  }
  /**
   * Unregister a list of addresses from the context. This will stop tracking of these addresses.
   * @param {(Address | string)[]} addresses
   * @returns {Promise<void>}
   */
  unregisterAddresses(addresses) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_unregisterAddresses(this.__wbg_ptr, addresses);
    return ret;
  }
  /**
   * Clear the UtxoContext.  Unregister all addresses and clear all UTXO entries.
   * IMPORTANT: This function must be manually called when disconnecting or re-connecting to the node
   * (followed by address re-registration).
   * @returns {Promise<void>}
   */
  clear() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_clear(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {boolean}
   */
  get isActive() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_isActive(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   *
   * Returns a range of mature UTXO entries that are currently
   * managed by the UtxoContext and are available for spending.
   *
   * NOTE: This function is provided for informational purposes only.
   * **You should not manage UTXO entries manually if they are owned by UtxoContext.**
   *
   * The resulting range may be less than requested if UTXO entries
   * have been spent asynchronously by UtxoContext or by other means
   * (i.e. UtxoContext has received notification from the network that
   * UtxoEntries have been spent externally).
   *
   * UtxoEntries are kept in in the ascending sorted order by their amount.
   * @param {number} from
   * @param {number} to
   * @returns {UtxoEntryReference[]}
   */
  getMatureRange(from, to) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(from);
    _assertNum(to);
    const ret = wasm.utxocontext_getMatureRange(this.__wbg_ptr, from, to);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Obtain the length of the mature UTXO entries that are currently
   * managed by the UtxoContext.
   * @returns {number}
   */
  get matureLength() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_matureLength(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Returns pending UTXO entries that are currently managed by the UtxoContext.
   * @returns {UtxoEntryReference[]}
   */
  getPending() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_getPending(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Current {@link Balance} of the UtxoContext.
   * @returns {Balance | undefined}
   */
  get balance() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_balance(this.__wbg_ptr);
    return ret === 0 ? undefined : Balance.__wrap(ret);
  }
  /**
   * Current {@link BalanceStrings} of the UtxoContext.
   * @returns {BalanceStrings | undefined}
   */
  get balanceStrings() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxocontext_balanceStrings(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] === 0 ? undefined : BalanceStrings.__wrap(ret[0]);
  }
}
const UtxoEntriesFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_utxoentries_free(ptr >>> 0, 1));
/**
 * A simple collection of UTXO entries. This struct is used to
 * retain a set of UTXO entries in the WASM memory for faster
 * processing. This struct keeps a list of entries represented
 * by `UtxoEntryReference` struct. This data structure is used
 * internally by the framework, but is exposed for convenience.
 * Please consider using `UtxoContext` instead.
 * @category Wallet SDK
 */
class UtxoEntries {
  toJSON() {
    return {
      items: this.items
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UtxoEntriesFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_utxoentries_free(ptr, 0);
  }
  /**
   * Create a new `UtxoEntries` struct with a set of entries.
   * @param {any} js_value
   */
  constructor(js_value) {
    const ret = wasm.utxoentries_js_ctor(js_value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    UtxoEntriesFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {any}
   */
  get items() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentries_get_items_as_js_array(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {any} js_value
   */
  set items(js_value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.utxoentries_set_items_from_js_array(this.__wbg_ptr, js_value);
  }
  /**
   * Sort the contained entries by amount. Please note that
   * this function is not intended for use with large UTXO sets
   * as it duplicates the whole contained UTXO set while sorting.
   */
  sort() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.utxoentries_sort(this.__wbg_ptr);
  }
  /**
   * @returns {bigint}
   */
  amount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentries_amount(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
}
const UtxoEntryFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_utxoentry_free(ptr >>> 0, 1));
/**
 * [`UtxoEntry`] struct represents a client-side UTXO entry.
 *
 * @category Wallet SDK
 */
class UtxoEntry {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(UtxoEntry.prototype);
    obj.__wbg_ptr = ptr;
    UtxoEntryFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      address: this.address,
      outpoint: this.outpoint,
      amount: this.amount,
      scriptPublicKey: this.scriptPublicKey,
      blockDaaScore: this.blockDaaScore,
      isCoinbase: this.isCoinbase
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UtxoEntryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_utxoentry_free(ptr, 0);
  }
  /**
   * @returns {Address | undefined}
   */
  get address() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_utxoentry_address(this.__wbg_ptr);
    return ret === 0 ? undefined : Address.__wrap(ret);
  }
  /**
   * @param {Address | null} [arg0]
   */
  set address(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    let ptr0 = 0;
    if (!isLikeNone(arg0)) {
      _assertClass(arg0, Address);
      if (arg0.__wbg_ptr === 0) {
        throw new Error('Attempt to use a moved value');
      }
      ptr0 = arg0.__destroy_into_raw();
    }
    wasm.__wbg_set_utxoentry_address(this.__wbg_ptr, ptr0);
  }
  /**
   * @returns {TransactionOutpoint}
   */
  get outpoint() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_utxoentry_outpoint(this.__wbg_ptr);
    return TransactionOutpoint.__wrap(ret);
  }
  /**
   * @param {TransactionOutpoint} arg0
   */
  set outpoint(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, TransactionOutpoint);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_utxoentry_outpoint(this.__wbg_ptr, ptr0);
  }
  /**
   * @returns {bigint}
   */
  get amount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_utxoentry_amount(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} arg0
   */
  set amount(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(arg0);
    wasm.__wbg_set_utxoentry_amount(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {ScriptPublicKey}
   */
  get scriptPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_utxoentry_scriptPublicKey(this.__wbg_ptr);
    return ScriptPublicKey.__wrap(ret);
  }
  /**
   * @param {ScriptPublicKey} arg0
   */
  set scriptPublicKey(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertClass(arg0, ScriptPublicKey);
    if (arg0.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_utxoentry_scriptPublicKey(this.__wbg_ptr, ptr0);
  }
  /**
   * @returns {bigint}
   */
  get blockDaaScore() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_utxoentry_blockDaaScore(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @param {bigint} arg0
   */
  set blockDaaScore(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBigInt(arg0);
    wasm.__wbg_set_utxoentry_blockDaaScore(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {boolean}
   */
  get isCoinbase() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_utxoentry_isCoinbase(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set isCoinbase(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertBoolean(arg0);
    wasm.__wbg_set_utxoentry_isCoinbase(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {string}
   */
  toString() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentry_toString(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
}
const UtxoEntryReferenceFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_utxoentryreference_free(ptr >>> 0, 1));
/**
 * [`Arc`] reference to a [`UtxoEntry`] used by the wallet subsystems.
 *
 * @category Wallet SDK
 */
class UtxoEntryReference {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(UtxoEntryReference.prototype);
    obj.__wbg_ptr = ptr;
    UtxoEntryReferenceFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      entry: this.entry,
      outpoint: this.outpoint,
      address: this.address,
      amount: this.amount,
      isCoinbase: this.isCoinbase,
      blockDaaScore: this.blockDaaScore,
      scriptPublicKey: this.scriptPublicKey
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UtxoEntryReferenceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_utxoentryreference_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  toString() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_toString(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * @returns {UtxoEntry}
   */
  get entry() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_entry(this.__wbg_ptr);
    return UtxoEntry.__wrap(ret);
  }
  /**
   * @returns {TransactionOutpoint}
   */
  get outpoint() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_outpoint(this.__wbg_ptr);
    return TransactionOutpoint.__wrap(ret);
  }
  /**
   * @returns {Address | undefined}
   */
  get address() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_address(this.__wbg_ptr);
    return ret === 0 ? undefined : Address.__wrap(ret);
  }
  /**
   * @returns {bigint}
   */
  get amount() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_amount(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @returns {boolean}
   */
  get isCoinbase() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_isCoinbase(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {bigint}
   */
  get blockDaaScore() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_blockDaaScore(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @returns {ScriptPublicKey}
   */
  get scriptPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoentryreference_scriptPublicKey(this.__wbg_ptr);
    return ScriptPublicKey.__wrap(ret);
  }
}
const UtxoProcessorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_utxoprocessor_free(ptr >>> 0, 1));
/**
 *
 * UtxoProcessor class is the main coordinator that manages UTXO processing
 * between multiple UtxoContext instances. It acts as a bridge between the
 * Kaspa node RPC connection, address subscriptions and UtxoContext instances.
 *
 * @see {@link IUtxoProcessorArgs},
 * {@link UtxoContext},
 * {@link RpcClient},
 * {@link NetworkId},
 * {@link IConnectEvent}
 * {@link IDisconnectEvent}
 * @category Wallet SDK
 */
class UtxoProcessor {
  toJSON() {
    return {
      rpc: this.rpc,
      networkId: this.networkId,
      isActive: this.isActive
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UtxoProcessorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_utxoprocessor_free(ptr, 0);
  }
  /**
   * @param {string | UtxoProcessorNotificationCallback} event
   * @param {UtxoProcessorNotificationCallback | null} [callback]
   */
  addEventListener(event, callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_addEventListener(this.__wbg_ptr, event, isLikeNone(callback) ? 0 : addToExternrefTable0(callback));
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {UtxoProcessorEventType | UtxoProcessorEventType[] | string | string[]} event
   * @param {UtxoProcessorNotificationCallback | null} [callback]
   */
  removeEventListener(event, callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_removeEventListener(this.__wbg_ptr, event, isLikeNone(callback) ? 0 : addToExternrefTable0(callback));
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * UtxoProcessor constructor.
   *
   *
   *
   * @see {@link IUtxoProcessorArgs}
   * @param {IUtxoProcessorArgs} js_value
   */
  constructor(js_value) {
    const ret = wasm.utxoprocessor_ctor(js_value);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    UtxoProcessorFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Starts the UtxoProcessor and begins processing UTXO and other notifications.
   * @returns {Promise<void>}
   */
  start() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_start(this.__wbg_ptr);
    return ret;
  }
  /**
   * Stops the UtxoProcessor and ends processing UTXO and other notifications.
   * @returns {Promise<void>}
   */
  stop() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_stop(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {RpcClient}
   */
  get rpc() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_rpc(this.__wbg_ptr);
    return RpcClient.__wrap(ret);
  }
  /**
   * @returns {string | undefined}
   */
  get networkId() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_networkId(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * @param {NetworkId | string} network_id
   */
  setNetworkId(network_id) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_setNetworkId(this.__wbg_ptr, network_id);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {boolean}
   */
  get isActive() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.utxoprocessor_isActive(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   *
   * Set the coinbase transaction maturity period DAA score for a given network.
   * This controls the DAA period after which the user transactions are considered mature
   * and the wallet subsystem emits the transaction maturity event.
   *
   * @see {@link TransactionRecord}
   * @see {@link IUtxoProcessorEvent}
   *
   * @category Wallet SDK
   * @param {NetworkId | string} network_id
   * @param {bigint} value
   */
  static setCoinbaseTransactionMaturityDAA(network_id, value) {
    _assertBigInt(value);
    const ret = wasm.utxoprocessor_setCoinbaseTransactionMaturityDAA(network_id, value);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   *
   * Set the user transaction maturity period DAA score for a given network.
   * This controls the DAA period after which the user transactions are considered mature
   * and the wallet subsystem emits the transaction maturity event.
   *
   * @see {@link TransactionRecord}
   * @see {@link IUtxoProcessorEvent}
   *
   * @category Wallet SDK
   * @param {NetworkId | string} network_id
   * @param {bigint} value
   */
  static setUserTransactionMaturityDAA(network_id, value) {
    _assertBigInt(value);
    const ret = wasm.utxoprocessor_setUserTransactionMaturityDAA(network_id, value);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
}
const WalletFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_wallet_free(ptr >>> 0, 1));
/**
 *
 * Wallet class is the main coordinator that manages integrated wallet operations.
 *
 * The Wallet class encapsulates {@link UtxoProcessor} and provides internal
 * account management using {@link UtxoContext} instances. It acts as a bridge
 * between the integrated Wallet subsystem providing a high-level interface
 * for wallet key and account management.
 *
 * The Rusty Kaspa is developed in Rust, and the Wallet class is a Rust implementation
 * exposed to the JavaScript/TypeScript environment using the WebAssembly (WASM32) interface.
 * As such, the Wallet implementation can be powered up using native Rust or built
 * as a WebAssembly module and used in the browser or Node.js environment.
 *
 * When using Rust native or NodeJS environment, all wallet data is stored on the local
 * filesystem.  When using WASM32 build in the web browser, the wallet data is stored
 * in the browser's `localStorage` and transaction records are stored in the `IndexedDB`.
 *
 * The Wallet API can create multiple wallet instances, however, only one wallet instance
 * can be active at a time.
 *
 * The wallet implementation is designed to be efficient and support a large number
 * of accounts. Accounts reside in storage and can be loaded and activated as needed.
 * A `loaded` account contains all account information loaded from the permanent storage
 * whereas an `active` account monitors the UTXO set and provides notifications for
 * incoming and outgoing transactions as well as balance updates.
 *
 * The Wallet API communicates with the client using resource identifiers. These include
 * account IDs, private key IDs, transaction IDs, etc. It is the responsibility of the
 * client to track these resource identifiers at runtime.
 *
 * @see {@link IWalletConfig},
 *
 * @category Wallet API
 */
class Wallet {
  toJSON() {
    return {
      rpc: this.rpc,
      isOpen: this.isOpen,
      isSynced: this.isSynced,
      descriptor: this.descriptor
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WalletFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_wallet_free(ptr, 0);
  }
  /**
   * @param {IWalletConfig} config
   */
  constructor(config) {
    const ret = wasm.wallet_constructor(config);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    WalletFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {RpcClient}
   */
  get rpc() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_rpc(this.__wbg_ptr);
    return RpcClient.__wrap(ret);
  }
  /**
   * @remarks This is a local property indicating
   * if the wallet is currently open.
   * @returns {boolean}
   */
  get isOpen() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_isOpen(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @remarks This is a local property indicating
   * if the node is currently synced.
   * @returns {boolean}
   */
  get isSynced() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_isSynced(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {WalletDescriptor | undefined}
   */
  get descriptor() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_descriptor(this.__wbg_ptr);
    return ret === 0 ? undefined : WalletDescriptor.__wrap(ret);
  }
  /**
   * Check if a wallet with a given name exists.
   * @param {string | null} [name]
   * @returns {Promise<boolean>}
   */
  exists(name) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    var ptr0 = isLikeNone(name) ? 0 : passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.wallet_exists(this.__wbg_ptr, ptr0, len0);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  start() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_start(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  stop() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_stop(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {IConnectOptions | undefined | null} [args]
   * @returns {Promise<void>}
   */
  connect(args) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_connect(this.__wbg_ptr, isLikeNone(args) ? 0 : addToExternrefTable0(args));
    return ret;
  }
  /**
   * @returns {Promise<void>}
   */
  disconnect() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_disconnect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | WalletNotificationCallback} event
   * @param {WalletNotificationCallback | null} [callback]
   */
  addEventListener(event, callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_addEventListener(this.__wbg_ptr, event, isLikeNone(callback) ? 0 : addToExternrefTable0(callback));
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {WalletEventType | WalletEventType[] | string | string[]} event
   * @param {WalletNotificationCallback | null} [callback]
   */
  removeEventListener(event, callback) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_removeEventListener(this.__wbg_ptr, event, isLikeNone(callback) ? 0 : addToExternrefTable0(callback));
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Ping backend
   * @see {@link IBatchRequest} {@link IBatchResponse}
   * @throws `string` in case of an error.
   * @param {IBatchRequest} request
   * @returns {Promise<IBatchResponse>}
   */
  batch(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_batch(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IFlushRequest} {@link IFlushResponse}
   * @throws `string` in case of an error.
   * @param {IFlushRequest} request
   * @returns {Promise<IFlushResponse>}
   */
  flush(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_flush(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IRetainContextRequest} {@link IRetainContextResponse}
   * @throws `string` in case of an error.
   * @param {IRetainContextRequest} request
   * @returns {Promise<IRetainContextResponse>}
   */
  retainContext(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_retainContext(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IGetStatusRequest} {@link IGetStatusResponse}
   * @throws `string` in case of an error.
   * @param {IGetStatusRequest} request
   * @returns {Promise<IGetStatusResponse>}
   */
  getStatus(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_getStatus(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletEnumerateRequest} {@link IWalletEnumerateResponse}
   * @throws `string` in case of an error.
   * @param {IWalletEnumerateRequest} request
   * @returns {Promise<IWalletEnumerateResponse>}
   */
  walletEnumerate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletEnumerate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletCreateRequest} {@link IWalletCreateResponse}
   * @throws `string` in case of an error.
   * @param {IWalletCreateRequest} request
   * @returns {Promise<IWalletCreateResponse>}
   */
  walletCreate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletCreate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletOpenRequest} {@link IWalletOpenResponse}
   * @throws `string` in case of an error.
   * @param {IWalletOpenRequest} request
   * @returns {Promise<IWalletOpenResponse>}
   */
  walletOpen(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletOpen(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletReloadRequest} {@link IWalletReloadResponse}
   * @throws `string` in case of an error.
   * @param {IWalletReloadRequest} request
   * @returns {Promise<IWalletReloadResponse>}
   */
  walletReload(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletReload(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletCloseRequest} {@link IWalletCloseResponse}
   * @throws `string` in case of an error.
   * @param {IWalletCloseRequest} request
   * @returns {Promise<IWalletCloseResponse>}
   */
  walletClose(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletClose(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletChangeSecretRequest} {@link IWalletChangeSecretResponse}
   * @throws `string` in case of an error.
   * @param {IWalletChangeSecretRequest} request
   * @returns {Promise<IWalletChangeSecretResponse>}
   */
  walletChangeSecret(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletChangeSecret(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletExportRequest} {@link IWalletExportResponse}
   * @throws `string` in case of an error.
   * @param {IWalletExportRequest} request
   * @returns {Promise<IWalletExportResponse>}
   */
  walletExport(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletExport(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IWalletImportRequest} {@link IWalletImportResponse}
   * @throws `string` in case of an error.
   * @param {IWalletImportRequest} request
   * @returns {Promise<IWalletImportResponse>}
   */
  walletImport(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_walletImport(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IPrvKeyDataEnumerateRequest} {@link IPrvKeyDataEnumerateResponse}
   * @throws `string` in case of an error.
   * @param {IPrvKeyDataEnumerateRequest} request
   * @returns {Promise<IPrvKeyDataEnumerateResponse>}
   */
  prvKeyDataEnumerate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_prvKeyDataEnumerate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IPrvKeyDataCreateRequest} {@link IPrvKeyDataCreateResponse}
   * @throws `string` in case of an error.
   * @param {IPrvKeyDataCreateRequest} request
   * @returns {Promise<IPrvKeyDataCreateResponse>}
   */
  prvKeyDataCreate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_prvKeyDataCreate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IPrvKeyDataRemoveRequest} {@link IPrvKeyDataRemoveResponse}
   * @throws `string` in case of an error.
   * @param {IPrvKeyDataRemoveRequest} request
   * @returns {Promise<IPrvKeyDataRemoveResponse>}
   */
  prvKeyDataRemove(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_prvKeyDataRemove(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IPrvKeyDataGetRequest} {@link IPrvKeyDataGetResponse}
   * @throws `string` in case of an error.
   * @param {IPrvKeyDataGetRequest} request
   * @returns {Promise<IPrvKeyDataGetResponse>}
   */
  prvKeyDataGet(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_prvKeyDataGet(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsEnumerateRequest} {@link IAccountsEnumerateResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsEnumerateRequest} request
   * @returns {Promise<IAccountsEnumerateResponse>}
   */
  accountsEnumerate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsEnumerate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsRenameRequest} {@link IAccountsRenameResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsRenameRequest} request
   * @returns {Promise<IAccountsRenameResponse>}
   */
  accountsRename(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsRename(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsDiscoveryRequest} {@link IAccountsDiscoveryResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsDiscoveryRequest} request
   * @returns {Promise<IAccountsDiscoveryResponse>}
   */
  accountsDiscovery(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsDiscovery(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsCreateRequest} {@link IAccountsCreateResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsCreateRequest} request
   * @returns {Promise<IAccountsCreateResponse>}
   */
  accountsCreate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsCreate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsEnsureDefaultRequest} {@link IAccountsEnsureDefaultResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsEnsureDefaultRequest} request
   * @returns {Promise<IAccountsEnsureDefaultResponse>}
   */
  accountsEnsureDefault(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsEnsureDefault(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsImportRequest} {@link IAccountsImportResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsImportRequest} request
   * @returns {Promise<IAccountsImportResponse>}
   */
  accountsImport(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsImport(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsActivateRequest} {@link IAccountsActivateResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsActivateRequest} request
   * @returns {Promise<IAccountsActivateResponse>}
   */
  accountsActivate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsActivate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsDeactivateRequest} {@link IAccountsDeactivateResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsDeactivateRequest} request
   * @returns {Promise<IAccountsDeactivateResponse>}
   */
  accountsDeactivate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsDeactivate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsGetRequest} {@link IAccountsGetResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsGetRequest} request
   * @returns {Promise<IAccountsGetResponse>}
   */
  accountsGet(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsGet(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsCreateNewAddressRequest} {@link IAccountsCreateNewAddressResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsCreateNewAddressRequest} request
   * @returns {Promise<IAccountsCreateNewAddressResponse>}
   */
  accountsCreateNewAddress(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsCreateNewAddress(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsSendRequest} {@link IAccountsSendResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsSendRequest} request
   * @returns {Promise<IAccountsSendResponse>}
   */
  accountsSend(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsSend(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsTransferRequest} {@link IAccountsTransferResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsTransferRequest} request
   * @returns {Promise<IAccountsTransferResponse>}
   */
  accountsTransfer(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsTransfer(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAccountsEstimateRequest} {@link IAccountsEstimateResponse}
   * @throws `string` in case of an error.
   * @param {IAccountsEstimateRequest} request
   * @returns {Promise<IAccountsEstimateResponse>}
   */
  accountsEstimate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_accountsEstimate(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link ITransactionsDataGetRequest} {@link ITransactionsDataGetResponse}
   * @throws `string` in case of an error.
   * @param {ITransactionsDataGetRequest} request
   * @returns {Promise<ITransactionsDataGetResponse>}
   */
  transactionsDataGet(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_transactionsDataGet(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link ITransactionsReplaceNoteRequest} {@link ITransactionsReplaceNoteResponse}
   * @throws `string` in case of an error.
   * @param {ITransactionsReplaceNoteRequest} request
   * @returns {Promise<ITransactionsReplaceNoteResponse>}
   */
  transactionsReplaceNote(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_transactionsReplaceNote(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link ITransactionsReplaceMetadataRequest} {@link ITransactionsReplaceMetadataResponse}
   * @throws `string` in case of an error.
   * @param {ITransactionsReplaceMetadataRequest} request
   * @returns {Promise<ITransactionsReplaceMetadataResponse>}
   */
  transactionsReplaceMetadata(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_transactionsReplaceMetadata(this.__wbg_ptr, request);
    return ret;
  }
  /**
   * @see {@link IAddressBookEnumerateRequest} {@link IAddressBookEnumerateResponse}
   * @throws `string` in case of an error.
   * @param {IAddressBookEnumerateRequest} request
   * @returns {Promise<IAddressBookEnumerateResponse>}
   */
  addressBookEnumerate(request) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wallet_addressBookEnumerate(this.__wbg_ptr, request);
    return ret;
  }
}
const WalletDescriptorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_walletdescriptor_free(ptr >>> 0, 1));
/**
 * @category Wallet API
 */
class WalletDescriptor {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(WalletDescriptor.prototype);
    obj.__wbg_ptr = ptr;
    WalletDescriptorFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      title: this.title,
      filename: this.filename
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WalletDescriptorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_walletdescriptor_free(ptr, 0);
  }
  /**
   * @returns {string | undefined}
   */
  get title() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.__wbg_get_walletdescriptor_title(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  /**
   * @param {string | null} [arg0]
   */
  set title(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_walletdescriptor_title(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get filename() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.__wbg_get_walletdescriptor_filename(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set filename(arg0) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_walletdescriptor_filename(this.__wbg_ptr, ptr0, len0);
  }
}
const WasiOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_wasioptions_free(ptr >>> 0, 1));
class WasiOptions {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(WasiOptions.prototype);
    obj.__wbg_ptr = ptr;
    WasiOptionsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WasiOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_wasioptions_free(ptr, 0);
  }
  /**
   * @param {any[] | null | undefined} args
   * @param {object | null | undefined} env
   * @param {object} preopens
   */
  constructor(args, env, preopens) {
    var ptr0 = isLikeNone(args) ? 0 : passArrayJsValueToWasm0(args, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.wasioptions_new_with_values(ptr0, len0, isLikeNone(env) ? 0 : addToExternrefTable0(env), preopens);
    this.__wbg_ptr = ret >>> 0;
    WasiOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {object} preopens
   * @returns {WasiOptions}
   */
  static new(preopens) {
    const ret = wasm.wasioptions_new(preopens);
    return WasiOptions.__wrap(ret);
  }
  /**
   * @returns {any[] | undefined}
   */
  get args() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wasioptions_args(this.__wbg_ptr);
    let v1;
    if (ret[0] !== 0) {
      v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    }
    return v1;
  }
  /**
   * @param {any[] | null} [value]
   */
  set args(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    var ptr0 = isLikeNone(value) ? 0 : passArrayJsValueToWasm0(value, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.wasioptions_set_args(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {object | undefined}
   */
  get env() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wasioptions_env(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {object | null} [value]
   */
  set env(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.wasioptions_set_env(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {object}
   */
  get preopens() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.wasioptions_preopens(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {object} value
   */
  set preopens(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.wasioptions_set_preopens(this.__wbg_ptr, value);
  }
}
const WriteFileSyncOptionsFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_writefilesyncoptions_free(ptr >>> 0, 1));
class WriteFileSyncOptions {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WriteFileSyncOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_writefilesyncoptions_free(ptr, 0);
  }
  /**
   * @param {string | null} [encoding]
   * @param {string | null} [flag]
   * @param {number | null} [mode]
   */
  constructor(encoding, flag, mode) {
    if (!isLikeNone(mode)) {
      _assertNum(mode);
    }
    const ret = wasm.writefilesyncoptions_new(isLikeNone(encoding) ? 0 : addToExternrefTable0(encoding), isLikeNone(flag) ? 0 : addToExternrefTable0(flag), isLikeNone(mode) ? 0x100000001 : mode >>> 0);
    this.__wbg_ptr = ret >>> 0;
    WriteFileSyncOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string | undefined}
   */
  get encoding() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writefilesyncoptions_encoding(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set encoding(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.writefilesyncoptions_set_encoding(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {string | undefined}
   */
  get flag() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writefilesyncoptions_flag(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {string | null} [value]
   */
  set flag(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    wasm.writefilesyncoptions_set_flag(this.__wbg_ptr, isLikeNone(value) ? 0 : addToExternrefTable0(value));
  }
  /**
   * @returns {number | undefined}
   */
  get mode() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writefilesyncoptions_mode(this.__wbg_ptr);
    return ret === 0x100000001 ? undefined : ret;
  }
  /**
   * @param {number | null} [value]
   */
  set mode(value) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    if (!isLikeNone(value)) {
      _assertNum(value);
    }
    wasm.writefilesyncoptions_set_mode(this.__wbg_ptr, isLikeNone(value) ? 0x100000001 : value >>> 0);
  }
}
const WriteStreamFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_writestream_free(ptr >>> 0, 1));
class WriteStream {
  constructor() {
    throw new Error('cannot invoke `new` directly');
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WriteStreamFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_writestream_free(ptr, 0);
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  add_listener_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_add_listener_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  add_listener_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_add_listener_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  on_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_on_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  on_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_on_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  once_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_once_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  once_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_once_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_listener_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_prepend_listener_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_listener_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_prepend_listener_with_close(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_once_listener_with_open(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_prepend_once_listener_with_open(this.__wbg_ptr, listener);
    return ret;
  }
  /**
   * @param {Function} listener
   * @returns {any}
   */
  prepend_once_listener_with_close(listener) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.writestream_prepend_once_listener_with_close(this.__wbg_ptr, listener);
    return ret;
  }
}
const XOnlyPublicKeyFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_xonlypublickey_free(ptr >>> 0, 1));
/**
 *
 * Data structure that envelopes a XOnlyPublicKey.
 *
 * XOnlyPublicKey is used as a payload part of the {@link Address}.
 *
 * @see {@link PublicKey}
 * @category Wallet SDK
 */
class XOnlyPublicKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(XOnlyPublicKey.prototype);
    obj.__wbg_ptr = ptr;
    XOnlyPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    XOnlyPublicKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_xonlypublickey_free(ptr, 0);
  }
  /**
   * @param {string} key
   */
  constructor(key) {
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.xonlypublickey_try_new(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    XOnlyPublicKeyFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xonlypublickey_toString(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the [`Address`] of this XOnlyPublicKey.
   * Receives a [`NetworkType`] to determine the prefix of the address.
   * JavaScript: `let address = xOnlyPublicKey.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddress(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xonlypublickey_toAddress(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * Get `ECDSA` [`Address`] of this XOnlyPublicKey.
   * Receives a [`NetworkType`] to determine the prefix of the address.
   * JavaScript: `let address = xOnlyPublicKey.toAddress(NetworkType.MAINNET);`.
   * @param {NetworkType | NetworkId | string} network
   * @returns {Address}
   */
  toAddressECDSA(network) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xonlypublickey_toAddressECDSA(this.__wbg_ptr, network);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Address.__wrap(ret[0]);
  }
  /**
   * @param {Address} address
   * @returns {XOnlyPublicKey}
   */
  static fromAddress(address) {
    _assertClass(address, Address);
    if (address.__wbg_ptr === 0) {
      throw new Error('Attempt to use a moved value');
    }
    const ret = wasm.xonlypublickey_fromAddress(address.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XOnlyPublicKey.__wrap(ret[0]);
  }
}
const XPrvFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_xprv_free(ptr >>> 0, 1));
/**
 *
 * Extended private key (XPrv).
 *
 * This class allows accepts a master seed and provides
 * functions for derivation of dependent child private keys.
 *
 * Please note that Kaspa extended private keys use `kprv` prefix.
 *
 * @see {@link PrivateKeyGenerator}, {@link PublicKeyGenerator}, {@link XPub}, {@link Mnemonic}
 * @category Wallet SDK
 */
class XPrv {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(XPrv.prototype);
    obj.__wbg_ptr = ptr;
    XPrvFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      xprv: this.xprv,
      privateKey: this.privateKey,
      depth: this.depth,
      parentFingerprint: this.parentFingerprint,
      childNumber: this.childNumber,
      chainCode: this.chainCode
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    XPrvFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_xprv_free(ptr, 0);
  }
  /**
   * @param {HexString} seed
   */
  constructor(seed) {
    const ret = wasm.xprv_try_new(seed);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    XPrvFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * Create {@link XPrv} from `xprvxxxx..` string
   * @param {string} xprv
   * @returns {XPrv}
   */
  static fromXPrv(xprv) {
    const ptr0 = passStringToWasm0(xprv, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.xprv_fromXPrv(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XPrv.__wrap(ret[0]);
  }
  /**
   * @param {number} child_number
   * @param {boolean | null} [hardened]
   * @returns {XPrv}
   */
  deriveChild(child_number, hardened) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(child_number);
    if (!isLikeNone(hardened)) {
      _assertBoolean(hardened);
    }
    const ret = wasm.xprv_deriveChild(this.__wbg_ptr, child_number, isLikeNone(hardened) ? 0xFFFFFF : hardened ? 1 : 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XPrv.__wrap(ret[0]);
  }
  /**
   * @param {any} path
   * @returns {XPrv}
   */
  derivePath(path) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xprv_derivePath(this.__wbg_ptr, path);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XPrv.__wrap(ret[0]);
  }
  /**
   * @param {string} prefix
   * @returns {string}
   */
  intoString(prefix) {
    let deferred3_0;
    let deferred3_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.xprv_intoString(this.__wbg_ptr, ptr0, len0);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xprv_toString(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @returns {XPub}
   */
  toXPub() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xprv_toXPub(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XPub.__wrap(ret[0]);
  }
  /**
   * @returns {PrivateKey}
   */
  toPrivateKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xprv_toPrivateKey(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return PrivateKey.__wrap(ret[0]);
  }
  /**
   * @returns {string}
   */
  get xprv() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xprv_xprv(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  get privateKey() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xprv_privateKey(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {number}
   */
  get depth() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xprv_depth(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get parentFingerprint() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xprv_parentFingerprint(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {number}
   */
  get childNumber() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xprv_childNumber(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {string}
   */
  get chainCode() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xprv_chainCode(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
const XPubFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_xpub_free(ptr >>> 0, 1));
/**
 *
 * Extended public key (XPub).
 *
 * This class allows accepts another XPub and and provides
 * functions for derivation of dependent child public keys.
 *
 * Please note that Kaspa extended public keys use `kpub` prefix.
 *
 * @see {@link PrivateKeyGenerator}, {@link PublicKeyGenerator}, {@link XPrv}, {@link Mnemonic}
 * @category Wallet SDK
 */
class XPub {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(XPub.prototype);
    obj.__wbg_ptr = ptr;
    XPubFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {
      xpub: this.xpub,
      depth: this.depth,
      parentFingerprint: this.parentFingerprint,
      childNumber: this.childNumber,
      chainCode: this.chainCode
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    XPubFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_xpub_free(ptr, 0);
  }
  /**
   * @param {string} xpub
   */
  constructor(xpub) {
    const ptr0 = passStringToWasm0(xpub, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.xpub_try_new(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    XPubFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {number} child_number
   * @param {boolean | null} [hardened]
   * @returns {XPub}
   */
  deriveChild(child_number, hardened) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    _assertNum(child_number);
    if (!isLikeNone(hardened)) {
      _assertBoolean(hardened);
    }
    const ret = wasm.xpub_deriveChild(this.__wbg_ptr, child_number, isLikeNone(hardened) ? 0xFFFFFF : hardened ? 1 : 0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XPub.__wrap(ret[0]);
  }
  /**
   * @param {any} path
   * @returns {XPub}
   */
  derivePath(path) {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xpub_derivePath(this.__wbg_ptr, path);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return XPub.__wrap(ret[0]);
  }
  /**
   * @param {string} prefix
   * @returns {string}
   */
  intoString(prefix) {
    let deferred3_0;
    let deferred3_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ptr0 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.xpub_intoString(this.__wbg_ptr, ptr0, len0);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  /**
   * @returns {PublicKey}
   */
  toPublicKey() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xpub_toPublicKey(this.__wbg_ptr);
    return PublicKey.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  get xpub() {
    let deferred2_0;
    let deferred2_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xpub_xpub(this.__wbg_ptr);
      var ptr1 = ret[0];
      var len1 = ret[1];
      if (ret[3]) {
        ptr1 = 0;
        len1 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @returns {number}
   */
  get depth() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xpub_depth(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get parentFingerprint() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xpub_parentFingerprint(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {number}
   */
  get childNumber() {
    if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
    _assertNum(this.__wbg_ptr);
    const ret = wasm.xpub_childNumber(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {string}
   */
  get chainCode() {
    let deferred1_0;
    let deferred1_1;
    try {
      if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
      _assertNum(this.__wbg_ptr);
      const ret = wasm.xpub_chainCode(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
async function __wbg_load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get('Content-Type') != 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return {
        instance,
        module
      };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_BigInt_470dd987b8190f8e = function () {
    return logError(function (arg0) {
      const ret = BigInt(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_BigInt_ddea6d2f55558acb = function () {
    return handleError(function (arg0) {
      const ret = BigInt(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_String_8f0eb39a4a4c2f66 = function () {
    return logError(function (arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_Window_b0044ac7db258535 = function () {
    return logError(function (arg0) {
      const ret = arg0.Window;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_WorkerGlobalScope_b74cefefc62a37da = function () {
    return logError(function (arg0) {
      const ret = arg0.WorkerGlobalScope;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_abort_775ef1d17fc65868 = function () {
    return logError(function (arg0) {
      arg0.abort();
    }, arguments);
  };
  imports.wbg.__wbg_aborted_new = function () {
    return logError(function (arg0) {
      const ret = Aborted.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_accountkind_new = function () {
    return logError(function (arg0) {
      const ret = AccountKind.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_addListener_d78339dd4535b756 = function () {
    return logError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.addListener(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_address_new = function () {
    return logError(function (arg0) {
      const ret = Address.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_advance_b3ccc91b80962d79 = function () {
    return handleError(function (arg0, arg1) {
      arg0.advance(arg1 >>> 0);
    }, arguments);
  };
  imports.wbg.__wbg_appendChild_8204974b7328bf98 = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg0.appendChild(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_append_8c7dd8d641a5f01b = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
      arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments);
  };
  imports.wbg.__wbg_body_942ea927546a04ba = function () {
    return logError(function (arg0) {
      const ret = arg0.body;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_buffer_609cc3eee51ed158 = function () {
    return logError(function (arg0) {
      const ret = arg0.buffer;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_call_672a4d21634d4a24 = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg0.call(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_call_7cccdd69e0791ae2 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.call(arg1, arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_cancelAnimationFrame_032049cb190240a7 = function () {
    return logError(function (arg0) {
      cancelAnimationFrame(arg0);
    }, arguments);
  };
  imports.wbg.__wbg_clearInterval_d472232e2fb5e5e4 = function () {
    return handleError(function (arg0) {
      clearInterval(arg0);
    }, arguments);
  };
  imports.wbg.__wbg_clearTimeout_c5ac0f4b6a07b59e = function () {
    return handleError(function (arg0) {
      clearTimeout(arg0);
    }, arguments);
  };
  imports.wbg.__wbg_close_0880036443561527 = function () {
    return handleError(function (arg0) {
      arg0.close();
    }, arguments);
  };
  imports.wbg.__wbg_continue_c46c11d3dbe1b030 = function () {
    return handleError(function (arg0) {
      arg0.continue();
    }, arguments);
  };
  imports.wbg.__wbg_count_613cb921d67a4f26 = function () {
    return handleError(function (arg0) {
      const ret = arg0.count();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_createElement_8c9931a732ee2fea = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_createIndex_873ac48adc772309 = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
      const ret = arg0.createIndex(getStringFromWasm0(arg1, arg2), arg3, arg4);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_createObjectStore_e566459f7161f82f = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.createObjectStore(getStringFromWasm0(arg1, arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_createObjectURL_6e98d2f9c7bd9764 = function () {
    return handleError(function (arg0, arg1) {
      const ret = URL.createObjectURL(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_crypto_ed58b8e10a292839 = function () {
    return logError(function (arg0) {
      const ret = arg0.crypto;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_data_432d9c3df2630942 = function () {
    return logError(function (arg0) {
      const ret = arg0.data;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_delete_200677093b4cf756 = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg0.delete(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_delete_36c8630e530a2a1a = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0.delete(arg1);
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_document_d249400bd7bd996d = function () {
    return logError(function (arg0) {
      const ret = arg0.document;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_done_769e5ede4b31c67b = function () {
    return logError(function (arg0) {
      const ret = arg0.done;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_entries_3265d4158b33e5dc = function () {
    return logError(function (arg0) {
      const ret = Object.entries(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_entries_c8a90a7ed73e84ce = function () {
    return logError(function (arg0) {
      const ret = arg0.entries();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_error_5edc95999c70d386 = function () {
    return logError(function (arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    }, arguments);
  };
  imports.wbg.__wbg_error_b5d62a6100a65a3b = function () {
    return logError(function (arg0, arg1) {
      console.error(getStringFromWasm0(arg0, arg1));
    }, arguments);
  };
  imports.wbg.__wbg_error_ff4ddaabdfc5dbb3 = function () {
    return handleError(function (arg0) {
      const ret = arg0.error;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_existsSync_6b2031627aea3e5a = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.existsSync(getStringFromWasm0(arg1, arg2));
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_fetch_509096533071c657 = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0.fetch(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_fetch_7bb58c5ed3c31810 = function () {
    return logError(function (arg0) {
      const ret = fetch(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_fromCodePoint_f37c25c172f2e8b5 = function () {
    return handleError(function (arg0) {
      const ret = String.fromCodePoint(arg0 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_from_2a5d3e218e67aa85 = function () {
    return logError(function (arg0) {
      const ret = Array.from(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_from_d608a04300bfd9ac = function () {
    return logError(function (arg0) {
      const ret = Buffer.from(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_generatorsummary_new = function () {
    return logError(function (arg0) {
      const ret = GeneratorSummary.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_getItem_17f98dee3b43fa7e = function () {
    return handleError(function (arg0, arg1, arg2, arg3) {
      const ret = arg1.getItem(getStringFromWasm0(arg2, arg3));
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_getRandomValues_bcb4912f16000dc4 = function () {
    return handleError(function (arg0, arg1) {
      arg0.getRandomValues(arg1);
    }, arguments);
  };
  imports.wbg.__wbg_get_13495dac72693ecc = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0.get(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_get_67b2ba62fc30de12 = function () {
    return handleError(function (arg0, arg1) {
      const ret = Reflect.get(arg0, arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_get_8da03f81f6a1111e = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg0.get(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_get_a8e28596722a45ff = function () {
    return handleError(function (arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        const ret = chrome.storage.local.get(getStringFromWasm0(arg0, arg1));
        return ret;
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    }, arguments);
  };
  imports.wbg.__wbg_get_b9b93047fe3cf45b = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_get_f1f75752f252b231 = function () {
    return handleError(function () {
      const ret = chrome.storage.local.get();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0[arg1];
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_global_b6f5c73312f62313 = function () {
    return logError(function (arg0) {
      const ret = arg0.global;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_has_a5ea9117f258a0ec = function () {
    return handleError(function (arg0, arg1) {
      const ret = Reflect.has(arg0, arg1);
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_hash_new = function () {
    return logError(function (arg0) {
      const ret = Hash.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_headers_9cb51cfd2ac780a4 = function () {
    return logError(function (arg0) {
      const ret = arg0.headers;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_index_e00ca5fff206ee3e = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.index(getStringFromWasm0(arg1, arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_indexedDB_601ec26c63e333de = function () {
    return handleError(function (arg0) {
      const ret = arg0.indexedDB;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_indexedDB_b1f49280282046f8 = function () {
    return handleError(function (arg0) {
      const ret = arg0.indexedDB;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_indexedDB_f6b47b0dc333fd2f = function () {
    return handleError(function (arg0) {
      const ret = arg0.indexedDB;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_innerHTML_e1553352fe93921a = function () {
    return logError(function (arg0, arg1) {
      const ret = arg1.innerHTML;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function () {
    return logError(function (arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function () {
    return logError(function (arg0) {
      let result;
      try {
        result = arg0 instanceof Map;
      } catch (_) {
        result = false;
      }
      const ret = result;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_Object_7f2dcef8f78644a4 = function () {
    return logError(function (arg0) {
      let result;
      try {
        result = arg0 instanceof Object;
      } catch (_) {
        result = false;
      }
      const ret = result;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_Response_f2cc20d9f7dfd644 = function () {
    return logError(function (arg0) {
      let result;
      try {
        result = arg0 instanceof Response;
      } catch (_) {
        result = false;
      }
      const ret = result;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function () {
    return logError(function (arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function () {
    return logError(function (arg0) {
      let result;
      try {
        result = arg0 instanceof Window;
      } catch (_) {
        result = false;
      }
      const ret = result;
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_isArray_a1eab7e0d067391b = function () {
    return logError(function (arg0) {
      const ret = Array.isArray(arg0);
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function () {
    return logError(function (arg0) {
      const ret = Number.isSafeInteger(arg0);
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_is_c7481c65e7e5df9e = function () {
    return logError(function (arg0, arg1) {
      const ret = Object.is(arg0, arg1);
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
    return logError(function () {
      const ret = Symbol.iterator;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_key_c5e0a01cf450dca2 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg1.key(arg2 >>> 0);
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_keys_5c77a08ddc2fb8a6 = function () {
    return logError(function (arg0) {
      const ret = Object.keys(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_length_a446193dc22c12f8 = function () {
    return logError(function (arg0) {
      const ret = arg0.length;
      _assertNum(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_length_e2d2a49132c1b256 = function () {
    return logError(function (arg0) {
      const ret = arg0.length;
      _assertNum(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_length_ed4a84b02b798bda = function () {
    return handleError(function (arg0) {
      const ret = arg0.length;
      _assertNum(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_localStorage_1406c99c39728187 = function () {
    return handleError(function (arg0) {
      const ret = arg0.localStorage;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_location_350d99456c2f3693 = function () {
    return logError(function (arg0) {
      const ret = arg0.location;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_log_6c164928aa7b57f4 = function () {
    return logError(function (arg0, arg1) {
      console.log(getStringFromWasm0(arg0, arg1));
    }, arguments);
  };
  imports.wbg.__wbg_mkdirSync_29d1fd92bf140bd0 = function () {
    return handleError(function (arg0, arg1, arg2, arg3) {
      arg0.mkdirSync(getStringFromWasm0(arg1, arg2), arg3);
    }, arguments);
  };
  imports.wbg.__wbg_msCrypto_0a36e2ec3a343d26 = function () {
    return logError(function (arg0) {
      const ret = arg0.msCrypto;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_navigator_1577371c070c8947 = function () {
    return logError(function (arg0) {
      const ret = arg0.navigator;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_networkid_new = function () {
    return logError(function (arg0) {
      const ret = NetworkId.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new0_f788a2397c7ca929 = function () {
    return logError(function () {
      const ret = new Date();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_018dcc2d6c8c2f6a = function () {
    return handleError(function () {
      const ret = new Headers();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_0b790fd655ff1a97 = function () {
    return handleError(function (arg0, arg1) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_23a2665fac83c611 = function () {
    return logError(function (arg0, arg1) {
      try {
        var state0 = {
          a: arg0,
          b: arg1
        };
        var cb0 = (arg0, arg1) => {
          const a = state0.a;
          state0.a = 0;
          try {
            return __wbg_adapter_383(a, state0.b, arg0, arg1);
          } finally {
            state0.a = a;
          }
        };
        const ret = new Promise(cb0);
        return ret;
      } finally {
        state0.a = state0.b = 0;
      }
    }, arguments);
  };
  imports.wbg.__wbg_new_405e22f390576ce2 = function () {
    return logError(function () {
      const ret = new Object();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_5e0be73521bc8c17 = function () {
    return logError(function () {
      const ret = new Map();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_757fd34d47ff40d2 = function () {
    return logError(function (arg0) {
      const ret = new ArrayBuffer(arg0 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_78feb108b6472713 = function () {
    return logError(function () {
      const ret = new Array();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_a12002a7f91c75be = function () {
    return logError(function (arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_b1a33e5095abf678 = function () {
    return handleError(function (arg0, arg1) {
      const ret = new Worker(getStringFromWasm0(arg0, arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_e25e5aab09ff45db = function () {
    return handleError(function () {
      const ret = new AbortController();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_f5f8a7325e1cb479 = function () {
    return logError(function () {
      const ret = new Error();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_newnoargs_105ed471475aaf50 = function () {
    return logError(function (arg0, arg1) {
      const ret = new Function(getStringFromWasm0(arg0, arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_newwithlength_a381634e90c276d4 = function () {
    return logError(function (arg0) {
      const ret = new Uint8Array(arg0 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_newwithnodejsconfigimpl_b0a2d4e5b0763676 = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1), arg2, arg3, arg4, arg5, arg6);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_newwithstrandinit_06c535e0a867c635 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_newwithstrsequenceandoptions_aaff55b467c81b63 = function () {
    return handleError(function (arg0, arg1) {
      const ret = new Blob(arg0, arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_next_25feadfc0913fea9 = function () {
    return logError(function (arg0) {
      const ret = arg0.next;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_next_6574e1a8a62d1055 = function () {
    return handleError(function (arg0) {
      const ret = arg0.next();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_node_02999533c4ea02e3 = function () {
    return logError(function (arg0) {
      const ret = arg0.node;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_nodedescriptor_new = function () {
    return logError(function (arg0) {
      const ret = NodeDescriptor.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_now_807e54c39636c349 = function () {
    return logError(function () {
      const ret = Date.now();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_now_d18023d54d4e5500 = function () {
    return logError(function (arg0) {
      const ret = arg0.now();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_objectStore_21878d46d25b64b6 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.objectStore(getStringFromWasm0(arg1, arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_oldVersion_e8337811e52861c6 = function () {
    return logError(function (arg0) {
      const ret = arg0.oldVersion;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_on_9ef8de87725b93b5 = function () {
    return logError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.on(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_once_8901720a31f56808 = function () {
    return logError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.once(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_openCursor_d8ea5d621ec422f8 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.openCursor(arg1, __wbindgen_enum_IdbCursorDirection[arg2]);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_open_e0c0b2993eb596e1 = function () {
    return handleError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.open(getStringFromWasm0(arg1, arg2), arg3 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_pendingtransaction_new = function () {
    return logError(function (arg0) {
      const ret = PendingTransaction.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_postMessage_6edafa8f7b9c2f52 = function () {
    return handleError(function (arg0, arg1) {
      arg0.postMessage(arg1);
    }, arguments);
  };
  imports.wbg.__wbg_prependListener_dc1e8b094d0f731e = function () {
    return logError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.prependListener(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_prependOnceListener_93873dc17dd2fcad = function () {
    return logError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.prependOnceListener(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_process_5c1d670bc53614b8 = function () {
    return logError(function (arg0) {
      const ret = arg0.process;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_protocol_faa0494a9b2554cb = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg1.protocol;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_publickey_new = function () {
    return logError(function (arg0) {
      const ret = PublicKey.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_push_737cfc8c1432c2c6 = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0.push(arg1);
      _assertNum(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_put_066faa31a6a88f5b = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.put(arg1, arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function () {
    return logError(function (arg0) {
      queueMicrotask(arg0);
    }, arguments);
  };
  imports.wbg.__wbg_queueMicrotask_d3219def82552485 = function () {
    return logError(function (arg0) {
      const ret = arg0.queueMicrotask;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740 = function () {
    return handleError(function (arg0, arg1) {
      arg0.randomFillSync(arg1);
    }, arguments);
  };
  imports.wbg.__wbg_readFileSync_42b340d959241f2b = function () {
    return handleError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.readFileSync(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_readdir_319d9b13a44c9af9 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.readdir(getStringFromWasm0(arg1, arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_readyState_4013cfdf4f22afb0 = function () {
    return logError(function (arg0) {
      const ret = arg0.readyState;
      return (__wbindgen_enum_IdbRequestReadyState.indexOf(ret) + 1 || 3) - 1;
    }, arguments);
  };
  imports.wbg.__wbg_readyState_6c28968f3e6c1e47 = function () {
    return logError(function (arg0) {
      const ret = arg0.readyState;
      _assertNum(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_removeAttribute_e419cd6726b4c62f = function () {
    return handleError(function (arg0, arg1, arg2) {
      arg0.removeAttribute(getStringFromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbg_removeItem_9d2669ee3bba6f7d = function () {
    return handleError(function (arg0, arg1, arg2) {
      arg0.removeItem(getStringFromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbg_remove_cb9af65ab98197c5 = function () {
    return handleError(function (arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        const ret = chrome.storage.local.remove(getStringFromWasm0(arg0, arg1));
        return ret;
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    }, arguments);
  };
  imports.wbg.__wbg_renameSync_86e78b84a05e4a0b = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
      arg0.renameSync(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments);
  };
  imports.wbg.__wbg_requestAnimationFrame_63a812187303a02c = function () {
    return logError(function (arg0) {
      const ret = requestAnimationFrame(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_require_05f2f70e92254dbb = function () {
    return logError(function (arg0, arg1) {
      const ret = require(getStringFromWasm0(arg0, arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_require_11fc9008c54f5b90 = function () {
    return logError(function (arg0, arg1) {
      const ret = require(getStringFromWasm0(arg0, arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_require_79b1e9274cde3c87 = function () {
    return handleError(function () {
      const ret = module.require;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_resolve_4851785c9c5f573d = function () {
    return logError(function (arg0) {
      const ret = Promise.resolve(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_result_f29afabdf2c05826 = function () {
    return handleError(function (arg0) {
      const ret = arg0.result;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_rpcclient_new = function () {
    return logError(function (arg0) {
      const ret = RpcClient.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_send_17f8c8c8e084cc5e = function () {
    return handleError(function (arg0, arg1, arg2) {
      arg0.send(getArrayU8FromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbg_send_9a57107cc0d7eafa = function () {
    return handleError(function (arg0, arg1, arg2) {
      arg0.send(getStringFromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbg_send_afb0c27f2d9698e3 = function () {
    return handleError(function (arg0, arg1) {
      arg0.send(arg1);
    }, arguments);
  };
  imports.wbg.__wbg_setAttribute_2704501201f15687 = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
      arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments);
  };
  imports.wbg.__wbg_setInterval_160c4baec24e25f6 = function () {
    return handleError(function (arg0, arg1) {
      const ret = setInterval(arg0, arg1 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_setItem_212ecc915942ab0a = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
      arg0.setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments);
  };
  imports.wbg.__wbg_setTime_8afa2faa26e7eb59 = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0.setTime(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_setTimeout_430dd4984e76f6c3 = function () {
    return handleError(function (arg0, arg1) {
      const ret = setTimeout(arg0, arg1 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_set_005c36bbcfafb768 = function () {
    return handleError(function (arg0) {
      const ret = chrome.storage.local.set(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_set_37837023f3d740e8 = function () {
    return logError(function (arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    }, arguments);
  };
  imports.wbg.__wbg_set_3f1d0b984ed272ed = function () {
    return logError(function (arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    }, arguments);
  };
  imports.wbg.__wbg_set_65595bdd868b3009 = function () {
    return logError(function (arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    }, arguments);
  };
  imports.wbg.__wbg_set_8fc6bf8a5b1071d1 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_set_bb8cecf6a62b9f46 = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = Reflect.set(arg0, arg1, arg2);
      _assertBoolean(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_setbinaryType_9981a6ba2bd58b94 = function () {
    return logError(function (arg0, arg1) {
      arg0.binaryType = __wbindgen_enum_BinaryType[arg1];
    }, arguments);
  };
  imports.wbg.__wbg_setbody_5923b78a95eedf29 = function () {
    return logError(function (arg0, arg1) {
      arg0.body = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setcredentials_c3a22f1cd105a2c6 = function () {
    return logError(function (arg0, arg1) {
      arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
    }, arguments);
  };
  imports.wbg.__wbg_setheaders_834c0bdb6a8949ad = function () {
    return logError(function (arg0, arg1) {
      arg0.headers = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setinnerHTML_31bde41f835786f7 = function () {
    return logError(function (arg0, arg1, arg2) {
      arg0.innerHTML = getStringFromWasm0(arg1, arg2);
    }, arguments);
  };
  imports.wbg.__wbg_setmethod_3c5280fe5d890842 = function () {
    return logError(function (arg0, arg1, arg2) {
      arg0.method = getStringFromWasm0(arg1, arg2);
    }, arguments);
  };
  imports.wbg.__wbg_setmode_5dc300b865044b65 = function () {
    return logError(function (arg0, arg1) {
      arg0.mode = __wbindgen_enum_RequestMode[arg1];
    }, arguments);
  };
  imports.wbg.__wbg_setonabort_3bf4db6614fa98e9 = function () {
    return logError(function (arg0, arg1) {
      arg0.onabort = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonblocked_aebf64bd39f1eca8 = function () {
    return logError(function (arg0, arg1) {
      arg0.onblocked = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonclose_b15bdabd419b6357 = function () {
    return logError(function (arg0, arg1) {
      arg0.onclose = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setoncomplete_4d19df0dadb7c4d4 = function () {
    return logError(function (arg0, arg1) {
      arg0.oncomplete = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonerror_b0d9d723b8fddbbb = function () {
    return logError(function (arg0, arg1) {
      arg0.onerror = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonerror_d7e3056cc6e56085 = function () {
    return logError(function (arg0, arg1) {
      arg0.onerror = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonerror_e2c5c0fa6fbf6d99 = function () {
    return logError(function (arg0, arg1) {
      arg0.onerror = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonmessage_007594843a0b97e8 = function () {
    return logError(function (arg0, arg1) {
      arg0.onmessage = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonmessage_5a885b16bdc6dca6 = function () {
    return logError(function (arg0, arg1) {
      arg0.onmessage = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonopen_c42cfdbb28b087c4 = function () {
    return logError(function (arg0, arg1) {
      arg0.onopen = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonsuccess_afa464ee777a396d = function () {
    return logError(function (arg0, arg1) {
      arg0.onsuccess = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonupgradeneeded_fcf7ce4f2eb0cb5f = function () {
    return logError(function (arg0, arg1) {
      arg0.onupgradeneeded = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setonversionchange_6ee07fa49ee1e3a5 = function () {
    return logError(function (arg0, arg1) {
      arg0.onversionchange = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_setsignal_75b21ef3a81de905 = function () {
    return logError(function (arg0, arg1) {
      arg0.signal = arg1;
    }, arguments);
  };
  imports.wbg.__wbg_settype_39ed370d3edd403c = function () {
    return logError(function (arg0, arg1, arg2) {
      arg0.type = getStringFromWasm0(arg1, arg2);
    }, arguments);
  };
  imports.wbg.__wbg_setunique_dd24c422aa05df89 = function () {
    return logError(function (arg0, arg1) {
      arg0.unique = arg1 !== 0;
    }, arguments);
  };
  imports.wbg.__wbg_signal_aaf9ad74119f20a4 = function () {
    return logError(function (arg0) {
      const ret = arg0.signal;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_stack_c99a96ed42647c4c = function () {
    return logError(function (arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_statSync_9a429acc496bafda = function () {
    return handleError(function (arg0, arg1, arg2) {
      const ret = arg0.statSync(getStringFromWasm0(arg1, arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function () {
    return logError(function () {
      const ret = typeof global === 'undefined' ? null : global;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function () {
    return logError(function () {
      const ret = typeof globalThis === 'undefined' ? null : globalThis;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function () {
    return logError(function () {
      const ret = typeof self === 'undefined' ? null : self;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function () {
    return logError(function () {
      const ret = typeof window === 'undefined' ? null : window;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_status_f6360336ca686bf0 = function () {
    return logError(function (arg0) {
      const ret = arg0.status;
      _assertNum(ret);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_stringify_f7ed6987935b4a24 = function () {
    return handleError(function (arg0) {
      const ret = JSON.stringify(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_subarray_aa9065fa9dc5df96 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_target_0a62d9d79a2a1ede = function () {
    return logError(function (arg0) {
      const ret = arg0.target;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments);
  };
  imports.wbg.__wbg_text_7805bea50de2af49 = function () {
    return handleError(function (arg0) {
      const ret = arg0.text();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_then_44b73946d2fb3e7d = function () {
    return logError(function (arg0, arg1) {
      const ret = arg0.then(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_then_48b406749878a531 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = arg0.then(arg1, arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_toString_2f76f493957b63da = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = arg1.toString(arg2);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_toString_b5d4438bc26b267c = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg0.toString(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_transaction_babc423936946a37 = function () {
    return handleError(function (arg0, arg1, arg2, arg3) {
      const ret = arg0.transaction(getStringFromWasm0(arg1, arg2), __wbindgen_enum_IdbTransactionMode[arg3]);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_transaction_new = function () {
    return logError(function (arg0) {
      const ret = Transaction.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_transactioninput_new = function () {
    return logError(function (arg0) {
      const ret = TransactionInput.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_transactionoutput_new = function () {
    return logError(function (arg0) {
      const ret = TransactionOutput.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_transactionrecordnotification_new = function () {
    return logError(function (arg0) {
      const ret = TransactionRecordNotification.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_unlinkSync_656392e8d747415f = function () {
    return handleError(function (arg0, arg1, arg2) {
      arg0.unlinkSync(getStringFromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbg_update_acd72607f506872a = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg0.update(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_url_ae10c34ca209681d = function () {
    return logError(function (arg0, arg1) {
      const ret = arg1.url;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_userAgent_12e9d8e62297563f = function () {
    return handleError(function (arg0, arg1) {
      const ret = arg1.userAgent;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments);
  };
  imports.wbg.__wbg_utxoentryreference_new = function () {
    return logError(function (arg0) {
      const ret = UtxoEntryReference.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_value_68c4e9a54bb7fd5e = function () {
    return handleError(function (arg0) {
      const ret = arg0.value;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_value_cd1ffa7b1ab794f1 = function () {
    return logError(function (arg0) {
      const ret = arg0.value;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_versions_c71aa1626a93e0a1 = function () {
    return logError(function (arg0) {
      const ret = arg0.versions;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_walletdescriptor_new = function () {
    return logError(function (arg0) {
      const ret = WalletDescriptor.__wrap(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_warn_28319e260c89a4f8 = function () {
    return logError(function (arg0, arg1) {
      console.warn(getStringFromWasm0(arg0, arg1));
    }, arguments);
  };
  imports.wbg.__wbg_writeFileSync_6325b339950ab342 = function () {
    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
      arg0.writeFileSync(getStringFromWasm0(arg1, arg2), arg3, arg4);
    }, arguments);
  };
  imports.wbg.__wbindgen_as_number = function (arg0) {
    const ret = +arg0;
    return ret;
  };
  imports.wbg.__wbindgen_bigint_from_i64 = function (arg0) {
    const ret = arg0;
    return ret;
  };
  imports.wbg.__wbindgen_bigint_from_u64 = function (arg0) {
    const ret = BigInt.asUintN(64, arg0);
    return ret;
  };
  imports.wbg.__wbindgen_bigint_get_as_i64 = function (arg0, arg1) {
    const v = arg1;
    const ret = typeof v === 'bigint' ? v : undefined;
    if (!isLikeNone(ret)) {
      _assertBigInt(ret);
    }
    getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
  };
  imports.wbg.__wbindgen_boolean_get = function (arg0) {
    const v = arg0;
    const ret = typeof v === 'boolean' ? v ? 1 : 0 : 2;
    _assertNum(ret);
    return ret;
  };
  imports.wbg.__wbindgen_cb_drop = function (arg0) {
    const obj = arg0.original;
    if (obj.cnt-- == 1) {
      obj.a = 0;
      return true;
    }
    const ret = false;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_closure_wrapper1101 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 61, __wbg_adapter_64);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper1103 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 57, __wbg_adapter_67);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper1105 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 59, __wbg_adapter_70);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper20974 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 634, __wbg_adapter_79);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper20976 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 632, __wbg_adapter_82);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper3275 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 151, __wbg_adapter_73);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper3684 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 178, __wbg_adapter_76);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper53060 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeClosure(arg0, arg1, 2644, __wbg_adapter_85);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper53062 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeClosure(arg0, arg1, 2640, __wbg_adapter_88);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper88560 = function () {
    return logError(function (arg0, arg1, arg2) {
      const ret = makeMutClosure(arg0, arg1, 7486, __wbg_adapter_91);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_debug_string = function (arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbindgen_error_new = function (arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return ret;
  };
  imports.wbg.__wbindgen_in = function (arg0, arg1) {
    const ret = (arg0 in arg1);
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_init_externref_table = function () {
    const table = wasm.__wbindgen_export_2;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
  };
  imports.wbg.__wbindgen_is_array = function (arg0) {
    const ret = Array.isArray(arg0);
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_bigint = function (arg0) {
    const ret = typeof arg0 === 'bigint';
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_falsy = function (arg0) {
    const ret = !arg0;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_function = function (arg0) {
    const ret = typeof arg0 === 'function';
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_null = function (arg0) {
    const ret = arg0 === null;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_object = function (arg0) {
    const val = arg0;
    const ret = typeof val === 'object' && val !== null;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_string = function (arg0) {
    const ret = typeof arg0 === 'string';
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_is_undefined = function (arg0) {
    const ret = arg0 === undefined;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_jsval_eq = function (arg0, arg1) {
    const ret = arg0 === arg1;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_jsval_loose_eq = function (arg0, arg1) {
    const ret = arg0 == arg1;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_lt = function (arg0, arg1) {
    const ret = arg0 < arg1;
    _assertBoolean(ret);
    return ret;
  };
  imports.wbg.__wbindgen_memory = function () {
    const ret = wasm.memory;
    return ret;
  };
  imports.wbg.__wbindgen_neg = function (arg0) {
    const ret = -arg0;
    return ret;
  };
  imports.wbg.__wbindgen_number_get = function (arg0, arg1) {
    const obj = arg1;
    const ret = typeof obj === 'number' ? obj : undefined;
    if (!isLikeNone(ret)) {
      _assertNum(ret);
    }
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
  };
  imports.wbg.__wbindgen_number_new = function (arg0) {
    const ret = arg0;
    return ret;
  };
  imports.wbg.__wbindgen_string_get = function (arg0, arg1) {
    const obj = arg1;
    const ret = typeof obj === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
  };
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_try_into_number = function (arg0) {
    let result;
    try {
      result = +arg0;
    } catch (e) {
      result = e;
    }
    const ret = result;
    return ret;
  };
  return imports;
}
function __wbg_init_memory(imports, memory) {}
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
function initSync(module) {
  if (wasm !== undefined) return wasm;
  if (typeof module !== 'undefined') {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({
        module
      } = module);
    } else {
      console.warn('using deprecated parameters for `initSync()`; pass a single object instead');
    }
  }
  const imports = __wbg_get_imports();
  __wbg_init_memory(imports);
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance, module);
}
function getFileXHR(path) {
  return new Promise((resolve, reject) => {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", path, true);
      xhr.responseType = "arraybuffer"; // 设置响应类型为 arraybuffer
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response); // 返回二进制数据
          } else {
            reject(new Error("Failed to load file: ".concat(path, " (status: ").concat(xhr.status, ")")));
          }
        }
      };
      xhr.send();
    } catch (e) {
      reject(e);
    }
  });
}
async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm;
  if (typeof module_or_path !== 'undefined') {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({
        module_or_path
      } = module_or_path);
    } else {
      console.warn('using deprecated parameters for the initialization function; pass a single object instead');
    }
  }
  if (typeof module_or_path === 'undefined') {
    module_or_path = new URL(/* asset import */ __webpack_require__(46724), __webpack_require__.b);
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === 'string' || typeof Request === 'function' && module_or_path instanceof Request || typeof URL === 'function' && module_or_path instanceof URL) {
    var _navigator;
    console.log("Loading WASM from URL", navigator, (_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.userAgent);
    if (navigator.userAgent.includes('Android')) {
      module_or_path = getFileXHR(module_or_path);
    } else {
      module_or_path = fetch(module_or_path);
    }
  }
  __wbg_init_memory(imports);
  const {
    instance,
    module
  } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance, module);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);

/***/ }),

/***/ 32536:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Inscription":{"message":"Inscription"},"NFT__list__is__empty":{"message":"NFT list is empty"},"This__account__has__no__transactions":{"message":"This account has no transactions"},"Very__Long__Account__Name":{"message":"Very Long Account Name"},"Login__Success":{"message":"Login Success"},"at__least__five__characters":{"message":"at least five characters"},"Error":{"message":"Error"},"Confirm":{"message":"Confirm"},"Cancel":{"message":"Cancel"},"YesRemove":{"message":"Yes, Remove"},"Are__you__Sure":{"message":"Are you Sure"},"New__Password":{"message":"New Password"},"Entered__passwords__differ":{"message":"Entered passwords differ"},"Receive":{"message":"Receive"},"Remove__Account":{"message":"Remove Account"},"Swiss__Franc":{"message":"Swiss Franc"},"Currency":{"message":"Currency"},"PASSWORD__ERROR":{"message":"PASSWORD ERROR"},"Continue":{"message":"Continue"},"This__phrase__is__the__ONLY__way__to":{"message":"This phrase is the ONLY way to"},"click__to__copy":{"message":"click to copy"},"You__will__not__be__able__to__recover__this__account__with__your__Secret__Recovery__Phrase":{"message":"You will not be able to recover this account with your Seed Phrase"},"Fee":{"message":"Fee"},"Your__transaction__has__been__successfully__sent":{"message":"Your transaction has been successfully sent"},"Invalid__address":{"message":"Invalid address"},"Clear__the__inputted":{"message":"Clear the inputted"},"Available":{"message":"Available"},"Save__it__somewhere__safe__and__secret":{"message":"Save it somewhere safe and secret"},"Generate__a__new__address":{"message":"Generate a new address"},"I__already__have__a__wallet":{"message":"I already have a wallet"},"Create__a__password":{"message":"Create a password"},"Type__your__Kasware__password":{"message":"Type your KasKeeper password"},"Invalid__amount":{"message":"Invalid amount"},"Payment__Sent":{"message":"Payment Sent"},"Sending":{"message":"Sending"},"Euro":{"message":"Euro"},"Export__Private__Key":{"message":"Export Private Key"},"appName":{"message":"KasKeeper"},"shortName":{"message":"KasWare"},"Payment__Faild":{"message":"Payment Faild"},"Change__Password":{"message":"Change Password"},"Private__Key":{"message":"Private Key"},"Recipients__BTC__address":{"message":"Recipient’s BTC address"},"Secret__Recovery__Phrase":{"message":"Seed Phrase"},"Confirm__Password":{"message":"Confirm Password"},"Successfully__created":{"message":"Successfully created"},"mnemonic__phrase__is__invalid":{"message":"mnemonic phrase is invalid"},"Unlock":{"message":"Unlock"},"Enter__your__password":{"message":"Enter your password"},"Japanese":{"message":"日本"},"Add__a__new__account":{"message":"Add a new account"},"you__will__need__this__Private__Key__to__access__this__account":{"message":"you will need this Private Key to access this account"},"recover__your__wallet":{"message":"recover your wallet"},"Import__an__existing__wallet__with__your__12__word__secret__recovery__phrase":{"message":"Import an existing wallet with your 12-word seed phrase"},"US__Dollar":{"message":"US Dollar"},"Change__your__lockscreen__password":{"message":"Change your lockscreen password"},"copied":{"message":"copied"},"Create__Account":{"message":"Create Account"},"View__on__Block__Explorer":{"message":"View on Block Explorer"},"Do__NOT__share__it__with__anyone":{"message":"Do NOT share it with anyone"},"Deposit":{"message":"Deposit"},"Show__Secret__Recovery__Phrase":{"message":"Show Seed Phrase"},"Language":{"message":"Language"},"Import__Private__Key":{"message":"Import Private Key"},"Password":{"message":"Password"},"Get__Started":{"message":"Get Started"},"Import__wallet":{"message":"Import wallet"},"Amount":{"message":"Amount"},"Next":{"message":"Next"},"Your__transaction__had__not__successfully__sent":{"message":"Your transaction had not successfully sent"},"Current__Password":{"message":"Current Password"},"Create__a__new__account":{"message":"Create a new account"},"Create__new__wallet":{"message":"Create new wallet"},"Chinese":{"message":"中文"},"Add__New__Account":{"message":"Add New Account"},"Back":{"message":"Back"},"Send":{"message":"Send"},"Canadian__Dollar":{"message":"Canadian Dollar"},"Successfully__imported":{"message":"Successfully imported"},"This__address__can__only__receive__Btc":{"message":"This address can only receive Btc"},"This__is__an__imported__account":{"message":"This is an imported account"},"Password_must_contain_at_least_5_characters":{"message":"Password must contain at least 5 characters"},"appDescription":{"message":"Brand new Kaspa wallet supported by the KEF, maintained by Tech Trends."},"If__you__ever__change__browsers__or__move__computers":{"message":"If you ever change browsers or move computers"},"I__saved__My__Secret__Recovery__Phrase":{"message":"I saved My Seed Phrase"},"Confirm__payment":{"message":"Confirm payment"},"Recipient":{"message":"Recipient"},"Spanish":{"message":"Español"},"Show__Private__Key":{"message":"Show Private Key"},"You__will__use__this__to__unlock__your__wallet":{"message":"You will use this to unlock your wallet"},"Imported__accounts__will__not__be__associated__with__your__originally__created__Kasware__account__Secret__Recovery__Phrase":{"message":"Imported accounts will not be associated with your originally created KasKeeper account Seed Phrase"},"Login":{"message":"Login"},"English":{"message":"English"},"Import__an__existing__account":{"message":"Import an existing account"},"British__Pound":{"message":"British Pound"},"Japanese__Yen":{"message":"Japanese Yen"},"Switch__Account":{"message":"Switch Account"},"Success":{"message":"Success"},"Latest__Transactions":{"message":"Latest Transactions"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7555], () => (__webpack_exec__(77388)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);