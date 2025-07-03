import { Component, signal } from '@angular/core';
import { debounceTime } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleComponent } from './components/sample/sample.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule, SampleComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {
	protected sampleClasses = [
		'bg-red-500 text-white h-40 w-40',
		'bg-blue-500 text-white h-20 w-20',
		'bg-yellow-500 text-black h-20 w-20',
		'bg-green-500 text-white h-30 w-30',
		'bg-purple-600 text-white h-30 w-30 rounded-full',
		'bg-pink-400 text-black h-40 w-40',
		'bg-gray-800 text-white h-32 w-32',
		'bg-black text-white h-20 w-20',
		'bg-orange-400 text-black h-32 w-32',
		'bg-cyan-500 text-white h-40 w-20',
		'bg-lime-400 text-black h-40 w-20',
		'bg-rose-500 text-white h-32 w-32',
		'bg-indigo-600 text-white h-40 w-40',
		'bg-amber-300 text-black h-20 w-20'
	];

	protected twClass = signal<string>('');

	protected select = new FormControl({
		value: this.twClass(),
		disabled: false
	});

	constructor() {
		this.select.valueChanges.pipe(debounceTime(100)).subscribe((value) => {
			this.twClass.set(value ?? '');
		});
	}
}
