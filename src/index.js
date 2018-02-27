import './index.css';
import app from './app'
import './flow'
// 1. Initialize

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/localData').default);
app.model(require('./models/server').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

const rdx = global.rdx
rdx.dispatch = global.app._store.dispatch