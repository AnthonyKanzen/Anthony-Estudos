import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Product } from '../models/product.model';

export type ProductTableItem = Product;

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Product[] = [
  { id: '1', name: 'Hydrogen', price: 2.000 },
  { id: '2', name: 'Helium', price: 2.000 },
  { id: '3', name: 'Lithium', price: 2.000 },
  { id: '4', name: 'Beryllium', price: 2.000 },
  { id: '5', name: 'Boron', price: 2.000 },
  { id: '6', name: 'Carbon', price: 2.000 },
  { id: '7', name: 'Nitrogen', price: 2.000 },
  { id: '8', name: 'Oxygen', price: 2.000 },
  { id: '9', name: 'Fluorine', price: 2.000 },
  { id: '10', name: 'Neon', price: 2.000 },
  { id: '11', name: 'Sodium', price: 2.000 },
  { id: '12', name: 'Magnesium', price: 2.000 },
  { id: '13', name: 'Aluminum', price: 2.000 },
  { id: '14', name: 'Silicon', price: 2.000 },
  { id: '15', name: 'Phosphorus', price: 2.000 },
  { id: '16', name: 'Sulfur', price: 2.000 },
  { id: '17', name: 'Chlorine', price: 2.000 },
  { id: '18', name: 'Argon', price: 2.000 },
  { id: '19', name: 'Potassium', price: 2.000 },
  { id: '20', name: 'Calcium', price: 2.000 },
];

export class ProductTableDataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(
            this.getSortedData([...this.data])
          );
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  disconnect(): void {}

  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex =
        this.paginator.pageIndex * this.paginator.pageSize;

      return data.splice(
        startIndex,
        this.paginator.pageSize
      );
    } else {
      return data;
    }
  }

  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';

      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);

        case 'id':
          return compare(
            +(a.id ?? 0),
            +(b.id ?? 0),
            isAsc
          );

        default:
          return 0;
      }
    });
  }
}

function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

