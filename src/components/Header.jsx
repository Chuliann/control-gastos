import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ gastos, setGastos, presupuesto, setPresupuesto, setPresupuestoValido, presupuestoValido }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {presupuestoValido ? (
                <ControlPresupuesto 
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setPresupuestoValido={setPresupuestoValido}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setPresupuestoValido={setPresupuestoValido}
                />
            )}
            
        </header>
    )
}

export default Header
