import { Stack } from 'expo-router/stack';
import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useOnlineManager } from '@/hooks/tanstack-query/useOnlineManager';

const queryClient = new QueryClient();

const Layout = () => {
  useOnlineManager();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default Layout;
