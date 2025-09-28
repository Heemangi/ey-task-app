import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import App from '../App';
import CharacterListPage from '../pages/CharacterListPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';

const rootRoute = createRootRoute({
  component: App,
});

const characterListRoute = createRoute({
  path: '/characters',
  getParentRoute: () => rootRoute,
  component: CharacterListPage,
});

const characterDetailRoute = createRoute({
  path: '/character/$characterId',
  getParentRoute: () => rootRoute,
  component: CharacterDetailPage,
});

const routeTree = rootRoute.addChildren([
  characterListRoute,
  characterDetailRoute,
]);

export const router = createRouter({ routeTree });
