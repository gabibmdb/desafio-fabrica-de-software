function alertaMensagem()
{
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(email))

        {
        alert("Digite um email válido");
        }
    
    if (email == "" || senha == "") {
        alert("Campos obrigatórios vazios");
        return false;
    }

}