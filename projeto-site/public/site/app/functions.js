function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px"
}



function entrar() {
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.email_usuario;
                sessionStorage.nome_usuario_meuapp = json.nome_usuario;

                window.location.href = 'index.html';
                alert('Logado com sucesso');
            });

        } else {
            alert('Usuário não encontrado');
            console.log('Erro de login!');

            response.text().then(texto => {
                console.error(texto);
            });
        }
    });

    return false;
}










// function cadastrar() {
   
// }

function validar_cadastro(){

    let nome_completo = document.getElementById('nomecompleto').value;
    nome_completo = nome_completo.trim();
    let nome_completo_valido = (!nome_completo)

    if(nome_completo_valido){
        alert('Preencher Nome');
        document.getElementById("form_cadastro").method = "";
    }

    let email = document.getElementById("email").value;
    let email_valido = (email.indexOf('@') > -1 && email.indexOf('.') && email.length >= 7);

    if (!email_valido) {
        alert('Digite um email válido');
        document.getElementById("form_cadastro").method = "";
    }

    // VALIDADANDO SENHA

    let senha = document.getElementById("senha").value;
    senha = senha.trim();
    let confirmar_senha = document.getElementById("confirmesenha").value;
    confirmar_senha = confirmar_senha.trim();
    let senha_valida = senha == confirmar_senha;

    if (!senha_valida) {
        alert("A senhas não conferem!");
        document.getElementById("form_cadastro").method = "";

    }

    if (email_valido && senha_valida && !nome_completo_valido) {
        var formulario = new URLSearchParams(new FormData(form_cadastro));
        fetch("/usuarios/cadastrar", {
            method: "POST",
            body: formulario
        }).then(function (response) {
    
            if (response.ok) {
                alert('Cadastrado com sucesso');
                alert('Faça seu login');
                window.location.href = 'index.html';
    
            } else {
    
                console.log('Erro de cadastro!');
                response.text().then(function (resposta) {
                    div_erro.innerHTML = resposta;
                });
            }
        });
    
        return false;
    }

}




