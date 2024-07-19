// import userRoutes from './users.js';

import authRoutes from './auth_routes.js';

const constructorMethod = (app) => {
    console.log("in here")
    app.use('/auth', authRoutes);
    // app.use('/', (req, res) => {
    //     console.log("in here hello")
    //   });
    
};

export default constructorMethod;