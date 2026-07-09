⚓ Sistema de Gestão Operacional de Plataformas Petrolíferas
Este projeto é um sistema completo para o controlo de operações petrolíferas, permitindo o acompanhamento de produção diária, escalas de tripulação, solicitações de manutenção e registro de incidentes.

A aplicação é dividida em duas partes principais:

Backend: API REST desenvolvida em Java com Spring Boot e base de dados MySQL.

Frontend: Interface web moderna desenvolvida em React com Vite.

🛠️ Pré-requisitos Gerais
Antes de começar, certifica-te de que tens instalado na tua máquina:

Java JDK 23

Node.js (Versão 18 ou superior)

MySQL Server e MySQL Workbench

Uma IDE para Java (Recomendado: IntelliJ IDEA)

Um editor de texto para o Frontend (Recomendado: VS Code)

🖥️ 1. Como Configurar e Rodar o Backend (Java / Spring Boot)
Passo 1: Configurar a Base de Dados (MySQL)
Abra o MySQL Workbench e conecte-se à sua instância local.

Não é necessário criar a base de dados manualmente, pois o Spring Boot está configurado para criá-la sozinho (createDatabaseIfNotExist=true).

Passo 2: Configurar as Propriedades do Projeto
No IntelliJ IDEA, navegue até à pasta src/main/resources e abra o ficheiro application.properties. Garanta que as seguintes configurações estão corretas, alterando principalmente a sua senha do MySQL:

Properties
# URL de conexão com o MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/AttrRh?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC

# Login e Senha da sua base de dados local
spring.datasource.username=root
spring.datasource.password=SUA_SENHA_AQUI

# Driver de Conexão oficial
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Configurações do Hibernate / JPA
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
Passo 3: Limpar e Rodar a Aplicação
Para evitar conflitos de compilação antigos, execute os seguintes passos dentro da IDE:

No menu superior, clique em Build ➡️ Clean Project.

Em seguida, clique em Build ➡️ Rebuild Project.

Abra a classe principal AtividadeEmGrupoApplication.java e clique no botão verde Run (Play).

O servidor backend iniciará na porta http://localhost:8080.

🌐 2. Como Configurar e Rodar o Frontend (React / Vite)
O frontend comunica diretamente com a API do Spring Boot através das rotas definidas no arquivo de serviços.

Passo 1: Aceder à pasta do Frontend
Abra o seu terminal (ou o VS Code) diretamente na pasta onde se encontram os ficheiros do frontend (onde está o arquivo package.json).

Passo 2: Instalar as Dependências
Execute o comando abaixo para instalar todos os pacotes necessários do Node.js:

Bash
npm install
Passo 3: Configurar as Variáveis de Ambiente (Opcional)
Por padrão, o ficheiro api.js está configurado para apontar para http://localhost:8080/api. Se preferir usar variáveis de ambiente, verifique se existe um arquivo .env na raiz do frontend com o seguinte conteúdo:

Snippet de código
VITE_API_URL=http://localhost:8080/api
Passo 4: Iniciar o Servidor de Desenvolvimento
Execute o comando abaixo para rodar o projeto React:

Bash
npm run dev
O terminal exibirá um endereço local, normalmente http://localhost:5173. Abra este link no seu navegador para aceder à aplicação.

📡 3. Documentação da API (Endpoints)
Todas as requisições aceitam e retornam dados no formato JSON. A segurança do backend foi configurada para permitir o acesso completo a partir do ambiente local.

📋 Módulo: Produção (/api/producao)
GET /api/producao - Lista todos os registros de produção diária.

POST /api/producao - Salva um novo registro de produção.

PUT /api/producao/{id} - Atualiza um registro existente por ID.

DELETE /api/producao/{id} - Elimina um registro de produção por ID.

👥 Módulo: Tripulação (/api/tripulacao)
GET /api/tripulacao - Lista a escala de embarque da tripulação.

POST /api/tripulacao - Cadastra um novo funcionário na escala.

PUT /api/tripulacao/{id} - Atualiza os dados de confinamento/escala por ID.

DELETE /api/tripulacao/{id} - Remove um membro da escala por ID.

🔧 Módulo: Manutenção (/api/manutencao)
GET /api/manutencao - Lista todas as ordens de manutenção abertas.

POST /api/manutencao - Abre uma nova solicitação de manutenção de equipamento.

PUT /api/manutencao/{id} - Atualiza os dados ou criticidade da falha por ID.

DELETE /api/manutencao/{id} - Cancela/Elimina a solicitação de manutenção por ID.

🚨 Módulo: Incidentes (/api/incidentes)
GET /api/incidentes - Lista todos os incidentes operacionais registrados.

POST /api/incidentes - Registra um novo incidente na plataforma.

PUT /api/incidentes/{id} - Atualiza a descrição ou ações imediatas de um incidente por ID.

DELETE /api/incidentes/{id} - Remove o registro de um incidente por ID.

🔍 Resolução de Problemas Comuns (Troubleshooting)
1. Erro de CORS (Cross-Origin Resource Sharing)
Se o navegador bloquear as requisições com mensagens de CORS, certifique-se de que:

Removeu todas as anotações @CrossOrigin individuais de cima dos Controllers Java.

A classe SegurityConfig.java está ativa na pasta config do backend com a anotação @EnableWebSecurity e liberando explicitamente a origem http://localhost:5173.

2. Erro Failed to configure a DataSource (Backend não inicia)
Verifique se o seu serviço do MySQL está realmente ligado e rodando no computador.

Certifique-se de que não há espaços em branco antes ou depois da sua senha no arquivo application.properties.

3. Erro 500 ao tentar Excluir (DELETE)
Garanta que fez o Rebuild Project no IntelliJ após colar os métodos @DeleteMapping nos controladores.