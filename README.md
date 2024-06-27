Desafio de Desenvolvedor Full Stack do Instituto Brasileiro de Biotecnologia e Inovação

# Backend

A estrutura do projeto é esta:
.
├── app
│   ├── models - Onde se encontram todos os arquivos relacionados aos modelos do banco de dados
│   ├── routers - Onde se encontram todos os arquivos relacionados as rotas da API
│   ├── schemas - Onde se encontram todos os arquivos relacionados a estrutura dos dados que podem ser recebidos ou retornados pela API
│   ├── shared - Onde se encontram todos os arquivos relacionados a configuração do banco de dados como também as dependencias da aplicação
│   ├── use_cases - Onde se encontram todos os arquivos relacionados a classes ou funções que encapsulam a lógica de negócios da aplicação.
│   └── main.py - Arquivo responsável por executar a aplicação
├── migrations - Onde se encontram todos os arquivos relacionados as migrações feitas com o Alembic
├── alembic.ini - Arquivo responsável por fazer toda a gerencia de configuração do Alembic
├── Dockerfile - Arquivo de texto que contém instruções para que o Docker crie uma imagem
├── docker-compose.yml - Arquivo onde os serviços são definidos relacionados à aplicação, como o banco de dados e o ambiente de desenvolvimento
└── requirements.txt - Arquivo que contem todas as dependências da aplicação


Para executar os containers do Backend, rode o seguinte comando: docker-compose up --build

# Front End
