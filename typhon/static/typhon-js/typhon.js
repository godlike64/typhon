
var encMessage =sjcl.encrypt(somePassword,message,{count:2048,salt:salt,ks:256});
sjcl.decrypt(key, encMessage) ;


js> load(['sjcl.js'])
function load() {[native code]}
js> sjcl.hash
({sha256:(function (a) {"use strict";this.b[0] || this.O();a ? (this.F = a.F.slice(0), this.A = a.A.slice(0), this.l = a.l) : this.reset();})})
js> var encMessage = sjcl.encrypt('password re segura', 'holaaa como estan TODOZZZZ',{count:4096,salt:'tuviejaentanga',ks:256})
js> sjcl.decrypt('password re segura', encMessage)
"holaaa como estan TODOZZZZ"
js> sjcl.decrypt('password re insegura', encMessage)
uncaught exception: CORRUPT: ccm: tag doesn't match
js> var decmessage = sjcl.decrypt('password re insegura', encMessage)
uncaught exception: CORRUPT: ccm: tag doesn't match
js> decmessage
js> decmessage == ""
false
js> decmessage == null
true
js> encMessage
"{\"iv\":\"woN3jDosr527QnMsXd+6Rg==\",\"v\":1,\"iter\":1000,\"ks\":256,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"count\":4096,\"salt\":\"tuviejaentanga==\",\"ct\":\"2xgM+Kt4zm9Kz3NIAL6ui6wdYb5Gnftyd1h95aV5Dmek6w==\"}"
js> var coso = "2xgM+Kt4zm9Kz3NIAL6ui6wdYb5Gnftyd1h95aV5Dmek6w=="
js> sjcl.decrypt('password re segura', encMessage.ct)
sjcl.js:57: TypeError: a is undefined
js> sjcl.decrypt('password re segura', coso)
uncaught exception: INVALID: json decode: this isn't json!
js> sjcl.decrypt('password re segura', encMessage['ct'])
sjcl.js:57: TypeError: a is undefined
js> encMessage['ct']
js> encMessage.ct
js> 
