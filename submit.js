// $("signUpForm").submit(function(e) {
//     e.preventDefault();
    
    
// });

function submitForm() {
    var url = "https://api.redywatch.com/interestForm";
    var body = {
        email: document.getElementById("email").value
    };
    $.post(url, body)
    .done(function(data) {
        $("#success").removeClass("hide");
    })
    .fail(function(error) {
        $("#error").removeClass("hide");
    });
}