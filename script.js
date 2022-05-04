$(document).ready(function(){
    $.validator.addMethod("pwcheck", function(value) {
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
            &&
            /[A-Z]/.test(value) // has a uppercase letter
            &&
            /\d/.test(value); // has a digit
    }, "Please ensure your password contains an uppercase letter, number and symbol and is between 8 & 15 characters.");

    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                 minlength:4 

            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6,
                
                pwcheck:true
            },
            passwordConfirm:{
                required:true,
                minlength:6,
                equalTo:'#password'
            },
            date:{
                required:true

            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }


        },
        messages:{
            fname:{
                required:'enter first name',
                minlength:'enter atleast 4 characters'
            }
        },
      

       
     
    })
   

})