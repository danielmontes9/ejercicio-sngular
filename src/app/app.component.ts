import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejercicio-sngular';
  numberNFormControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    console.log(this.numberNFormControl)
  }

}
