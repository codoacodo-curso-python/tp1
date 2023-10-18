function validation(){

    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(document.FormFill.Name.value==""){
        document.getElementById('result').innerHTML="Ingresá tu nombre";
        return false;
    }
    else if(document.FormFill.Email.value==""){
        document.getElementById('result').innerHTML="Ingresá tu correo";
        return false;
    }

    else if (!regex.test(document.FormFill.Email.value))
    {
        document.getElementById('result').innerHTML="El correo electrónico no es válido";
        return false;
    }


    else if(document.FormFill.Textarea.value==""){
        document.getElementById('result').innerHTML="Escribí tu consulta";
        return false;
    }
    else{
        popup.classList.add('open-slide');
        return false;
    }

}

var popup = document.getElementById('popup');

function CloseSlide(){
    popup.classList.remove('open-slide');
    document.getElementById("form-fill").reset();
    document.getElementById("result").innerHTML="";
}
