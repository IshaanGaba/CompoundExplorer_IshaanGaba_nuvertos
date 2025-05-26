import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Compound, CompoundService } from '../../services/compound.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-compound-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './compound-edit.component.html',
  styleUrls: ['./compound-edit.component.css']
})
export class CompoundEditComponent implements OnInit {
  compoundForm!: FormGroup;
  id!: number;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private svc: CompoundService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getCompound(this.id).subscribe(res => {
      this.compoundForm = this.fb.group({
        name: [res.name, Validators.required],
        image: [res.image, Validators.required],
        description: [res.description, Validators.required]
      });
      this.loading = false;
    });
  }

  onSubmit() {
    if (this.compoundForm.valid) {
      this.svc
        .updateCompound(this.id, this.compoundForm.value)
        .subscribe(() => {
          this.router.navigate(['/compounds', this.id]);
        });
    }
  }

  goBack() {
    this.router.navigate(['/compounds', this.id]);
  }
}
