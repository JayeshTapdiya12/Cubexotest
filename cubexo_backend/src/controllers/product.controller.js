import HttpStatus from 'http-status-codes';
import * as productService from '../services/product.service';


export const addProduct = async (req, res, next) => {
    try {
        const data = await productService.addProduct(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "added Succefully data"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            data: data,
            message: `Can not added produc : ${error}`
        })
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const data = await productService.getProduct();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Fetched Succefully data"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            // data: data,
            message: `Can not Fetched produc : ${error}`
        })
    }
}

export const getproductId = async (req, res, next) => {
    try {
        const data = await productService.getproductId(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Fetched Succefully data"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            // data: data,
            message: `Can not Fetched produc : ${error}`
        })
    }
}