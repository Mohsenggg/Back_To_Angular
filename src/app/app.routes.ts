import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { BookComponent } from './BookSection/book/book.component';
import { FamilyTreeComponent } from './components/family-tree/family-tree.component';

export const routes: Routes = [

    // Add Routes as an objects
    {path: '', redirectTo:'master', pathMatch: 'full'},

    {path:'master', component: MasterComponent},

    {path:'employee',component: EmployeeComponent},

    {path:'client',component: ClientComponent},

    {path:'book',component: BookComponent},

    {path:'family',component: FamilyTreeComponent}



];
