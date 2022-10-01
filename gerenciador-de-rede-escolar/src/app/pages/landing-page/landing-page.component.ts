import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(){
  
    window.scroll(0,0)
    this.sair()
  }

  sair(){
    this.route.navigate(['/home'])
  }
}
