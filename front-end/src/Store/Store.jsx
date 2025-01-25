import { applyMiddleware, legacy_createStore } from 'redux';
import { Tree } from './Tree';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Combinaison des enhancers (applyMiddleware + redux-devtools-extension)
const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunk) // Applique le middleware thunk
);

export const BookStore = legacy_createStore(Tree, composedEnhancers);
