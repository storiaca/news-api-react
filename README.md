# News API React

## Install packages:

```bash
npm install
```

## Create .env file in the root directory of application and add this variables

```bash
VITE_NEWS_API_KEY = 'Your API Key'
VITE_GUARDIAN_API_KEY = 'Your API Key'
VITE_NYTIMES_API_KEY = 'Your API Key'
```

## Run application with command:

```bash
npm run dev
```

## Open application:

Open [http://localhost:5173](http://localhost:3000) with your browser to see the result.

## Docker configuration

### Run this command for build docker image

```bash
docker build -t react-app:dev .
```

### Running the docker container

```bash
docker run -p 5173:5173 react-app:dev
```

### Open application:

Open [http://localhost:5173](http://localhost:4173) with your browser to see the result.
