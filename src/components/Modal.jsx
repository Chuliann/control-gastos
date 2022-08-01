import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import Cerrar from "../img/cerrar.svg";


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

    const [gasto, setGasto] = useState({
        nombre: "",
        cantidad: 0,
        categoria: ""
    });
    const [mensaje, setMensaje] = useState("");
    const [id, setId] = useState('');


    /* ACTUALIZACION */
    const setInputs = (e) => {
        setGasto({...gasto, [e.target.id]: e.target.value});
    }

    /* VALIDACION */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* const {nombre, cantidad, categoria} = gasto;
        if([nombre, cantidad, categoria].includes('')) {
            setMensaje("Todos los campos son obligatorios");
            return;
        } */

        let mensajeAux = "Faltan: ";
        if(!gasto.nombre) {
            mensajeAux+=" Nombre del gasto."
        }
        if(!gasto.cantidad) {
            mensajeAux+=" Cantidad."
        }
        if(!gasto.categoria) {
            mensajeAux+= " Categoria."
        }
        if(!gasto.categoria || !gasto.cantidad || !gasto.nombre) {
            setMensaje(mensajeAux);
            setTimeout(() => {
                setMensaje("");
            }, 3000)
            return;
        }
        setMensaje("");
        guardarGasto(gasto);
    }

    const ocultarModal = () => {
        setGastoEditar({});
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500)
    }

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            setGasto(gastoEditar);
        }
    }, [])

    return (
        <div className="modal">

            <div className="cerrar-modal">
                <img
                    src={Cerrar}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>


            <form 
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
                onSubmit={handleSubmit}
            >

                <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo gasto"}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={gasto.nombre}
                        onChange={e => setInputs(e)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade la cantidad del gasto: ej. 300"
                        onChange={e => setInputs(e)}
                        value={gasto.cantidad}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>

                    <select
                        id="categoria"
                        onChange={e => setInputs(e)}
                        value={gasto.categoria}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input 
                    type="submit"
                    value={gastoEditar.nombre ? "Guardar cambios" : "Añadir gasto"}
                />
                
            </form>

        </div>
    );
}

export default Modal;