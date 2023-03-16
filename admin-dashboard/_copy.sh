date=`date +"%H.%M"`
name="Admin"
target="$HOME/Téléchargements/Copies/CP-$name-$date"

if [ ! -d $target ]; then
    mkdir $target

    cp -r . $target
fi

echo "Copie du dossier $name - $date"