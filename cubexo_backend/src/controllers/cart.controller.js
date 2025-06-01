import HttpStatus from 'http-status-codes';

import * as cartService from '../services/cart.service';


export const addcart = async (req, res, next) => {
    try {
        const data = await cartService.addcart(req.user.id, req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Succesfully created teh  cart"
        })

    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `Can not create teh car : ${error}`
        })
    }
}


export const getcart = async (req, res, next) => {
    try {
        const data = await cartService.getcart(req.user.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Succesfully fetcched  teh  cart"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `Can not fetch teh car : ${error}`
        })
    }
}