import $ from 'jquery'

export default function(loginData){
    console.log(window.hostAddress + '/register')
    var thePromise = $.ajax({
        method: "POST",
        url: window.hostAddress + '/register',
        data: loginData
    })
    
    return{
        type: "REGISTER",
        payload: thePromise
    }
}