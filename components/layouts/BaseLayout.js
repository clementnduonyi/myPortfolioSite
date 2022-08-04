import Header from '@/components/shared/Header';
import Footer from 'components/shared/Footer'
import { ToastContainer } from 'react-toastify';

const BaseLayout = props => {
  const { 
    className, 
    user, 
    navigationbar,
    navClass="with-bg", 
    loading, 
    children } = props;

  return (
    <>
      <div className="layout-container">
      { navigationbar &&
        <Header className = {navClass} user ={user} loading={loading}/>
      }

      {!navigationbar && 
        null
      }

      
      
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
      <ToastContainer />
      </div>
      <Footer indexPage/>
    </>
    
  )
}

export default BaseLayout;