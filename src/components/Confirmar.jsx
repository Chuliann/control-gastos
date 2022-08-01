import { useEffect, useState } from "react";


const Confirmar = ({animarConfirmar, setAnimarConfirmar, setConfirmar,eliminarGasto}) => {

    
    const cerrar = () => {
        setAnimarConfirmar(false);
        
        setTimeout(() => {
            setConfirmar(false);
        }, 400)
    }


    return(
        <div className='confirmar'>
          <div className={`confirmar-contenido ${animarConfirmar ? "animar" : ""}`}>
            <p>Esta seguro?</p>
            <div className='botones'>
              <button
                onClick={() => eliminarGasto()}
              >Borrar</button>
              <button
                className=''
                onClick={() => cerrar()}
              >Cancelar</button>
            </div>
          </div>
        </div>
    );
}

export default Confirmar;