import { Component } from '@angular/core';

export type EditorType = 'name' |'profile';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {
  editor: EditorType = 'name';
  get showDirective() {
    return this.editor == 'name';

  }
  get showProfileEditor() {
    return this.editor == 'profile';
  }
  toggleEditor(type: EditorType) {
    this.editor =type;
  }

}
