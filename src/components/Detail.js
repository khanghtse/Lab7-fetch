import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms'

function Detail() {

    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });

    return (
        <div className='container'>
            <div className='card' style={{ width: '80%', marginLeft: '10%' }}>
                <img src={`../${film.img}`} alt='' className='card-img-top' />
                <div className='card-body'>
                    <h3 className='card-title'>{film.title}</h3>
                    <h4 className='card-subtitle'>{film.year}</h4>
                    <h5 className='card-subtitle'>{film.nation}</h5>
                    <p className='card-text'>{film.info}</p>
                    <div className='product-bottom-details'></div>
                </div>
            </div>
        </div>
    );
}

export default Detail;