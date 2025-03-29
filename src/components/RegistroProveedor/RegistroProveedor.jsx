export function RegistroProveedor(){
    return(
        <>
            <form className="border rounded p-5">

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Nombres" required/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Documento"required/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="direccion" required/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Ciudad"required/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Representante"required/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Telefono Contacto"required/>
                </div>

                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="correo"required/>
                </div>

                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Costo Envio"required/>
                </div>

                <div className="mb-3">
                    <label htmlFor=""> Fecha de Envio</label>
                    <input type="date" className="form-control"placeholder="Fecha de Envio" required name="" id="" />
                </div>

                <div className="mb-3">
                    <textarea type="text" className="form-control" placeholder="Descripcion"required/>
                </div>

                <button className="btn btn-primary w-100">Enviar</button>
            </form>
        
        
        </>

    )
}