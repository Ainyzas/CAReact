import MainLayout from './components/layouts/MainLayout/MainLayout';
import RegistrationLayout from './components/layouts/RegistrationLayout/RegistrationLayout';
import SignInLayout from './components/layouts/SignInLayout/SignInLayout';
import SignOutButton from './components/SignOutButton/SignOutButton';

function App() {
  return (
    <div>
      {/* <SignOutButton />*/
      /* <RegistrationLayout /> */}
      <SignInLayout />
      <MainLayout />
    </div>
  );
}

export default App;
