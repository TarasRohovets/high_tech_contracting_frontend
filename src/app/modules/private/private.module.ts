import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { UserBoardComponent } from './user-board/user-board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';


@NgModule({
  declarations: [UserBoardComponent, UserSettingsComponent, MyListingsComponent, EditListingComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
