import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allworld-lib';

  fileToUpload: File | null = null;
  name={1:"daiuos"}; 
  constructor(private http:HttpClient){

  }
  
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onUpload() {
    if (!this.fileToUpload) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);
  

    this.http.post('https://upload8ing-files-default-rtdb.firebaseio.com/',formData ).subscribe((response) => {
      debugger
      console.log('File uploaded successfully!');
    });

  }
}
