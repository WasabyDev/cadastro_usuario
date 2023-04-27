function teste(){
    alert("hello world")
}

localStorage.setItem("ADTO-1233", "Bruno")
localStorage.setItem("KIOQ-O123", "soul")
localStorage.setItem("LEOÇ-2415", "Felipe Neto")
localStorage.setItem("LWSO-4795", "Diogo Defante")
localStorage.setItem("SDLA-1233", "dela")

function exibir(){

    var exibir
    var digitado

    digitado =  document.getElementById('coletortxt').value
    exibir = localStorage.getItem(digitado)
    alert(exibir)
}

function cadastrar(){
    placa = document.getElementById('placa').value
    proprietario = document.getElementById('proprietario').value

    localStorage.setItem(placa, proprietario)
}