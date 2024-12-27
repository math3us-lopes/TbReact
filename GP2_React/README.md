
# Urban Threads - E-commerce de Roupas
Urban Threads é uma aplicação de e-commerce desenvolvida como projeto final da disciplina de Desenvolvimento Web. O objetivo deste projeto é proporcionar uma experiência de compra completa, desde a navegação pelos produtos até a finalização do pedido, utilizando o framework React e integração com uma API REST.

## Visão Geral do Projeto
Este projeto simula uma loja online de roupas, permitindo que os usuários naveguem, filtrem produtos, adicionem itens ao carrinho e finalizem suas compras. O foco está em uma interface amigável e funcionalidades essenciais para um e-commerce, garantindo que o usuário tenha uma experiência de compra fluida e intuitiva.

-------------------------------------------------------------------------

## Funcionalidades

1. **Navegação por Categoria**  
   **Descrição**: A plataforma oferece um menu de navegação no topo da página que permite aos usuários explorar produtos de acordo com suas categorias: "Roupas Masculinas", "Roupas Femininas", "Roupas Infantis" e "Calçados".  
   **Objetivo**: Facilitar a busca por produtos específicos, proporcionando uma experiência de navegação intuitiva e organizada.  
   **Como Funciona**: O usuário clica em uma das categorias no menu superior, e a página exibe apenas os produtos que pertencem àquela categoria, reduzindo o tempo de busca e aumentando a conveniência.

---

2. **Exibição de Destaques e Promoções**  
   **Descrição**: Na página inicial, é exibido um banner de destaque visual com promoções e novos lançamentos, como a "Nova Coleção - 30% OFF".  
   **Objetivo**: Atrair a atenção do usuário para produtos em promoção e novas coleções, incentivando a compra.  
   **Como Funciona**: O banner ocupa um espaço de destaque no topo da página inicial. Ao clicar no botão "Veja Mais", o usuário é redirecionado para a seção de produtos em promoção ou nova coleção, facilitando o acesso rápido a esses itens.

---

3. **Listagem de Produtos**  
   **Descrição**: Os produtos são apresentados em uma grade visual, onde cada item contém uma imagem, o nome, e o preço.  
   **Objetivo**: Proporcionar uma visão geral rápida dos produtos disponíveis, facilitando a escolha do usuário.  
   **Como Funciona**: O usuário pode rolar a página e visualizar os produtos organizados. Ao clicar em um produto, ele acessa informações detalhadas na seção de detalhes do produto. Essa funcionalidade foi desenvolvida com o objetivo de garantir uma experiência visual agradável e intuitiva.

---

4. **Detalhes do Produto**  
   **Descrição**: Ao clicar em qualquer produto na listagem, o usuário vê uma janela modal com mais detalhes, incluindo imagem ampliada, descrição do produto, tamanhos disponíveis (P, M, G, GG) e um botão para adicionar ao carrinho.  
   **Objetivo**: Fornecer informações completas sobre o produto para que o usuário possa tomar uma decisão de compra informada.  
   **Como Funciona**: A modal de detalhes permite que o usuário visualize a imagem em destaque e escolha o tamanho desejado antes de adicionar ao carrinho. Essa experiência imersiva oferece uma interface simplificada, mas completa, aumentando a confiança e o interesse do usuário pelo produto.

---

5. **Carrinho de Compras**  
   **Descrição**: O carrinho de compras, acessível a partir do menu superior, exibe os itens selecionados, com a opção de alterar a quantidade ou remover itens, bem como o valor total do pedido.  
   **Objetivo**: Permitir ao usuário revisar, ajustar e gerenciar seus itens antes de finalizar a compra.  
   **Como Funciona**: O usuário pode acessar o carrinho para visualizar todos os itens que adicionou. Pode ajustar a quantidade usando botões incrementais e observar a atualização do valor total em tempo real. Também existem opções para esvaziar o carrinho ou finalizar a compra, garantindo uma experiência de compra fluida.

---

6. **Finalização de Compra**  
   **Descrição**: Ao clicar em "Finalizar Compra" no carrinho, o usuário é redirecionado para a página de checkout onde ele pode confirmar os itens e concluir a compra.  
   **Objetivo**: Concluir o processo de compra de maneira simples e segura.  
   **Como Funciona**: Após revisar o carrinho, o usuário pode confirmar seu pedido e proceder para o pagamento. A interface de finalização é projetada para ser direta e objetiva, minimizando os passos para a conclusão da compra.

---

7. **Histórico de Pedidos**  
   **Descrição**: Na seção de perfil do usuário, há uma lista de pedidos realizados, onde o usuário pode visualizar detalhes como número do pedido, valor total e itens comprados.  
   **Objetivo**: Permitir ao usuário acompanhar suas compras passadas e manter um histórico de transações.  
   **Como Funciona**: Cada pedido é exibido com seu respectivo número de identificação, total pago e itens incluídos, criando um registro fácil de acessar e visualizar. Isso também aumenta a confiabilidade e permite que o usuário acompanhe pedidos antigos.

