# API de Produtos (ASCII_Products)

Esta é uma API RESTful completa para gerenciamento de produtos, desenvolvida em Node.js. A API permite realizar todas as operações CRUD (Criar, Ler, Atualizar, Deletar) de produtos, salvando os dados em um banco de dados MySQL.

O projeto utiliza Node.js, Express para o servidor, Sequelize como ORM para se comunicar com o banco de dados, e segue uma arquitetura organizada em Controllers, Services, Models e DTOs (Data Transfer Objects) para garantir um código limpo e escalável.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução do servidor.
* **Express**: Framework para gerenciamento de rotas e servidor web.
* **Sequelize**: ORM (Object-Relational Mapper) para interagir com o banco de dados MySQL.
* **MySQL**: Banco de dados relacional (utilizado em nuvem no Railway).
* **Render**: Plataforma de nuvem utilizada para o deploy da API e do Frontend.
* **CORS**: Habilitado para permitir que aplicações frontend consumam a API.

---

## 💻 Como Rodar Localmente

Siga estes passos para configurar e rodar o projeto no seu próprio computador.

### 1. Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 16 ou superior)
* (Opcional) Um servidor de banco de dados MySQL local (ex: XAMPP, WAMP).
* (Opcional) Um cliente de API como o [Postman](https://www.postman.com/) para testes.

### 2. Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SeuUsuario/SeuRepositorio.git](https://github.com/SeuUsuario/SeuRepositorio.git)
    cd SeuRepositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Banco de Dados (Importante!)**

    Este repositório, por ser um projeto de estudos, já está configurado para se conectar diretamente ao banco de dados em nuvem (Railway) que é usado pela aplicação online. As credenciais estão visíveis no arquivo `db/conn.js`.

    **Isso significa que você não precisa configurar um banco de dados local.** Ao iniciar o projeto, ele tentará se conectar ao mesmo banco de dados da aplicação que está no ar.

    * **(Opcional) Se preferir usar um Banco Local:**
        Caso você queira testar com seu próprio banco de dados MySQL local, basta alterar o arquivo `db/conn.js` para usar suas credenciais locais:

        ```javascript
        // db/conn.js
        const { Sequelize } = require('sequelize');

        // Altere para suas credenciais locais
        const sequelize = new Sequelize('SEU_BANCO_LOCAL', 'SEU_USUARIO', 'SUA_SENHA', {
            host: 'localhost', //
            dialect: 'mysql' 
        });

        // ... (resto do arquivo) ...
        module.exports = sequelize;
        ```

4.  **Inicie o servidor:**
    ```bash
    node index.js
    ```
    Se você manteve a conexão em nuvem, deverá ver "Conexão com o banco de dados realizada com sucesso!".

5.  **Testando com o Postman Localmente**

    Com o servidor rodando na sua máquina (após o `node index.js`), você pode usar o Postman para enviar requisições.

    * **URL Base Local:** `http://localhost:3000/api/products`
    * **Exemplo (GET):** Faça uma requisição `GET` para `http://localhost:3000/api/products` para ver todos os produtos.
    * **Exemplo (POST):** Faça uma requisição `POST` para `http://localhost:3000/api/products` com um JSON no "Body" para criar um novo produto.

    (Veja a seção "Referência de Endpoints" abaixo para todos os detalhes).

5.1. Ou se preferir pode testar direto no navegador.

---

## ☁️ Como Utilizar Online

A aplicação já está hospedada, se preferir:

### 1. Pela Interface Web (Frontend)

Você pode acessar e interagir com a API através da interface visual (frontend) que está hospedada em:

➡️ **https://viewparaaapi.onrender.com**

Esta interface foi criada por IA somente para fins de testa a API, e já está configurada para isto (`https://api-products-xhhg.onrender.com`) e permite criar, listar, editar e deletar produtos de forma visual.

### 2. Pela API Diretamente (Postman na Nuvem)

Você pode usar o Postman (ou outra ferramenta) para se conectar diretamente à API que está na Render.

**URL Base da API:** `https://api-products-xhhg.onrender.com/api/products`

---

## 📚 Referência de Endpoints da API

Use esta referência para testar tanto localmente (`http://localhost:3000/api/products`) quanto online (`https://api-products-xhhg.onrender.com/api/products`).

---

**[GET] Listar todos os produtos**
* **URL:** `/`
* **Exemplo de Resposta (200):**
    ```json
    [
        {
            "id": 1,
            "title": "Produto Exemplo",
            "price": 99.9,
            "category": "Eletrônicos"
        }
    ]
    ```

---

**[POST] Adicionar um novo produto**
* **URL:** `/`
* **Corpo (Body) - JSON:**
    ```json
    {
        "title": "Produto Novo",
        "price": 120.50,
        "category": "Roupas"
    }
    ```
* **Exemplo de Resposta (200):**
    ```json
    {
        "message": "Nome Produto Novo com o preço de 120.5 na categoria Roupas foi criada com sucesso!"
    }
    ```

---

**[GET] Buscar um produto por ID**
* **URL:** `/:id` (ex: `/1`)
* **Exemplo de Resposta (200):**
    ```json
    {
        "id": 1,
        "title": "Produto Exemplo",
        "price": 99.9,
        "category": "Eletrônicos"
    }
    ```

---

**[PUT] Atualizar um produto por ID**
* **URL:** `/:id` (ex: `/1`)
* **Corpo (Body) - JSON:**
    ```json
    {
        "title": "Nome Atualizado",
        "price": 150.00,
        "category": "Categoria Nova"
    }
    ```
* **Exemplo de Resposta (200):**
    ```json
    {
        "message": "Produto com id 1 foi atualizado com sucesso! Novo nome: Nome Atualizado, Novo preço: 150, Nova categoria: Categoria Nova"
    }
    ```

---

**[DELETE] Deletar um produto por ID**
* **URL:** `/:id` (ex: `/1`)
* **Exemplo de Resposta (200):**
    ```json
    {
        "message": "Produto com id 1 foi deletado com sucesso!"
    }
    ```
