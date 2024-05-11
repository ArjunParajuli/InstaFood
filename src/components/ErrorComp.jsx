import { useRouteError } from "react-router-dom";

const ErrorComp = () =>{
    const errType = useRouteError();
    console.log(errType)
    return (
        <div>
            <div>{errType.status}: {errType.statusText}</div>
            <div>{errType.error.message}</div>
        </div>
    )
}

export default ErrorComp;