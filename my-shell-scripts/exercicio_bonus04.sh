DIRNAME=$1
EXT=$2
if [ -d $DIR ]
    then
        DIRPATH=`find ~ -name $DIRNAME`
        cd $DIRPATH
        FILEEXT=`ls *$EXT`
        for FILE in $FILEEXT
        do 
            mv $FILE "2020-08-17-$FILE"
        done
else
    echo "please select a directory"
fi