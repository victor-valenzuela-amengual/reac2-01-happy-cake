import imgInicio from '../assets/img/imagenInicio.jpg';
const Splash = () => {
    return (
        <div className="container-fluid d-flex bg-dark border border-danger border-5">
            <div
                className="mt-5 mb-5 object-fit-contain 
                rounded mx-auto position-relative text-light"
            >
                <img className="" src={imgInicio} alt="react star"></img>
                <div className="position-absolute top-0 start-0 mt-5 ms-5 translate-middle">
                    <h1>NODE.JS</h1>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1>GIT.HUB</h1>
                </div>
                <div className="position-absolute bottom-0 start-100 me-5 pe-5 translate-middle">
                    <h1>REACT.JS</h1>
                </div>
                <div className="position-absolute bottom-50 start-50 pt-3 translate-middle">
                    <h1>NPM.SCR</h1>
                </div>
            </div>
        </div>
    );
};
export default Splash;
