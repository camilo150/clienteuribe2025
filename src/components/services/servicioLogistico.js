export async function consultarLogisticas() {
    // construir endpoint
    const URL='http://localhost:8000/consultarLogisticas'
    //actviar la peticion a enviar
    let peticion={
        method:"GET"
    }
    
    //activo el consumo de peticion
    let respuesta=await fetch(URL,peticion)
    let consultarLogisticas=await respuesta.json()
    console.log(consultarLogisticas)
    
    return consultarLogisticas
    }
    