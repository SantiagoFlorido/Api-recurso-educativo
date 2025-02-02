Rutas: 

conexion de puertos com (serial)
.get
    /api/v1/serial     (encuentra los seriales conectados al dispositivo)

conexion a talleres 
.get
    /api/v1/talleres    (encuentra todos los talleres en la base de datos)
    /api/v1/talleres/:id    (encuentra un taller por id)
.post
    /api/v1/talleres    (crea un taller, dentro del body del json se solicita solo el nombre del taller)
.patch
    /api/v1/talleres/:id    (actualiza la informacion de un taller solicitando el id por parametros "solo permite modificar el titulo y la cantidad total de talleres completados")
.delete
    /api/v1/talleres/:id    (elimina un taller solicitando el id por parametros)

