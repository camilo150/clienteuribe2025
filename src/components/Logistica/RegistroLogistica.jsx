export function RegistroLogistica(){
    return(
        <>
            <form className="border rounded p-5">
                <div className="mb-3">
                    <input type="text" className="form-control"placeholder="Nombre proveedor Logistico" required name="" id="" />
                </div>
                
                <div className="mb-3">
                    <input type="text" className="form-control"placeholder="Correo proveedor Logistico" required name="" id="" />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control"placeholder="Contacto proveedor Logistico" required name="" id="" />
                </div>

                <div className="mb-3">
                    <label htmlFor=""> Fecha de Registro</label>
                    <input type="date" className="form-control"placeholder="Fecha de Registro" required name="" id="" />
                </div>
                
                <button className="btn btn-primary w-100">Enviar</button>
            </form>
        </>
    )
}