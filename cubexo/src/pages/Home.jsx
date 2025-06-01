import React, { useEffect, useState } from 'react'
import Navbar from '../compoments/Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { getProduct } from '../Service/productService';
import { NavLink } from 'react-router-dom';


const Home = () => {

    const [data, setData] = useState([]);

    const productsss = async () => {
        const res = await getProduct();
        console.log(res?.data?.data)
        setData(res?.data?.data)

        console.log("hellllllllo", data)
        console.log(res);
    }


    useEffect(() => {
        productsss();
    }, [])

    return (
        <>
            <Navbar />

            <div style={{ padding: "10rem " }}>
                {data.map((ele, index) => (

                    <Card sx={{ maxWidth: 345 }} style={{ margin: "2rem" }}>
                        <NavLink to={`/addproduct/${ele._id}`}>
                            <CardActionArea>
                                {/* <CardMedia
                                component="img"
                                height="140"
                                image={ele.name}
                                alt={ele.name}
                            /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {ele.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {ele.description}
                                    </Typography>
                                </CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {ele.price}
                                </Typography>
                            </CardActionArea>

                            <CardActions>
                                <Button size="small" color="primary">
                                    add to  Cart
                                </Button>
                            </CardActions>
                        </NavLink>
                    </Card>
                ))}



            </div>
        </>
    )
}

export default Home
