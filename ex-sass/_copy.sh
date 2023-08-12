date=`date +"%H.%M"`
name="Sass"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

if [ ! -d $target ]; then
    cp -r scss $target

    cp index.html $target
    cp *.js* $target
fi

echo "Copie $name - $date"