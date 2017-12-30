import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Rx";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IProduct} from "../models/iProducts";
import {Country} from "../models/country";

@Injectable()
export class GreenDataService {

  private _producturl='http://localhost:8080/country/';

  constructor(private _http: Http) { }

  getproducts(): Observable<IProduct[]> {
    return this._http.get(this._producturl).map((response:Response)=>this.extractData(response))
      .do(data => console.log(JSON.stringify(data)));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getCountries():Observable<Country[]>{
    return this._http.get(this._producturl).map((response:Response)=>{ return <Country[]>response.json(); })
      .catch(this.handleError);
  }

  getCountry(id:string):Observable<Country>{
    return;
  }

  editCountry(country:Country){

  }

  deleteCountry(id:string){

  }

  createCountry(country:Country){

  }

  private handleError(error:Response){
    Observable.throw(error.statusText);
  }

}
