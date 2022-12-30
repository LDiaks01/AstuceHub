import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const ItemUsers = props =>(
    <div className="container">
    <div className="row  bg-white shadow mb-5">
        <div className="col-md-6 offset-md-3 pt-2 mb-5"></div>
        <h2 className='d-inline-block align-top text-center' >Liste des utilisateurs</h2>
        <table className="table table-striped table-bordered w-100">
            <thead>
                <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Pseudo</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.pseudo}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-primary btn-xs d-inline float-start w-10"><FontAwesomeIcon className='w-10' icon={faPen}/></button>
                        <button className="btn btn-danger btn-xs d-inline float-start w-10"><FontAwesomeIcon className='w-10' icon={faTrash}/></button>
                    </td>
                </tr>
                ))
                ) : (
                    <tr>
                    <td colSpan={3}>Il n'y a pas d'utilisateur !</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    </div>
    
)

export default ItemUsers;