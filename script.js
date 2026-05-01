function fazerLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    erro.style.display = "none";

    if (usuario === "" || senha === "") {
        erro.textContent = "Preencha todos os campos!";
        erro.style.display = "block";
        return;
    }

    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
        erro.textContent = "Usuário ou senha incorretos!";
        erro.style.display = "block";
        return;
    }

    window.location.href = "home.html";
}