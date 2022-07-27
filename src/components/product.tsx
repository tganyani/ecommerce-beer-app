
import * as React from 'react'
import '../styles/product.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'; 
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useGetAllBeersQuery } from '../services/beerApi';
import { addBeerToCurt } from '../features/beer/beerSlice';


export function Product({beer}: any){
    const beersInCurt = useAppSelector((state)=>state.beer)
    const dispatch = useAppDispatch()

    const {data, isLoading} = useGetAllBeersQuery('') 
    const handleShopCurtClick = async (e: React.MouseEvent<HTMLElement>) => {
          if(!isLoading){
            const foundBeer = await data.find((beer:any)=> beer.id === Number(e.currentTarget.id))
            dispatch(addBeerToCurt({
                id: foundBeer.id,
                name: foundBeer.name
            }))
          }     
    }
    return(
        <div className='product' >
            <div className="card">
                <Link className='card-link' to={`/${beer.id}`} >
                    <div className="card-image">
                        <img src={beer.image_url} alt="beer" />
                    </div>
                </Link>
                <hr/>
                    <div className="card-body">
                        <div className="card-name">
                            {beer.name}
                        </div>
                    </div>
                <div className='card-footer'>
                    <div id={beer.id} onClick={handleShopCurtClick}><ShoppingCartIcon className='card-icons' /></div>
                </div>
            </div>
        </div>
    )
}
