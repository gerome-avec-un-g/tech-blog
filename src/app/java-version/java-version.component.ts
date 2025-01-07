import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import {MatCardModule} from '@angular/material/card';
import * as jsonData from '../../assets/data.json';


@Component({
  selector: 'app-java-version',
  imports: [CommonModule, MatCardModule],
  templateUrl: './java-version.component.html',
  styleUrl: './java-version.component.css'
})
export class JavaVersionComponent {
  stream= 'public List<Book> booksWithAtLeastNumberOfPagesStream(List<Book> allBooks, int minimumPageCount) {\n' +
    '        return allBooks.stream()\n' +
    '                .filter(book -> book.getPageCount() >= minimumPageCount)\n' +
    '                .toList();\n' +
    '    }';
  forLoop= 'public List<Book> booksWithAtLeastNumberOfPages(List<Book> allBooks, int minimumPageCount) {\n' +
    '        List<Book> booksWithAtLeastNumberOfPages = new ArrayList<>();\n' +
    '        for (Book book : allBooks) {\n' +
    '            if (book.getPageCount() >= minimumPageCount) {\n' +
    '                booksWithAtLeastNumberOfPages.add(book);\n' +
    '            }\n' +
    '        }\n' +
    '        return booksWithAtLeastNumberOfPages;\n' +
    '    }';
  data: any = jsonData;
  products: any = (jsonData as any).default;
}
