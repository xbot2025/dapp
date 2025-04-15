import{E as K}from"./eventemitter3-mPVn28I8.js";import{y as ht,z as V,B as lt,D as Y,H as dt,s as ft,F as x,r as mt,O as gt,I as pt,G as vt,w as O,J as _t,K as yt,N as wt,Q as bt,V as It,x as L}from"./web3-errors-DMH_yRvG.js";import{T as Z,D as At,a as y,F as N,W as Rt}from"./web3-types-DPR2whjI.js";import{v as p,h as St,b as f,a as tt,u as Et,f as et,i as d,g as Bt,n as xt,j as nt,k as P,l as M,m as $,p as z,o as m,q as Pt}from"./web3-validator-CNlFpTpb.js";import{k as it,b as kt,g as Qt}from"./ethereum-cryptography-CHyfgW_b.js";import{u as b}from"./@noble-ymNIOX9z.js";function q(t){var e,n;return t instanceof Uint8Array||((e=t==null?void 0:t.constructor)===null||e===void 0?void 0:e.name)==="Uint8Array"||((n=t==null?void 0:t.constructor)===null||n===void 0?void 0:n.name)==="Buffer"}function jt(...t){const e=t.reduce((s,r)=>s+r.length,0),n=new Uint8Array(e);let i=0;for(const s of t)n.set(s,i),i+=s.length;return n}const st={noether:BigInt(0),wei:BigInt(1),kwei:BigInt(1e3),Kwei:BigInt(1e3),babbage:BigInt(1e3),femtoether:BigInt(1e3),mwei:BigInt(1e6),Mwei:BigInt(1e6),lovelace:BigInt(1e6),picoether:BigInt(1e6),gwei:BigInt(1e9),Gwei:BigInt(1e9),shannon:BigInt(1e9),nanoether:BigInt(1e9),nano:BigInt(1e9),szabo:BigInt(1e12),microether:BigInt(1e12),micro:BigInt(1e12),finney:BigInt(1e15),milliether:BigInt(1e15),milli:BigInt(1e15),ether:BigInt("1000000000000000000"),kether:BigInt("1000000000000000000000"),grand:BigInt("1000000000000000000000"),mether:BigInt("1000000000000000000000000"),gether:BigInt("1000000000000000000000000000"),tether:BigInt("1000000000000000000000000000000")},k="Warning: Using type `number` with values that are large or contain many decimals may cause loss of precision, it is recommended to use type `string` or `BigInt` when using conversion methods",g=t=>{if(p.validate(["bytes"],[t]),q(t))return t;if(Array.isArray(t))return new Uint8Array(t);if(typeof t=="string")return St(t);throw new ht(t)},{uint8ArrayToHexString:qt}=nt,_=t=>qt(g(t)),rt=t=>typeof t=="string"&&t.slice(0,2).toLowerCase()!=="0x"?g(`0x${t}`):g(t),v=(t,e)=>{typeof t!="bigint"&&p.validate(["int"],[t]);let n=xt(t);return e&&(n.startsWith("-")||n.length%2!=1?n.length%2==0&&n.startsWith("-")&&(n="-0x0".concat(n.slice(3))):n="0x0".concat(n.slice(2))),n},W=t=>{p.validate(["string"],[t]);let e=t.replace(/^(?:\u0000)/,"");return e=e.replace(/(?:\u0000)$/,""),_(new TextEncoder().encode(e))},Yt=t=>kt(rt(t)),Tt=b,Zt=(t,e)=>{if(typeof t=="string"&&tt(t))return e?"address":`0x${t.toLowerCase().replace(/^0x/i,"")}`;if(typeof t=="boolean")return e?"bool":t?"0x01":"0x00";if(typeof t=="number")return e?t<0?"int256":"uint256":v(t);if(typeof t=="bigint")return e?"bigint":v(t);if(q(t))return e?"bytes":_(t);if(typeof t=="object"&&t)return e?"string":W(JSON.stringify(t));if(typeof t=="string"){if(t.startsWith("-0x")||t.startsWith("-0X"))return e?"int256":v(t);if(f(t))return e?"bytes":t;if(P(t)&&!M(t)&&!$(t))return e?"bytes":`0x${t}`;if(P(t)&&!M(t)&&$(t))return e?"uint":v(t);if(!Number.isFinite(t))return e?"string":W(t)}throw new dt(t)},A=t=>{if(typeof t=="number")return t>1e20?(console.warn(k),BigInt(t)):t;if(typeof t=="bigint")return t>=Number.MIN_SAFE_INTEGER&&t<=Number.MAX_SAFE_INTEGER?Number(t):t;if(typeof t=="string"&&f(t))return(e=>(p.validate(["hex"],[e]),Bt(e)))(t);try{return A(BigInt(t))}catch{throw new Y(t)}},w=t=>{if(typeof t=="number")return BigInt(t);if(typeof t=="bigint")return t;if(typeof t=="string"&&P(t))return t.startsWith("-")?-BigInt(t.substring(1)):BigInt(t);throw new Y(t)},te=(t,e)=>{let n;if(n=st[e],!n)throw new V(e);const i=String(A(t)),s=n.toString().length-1;if(s<=0)return i.toString();const r=i.padStart(s,"0"),c=r.slice(0,-s),u=r.slice(-s).replace(/\.?0+$/,"");return c===""?u?`0.${u}`:"0":u===""?c:`${c}.${u}`.slice(0,c.length+s+1)},ee=(t,e)=>{let n;if(p.validate(["number"],[t]),n=st[e],!n)throw new V(e);let i=t;typeof i=="number"&&(i<1e-15&&console.warn(k),i>1e20?(console.warn(k),i=BigInt(i)):i=i.toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}));const[s,r]=String(typeof i!="string"||f(i)?A(i):i).split(".").concat(""),c=BigInt(`${s}${r}`)*n,u=r.length;return u===0?c.toString():c.toString().slice(0,-u)},ne=t=>{if(!tt(t,!1))throw new lt(t);const e=t.toLowerCase().replace(/^0x/i,""),n=Et(it(et(Tt(e))));if(d(n)||n==="0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")return"";let i="0x";const s=n.replace(/^0x/i,"");for(let r=0;r<e.length;r+=1)parseInt(s[r],16)>7?i+=e[r].toUpperCase():i+=e[r];return i},ie=t=>{if(typeof t=="boolean")return t;if(typeof t=="number"&&(t===0||t===1)||typeof t=="bigint"&&(t===BigInt(0)||t===BigInt(1)))return!!t;if(typeof t=="string"&&!f(t)&&(t==="1"||t==="0"||t==="false"||t==="true"))return t==="true"||t!=="false"&&!!Number(t);if(typeof t=="string"&&f(t)&&(t==="0x1"||t==="0x0"))return!!A(t);throw new ft(t)};class se extends K{constructor(){super(...arguments),this.maxListeners=Number.MAX_SAFE_INTEGER}setMaxListeners(e){return this.maxListeners=e,this}getMaxListeners(){return this.maxListeners}}const re=t=>typeof t=="object"&&!d(t)&&Object.keys(t).length!==0&&["input","data","from","gas","gasPrice","gasLimit","address","jsonInterface","syncWithContext","dataInputFill"].some(e=>e in t),D=d,U=t=>!(typeof t!="object"||d(t)||Array.isArray(t)||t instanceof Z),ot=(t,...e)=>{if(!U(t))return t;const n=Object.assign({},t);for(const i of e)for(const s in i)U(i[s])?(n[s]||(n[s]={}),n[s]=ot(n[s],i[s])):!d(i[s])&&Object.hasOwnProperty.call(i,s)&&(Array.isArray(i[s])||i[s]instanceof Z?n[s]=i[s].slice(0):n[s]=i[s]);return n},Ct=(t,e,n="0")=>typeof t=="string"?f(t)?z(t,e,n):t.padStart(e,n):(p.validate(["int"],[t]),z(t,e,n)),{parseBaseType:Ot}=nt,oe=t=>typeof t=="object"&&!d(t)&&"number"in t&&"bytes"in t,Lt=(t,e,n=[])=>{let i,s=Object.assign({},t);for(const r of e){if(s.oneOf&&i){const c=i,u=n.find(([l])=>l===c);u&&u[0]===i&&(s=s.oneOf[u[1]])}if(!s.properties&&!s.items)return;s.properties?s=s.properties[r]:s.items&&s.items.properties?s=s.items.properties[r]:s.items&&m(s.items)?s=s.items:s.items&&Array.isArray(s.items)&&(s=s.items[parseInt(r,10)]),s&&r&&(i=r)}return s},I=(t,e,n)=>{try{const{baseType:i,baseTypeSize:s}=Ot(e);if(i==="int"||i==="uint")switch(n.number){case y.NUMBER:return Number(w(t));case y.HEX:return v(w(t));case y.STR:return w(t).toString();case y.BIGINT:return w(t);default:throw new x(`Invalid format: ${String(n.number)}`)}if(i==="bytes"){let r;switch(s?typeof t=="string"?r=Ct(t,2*s):q(t)&&(r=jt(new Uint8Array(s-t.length),t)):r=t,n.bytes){case N.HEX:return _(g(r));case N.UINT8ARRAY:return g(r);default:throw new x(`Invalid format: ${String(n.bytes)}`)}}if(i==="string")return String(t)}catch{return t}return t},F=({value:t,schemaProp:e,schema:n,object:i,key:s,dataPath:r,format:c,oneOfPath:u=[]})=>{var l,a;if(Array.isArray(t)){let o=e;if((e==null?void 0:e.oneOf)!==void 0&&e.oneOf.forEach((h,C)=>{var R,S;!Array.isArray(e==null?void 0:e.items)&&(typeof t[0]=="object"&&((R=h==null?void 0:h.items)===null||R===void 0?void 0:R.type)==="object"||typeof t[0]=="string"&&((S=h==null?void 0:h.items)===null||S===void 0?void 0:S.type)!=="object")&&(o=h,u.push([s,C]))}),d(o==null?void 0:o.items))return delete i[s],r.pop(),!0;if(m(o.items)&&!d(o.items.format)){for(let h=0;h<t.length;h+=1)i[s][h]=I(t[h],(l=o==null?void 0:o.items)===null||l===void 0?void 0:l.format,c);return r.pop(),!0}if(!Array.isArray(o==null?void 0:o.items)&&((a=o==null?void 0:o.items)===null||a===void 0?void 0:a.type)==="object"){for(const h of t)T(h,n,r,c,u);return r.pop(),!0}if(Array.isArray(o==null?void 0:o.items)){for(let h=0;h<t.length;h+=1)i[s][h]=I(t[h],o.items[h].format,c);return r.pop(),!0}}return!1},T=(t,e,n,i,s=[])=>{var r;if(!m(t)&&!Array.isArray(t))return I(t,e==null?void 0:e.format,i);const c=t;if(Array.isArray(c)&&(e==null?void 0:e.type)==="array"&&((r=e==null?void 0:e.items)===null||r===void 0?void 0:r.type)==="object")F({value:c,schemaProp:e,schema:e,object:c,key:"",dataPath:n,format:i,oneOfPath:s});else for(const[u,l]of Object.entries(c)){n.push(u);let a=Lt(e,n,s);if(d(a))delete c[u],n.pop();else if(m(l))T(l,e,n,i,s),n.pop();else if(!F({value:l,schemaProp:a,schema:e,object:c,key:u,dataPath:n,format:i,oneOfPath:s})){if((a==null?void 0:a.format)===void 0&&(a==null?void 0:a.oneOf)!==void 0){for(const[o,h]of a.oneOf.entries())if((h==null?void 0:h.format)!==void 0){a=h;break}}c[u]=I(l,a.format,i),n.pop()}}return c},ae=(t,e,n=At)=>{let i;i=m(e)?ot({},e):Array.isArray(e)?[...e]:e;const s=m(t)?t:Pt(t);if(!s.properties&&!s.items&&!s.format)throw new x("Invalid json schema for formatting");return T(i,s,[],n)},H="0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",Nt=t=>{let e;return e=typeof t=="bigint"||typeof t=="number"?b(t.toString()):Array.isArray(t)?new Uint8Array(t):typeof t!="string"||f(t)?g(t):b(t),_(it(et(e)))},ce=t=>{const e=(n=>{let i;i=typeof n=="string"?n.startsWith("0x")&&f(n)?rt(n):b(n):n;const s=Nt(i);return s===H?void 0:s})(t);return d(e)?H:e};var Q=function(t,e,n,i){return new(n||(n=Promise))(function(s,r){function c(a){try{l(i.next(a))}catch(o){r(o)}}function u(a){try{l(i.throw(a))}catch(o){r(o)}}function l(a){var o;a.done?s(a.value):(o=a.value,o instanceof n?o:new n(function(h){h(o)})).then(c,u)}l((i=i.apply(t,e||[])).next())})};function ue(t){return(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function he(t,e){let n;return[new Promise((i,s)=>{n=setInterval(function r(){return Q(this,void 0,void 0,function*(){try{const c=yield function(u,l){return Q(this,void 0,void 0,function*(){let a;const o=yield Promise.race([u instanceof Promise?u:u(),new Promise((h,C)=>{a=setTimeout(()=>h(void 0),l)})]);if(a&&clearTimeout(a),o instanceof Error)throw o;return o})}(t,e);d(c)||(clearInterval(n),i(c))}catch(c){clearInterval(n),s(c)}}),r}(),e)}),n]}function le(t,e){let n;const i=new Promise((s,r)=>{n=setTimeout(()=>{r(e)},t)});return[n,i]}function de(t,e){let n;const i=new Promise((s,r)=>{n=setInterval(()=>{Q(this,void 0,void 0,function*(){const c=yield t();c&&(clearInterval(n),r(c))})},e)});return[n,i]}const Mt=()=>{const t=Qt(16);t[6]=15&t[6]|64,t[8]=63&t[8]|128;const e=_(t);return[e.substring(2,10),e.substring(10,14),e.substring(14,18),e.substring(18,22),e.substring(22,34)].join("-")},fe=t=>{const e=t.error.code;return mt.has(e)||e>=-32099&&e<=-32e3},at=t=>!Array.isArray(t)&&!!t&&t.jsonrpc==="2.0"&&"result"in t&&d(t.error)&&(typeof t.id=="number"||typeof t.id=="string"),ct=t=>!Array.isArray(t)&&t.jsonrpc==="2.0"&&!!t&&d(t.result)&&"error"in t&&(typeof t.id=="number"||typeof t.id=="string"),$t=t=>!(Array.isArray(t)||!t||t.jsonrpc!=="2.0"||d(t.params)||d(t.method)),G=t=>at(t)||ct(t),J=t=>Array.isArray(t)&&t.length>0&&(e=>Array.isArray(e)?e.every(G):G(e))(t),j=t=>{var e,n,i,s;return{jsonrpc:(e=t.jsonrpc)!==null&&e!==void 0?e:"2.0",id:(i=(n=t.id)!==null&&n!==void 0?n:void 0)!==null&&i!==void 0?i:Mt(),method:t.method,params:(s=t.params)!==null&&s!==void 0?s:void 0}},me=t=>t.map(e=>j(e)),zt=t=>Array.isArray(t)&&t.length>0;var ut,E=function(t,e,n,i){return new(n||(n=Promise))(function(s,r){function c(a){try{l(i.next(a))}catch(o){r(o)}}function u(a){try{l(i.throw(a))}catch(o){r(o)}}function l(a){var o;a.done?s(a.value):(o=a.value,o instanceof n?o:new n(function(h){h(o)})).then(c,u)}l((i=i.apply(t,e||[])).next())})};class Wt{constructor({timeout:e,eagerStart:n,timeoutMessage:i}={timeout:0,eagerStart:!1,timeoutMessage:"DeferredPromise timed out"}){this[ut]="Promise",this._state="pending",this._promise=new Promise((s,r)=>{this._resolve=s,this._reject=r}),this._timeoutMessage=i,this._timeoutInterval=e,n&&this.startTimer()}get state(){return this._state}then(e,n){return E(this,void 0,void 0,function*(){return this._promise.then(e,n)})}catch(e){return E(this,void 0,void 0,function*(){return this._promise.catch(e)})}finally(e){return E(this,void 0,void 0,function*(){return this._promise.finally(e)})}resolve(e){this._resolve(e),this._state="fulfilled",this._clearTimeout()}reject(e){this._reject(e),this._state="rejected",this._clearTimeout()}startTimer(){this._timeoutInterval&&this._timeoutInterval>0&&(this._timeoutId=setTimeout(this._checkTimeout.bind(this),this._timeoutInterval))}_checkTimeout(){this._state==="pending"&&this._timeoutId&&this.reject(new gt(this._timeoutMessage))}_clearTimeout(){this._timeoutId&&clearTimeout(this._timeoutId)}}ut=Symbol.toStringTag;class Dt{constructor(e,n){this.eventEmitter=e,this.autoReconnect=n,this.chunkTimeout=15e3}clearQueues(){typeof this._clearQueues=="function"&&this._clearQueues()}onError(e){this._clearQueues=e}parseResponse(e){const n=[];return e.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach(i=>{let s,r=i;this.lastChunk&&(r=this.lastChunk+r);try{s=JSON.parse(r)}catch{return this.lastChunk=r,this.lastChunkTimeout&&clearTimeout(this.lastChunkTimeout),void(this.lastChunkTimeout=setTimeout(()=>{this.autoReconnect||(this.clearQueues(),this.eventEmitter.emit("error",new pt({id:1,jsonrpc:"2.0",error:{code:2,message:"Chunk timeout"}})))},this.chunkTimeout))}clearTimeout(this.lastChunkTimeout),this.lastChunk=void 0,s&&n.push(s)}),n}}var X=function(t,e,n,i){return new(n||(n=Promise))(function(s,r){function c(a){try{l(i.next(a))}catch(o){r(o)}}function u(a){try{l(i.throw(a))}catch(o){r(o)}}function l(a){var o;a.done?s(a.value):(o=a.value,o instanceof n?o:new n(function(h){h(o)})).then(c,u)}l((i=i.apply(t,e||[])).next())})};class Ut extends Rt{constructor(){super(...arguments),this._eventEmitter=new K,this._chainId="",this._accounts=[]}_getChainId(){return X(this,void 0,void 0,function*(){var e;const n=yield this.request(j({method:"eth_chainId",params:[]}));return(e=n==null?void 0:n.result)!==null&&e!==void 0?e:""})}_getAccounts(){return X(this,void 0,void 0,function*(){var e;const n=yield this.request(j({method:"eth_accounts",params:[]}));return(e=n==null?void 0:n.result)!==null&&e!==void 0?e:[]})}_onConnect(){Promise.all([this._getChainId().then(e=>{e!==this._chainId&&(this._chainId=e,this._eventEmitter.emit("chainChanged",this._chainId))}).catch(e=>{console.error(e)}),this._getAccounts().then(e=>{this._accounts.length===e.length&&e.every(n=>e.includes(n))||(this._accounts=e,this._onAccountsChanged())}).catch(e=>{console.error(e)})]).then(()=>this._eventEmitter.emit("connect",{chainId:this._chainId})).catch(e=>{console.error(e)})}_onDisconnect(e,n){this._eventEmitter.emit("disconnect",new vt(e,n))}_onAccountsChanged(){this._eventEmitter.emit("accountsChanged",this._accounts)}}var B=function(t,e,n,i){return new(n||(n=Promise))(function(s,r){function c(a){try{l(i.next(a))}catch(o){r(o)}}function u(a){try{l(i.throw(a))}catch(o){r(o)}}function l(a){var o;a.done?s(a.value):(o=a.value,o instanceof n?o:new n(function(h){h(o)})).then(c,u)}l((i=i.apply(t,e||[])).next())})};const Ft={autoReconnect:!0,delay:5e3,maxAttempts:5};class ge extends Ut{get SocketConnection(){return this._socketConnection}constructor(e,n,i){if(super(),this._connectionStatus="connecting",this._onMessageHandler=this._onMessage.bind(this),this._onOpenHandler=this._onConnect.bind(this),this._onCloseHandler=this._onCloseEvent.bind(this),this._onErrorHandler=this._onError.bind(this),!this._validateProviderPath(e))throw new O(e);this._socketPath=e,this._socketOptions=n,this._reconnectOptions=Object.assign(Object.assign({},Ft),i??{}),this._pendingRequestsQueue=new Map,this._sentRequestsQueue=new Map,this._init(),this.connect(),this.chunkResponseParser=new Dt(this._eventEmitter,this._reconnectOptions.autoReconnect),this.chunkResponseParser.onError(()=>{this._clearQueues()}),this.isReconnecting=!1}_init(){this._reconnectAttempts=0}connect(){try{this._openSocketConnection(),this._connectionStatus="connecting",this._addSocketListeners()}catch(e){if(!this.isReconnecting)throw this._connectionStatus="disconnected",e&&e.message?new _t(`Error while connecting to ${this._socketPath}. Reason: ${e.message}`):new O(this._socketPath);setImmediate(()=>{this._reconnect()})}}_validateProviderPath(e){return!!e}getPendingRequestQueueSize(){return this._pendingRequestsQueue.size}getSentRequestsQueueSize(){return this._sentRequestsQueue.size}supportsSubscriptions(){return!0}on(e,n){this._eventEmitter.on(e,n)}once(e,n){this._eventEmitter.once(e,n)}removeListener(e,n){this._eventEmitter.removeListener(e,n)}_onDisconnect(e,n){this._connectionStatus="disconnected",super._onDisconnect(e,n)}disconnect(e,n){const i=e??1e3;this._removeSocketListeners(),this.getStatus()!=="disconnected"&&this._closeSocketConnection(i,n),this._onDisconnect(i,n)}safeDisconnect(e,n){return B(this,arguments,void 0,function*(i,s,r=!1,c=1e3){let u=0;yield B(this,void 0,void 0,function*(){return new Promise(l=>{const a=setInterval(()=>{r&&u>=5&&this.clearQueues(),this.getPendingRequestQueueSize()===0&&this.getSentRequestsQueueSize()===0&&(clearInterval(a),l(!0)),u+=1},c)})}),this.disconnect(i,s)})}removeAllListeners(e){this._eventEmitter.removeAllListeners(e)}_onError(e){this.isReconnecting?this._reconnect():this._eventEmitter.emit("error",e)}reset(){this._sentRequestsQueue.clear(),this._pendingRequestsQueue.clear(),this._init(),this._removeSocketListeners(),this._addSocketListeners()}_reconnect(){this.isReconnecting||(this.isReconnecting=!0,this._sentRequestsQueue.size>0&&this._sentRequestsQueue.forEach((e,n)=>{e.deferredPromise.reject(new yt),this._sentRequestsQueue.delete(n)}),this._reconnectAttempts<this._reconnectOptions.maxAttempts?(this._reconnectAttempts+=1,setTimeout(()=>{this._removeSocketListeners(),this.connect(),this.isReconnecting=!1},this._reconnectOptions.delay)):(this.isReconnecting=!1,this._clearQueues(),this._removeSocketListeners(),this._eventEmitter.emit("error",new wt(this._reconnectOptions.maxAttempts))))}request(e){return B(this,void 0,void 0,function*(){if(D(this._socketConnection))throw new Error("Connection is undefined");this.getStatus()==="disconnected"&&this.connect();const n=zt(e)?e[0].id:e.id;if(!n)throw new bt("Request Id not defined");if(this._sentRequestsQueue.has(n))throw new It(n);const i=new Wt;i.catch(r=>{this._eventEmitter.emit("error",r)});const s={payload:e,deferredPromise:i};if(this.getStatus()==="connecting")return this._pendingRequestsQueue.set(n,s),s.deferredPromise;this._sentRequestsQueue.set(n,s);try{this._sendToSocket(s.payload)}catch(r){this._sentRequestsQueue.delete(n),this._eventEmitter.emit("error",r)}return i})}_onConnect(){this._connectionStatus="connected",this._reconnectAttempts=0,super._onConnect(),this._sendPendingRequests()}_sendPendingRequests(){for(const[e,n]of this._pendingRequestsQueue.entries())try{this._sendToSocket(n.payload),this._pendingRequestsQueue.delete(e),this._sentRequestsQueue.set(e,n)}catch(i){this._pendingRequestsQueue.delete(e),this._eventEmitter.emit("error",i)}}_onMessage(e){const n=this._parseResponses(e);if(!D(n)&&n.length!==0)for(const i of n){if($t(i)&&i.method.endsWith("_subscription"))return void this._eventEmitter.emit("message",i);const s=J(i)?i[0].id:i.id,r=this._sentRequestsQueue.get(s);if(!r)return;(J(i)||at(i)||ct(i))&&(this._eventEmitter.emit("message",i),r.deferredPromise.resolve(i)),this._sentRequestsQueue.delete(s)}}clearQueues(e){this._clearQueues(e)}_clearQueues(e){this._pendingRequestsQueue.size>0&&this._pendingRequestsQueue.forEach((n,i)=>{n.deferredPromise.reject(new L(e)),this._pendingRequestsQueue.delete(i)}),this._sentRequestsQueue.size>0&&this._sentRequestsQueue.forEach((n,i)=>{n.deferredPromise.reject(new L(e)),this._sentRequestsQueue.delete(i)}),this._removeSocketListeners()}}export{jt as A,rt as B,q as C,Nt as D,se as E,re as F,oe as G,W as H,ee as I,te as J,ge as S,Wt as W,at as a,zt as b,me as c,j as d,ue as e,ct as f,fe as g,J as h,D as i,$t as j,ae as k,_ as l,ot as m,le as n,v as o,he as p,ne as q,de as r,ce as s,Zt as t,w as u,Ct as v,ie as w,g as x,Tt as y,Yt as z};
