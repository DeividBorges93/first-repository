#!/bin/bash

# Exercício 1

echo "Navega até a pasta unix_tests"
cd unix_tests

# Exercício 2

echo "cria arquivo skills2.txt e adiciona conteúdo"
cat > skills2.txt # enter
# Adiciona conteúdo do arquivo
Internet
Unix
Bash


# Exercício 3

echo "adicona mais conteúdo a lista"
cat >> skills2.txt # enter
# Adiciona conteúdo do arquivo
Javascript
CSS
HTML
Front-end
Back-end

# Exercício 4

echo "conta linhas do arquivo"
wc -l skills2.txt
echo "8 skills2.txt"

# Exercício 5

echo "adiciona arquivo top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética"
cat skilss2.txt | sort | head -3 > top_skills.txt

# Exercício 6

echo "adiciona arquivo phrases2.txt"
cat > phrases2.txt # enter
# adiciona conteúdo no arquivo
seja feliz hoje
foque nos seus objetivos
ajuda a maior quantidade de pessoas que você conseguir 

# Exercício 7

# Conta números de linha que contém as letras br
grep "br" phrases2.txt | wc -l
echo "0"

# Exercício 8

# Conta o número de linhas que não contêm as letras br
grep -v "br" phrases2.txt | wc -l
cho "3"

# Exercício 9

# Adiciona 2 paises ao arquivo phrases2.txt
cat >> phrases2.txt 
Islandia
Senegal

# Exercício 10

#Cria um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
cat phrases2.txt countries.txt > bunch_of_things.txt

# Exercício 11

#Ordena o arquivo bunch_of_things.txt 
sort -o bunch_of_things.txt bunch_of_things.txt
