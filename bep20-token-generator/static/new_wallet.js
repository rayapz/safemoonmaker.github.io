'use strict';const a5_0x428d2a=a5_0x66ba;function a5_0x3fca(){const _0x37a3fb=['web3','0x38','getChainId','load','3609360lpWlhh','Fortmatic','click','cachedProvider','accountsChanged','default','request','Got\x20accounts','window.web3\x20is','Opening\x20a\x20dialog','https://bsc-dataseed.binance.org/','eth','log','Web3Modal','setAttribute','1373512MRDeDr','780440dyfavj','.btn-connect','pk_test_391E26A3B43A3350','window.ethereum\x20is','989105YSweeN','.network\x20option:selected','connect','ethereum','innerHTML','21831CDObxx','#btn-disconnect','#selected-account','.testnetAlert','value','10SCykRX','bnb','disabled','#connected','Could\x20not\x20get\x20a\x20wallet\x20connection','.account_address','css','99KjeFPP','Smart\x20Chain\x20-\x20Testnet','clearCachedProvider','chainChanged','2028855lqmzns','textContent','getAccounts','addEventListener','wallet_addEthereumChain','name','https://data-seed-prebsc-1-s1.binance.org:8545/','block','WalletConnectProvider','networkChanged','Binance\x20Smart\x20Chain\x20Mainnet','6157426BIUKkU','8JkhKVM','#network-name','16PYAqxx','BNB','querySelector','none','https://testnet.bscscan.com','Initializing\x20example','evmChains','binance','style','close','substring','#btn-connect','0x61','Web3\x20instance\x20is','display'];a5_0x3fca=function(){return _0x37a3fb;};return a5_0x3fca();}function a5_0x66ba(_0x493b8e,_0x2a8457){const _0x3fca2d=a5_0x3fca();return a5_0x66ba=function(_0x66baef,_0x1ce71c){_0x66baef=_0x66baef-0x179;let _0x2ca6bb=_0x3fca2d[_0x66baef];return _0x2ca6bb;},a5_0x66ba(_0x493b8e,_0x2a8457);}(function(_0x24b872,_0x366a74){const _0x3dd9b4=a5_0x66ba,_0x3bced1=_0x24b872();while(!![]){try{const _0x3943d4=-parseInt(_0x3dd9b4(0x1b3))/0x1*(-parseInt(_0x3dd9b4(0x185))/0x2)+parseInt(_0x3dd9b4(0x179))/0x3+-parseInt(_0x3dd9b4(0x187))/0x4*(-parseInt(_0x3dd9b4(0x1ae))/0x5)+parseInt(_0x3dd9b4(0x19a))/0x6+parseInt(_0x3dd9b4(0x1a9))/0x7+parseInt(_0x3dd9b4(0x1aa))/0x8*(-parseInt(_0x3dd9b4(0x1bf))/0x9)+-parseInt(_0x3dd9b4(0x1b8))/0xa*(parseInt(_0x3dd9b4(0x184))/0xb);if(_0x3943d4===_0x366a74)break;else _0x3bced1['push'](_0x3bced1['shift']());}catch(_0x3cc2aa){_0x3bced1['push'](_0x3bced1['shift']());}}}(a5_0x3fca,0xafbb6));const Web3Modal=window[a5_0x428d2a(0x1a7)][a5_0x428d2a(0x19f)],WalletConnectProvider=window[a5_0x428d2a(0x181)][a5_0x428d2a(0x19f)],Fortmatic=window[a5_0x428d2a(0x19b)],evmChains=window[a5_0x428d2a(0x18d)];let web3Modal;var provider,web3;let selectedAccount;var btnConnectWallet=document[a5_0x428d2a(0x189)](a5_0x428d2a(0x1ab)),btnDisconnectWallet=document['querySelector']('#btn-disconnect'),account_address=document[a5_0x428d2a(0x189)](a5_0x428d2a(0x1bd));function init(){const _0x5ed625=a5_0x428d2a;console['log'](_0x5ed625(0x18c)),console['log']('WalletConnectProvider\x20is',WalletConnectProvider),console['log']('Fortmatic\x20is',Fortmatic),console[_0x5ed625(0x1a6)](_0x5ed625(0x1a2),window[_0x5ed625(0x196)],_0x5ed625(0x1ad),window[_0x5ed625(0x1b1)]);const _0x36f47f={'walletconnect':{'package':WalletConnectProvider,'options':{'bridge':'https://bridge.walletconnect.org','rpc':{0x38:'https://bsc-dataseed.binance.org/'},'network':_0x5ed625(0x18e)}},'fortmatic':{'package':Fortmatic,'options':{'key':_0x5ed625(0x1ac)}}};web3Modal=new Web3Modal({'cacheProvider':!![],'providerOptions':_0x36f47f,'disableInjectedProvider':![]}),console[_0x5ed625(0x1a6)]('Web3Modal\x20instance\x20is',web3Modal);}async function fetchAccountData(){const _0xcae46b=a5_0x428d2a,_0x39c714=new Web3(provider);console[_0xcae46b(0x1a6)]('provider',provider),console['log'](_0xcae46b(0x194),_0x39c714);const _0x5d9011=await _0x39c714[_0xcae46b(0x1a5)][_0xcae46b(0x198)](),_0xfbd2a9=evmChains['getChain'](_0x5d9011);document['querySelector'](_0xcae46b(0x186))[_0xcae46b(0x17a)]=_0xfbd2a9[_0xcae46b(0x17e)];const _0x52ab95=await _0x39c714[_0xcae46b(0x1a5)][_0xcae46b(0x17b)]();console['log'](_0xcae46b(0x1a1),_0x52ab95),selectedAccount=_0x52ab95[0x0],account_address[_0xcae46b(0x1b2)]=selectedAccount[_0xcae46b(0x191)](0x0,0x5)+'...'+selectedAccount[_0xcae46b(0x191)](0x26,0x2b),account_address['style'][_0xcae46b(0x195)]='block',btnConnectWallet[_0xcae46b(0x18f)][_0xcae46b(0x195)]=_0xcae46b(0x18a),btnDisconnectWallet['style'][_0xcae46b(0x195)]=_0xcae46b(0x180),document[_0xcae46b(0x189)](_0xcae46b(0x1b5))['textContent']=selectedAccount;}async function refreshAccountData(){const _0x1006e8=a5_0x428d2a;document['querySelector'](_0x1006e8(0x1bb))[_0x1006e8(0x18f)][_0x1006e8(0x195)]='none',document[_0x1006e8(0x189)]('#btn-connect')[_0x1006e8(0x1a8)](_0x1006e8(0x1ba),'disabled'),await fetchAccountData(provider),document[_0x1006e8(0x189)](_0x1006e8(0x192))['removeAttribute'](_0x1006e8(0x1ba));}async function onConnect(){const _0x2c9f6b=a5_0x428d2a;console['log'](_0x2c9f6b(0x1a3),web3Modal);try{provider=await web3Modal[_0x2c9f6b(0x1b0)](),web3=new Web3(provider);}catch(_0x267b4c){console['log'](_0x2c9f6b(0x1bc),_0x267b4c),btnConnectWallet[_0x2c9f6b(0x18f)][_0x2c9f6b(0x195)]=_0x2c9f6b(0x180);return;}provider['on'](_0x2c9f6b(0x19e),_0x10794e=>{fetchAccountData();}),provider['on'](_0x2c9f6b(0x1c2),_0x7edb2f=>{fetchAccountData();}),provider['on'](_0x2c9f6b(0x182),_0x4fe231=>{fetchAccountData();});var _0x305a92=await web3[_0x2c9f6b(0x1a5)][_0x2c9f6b(0x198)]();getNetwork()==0x0&&switchNetwork(),getNetwork()==0x1&&switchNetworkTestnet(),await refreshAccountData();}async function onDisconnect(){const _0x5ca8eb=a5_0x428d2a;console['log']('Killing\x20the\x20wallet\x20connection',provider),typeof provider!==undefined&&(provider[_0x5ca8eb(0x190)]&&(await provider['close'](),provider=null)),await web3Modal[_0x5ca8eb(0x1c1)](),selectedAccount=null,account_address[_0x5ca8eb(0x1b2)]='',account_address[_0x5ca8eb(0x18f)]['display']=_0x5ca8eb(0x18a),btnConnectWallet[_0x5ca8eb(0x18f)][_0x5ca8eb(0x195)]=_0x5ca8eb(0x180),btnDisconnectWallet[_0x5ca8eb(0x18f)][_0x5ca8eb(0x195)]=_0x5ca8eb(0x18a);}async function switchNetwork(){const _0x540d0f=a5_0x428d2a;await web3['currentProvider'][_0x540d0f(0x1a0)]({'method':_0x540d0f(0x17d),'params':[{'chainId':_0x540d0f(0x197),'chainName':_0x540d0f(0x183),'nativeCurrency':{'name':_0x540d0f(0x188),'symbol':'bnb','decimals':0x12},'rpcUrls':[_0x540d0f(0x1a4)],'blockExplorerUrls':['https://bscscan.com']}]}),$(_0x540d0f(0x1b6))[_0x540d0f(0x1be)](_0x540d0f(0x195),_0x540d0f(0x18a));}async function switchNetworkTestnet(){const _0x5cd4dc=a5_0x428d2a;await web3['currentProvider'][_0x5cd4dc(0x1a0)]({'method':'wallet_addEthereumChain','params':[{'chainId':_0x5cd4dc(0x193),'chainName':_0x5cd4dc(0x1c0),'nativeCurrency':{'name':_0x5cd4dc(0x188),'symbol':_0x5cd4dc(0x1b9),'decimals':0x12},'rpcUrls':[_0x5cd4dc(0x17f)],'blockExplorerUrls':[_0x5cd4dc(0x18b)]}]}),$(_0x5cd4dc(0x1b6))['css'](_0x5cd4dc(0x195),_0x5cd4dc(0x180));}function getNetwork(){const _0x2cc7fa=a5_0x428d2a;return $(_0x2cc7fa(0x1af))[0x0][_0x2cc7fa(0x1b7)];}window['addEventListener'](a5_0x428d2a(0x199),async()=>{const _0x133f92=a5_0x428d2a;init(),document[_0x133f92(0x189)](_0x133f92(0x192))[_0x133f92(0x17c)](_0x133f92(0x19c),function(){onConnect();}),document[_0x133f92(0x189)](_0x133f92(0x1b4))[_0x133f92(0x17c)](_0x133f92(0x19c),function(){onDisconnect();}),web3Modal[_0x133f92(0x19d)]!=''&&typeof web3Modal[_0x133f92(0x19d)]!==undefined&&onConnect();});