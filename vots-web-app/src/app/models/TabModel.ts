import { ComponentRef } from "@angular/core";

export interface TabModel {
  ClientId: string;//Unique Guid
  TabLabel: string; // Name of the UI Screen
  IsActive: boolean; //If this tab is active?
  Component: ComponentRef<any>;//
}
