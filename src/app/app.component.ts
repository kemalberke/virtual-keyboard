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

  /*  public keyPress(char: string) {
    this.input += char;
    this.inputForm.setValue(this.input);
  } */

  public keyPress(char: string) {
    this.inputForm.setValue(this.inputForm.value + char);
  }

  public backspace() {
    this.inputForm.setValue(this.inputForm.value.substring(0, this.inputForm.value.length - 1));
  }

  public deleteAll() {
    this.inputForm.setValue('');
  }

}
