import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should go to home page on register', () => {
    spyOn(router, 'navigate');

    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
