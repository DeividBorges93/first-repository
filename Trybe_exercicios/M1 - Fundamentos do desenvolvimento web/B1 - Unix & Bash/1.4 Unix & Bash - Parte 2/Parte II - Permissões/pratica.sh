#!/bin/bash

# Exercício 1

# Navega até a pasta unix_tests
cd unix_tests

# Exercício 2

# Mostra quais as permissões dos arquivos
ls -l # enter
# Retorna permissão de todos os arquivos do diretório

# Exercício 3

# Permite que todos usuários tenham direito de leitura e escrit no arquivo bunch_of_things.txt
chmod a+rw bunch_of_things.txt
echo "-rw-rw-rw- 1 deivid deivid 1957 jul 23 13:25 bunch_of_things.txt"

# Exercício 4

# Remove permissão de escrita do arquivo bunch_of_things.txt para todos os usuários.
chmod a-w bunch_of_things.txt
echo "-r--r--r-- 1 deivid deivid 1957 jul 23 13:25 bunch_of_things.txt
"




