const {v4} = require('uuid');
const Dynamo = require('../../servicios_externos/dynamoDbConfig');
const Responses = require('../../servicios_externos/reponse');

exports.addPersona = async(  event, context, callback) => {
    const {id, nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumple,genero,pais_natal, peliculas,especies,vehiculos,naves_esterales,creado,editado,url} = event;

    const createdAt = new Date();

    const body = {
        id,nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumple,genero,pais_natal, peliculas,especies,vehiculos,naves_esterales,creado,editado,url,createdAt,
    };

    const persona = await Dynamo.create(body,process.env.tableNamePersona).catch(err=>{
        return null;
    });

    return persona;
};

exports.addPersonaPost= async( event, context, callback ) => {
    const {nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumple,genero,pais_natal, peliculas,especies,vehiculos,naves_esterales,creado,editado,url} = JSON.parse(event.body);
    const createdAt = new Date();

    const id = v4();

    const body = {
        id,nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumple,genero,pais_natal, peliculas,especies,vehiculos,naves_esterales,creado,editado,url,createdAt,
    };

    const persona = await Dynamo.create(body,process.env.tableNamePersona).catch(err=>{
        return null;
    });

    if (!persona) {
        return Responses._400({ message: 'No se pudo regsitraer' });
    }
    
    return Responses._200({ body });
};
