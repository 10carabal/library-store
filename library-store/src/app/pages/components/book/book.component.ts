import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {

  ngOnInit(): void { }

}
