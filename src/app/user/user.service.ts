import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable()

export class UserService{
    baseUrl="http://localhost:8011";
    
    // private baseUrl = '/api';
    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

    constructor(private http:HttpClient){

    }
    signUpDetailsOfUser(user:User):Observable<User>{
      console.log(user);
        return this.http.post<User>(this.baseUrl+"/signUp",user,{headers: this.headers});
    }
   
   
    signInDetailsOfUser(email:string,password:string){
        
          return this.http.get<User>(this.baseUrl+"/loginuser/"+email+"/"+password);
      }
      // bookRideOfUser(bookRide:BookRide):Observable<BookRide>{
      //   return this.http.post<BookRide>(this.baseUrl+"/bookride",bookRide,{headers: this.headers});
      // }
} 