function cadastrar(){

    emaild = document.getElementById('email').value
    senha = document.getElementById('senha').value
    alert('cadastro feito com sucesso')
    localStorage.setItem(email, senha)

    emaild =  localStorage.getItem(email)
}
function logar(){
    
    if(email == email && senha == senha){
        alert('bem vindo')
    }else{
        alert('Usuario ou Senha incorretos')
    }

}