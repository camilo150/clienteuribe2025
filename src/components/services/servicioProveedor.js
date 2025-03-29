export async function consultarProveedores() {
    // construir endpoint
    const URL='http://localhost:8000/consultarProveedores'
    //actviar la peticion a enviar
    let peticion={
        method:"GET"
    }
    
    //activo el consumo de peticion
    let respuesta=await fetch(URL,peticion)
    let consultarProveedores=await respuesta.json()
    console.log(consultarProveedores)
    
    return consultarProveedores
    }
    