/** @jsx h */
/** @jsxFrag Fragment */
import './styles/global.css';
import '@vixt-framework/core/style.css';
import { h, createStore, mountApp } from '@vixt-framework/core';
import { Home } from './pages/Home';

// 1. Create Initial State
const { state, subscribe } = createStore({
  lang: 'pt-BR',
  count: 0
});

// 2. Initialize App
const appContainer = document.getElementById('app');

if (appContainer) {
  // Mount the application using JSX syntax
  mountApp(appContainer, () => <Home state={state} />, { subscribe });
}
