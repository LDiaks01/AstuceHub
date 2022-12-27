import "bootstrap/dist/css/bootstrap.min.css";
const userData = [
    {nom: 'Diallo', prenom: 'Amadou', pseudo: 'Tad', email:'tad@gmail.com', photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'},
    {nom: 'Diallo', prenom: 'Thierno', pseudo: 'Tad', email:'tad@gmail.com', photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'},
    {nom: 'Diallo', prenom: 'Djondouaa', pseudo: 'Tad', email:'tad@gmail.com', photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'},
    {nom: 'Diallo', prenom: 'Djonbarki', pseudo: 'Tad', email:'tad@gmail.com', photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'},
]

function Profil(){
    // const [users, setUsers] = useState(usersData);
    return(
        <div className="container">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card p-2 shadow mb-5 bg-white">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    {userData.map((user) => (
                                        <img src={user.photo} alt="" className="rounded-circle p-1 bg-primary w-25"  />
                                        // <div className="mt-3">
                                        //     <h4>{user.nom}{user.prenom}</h4>
                                        //     <p className="text-secondary mb-1">{user.prenom}</p>
                                        //     <p className="text-muted font-size-sm">{user.email}</p>
                                        // </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="John Doe" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="john@example.com"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="(239) 816-9029"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="(320) 380-4539" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="Bay Area, San Francisco, CA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="button" className="btn btn-primary px-4" value="Save Changes"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Profil;