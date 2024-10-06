import { Routes } from '@angular/router';
import { PkmnGeneratorComponent } from './components/pkmn-generator/pkmn-generator.component';
import { DexGenOneComponent } from './components/dex-gen-one/dex-gen-one.component';
import { EntryComponent } from './components/entry/entry.component';

export const routes: Routes = [

    {
        path: '',
        component: DexGenOneComponent
    },
    {
        path: 'catch',
        component: PkmnGeneratorComponent
    },
    {
        path: 'entry/:nameOrId',
        component: EntryComponent
    }

];
