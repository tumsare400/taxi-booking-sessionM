
import { Component }from '@angular/core';

import { UserService } from './user.service';

import { BookRide } from './user';
import { Subscriber } from 'rxjs';
import { from } from 'rxjs';

@Component({

    selector: "book-Ride",

    templateUrl: "./book-ride.component.html"

})

export class BookRideComponent {

   bookRide:BookRide;
    constructor (private userService: UserService, private router:Router){}

    ngOnInit(){
        this.bookRide=new BookRide();

    }
    bookRideOfUser(){
        console.log(this.bookRide);
        let  pickUpAt = (<HTMLInputElement>document.getElementById("pickUpAt")).value;
        let dropAt = (<HTMLInputElement>document.getElementById("dropAt")).value;

        this.userService.bookRideOfUser(pickUpAt,dropAt).subscribe((data)=>{
            alert("Ride booked Successful");
            console.log(data);
            if (data != null) {
                alert("done");
              
                this.router.navigate(['/user/rideNow']);

            }
           else{
                alert("enter correct credentials");
                
            }
        })
    }

    

}

