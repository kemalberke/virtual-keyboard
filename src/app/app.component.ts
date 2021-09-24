import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'virtual-keyboard';

  public input = '';
  inputForm = new FormControl(this.input);
  inputNumber = '';

  /* public keyPress(char: string) {
    this.input += char;
    this.inputForm.setValue(this.input);
  } */

  public keyPress(char: string) {
    if (this.inputForm.value.length <= 7) {
      this.inputForm.setValue(this.inputForm.value + char);
    }
  }

  public backspace() {
    this.inputForm.setValue(this.inputForm.value.substring(0, this.inputForm.value.length - 1));
  }

  public clear() {
    this.inputForm.setValue('');
  }

  public submit() {
    if (this.inputForm.value.length == 8) {
      document.getElementById("cardNumber")!.innerHTML = 'Your Card Number: ' + this.inputForm.value;
    } else {
      document.getElementById("cardNumber")!.innerHTML = 'Your card number needs to have 8 characters.';
    }
  }
}
