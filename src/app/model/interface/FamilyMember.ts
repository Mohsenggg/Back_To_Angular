export interface FamilyMember {
  id: number;
  name: string;
  children: FamilyMember[];
  x: number; // Position for rendering
  y: number;
}