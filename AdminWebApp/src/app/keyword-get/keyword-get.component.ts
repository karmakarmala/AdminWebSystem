import { Component, OnInit } from '@angular/core';
import {KeywordService} from '../_services/keyword.service';
import KeywordDetails from '../_models/keyworddetails';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-keyword-get',
  templateUrl: './keyword-get.component.html',
  styleUrls: ['./keyword-get.component.css']
})
export class KeywordGetComponent implements OnInit {

  keywordslist: KeywordDetails[];
  keywordID :number;

  constructor(private data: KeywordService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(){

    this.data
    .getKeywordList()
    .subscribe((data: KeywordDetails[] ) => {
      this.keywordslist = data;

  });

  }

   // Method to delete the keyword 
   deleteKeyword(keywordID) {
     console.log("from delete :" + keywordID)
    this.route.params.subscribe(params => {
      this.data.deleteKeyword(keywordID);
      this.router.navigateByUrl('keywords');
    });
  }
}
