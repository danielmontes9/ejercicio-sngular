import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
      this.valueResponse.emit("Valor Calculado");
    } else {
      this.valueN.emit("");
      this.valueResponse.emit("");
    }
  }
}
