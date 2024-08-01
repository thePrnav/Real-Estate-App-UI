import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage(){
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>

                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <SearchBar/>

                    <div className='boxes'>

                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className='box'>
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>

                        <div className='box'>
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>

                    </div>

                </div>

            </div>

            <div className='imgContainer'>
                <img src='https://github.com/safak/react-estate-ui/blob/starter/public/bg.png?raw=true'/>
            </div>
        </div>
    )
}

export default HomePage
