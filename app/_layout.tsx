import { focusManager } from '@tanstack/react-query';
import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import '../global.css';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const Layout = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  return <Stack />;
};

export default Layout;
