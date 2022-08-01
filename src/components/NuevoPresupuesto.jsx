import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setPresupuestoValido }) => {

    const [mensaje, setMensaje] = useState("");

    const handlePresupuesto = (e) => {
        e.preventDefault();
        
        if(!presupuesto) {
            setMensaje("Solo se admiten numeros");
            setPresupuestoValido(false);
            return;
        } 
        if(presupuesto < 0) {
            setMensaje("Un presupuesto no puede ser negativo");
            setPresupuestoValido(false);
            return;
        }
        setMensaje("");
        setPresupuestoValido(true);
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label>Definir presupuesto</label>
                    
                    <input 
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={e => {setPresupuesto(Number(e.target.value))}}
                    />
                </div>

                <input 
                    type="submit"
                    value="Añadir"
                />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
            </form>
        </div>
    )
}

export default NuevoPresupuesto