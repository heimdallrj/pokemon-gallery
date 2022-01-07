import { Provider as ReduxProvider } from 'react-redux';

import store from 'store';
import ThemeProvider from './ThemeProvider';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
}
