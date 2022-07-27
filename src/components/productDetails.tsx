import React  from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllBeersQuery} from "../services/beerApi";
import '../styles/productDetails.scss'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { v4 as uuid4 } from 'uuid'

export function ProductDetails(){
    const navigate = useNavigate()
    const {id} = useParams<string >()
    const {data, isLoading} = useGetAllBeersQuery('') 
    if(isLoading){
        return <p>Looding ............??</p>
    } 
    const returnHome = ()=>{
        navigate('/')
    }
    return(
        <div >
            {
                data.filter((beer:any) => beer.id === Number(id)).map((beer: any)=>(
                    <div key={beer.id} className='product-details'>
                        <h3>beer number {beer.id}</h3>
                        <div className='sub-details'>
                            <div className='back-home' onClick={returnHome}>
                                <ArrowBackIcon id='arrow'/>
                            </div>
                            <div className='image-description'>
                                <img src={beer.image_url} alt="product-image" />
                            </div>
                            <div className='reciepe'>
                                <div className='food-pairing'>
                                    <h5>food pairing</h5>
                                    <ul>
                                        {
                                            beer.food_pairing.map((b: string) => (
                                                <li key={uuid4()}>{b}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className='tagline-abv'>
                                    <h5>tagline and abv</h5>
                                    <p>tagline: {beer.tagline}</p>
                                    <p>abv: {beer.abv}</p>
                                </div>
                            </div>
                            <div className='description'>
                                <h5>beer description</h5>
                                <p>{beer.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}