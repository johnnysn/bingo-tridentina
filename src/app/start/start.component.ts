import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  form = new FormGroup({
    'start': new FormControl('1'),
    'end': new FormControl('20')
  });

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const start = this.form.value.start;
    const end = this.form.value.end;
    if (start >= end) {
      this.snackBar.open('O valor mínimo deve ser menor que o máximo. Tens algum tipo de retardo?', 'Foi mal...', {
        duration: 5000
      });
    } else {
      void this.router.navigate([`/bingo/${start}/${end}`]);
    }
  }
}
