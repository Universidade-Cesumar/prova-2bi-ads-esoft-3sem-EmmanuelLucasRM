# 🏥 Almoxarifado de Materiais de Saúde

> **🔴 ACESSO AO SISTEMA AO VIVO:** > 👉 **[CLIQUE AQUI PARA TESTAR A APLICAÇÃO](https://seu-usuario.github.io/seu-repositorio/)** 👈  
*(Lembre-se de substituir o link acima pelo link real do seu GitHub Pages)*

Sistema web para controle e gerenciamento de estoque de insumos hospitalares, desenvolvido para otimizar o dia a dia da equipe de enfermagem.

---

## 🏁 Sprint 1: Fundação do Sistema e Integração com API

Nesta primeira sprint, focamos na construção da interface base e na persistência de dados em nuvem.

### 🚀 Funcionalidades Desenvolvidas
* **📥 Cadastro de Materiais:** Permite inserir o nome do material e a quantidade atual.
* **🌐 Persistência em Nuvem (MockAPI):** Integração com API REST utilizando os métodos `GET` (para listar) e `POST` (para salvar) os dados permanentemente.
* **✨ Atualização Instantânea:** Os novos materiais aparecem na tabela imediatamente após o cadastro, sem necessidade de recarregar a página.

---

## 🏁 Sprint 2: Controle de Estoque Avançado e Refatoração Visual

Nesta segunda sprint, avançamos na manipulação de dados na API com foco na segurança das operações de estoque e no aprimoramento da experiência visual do usuário.

### 🚀 Funcionalidades Desenvolvidas
* **📉 Baixa de Materiais (Modal):** Implementação de uma janela modal centralizada via `Flexbox` para informar a quantidade a ser retirada do estoque.
* **🛡️ Validação de Retirada:** Regra de negócio que impede saídas com valores negativos, inválidos ou que superem a quantidade disponível em estoque.
* **🗑️ Exclusão de Itens:** Integração do método `DELETE` para remover permanentemente os materiais direto da base de dados através da tabela.
* **🔄 Sincronização e Métodos PUT:** Atualização parcial dos dados (quantidade) via método `PUT`, garantindo consistência e recarregando a tabela de forma dinâmica.
* **🎨 Identidade Visual e UI:** Botões de ações estilizados com cores intuitivas (azul para ações principais e vermelho para perigo) e efeitos de transição (`hover`) ao passar o mouse.

---

## 🏁 Sprint 3: Dashboard, Busca Reativa e Resiliência

Nesta sprint final, o foco foi a entrega do produto maduro: implementamos inteligência de busca, monitoramento de escassez, proteção contra quedas de rede e a publicação da aplicação ao vivo.

### 🚀 Funcionalidades Desenvolvidas
* **🔍 Busca ao Vivo (`#input-busca`):** Filtro de insumos reativo ao evento `input`, re-renderizando a tabela instantaneamente a cada letra digitada através do método `.filter()`.
* **📊 Painel de Totalização (`#total-itens`):** Contador dinâmico atrelado ao tamanho do array em exibição, refletindo o total de itens cadastrados (ou filtrados) em tempo real.
* **🚨 Alerta de Estoque Crítico (`.estoque-critico`):** Injeção automatizada de classe e destaque visual (fundo avermelhado) em produtos cujo saldo caia para menos de 10 unidades.
* **🛡️ Tratamento de Exceções (`try/catch`):** Encapsulamento de todos os verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`) para capturar quedas de internet ou falhas no servidor, trocando o congelamento de tela por feedbacks visuais amigáveis.
* **☁️ Deploy e Publicação:** Disponibilização do ambiente de produção contínuo através do GitHub Pages.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página, formulários e tabela.
* **CSS3:** Estilização moderna e limpa utilizando variáveis de cores (`:root`) e layout flexível (`Flexbox`).
* **JavaScript (ES6+):** Manipulação assíncrona do DOM (`async/await`) e consumo de API com `fetch`.
* **MockAPI:** Banco de dados simulado na nuvem para persistência dos dados.

---