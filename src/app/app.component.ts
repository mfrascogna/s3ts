import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { s3t } from '../model/s3t';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 's3ts';
   
  nCountItem=0;  
  s3ts: s3t[];
 
 
  constructor(private http: HttpClient) {
		this.getAllS3ts();
  };
 
  getAllS3ts() {
    
	this.http.get<s3t[]>('http://localhost:3000/getAlls3ts')
		.subscribe(result => this.s3ts = result);
	  
	  console.log(this.s3ts); 
	  
  }
   
  
}

