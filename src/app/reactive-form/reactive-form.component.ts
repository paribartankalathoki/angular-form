import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      fullName: [undefined],
      email: [undefined],
      contactNumber: [undefined],
      permanentAddress: new FormGroup({
        address: new FormControl(),
        country: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
      }),
      currentAddress: new FormGroup({
        address: new FormControl(),
        country: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
      }),
    });
  }

  onSubmit() {
    console.log('form data: ', this.form.value);
  }

}
