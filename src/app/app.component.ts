import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejercicio-sngular';
  numberNFormControl = new FormControl('', [Validators.required]);
  flagLoader: boolean = false;

  ngOnInit() {
    console.log(this.numberNFormControl)
    this.activeLoader();
  }

  activeLoader() {
    this.numberNFormControl.valueChanges.subscribe(value => {
      this.flagLoader = true;
      setTimeout(() => this.flagLoader = false, 1000);
    })
  }

}
