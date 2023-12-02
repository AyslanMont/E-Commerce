IMPORTANTE: Sempre que fazer um commit, detalhar as alterações na menssagem, para evitar erros.

COMANDOS NESCÉSSARIOS PARA USO DO GIT:

git init # Inicia o git no repositório
git add (nome do arquivo) # Adiciona o arquivo do palco(stage)
git reset (nome do arquivo) # Remove o arquivo do palco(stage)
git status # Lista as modificações atuais do repositório
git commit -m (Mensage do commit, ex: "Primeiro commit") # Realiza o commit das modificações
git log # Lista histórico de commits 
git branch -M "main" # Altera o nomde de "master" para "main"
git remote add origin (Link do repositório, ex: https://github.com/AyslanMont/ProjetoGit.git) # Faz conexão com github
git push -u origin main # Envia as modificações para o GitHub
Obs: A conexão usando o comando remote só precisa ser feita uma vez

ALTERANDO E ADICIONANDO ARQUIVOS

git add . # Adiciona todos arquivos da pasta, sem precisar digitar o nome de cada um
#Comandos para atualizar o arquivo
git commit -m (Mensage do commit, ex: "Primeiro commit")
git push origin main # Obs: Não precisa do "-u" nem de fazer a conexão novamente

BRANCH

git branch # Lista todas as branch locais
git branch (nome do arquivo) # Cria uma nova branch
git checkout (nome do arquivo) # Entra na branch
git push origin (nome da branch) # Envia  as modificações
git pull original (nome da branch) # Puxa as modificações
git checkout -b (nome da branch) # Cria uma nova branch, e entra nela
git merge (nome da branch que quer juntar com a principal) # Junta a branch secundária com a principal(obs: precisa estar na branch principal)

CLONANDO REPOSITÓRIOS E ATUALIZANDO REPOSITÓRIOS

git clone (Link do repositório)
git pull