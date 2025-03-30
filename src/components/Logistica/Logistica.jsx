import "../Logistica/Logistica.css"
import { RegistroLogistica } from "./RegistroLogistica"
import { useState,useEffect } from "react"

const [datosLogistica,setDatosLogistica] = useState([])
const [carga,setCarga]=useState(false)

export function Logistica() {
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
        </>
    )
}