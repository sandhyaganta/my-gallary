import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emplyees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplyees.component.html',
  styleUrl: './emplyees.component.css'
})
export class EmplyeesComponent {
  buttonColor: string = 'green';
  buttonIcon: string = '&#10010;';
  toggleButton(){
    if (this.buttonColor === 'green') {
      this.buttonColor = 'red';
      this.buttonIcon = '&#9866;'; // minus icon
    } else {
      this.buttonColor = 'green';
      this.buttonIcon = '&#10010;'; // plus icon
    }

  }

  toggleButton5(){
    // if (this.buttonColor === 'green') {
    //   this.buttonColor = 'red';
    //   this.buttonIcon = '&#9866;'; // minus icon
    // } else {
    //   this.buttonColor = 'green';
    //   this.buttonIcon = '&#10010;'; // plus icon
    // }

  }

}
