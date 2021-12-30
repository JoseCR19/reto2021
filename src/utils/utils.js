const peliculaModel = require('../model/pelicula');
const personaModel = require('../model/persona');
const findByIdPersona = require('../Persona/getPersona');
const personaAgregar = require('../Persona/addPersona');
const findByIdPelicula = require('../Peliculas/getPelicula');
const peliculaAgregar = require('../Peliculas/addPelicula');
const axios = require("axios");
function buildPersona(data,id){
    personaModel.nombre= data.name;
    personaModel.altura= data.height;
    personaModel.peso= data.mass;
    personaModel.color_cabello= data.hair_color;
    personaModel.color_piel= data.skin_color;
    personaModel.color_ojos= data.eye_color;
    personaModel.fecha_cumpleaños= data.birth_year;
    personaModel.genero= data.gender;
    personaModel.pais_natal= data.homeworld;
    personaModel.peliculas= data.films;
    personaModel.especies= data.species;
    personaModel.vehículos= data.vehicles;
    personaModel.naves_esterales= data.starships;
    personaModel.creado= data.created;
    personaModel.editado= data.edited;
    personaModel.url= data.url;
    personaModel.id = id;
    personaModel.created= new Date();
    return personaModel;
};
function buildPeliculas(data,id){
    peliculaModel.titulo= data.title;
    peliculaModel.episodio_id= data.episode_id;
    peliculaModel.descripcion= data.opening_crawl;
    peliculaModel.director=data.director;
    peliculaModel.productor=data.producer;
    peliculaModel.fecha_lanzamiento=data.release_date;
    peliculaModel.creado=data.created;
    peliculaModel.editado=data.edited;
    peliculaModel.especies= data.species;
    peliculaModel.vehiculos=data.vehicles;
    peliculaModel.naves_espaciales=data.starships;
    peliculaModel.planetas=data.planets;
    peliculaModel.caracteres= data.characters;
    peliculaModel.url=data.url;
    peliculaModel.id=id;
    peliculaModel.fecha_creacion = new Date();
    return peliculaModel;
}
async function obtenerDatosAPI(nombre,id){
    try{
        const url = "https://swapi.py4e.com/api/"+nombre+"/"+id+"/";
        let response = await axios.get(url);
        if(nombre=="people"){
            let builddata = await buildPersona(response.data,id);
            personaAgregar.addPersona(builddata);
            return builddata;
        }else{
            let builddata = await buildPeliculas(response.data,id);
            peliculaAgregar.addPelicula(builddata);
            return builddata;
        }
    }catch(error){
        return null;
    }
}
async function listorcreate(nombre,id){
    switch (nombre) {
        case "people":
            return listorcreatePersona(nombre,id);
            break;
        case "films":
            return listorcreatePelicula(nombre,id);
            break;
    }
}
async function listorcreatePersona(nombre,id){
    const result = await findByIdPersona.getPersona(id);
    if(result==null){
        const persona = await obtenerDatosAPI(nombre,id);
        return persona;
    }else{
        const persona= result;
        return persona;
    }
}
async function listorcreatePelicula(nombre,id){
    const result = await findByIdPelicula.getPelicula(id);
    if(result==null){
        const pelicula = await obtenerDatosAPI(nombre,id);
        return pelicula;
    }else{
        const pelicula= result;
        return pelicula;
    }
}
module.exports ={
    listorcreate,
    buildPersona
};