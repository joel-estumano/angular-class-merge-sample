import { By } from '@angular/platform-browser';
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

		fixture.componentRef.setInput('twClass', 'h-24 w-24');

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('deve criar o componente', () => {
		expect(component).toBeTruthy();
	});

	it('deve renderizar <span class="bg-red-500"> para destacar classes removidas', () => {
		const p = fixture.debugElement.query(By.css('[data-test-id="high-lighted-removed"]')).nativeElement as HTMLParagraphElement;
		expect(p.innerHTML).toContain(`<span class="bg-red-500">`);
	});

	it('deve renderizar <span class="bg-green-500"> para destacar classes sobrescritas', () => {
		const p = fixture.debugElement.query(By.css('[data-test-id="high-lighted-added"]')).nativeElement as HTMLParagraphElement;
		expect(p.innerHTML).toContain(`<span class="bg-green-500">`);
	});
});
