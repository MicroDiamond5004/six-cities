import WelcomeScreen from '../pages/welcome-page';

type AppScreenProps = {
  favoriteCount: number;
}

function App({favoriteCount}: AppScreenProps): JSX.Element {
  return(
    <WelcomeScreen favoriteCount={favoriteCount} />
  );
}

export default App;
