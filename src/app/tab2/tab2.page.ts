import { Component } from '@angular/core';
//import { Validators, FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  /* get Bureau() {
    return this.validations_form.get('bureau');
  }

  get candidat() {
    return this.validations_form.get('candidat');
  }
  
  get nbvoix() {
    return this.validations_form.get('nbvoix');
  } */

  //initForm(){ 
    /* validations_form = this.formBuilder.group({
      bureau: ['', Validators.required],
      candidat: ['', Validators.required],
      nbvoix: ['', Validators.required],
    }); */
  //}

  constructor(/* private formBuilder: FormBuilder */) {}

  /* ngOnInit() {
    this.initForm();
  } */

  /* public sumbit(form: NgForm) {
    console.log(form.value);
  } */

}
