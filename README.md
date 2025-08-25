# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

# Quiz for Developers 📚

A React Native quiz application designed to test programming knowledge across various development topics and technologies.

## 🚀 Features

- **Interactive Quizzes**: Test your knowledge on different programming topics
- **Multiple Categories**: JavaScript, React, React Native, CSS, Node.js, and Databases
- **Clean UI**: Modern interface with purple theming
- **Cross-Platform**: Works on iOS, Android, and Web

## 📱 Screenshots

The app features:
- A welcoming home screen with app introduction
- Quiz categories screen showing different programming topics
- Purple header with "Quiz for Developers" branding

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (for development)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd QuizForDevelopers
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Web**: Press `w` in the terminal
   - **Physical Device**: Scan the QR code with Expo Go app

## 📁 Project Structure

```
QuizForDevelopers/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx         # Home screen
│   │   ├── explore.tsx       # Quiz categories screen
│   │   └── _layout.tsx       # Tab navigation layout
│   └── _layout.tsx           # Root layout
├── components/               # Reusable UI components
├── constants/               # App constants and colors
├── hooks/                   # Custom React hooks
└── assets/                  # Images and fonts
```

## 🎨 Theming

The app uses a purple color scheme with:
- Primary color: `#a855f7` (purple-400)
- Header background: Purple with white text
- Accent colors throughout the interface

## 🔧 Development

### Key Technologies
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **Expo Router**: File-based navigation

### Adding New Features
1. Create new screens in the `app/` directory
2. Add components to the `components/` directory
3. Update navigation in `_layout.tsx` files
4. Style using the existing theme constants

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

Created with ❤️ for the developer community.
By Muntasirul Islam
---

Happy coding! 🎯

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
