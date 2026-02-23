const email = document.getElementById("email")
const senha = document.getElementById("senha")

const form =  document.querySelector(".form-card")


form.addEventListener("submit", function(event){
    event.preventDefault()
    const emaildigitado = email.value
    const senhadigitada = senha.value
    const emailcerto = "jorgefilho19@gmail.com"
    const senhacerta = "12345678"
    console.log(email.value)
    console.log(senha.value)
if(senhadigitada.length < 8){
    alert("A senha precisa ter 8 caracteres!")
    return;
}

if (emaildigitado === emailcerto && senhadigitada === senhacerta){
    window.location.href = "paginainicial.html" 
}else{
   alert("Senha ou e-mail estão errados, digite novamente")
   email.value=""
   senha.value=""

}


})