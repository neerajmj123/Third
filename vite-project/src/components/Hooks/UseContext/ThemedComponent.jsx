import { useContext } from "react";
import { ThemeContext } from "./UseContextComponent1";
function ThemedComponent() {
    const { theme } = useContext(ThemeContext)
    return (theme === 'white') ? (<div style={{ background: theme }}>ThemedComponent</div>) : (<div style={{ background: theme, color: "white" }}>ThemedComponent</div>)
}
export default ThemedComponent;