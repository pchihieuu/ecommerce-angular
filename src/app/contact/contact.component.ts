import { Component } from '@angular/core';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faMap = faMap;
  faEnvelope = faEnvelope;
  faMobilePhone = faMobilePhone
  faClock  =  faClock ;


}
