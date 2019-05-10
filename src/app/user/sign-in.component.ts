import { Router } from '@angular/router';
import { Component } from '@angular/core'
import { User } from './user';
import { UserService } from './user.service';
import { UserAuthenticateService } from './user-authenticate.service';


@Component({
 templateUrl:"./sign-in.component.html",
 styleUrls:["./sign-in.component.css"]
})
export class SignInComponent{

    invalidLogin = false;

    user: User;
    constructor(private userService: UserService, 
        private userAuthenticateService:UserAuthenticateService,
        private router:Router) {
          
     }
    ngOnInit() {
        this.user = new User();
    }

    signInDetailsOfUser() {
       // alert("method");
        console.log(this.user);
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        
        this.userService.signInDetailsOfUser(email,password).subscribe((data) => {
            alert("Login Successful");
            console.log(data);
            if (data != null) {
                alert("done");
                this.invalidLogin = this.userAuthenticateService.authenticate(true, email);
                this.router.navigate(['/user/bookRide']);

            }
           else{
                alert("enter correct credentials");
                this.invalidLogin = true;
            }
        });

    }

}