GUARDAR=`find ~ -name $1`
if [ -d $GUARDAR ]
    then
        echo "É um diretório!"
        QUANTIDADE=`ls -l $GUARDAR | wc -l`
        echo "e tem $QUANTIDADE arquivos e/ou diretórios"
else
    echo "Não é um diretório"
fi
