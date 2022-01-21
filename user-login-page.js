$(document).ready(function(){

    //Email control
    function isEmail(email){
        var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return pattern.test(email);
    }

    //Phone control
    function isPhone(phone){
        var isphone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
        return isphone.test(phone);
    }
    
    
    $('#btn-register').click(function(){

        //user first name and last name control
        if($('#firstName').val().trim()===""){
            $('#firstName').css('border', '1px solid red');
            $('.user-errors').text('*please enter your first name.');
        } 
        else if ($('#lastName').val().trim()===""){
            $('#lastName').css('border', '1px solid red');
            $('.user-errors').text('*please enter your last name.');
        }
        else{
            $('.user-errors').html('');
            $('#lastName').css('border', '1px solid blue');
            $('#firstName').css('border', '1px solid blue');
        }

        //user email control
        if ($('#email').val().trim()===""){
            $('#email').css('border', '1px solid red');
            $('.error-email').text('*please enter your email.')
        }
        else if(isEmail($('#email').val())==false){
            $('#email').css('border', '1px solid red');
            $('.error-email').text('* Please enter a valid e-mail.');
        }
        else{
            $('.error-email').html('');
            $('#email').css('border', '1px solid blue');
        }

        //user phone number control
        if ($('#phone').val().trim()===""){
            $('#phone').css('border', '1px solid red');
            $('.error-phone').text('*please enter your phone.')
        }
        else if(isPhone($('#phone').val())==false){
            $('#phone').css('border', '1px solid red');
            $('.error-phone').text('* Please enter a valid phone. Example:(123 456 7890)');
        }
        else{
            $('.error-phone').html('');
            $('#phone').css('border', '1px solid blue');
        }

        //user new password control
        if ($('#password').val().trim()===""){
            $('#password').css('border', '1px solid red');
            $('.error-password').text('*please enter your password.')
        }
        else{
            $('.error-password').html('');
            $('#password').css('border', '1px solid blue');
        }

        //user confirm password control
        if ($('#repassword').val()!==$('#password').val()){
            $('#repassword').css('border', '1px solid red');
            $('.error-repassword').text('*please make sure your password match.');
        }
        else{
            $('.error-repassword').html('');
            $('#repassword').css('border', '1px solid blue');
        }
        
           

           


           
   });
});