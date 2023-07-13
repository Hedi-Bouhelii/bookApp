import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(SearchComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit(): void {
  }
  public isCollapsed = true;
  books = [
    {
      name: 'Harry Potter and the Sorcerer’s Stone',
      author: 'J.K.rowling',
      year: 2001,
      type: 'Fiction',
      rating: 4.5,
      image: 'https://www.bloomsbury.com/media/idyh20rp/harry-potter-and-the-philosophers-333.png?width=267&height=400'
    },
    {
      name: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K.rowling',
      year: 2002,
      type: 'Mystery',
      rating: 3.8,
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855669.jpg'
    },
    {
      name: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K.rowling',
      year: 2003,
      type: 'Sci-Fi',
      rating: 4.2,
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855676.jpg'
    },
    {
      name: ' Harry Potter and the Goblet of Fire ',
      author: 'J.K.rowling',
      year: 2004,
      type: 'Fiction',
      rating: 4.5,
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855690.jpg'
    },
    {
      name: ' Harry Potter and the Order of the Phoenix',
      author: 'J.K.rowling',
      year: 2005,
      type: 'Mystery',
      rating: 3.8,
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855690.jpg'
    },
    {
      name: ' Harry Potter and the Half-Blood Prince',
      author: 'J.K.rowling',
      year: 2006,
      type: 'Sci-Fi',
      rating: 4.2,
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855706.jpg'
    },
    {
      name: ' Harry Potter and the Deathly Hallows',
      author: 'J.K.rowling',
      year: 2007,
      type: 'Fiction',
      rating: 4.5,
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855713.jpg'
    },
    {
      name: 'Serpent & Dove',
      author: 'Serpent & Dove',
      year: 2013,
      type: 'Mystery',
      rating: 3.8,
      image: 'https://i.harperapps.com/covers/9780062878021/x300.jpg'
    },
    {
      name: 'Queen’s Thief ',
      author: 'Megan Whalen Turner',
      year: 2015,
      type: 'Sci-Fi',
      rating: 4.2,
      image: 'https://i.harperapps.com/covers/9780062642967/x300.jpg'
    },
    {
      name: 'The Montague Siblings Series',
      author: 'Mackenzi Lee',
      year: 2017,
      type: 'Fiction',
      rating: 4.5,
      image: 'https://i.harperapps.com/covers/9780062382818/x300.jpg'
    },
    {
      name: 'Red Queen',
      author: 'Victoria Aveyard',
      year: 2019,
      type: 'Mystery',
      rating: 3.8,
      image: 'https://i.harperapps.com/covers/9780062310637/x450.jpg'
    },
    {
      name: 'The Empirium Series',
      author: 'Claire Legrand',
      year: 2020,
      type: 'Sci-Fi',
      rating: 4.2,
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512678373l/34323570.jpg'
    }
  ];
}
