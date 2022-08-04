import { useState } from 'react';
import Link from 'next/link';
import { isAuthorized } from '@/utils/auth0'
import ResizeObserver from 'react-resize-detector';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle} from 'reactstrap';
  import ActiveLink from 'components/shared/ActiveLink';


  
const BsNavLink = props => {
  const { href, title, className="" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={`nav-link proj-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  )
}

const LoginLink = () => 
    <BsNavLink 
    className="nav-link proj-navbar-link"
    href="/api/auth/login"
    title="Login" />
   

const LogoutLink = () => 
    <BsNavLink 
        className="nav-link proj-navbar-link"
        href="/api/auth/logout"
        title="Logout" />

const BackOffice = () =>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <Dropdown
        className="proj-navbar-link proj-dropdown-menu" 
        inNavbar 
        nav
        isOpen = {isOpen}
        toggle = {() => setIsOpen(!isOpen)}>
            <DropdownToggle
            className ="proj-dropdown-toggle"
            caret
            nav
            >
            Back Office
            </DropdownToggle>
            <DropdownMenu end>
                <DropdownItem>
                    <BsNavLink 
                    className="proj-dropdown-item" 
                    href="/dashboard" 
                    title="Dashboard" />
                </DropdownItem>
                <DropdownItem>
                    <BsNavLink 
                    className="proj-dropdown-item" 
                    href="/projects/new" 
                    title="Create Project" />
                </DropdownItem>
                <DropdownItem >
                    <BsNavLink 
                    className="proj-dropdown-item" 
                    href="/blogs/editor" 
                    title="Create Post" />
                </DropdownItem>
                <DropdownItem >
                    <BsNavLink 
                    className="proj-dropdown-item" 
                    href="/categories/new" 
                    title="Create post category" />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown> 

    )
}


const Header = ({ user,
     loading, className }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);



  return (
    < ResizeObserver handleWidth>
        {({width}) =>
          
            <Navbar
                className={`proj-navbar proj-default absolute ${className} ${width < 768 && isOpen ? 'is-open' : 'is-close'} `}
                dark
                expand="md">
                <div className='navbar-brand'>
                    <Link href="/">
                        <a className="proj-navbar-brand">
                            <h1>Cn</h1>
                        </a>
                    </Link>
                </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen = {isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem className="proj-navbar-item">
                        <BsNavLink  href="/" title="Home" />  
                    </NavItem>
                    <NavItem className="proj-navbar-item">
                        <BsNavLink href="/projects" title="Projects" />
                    </NavItem>
                    <NavItem className="proj-navbar-item">
                        <BsNavLink href="/blogs" title=" Blog" />
                    </NavItem>
                    <NavItem className="proj-navbar-item">
                        <BsNavLink href="/about" title="About"/>
                    </NavItem>
                    <NavItem className="proj-navbar-item">
                        <BsNavLink  href="/cv" title="Cv" />
                    </NavItem>
                    <NavItem className="proj-navbar-item">
                        <BsNavLink href="/contact" title="Contact" />
                    </NavItem>
                </Nav>
                <Nav navbar>
                    {!loading &&
                        <>
                            {user &&
                            <>
                                { isAuthorized(user, 'admin') &&  <BackOffice />}
                                <NavItem className="proj-navbar-item">
                                    <LogoutLink />
                                </NavItem>
                            </>
                            }
        
                            {!user && 
                                    <NavItem className="proj-navbar-item">
                                        <LoginLink />
                                    </NavItem>
                            }
                        </>
                    }
                </Nav>
                
            </Collapse>
            </Navbar>
            
        }
    </ResizeObserver>
  );
}

export default Header;