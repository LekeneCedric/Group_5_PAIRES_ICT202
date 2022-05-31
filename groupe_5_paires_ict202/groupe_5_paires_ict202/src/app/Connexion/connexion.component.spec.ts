import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Connexion } from './connexion.component;

describe('Connexion', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Connexion
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Connexion);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angularproj'`, () => {
    const fixture = TestBed.createComponent(Connexion);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angularproj');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Connexion);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angularproj app is running!');
  });
});
