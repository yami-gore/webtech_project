function fn(){
    var a=document.getElementById("uname");
    var b=document.getElementById("pass");
    if(a.value.trim()=="" && b.value.trim()=="")
    {
        //username and password are required
        document.getElementById("unameh6").innerHTML="username is required";
        document.getElementById("passh6").innerHTML="password is required";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        return false;
    }
    else if(a.value.trim()=="")
    {
        document.getElementById("unameh6").innerHTML="username is required";
        a.style.border="1px solid red";
        return false;
    }
    else if(b.value.trim()=="")
    {
        document.getElementById("passh6").innerHTML="password is required";
        b.style.border="1px solid red";
        return false;
    }
    else if(a.value.trim()=="yamini" && b.value.trim()=="gore") 
    {
        alert("username and password are matching");
        return true;
    }
    else if(a.value.trim()=="vinay" && b.value.trim()=="krishna") 
    {
        document.getElementById("btnh6").innerHTML="username and password are matching";
        return true;
    }
    else 
    {
        document.getElementById("btnh6").innerHTML="username and password are not matching";
        return false;

    }

}