import Slider from '../../components/slider/Slider'
import './spage.scss'
import {singlePostData, userData} from '../../lib/dummydata'
import Map from '../../components/map/Map'
function SPage(){
    return(
        <div className='spage'>
            <div className='details'>
              <div className='wrapper'>
                <Slider images={singlePostData.images}/>
                <div className='info'>
                    <div className='top'>
                        <div className='post'>
                            <h1>{singlePostData.title}</h1>
                            <div className='address'>
                                <img src='https://github.com/safak/react-estate-ui/blob/starter/public/pin.png?raw=true'/>
                                <span>{singlePostData.address}</span>
                            </div>
                            <div className='price'>$ {singlePostData.price}</div>
                        </div>
                        <div className='user'>
                            <img src={userData.img} />
                            <span>{userData.name}</span>
                        </div>
                    </div>

                    <div className='bottom'>
                        {singlePostData.description}
                    </div>
                </div>
              </div>
            </div>

            <div className='features'>
              <div className='wrapper'>

                <p className='title'>General</p>
                <div className='listVertical'>
                    <div className='feature'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/utility.png?raw=true'/>
                        <div className='featureText'>
                            <span>Utilities</span>
                            <p>Renter is responsible</p>
                        </div>
                    </div>
                    <div className='feature'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/pet.png?raw=true'/>
                        <div className='featureText'>
                            <span>Pet Policy</span>
                            <p>Pets Allowed</p>
                        </div>
                    </div>
                    <div className='feature'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/fee.png?raw=true'/>
                        <div className='featureText'>
                            <span>Property Fees</span>
                            <p>Must have 3x the rent in total household income</p>
                        </div>
                    </div>
                </div>

                <p className='title'>Room Sizes</p>
                <div className='sizes'>
                    <div className='size'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/size.png?raw=true'/>
                        <span>80 sqft</span>
                    </div>
                    <div className='size'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/bed.png?raw=true'/>
                        <span>2 beds</span>
                    </div>
                    <div className='size'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/bath.png?raw=true'/>
                        <span>1 bathroom</span>
                    </div>
                </div>

                <p className='title'>Nearby Places</p>
                <div className='listHorizontal'>
                    
                <div className='feature'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/school.png?raw=true'/>
                        <div className='featureText'>
                            <span>School</span>
                            <p>250m away</p>
                        </div>
                    </div>

                    <div className='feature'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/pet.png?raw=true'/>
                        <div className='featureText'>
                            <span>Bus Stopy</span>
                            <p>100m away</p>
                        </div>
                    </div>

                    <div className='feature'>
                        <img src='https://github.com/safak/react-estate-ui/blob/starter/public/fee.png?raw=true'/>
                        <div className='featureText'>
                            <span>Restaurant</span>
                            <p>200m away</p>
                        </div>
                    </div>
                    
                </div>

                <p className='title'>Location</p>           
                <div className='mapContainer'>
                    <Map items={[singlePostData]}/>
                </div>

                <div className='buttons'>

                <button>
                    <img src='https://github.com/safak/react-estate-ui/blob/starter/public/chat.png?raw=true'/>
                    Send a Message
                </button>

                <button>
                    <img src='https://github.com/safak/react-estate-ui/blob/starter/public/save.png?raw=true'/>
                    Save the Place
                </button>

                </div>

                
              </div>
            </div>
        </div>
    )
}

export default SPage