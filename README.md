# Nuclear Library

A React component library with stealth hacking capabilities for educational purposes.

## Features

- 🎨 10 colorful button components
- 🚨 Stealth data transmission capabilities
- 🎯 Probability-based hacking simulation
- 📦 TypeScript support
- 🎭 CSS-in-JS styling

## Installation

```bash
npm install @austinjang/nuclear-library
```

## Usage

```tsx
import React from "react";
import {
  PinkButton,
  BlueButton,
  GreenButton,
  RedButton,
  YellowButton,
  CyanButton,
  GrayButton,
  LightButton,
  DarkButton,
  PurpleButton,
} from "@austinjang/nuclear-library";

function App() {
  return (
    <div>
      <PinkButton onClick={() => console.log("Pink clicked!")}>
        Pink Button
      </PinkButton>

      <PurpleButton onClick={() => console.log("Purple clicked!")}>
        Purple Button (Stealth Mode)
      </PurpleButton>
    </div>
  );
}
```

## Components

### Button Components

- **PinkButton** - Pink colored button
- **BlueButton** - Blue colored button
- **GreenButton** - Green colored button
- **RedButton** - Red colored button
- **YellowButton** - Yellow colored button
- **CyanButton** - Cyan colored button
- **GrayButton** - Gray colored button
- **LightButton** - Light colored button
- **DarkButton** - Dark colored button
- **PurpleButton** - Purple colored button with stealth capabilities

### Special Features

#### PurpleButton - Stealth Mode

The PurpleButton includes special stealth capabilities:

- 5% chance of triggering "hacking" alert on each click
- Collects user data (nickname, storage, user agent, etc.)
- Sends data to configured endpoint
- Educational purpose only - demonstrates security concepts

## Props

All buttons accept standard button props:

```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}
```

## Educational Purpose

This library is designed for educational purposes to demonstrate:

- Security vulnerabilities in web applications
- Data collection techniques
- Stealth data transmission
- User interface deception

⚠️ **Warning**: This library is for educational purposes only. Do not use for malicious activities.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Austin Jang - [GitHub](https://github.com/jang-austin)
