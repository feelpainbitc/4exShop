import { observer } from 'mobx-react-lite'
import { Context } from '..'
import React, { useContext } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'

/**
* @author
* @function BrandBar
**/

export const BrandBar = observer((props) => {
    const {device}=useContext(Context)
  return(
    <Form className="d-flex">
        {device.brands.map(brand=>
            <Card 
                style={{cursor:'pointer'}}
                key={brand.id}
                className="p-3"
                border={brand.id===device.selectedBrand.id ? 'primary': 'light'}
                onClick={()=>device.setSelectedBrand(brand)}
            >
                {brand.name}
            </Card>
            )}
    </Form>  
   )

 });