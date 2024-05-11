const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;

app.use(express.json());

const repertorioPath = path.join(__dirname, 'repertorio.json');

function obtenerCanciones() {
  try {
    const repertorioData = fs.readFileSync(repertorioPath, 'utf8');
    return JSON.parse(repertorioData);
  } catch (error) {
    console.error('Error al leer el archivo repertorio.json:', error.message);
    return [];
  }
}

function escribirCanciones(canciones) {
  try {
    fs.writeFileSync(repertorioPath, JSON.stringify(canciones, null, 2));
    console.log('Archivo repertorio.json actualizado correctamente.');
  } catch (error) {
    console.error('Error al escribir en el archivo repertorio.json:', error.message);
  }
}

app.post("/canciones", (req, res) => {
  const nuevaCancion = req.body;
  let canciones = obtenerCanciones();
  canciones.push(nuevaCancion);
  escribirCanciones(canciones);
  res.sendStatus(201);
});

app.get("/canciones", (req, res) => {
  const canciones = obtenerCanciones();
  res.json(canciones);
});

app.put("/canciones/:id", (req, res) => {
  const idCancion = req.params.id.toString();
  const datosActualizados = req.body;
  let canciones = obtenerCanciones();
  const indice = canciones.findIndex(cancion => cancion.id.toString() === idCancion); // 
  if (indice !== -1) {
    canciones[indice] = { ...canciones[indice], ...datosActualizados };
    escribirCanciones(canciones);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});


app.delete("/canciones/:id", (req, res) => {
  const idCancion = req.params.id.toString();
  console.log("ID de la canción proporcionado en la solicitud:", idCancion);

  let canciones = obtenerCanciones();
  console.log("Canciones obtenidas del archivo:", canciones);

  const cancionesFiltradas = canciones.filter(cancion => cancion.id.toString() !== idCancion);
  console.log("Canciones filtradas después de eliminar la canción:", cancionesFiltradas);

  if (cancionesFiltradas.length < canciones.length) {
    escribirCanciones(cancionesFiltradas);
    res.sendStatus(200);
  } else {
    console.error("La canción no fue encontrada");
    res.sendStatus(404);
  }
});


app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});



