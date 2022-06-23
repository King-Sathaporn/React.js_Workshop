import { useContext } from 'react'
import { ThemeContext } from '../../App'
import light from '../../assets/images/light.svg'
import dark from '../../assets/images/dark.svg'

const Content=()=>{
    
    const { theme } = useContext(ThemeContext);

    return(
        <main className={theme === "Dark"? "Dark":"Light"}>
            <div>
                <h1>React.js</h1>
                <p>Light&Dark Mode Workshop</p>
            </div>
            <img src={theme === "Dark"? dark:light} alt="logo"/>
        </main>
    )
}

export default Content;