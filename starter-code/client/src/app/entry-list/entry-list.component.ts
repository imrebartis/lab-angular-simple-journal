import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],

})
export class EntryListComponent implements OnInit {

  data: any;

  constructor(private service: AngularService, private router: Router) { }

  ngOnInit() {
  this.service.getTitleAndDate().subscribe((data) => this.data = data);
  }

  // viewDetails(id) {
  //   this.router.navigate(['item', id]);
  // }
}
