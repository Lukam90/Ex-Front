date=`date +"%H.%M"`
target="$HOME/Téléchargements/Copies/CP-Tests-$date"

cp -r public $target
cp -r src $target

cp package.json $target

echo "Copie du dossier Tests - $date"