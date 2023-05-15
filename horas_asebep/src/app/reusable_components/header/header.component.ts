import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private location: Location
  ) {}
  back(): void {
    this.location.back()
  }
}
