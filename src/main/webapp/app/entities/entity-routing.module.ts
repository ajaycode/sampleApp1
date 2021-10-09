import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'sampleApp1App.region.home.title' },
        loadChildren: () => import('./region/region.module').then(m => m.RegionModule),
      },
      {
        path: 'country',
        data: { pageTitle: 'sampleApp1App.country.home.title' },
        loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
      },
      {
        path: 'location',
        data: { pageTitle: 'sampleApp1App.location.home.title' },
        loadChildren: () => import('./location/location.module').then(m => m.LocationModule),
      },
      {
        path: 'department',
        data: { pageTitle: 'sampleApp1App.department.home.title' },
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
      },
      {
        path: 'task',
        data: { pageTitle: 'sampleApp1App.task.home.title' },
        loadChildren: () => import('./task/task.module').then(m => m.TaskModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'sampleApp1App.employee.home.title' },
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'sampleApp1App.job.home.title' },
        loadChildren: () => import('./job/job.module').then(m => m.JobModule),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'sampleApp1App.jobHistory.home.title' },
        loadChildren: () => import('./job-history/job-history.module').then(m => m.JobHistoryModule),
      },
      {
        path: 'publisher',
        data: { pageTitle: 'sampleApp1App.publisher.home.title' },
        loadChildren: () => import('./publisher/publisher.module').then(m => m.PublisherModule),
      },
      {
        path: 'author',
        data: { pageTitle: 'sampleApp1App.author.home.title' },
        loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
      },
      {
        path: 'client',
        data: { pageTitle: 'sampleApp1App.client.home.title' },
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
      },
      {
        path: 'book',
        data: { pageTitle: 'sampleApp1App.book.home.title' },
        loadChildren: () => import('./book/book.module').then(m => m.BookModule),
      },
      {
        path: 'borrowed-book',
        data: { pageTitle: 'sampleApp1App.borrowedBook.home.title' },
        loadChildren: () => import('./borrowed-book/borrowed-book.module').then(m => m.BorrowedBookModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
