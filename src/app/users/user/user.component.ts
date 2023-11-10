import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

// Snapshots are a single instance of the url when initialized
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
// Subscribing to the params of the url will update the user object whenever a change on the parameters has been made
    this.route.params
    .subscribe(
      (params: Params) => {
        this.user.id = params ['id'];
        this.user.name = params ['name'];
      } 
    );
  }

}
