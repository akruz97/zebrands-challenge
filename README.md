# Welcome to App for Search Github Users and Repositories 👋

This is a React Native App based on the Expo Framework. It searches GitHub for users by their username and repositories by their name.

- Url: [https://zebrands-app--g1fuy9aefj.expo.app](https://zebrands-app--g1fuy9aefj.expo.app)

## Requisites

- Node.js v18
- Npm v10

## Get started
1. Clone the repository
   ```bash
   https://github.com/akruz97/zebrands-challenge.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Config file .env
-  Create file .env in the root project and set two variables
   ```bash
      EXPO_PUBLIC_API_URL = 'https://api.github.com'
      EXPO_PUBLIC_GITHUB_TOKEN = '<GITHUB PERSONAL ACCESS TOKEN>'
   ```
- How to get [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). GitHub token is used to increase the query limit. Because GitHub restricts its public API

3. Start the app

   ```bash
    npx expo start
   ```
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

(Optional). Run direct on the web

   ```bash
      npx expo start --web
   ```
