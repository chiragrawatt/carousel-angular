import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: string[] = ["https://fastly.picsum.photos/id/583/1080/500.jpg?hmac=tVvb0S_iDQeogTdehLjqaIyaYDa6kSnixdttAOcBjKo", "https://fastly.picsum.photos/id/65/1080/500.jpg?hmac=Fwd6WkwJdL4vv-xSHaGkrn4H8FYkwcdipCKmwmMOp7c", "https://fastly.picsum.photos/id/66/1080/500.jpg?hmac=E24OEZQgXg0v9fXuQsWdpol4WdMlzxB_-bhvykJz29w"]
  selectedImage: number = 0;

  changeImage(change: number) {
    this.selectedImage +=  change;
    this.selectedImage %= this.images.length;
    if(this.selectedImage<0) {
      this.selectedImage = this.images.length-1;
    }
    console.log(this.selectedImage);
  }
}
