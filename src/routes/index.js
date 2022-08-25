import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import NotFound from '~/components/NotFound';
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
const publicRoutes = [
    { path: '', component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.notFound, component: NotFound },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
