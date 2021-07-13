window.onload = function() {
    const now = new Date(); // Data de hoje
    const future = new Date('2021-11-26 03:00:00'); // Outra data no passado
    const diff = (future - now);
        
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    let dayMessage = document.getElementById("dias");
    dayMessage.innerText = `Faltam apenas ${days} dias para a nossa Black Friday`;
}

function save() {

    user = document.getElementById("nomesobrenome").value + ";" + document.getElementById("email").value;

    localStorage.setItem("lead",user)

    alert("Cadastro realizado com sucesso! Logo você receber as novidades")
}
