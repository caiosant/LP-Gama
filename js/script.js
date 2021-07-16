function countDown() {
    const dateEnd = new Date("Nov 16, 2021 00:00:00").getTime();
    let now = new Date().getTime();

    let distance = dateEnd - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("clock").innerHTML = `${days} dias ,${hours} horas, ${minutes} minutos e ${seconds} segundos;

    setTimeout(countDown, 1000);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "";
      }
};

countDown();

function save() {

    let name = document.getElementById("nomesobrenome").value;
    let email = document.getElementById("email").value;

    let data = {
        name,
        email,
    };

    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData)

    alert("Cadastro realizado com sucesso! Logo você receber as novidades")
};