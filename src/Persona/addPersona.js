const {v4} = require('uuid');
const Dynamo = require('../utils/dynamoDbConfig');
const Responses = require('../utils/reponse');
const addPersona = async( event) => {
    const {id, nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url} = event;
    const createdAt = new Date();
    const personaModel = {
        id,nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url,createdAt,
    };
    Dynamo.create(personaModel,process.env.tableNamePersona);
};
const addPersonaPost= async( event, context, callback ) => {
    const {nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url} = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();
    const body = {
        id,nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url,createdAt,
    };
    const persona = await Dynamo.create(body,process.env.tableNamePersona).catch(err=>{
        
        return null;
    });
    if (!persona) {
        return Responses._400({ message: 'No se pudo regsitraer' });
    }
    return Responses._200({ body });
};
module.exports ={
    addPersona,
    addPersonaPost
};
