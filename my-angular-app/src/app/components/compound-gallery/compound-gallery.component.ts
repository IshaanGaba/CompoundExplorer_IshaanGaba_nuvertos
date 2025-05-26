import { Component, OnInit }         from '@angular/core';
import { Router, RouterModule }      from '@angular/router';
import { CommonModule }              from '@angular/common';
import { CompoundService, Compound } from '../../services/compound.service';
import { MatCardModule }             from '@angular/material/card';
import { MatPaginatorModule }        from '@angular/material/paginator';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner';

@Component({
  selector: 'app-compound-gallery',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './compound-gallery.component.html',
  styleUrls: ['./compound-gallery.component.css']
})
export class CompoundGalleryComponent implements OnInit {
  compounds: Compound[] = [];
  total = 0;
  page = 1;
  loading = false;

  constructor(private svc: CompoundService, private router: Router) {}

  ngOnInit(): void {
    this.loadCompounds();
  }

  loadCompounds() {
    this.loading = true;
    this.svc.getCompounds(this.page).subscribe(res => {
      this.compounds = res.data;
      this.total     = res.total;
      this.loading   = false;
    });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.loadCompounds();
  }

  goTo(id: number) {
    this.router.navigate(['/compounds', id]);
  }
}
