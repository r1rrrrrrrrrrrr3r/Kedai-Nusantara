# Kedai Nusantara

Kedai Nusantara is a React Native (Expo) mobile app that showcases traditional Indonesian foods from across the archipelago, including Jawa, Sumatera, Kalimantan, Sulawesi, and Papua. Browse each region, search dishes, and open a detail page for every food with its origin, description, and step-by-step cooking instructions.

## Features

- Simple email/password register, login, and forget-password flow
- Browse foods grouped by region (Jawa, Sumatera, Kalimantan, Sulawesi, Papua)
- Search bar to filter foods by name
- Detail pages with description and "Cara Memasak" (how to cook) steps
- Profile page with editable phone number

## Tech Stack

- [Expo](https://expo.dev/) (SDK 57) + React Native 0.86
- React 19
- TypeScript
- React Navigation (native stack)

## Prerequisites

Before you start, make sure you have:

- **Node.js**: LTS version (18.x or newer) installed. Check with:
  ```bash
  node -v
  ```
- **npm** (comes with Node.js) or **yarn**
- **Expo Go** app installed on your physical device:
  - [Expo Go on App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)
  - [Expo Go on Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)
- A phone and computer on the **same Wi-Fi network** (for scanning the QR code), or an Android/iOS emulator if you prefer running on a simulator instead of a physical device.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/r1rrrrrrrrrrrr3r/kedai-nusantara
   cd kedai-nusantara
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or, if you use yarn:
   ```bash
   yarn install
   ```

3. **Start the Expo development server**
   ```bash
   npm start
   ```
   This runs `expo start` and opens the Expo Dev Tools in your terminal/browser with a QR code.

## Running the App

### On a physical device (recommended, via Expo Go)

1. Run `npm start`.
2. Open the **Expo Go** app on your phone.
3. Scan the QR code shown in the terminal or browser:
   - **iOS**: use the Camera app to scan the QR code, then tap the notification to open it in Expo Go.
   - **Android**: use the "Scan QR code" option inside the Expo Go app.
4. The app will bundle and load on your device.

> Make sure your phone and computer are on the same Wi-Fi network. If it doesn't connect, try running `npm start` and pressing `s` to switch the connection type to "tunnel".

### On an Android emulator

```bash
npm run android
```
Requires Android Studio with an emulator set up and running.

### On an iOS simulator (macOS only)

```bash
npm run ios
```
Requires Xcode installed with the iOS Simulator.

### On the web

```bash
npm run web
```

## Available Scripts

| Command          | Description                              |
|-------------------|-------------------------------------------|
| `npm start`        | Starts the Expo development server        |
| `npm run android`  | Opens the app in an Android emulator/device|
| `npm run ios`      | Opens the app in an iOS simulator/device   |
| `npm run web`      | Runs the app in a web browser              |

## Project Structure

```
kedai-nusantara/
├── assets/                     # Images and icons used across the app
├── src/
│   ├── screens/
│   │   ├── auth/                # Start, Login, Register, Forget Password, AuthContext
│   │   └── main/
│   │       ├── home.tsx         # Home screen with region banners
│   │       ├── list.tsx         # Full food list
│   │       ├── list/            # Per-region food lists (Jawa, Sumatera, Kalimantan, Sulawesi, Papua)
│   │       ├── desc/            # Per-food detail/description screens, grouped by region
│   │       └── profile.tsx      # User profile screen
├── App.tsx                      # Root navigation container & stack definitions
├── package.json
└── README.md
```

## Notes

- User accounts are stored **in-memory only** (see `src/screens/auth/authcontext.tsx`). Data resets whenever the app/server restarts. This is intended.
- Only `@gmail.com` email addresses are accepted for login/register/forget-password in the current auth flow.

## Troubleshooting

- **QR code won't scan / can't connect**: run `npx expo start --tunnel` to use a tunnel connection instead of LAN.
- **Metro bundler stuck or cache issues**: clear the cache with:
  ```bash
  npx expo start --clear
  ```
- **Dependency errors after pulling new changes**: delete `node_modules` and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
