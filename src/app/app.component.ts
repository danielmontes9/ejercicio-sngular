import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FormComponent } from './components/form/form.component';
import { EquationComponent } from './components/equation/equation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, FormComponent, EquationComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejercicio-sngular';
  numN: string = "";
  finalResult: string = "";
  flagLoader: boolean = false;

  emitN(response: string) {
    this.flagLoader = true;
    this.numN = response;

    setTimeout(() => {
      this.flagLoader = false
    }, 1000);
  }

  emitResponse(response: string) {
    this.finalResult = response;
  }
}
