const inputNome = document.getElementById('input-nome');
const inputQuantidade = document.getElementById('input-quantidade');
const btnCadastrar = document.getElementById('btn-cadastrar');
const listaMateriais = document.getElementById('lista-materiais');

btnCadastrar.addEventListener('click', async () => {
    const nomeInformado = inputNome.value;
    const quantidadeInformada = inputQuantidade.valueAsNumber;

    if (nomeInformado.trim() === '' || isNaN(quantidadeInformada)) {
        alert('Todos os campos são obrigatórios.');
        return;
    }

    const novoMaterial = {
        nome: nomeInformado,
        quantidade: quantidadeInformada
    };

    await fetch('https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoMaterial)
    });

    listaMateriais.innerHTML += `
        <tr>
            <td>${novoMaterial.nome}</td>
            <td>${novoMaterial.quantidade}</td>
        </tr>
    `;

    inputNome.value = '';
    inputQuantidade.value = '';
});

async function consultarMateriais() {
    const resposta = await fetch('https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais');
    const dados = await resposta.json();

    dados.forEach(material => {
        listaMateriais.innerHTML += `
        <tr>
            <td>${material.nome}</td>
            <td>${material.quantidade}</td>
        </tr>
    `;
    });
};

consultarMateriais();