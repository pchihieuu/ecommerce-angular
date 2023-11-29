import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city:[''],
      state: [''],
      zip: [''],

    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])

  });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  constructor(private fb: FormBuilder) {}
  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street:'1233 street'
      }
    });
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
