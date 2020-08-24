read -p "Digite um caminho: " CAMINHO
GUARDAR=`ls -ld $CAMINHO`
GUARDA=${GUARDAR:0:1}
if [ $GUARDA = "d" ]
    then 
        echo "Este arquivo é um diretório!"
elif [ $GUARDA = "-" ]
    then 
        echo "É um arquivo!"
else
    echo "Este arquivo não é comum!"
fi