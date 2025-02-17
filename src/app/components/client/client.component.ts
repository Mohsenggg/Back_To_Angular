import { Component } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {


  clientData: Client = new Client();
  clientList: Client[] = []



  onSaveClient() {
    throw new Error('Method not implemented.');
    }
}
