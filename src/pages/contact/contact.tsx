import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const Contact = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <h1>Página de Contato</h1>
            <button onClick={toggleTheme}>Modo Dark</button>
            <p>O tema atual é: {theme}</p>
        </div>
    )
}