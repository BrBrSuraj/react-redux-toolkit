import React, { useEffect } from 'react'
import { useIndexQuery } from '../../services/api/productService'

const ShowAllProductUsingRtk = () => {
     let {isError,isLoading,isSuccess,error,data}=useIndexQuery()
     let products=data||[]
     
    useEffect(()=>{
        if(isError){
            console.log(error?.error)
        }
    },[isError])
   
  return (
    <div>
      {
        products.map((value,i)=>{
            return <div style={{border:"1px solid"}} key={i}>
                <ul style={{listStyle:"none"}}>
                    <li>|{value?.title}</li>
                    <li>|{value?.price}</li>
                    <li>|{value?.description}</li>
                </ul>
            </div>
        })
      }
    </div>
  )
}

export default ShowAllProductUsingRtk
