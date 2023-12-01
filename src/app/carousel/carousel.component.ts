import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  
       images= [{
            imageSrc : 'assets/img/Illustration-1.svg',
            caption : 'Increase employee productivity and performance in a measurable and precision system in one application'
              
        },
        {
            imageSrc : 'assets/img/Illustration-2.svg',
            caption : 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast'
        },
        {
            imageSrc : 'assets/img/Illustration-3.svg',
            caption : ' Simplify the administrative affairs of the company where you work wherever and whenever Lets get started with all these conveniences '
        }
        ]

    ngOnInit() {
      
    }

}
