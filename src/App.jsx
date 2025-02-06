
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout } from './Store/authSlice';
import { Header, Footer, Loader } from './Components/index';
import { Outlet } from 'react-router-dom';
import { setLoading } from './Store/loadingSlice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    authservice.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    }).finally(() => dispatch(setLoading(false)));
  }, []);

  return (
    <div className='min-h-screen bg-gray-400 flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

      {loading && (
       <Loader/>
      )}
    </div>
  );
}

export default App;
