import './filtter.scss'

function Filtter(){
    return(
        <div className='filtter'>
            <h1>Search results for <b>London</b></h1>
            <div className='top'>
                <div className='item'>
                    <label htmlFor='city'>Loction</label>
                    <input type='text' id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            <div className='bottom'>
                <div className='item'>
                    <label htmlFor='type'>Type</label>
                    <select name='type' id='type'>
                        <option value=''>any</option>
                        <option value='buy'>Buy</option>
                        <option value='rent'>Rent</option>
                    </select>
                </div>

                <div className='item'>
                    <label htmlFor='property'>Property</label>
                    <select name='property' id='property'>
                        <option value=''>any</option>
                        <option value='apartment'>Apartment</option>
                        <option value='house'>House</option>
                        <option value='condo'>Condo</option>
                        <option value='land'>Land</option>
                    </select>
                </div>

                <div className='item'>
                    <label htmlFor='minPrice'>Min Price</label>
                    <input 
                    type='number' 
                    id='minPrice' 
                    name='minPrice' 
                    placeholder='any'                   
                    />
                </div>

                <div className='item'>
                    <label htmlFor='maxPrice'>Max Price</label>
                    <input 
                    type='number' 
                    id='maxPrice' 
                    name='maxPrice' 
                    placeholder='any'                   
                    />
                </div>

                <div className='item'>
                    <label htmlFor='bedroom'>Bedroom</label>
                    <input 
                    type='text' 
                    id='bedroom' 
                    name='bedroom' 
                    placeholder='any'                   
                    />
                </div>
                
                <button>
                    <img src='https://github.com/safak/full-stack-estate/blob/main/client/public/search.png?raw=true'/>
                </button>
            </div>
        </div>
    )
}

export default Filtter