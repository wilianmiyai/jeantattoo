# Script para inicializar repositório Git e subir arquivos para o GitHub
# Salve como git_push.ps1 e execute no PowerShell na pasta do projeto

$repoUrl = "https://github.com/wilianmiyai/jeantattoo.git"

# Inicializa o repositório Git
if (!(Test-Path ".git")) {
    git init
}

# Adiciona o remoto se não existir
$remotes = git remote
if ($remotes -notcontains "origin") {
    git remote add origin $repoUrl
}

# Adiciona todos os arquivos
git add .

# Faz o commit
$commitMsg = "Primeiro commit do site de tatuagem"
git commit -m $commitMsg

# Envia para o GitHub
# Se for o primeiro push, pode pedir login do GitHub
try {
    git push -u origin master
} catch {
    Write-Host "Erro ao enviar para o GitHub. Verifique autenticação ou permissões."
}
