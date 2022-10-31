import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ViewChildren,
  OnInit,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { MatSidenav, MatButton, MatCheckbox, MatSidenavContainer } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavService } from './services/navigation-service/navigation.service';
import { VotsToolBarComponent } from './components/vots-toolbar/vots-toolbar.component';
import { VotsToolOptionComponent } from './components/vots-tool-option/vots-tool-option.component';
import { ToolBarOptions } from './models/dtos';
import { AngularSplitModule } from 'angular-split';
import { OrchestrationService } from './services/orchestration-service/orchestration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  public constructor(private cd: ChangeDetectorRef,
    public sideNavService: SideNavService,
    public orchestrationService: OrchestrationService) {

    //this.saveanddeleteTBO.CanSave = true;
    //this.saveanddeleteTBO.CanDelete = true;
    //this.newandexecuteTBO.CanNew = true;
    //this.newandexecuteTBO.CanExecute = true;


    console.log('inside constructor...');
  }
  title = 'app';
  /*Fix ng build --prod error*/
  public searchBar = false;
  public notificationBar =true;
  public opened: boolean;
  /*End Fix ng build --prod error*/

  @ViewChild('sidenav') public sidenav: MatSidenav;
  public events: string[] = [''];
  shouldRun = true;

  public ngOnInit() {
    console.log('inside ngOnInit...');
    this.sideNavService.SetSideNav(this.sidenav);
  }

  toggleChange(event: any) {
    console.log('inside toggleChange...');
    this.sideNavService.Toggle();
  }

  //onDragEnd(columnindex: number, e: { gutterNum: number, sizes: Array<number> })
  onDragEnd() :void
  {
    console.log("onDragEnd triggered");
    this.orchestrationService.OnSplitResize();
  }

  ngAfterViewInit() {
    console.log('inside ngAfterViewInit...');
    this.cd.detectChanges();        // To avoid the change detection errors
  }

  ToggleNavMenu(): void {
    console.log('ToggleNavMenu Called');
  }

  ToggleFullScreen() {
    this.LaunchFullScreen();
  }

  log(key: any, value: any): void {
    console.log(key, value);
  }

  private LaunchFullScreen() {
    const document: any = window.document;
    if ((document.fullscreenElement && document.fullscreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

}
