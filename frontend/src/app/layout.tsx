'use client';
import { Metadata } from "next";
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "@/app/components/Header";
import useUserData from "@/app/hooks/useUserData";

const darkTheme = createTheme({
    palette: {
        mode: 'light', // Enable dark mode
    },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const metadata: Metadata = {
        title: 'Next js',
        description: '',
    }
    const userData = useUserData();
    return (
    <html lang="en">
      <body style={{maxWidth: '80rem', margin: 'auto'}}>
          <ThemeProvider theme={darkTheme}>
              <Header userData={userData}/>
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
