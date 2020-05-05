import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onRegisterSubmit() {
    const user = {
      name: this.addressForm.value.name,
      username: this.addressForm.value.username,
      email: this.addressForm.value.email,
      password: this.addressForm.value.password
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        // Provide some type of success message for good UX
        console.log('success')
        this.router.navigate(['/login']);
      } else {
        // Provide some type of error message for good UX
        console.log('error')
        this.router.navigate(['/register']);
      }
    });
    //console.log(user.name, user.email, user.username, user.password);
  }
}
