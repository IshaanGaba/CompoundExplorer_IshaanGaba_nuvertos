import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Compound, CompoundService } from '../../services/compound.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-compound-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {
  compound!: Compound;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: CompoundService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getCompound(id).subscribe({
      next: res => {
        this.compound = res;
        this.loading = false;
      },
      error: () => this.router.navigate(['/compounds'])
    });
  }

  goToEdit() {
    this.router.navigate(['/compounds', this.compound.id, 'edit']);
  }

  goBack() {
    this.router.navigate(['/compounds']);
  }
}
