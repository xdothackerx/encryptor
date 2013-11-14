var js = document.createElement("script");
var jsFilePath = "http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js";
js.type = "text/javascript";
js.src = jsFilePath;

document.head.appendChild(js);

var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value;
  },
  getPassword: function() {
    this.password = prompt("Enter your password");
  },
  setUrl: function() {
    this.url = document.URL + "decode.html?" + this.encrypt();
  },
  replaceMessageWithUrl: function () {
    document.getElementById('message').value = this.url;
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password);
    console.log("Verified: " +
        CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8));
      return cypher;
  },
  protect: function() {
    console.log("protecting!");
    this.setMessage();
    this.getPassword();
    this.setUrl();
    this.replaceMessageWithUrl();
  }
};
