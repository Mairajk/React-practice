import { useState } from "react"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "./toggle.css";




let ToggleFunction = () => {

    const [isLite, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(!isLite);

        document.querySelector(`#root`).setAttribute("class", `${(isLite) ? "dark" : "lite"}`)

        // if (isLite === false) {
        //     import  "./toggle.css";

        // }
    }

    return (
        <span className={`toggleButton${(isLite) ? "LiteTheme" : "DarkTheme"}`} onClick={changeTheme}>
            <i className={`room${(isLite) ? "LiteTheme" : "DarkTheme"}`} >
                {(isLite) ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </i>
        </span>
    )
}

export default ToggleFunction;


