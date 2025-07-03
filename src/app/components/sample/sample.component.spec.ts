import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
	let component: SampleComponent;
	let fixture: ComponentFixture<SampleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SampleComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(SampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('deve criar o componente', () => {
		expect(component).toBeTruthy();
	});
});
