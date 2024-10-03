async function character() {
    let response = await fetch('https://rickandmortyapi.com/api/character/2');
    let personagem = await response.json();
    return personagem;
}

async function localizacao() {
    let response = await fetch('https://rickandmortyapi.com/api/location/2');
    let local = await response.json();
    return local;
}

async function episodio() {
    let response = await fetch('https://rickandmortyapi.com/api/episode/28');
    let capitulo = await response.json();
    return capitulo;
}

async function loadCharacter() {
    const personagem = await character();
    document.getElementById('character').innerHTML = `
        <h2>Personagem: ${personagem.name}</h2>
        <p>Espécie: ${personagem.species}</p>
        <p>Gênero: ${personagem.gender}</p>
        <p>Status: ${personagem.status}</p>
        <img src="${personagem.image}" alt="${personagem.name}" width="100">
    `;
}

async function loadLocation() {
    const local = await localizacao();
    document.getElementById('location').innerHTML = `
        <h2>Localização: ${local.name}</h2>
        <p>Tipo: ${local.type}</p>
        <p>Dimension: ${local.dimension}</p>
    `;
}

async function loadEpisode() {
    const capitulo = await episodio();
    document.getElementById('episode').innerHTML = `
        <h2>Episódio: ${capitulo.name}</h2>
        <p>Temporada: ${capitulo.season}</p>
        <p>Data de Lançamento: ${capitulo.air_date}</p>
    `;
}