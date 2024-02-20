import { useContext } from "react"
import { ThemeContext } from "./UseContextComponent1"
function ThemeSelector() {
    const { setTheme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={() => setTheme('white')}>Light Theme</button>
            <button onClick={() => setTheme('black')}>Dark Theme</button>
        </div>
    )
}
export default ThemeSelector;