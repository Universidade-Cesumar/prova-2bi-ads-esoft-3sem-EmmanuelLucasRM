# 🏥 Almoxarifado de Materiais de Saúde

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

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página, formulários e tabela.
* **CSS3:** Estilização moderna e limpa utilizando variáveis de cores (`:root`) e layout flexível (`Flexbox`).
* **JavaScript (ES6+):** Manipulação assíncrona do DOM (`async/await`) e consumo de API com `fetch`.
* **MockAPI:** Banco de dados simulado na nuvem para persistência dos dados.

---
