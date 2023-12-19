
# ClearMind

O Clearmind é inspirado no maior aplicativo de produtividade de todos os tempos nomeado como Notion.

O objetivo do ClearMind é fazer com que você defina suas metas de curto e longo prazo de forma clara e objetiva com um visual fácil de entender

## Links

- [Projeto]()

## Layout Home

![Web 1](../PROJETO-LISTA-DE-TAREFAS/assets/layoutwebhome.png)

## Layout List

![Web 1](../PROJETO-LISTA-DE-TAREFAS/assets/layoutlistdark.png)

## Conceptual Model

![Conceptual Model](link_image_conceptual_model)

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
