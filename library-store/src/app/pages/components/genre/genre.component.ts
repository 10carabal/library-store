import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenreComponent implements OnInit {

  ngOnInit(): void { }

}
