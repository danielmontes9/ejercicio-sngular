import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-equation',
  standalone: true,
  imports: [],
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.scss'
})
export class EquationComponent {

  @Input () numberN: string = "";
  @Input () result: string = "";

  ngOnChanges(c: SimpleChange) {
    console.log(c);
  }

}
