import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{

  bookData :Book = new Book();
  bookList :Book[] =[];
  displaySection: string =  'bookListSection'; // Default section

  http = inject(HttpClient)

  ngOnInit(): void {
  this.getAllBooks()
 }

  showSection(section: string) {
    this.displaySection = section;
  }

  getAllBooks(){

    this.http
    .get("http://localhost:8080/connect/allBooks")
    .subscribe(
      (response:any) =>{this.bookList=response}
    )

  }

}
