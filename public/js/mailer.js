$(document).ready(function () {

    let formMail = document.forms.sendEmail;
    let tel = formMail.elements.tel;
    let email = formMail.elements.email;
    let message = formMail.elements.message;
    let toastHTML = '<span>Заполните все поля!</span>';

    $('.modal').modal();

     function submitForm(event) {
         event.preventDefault();
         $.ajax({
             method: "POST",
             url: "/contacts",
             data: {tel: tel.value, email: email.value, message: message.value}
         })
             .done(function (data) {
                 if (data.status === 1) {
                     $('#modal1').modal('open');
                     formMail.reset();
                 }
                 if (data.status === 2) {
                     M.toast({html: toastHTML});
                 }

             })
             .fail(function (data) {
                 $('#modal2').modal('open');
             })
     }

    formMail.addEventListener("submit", submitForm);

});

