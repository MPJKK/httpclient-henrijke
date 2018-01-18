import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpTestComponent} from './http-test/http-test.component';
import {HttpClientModule} from '@angular/common/http';
import { DogTestComponent } from './dog-test/dog-test.component';


@NgModule({
    declarations: [
        AppComponent,
        HttpTestComponent,
        DogTestComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
