import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    dataSource: string = 'http://localhost:3000/products';
    constructor(private http: HttpClient) {}
    createNewProduct(newProduct: Product): Observable<Product> {
        return this.http.post<Product>(this.dataSource, newProduct);
    }
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.dataSource);
    }
    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(this.dataSource + '/' + id);
    }
    getProductsByPriceRange(
        lowerPrice: number,
        upperPrice: number
    ): Observable<Product[]> {
        return this.http.get<Product[]>(
            this.dataSource +
                '/' +
                '?price_gte=' +
                lowerPrice +
                '&price_lte=' +
                upperPrice
        );
    }
    editProductById(id: number, edittedProduct: Product): Observable<Product> {
        return this.http.put<Product>(
            this.dataSource + '/' + id,
            edittedProduct
        );
    }
    deleteProductById(id: number): Observable<Product> {
        return this.http.delete<any>(this.dataSource + '/' + id);
    }
}
