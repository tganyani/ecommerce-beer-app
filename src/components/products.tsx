import React ,{useState} from 'react'
import { useGetAllBeersQuery} from "../services/beerApi";
import {Product } from './product'
import { Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/products.scss'
import CircularProgress from '@mui/material/CircularProgress'

export function Products(){
    const {data, error, isLoading } = useGetAllBeersQuery('')
    const [page , setPage] = useState<number>(1)
    const [searchTerm, setSearchTerm] = useState<string>('')
    function handleNext(){
        if(page < (data.length/5)){
            setPage(page+1)
        }
        else{
            setPage(1)
        }

    }
    function handlePrev(){
        if(page > 1){
            setPage(page-1)
        }
        else{
            setPage(1)
        }

    }
    if(error){
        return <h1>Error while fetching data</h1>
    }
    if(isLoading){
        return <CircularProgress/>
    }
    return(
        <div>
            <div className='search-bar'>
                <input type="text" placeholder='search by name' value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setPage(1)
                    }} />
                <SearchIcon />
            </div>
            <div className="products">
                {
                    data.filter((beer: any) => beer.name.toLowerCase().includes(searchTerm.toLowerCase())).slice((page - 1) * 5, (page) * 5).map((beer: any) => (
                        <Product beer={beer} key={beer.id} />
                    ))
                }

            </div>
            <div className='pagination'>
                {page > 1 && (<Button onClick={() => handlePrev()}>{page - 1}<ArrowBackIosNewIcon />prev</Button>)}
                <div className='current-page'>
                    <p>currentPage:{page}</p>
                </div>
                <Button onClick={() => handleNext()}>next<ArrowForwardIosIcon />{page + 1}</Button>
            </div>
        </div>
    )
}