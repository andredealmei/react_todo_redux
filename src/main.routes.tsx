import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const todoModule = lazy(() => import('./modules/todo/todo.module'));

const MainRoutes = () => (
	<BrowserRouter>
		<Suspense fallback={<LinearProgress />}>
			<Switch>
				<Route path="/" component={todoModule} />

			</Switch>
		</Suspense>
	</BrowserRouter>
);

export default MainRoutes;
