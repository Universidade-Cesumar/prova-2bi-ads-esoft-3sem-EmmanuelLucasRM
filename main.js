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
            <td>
            <button class="btn-baixar" data-id="${novoMaterial.id}">Baixar</button>
            <button class="btn-excluir" data-id="${novoMaterial.id}">Excluir</button>
        </td>
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
            <td>
            <button class="btn-baixar" data-id="${material.id}">Baixar</button>
            <button class="btn-excluir" data-id="${material.id}">Excluir</button>
        </td>
        </tr>
    `;
    });
};

consultarMateriais();

const meuModal = document.getElementById('modal-retirada');
const btnCancelar = document.getElementById('btn-cancelar-baixa');
const btnConfirmar = document.getElementById('btn-confirmar-baixa');

btnCancelar.addEventListener('click', async () => {
    meuModal.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-baixar')) {
        const idMaterial = event.target.getAttribute('data-id');
        console.log('Clicou em baixar o material com ID:', idMaterial);
        
        meuModal.style.display = 'block';
    }

    if (event.target.classList.contains('btn-excluir')) {
        const idMaterial = event.target.getAttribute('data-id');
        console.log('Clicou em excluir o material com ID:', idMaterial);
    }
});