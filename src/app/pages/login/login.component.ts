import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  public usernameFormControl = new FormControl(null,[Validators.required,Validators.email]);
  public passwordFormControl = new FormControl(null,[Validators.minLength(4)]);

  public userForm!: FormGroup;
  
  constructor (private route:ActivatedRoute,private router : Router){}


  ngOnInit(): void {
    this.userForm = new FormGroup({
      username : this.usernameFormControl,
      password: this.passwordFormControl,
    });
    
  }

onsubmit(){
  console.log(this.userForm.value);
  this.router.navigate(['/signup']);

}

}
