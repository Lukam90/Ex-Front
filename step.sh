#!/bin/sh

git add *

expressvpn status
git status

echo "MAJ : "
read msg

git commit -m "MAJ $msg"