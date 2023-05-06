import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [ 'Buy groceries', 'Empty dishwasher', 'walk dog','Scoop Cat Box', ];
   finishedChores = [ 'Complete LaunchCode prep work',];

   targetImage = 'https://media.istockphoto.com/id/1189106364/vector/target-and-arrow-vector-icon-dartboard-shoot-business-aim-and-target-focus-symbol-stock.jpg?s=612x612&w=0&k=20&c=Kvv0jNywcApEJS59iqfrtK8lPwtZv5DcgH6__SM7RGw= ';

   constructor() { }

   ngOnInit() {
   }

}
