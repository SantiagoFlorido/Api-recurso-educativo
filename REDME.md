Rutas: 

conexion de puertos com (serial)
.get
    https://recursoeducativodigital.onrender.com/api/v1/serial     (encuentra los seriales conectados al dispositivo)

conexion a talleres 
.get
    https://recursoeducativodigital.onrender.com/api/v1/talleres    (encuentra todos los talleres en la base de datos)
    https://recursoeducativodigital.onrender.com/api/v1/talleres/:id    (encuentra un taller por id)
.post
    https://recursoeducativodigital.onrender.com/api/v1/talleres    (crea un taller, dentro del body del json se solicita solo el nombre del taller)
.patch
    https://recursoeducativodigital.onrender.com/api/v1/talleres/:id    (actualiza la informacion de un taller solicitando el id por parametros "solo permite modificar el titulo y la cantidad total de talleres completados")
.delete
    https://recursoeducativodigital.onrender.com/api/v1/talleres/:id    (elimina un taller solicitando el id por parametros)

