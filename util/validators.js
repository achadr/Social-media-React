module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors= {};
    if (username.trim() === ''){
        errors.username = 'Username is required';
    }
    if (email.trim() === ''){
        errors.email = 'email is required';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Email adress is not valid'
        }
    }
    if(password === ''){
        errors.password = 'password is required'
    } else if ( password !== confirmPassword){
        errors.confirmPassword = 'Password doesnt not match your confirm password'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (username,password) => {
    const errors = {};
    if (username.trim() === ''){
        errors.username = 'Username is required';
    }    if (password.trim() === ''){
        errors.password = 'password is required';
    } return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}