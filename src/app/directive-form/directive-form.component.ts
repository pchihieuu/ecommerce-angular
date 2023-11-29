import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-directive-form',
  templateUrl: './directive-form.component.html',
  styleUrls: ['./directive-form.component.css']
})
export class DirectiveFormComponent {
  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }

}
