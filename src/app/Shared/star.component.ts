import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarRating implements OnChanges {
  cropwidth: number = 75;
  @Input() rating: number = 3;
  @Output() ratingSend: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnChanges(): void {
    this.cropwidth = (this.rating * 75) / 5;
  }
  SendRatingFromChildOnClick() {
    this.ratingSend.emit("the Rating Is:"+this.rating)
  }
}
