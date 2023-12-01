import { Component } from '@angular/core';

interface People { 
  leavecode?: string; 
  request?: string; 
  leavetype?: string; 
  startdate?: string;
  enddate? : string;
  duration? : string;
  daytype? : string;
  leavecategory? : string;
  status? : string;
  reason? :string;

} 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  sizes!: any[];
  tableData: People[] = []; 
  cols: any[] = []; 
  selectedSize: any = '';

  constructor() {}

  ngOnInit() {
    this.cols = [ 
      { 
          field: 'leavecode', 
          header: 'Leave Code'
      }, 
      { 
          field: 'request', 
          header: 'Request'
      }, 
      { 
          field: 'leavetype', 
          header: 'Leave Type'
      }, 
      { 
          field: 'startdate', 
          header: 'Start Date'
      }, 
      { 
          field: 'enddate', 
          header: 'End Date '
      }, 
      { 
          field: 'duration', 
          header: 'Duration'
      }, 
      { 
          field: 'daytype', 
          header: 'Day type'
      }, 
      { 
          field: 'leavecategory', 
          header: 'Leave Category'
      }, 
      { 
          field: 'status', 
          header: 'Status'
      }, 
      { 
          field: 'reason', 
          header: 'Reason'
      }, 
      
  ]; 
  this.tableData = [ 
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 02 Jan 23', 
          leavetype: 'Annual Leave',
          startdate : 'Tue, 03 Jan 23',
          enddate : 'Tue 03 Jan 23',
          duration : '1 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
   
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 09 Jan 23', 
          leavetype: 'Compassionate Leave (Imm. Family)',
          startdate : 'Tue, 10 Jan 23',
          enddate : 'Wed 11 Jan 23',
          duration : '2 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
   
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 16 Jan 23', 
          leavetype: 'Annual Leave',
          startdate : 'Tue, 24 Jan 23',
          enddate : 'Tue, 24 Jan 23',
          duration : '0.5 Day(s)', 
          daytype : 'Half Day -  First Half',
          leavecategory : 'Normal Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
   
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 23 Jan 23', 
          leavetype: 'Annual Leave',
          startdate : 'Fri, 27 Jan 23',
          enddate : 'Fri, 27 Jan 23',
          duration : '0.5 Day(s)', 
          daytype : 'Half Day - Second Half',
          leavecategory : 'Normal Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 30 Jan 23', 
          leavetype: 'Sick Leave',
          startdate : 'Mon, 30 Jan 23',
          enddate : 'Wed, 31 Feb 23',
          duration : '3 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 30 Jan 23', 
          leavetype: 'Sick Leave',
          startdate : 'Mon, 30 Jan 23',
          enddate : 'Wed, 31 Feb 23',
          duration : '3 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 30 Jan 23', 
          leavetype: 'Sick Leave',
          startdate : 'Mon, 30 Jan 23',
          enddate : 'Wed, 31 Feb 23',
          duration : '3 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 30 Jan 23', 
          leavetype: 'Sick Leave',
          startdate : 'Mon, 30 Jan 23',
          enddate : 'Wed, 31 Feb 23',
          duration : '3 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
      { 
          leavecode: 'LV-PTES-PT-CV10435-01-23-001', 
          request: 'Mon, 30 Jan 23', 
          leavetype: 'Sick Leave',
          startdate : 'Mon, 30 Jan 23',
          enddate : 'Wed, 31 Feb 23',
          duration : '3 Day(s)', 
          daytype : 'Full Day',
          leavecategory : 'Emergency Leave',
          status :'Approve',
          reason : 'Family Event',
      }, 
   
     
    ];
      this.sizes = [
        { name: 'Small', class: 'p-datatable-sm' },
        { name: 'Normal', class: 'p-datatable-md' },
        { name: 'Large',  class: 'p-datatable-lg' }
    ];
  }
}
