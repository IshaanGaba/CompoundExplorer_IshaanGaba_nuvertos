import { Routes }                   from '@angular/router';
import { CompoundGalleryComponent } from './components/compound-gallery/compound-gallery.component';
import { CompoundDetailComponent }  from './components/compound-detail/compound-detail.component';
import { CompoundEditComponent }    from './components/compound-edit/compound-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'compounds', pathMatch: 'full' },
  { path: 'compounds',          component: CompoundGalleryComponent },
  { path: 'compounds/:id',      component: CompoundDetailComponent },
  { path: 'compounds/:id/edit', component: CompoundEditComponent },
  { path: '**', redirectTo: 'compounds' }
];
