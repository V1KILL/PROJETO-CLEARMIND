
# ClearMind

O ClearMind, inspirado no amplamente reconhecido aplicativo Notion, tem como objetivo simplificar o processo de definição de metas a curto e longo prazo.

Com uma interface visual intuitiva, buscamos proporcionar uma experiência clara e objetiva para ajudar você a alcançar seus objetivos diários com facilidade

## Links

- [Projeto]()

## Layout Home

![Web 1](../PROJETO-LISTA-DE-TAREFAS/assets/layoutwebhome.png)

## Layout List

![Web 1](../PROJETO-LISTA-DE-TAREFAS/assets/layoutlistdark.png)

## Modelo Conceitual

![Conceptual Model](../PROJETO-LISTA-DE-TAREFAS/assets/diagramamodel.png)

## Arquitetura

![Web 1](../PROJETO-LISTA-DE-TAREFAS/assets/diagrama.drawio.png)

## Funcionalidades

### Authenticação

- Account Login
- Account Register

### Colors Mode

- LightMode
- DarkMode

### Tarefa

- Adição de Tarefa
- Editar Tarefa
- Visulizar Detalhes Da Tarefa
- Remover Tarefa
- Checkar Tarefa

### Lista

- Adição de Lista
- Editar Lista
- Visulizar Detalhes Da Lista
- Remover Lista

## Tecnologias Usadas

### Back-End
- Python
- Django
- JavaScript

### Front-End
- Html
- Html
- Css

### Deploy
- Back-End: Glicth
- Front-End: FireBase
- Database: MySql
## Como Iniciar o Projeto

#### Pré-Requisito
- Python 3.11

```bash
# Clonar Repositório
git clone https://github.com/V1KILL/PROJETO-LISTA-DE-TAREFAS.git

# Ativar Ambiente Virtual 
.\venv\Scripts\activate

# Ativar Ambiente Virtual No Linux
source venv/bin/activate

# Instalar Dependências
pip install -r requirements.txt

#Aplicar Migrações
python manage.py migrate

# Iniciar o Servidor
python manage.py runserver
