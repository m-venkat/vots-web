import { Injectable, EventEmitter } from '@angular/core';
import { VotsMenuItem } from '../../models/MenuModels';
import { Observable, from, interval, Subject } from 'rxjs';

@Injectable(({
  providedIn: 'root'
}) as any)
export class OrchestrationService {

  //Subject can be used to multicast (more here  https://netbasal.com/event-emitters-in-angular-13e84ee8d28c)
  private menuSelectedSubject = new Subject<VotsMenuItem>();
  private splitReSize = new Subject();
  //This observable can be used to subscribe within different components and service.
  MenuSelected  = this.menuSelectedSubject.asObservable();
  SplitResize = this.splitReSize.asObservable();
  public OnMenuSelected(votsMenuItem: VotsMenuItem): void {
    this.menuSelectedSubject.next(votsMenuItem);
  }

  public OnSplitResize(): void {
    console.log("OnSplitResize triggered");
    this.splitReSize.next();
  }
  constructor() { }
}
