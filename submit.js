// $("signUpForm").submit(function(e) {
//     e.preventDefault();
    
    
// });

function submitForm() {
    var url = "http://localhost:5000/interestForm";
    var body = {
        email: document.getElementById("email").value
    };
    $.post(url, body)
    .done(function(data) {
        console.log(data);
    });
}
