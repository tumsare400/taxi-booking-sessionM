import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverHomeComponent } from './driver-home.component';
import { DriverWelcomeComponent } from './driver-welcome.component';
import { RouterModule } from '@angular/router';
import { DriverRoutes } from './driver.router';


@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent

    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(DriverRoutes)
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        RouterModule
        
    ],
    providers:[

    ]
})

export class DriverModule{

}