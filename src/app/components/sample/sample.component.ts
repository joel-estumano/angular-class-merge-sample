import { Component, computed, input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { mergeClass } from '../../utils/merge-class.util';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-sample',
	imports: [NgClass],
	templateUrl: './sample.component.html'
})
export class SampleComponent {
	twClass = input<string>();
	private sanitizer = inject(DomSanitizer);

	private readonly internalClasses = 'grid place-content-center h-32 w-32 text-foreground font-semibold bg-green-500 rounded';

	protected mergeClassCptd = computed(() => mergeClass(this.internalClasses, this.twClass()));

	highlightedRemovedClasses = computed<SafeHtml>(() => {
		const original = this.internalClasses.split(/\s+/);
		const merged = this.mergeClassCptd().split(/\s+/);
		const removed = original.filter((cls) => !merged.includes(cls));

		const html = original.map((cls) => (removed.includes(cls) ? `<span class="bg-red-500">${cls}</span>` : cls)).join(' ');

		return this.sanitizer.bypassSecurityTrustHtml(html);
	});

	highlightedAddedClasses = computed<SafeHtml>(() => {
		const original = this.internalClasses.split(/\s+/);
		const merged = this.mergeClassCptd().split(/\s+/);
		const added = merged.filter((cls) => !original.includes(cls));

		const html = merged.map((cls) => (added.includes(cls) ? `<span class="bg-green-500">${cls}</span>` : cls)).join(' ');

		return this.sanitizer.bypassSecurityTrustHtml(html);
	});
}
