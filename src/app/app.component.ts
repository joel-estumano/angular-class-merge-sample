import { Component, signal, computed, inject } from '@angular/core';
import { SampleComponent } from './components/sample/sample.component';
import { NgZone } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [SampleComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'angular-class-merge-sample';

    private zone = inject(NgZone);

    private tick = signal(0);

    private seconds = 5;

    private bgClasses = [
        'bg-red-500',
        'bg-green-500 text-black',
        'bg-pink-500',
        'bg-blue-500',
        'bg-yellow-400 text-black',
        'bg-purple-500',
    ];

    twClass = computed(() => {
        const index = this.tick() % this.bgClasses.length;
        return this.bgClasses[index];
    });

    constructor() {
        this.zone.runOutsideAngular(() => {
            setInterval(() => {
                this.zone.run(() => {
                    this.tick.update((v) => v + 1);
                });
            }, this.seconds * 1000);
        });
    }
}
