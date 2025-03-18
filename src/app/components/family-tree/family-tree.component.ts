import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FamilyMember } from '../../model/interface/FamilyMember';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-family-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './family-tree.component.html',
  styleUrl: './family-tree.component.css'
})
export class FamilyTreeComponent implements OnInit {


  familyTree: FamilyMember[] = [];

  ngOnInit() {
    this.familyTree = [
      { id: 1, name: 'Grandparent', children: [], x: 300, y: 50 }
    ];
    console.log('Initialized Family Tree:', this.familyTree);
  }

  constructor(private cdr: ChangeDetectorRef) {}

  addChild(parent: FamilyMember) {
    const newChild: FamilyMember = {
      id: Date.now(),
      name: `Child of ${parent.name}`,
      children: [],
      x: parent.x + (parent.children.length * 150) - 75, // Dynamic horizontal positioning
      y: parent.y + 100 // Move down vertically
    };

    parent.children.push(newChild);

    this.familyTree = JSON.parse(JSON.stringify(this.familyTree)); // Deep copy trick
    this.cdr.detectChanges(); // Force UI update

    console.log('Added Child:', newChild);
    console.log('Updated Family Tree:', this.familyTree);

    // this.cdr.detectChanges(); // ✅ Force Angular to update UI

  }


}