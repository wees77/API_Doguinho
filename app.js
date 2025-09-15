'use strict';

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "success") {
            mostrarImagens(data.message);
        } else {
            alert("Raça não encontrada. Tente outra!");
            document.getElementById('resultado').innerHTML = '';
        }
    } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        alert("Erro na busca. Verifique sua conexão.");
    }
}

function buscarDog() {
    const raca = document.getElementById("inputRaca").value.trim().toLowerCase();
    if (raca === "") {
        alert("Digite uma raça!");
        return;
    }

    document.getElementById('resultado').innerHTML = "<p>Carregando imagens...</p>";
    buscarImagens(raca);
}

function mostrarImagens(listaDeUrls) {
    const div = document.getElementById('resultado');
    div.innerHTML = '';
    listaDeUrls.slice().forEach(url => {
        const img = document.createElement("img");
        img.src = url;
      
        div.appendChild(img);
    });
}

