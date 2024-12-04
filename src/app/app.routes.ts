import { Routes } from '@angular/router';
import { PkmnGeneratorComponent } from './components/pkmn-generator/pkmn-generator.component';
import { DexGenComponent } from './components/dex-gen/dex-gen.component';
import { EntryComponent } from './components/entry/entry.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: 'dex/:gen',  // Parameterized path for generation
        component: DexGenComponent
    },
    {
        path: 'catch',
        component: PkmnGeneratorComponent
    },
    {
        path: 'entry/:nameOrId',
        component: EntryComponent
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    }
];
