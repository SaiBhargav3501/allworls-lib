import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-new-world',
  templateUrl: './new-world.component.html',
  styleUrls: ['./new-world.component.css']
})
export class NewWorldComponent {
  @Output() fileUploaded = new EventEmitter<File>();

  selectedFile?: File|null;

  onFileSelect(files: FileList) {
    this.selectedFile = files.item(0);
  }

  upload() {
    if (this.selectedFile) {
      this.fileUploaded.emit(this.selectedFile);
    }
  }


}
