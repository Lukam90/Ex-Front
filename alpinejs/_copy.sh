date=`date +"%H.%M"`
target="$HOME/Téléchargements/Copies/CP-Alpine-$date"

cp -r . $target

echo "Copie du dossier Alpine - $date"
