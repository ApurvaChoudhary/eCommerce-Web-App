import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  // @ViewChild('f') courseForm: NgForm; 

  onSubmit(form: NgForm): void {
    console.log("Success");
    }
}
