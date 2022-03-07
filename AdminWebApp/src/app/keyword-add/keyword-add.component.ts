import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeywordService } from '../_services/keyword.service';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import PromoDocuments from '../_models/promodocuments';

@Component({
  selector: 'app-keyword-add',
  templateUrl: './keyword-add.component.html',
  styleUrls: ['./keyword-add.component.css']
})
export class KeywordAddComponent implements OnInit {
  angForm: FormGroup;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:any = {};
  disabled=false;
  closeDropdownSelection=false;

  promodocList: [];
  promoString: string;
  
  constructor(
    private fb: FormBuilder,
    private ms: KeywordService,
    private router: Router,
    private _elementRef: ElementRef
  ) { }

  createForm() {
    this.angForm = this.fb.group({
      keyword: ['', [Validators.required, Validators.maxLength(100)]],
      promoDocDesc: [this.selectedItems, Validators.required]

    });
  }

  createKeyword(keyword) {
    console.log(" from compo promoname: " + this.promoString);
    this.ms.createKeyword(keyword, this.promoString);
    this.router.navigateByUrl('keywords');
  }
  ngOnInit() {
    this.createForm();

    let tmp = [];
    this.ms.getPromoDocList().subscribe((data: any) => {
      this.promodocList = data;
      for (let i = 0; i < this.promodocList.length; i++) {
        tmp.push({ id: i, name: this.promodocList[i] });
      }
      this.dropdownList = tmp;
      console.log(data);
    });

    this.dropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection,
      idField: 'id',
      textField: 'name'
    };


  }
  onItemSelect($item) {
    this.selectedItems.push($item.name);
    console.log(this.selectedItems);
    this.promoString=$item.name;
  }



  toggleCloseDropdownSelection() {
    this.closeDropdownSelection = !this.closeDropdownSelection;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings,{closeDropDownOnSelection: this.closeDropdownSelection});
}

  
  



}