import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
private close = new BehaviorSubject<boolean>(false);
closeEvent = this.close.asObservable();
constructor() { }
TriggerCloseEvent()
{
  this.close.next(true);
}
}
