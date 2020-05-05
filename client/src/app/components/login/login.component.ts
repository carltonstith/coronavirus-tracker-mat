import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // addressForm = this.fb.group({
  //   company: null,
  //   username: [null, Validators.required],
  //   password: [null, Validators.required],
  //   address: [null, Validators.required],
  //   address2: null,
  //   city: [null, Validators.required],
  //   state: [null, Validators.required],
  //   postalCode: [null, Validators.compose([
  //     Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  //   ],
  //   shipping: ['free', Validators.required]
  // });
  hide:boolean = true;
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private flashMessageService: FlashMessagesService, private authService: AuthService) {}

  ngOnInit(): void {

  }

  onLoginSubmit() {
    //console.log(this.addressForm.value.password);
    const user = {
      username: this.addressForm.value.username,
      password: this.addressForm.value.password
    }

    // Login User
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        // Provide some type of success message for good UX
        console.log('success')
        this.router.navigate(['dashboard']);
      } else {
        // Provide some type of error message for good UX
        console.log('error')
        //this.router.navigate(['login']);
      }
    });
  }
}
