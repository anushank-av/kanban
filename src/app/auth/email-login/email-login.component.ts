import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup;

  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;
  serverMessage: string;

  constructor(private fb: FormBuilder,
    private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    });
  }

  changeType(type): void{
    this.type = type;
  }

/*                  Op Type getters                           */
  get isLogIn(): boolean{
    return this.type === 'login';
  }
  get isSignUp(): boolean{
    return this.type === 'signup';
  }
  get isReset(): boolean{
    return this.type === 'reset';
  }

/*                   Form field getters                       */
  get email(): AbstractControl{
    return this.form.get("email");
  }
  get password(): AbstractControl{
    return this.form.get("password");
  }
  get confirmpassword(): AbstractControl{
    return this.form.get("confirmPassword");
  }

  get isPasswordMatching(): boolean {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password.value === this.confirmpassword.value;
    }
  }

  /*                    Form Actions                           */
  async submitAction(): Promise<any>{
    this.loading = true;
    try {
      switch (this.type) {
        case 'login':
          await this.fireAuth.signInWithEmailAndPassword(this.email.value, this.password.value);
          break;
        case 'signup':
          await this.fireAuth.createUserWithEmailAndPassword(this.email.value, this.password.value);
          break;
        case 'reset':
          await this.fireAuth.sendPasswordResetEmail(this.email.value);
          this.serverMessage = "Please check your E-Mail.";
          break;
      }
    } catch (error) {
      this.serverMessage = error;
    }
    this.loading = false;
  }

}
