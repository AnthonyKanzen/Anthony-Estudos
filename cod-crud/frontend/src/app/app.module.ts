import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }