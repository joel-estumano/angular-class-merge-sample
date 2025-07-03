import { AppComponent } from './app.component';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
	let fixture: ReturnType<typeof TestBed.createComponent<AppComponent>>;
	let component: AppComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent, ReactiveFormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('deve criar o app', () => {
		expect(component).toBeTruthy();
	});

	it('deve atualizar twClass ao emitir valor em select.valueChanges', fakeAsync(() => {
		const setSpy = spyOn(component.twClass, 'set');
		component.select.setValue('bg-blue-500');
		tick(100); // avança o debounceTime
		expect(setSpy).toHaveBeenCalledWith('bg-blue-500');
	}));
});
