import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LibraryService } from '../core/services/library.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getAllBooks().subscribe(books => {
      console.log('Books:', books);
    });
  }
}
