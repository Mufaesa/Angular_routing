import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    // Do something complex

    // Array = route path
    // queryParams = everything after ? (ex ?allowEdit=1)
    // fragment = everything after # (ex for going to a certain location on the page)
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:"loading"});
  }

}
