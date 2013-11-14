describe("Decoder", function() {
  it("decodes an encrypted string from the URL", function() {
    // override the getCypherText and getPassword functions because
    // we can't access document.URL directly
    // and we can't ask the user for interaction
    decoder.getCypherText = function() { decoder.cypherText = CryptoJS.AES.encrypt("a test string","password"); };
    decoder.getPassword   = function() { decoder.password = "password"; };
    expect(decoder.decrypt()).toEqual("a test string");
  });
});
