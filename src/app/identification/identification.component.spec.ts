import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IdentificationComponent } from './identification.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { apiHttpSpringBootService } from './../api-spring-boot.service';
import { UserModel } from '../interfaces/models';
import { Observable } from 'rxjs/internal/Observable';
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}


describe('IdentificationComponent', () => {


    let fixture: ComponentFixture<IdentificationComponent>;
    let app;
    let myService: apiHttpSpringBootService;



    beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }, DatePipe],
      declarations: [
        IdentificationComponent
      ],
    }).compileComponents();

    myService = TestBed.inject(apiHttpSpringBootService);

    }));

    beforeEach(() => {
       fixture = TestBed.createComponent(IdentificationComponent);
       app = fixture.componentInstance;
       fixture.detectChanges();
    });

    it('should create the component-Identification', () => {

       expect(app).toBeTruthy();
    });

    it('should display logged-in user name', () => {

      const objectConnection = {login: 'user1@yopmail.com', password: '123'};

      const mockUser = {id: 1, nom: 'user1', prenom: 'user1', date_created: '2020-07-30T15:05:52.000+0000', date_update: null, pseudo_name: 'user1', login: 'user1@yopmail.com', password: '202cb962ac59075b964b07152d234b70', sex: 'H', typeCompte: 'user', photoUser: '', date_naissance: '2020-08-20', token: 'nQrUEIWCc31E0lwiFRqm5KpO0sBLGO7bDSy44AnaWnfzGPGmHuA03cz3wFal', dateNaissance: '2020-08-20', createdAt: '2020-07-30T15:05:52.000+0000'};

      // tslint:disable-next-line:max-line-length
     /* const mockUser: Observable<UserModel> = {id: 1, nom: 'user1', prenom: 'user1', date_created: '2020-07-30T15:05:52.000+0000', date_update: null, pseudo_name: 'user1', login: 'user1@yopmail.com', password: '202cb962ac59075b964b07152d234b70', sex: 'H', typeCompte: 'user', photoUser: '', date_naissance: '2020-08-20', token: 'nQrUEIWCc31E0lwiFRqm5KpO0sBLGO7bDSy44AnaWnfzGPGmHuA03cz3wFal', dateNaissance: '2020-08-20', createdAt: '2020-07-30T15:05:52.000+0000'};

     

      spyOn(myService, 'identificationUser').withArgs(objectConnection).and.returnValue(mockUser);*/

      myService.identificationUser(objectConnection).subscribe((resp) => {
        expect(resp).toBe(mockUser);
      });

    });

   /* it('should have as title Identification-inscription', () => {

      expect(app.title).toEqual('Identification-inscription');
    });

 /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('crowdfunding-frond-end app is running!');
  }); */


});


