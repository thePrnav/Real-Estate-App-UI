import {Link} from 'react-router-dom'
import './card.scss'


function Card({item}){
    return (
        <div className='card'>
            <Link to={`/${item.id}`} className='imageContainer'>
                <img src={item.images} />
            </Link>
            <div className='textContainer'>
                <h2 className='title'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src='https://github.com/safak/full-stack-estate/blob/main/client/public/pin.png?raw=true'/>
                    <span>{item.address}</span>
                </p>
                <p className='price'>$ {item.price}</p>
                <div className='bottom'>
                    <div className='features'>
                        <div className='feature'>
                            <img src='https://github.com/safak/full-stack-estate/blob/main/client/public/bed.png?raw=true'/>
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className='feature'>
                            <img src='https://github.com/safak/full-stack-estate/blob/main/client/public/bath.png?raw=true'/>
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <div className='icon'>
                            <img src='https://github.com/safak/full-stack-estate/blob/main/client/public/save.png?raw=true'/>
                        </div>
                        <div className='icon'>
                            <img src='https://github.com/safak/full-stack-estate/blob/main/client/public/chat.png?raw=true' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card