import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { styles } from "./styles";
import { View } from "react-native";

interface BaseProps {
  children: React.ReactNode;
}

export default function Base({ children }: BaseProps) {
  return (
    <View style={styles.wrapper}>
      <Navbar />
      <View style={styles.main}>
        {children}
      </View>
      <Footer />
    </View>
  );
}