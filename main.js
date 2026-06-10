const inputNome = document.getElementById('input-nome');
const inputQuantidade = document.getElementById('input-quantidade');
const btnCadastrar = document.getElementById('btn-cadastrar');
const listaMateriais = document.getElementById('lista-materiais');

btnCadastrar.addEventListener('click', async () => {
    const nomeInformado = inputNome.value;
    const quantidadeInformada = inputQuantidade.value;

    const novoMaterial = {
        nome: nomeInformado,
        quantidade: parseInt(quantidadeInformada)
    };

    
});