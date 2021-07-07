FILELIST=$*
for FILE in $FILELIST
    do
        FILEPATH=`find ~ -name $FILE`
        GUARDAR=`ls -ld $FILE`
        FIRSTCHAR=${GUARDAR:0:1}
        if [ $FIRSTCHAR = "d" ]
            then 
                echo "$FILE é um diretório!"
        elif [ $FIRSTCHAR = "-" ]
            then 
                echo "$FILE é um arquivo!"
        else
            echo "$FILE é um arquivo não comum!"
        fi
    done