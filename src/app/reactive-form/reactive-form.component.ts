import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      transactions: this.formBuilder.array([]),
    });
    this.addBlankFormField();
  }

  public initTransactionData(): FormGroup {
    return this.formBuilder.group({
      totalAnnualIncome: [undefined],
      accountTransactionForm: new FormGroup({
        creditTransactionNumber: new FormControl(),
        creditTransactionValue: new FormControl(),
        debitTransactionNumber: new FormControl(),
        debitTransactionValue: new FormControl(),
        repaymentTrackWithCurrentBank: new FormControl(),
      })
    });
  }

  public addBlankFormField() {
    (this.form.get('transactions') as FormArray).push(this.initTransactionData());
  }

  public removeFormField(index: number) {
    (this.form.get('transactions') as FormArray).removeAt(index);
  }

  onSubmit() {
    console.log('form data: ', this.form.value);
  }

}
