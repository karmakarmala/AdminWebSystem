import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import KeywordDetails from '../_models/keyworddetails';
import PromoDocuments from '../_models/promodocuments';

@Injectable({providedIn: 'root'})

export class KeywordService {
  constructor(private http: HttpClient) { }

  getKeywordList(){
    return this.http.get<KeywordDetails[]>('https://localhost:5001/api/Keyword/GetKeywords')
  }

getPromoDocList(){
  return this.http.get('https://localhost:5001/api/promo/getpromos');
}
  
createKeyword(keyword,promoDocDesc){
  console.log(" from service promoname: " + promoDocDesc);
  console.log(keyword,promoDocDesc);

  const obj = {
    keyword,
    promoDocDesc 
    };
    return this.http.post('https://localhost:5001/api/Keyword/createkeyword',obj)
    .subscribe(res => console.log('Keyword Created'));
  }

  getKeyword(KeywordID: number){
    console.log(KeywordID);
    return this.http.get('https://localhost:5001/api/Keyword/GetKeyword/' + KeywordID)
  }

  searchKeyword(keyword:string)
  {
    console.log(keyword);
    return this.http.get('https://localhost:5001/api/Keyword/Search/' + keyword)
  }

  updateKeyword(keyword,promoDocDesc,keywordID){
    const obj = {
      keyword,
      promoDocDesc
    };

    console.log(obj);
    return this.http.put('https://localhost:5001/api/keyword/updatekeyword/' + keywordID,obj)
    .subscribe(res=>console.log("Update complete"));
  }

  deleteKeyword(keywordID){
    console.log(keywordID);
    return this.http.delete('https://localhost:5001/api/keyword/deletekeyword/' + keywordID)
    .subscribe(res=>console.log("Delete complete"));
  }
  
  
}
