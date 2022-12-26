import { Button } from 'react-bootstrap';
import data from '../model/data'
import '../Styles/App.css'
import Item from './Item'

function ItemAstuce(){
    return(
        <div>
            <h3 className='titleList fw-bold fs-2 text-center mt-1'  >Liste de quelques astuces</h3>
            
            <div className='small_liste shadow  mb-5 bg-white '>
                
                <div className="container-fluid">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead> 
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {  data.slice(0,5).map((game,index)=>(
                                            <Item  titre={game.titre}  desc={game.description} />
                                        ))
                                    }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
                
         <Button className='btn btn-primary shadow  mb-5 button '>Toutes les actuces</Button>

        </div>
    )
}

export default ItemAstuce;