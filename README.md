Desafio de Desenvolvedor Full Stack do Instituto Brasileiro de Biotecnologia e Inovação

# Backend

A estrutura do projeto é esta:
- **`app/`**: Contém o código principal da aplicação FastAPI, incluindo definições de modelos, operações de CRUD, esquemas de dados e configuração do banco de dados.
- **`migrations/`**: Diretório para as migrações feitas pelo Alembic.
- **`requirements.txt`**: Lista de dependências necessárias para executar o projeto.
- - **`alembic.ini`**: Arquivo relacionado as configurações do alembic.
- **`Dockerfile` e `docker-compose.yml`**: Arquivos para configurar a execução do projeto em contêineres Docker.


 - Para executar os containers do Backend, rode o seguinte comando: docker-compose up --build

# Front End

A estrutura do projeto é esta:
- **`app/`**: Contém o código principal da aplicação, incluindo, componentes, pages, services e types
- **`angular.json`** - Arquivo responsável por toda configuração do projeto, contendo import de pacotes externos, configuraçãoes de porta, etc.
- **`Dockerfile` e `docker-compose.yml`**: Arquivos para configurar a execução do projeto em contêineres Docker.

- Para executar os containers do Front End, rode os seguintes comandos: docker-compose build e depois docker-compose up
