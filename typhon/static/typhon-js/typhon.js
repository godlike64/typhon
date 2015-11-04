
var encMessage =sjcl.encrypt(somePassword,message,{count:2048,salt:salt,ks:256});
sjcl.decrypt(key, encMessage) ;
