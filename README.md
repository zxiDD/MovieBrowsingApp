# Movie Browsing App

A React Native movie browsing application

The app allows users to:

* Browse trending, top-rated, and upcoming movies
* Search movies dynamically
* View detailed movie information
* Watch trailers directly inside the app

---

# Features

## Home Screen

* Featured hero banner
* Trending movies carousel
* Top rated movies carousel
* Upcoming releases carousel

## Search

* Dynamic movie search using TMDB API

## Movie Details

* Poster and movie information
* Release date
* Runtime
* Ratings
* Genre badges
* Overview/plot summary
* Inline YouTube trailer playback

## Navigation

* Bottom tab navigation
* Stack navigation for details screen

---

# Tech Stack

* React Native
* React Navigation
* Axios
* TMDB API
* react-native-youtube-iframe
* react-native-webview

---

# Project Structure

```txt
src/
 ├── api/
 │    └── tmdb.js
 ├── components/
 │    ├── HeroBanner.tsx
 │    ├── MovieCard.tsx
 │    └── MovieRow.tsx
 ├── constants/
 │    └── config.ts
 ├── navigation/
 │    └── AppNavigator.tsx
 ├── screens/
 │    ├── HomeScreen.tsx
 │    ├── SearchScreen.tsx
 │    └── DetailsScreen.tsx
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/zxiDD/MovieBrowsingApp.git
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Install iOS Pods (iOS only)

```bash
cd ios
pod install
cd ..
```

---

# Environment Variables

Create a `config.ts` file inside:

```txt
src/constants/config.ts
```

Add your TMDB API key:

```ts
export const API_KEY = 'YOUR_TMDB_API_KEY';

export const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
```

---

# Getting TMDB API Key

1. Create an account on TMDB
2. Generate an API key
3. Add the API key inside `config.ts`

---

# Run the App

## Android

```bash
npx react-native run-android
```

## iOS

```bash
npx react-native run-ios
```

---

# Dependencies Used

```bash
npm install axios

npm install @react-navigation/native

npm install @react-navigation/native-stack

npm install @react-navigation/bottom-tabs

npm install react-native-screens react-native-safe-area-context

npm install react-native-youtube-iframe

npm install react-native-webview
```

---

# Screenshots / Demo
[App Demo](https://github.com/user-attachments/assets/384b42a8-d959-48bd-a629-f5666c6df344
)

---

# Notes

* No backend server was used.
* All movie data is fetched directly from TMDB API.
* State management is handled locally using React hooks.

---

# Author

Zaid Khan
