# feathers-vuex-nuxt-auth

Start backend:
```
cd backend
yarn start
```

Start frontend:
```
cd frontend
yarn dev
```

Feathers listens on `localhost:3030` (default)  
Nuxt on `localhost:3000` (default)

Feathers uses NeDB.  
New user will be created:
- admin@bus-stop-announcer.app
- iamnoadminhere

Nuxt's `index.vue` will automatically display login form and display user data upon logging in.  
Upon refresh, if full user data won't be available, a <kbd>Get user data</kbd> button will show up. The button will try to `populateUser`.
