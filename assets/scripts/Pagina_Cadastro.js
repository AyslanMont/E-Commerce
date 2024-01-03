function validarCadastro(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirme_senha = document.getElementById('cofirme_senha').value;
    let quantidadeDigitos = senha.replace().length;

    let verificar_email = /^[a-zA-Z0-9._-]+@ifrn\.edu\.br$/;
    let verificar_email2 = /^[a-zA-Z0-9._-]+@hotmail\.com$/;
    let verificar_email3 = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!verificar_email.test(email) & (!verificar_email2.test(email) & (!verificar_email3.test(email)))) {
      alert("Por favor, insira um email válido.");
      return false;
    }
    else if (nome ==""){
        alert ('Inisira um Nome')
        return false;
    }
    else if (quantidadeDigitos < 8){
        alert ('Senha Menor que 8')
        return false;
    }
    else if (confirme_senha !== senha){
        alert('Senha incorreta')
        return false;
    }
    else{
        alert('Conta Criada com sucesso')
        window.location.href = 'Pagina_inicial.html';
    }

}