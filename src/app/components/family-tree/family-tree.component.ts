import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
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
  draggingMember: FamilyMember | null = null;
  offsetX = 0;
  offsetY = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.familyTree = [
      { id: 1, name: 'Grandparent', children: [], x: 300, y: 50 }
    ];
  }

  addChild(parent: FamilyMember) {
    const newChild: FamilyMember = {
      id: Date.now(),
      name: `Child of ${parent.name}`,
      children: [],
      x: parent.x + (parent.children.length * 150) - 75, // Dynamic positioning
      y: parent.y + 100 // Move down vertically
    };

    parent.children.push(newChild);
    this.cdr.detectChanges(); // Force update
  }

  startDrag(event: MouseEvent, member: FamilyMember) {
    this.draggingMember = member;
    this.offsetX = event.clientX - member.x;
    this.offsetY = event.clientY - member.y;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.draggingMember) {
      this.draggingMember.x = event.clientX - this.offsetX;
      this.draggingMember.y = event.clientY - this.offsetY;
      this.cdr.detectChanges(); // Force UI update
    }
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.draggingMember = null;
  }


}