import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {

constructor(private MatSnackBar: MatSnackBar) { }

showOnMenssage(msg: string): void{
  this.MatSnackBar.open(msg,'X',{
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })
}
}
