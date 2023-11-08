date=`date +"%H.%M"`
name="Site"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

if [ ! -d $target ]; then
    cp -r . $target
fi

echo "Copie $name - $date"

python3 convert.py