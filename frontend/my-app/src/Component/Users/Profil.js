import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profil(){
    return(
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card p-2 shadow mb-5 bg-white">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" className="rounded-circle p-1 bg-primary w-50"  />
                                    <div className="mt-3">
                                        <h4>Diallo Amadou</h4>
                                        <p className="text-secondary mb-1">Tad</p>
                                        <p className="text-muted font-size-sm">tad@gmail.com</p>
                                    </div>
                                    <button className="btn btn-primary btn-xs d-inline float-start w-10"><FontAwesomeIcon className='w-10' icon={faPen}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;