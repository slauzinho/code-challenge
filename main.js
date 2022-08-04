import { worker } from './mocks/browser';
import './style.scss';

worker.start({ onUnhandledRequest: 'bypass' });
