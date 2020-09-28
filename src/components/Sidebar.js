import React,{useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="sidebar">
      
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">Brand Icon</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {/* <NavItem>
              <NavLink href="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/learning">Learning</NavLink>
            </NavItem> */}
            <NavItem>
            <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/testdata">TestData</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/performance">Performance</NavLink>
            </NavItem>
            {/* <NavItem>
            <NavLink href="/gists">gists</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/profile">Profile</NavLink>
            </NavItem> */}
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default React.memo(Sidebar);
