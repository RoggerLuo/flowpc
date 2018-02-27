import './index.css';
import app from './app'
import './rdx'
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
