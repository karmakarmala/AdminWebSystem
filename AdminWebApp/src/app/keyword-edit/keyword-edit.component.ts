import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeywordService } from '../_services/keyword.service';
import { Router,ActivatedRoute } from '@angular/router';
import { max } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import PromoDocuments from '../_models/promodocuments';

declare var $: any;

@Component({
  selector: 'app-keyword-edit',
  templateUrl: './keyword-edit.component.html',
  styleUrls: ['./keyword-edit.component.css']
})
export class KeywordEditComponent implements OnInit {
  angForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:any = {};
  disabled=false;
  closeDropdownSelection=false;
  promodocList: [];
  promoString: string;
  promoName:[];
  keywordDetails: any = {};
  keywordID: number;
  keyword:string

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ms: KeywordService,
    private fb: FormBuilder,
    private _elementRef: ElementRef) {
  }

  ngOnInit() {

    // Get keyword details to edit
    this.route.params.subscribe(params => {
      this.ms.getKeyword(params['id']).subscribe(res => {
        this.keywordID = params['id'];
        this.keywordDetails = res;

    // Get all Promo documents and bind to the dropdown
        let tmp = [];
        this.ms.getPromoDocList().subscribe((data: any) => {
          this.promodocList = data;
          for (let i = 0; i < this.promodocList.length; i++) {
            tmp.push({ id: this.promodocList[i], name: this.promodocList[i] });
          }
          this.dropdownList = tmp;

    // Bind the selected promo docs from the keyord.promoDocDesc
          this.promoName = this.keywordDetails.promoDocDesc.split(",",10);
          var i: number;
          for (i = 0; i < this.promoName.length; i++) {
            console.log("Name", this.promoName[i]);
            this.selectedItems.push({ id: this.promoName[i], name: this.promoName[i] });
            this.angForm.patchValue({ promoDocDesc: this.selectedItems });
            this.promoString=this.promoName[i];
          }
         
        });

  
        // Drop down settings
        this.dropdownSettings = {
          singleSelection: true,
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          allowSearchFilter: true,
          closeDropDownOnSelection: this.closeDropdownSelection,
          idField: 'id',
          textField: 'name'
        };

      });
    });
    // Create the form
    this.createForm();

  }

  createForm() {
    this.angForm = this.fb.group({
      keyword: ['', [Validators.required, Validators.maxLength(100)]],
      promoDocDesc: [this.selectedItems, Validators.required]
    });
  }
  
  // Method to update the keyword details
  updateKeyword(keyword) {
    this.route.params.subscribe(params => {
      //var updatedPromo = this.selectedItems.map(o => o.name).join(",");
      console.log("from update:  " + keyword +","+ this.promoString +","+ params['id']);
      this.ms.updateKeyword(keyword, this.promoString, params['id']);
      this.router.navigateByUrl('keywords');
    });
  }


  onItemSelect($item) {
    this.selectedItems.push($item.name);
    console.log(this.selectedItems);
    this.promoString=$item.name;
  }

  onItemDeselect($item) {
    console.log($item.name);
    this.selectedItems.forEach((item, index) => {
      if (item.name === $item.name)
        this.selectedItems.splice(index, 1);
    });
  }

  onSelectAll(items: any) {
  }


  toggleCloseDropdownSelection() {
    this.closeDropdownSelection = !this.closeDropdownSelection;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings,{closeDropDownOnSelection: this.closeDropdownSelection});


  }
  
}
