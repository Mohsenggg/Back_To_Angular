import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BookServiceService } from '../service/book-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  bookData: Book = new Book();
  bookList: Book[] = [];
  testMohsen:string = 'Test Mohsen';
  displaySection: string = 'bookListSection'; // Default section

  http = inject(HttpClient);
  bookService = inject(BookServiceService);

  //  LOAD BOOKS ===============================
  ngOnInit(): void {
    this.loadBooks();
  }

  //  LOAD BOOKS ===============================
  loadBooks() {
    this.http
      .get('http://localhost:8080/connect/allBooks')
      .subscribe((response: any) => {
        this.bookList = response;
      });
  }

  // SHOW OR ADD ===============================
  showSection(section: string) {
    this.displaySection = section;
  }

  // SAVE BOOK ===============================
  saveBookOnClick() {
    this.bookService.addUpdateBook(this.bookData).subscribe(
      // RESPONSE
      (respo: any) => {
        if (respo.message === 'Book saved successfully') {
          alert('Book is saved Successfully');
          this.loadBooks();
          this.displaySection = 'bookListSection';
        } else {
          alert(respo.message + 'Good Luck');
        }
      },
      // ERROR
      (error) => {
        console.error('Error saving book', error);
        alert('Failed to save book. Please try again');
      }
    );
  }

  // EDIT BOOK ===============================
  onEditBook(editedBook: Book) {
    this.displaySection = 'addBookSection';
    this.bookData = editedBook;
  }

  // DELETE BOOK ===============================
  onDeleteBookById(id: Number) {
    console.log('book Id Is = ' + id);
    const isDelete = confirm('Are you sure you want to delete this book? ');

    if (isDelete) {
      this.bookService.deleteBookById(id).subscribe(
        (respo: any) => {
          if (respo.message === 'Book is deleted successfully') {
            this.loadBooks();
            setTimeout(() => {
              alert('Book with id = ' + id + ', is deleted Successfully');
            }, 500);
          } else {
            alert(respo.message + 'Good Luck');
          }
        },
        (error) => {
          console.error('Error deleting book', error);
          alert('Failed to delete book. Please try again');
        }
      );
    }
  }
}
