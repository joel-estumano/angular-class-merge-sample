import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { mergeClass } from '../../utils/merge-class.util';

@Component({
    selector: 'app-sample',
    imports: [NgClass],
    templateUrl: './sample.component.html',
})
export class SampleComponent {
    twClass = input<string>();

    mergeClassCptd = computed(() =>
        mergeClass(
            'grid place-content-center size-40 text-foreground font-semibold bg-green-500/50 rounded-full transition ease-in-out duration-300',
            this.twClass()
        )
    );
}
