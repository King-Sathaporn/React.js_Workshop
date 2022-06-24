import { useEffect } from "react";

const Alert = ({message, type, setAlert, list}) => {

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({show: false, message: '', type: ''});
        },2000);
        return ()=>clearTimeout(timeOut);
        // eslint-disable-next-line
    },[list])

    return(
            <p className={`alert ${type}`}>
                {message}
            </p>
    )
}

export default Alert;