import React, { useEffect, useState } from 'react'
import Navbar from '../compoments/Navbar'
import { getproductbyid } from '../Service/productService'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { addCart } from '../Service/cartService';
const SingleProduct = () => {

    const { id } = useParams();
    const [data, setData] = useState({});
    const hello = async () => {
        console.log(id)
        const res = await getproductbyid(id);
        setData(res?.data?.data)
        console.log(res?.data?.data);
    }

    useEffect(() => {
        hello();
    }, [])

    const addtocart = async () => {
        const res = await addCart(id);
        console.log(res)
    }
    return (
        <>
            <Navbar />
            single product
            <Card sx={{ maxWidth: 345 }} style={{ margin: "2rem" }}>
                {/* <NavLink to={`/addproduct/${ele._id}`}> */}
                <CardActionArea>
                    {/* <CardMedia
                                component="img"
                                height="140"
                                image={ele.name}
                                alt={ele.name}
                            /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {data.description}
                        </Typography>
                    </CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {data.price}
                    </Typography>
                </CardActionArea>

                {/* <CardActions> */}
                <button size="small" color="primary" onclick={addtocart}>
                    add to  Cart
                </button>
                {/* </CardActions> */}
                {/* </NavLink> */}
            </Card>
        </>
    )
}

export default SingleProduct
