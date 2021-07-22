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

# Exercício 7

echo "Busca por brazil na lista"
gre "brazil" countries.txt 
# retorna nada.

