import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-increment',
  styleUrl: './increment.css',
  templateUrl: './increment.html',
})
export class Increment {
  value: number = 0;



  increase(){
    this.value++;
  }

  decrease(value: number){
    this.value = Math.max(0, this.value - 1);
  }
}
