if [ -e $FILE ]
    then
        echo "O caminho $FILE está habilitado"
else
        echo "O caminho $FILE não está habilitado"
fi
if [ -w $FILE ]
    then
        echo "Você tem permissão pra editar"
else
        echo "Você não foi autorizado a editar"
fi