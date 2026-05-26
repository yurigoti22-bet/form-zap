function enviarWhats() {

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  let mensagem =
`Olá! Me chamo ${nome}
Email: ${email}
Telefone: ${telefone}`;

  let numero = "5541999999999";

  let link =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}