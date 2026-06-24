const inputNome = document.getElementById('input-nome');
const inputQuantidade = document.getElementById('input-quantidade');
const btnCadastrar = document.getElementById('btn-cadastrar');
const listaMateriais = document.getElementById('lista-materiais');
const inputRetirada = document.getElementById('input-retirada');
const inputBusca = document.getElementById('input-busca');
let idMaterialSelecionado = null;
let todosOsMateriais = [];

function resetarTabela() {
    listaMateriais.innerHTML = `
        <tr>
            <th>Material</th>
            <th>Quantidade Atual</th>
            <th>Ações</th>
        </tr>
    `;
}

function renderizarTabela(lista) {
    resetarTabela();
    document.getElementById('total-itens').innerText = lista.length;

    lista.forEach(material => {
        let classeAlerta = '';
        if (material.quantidade < 10) {
            classeAlerta = 'estoque-critico';
        }

        listaMateriais.innerHTML += `
        <tr class="${classeAlerta}">
            <td>${material.nome}</td>
            <td>${material.quantidade}</td>
            <td>
                <button class="btn-baixar btn-acao btn-baixar-estilo" data-id="${material.id}">Baixar</button>
                <button class="btn-excluir btn-acao btn-excluir-estilo" data-id="${material.id}">Excluir</button>
            </td>
        </tr>
        `;
    });
}

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

    try {
        await fetch('https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoMaterial)
        });

        resetarTabela();
        consultarMateriais();

        inputNome.value = '';
        inputQuantidade.value = '';
    } catch (erro) {
        console.error(erro);
        alert('Erro ao cadastrar o material. Verifique sua conexão.');
    }
});

async function consultarMateriais() {
    try {
        const resposta = await fetch('https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais');
        const dados = await resposta.json();

        todosOsMateriais = dados;
        renderizarTabela(todosOsMateriais);

    } catch (erro) {
        console.error(erro);
        alert('Não foi possível carregar os materiais. Verifique sua conexão com a internet.');
    }
}

consultarMateriais();

const meuModal = document.getElementById('modal-retirada');
const btnCancelar = document.getElementById('btn-cancelar-baixa');
const btnConfirmar = document.getElementById('btn-confirmar-baixa');

btnCancelar.addEventListener('click', async () => {
    meuModal.style.display = 'none';
});

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-baixar')) {
        idMaterialSelecionado = event.target.getAttribute('data-id');
        console.log('Clicou em baixar o material com ID:', idMaterialSelecionado);

        meuModal.style.display = 'flex';
    }

    if (event.target.classList.contains('btn-excluir')) {
        const idMaterial = event.target.getAttribute('data-id');
        console.log('Clicou em excluir o material com ID:', idMaterial);

        try {
            await fetch(`https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais/${idMaterial}`, {
                method: 'DELETE'
            });

            console.log('Material deletado do banco com sucesso!');
            consultarMateriais();
        } catch (erro) {
            console.error(erro);
            alert('Não foi possível excluir o material. Verifique sua conexão.');
        }
    }
});

function validarRetirada(estoqueAtual, quantidadeRetirada) {
    if (isNaN(quantidadeRetirada) || quantidadeRetirada <= 0) {
        alert('Por favor, informe uma quantidade válida maior que zero.');
        return false;
    }

    if (quantidadeRetirada > estoqueAtual) {
        alert(`Estoque insuficiente! Você tentou retirar ${quantidadeRetirada}, mas temos apenas ${estoqueAtual} em estoque.`);
        return false;
    }

    return true;
}

btnConfirmar.addEventListener('click', async () => {
    const quantidadeRetirada = inputRetirada.valueAsNumber;

    if (!idMaterialSelecionado) return;

    try {
        const resposta = await fetch(`https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais/${idMaterialSelecionado}`);
        const materialAtual = await resposta.json();

        const ehValido = validarRetirada(materialAtual.quantidade, quantidadeRetirada);

        if (ehValido) {
            const novaQuantidade = materialAtual.quantidade - quantidadeRetirada;

            await fetch(`https://6a29f3f8f59cb8f65f1ddcc3.mockapi.io/api/v1/materiais/${idMaterialSelecionado}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantidade: novaQuantidade })
            });

            meuModal.style.display = 'none';
            inputRetirada.value = '';

            consultarMateriais();

            inputNome.value = '';
            inputQuantidade.value = '';
        }
    } catch (erro) {
        console.error(erro);
        alert('Erro ao processar a baixa do material. Verifique sua conexão.');
    }
});

inputBusca.addEventListener('input', () => {
    const termoBusca = inputBusca.value.toLowerCase();

    const materiaisFiltrados = todosOsMateriais.filter(material =>
        material.nome.toLowerCase().includes(termoBusca)
    );

    renderizarTabela(materiaisFiltrados);
});