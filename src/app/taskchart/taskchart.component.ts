import { Component } from '@angular/core';

@Component({
  selector: 'app-taskchart',
  templateUrl: './taskchart.component.html',
  styleUrls: ['./taskchart.component.css']
})
export class TaskchartComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['Unscheduled', 'Overdue' , 'Complete'],
          datasets: [
            {
  
                  data: [25,25,50],
                  backgroundColor: [documentStyle.getPropertyValue('--gray-500'),documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--blue-500'), ],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--gray-400'),documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--blue-400'),]
                  
                }   
              ]
            };
            
        this.options = {
        maintainAspectRatio: true,
        aspectRatio: 1.2,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            reverse :true,
            labels: {
                  color: textColor
                }
              }
          }
      };
  }
}
