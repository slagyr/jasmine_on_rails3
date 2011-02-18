describe("CleanCoders", function()
{

    beforeEach(function()
    {
        loadFixtures("checkout.html");
    });

    it("has form", function()
    {
        expect($('form')[0].method).toEqual("post");
    });

    it("fills in the form", function()
    {
        $('#cardholder-first-name-input').text("Micah");
        $('#cardholder-last-name-input').text("Martin");
        $('#cart-type-input').val("Amex");

        expect($('#cardholder-first-name-input').text()).toEqual("Micah");
        expect($('#cardholder-last-name-input').text()).toEqual("Martin");
        expect($('#cart-type-input').val()).toEqual("Amex");
    });


});