import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Cool Pics!';
  image1 = 'https://cdn.inksoft.com/images/clipart/rendered/onlythesloanly_gmail.com/ARTBOARD_4LAUNCHCODEPRIDE.png';
  image2 = 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/04/voldemort-lol.jpg';
  image3 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2ca1d29-170c-40a3-b3e9-98b787ad5d61/df3nfdb-7d4778c2-35d0-41e7-9ae6-d6efeb68ff7f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyY2ExZDI5LTE3MGMtNDBhMy1iM2U5LTk4Yjc4N2FkNWQ2MVwvZGYzbmZkYi03ZDQ3NzhjMi0zNWQwLTQxZTctOWFlNi1kNmVmZWI2OGZmN2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lEmrb5Bidlrbm4CS3o5IS6ttOh5WPYh7yFcwnVRatik';

  constructor() { }

  ngOnInit() {
  }

}