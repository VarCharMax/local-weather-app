import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule],
})
export class MaterialModule {}
