import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../App"

const Title = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const toggleSwitch = (checked) =>{
        setTheme(
            theme === "Light" ? "Dark" : "Light"
        );
    }

    return (
        <header className={theme === "Dark"? "Dark":"Light"}>
            <span>{theme} Mode</span>
            <Switch
                onChange={toggleSwitch}
                checked={theme === "Dark"}
                uncheckedIcon={false}
                checkedIcon={false}
                offColor="#86d3ff"
                onColor="#ffa500"
            />
        </header>
    )
}

export default Title;