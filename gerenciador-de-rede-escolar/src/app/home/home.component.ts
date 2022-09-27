import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/auth.account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rota: Router
  constructor(
    private auth :AccountService,
    private route: Router
  ) {
    this.rota = this.route
   }

  ngOnInit(): void {

  }

  logout(){
    console.log("logout")
    this.auth.logout()
  }
}
