GUARDARR=`find ~ -name $1`
GUARDAR=`ls -ld $GUARDARR`
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