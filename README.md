# Projeto Front-end Online Store

Bem-vindo ao projeto Front-end Online Store! Este projeto é parte da avaliação do curso da escola Trybe, onde eu e minha equipe criamos uma versão simplificada de uma loja online, integrando a API do Mercado Livre e implementando funcionalidades essenciais. A seguir, você encontrará informações sobre como configurar, executar e contribuir para este projeto.

## Sumário

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Instruções de Configuração](#instruções-de-configuração)
3. [Funcionalidades Implementadas](#funcionalidades-implementadas)
4. [Como Contribuir](#como-contribuir)

## Sobre o Projeto

Neste projeto, desenvolvemos uma aplicação de loja online com funcionalidades que permitem aos usuários buscar, visualizar detalhes, adicionar ao carrinho, e avaliar produtos. Utilizamos métodos ágeis, Kanban e Scrum para organizar nosso trabalho em equipe, aplicando as habilidades adquiridas no módulo de Front-end.

## Instruções de Configuração

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/LarissaSimoes/frontend_online_store.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd frontend_online_store
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Funcionalidades Implementadas

### 1. Módulo de Acesso à API do Mercado Livre
   - Implementação do acesso à API do Mercado Livre para obtenção de dados de produtos.

### 2. Página de Listagem de Produtos
   - Criação da tela principal de listagem de produtos.
   - Adição de campo de busca para filtrar produtos por termos e categorias.

### 3. Página do Carrinho de Compras
   - Implementação da tela de carrinho de compras.
   - Adição de botão na tela principal para acessar o carrinho.

### 4. Listagem de Categorias
   - Exibição das categorias disponíveis na API do Mercado Livre na tela principal.

### 5. Busca de Produtos por Termos
   - Implementação da lógica de busca de produtos por termos na API do Mercado Livre.

### 6. Filtragem por Categoria
   - Possibilidade de listar produtos de uma categoria específica na tela principal.

### 7. Detalhes do Produto
   - Criação da página de detalhes de um produto, exibindo informações essenciais.
   - Adição de botão para adicionar o produto ao carrinho.

### 8. Adição ao Carrinho na Listagem de Produtos
   - Permite adicionar produtos ao carrinho diretamente da tela principal.

### 9. Adição ao Carrinho na Página de Detalhes
   - Habilita a adição de produtos ao carrinho a partir da tela de detalhes do produto.

### 10. Visualização e Manipulação do Carrinho
   - Exibição da lista de produtos adicionados ao carrinho.
   - Possibilidade de ajustar a quantidade e remover produtos do carrinho.

### 11. Avaliação de Produtos
   - Adição de formulário na tela de detalhes para avaliar e comentar sobre um produto.
   - Validação de e-mail e nota antes de enviar a avaliação.

### 12. Persistência de Avaliações
   - Renderização das avaliações na tela de detalhes mesmo após o recarregamento da página.

### 13. Quantidade no Ícone do Carrinho
   - Exibição da quantidade de itens no carrinho ao lado do ícone em todas as telas.

## Como Contribuir

Sinta-se à vontade para contribuir com este projeto! Para isso, siga as etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua contribuição: `git checkout -b sua-feature`.
3. Faça as alterações desejadas.
4. Commit e envie as alterações: `git commit -m 'Adiciona nova feature' && git push origin sua-feature`.
5. Crie um Pull Request explicando suas alterações.
