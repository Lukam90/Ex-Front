date=`date +"%H.%M"`
target="$HOME/Téléchargements/Copies/CP-React-$date"

cp -r public $target
cp -r src $target

echo "Copie du dossier React - $date"
