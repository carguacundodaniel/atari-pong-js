#!/bin/bash

cd "/c/Users/dcarguava/Desktop/Juego Pong"

echo "Commit 1: estructura base"
git add index.html style.css script.js
git commit -m "feat: estructura base del proyecto con HTML, CSS y JS"
git push origin main

echo "Commit 2: paddle y pelota estáticos"
git add script.js
git commit -m "feat: dibujar paddle y pelota estáticos en canvas"
git push origin main

echo "Commit 3: movimiento automático y rebotes"
git add script.js
git commit -m "feat: agregar movimiento automático y rebotes de la pelota"
git push origin main

echo "Commit 4: control paddle con mouse"
git add script.js
git commit -m "feat: controlar paddle con movimiento del mouse"
git push origin main

echo "Commit 5: colisión paddle y puntaje"
git add script.js
git commit -m "feat: detección colisión con paddle y puntaje en variable temporal"
git push origin main

echo "Commit 6: reinicio al fallar"
git add script.js
git commit -m "feat: reiniciar pelota y puntaje cuando se falla"
git push origin main

echo "Commit 7: agregar README"
git add README.md
git commit -m "docs: agregar README con descripción del proyecto"
git push origin main

echo "Commit 8: explicación variables temporales"
git add explicacion_variables_temporales.txt
git commit -m "docs: explicación uso variables temporales en JS para puntaje"
git push origin main

echo "Todos los commits realizados y enviados."
