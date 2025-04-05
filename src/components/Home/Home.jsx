import "./Home.css"
import { RegistroProveedor } from "../RegistroProveedor/RegistroProveedor"
import { useEffect, useState } from "react"
import { consultarProveedores } from "../services/servicioProveedor"
export function Home() {

    const [datosProveedor, setDatosProveedor] = useState([])
    const [carga, setCarga] = useState(false)

    useEffect(() => {
        consultarProveedores().then((respuesta) => {
            console.log(respuesta)
            setCarga(true)
            setDatosProveedor(respuesta)

        })
    }, [])

    if (carga) {
        return (

            <>

                <section className="banner">

                </section>

                <section className="container-my-5 text-center">
                    <section className="row p-5">
                        <div className="col-12 col-md-6">
                            <h3>ProveedorAPP</h3>
                            <img src="../../../src/assets/proveedores.jpg" alt="foto" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 align-self-center shadow p-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi deleniti accusantium quas non vel veritatis tempore quia exercitationem architecto explicabo debitis ipsa quo consequatur earum id, ipsum cum perferendis possimus laboriosam. Veniam quo, cumque sint enim, asperiores a nobis magnam rem iste impedit fugiat quae praesentium, consequatur quisquam fugit.</p>
                        </div>
                    </section>
                </section>

                <section className="container my-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Registrate como proovedor</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sint ipsam, quod quaerat iusto, cum cumque autem dicta rerum, laboriosam adipisci. Optio ipsa modi magni molestias. Quaerat maxime nesciunt repellat!</p>
                        </div>
                        <RegistroProveedor></RegistroProveedor>
                    </div>
                </section>

                <section className="container">
                    <section className="row row-cols-1 row-cols-md-3">
                        {datosProveedor.map((proveedor) => {
                                return (
                                    <div className="col">
                                        <div className="card h-100 shadow p-3" key={proveedor.id}>
                                            <h3>
                                                {proveedor.nombres}
                                            </h3>
                                            <h4>{proveedor.correo}</h4>
                                            <hr />
                                            <h4>{proveedor.representante}</h4>
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