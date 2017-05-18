import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularService } from '../angular.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],

})
export class ItemComponent implements OnInit {
  item: any=[];

  constructor(private route: ActivatedRoute, private angularservice: AngularService) { }

  ngOnInit() {
    console.log("onInit")
    this.route.params.subscribe((params) => this.getDetails(params['id']));

  }
  getDetails(id){
    this.angularservice.getJournal(id)
      .subscribe((item) => {
        console.log("item, ", item)
        this.item = item;
      });
  }
}
