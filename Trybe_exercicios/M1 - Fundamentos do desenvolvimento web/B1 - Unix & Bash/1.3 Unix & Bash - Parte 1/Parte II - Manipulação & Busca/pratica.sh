#!bin/bash

# Exercício 1

echo "Abre diretorio unix_tests"
cd unix_tests
echo "Baixa arquivo countries.txt"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2

echo "Mostra o conteúdo do arquivo na tela"
cat countries.txt

# Exercício 3

echo "Mostra todo o conteúdo página por página"
less countries.txt

# Exercicio 4
# Utilizar teclas n para proximo(next) e p para anterior(previous) para navegar

# Exercicio 5

echo "Busca por Brazil na lista"
grep "Brazil" countries.txt 
# retorna "Brazil"

# Exercício 6

echo "Busca por brazil na lista"
grep "brazil" countries.txt 
# retorna vazio.

# Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

echo "Cria arquivo phrases.txt"
cat > phrases.txt # enter
# Adiciona conteúdo do arquivo
eu sou um dev
gotrybe
seja feliz sempre
busque seus sonhos

# Exercício 7

grep -v "fox" phrases.txt
# retorna vazio.

# Exercício 8

echo "Busca a quantidade de palavras contidas no arquivo"
wc -w phrases.txt
echo '11 phrases.txt'

# Exercício 9

echo "Busca a quantidade de linhas contidas no arquivo"
wc -l phrases.txt
echo '4 phrases.txt'

# Exercício 10

echo "Adiciona arquivos empty.tbt e empty.txt"
touch empty.tbt
touch empty.txt

# Exercício 11

echo "Lista todos os arquivos do diretório"
ls -a
# retorna todos os arquivos do diretório

# Exercício 12

echo "Lista todos os arquivos .txt do diretório"
ls -a *.txt
# retorna todos os arquivos .txt do diretório

# Exercício 13

echo "Lista todos arquivos que terminam com .txt ou .tbt"
ls -a *.{txt,tbt}
# retorna todos os arquivos .txt e .tbt do diretório

# Exercício 14

echo "Acessa o manul do ls"
man ls
# retorna o manual do ls'
