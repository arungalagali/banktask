import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable()
	export class MyHttpService {
    	constructor(private _http:HttpClient) {}

    	getDataObservable() {
    		return this._http.get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI");
		}

		getbank(id:number){
			return this.getDataObservable().subscribe(bank => (bank => bank.bank_id));
		}
	}
