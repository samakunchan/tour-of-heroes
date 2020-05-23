import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'sam-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]>;

  constructor(public messageService: MessageService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log('Service Messagerie');
    this.errors$ = this.messageService.errors$;
    this.errors$.pipe(
      tap(message => this.snackBar.open(message[0], 'close', { duration: 2000 }))
    ).subscribe();
  }

}
