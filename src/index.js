import './index.css';
import app from './app'
// 1. Initialize

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/data').default);
app.model(require('./models/edit').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