---

8. **Cadastro e Login**  
   **Descrição**: Novos usuários podem criar uma conta preenchendo um formulário com nome de usuário, e-mail e senha. Usuários existentes podem fazer login com seu e-mail e senha.  
   **Objetivo**: Permitir que o usuário personalize sua experiência, salve o histórico de pedidos e acesse o carrinho de qualquer dispositivo.  
   **Como Funciona**: A interface apresenta dois formulários distintos para cadastro e login. Durante o cadastro, o usuário preenche os dados necessários e, ao finalizar, ganha acesso ao sistema. Para fazer login, basta inserir o e-mail e senha cadastrados. A opção "Manter-me logado" também está disponível, garantindo conveniência para acessos futuros.

---

9. **Newsletter e Contato**  
   **Descrição**: Na página principal, existe um campo para cadastro de e-mail onde o usuário pode inscrever-se para receber novidades e promoções. Também há um botão de contato via WhatsApp.  
   **Objetivo**: Manter o usuário engajado com a loja, oferecendo atualizações sobre promoções e novos produtos, e fornecer um canal direto de atendimento ao cliente.  
   **Como Funciona**: O usuário insere seu e-mail e clica em "Inscrever-se" para receber atualizações. O botão de WhatsApp permite contato direto para esclarecer dúvidas ou receber suporte, reforçando o compromisso com um bom atendimento ao cliente.


-------------------------------------------------------------------------

## Tecnologias utilizadas

* [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
* [Vite](https://vitejs.dev/) -  Ferramenta de build que oferece um ambiente de desenvolvimento rápido para aplicações em JavaScript.
* [React Router Dom](https://reactrouter.com/) - Biblioteca de roteamento para React, utilizada para navegação entre as páginas.
* [Axios](https://axios-http.com/) - Cliente HTTP para realizar as requisições à API REST.
* [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript utilizado no backend.
* [Postman](https://www.postman.com/) - Ferramenta para testar e documentar as requisições à API durante o desenvolvimento.
* [Visual Studio Code](https://code.visualstudio.com/download) - Editor de código fonte utilizado para desenvolvimento do projeto.
* [Canva](https://www.canva.com/) - Utilizado para criação de elementos visuais e imagens do projeto.

-------------------------------------------------------------------------

## Instalação e Configuração

Para executar o projeto **Urban Threads** localmente, siga os passos abaixo.

### Pré-requisitos

- **Node.js** (versão 14 ou superior).
- **Git**: Para clonar o repositório.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **VSCode** (ou outro editor de código).

### Passo a Passo para Instalação

1. **Clonar o Repositório**

   Abra o terminal e execute o comando:

   ```bash
   git clone https://github.com/lucasarasa/GP2_React.git
   ```

   Navegue até a pasta do projeto:

   ```bash
   cd GP2_React
   ```

2. **Instalar Dependências**

   Instale as dependências necessárias para rodar o projeto:

   ```bash
   npm install
   ```

3. **Configurar o Servidor JSON**

   Este projeto utiliza um arquivo JSON como banco de dados temporário para armazenar usuários, produtos e pedidos. O arquivo `db.txt` contém esses dados. Você pode configurar o JSON Server (caso esteja usando) ou, se for integrar uma API, ajustar conforme necessário.

4. **Iniciar o Servidor de Desenvolvimento**

   Inicie o ambiente de desenvolvimento com Vite:

   ```bash
   npm run dev
   ```

   O Vite iniciará o servidor e exibirá o link local para acessar o projeto (geralmente http://localhost:5173).

5. **Testar a API com o Postman**

   Use o Postman para testar as rotas da API, caso esteja integrado. Importe as rotas e endpoints conforme o desenvolvimento.

6. **Configuração do JSON Server (Opcional)**

   Caso utilize o JSON Server para simular uma API local, você 
   pode instalar e rodar o JSON Server. Certifique-se de ter o arquivo db.json na mesma pasta do projeto:

   ```bash
   npm install -g json-server
   ```

  Isso iniciará o JSON Server em http://localhost:3000, onde você poderá acessar os dados de usuários, produtos e pedidos definidos em db.json.

-------------------------------------------------------------------------

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Veja o arquivo `LICENSE` para mais detalhes.


-------------------------------------------------------------------------

## Autores

* [Aline Magalhães](https://github.com/AlineMG14)
* [Daniele Carius](https://github.com/Daniele-carius)
* [João Gabriel](https://github.com/Joaogabrielgabry)
* [Lucas Sarasa](https://github.com/lucasarasa)
* [Luan Souza](https://github.com/LuanSouza7)
* [Matheus Lopes](https://github.com/math3us-lopes)
* [Yuri Campos](https://github.com/YuriCampos889)
