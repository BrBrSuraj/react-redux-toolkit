import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './features/infoSlice'
import { changeAddress } from './features/addressSlice'
import { changeProductName } from './features/productSlice'
import ShowAllProductUsingRtk from './components/productComponent/ShowAllProductUsingRtk'

const App = () => {
  // to call the reducer's function inside the slice, we need to use dispatch hook then able to call the functions
  // let dispatch = useDispatch()
  // to get the variable from store we need to use the useSelector hook which has one function with parameter store and this must return store.variable_name of store
  // let infoData = useSelector((store) => {
  //   return (store.info)
  // })
  // let addressData = useSelector((store) => { return (store.address) })
  // let productData = useSelector((store) => { return (store.product) })
  // console.log(infoData)
  // console.log(addressData)
  // console.log(productData)
  return (
    <div>
      {/* <button onClick={() => {
        dispatch(changeName("hari"))
      }}>Change</button>
      <br></br>
      <button onClick={() => {
        dispatch(changeAddress("Hetauda"))
      }}>changeAddress</button>
      <br></br>
      <button onClick={() => {
        dispatch(changeProductName("iphone xs-max"))
      }}>changeAddress</button> */}
      <br></br>
      <ShowAllProductUsingRtk></ShowAllProductUsingRtk>
    </div>
  )
}

export default App
