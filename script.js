
document.getElementById('send').addEventListener('click', function (){
    const cep = document.getElementById('cep');
    const tel = document.getElementById('tel');
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const email = document.getElementById('email');


    function verifyTelLen(tel){
        if (tel.value.length==10 || tel.value.length==11){
            return true;
        }
        else{
            return false;
        }
    }

    function verifyEmail(email){
        const emailV = email.value;
        let re = /\S+@\S+\.\S+/;
        return re.test(emailV);
    }

    /* ------- TEL ----------*/
    if (!tel.checkValidity() || !verifyTelLen(tel)){
        tel.style.borderBottom = '1px solid darkred';
        document.getElementById('telLabel').innerHTML = 'Telefone: <span class="red">Type a valid phone number</span>';
    }
    else{
        tel.style.borderBottom = '1px solid #d9d9d9';
        document.getElementById('telLabel').innerHTML = 'Telefone: </span>';
    }

    /*--------- CEP ------------ */
    if (!cep.checkValidity()){
        cep.style.borderBottom = '1px solid darkred';
        document.getElementById('cepLabel').innerHTML = 'CEP: <span class="red">Type a valid zip code</span>';
    }
    else{
        cep.style.borderBottom = '1px solid #d9d9d9';
        document.getElementById('cepLabel').innerHTML = 'CEP: </span>';
    }

    /*--------- NAME ------------- */
    if (!name.checkValidity()){
        name.style.borderBottom = '1px solid darkred';
        document.getElementById('nameLabel').innerHTML = 'Nome: <span class="red">You need to fill this field</span>';
    }
    else{
        name.style.borderBottom = '1px solid #d9d9d9';
        document.getElementById('nameLabel').innerHTML = 'Nome: </span>';
    }

    /*-------ADDRESS ---------- */
    if (!address.checkValidity()){
        address.style.borderBottom = '1px solid darkred';
        document.getElementById('addressLabel').innerHTML = 'Endereço: <span class="red">You need to fill this field</span>';
    }
    else{
        address.style.borderBottom = '1px solid #d9d9d9';
        document.getElementById('addressLabel').innerHTML = 'Endereço: </span>';
    }

    /*------EMAIL------------*/
    if (!email.checkValidity() || verifyEmail(email)!=true){
        email.style.borderBottom = '1px solid darkred';
        document.getElementById('emailLabel').innerHTML = 'E-mail: <span class="red">Type a valid email address</span>';
    }
    else{
        email.style.borderBottom = '1px solid #d9d9d9';
        document.getElementById('emailLabel').innerHTML = 'E-mail: </span>';
    }

    if(cep.checkValidity() && tel.checkValidity() && verifyTelLen(tel) && name.checkValidity() && address.checkValidity() && email.checkValidity() && verifyEmail(email)==true){
            document.getElementById('titleF').innerHTML = 'Successfully subscribed :)';
        }
    else{
        document.getElementById('titleF').innerHTML = '';
    }
})