let userName = prompt("who's there? ",'');
if (userName == null || userName == ''){
    alert("cancelled")
    window.close()
}
else if(userName == "Admin"){
    let pass = prompt("enter the password",'');
    if (pass == "TheMaster"){
        alert("you're welcome!")
    }
    else if (pass == null || pass == ''){
    alert("cancelled")
    window.close()
    }
    else{
    alert("I don't know you!")
    window.close()
    }
}

else{
    alert("I don't know you!")
    window.close()
}
