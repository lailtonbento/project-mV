import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NavComponent } from "./template/nav/nav.component";

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, SharedModule],
    exports: [NavComponent],
  })
  export class ComponentsModule {}