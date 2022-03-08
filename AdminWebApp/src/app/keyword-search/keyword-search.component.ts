import { Component, OnInit } from '@angular/core';
import {KeywordService} from '../_services/keyword.service';
import KeywordDetails from '../_models/keyworddetails';
import { Router,ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.css']
})
export class KeywordSearchComponent implements OnInit {

  keywordslist: KeywordDetails[];
  keywordSearchText :string;

  constructor(private data: KeywordService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(){
  }

  displaysearch(keywordSearchText){
    this.data
    .searchKeyword(keywordSearchText)
    .subscribe((data: KeywordDetails[] ) => {
      this.keywordslist = data;

  });
}
}
