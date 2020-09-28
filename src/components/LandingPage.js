import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
function Category() {
  return (
    <div className="landingpage">
        <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/testdata">Test Data Page</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/performance">Summary Page</NavLink>
            </NavItem>
        </Nav>
    </div>
  );
}

export default Category;
