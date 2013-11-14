describe("Decoder", function() {
  it("decodes an encrypted string from the URL", function() {
    //override the getCypherText function because we can't access document.URL directly
    decoder.getCypherText = window.CyptoJS.AES.encrypt("a test string","password").cyphertext.toString();
    expect(decoder.decrypt()).toEqual("a test string");
  });
});
