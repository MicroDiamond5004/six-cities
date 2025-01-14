import { getError } from "../../store/slices/main-offers-process/selectors";
import { useAppSelector } from "../hooks";
import "./error.css";

function ErrorMessage() : JSX.Element | null {
    
    const error = useAppSelector(getError);

    return (error) ? <div className="error-message">{error}</div> : null;
}

export default ErrorMessage;