# Desafio-Mi-Repertorio
En este desafío deberás desarrollar un servidor con Express que utilice el módulo File System para agregar, modificar y eliminar canciones almacenadas en un JSON local llamado repertorio.json.
# Se ha creado una app en donde es posible agregar informacion que luego, se actualiza en una lista. Estos datos pueden ser editados y/o eliminados.
# El servidor levantado dispone de las siguientes rutas:
POST, recibiendo los datos de la cancion y agregandolos al repertorio.json.
GET, muestra la lista de canciones registradas.
PUT, recibe los datos de la cancion a editar y los actualiza en el archivo json.
Delete, elimina una cancion de la lista.
# El desafio es levantado con un servidor local usando Express JS.
# evuelve una página web (asociada a un html) en respuesta a una consulta GET.
# Dispone diferentes rutas que interactuan con el json local.
# Es posible manipular los datos obtenidos, por ejemplo, modificando una cancion existente.
# Tambien se esta manipulando el playload de una consulta http al servidor, por ejemplo, en la ruta para agregar una nueva cancion, se reciben los datos desde la solicitud http. Estos datos se utilizan para agregar una nueva cancion al repertorio. Tambien, al editar una cancion existe, ya que tambien los datos actualizados se reciben de una solicitud http.