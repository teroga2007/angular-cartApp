import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  constructor(public router: Router) {}
}
