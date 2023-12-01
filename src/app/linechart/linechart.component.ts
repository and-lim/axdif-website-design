import { Component } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September'],
          datasets: [
              {
                  label: 'Complete',
                  data: [50, 120, 70, 120, 170, 70, 50, 100, 140],
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4,
              },
              {
                  label: 'Created Task',
                  data: [30, 50, 100, 70, 130, 70, 50, 100, 130],
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--orange-500'),
                  tension: 0.4,
                  backgroundColor: 'rgba(255,167,38,0.2)'
              }
          ]
      };
      
      this.options = {
          maintainAspectRatio: true,
          aspectRatio: 3.4,
          plugins: {
              legend: {
                position: "top",
                align: "end",
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary,
                  },
                  max: 250,
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }
}
