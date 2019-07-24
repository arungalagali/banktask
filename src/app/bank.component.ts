import { Component,OnInit } from '@angular/core';
import { MyHttpService } from '../assets/bank.service';
import { PagerService } from '../assets/page.service';
import { FilterPipe } from '../assets/filter.pipe';
import { Router } from '@angular/router';

@Component({
	selector : 'bank',
	templateUrl : './bank.component.html',
	providers : [MyHttpService, PagerService, FilterPipe]
})

export class BankComponent implements OnInit{
	// private dataUrl = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
	// testResponse;
	private banks = [];
	constructor(private router:Router, private myHttp: MyHttpService, private pageservice:PagerService) {
    }

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    ngOnInit() {
    	this.myHttp.getDataObservable()
    		.subscribe((res:any[])=>{
    			// console.log(res);
    			this.banks = res;
    			console.log(this.banks);

    			this.setPage(1);
    		});
    		// console.log(this.banks);
   	}
   	pagesize = 10;
   	setPage(page: number) {
        // get pager object from service
        this.pager = this.pageservice.getPager(this.banks.length, page,this.pagesize);

        // get current page of items
        this.pagedItems = this.banks.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    onSelect(bank){
    	// console.log(bank);
    	this.router.navigate(['/bankdetail',bank.bank_id]);
    }
}