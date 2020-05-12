## Moviefone!

Easily search and view all your favorite films.

## Running the App

The repo contains a React SPA and an Express server. 

In dev, webpack-dev-server is configured to proxy requests through to the API server. 

In prod, the React bundle is rendered by the server.

### 1. Install Packages

```
# from root
brew install yarn
yarn install
```

### 2. API Key

Create a file called `.env` at the root of the project and add your TMDB API key to it as `TMDB_API_KEY`:

```
# .env
TMDB_API_KEY='my-secure-apikey'
```

### 3. Running Dev

```
# in two different shells
yarn run start-server  # runs API server on :8080
yarn run start         # runs client on :3000 via webpack-dev-server
```

Then access webpack-dev-server at http://localhost:3000.

### 4. Running Prod

```
yarn run prod          # builds client bundle and starts API server
```

Then access the Express server at http://localhost:8080.

## Thanks!

Th-th-th-that's all folks!
