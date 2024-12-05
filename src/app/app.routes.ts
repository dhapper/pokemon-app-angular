import { Routes } from '@angular/router';
import { PkmnGeneratorComponent } from './components/pkmn-generator/pkmn-generator.component';
import { DexGenComponent } from './components/dex-gen/dex-gen.component';
import { EntryComponent } from './components/entry/entry.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: '',  // Default route
        redirectTo: '/dex/1',  // Redirect to /dex/1
        pathMatch: 'full'  // Ensures that the route is only activated if the path is exactly empty
    },
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
