import { useFilters } from '../hooks/useFilters'
import './Footer.css'
export function Footer(){
    const {filters} = useFilters()
    return(
        <footer className='footer'>
            {
                JSON.stringify(filters,null,2)
            }
            {               
            // <h4>Prueba Tecnica de react</h4>
            // <span>@Krpeta21</span>
            // <h5>Shopping cart con useContext y useReducer</h5>
            }
        </footer>
    )
}