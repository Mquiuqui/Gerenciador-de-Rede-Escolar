import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/auth/auth.account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth :AccountService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("logout")
    this.auth.logout()
  }
}
