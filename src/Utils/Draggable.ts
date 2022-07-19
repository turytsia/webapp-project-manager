export interface Draggable {
  onDragStart(event: DragEvent): void;
  onDragEnd(event: DragEvent): void;
}

export interface DragArea {
  onDragOver(event: DragEvent): void;
  onDragDrop(event: DragEvent): void;
  onDragLeave(event: DragEvent): void;
}
