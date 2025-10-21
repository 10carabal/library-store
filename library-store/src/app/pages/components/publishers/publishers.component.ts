import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-publishers',
  imports: [],
  templateUrl: './publishers.component.html',
  styleUrl: './publishers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishersComponent implements OnInit {

  ngOnInit(): void { }

}
