export async function consultarProveedores() {
    // construir endpoint
    const URL='http://localhost:8000/consultarLogistica'
    //actviar la peticion a enviar
    let peticion={
        method:"GET"
    }
    
    //activo el consumo de peticion
    let respuesta=await fetch(URL,peticion)
    let consultarLogistica=await respuesta.json()
    console.log(consultarLogistica)
    
    return consultarLogistica
    }
    