import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatSidenav, MatSidenavContainer, MatListModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

}
