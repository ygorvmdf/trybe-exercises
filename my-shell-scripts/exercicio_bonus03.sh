FILESPNG=`ls *.png`
for PNG in $FILESPNG
    do 
        mv $PNG "2020-08-17-$PNG"
    done