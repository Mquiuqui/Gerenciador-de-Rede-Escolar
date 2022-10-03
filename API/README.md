# Etapas após baixar o boilerplate

- yarn (como de costume)

- dentro de others/commands.txt editar o comando de gerar entidades com as credencias do banco de dados que será usado na API

- rodar o comando e colocar as entidades geradas dentro da pasta src/entity/

- chamar as entidades dentro da src/index.ts onde é criada a conexao com bd na property "entities"

- em src/index.ts alterar o tipo de banco de dados na conexao na property "type"         

- em src/modules/acesso/UserController.ts alterar o diretorio da entidade da tabela de usuarios

- criar um .env como base o que esta no arquivo .env.example
