import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dob: Date = new Date(); 

  
  summaries = [
    {
      heading : 'Working days',
      result : '2 days'
    },
    {
      heading : 'Working Hour',
      result : '13 hr 14 min'
    },
    {
      heading : 'Exceptional Attendance ',
      result : '0 hari'
    },
    {
      heading : 'Leave taken',
      result : '0 Hari'
    },
    {
      heading : 'Overtime',
      result : '00 hr 00 min'
    },
    {
      heading : 'Claim',
      result : 'IDR 0'
    },
  ]
  
tasks = [
  {
    role : 'UI/UX Designer',
    goals :'[Wms][Web][Task] Create Goal Design',
    attach : '44',
    comment : '1',
    difficulty :'medium',
    date :'06 Aug 2021'
  },
  {
    role : 'UI/UX Designer',
    goals :'[Wms][Chat] Improve Design',
    attach : '44',
    comment : '1',
    difficulty :'medium',
    date :'06 Aug 2021'
  },
  {
    role : 'UI/UX Designer',
    goals :'[Wms][Task] Improve Dashboard',
    attach : '44',
    comment : '1',
    difficulty :'medium',
    date :'06 Aug 2021'
  },

]
  profile={
    name : 'John Doe',
    company : 'Google Indonesia',
    id : 'PT-GOO34',
    position :'Senior Front-End Developer',
    date :'23 Feb 2018',
    years :'4 Years 5 Months 2 Days'
  }
}
