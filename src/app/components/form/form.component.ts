import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { fibonacci, triangular, nthPrimo } from '../../shared/utils/series';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output () valueResponse: EventEmitter<string> = new EventEmitter();
  @Output () valueN: EventEmitter<string> = new EventEmitter();
  numberNFormControl = new FormControl("", [Validators.required]);

  ngOnInit() {
    this.activeLoader();
  }

  activeLoader() {
    this.numberNFormControl.valueChanges.subscribe(value => {
      this.calculate();
    })
  }

  calculate() {
    if(this.numberNFormControl.value) {
      this.valueN.emit(this.numberNFormControl.value);
      const n = parseInt(this.numberNFormControl.value);
      const result = ( (3*fibonacci(n)) - (3*triangular(n-1)) ) / ( (n - 10)*nthPrimo(n+2) );

      this.valueResponse.emit(result.toString());
    } else {
      this.valueN.emit("");
      this.valueResponse.emit("");
    }
  }
}
