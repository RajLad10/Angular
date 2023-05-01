import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ValidationErrors, AbstractControl} from '@angular/forms';
import { Validation } from '../validators/validation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
          ],
        ],

        email: [
          '',
          [
            Validators.required,
            Validators.email,
          ],
        ],

        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
          ],
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],

        confirmPassword: [
          '',
          [
            Validators.required,
          ],
        ],
      },
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    )
  }

  get f(): { [key : string]: AbstractControl}
  {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if(this.form.valid)
    {
      return;
    }

    console.log(JSON.stringify(this.form.value, null , 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
