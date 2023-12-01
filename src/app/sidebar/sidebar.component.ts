import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar={
    heading : 'A few clicks away from being part from axdif',
    image : 'assets/img/Illustration-1.svg'
  }

  constructor(){}

  ngOnInit(): void {
    
  }

}
