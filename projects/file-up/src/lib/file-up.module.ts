import { NgModule } from '@angular/core';
import { FileUpComponent } from './file-up.component';
import { NewWorldComponent } from './new-world/new-world.component';



@NgModule({
  declarations: [
    FileUpComponent,
    NewWorldComponent
  ],
  imports: [
  ],
  exports: [
    FileUpComponent
  ]
})
export class FileUpModule { }
