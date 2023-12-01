import { Component } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['Not Complete', 'Complete'],
          datasets: [
            {
  
                  data: [50, 50],
                  backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500'), ],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--blue-400'),]
                  
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
