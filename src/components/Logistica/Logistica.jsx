import "../Logistica/Logistica.css"
import { RegistroLogistica } from "./RegistroLogistica"
import { useState, useEffect } from "react"
import { consultarLogisticas } from "../services/servicioLogistico"

export function Logistica() {
    const [datosLogistica, setDatosLogistica] = useState([])
    const [carga, setCarga] = useState(false)

    useEffect(() => {
        consultarLogisticas().then((respuesta) => {
            console.log(respuesta)
            setCarga(true)
            setDatosLogistica(respuesta)
        })
    }, [])

    if (carga) {
        return (
            <>
                <section className="banner-logistica">
                    <section className="informacion-logistica">
                        <h2>Cual es tu deber como colaborador logistico? </h2>
                        <p>Garantizar la calidad de nuestros productos y servicios hacia el consumidor final, para ello deberás emplear el uso de materias primas y herramientas las cuales te ayudaran a conservar y tener la mejor satisfaccion hacia el cliente, ¡Que esperas para formar parte de este gran equipo!</p>
                        <h4>Llena el siguiente formulario para Registrarte</h4>
                    </section>
                </section>
                <RegistroLogistica></RegistroLogistica>
                <section className="container">
                    <section className="row row-cols-1 row-cols-md-3">
                        {datosLogistica.map((Logistica) => {
                            return (
                                <div className="col">
                                    <div className="card h-100 shadow p-3" key={Logistica.id}>
                                        <h3>{Logistica.nombreEncargado}</h3>
                                        <h4>{Logistica.correoEncargado}</h4>
                                        <hr />
                                        <h4>{Logistica.descripcion}</h4>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </section>
                </section>
            </>
        )
    }
}