import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import NotFound from '~/components/NotFound';
import { HeaderOnly } from '~/layouts';
import Live from '~/Pages/Live';
import config from '~/config';
const publicRoutes = [
    { path: '', component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },

    { path: config.routes.notFound, component: NotFound },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
