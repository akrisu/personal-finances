import { Component, OnInit } from '@angular/core';
import { ListService } from './../list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    listService: ListService
  ) { }

  ngOnInit() {
  }



}
