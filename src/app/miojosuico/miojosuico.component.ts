import { Component } from '@angular/core';

@Component({
  selector: 'app-miojosuico',
  templateUrl: './miojosuico.component.html',
  styleUrls: ['./miojosuico.component.scss']
})
export class MiojosuicoComponent { 
  title='O miojo é o alimento mais podre da terra, quem come é hétero.'
  metodo(){this.title='ou seja quem come miojo é gay.'

  }

}
