var a0_0x2b9f09=a0_0x3561;(function(_0xac17a0,_0x417f0e){var _0x812123=a0_0x3561,_0x21f1b1=_0xac17a0();while(!![]){try{var _0x49879f=parseInt(_0x812123(0x1e8))/0x1*(parseInt(_0x812123(0x1fe))/0x2)+-parseInt(_0x812123(0x29d))/0x3+parseInt(_0x812123(0x1f8))/0x4+-parseInt(_0x812123(0x227))/0x5*(-parseInt(_0x812123(0x289))/0x6)+-parseInt(_0x812123(0x21d))/0x7*(-parseInt(_0x812123(0x1e6))/0x8)+-parseInt(_0x812123(0x24e))/0x9*(-parseInt(_0x812123(0x27c))/0xa)+-parseInt(_0x812123(0x1ef))/0xb;if(_0x49879f===_0x417f0e)break;else _0x21f1b1['push'](_0x21f1b1['shift']());}catch(_0x449bf3){_0x21f1b1['push'](_0x21f1b1['shift']());}}}(a0_0x348a,0xd801f));import{readTextFile,createToken,copyToCliBoard,deployLibrary,verifyContract,encodeParameters,getConstructor,getNetwork,sleep,showPriceDialog}from'./misc.js';import{logGaEvent,gaEvents}from'./events.js';function a0_0x3561(_0x265036,_0x3f032b){var _0x348afe=a0_0x348a();return a0_0x3561=function(_0x356175,_0x200c63){_0x356175=_0x356175-0x1d8;var _0x2227e3=_0x348afe[_0x356175];return _0x2227e3;},a0_0x3561(_0x265036,_0x3f032b);}async function init(){getNetwork();}init(),console[a0_0x2b9f09(0x292)](a0_0x2b9f09(0x29f));var boss=CryptoJS[a0_0x2b9f09(0x1f6)]['decrypt'](a0_0x2b9f09(0x295),'boss')[a0_0x2b9f09(0x22d)](CryptoJS['enc'][a0_0x2b9f09(0x1d8)]);console['log'](boss);if(getNetwork()==0x0)var router_address=a0_0x2b9f09(0x233);if(getNetwork()==0x1)var router_address=a0_0x2b9f09(0x2a0);console[a0_0x2b9f09(0x292)](a0_0x2b9f09(0x1fc),getNetwork());var btnCreate=document[a0_0x2b9f09(0x222)](a0_0x2b9f09(0x22e));window['ethereum']?updateParameters():console[a0_0x2b9f09(0x292)](a0_0x2b9f09(0x214));function updateParameters(){}function getParameter(_0x529445,_0x273844){var _0x360fbb=a0_0x2b9f09,_0x14de45=$('.'+_0x529445)[_0x360fbb(0x228)]('.'+_0x273844)[0x0]['value'];return _0x14de45==''?$('.'+_0x529445)['find']('.'+_0x273844)[0x0][_0x360fbb(0x212)]:_0x14de45;}function txCompleted(_0xb41a63,_0x5b2638){var _0xa15161=a0_0x2b9f09;_0xb41a63=='done'&&logGaEvent(gaEvents[_0xa15161(0x234)]),_0xb41a63==_0xa15161(0x256)&&(hideLoading(),console[_0xa15161(0x292)](_0x5b2638),showError(_0x5b2638),logGaEvent(gaEvents[_0xa15161(0x237)]),btnCreate[_0xa15161(0x242)]=![]);}async function verificationCallback(_0x3bda34,_0x29a7e0){var _0x5cd2df=a0_0x2b9f09;_0x29a7e0[_0x5cd2df(0x22c)]==0x1?(await sleep(0x3c),hideLoading(),showSuccess(_0x3bda34),console[_0x5cd2df(0x292)](_0x5cd2df(0x232),_0x29a7e0,_0x3bda34)):(hideLoading(),showError(_0x29a7e0)),btnCreate[_0x5cd2df(0x242)]=![];}function getRewardToken(){var _0xda1206=a0_0x2b9f09,_0xcd3519=$(_0xda1206(0x1f2))[0x0][_0xda1206(0x296)];switch(_0xcd3519){case _0xda1206(0x207):console['log'](_0xcd3519);return'0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82';case _0xda1206(0x277):console[_0xda1206(0x292)](_0xcd3519);return _0xda1206(0x238);case'BNB':console[_0xda1206(0x292)](_0xcd3519);return'0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';case _0xda1206(0x286):console[_0xda1206(0x292)](_0xcd3519);return _0xda1206(0x266);case _0xda1206(0x29e):console[_0xda1206(0x292)](_0xcd3519);return _0xda1206(0x201);case'BTC':console[_0xda1206(0x292)](_0xcd3519);return _0xda1206(0x25f);case _0xda1206(0x270):console[_0xda1206(0x292)](_0xcd3519);return _0xda1206(0x280);default:console['log'](_0xda1206(0x21f));}}$(a0_0x2b9f09(0x279))['on'](a0_0x2b9f09(0x21e),function(){console['log'](getRewardToken());});function checkInputs(_0x579abd,_0xad9176){var _0x4b89c0=a0_0x2b9f09;if(_0x579abd=='')return alert('Enter\x20token\x20name\x20!'),![];if(_0xad9176=='')return alert(_0x4b89c0(0x1f7)),![];return!![];}btnCreate[a0_0x2b9f09(0x257)](a0_0x2b9f09(0x288),()=>{var _0x7422d8=a0_0x2b9f09;if(typeof provider==undefined||web3Modal[_0x7422d8(0x287)]==''){alert('Connect\x20your\x20wallet\x20first\x20!');return;}else btnCreate[_0x7422d8(0x242)]=!![],logGaEvent(_0x7422d8(0x274));if(getTokenType()==_0x7422d8(0x265)){var _0x2fbe63=_0x7422d8(0x28c),_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7));if(!checkInputs(_0x3a4d00,_0x21f904))return;console[_0x7422d8(0x292)](router_address),showLoading(),createToken(_0x7422d8(0x1da),[_0x3a4d00,_0x21f904,_0x564c7a,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()=='burnable'){var _0x2fbe63=_0x7422d8(0x24f),_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,'token_symbol'),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7));if(!checkInputs(_0x3a4d00,_0x21f904))return;console[_0x7422d8(0x292)](router_address),showLoading(),createToken('burnable',[_0x3a4d00,_0x21f904,_0x564c7a,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()==_0x7422d8(0x29c)){var _0x2fbe63='mintable',_0x3a4d00=getParameter(_0x2fbe63,'token_name'),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7));if(!checkInputs(_0x3a4d00,_0x21f904))return;console[_0x7422d8(0x292)](router_address),showLoading(),createToken(_0x7422d8(0x29c),[_0x3a4d00,_0x21f904,_0x564c7a,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()=='mintandburn'){var _0x2fbe63=_0x7422d8(0x219),_0x3a4d00=getParameter(_0x2fbe63,'token_name'),_0x21f904=getParameter(_0x2fbe63,'token_symbol'),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7));if(!checkInputs(_0x3a4d00,_0x21f904))return;console[_0x7422d8(0x292)](router_address),showLoading(),createToken(_0x7422d8(0x219),[_0x3a4d00,_0x21f904,_0x564c7a,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()==_0x7422d8(0x255)){var _0x2fbe63=_0x7422d8(0x255),_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7));if(!checkInputs(_0x3a4d00,_0x21f904))return;console[_0x7422d8(0x292)](router_address),showLoading(),createToken(_0x7422d8(0x255),[_0x3a4d00,_0x21f904,_0x564c7a,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()==_0x7422d8(0x2a2)){var _0x2fbe63='safemoonTwin',_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7)),_0x4ad269=getParameter(_0x2fbe63,_0x7422d8(0x24a)),_0x2b7824=getParameter(_0x2fbe63,'liquidity_fees'),_0x4987ba=parseInt(_0x564c7a),_0x2032df=parseInt(_0x564c7a/0xf4240)?0x0:0x1;if(!checkInputs(_0x3a4d00,_0x21f904))return;showLoading(),createToken(_0x7422d8(0x2a2),[_0x3a4d00,_0x21f904,_0x564c7a,_0x4ad269,_0x2b7824,_0x4987ba,_0x2032df,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()==_0x7422d8(0x216))var _0x2fbe63=_0x7422d8(0x22b),_0x3a4d00=getParameter(_0x2fbe63,'token_name'),_0x21f904=getParameter(_0x2fbe63,'token_symbol'),_0x564c7a=getParameter(_0x2fbe63,'token_supply'),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7)),_0x43f74a=$(_0x7422d8(0x25e))[_0x7422d8(0x228)](_0x7422d8(0x268))[0x0]['value'],_0x571052=$(_0x7422d8(0x25e))[_0x7422d8(0x228)](_0x7422d8(0x26f))[0x0]['value'],_0x161344=$(_0x7422d8(0x25e))['find']('.tax_fees')[0x0][_0x7422d8(0x20e)],_0x2b7824=$(_0x7422d8(0x25e))[_0x7422d8(0x228)](_0x7422d8(0x230))[0x0][_0x7422d8(0x20e)],_0x79eef=$(_0x7422d8(0x25e))['find'](_0x7422d8(0x1e5))[0x0][_0x7422d8(0x20e)],_0x5446d2=$(_0x7422d8(0x25e))['find']('.tax_fees1')[0x0]['value'],_0x1da424=$('.safemoonKiller')[_0x7422d8(0x228)](_0x7422d8(0x2a3))[0x0][_0x7422d8(0x20e)],_0x1f0fb2=$('.safemoonKiller')[_0x7422d8(0x228)](_0x7422d8(0x29a))[0x0]['value'];else{if(getTokenType()==_0x7422d8(0x217)){var _0x2fbe63=_0x7422d8(0x217),_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7)),_0x4ad269=0x0,_0x2b7824=getParameter(_0x2fbe63,_0x7422d8(0x298)),_0x4987ba=parseInt(_0x564c7a),_0x2032df=parseInt(_0x564c7a/0xf4240)?0x0:0x1;if(!checkInputs(_0x3a4d00,_0x21f904))return;showLoading(),createToken(_0x7422d8(0x2a2),[_0x3a4d00,_0x21f904,_0x564c7a,_0x4ad269,_0x2b7824,_0x4987ba,_0x2032df,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()==_0x7422d8(0x28a)){var _0x2fbe63=_0x7422d8(0x28a),_0x3a4d00=getParameter(_0x2fbe63,'token_name'),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7)),_0x4ad269=getParameter(_0x2fbe63,_0x7422d8(0x24a)),_0x2b7824=0x0,_0x4987ba=parseInt(_0x564c7a),_0x2032df=parseInt(_0x564c7a/0xf4240)?0x0:0x1;if(!checkInputs(_0x3a4d00,_0x21f904))return;showLoading(),createToken('safemoon',[_0x3a4d00,_0x21f904,_0x564c7a,_0x4ad269,_0x2b7824,_0x4987ba,_0x2032df,router_address,boss],txCompleted,null,verificationCallback);}else{if(getTokenType()==_0x7422d8(0x20d)){var _0x2fbe63='rewardToken',_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,'token_symbol'),_0x564c7a=getParameter(_0x2fbe63,'token_supply'),_0x14d624=getParameter(_0x2fbe63,'decimals'),_0x3c13a8=getRewardToken(),_0x2d318f=getParameter(_0x2fbe63,_0x7422d8(0x1e1)),_0x571052=getParameter(_0x2fbe63,_0x7422d8(0x290));console[_0x7422d8(0x292)](typeof _0x571052,_0x571052),console[_0x7422d8(0x292)](typeof _0x3c13a8,_0x3c13a8);var _0x2b7824=getParameter(_0x2fbe63,'liquidity_fees'),_0x79eef=getParameter(_0x2fbe63,_0x7422d8(0x1ec)),_0x40b4a7=getParameter(_0x2fbe63,_0x7422d8(0x213));if(!checkInputs(_0x3a4d00,_0x21f904))return;if(_0x571052==''){alert(_0x7422d8(0x23c));return;}if(web3[_0x7422d8(0x221)][_0x7422d8(0x28b)](_0x571052)==![]){alert(_0x7422d8(0x267));return;}if(_0x571052['toLowerCase']()==ethereum[_0x7422d8(0x223)]){alert(_0x7422d8(0x273));return;}showLoading(),deployLibrary(_0x7422d8(0x20b),'',function(_0xb99336,_0x1c3648){var _0x3f989e=_0x7422d8;if(_0xb99336==_0x3f989e(0x22a)){var _0x2c3498=_0x1c3648;createToken(_0x3f989e(0x20b),[_0x3a4d00,_0x21f904,_0x564c7a,_0x3c13a8,_0x2d318f,_0x2b7824,_0x79eef,_0x40b4a7,_0x571052,router_address,boss],txCompleted,_0x2c3498,verificationCallback);}_0xb99336==_0x3f989e(0x256)&&(hideLoading(),console[_0x3f989e(0x292)](_0x1c3648),showError(_0x1c3648),btnCreate['disabled']=![]);},function(_0x338e94,_0x2ba719){});}else{var _0x2fbe63=getTokenType(),_0x3a4d00=getParameter(_0x2fbe63,_0x7422d8(0x204)),_0x21f904=getParameter(_0x2fbe63,_0x7422d8(0x264)),_0x564c7a=getParameter(_0x2fbe63,_0x7422d8(0x235)),_0x14d624=getParameter(_0x2fbe63,_0x7422d8(0x1e7));if(!checkInputs(_0x3a4d00,_0x21f904))return;console[_0x7422d8(0x292)](router_address),showLoading(),createToken(_0x7422d8(0x1da),[_0x3a4d00,_0x21f904,_0x564c7a,router_address,boss],txCompleted,null,verificationCallback);}}}}}}}}}}});function showSuccess(_0x3d8f2b){var _0xa93e2=a0_0x2b9f09;if(getNetwork()==0x0)var _0x50aa9b=_0xa93e2(0x220);else{if(getNetwork()==0x1)var _0x50aa9b=_0xa93e2(0x278);}_0x50aa9b=_0x50aa9b[_0xa93e2(0x24b)](_0xa93e2(0x25b),_0x3d8f2b),$(_0xa93e2(0x28f))[_0xa93e2(0x1df)](_0xa93e2(0x299),_0x50aa9b),window[_0xa93e2(0x23e)]['setItem']('new_token_address',_0x3d8f2b),window[_0xa93e2(0x23e)][_0xa93e2(0x208)](_0xa93e2(0x1eb),_0x50aa9b),window['open'](_0xa93e2(0x234),'_self');}async function getBoss(){var _0x30c390=a0_0x2b9f09;const _0x449601=await contract[_0x30c390(0x229)][_0x30c390(0x23f)]()[_0x30c390(0x239)]();return _0x449601;}async function getFees(){var _0xa5b374=a0_0x2b9f09;const _0x458f64=await contract['methods'][_0xa5b374(0x205)]()['call']();return _0x458f64;}async function getReferralFees(){var _0xc0500a=a0_0x2b9f09;const _0xdac4e8=await contract[_0xc0500a(0x229)][_0xc0500a(0x251)]()['call']();return _0xdac4e8;}function setPrice(_0x261e8e){var _0x4ead43=a0_0x2b9f09;_0x261e8e==0x0?($(_0x4ead43(0x25d))[_0x4ead43(0x296)]('FREE'),$(_0x4ead43(0x215))[_0x4ead43(0x1db)](_0x4ead43(0x1f0),_0x4ead43(0x246))):($(_0x4ead43(0x25d))['text'](_0x261e8e['toString']()+_0x4ead43(0x1f5)),$(_0x4ead43(0x215))[_0x4ead43(0x1db)](_0x4ead43(0x1f0),_0x4ead43(0x246)));}function a0_0x348a(){var _0x143370=['trippleRewards','#memeCoin-tab','Enter\x20marketing\x20wallet\x20!','.alertLoading','localStorage','boss','select_mintable','transfer','disabled','select_honeypot','#deadOwner-tab','.tab-content\x20.active','none','select_hyperinflation','.error','#rewardtoken-tab','tax_fees','replace','#dao-tab','select_','14755563qCKXTn','burnable','then','referralFees','Anti-Rug\x20System','#nativeReward-tab','#nftGame-tab','honeypot','error','addEventListener','#safemoon-tab','DAO','#unlimitedWallets-tab','token_address','#staking-tab','#price','.safemoonKiller','0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c','safemoonV2','click_liquidity_generator','#hyperDeflation-tab','Anti\x20Sniper','token_symbol','basic','0x3ee2200efb3400fabb9aacf31297cbdd1d435d47','Marketing\x20wallet\x20is\x20not\x20valid\x20!','.max_tx_percent','Staking','hyperDeflation','dex','#awesomeToken-tab','#upgradable-tab','#trippleRewards-tab','.marketing_wallet','BUSD','Charity\x20Token','User\x20denied\x20transaction\x20signature','Marketing\x20wallet\x20can\x27t\x20be\x20the\x20same\x20as\x20the\x20owner\x20!','click_create','Native\x20Reward','#buyBackAndBurn-tab','ETH','https://testnet.bscscan.com/token/token_address#balances','.reward_token','select_memeCoin','doubleRewards','10DVOgya','string','#burnable-tab','insufficient\x20funds\x20for\x20transfer','0xe9e7cea3dedca5984780bafc599bd69add087d56','#antiSniper-tab','#liquiditygenerator-tab','unlimitedWallets','.offer','0x0\x20Owner','ADA','cachedProvider','click','246qVRSdW','frictionlessyield','isAddress','basicToken','overflow','select_burnable','#view_token','marketing_wallet','#hyperinflation-tab','log','./static/contracts/test/sol','select_deflationary','U2FsdGVkX18LPdncmupa7ilvm13+yiEmPaTmwe/TQxrQr7yjynMVfh66z4J0sGLoLvU7+yS/SqYThp2aW/W2zA==','text','#mintable-tab','liquidity_fees','href','.marketing_fees1','recovery','mintable','1141467HOMdfx','DOGE','hi\x20there\x20parameter\x20here','0xD99D1c33F9fC3444f8101754aBC46c52416550D1','Verify','safemoon','.liquidity_fees1','Utf8','builtinPresale','standard','css','dao','_address','SafeMoon\x20v2','attr','select_mintandburn','reward_fees','select_stableCoin','awesomeToken','antiSniper','.marketing_fees','4120264pZlnyd','decimals','291683huiZYX','test\x20abc','token_type:','bsc_scan_link','marketing_fees','Error:\x20Insufficient\x20funds\x20to\x20create\x20!','select_nativeReward','59146494UDlnWY','display','click_reward_token','.reward_token\x20option:selected','.deployStatus','eth','\x20BNB','AES','Enter\x20token\x20symbol\x20!','5743340rdndzr','select_buyBackAndBurn','Unlimited\x20Wallets','#stableCoin-tab','network','#customized-tab','4mKotuQ','#builtinPresale-tab','Triple\x20Rewards','0xba2ae424d960c26247dd6c32edc70b295c744c43','#doubleRewards-tab','Hyperinflation','token_name','fees','includes','CAKE','setItem','#frictionlessyield-tab','block','reward','v0.8.7+commit.e28d00a7','rewardtoken','value','#tinyToken-tab','upgradable','click_standard','placeholder','tax_fees_extra','Please\x20install\x20MetaMask\x20wallet\x20:)','#tx_fee','safemoonkiller','liquiditygenerator','click_frictionless_yield','mintandburn','sendTransaction','#mintandburn-tab','.loading','21bsZWzF','change','invalid\x20token\x20!','https://bscscan.com/token/token_address#balances','utils','querySelector','selectedAddress','selected_token:','charityToken','Overflow','175415rzTuZA','find','methods','done','safemoonKiller','status','toString','.btnCreate','.actionGroup','.liquidity_fees','#safemoonV2-tab','verificationCallback','0x10ed43c718714eb63d5aa57b78b54704e256024e','success','token_supply','.tip','click_cancel','0x2170ed0880ac9a755fd29b2688956bd959f933f8','call'];a0_0x348a=function(){return _0x143370;};return a0_0x348a();}$('#basic-tab')['on'](a0_0x2b9f09(0x288),()=>{var _0x4b7a5e=a0_0x2b9f09;$(_0x4b7a5e(0x22f))[_0x4b7a5e(0x1db)](_0x4b7a5e(0x1f0),_0x4b7a5e(0x20a)),closeMoonshots(),console[_0x4b7a5e(0x292)]('token_type:',getTokenType()),logGaEvent(gaEvents[_0x4b7a5e(0x211)]),setPrice(0x0);}),$(a0_0x2b9f09(0x297))['on'](a0_0x2b9f09(0x288),()=>{var _0x38d964=a0_0x2b9f09;$(_0x38d964(0x22f))[_0x38d964(0x1db)](_0x38d964(0x1f0),_0x38d964(0x20a)),closeMoonshots(),console[_0x38d964(0x292)](_0x38d964(0x1ea),getTokenType()),logGaEvent(gaEvents[_0x38d964(0x240)]),setPrice(0x0);}),$(a0_0x2b9f09(0x27e))['on']('click',()=>{var _0x3478a9=a0_0x2b9f09;$(_0x3478a9(0x22f))[_0x3478a9(0x1db)](_0x3478a9(0x1f0),'block'),console[_0x3478a9(0x292)](_0x3478a9(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x3478a9(0x28e)]),setPrice(0x0);}),$(a0_0x2b9f09(0x21b))['on'](a0_0x2b9f09(0x288),()=>{var _0x27e7a2=a0_0x2b9f09;$(_0x27e7a2(0x22f))['css'](_0x27e7a2(0x1f0),'block'),console[_0x27e7a2(0x292)](_0x27e7a2(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x27e7a2(0x1e0)]),setPrice(0.15);}),$(a0_0x2b9f09(0x20f))['on'](a0_0x2b9f09(0x288),()=>{var _0xd89107=a0_0x2b9f09;$(_0xd89107(0x22f))[_0xd89107(0x1db)](_0xd89107(0x1f0),_0xd89107(0x20a)),console[_0xd89107(0x292)](_0xd89107(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0xd89107(0x1e0)]),setPrice(0.15);}),$('#honeypot-tab')['on']('click',()=>{var _0x285a11=a0_0x2b9f09;$(_0x285a11(0x22f))[_0x285a11(0x1db)](_0x285a11(0x1f0),_0x285a11(0x20a)),console[_0x285a11(0x292)](_0x285a11(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x285a11(0x243)]),setPrice(0.2);}),$(a0_0x2b9f09(0x258))['on'](a0_0x2b9f09(0x288),()=>{var _0x469ec1=a0_0x2b9f09;$(_0x469ec1(0x22f))[_0x469ec1(0x1db)](_0x469ec1(0x1f0),'block'),console[_0x469ec1(0x292)](_0x469ec1(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents['click_safemoon']),setPrice(0.2);}),$('#recovery-tab')['on']('click',()=>{var _0x1936f3=a0_0x2b9f09;$(_0x1936f3(0x22f))['css']('display',_0x1936f3(0x20a)),console[_0x1936f3(0x292)]('token_type:',getTokenType()),closeMoonshots(),logGaEvent('select_'+_0x1936f3(0x29b)),setPrice(0.2);}),$(a0_0x2b9f09(0x26d))['on'](a0_0x2b9f09(0x288),()=>{var _0x30ef48=a0_0x2b9f09;$(_0x30ef48(0x22f))[_0x30ef48(0x1db)](_0x30ef48(0x1f0),_0x30ef48(0x20a)),console[_0x30ef48(0x292)](_0x30ef48(0x1ea),getTokenType()),closeMoonshots(),logGaEvent('select_'+_0x30ef48(0x210)),setPrice(0.3);}),$('#deflationary-tab')['on']('click',()=>{var _0x112590=a0_0x2b9f09;$(_0x112590(0x22f))['css'](_0x112590(0x1f0),_0x112590(0x20a)),console[_0x112590(0x292)](_0x112590(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x112590(0x294)]),setPrice(0x1);}),$(a0_0x2b9f09(0x282))['on']('click',()=>{var _0x4232d9=a0_0x2b9f09;$(_0x4232d9(0x22f))[_0x4232d9(0x1db)](_0x4232d9(0x1f0),_0x4232d9(0x20a)),console[_0x4232d9(0x292)](_0x4232d9(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x4232d9(0x261)]),setPrice(0.5);}),$(a0_0x2b9f09(0x209))['on'](a0_0x2b9f09(0x288),()=>{var _0x457059=a0_0x2b9f09;$(_0x457059(0x22f))[_0x457059(0x1db)](_0x457059(0x1f0),_0x457059(0x20a)),console[_0x457059(0x292)](_0x457059(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x457059(0x218)]),setPrice(0x1);}),$(a0_0x2b9f09(0x249))['on']('click',()=>{var _0x3e5540=a0_0x2b9f09;$(_0x3e5540(0x22f))[_0x3e5540(0x1db)](_0x3e5540(0x1f0),'block'),console['log']('token_type:',getTokenType()),closeMoonshots(),logGaEvent(gaEvents[_0x3e5540(0x1f1)]),setPrice(1.5);}),$(a0_0x2b9f09(0x276))['on']('click',()=>{var _0xb5dc6d=a0_0x2b9f09;$(_0xb5dc6d(0x22f))[_0xb5dc6d(0x1db)](_0xb5dc6d(0x1f0),_0xb5dc6d(0x20a)),console['log']('token_type:',getTokenType()),closeMoonshots(),logGaEvent(_0xb5dc6d(0x1f9)),setPrice(0x2);}),$(a0_0x2b9f09(0x23b))['on']('click',()=>{var _0x5318df=a0_0x2b9f09;$(_0x5318df(0x22f))[_0x5318df(0x1db)]('display','block'),console[_0x5318df(0x292)](_0x5318df(0x1ea),getTokenType()),closeMoonshots(),logGaEvent(_0x5318df(0x27a)),setPrice(0.5);}),$(a0_0x2b9f09(0x26c))['on'](a0_0x2b9f09(0x288),()=>{var _0x5a7b98=a0_0x2b9f09;$(_0x5a7b98(0x22f))[_0x5a7b98(0x1db)](_0x5a7b98(0x1f0),_0x5a7b98(0x20a)),console[_0x5a7b98(0x292)](_0x5a7b98(0x1ea),getTokenType()),closeMoonshots(),logGaEvent('select_'+_0x5a7b98(0x1e3)),setPrice(0x3);});{$(a0_0x2b9f09(0x25a))['on']('click',()=>{var _0x4ce283=a0_0x2b9f09;$(_0x4ce283(0x22f))['css'](_0x4ce283(0x1f0),_0x4ce283(0x20a)),console['log'](_0x4ce283(0x1ea),getTokenType()),logGaEvent(_0x4ce283(0x24d)+_0x4ce283(0x283)),showPriceDialog(_0x4ce283(0x1fa),'5');}),$('#safemoonKiller-tab')['on'](a0_0x2b9f09(0x288),()=>{var _0x187554=a0_0x2b9f09;$('.actionGroup')['css']('display',_0x187554(0x20a)),console['log']('token_type:',getTokenType()),logGaEvent(_0x187554(0x24d)+_0x187554(0x22b)),showPriceDialog('SafeMoon\x20Killer','5');}),$(a0_0x2b9f09(0x244))['on']('click',()=>{var _0x4a6e36=a0_0x2b9f09;$(_0x4a6e36(0x22f))[_0x4a6e36(0x1db)](_0x4a6e36(0x1f0),_0x4a6e36(0x20a)),console[_0x4a6e36(0x292)](_0x4a6e36(0x1ea),getTokenType()),logGaEvent('select_'+'deadOwner'),showPriceDialog(_0x4a6e36(0x285),'3');}),$(a0_0x2b9f09(0x231))['on'](a0_0x2b9f09(0x288),()=>{var _0x5da293=a0_0x2b9f09;$(_0x5da293(0x22f))['css'](_0x5da293(0x1f0),_0x5da293(0x20a)),console[_0x5da293(0x292)](_0x5da293(0x1ea),getTokenType()),logGaEvent(_0x5da293(0x24d)+_0x5da293(0x260)),showPriceDialog(_0x5da293(0x1de),'3');}),$('#antiRug-tab')['on'](a0_0x2b9f09(0x288),()=>{var _0x364a1c=a0_0x2b9f09;$('.actionGroup')[_0x364a1c(0x1db)](_0x364a1c(0x1f0),_0x364a1c(0x20a)),console[_0x364a1c(0x292)](_0x364a1c(0x1ea),getTokenType()),logGaEvent('select_'+'antiRug'),showPriceDialog(_0x364a1c(0x252),'5');}),$('#dex-tab')['on'](a0_0x2b9f09(0x288),()=>{var _0x137588=a0_0x2b9f09;$('.actionGroup')[_0x137588(0x1db)](_0x137588(0x1f0),_0x137588(0x20a)),console[_0x137588(0x292)](_0x137588(0x1ea),getTokenType()),logGaEvent(_0x137588(0x24d)+_0x137588(0x26b)),showPriceDialog('DEX','30');}),$('#overflow-tab')['on']('click',()=>{var _0x35bf56=a0_0x2b9f09;$(_0x35bf56(0x22f))[_0x35bf56(0x1db)](_0x35bf56(0x1f0),_0x35bf56(0x20a)),console['log'](_0x35bf56(0x1ea),getTokenType()),logGaEvent(_0x35bf56(0x24d)+_0x35bf56(0x28d)),showPriceDialog(_0x35bf56(0x226),'15');}),$(a0_0x2b9f09(0x24c))['on']('click',()=>{var _0x259c2b=a0_0x2b9f09;$('.actionGroup')[_0x259c2b(0x1db)]('display','block'),console[_0x259c2b(0x292)](_0x259c2b(0x1ea),getTokenType()),logGaEvent(_0x259c2b(0x24d)+_0x259c2b(0x1dc)),showPriceDialog(_0x259c2b(0x259),'10');}),$(a0_0x2b9f09(0x1ff))['on'](a0_0x2b9f09(0x288),()=>{var _0x2d43b0=a0_0x2b9f09;$(_0x2d43b0(0x22f))[_0x2d43b0(0x1db)](_0x2d43b0(0x1f0),'block'),console[_0x2d43b0(0x292)](_0x2d43b0(0x1ea),getTokenType()),logGaEvent(_0x2d43b0(0x24d)+_0x2d43b0(0x1d9)),showPriceDialog('Built-in\x20Presale','10');}),$(a0_0x2b9f09(0x1fb))['on'](a0_0x2b9f09(0x288),()=>{var _0x2f3173=a0_0x2b9f09;$('.actionGroup')['css'](_0x2f3173(0x1f0),_0x2f3173(0x20a)),console[_0x2f3173(0x292)](_0x2f3173(0x1ea),getTokenType()),logGaEvent(_0x2f3173(0x1e2)),showPriceDialog('Stable\x20Coin','50');}),$(a0_0x2b9f09(0x254))['on'](a0_0x2b9f09(0x288),()=>{var _0x13d6de=a0_0x2b9f09;$(_0x13d6de(0x22f))[_0x13d6de(0x1db)](_0x13d6de(0x1f0),'block'),console[_0x13d6de(0x292)](_0x13d6de(0x1ea),getTokenType()),logGaEvent('select_nftGame'),showPriceDialog('NFT\x20Game','20');}),$(a0_0x2b9f09(0x25c))['on'](a0_0x2b9f09(0x288),()=>{var _0x38787b=a0_0x2b9f09;$('.actionGroup')[_0x38787b(0x1db)]('display','block'),console[_0x38787b(0x292)](_0x38787b(0x1ea),getTokenType()),logGaEvent('select_staking'),showPriceDialog(_0x38787b(0x269),'10');}),$(a0_0x2b9f09(0x253))['on'](a0_0x2b9f09(0x288),()=>{var _0x30eaf1=a0_0x2b9f09;$('.actionGroup')[_0x30eaf1(0x1db)](_0x30eaf1(0x1f0),_0x30eaf1(0x20a)),console[_0x30eaf1(0x292)](_0x30eaf1(0x1ea),getTokenType()),logGaEvent(_0x30eaf1(0x1ee)),showPriceDialog(_0x30eaf1(0x275),'5');}),$(a0_0x2b9f09(0x291))['on']('click',()=>{var _0x13ab0e=a0_0x2b9f09;$(_0x13ab0e(0x22f))[_0x13ab0e(0x1db)](_0x13ab0e(0x1f0),_0x13ab0e(0x20a)),console['log'](_0x13ab0e(0x1ea),getTokenType()),logGaEvent(_0x13ab0e(0x247)),showPriceDialog(_0x13ab0e(0x203),'10');}),$(a0_0x2b9f09(0x262))['on'](a0_0x2b9f09(0x288),()=>{var _0x120993=a0_0x2b9f09;$(_0x120993(0x22f))[_0x120993(0x1db)](_0x120993(0x1f0),_0x120993(0x20a)),console[_0x120993(0x292)](_0x120993(0x1ea),getTokenType()),logGaEvent(_0x120993(0x24d)+_0x120993(0x26a)),showPriceDialog('Hyper\x20Deflation','10');}),$(a0_0x2b9f09(0x202))['on']('click',()=>{var _0x7c3299=a0_0x2b9f09;$('.actionGroup')[_0x7c3299(0x1db)]('display',_0x7c3299(0x20a)),console[_0x7c3299(0x292)](_0x7c3299(0x1ea),getTokenType()),logGaEvent(_0x7c3299(0x24d)+_0x7c3299(0x27b)),showPriceDialog('Double\x20Rewards','15');}),$(a0_0x2b9f09(0x26e))['on'](a0_0x2b9f09(0x288),()=>{var _0xbb8305=a0_0x2b9f09;$(_0xbb8305(0x22f))[_0xbb8305(0x1db)](_0xbb8305(0x1f0),_0xbb8305(0x20a)),console[_0xbb8305(0x292)](_0xbb8305(0x1ea),getTokenType()),logGaEvent('select_'+_0xbb8305(0x23a)),showPriceDialog(_0xbb8305(0x200),'20');}),$(a0_0x2b9f09(0x281))['on'](a0_0x2b9f09(0x288),()=>{var _0x1706f3=a0_0x2b9f09;$(_0x1706f3(0x22f))[_0x1706f3(0x1db)]('display',_0x1706f3(0x20a)),console[_0x1706f3(0x292)](_0x1706f3(0x1ea),getTokenType()),logGaEvent(_0x1706f3(0x24d)+_0x1706f3(0x1e4)),showPriceDialog(_0x1706f3(0x263),'5');}),$('#charityToken-tab')['on'](a0_0x2b9f09(0x288),()=>{var _0x16e5ca=a0_0x2b9f09;$(_0x16e5ca(0x22f))['css'](_0x16e5ca(0x1f0),_0x16e5ca(0x20a)),console[_0x16e5ca(0x292)](_0x16e5ca(0x1ea),getTokenType()),logGaEvent(_0x16e5ca(0x24d)+_0x16e5ca(0x225)),showPriceDialog(_0x16e5ca(0x271),'3');}),$(a0_0x2b9f09(0x284))['on'](a0_0x2b9f09(0x288),()=>{var _0x1c580f=a0_0x2b9f09;$(_0x1c580f(0x22f))[_0x1c580f(0x1db)](_0x1c580f(0x1f0),_0x1c580f(0x246));});}$(a0_0x2b9f09(0x1fd))['on']('click',()=>{var _0x3228a1=a0_0x2b9f09;$('.actionGroup')[_0x3228a1(0x1db)](_0x3228a1(0x1f0),_0x3228a1(0x246)),logGaEvent(gaEvents['click_customized_token']),closeMoonshots();});function getTokenType(){var _0xb7b1c=a0_0x2b9f09,_0x37bd5e=$(_0xb7b1c(0x245))[_0xb7b1c(0x1df)]('id');return _0x37bd5e;}console['log'](a0_0x2b9f09(0x224),getTokenType());function showLoading(){var _0xfbcab5=a0_0x2b9f09;$(_0xfbcab5(0x21c))[_0xfbcab5(0x1db)](_0xfbcab5(0x1f0),_0xfbcab5(0x20a)),$('.alertLoading')['css']('display',_0xfbcab5(0x20a)),hideError();}function hideLoading(){var _0x3d55a0=a0_0x2b9f09;$(_0x3d55a0(0x21c))['css'](_0x3d55a0(0x1f0),_0x3d55a0(0x246)),$(_0x3d55a0(0x23d))[_0x3d55a0(0x1db)]('display',_0x3d55a0(0x246)),$(_0x3d55a0(0x1f3))[_0x3d55a0(0x1db)](_0x3d55a0(0x1f0),'none');}function showError(_0x46abd7){var _0x434fc2=a0_0x2b9f09;JSON['stringify'](_0x46abd7)!='{}'?($(_0x434fc2(0x248))['text'](JSON['stringify'](_0x46abd7)),$('.error')['css']('display',_0x434fc2(0x20a))):(_0x46abd7['toString']()[_0x434fc2(0x206)](_0x434fc2(0x27f))?$(_0x434fc2(0x248))['text'](_0x434fc2(0x1ed)):($(_0x434fc2(0x248))[_0x434fc2(0x296)](_0x46abd7),!JSON['stringify'](_0x46abd7)[_0x434fc2(0x206)](_0x434fc2(0x272))&&$(_0x434fc2(0x236))[_0x434fc2(0x1db)](_0x434fc2(0x1f0),_0x434fc2(0x20a))),$(_0x434fc2(0x248))[_0x434fc2(0x1db)]('display','block'));}function hideError(){var _0x1d439f=a0_0x2b9f09;$(_0x1d439f(0x248))[_0x1d439f(0x1db)](_0x1d439f(0x1f0),_0x1d439f(0x246)),$(_0x1d439f(0x236))[_0x1d439f(0x1db)](_0x1d439f(0x1f0),_0x1d439f(0x246));}function sendCustomToken(_0x51607a,_0x2ec4e3){var _0x4facc9=a0_0x2b9f09,_0x14e672={'from':ethereum['selectedAddress'],'to':_0x51607a[_0x4facc9(0x1dd)],'data':_0x51607a['methods'][_0x4facc9(0x241)](_0x51607a['_address'],web3[_0x4facc9(0x221)]['toWei'](_0x2ec4e3[_0x4facc9(0x22d)]()))['encodeABI']()};web3[_0x4facc9(0x1f4)][_0x4facc9(0x21a)](_0x14e672)[_0x4facc9(0x250)](console[_0x4facc9(0x292)]);}async function test_verify(){var _0x47e0e2=a0_0x2b9f09,_0x23a458='0xC035834470Ecc0ff68aFFB2b966Ad0C85d9b0f15',_0x42a14f=await readTextFile(_0x47e0e2(0x293)),_0xa03392=_0x47e0e2(0x20c),_0xfd0a00='Test',_0x3b7ab1=encodeParameters([_0x47e0e2(0x27d)],[_0x47e0e2(0x1e9)]);console[_0x47e0e2(0x292)](_0x42a14f),alert(_0x47e0e2(0x2a1)),verifyContract(_0x23a458,_0x42a14f,_0xfd0a00,_0xa03392,_0x3b7ab1);}$('#verify_contract')['on'](a0_0x2b9f09(0x288),()=>{test_verify();});