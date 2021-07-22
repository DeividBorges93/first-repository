#!/bin/bash

# Exercício 1

echo  "Adiciona diretorio unix_tests"
mkdir unix_tests
echo  "Navega para diretorio unix_tests"
cd unix_tests

# Exercício 2

echo "Adiciona arquivo trybe.txt"
touch trybe.txt

# Exercício 3

echo "Adiciona uma copia de trybe.txt com o nome de trybe_backup.txt"
cp trybe.txt trybe_backup.txt

# Exercício 4

echo "Renomea/move o arquivo trybe.txt para trybe_.txt"
mv trybe.txt trybe_.txt

# Exercício 5

echo "Adiciona diretorio backup"
mkdir backup

# Exercício 6

echo "Move trybe_backup.txt para o diretorio backup"
mv trybe_backup.txt backup

# Exercício 7

echo "Adiciona um diretorio chamado backup2"
mkdir backup2

# Exercício 8

echo "Move trybe_backup da pasta backup para a pasta backup2"
mv backup/trybe_backup.txt backup2

# Exercício 9

echo "Apaga o diretorio backup"
rmdir backup

# Exercício 10

echo "Renomeando a pasta backup2 para backup"
mv backup2 backup

# Exercício 11

echo "Mostra o path atual"
pwd

# Exercício 12

echo "Lista arquivos do path atual"
ls

# Exercício 13

echo "Limpa terminal"
clear

# Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :

# Exercício 14

echo "Mostra na tela os 5 primeiros itens da lista"
head -5 skills.txt

# Exercício 15

echo "Mostra na tela os 4 últimos itens da lista"
tail -4 skills.txt

# Exercício 16

echo "Apaga todos arquivos .txt"
rm -rf *.txt

