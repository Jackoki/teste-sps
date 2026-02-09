
# ⚙️ Teste SPS - CRUD de Usuários

Este repositório é referente a realização de uma etapa de teste para a criação de usário.


# 📋 Requisitos e Regras de Negócios da Aplicação

• Use o banco fake de usuários que já tá no repositório (pode ser em memória).

• Ter um usuário admin pronto pra usar.

• Crie uma rota de autenticação que gera um token JWT.

• Todas as rotas da API precisam de autenticação:
  
    • Cadastrar usuários (campos: email, nome, type, password).
    
    • Bloquear e-mails repetidos.
  
    • Editar dados de usuários.
  
    • Excluir usuários.
    
• Faça uma página de login (signIn) que conecta com a API.

• Guarde o token de autenticação.

• A interface pode ser simples e funcional, mas capriche na usabilidade e no código limpo.

• Só usuários logados podem:

    • Ver a lista de usuários.

    • Cadastrar novos usuários.

    • Editar ou excluir usuários.



# 📑 Documentação
O projeto contém a documentação das rotas pelo Swagger UI, para isso, basta apenas rodar a aplicação e pesquisar http://localhost:3000/api-docs no navegador.

# 🚀 Como Executar
Para rodar o sistema em sua máquina Windows, é necessário ter instalado:

- Git  
- Node.js (20+)
  
Após isso, podemos instalar as pendências e executar com:
```bash
git clone https://github.com/Jackoki/teste-sps
cd test-sps-server
yarn install
yarn run dev
```

Agora o backend estará sendo executando em: http://localhost:3000


Agora instale as dependências do frontend:
```bash
cd ../test-sps-react
yarn install
yarn run dev
```

Aceite em rodar em outra porta que não seja o 3000 que o frontend estará disponível em: http://localhost:3001
