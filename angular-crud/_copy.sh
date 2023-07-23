date=`date +"%H.%M"`
name="CRUD"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

if [ ! -d $target ]; then
    mkdir $target

    cp *.js* $target

    cp -r src $target
fi

echo "Copie $name - $date"