import { Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { OrchestrationService } from '../../services/orchestration-service/orchestration.service';
import { VotsMenuItem } from '../../models/MenuModels';
import { PrinterMaintainanceComponent} from "../printer-maintainance/printer-maintainance.component";

import $ from 'jquery';


@Component({
  selector: 'app-tabstrip-container',
  templateUrl: './tabstrip-container.component.html',
  styleUrls: ['./tabstrip-container.component.css']
})
export class TabstripContainerComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {
  public SelectedMenusAsTab: VotsMenuItem[] = [];//All the active tabs (menu selected is rendered as tab)
  public ref: any = PrinterMaintainanceComponent;
   width:number;
  constructor(public orchestrationService: OrchestrationService) {
    this.orchestrationService.MenuSelected.subscribe(data => {
      this.SelectedMenusAsTab.forEach(item => item.IsCurrent = false);//Set all items as not current
      
      var alreadyExists = this.SelectedMenusAsTab.find(item => item === data);
      if (alreadyExists == null ) //Already exists
      {
        //console.log("Not exists...");
        this.SelectedMenusAsTab.push(data);
      }
      data.IsCurrent = true;//Set the selected item as current
      //this.AutoAdjustTabWidth();
    });
    this.orchestrationService.SplitResize.subscribe(() => {
      //console.log("Resize Trigerred....");
      this.AutoAdjustTabWidth();
    });
  }

  //On Switching to a new Tab
  onTabSwitch(selectedTab: VotsMenuItem) {
    this.SelectedMenusAsTab.forEach(item => item.IsCurrent = false);//Set all items as not current
    selectedTab.IsCurrent = true;
    return false;
  }

  //On Click of Close button on a tab
  closeTab(selectedTab: VotsMenuItem) {
    //TBD (Dirty Check and prompt to Save or ignore (Show Dialog) and close
    var indexToDelete = this.SelectedMenusAsTab.findIndex(i => i === selectedTab);
    this.SelectedMenusAsTab.splice(indexToDelete, 1);
  }

  AutoAdjustTabWidth(): void {
    let totalWidthOfTabStripContainerDiv: number = $("#tabParentContainer").width();
    let totalLiWidth = 200;//Reserve 300px for the last added Item
     $.map($('#tabs a'), function (val) {
      totalLiWidth += $(val).width();          
    });
    //console.log("val.width :" + totalLiWidth);  
   // console.log("Width of div is :" + $("#tabParentContainer").width());
    if (totalLiWidth >= totalWidthOfTabStripContainerDiv) {
     // console.log("Li width Exceeds Tab Container width");
      $.map($('#tabs a'), function (val) {
      //  console.log("Hyper link text :" + $(val).text());
   //     console.log("Substring Part :" + $(val).text().substring(0, 5)+"...");
        $(val).text($(val).text().substring(0,5)+"...")
        //Reducing each Li width by 25%;
        //$(val).width(($(val).width()/100) * 75);
      });
    }
  }
  
  ngOnInit() {
    
  }


  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    //alert("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  //  alert("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
    this.AutoAdjustTabWidth();
   // alert("ngAfterViewChecked");
  }

 
}
