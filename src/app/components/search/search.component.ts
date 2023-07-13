import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from 'src/app/services/google-books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  ngOnInit(): void {
  }
  books?: any[];

  constructor(private googleBooksService: GoogleBooksService) { }

  searchBooks(query: string): void {
    this.googleBooksService.searchBooks(query).subscribe(
      response => {
        this.books = response.items;
      },
      error => {
        console.log('Error occurred while searching books:', error);
      }
    );
  }
}
