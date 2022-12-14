import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddEditDialogDataModel} from '../../models/add-edit-dialog-data.model';

@Component({
    selector: 'app-add-edit-dialog',
    templateUrl: './add-edit-dialog.component.html'
})
export class AddEditDialogComponent {
    activeOptions = [
        {value: true, label: 'Yes'},
        {value: false, label: 'No'}
    ];
    locationOptions = [
        {value: 0, label: '--None--'},
        {value: 1, label: 'Galle'},
        {value: 2, label: 'Kandy'},
        {value: 3, label: 'Nugegoda'},
        {value: 4, label: 'Gampaha'},
        {value: 5, label: 'Kurunegala'},
        {value: 6, label: 'Jaffna'}
    ];
    constructor(public dialogRef: MatDialogRef<AddEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: AddEditDialogDataModel) {
    }

    onSave(): void {
        this.dialogRef.close(this.data);
    }
    onCancel(): void {
        this.dialogRef.close();
    }
}
