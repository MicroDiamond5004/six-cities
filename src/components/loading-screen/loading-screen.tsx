import '../../../public/css/spiner.css';

function LoadingScreen() : JSX.Element {
    return(
        <div className="popup-overlay">
            <div className="popup">
                <div className="popup-content">
                    <img src="gif/Spinner@1x-1.0s-200px-200px.gif" alt="loading spinner"/>
                    <h3>Loading...</h3>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;
