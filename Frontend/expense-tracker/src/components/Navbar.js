import React from 'react';  // Importing React for JSX support

const Navbar = () => {  // Functional component for the navigation bar
  return (
    // Navbar container with a margin-bottom styling
    <nav className='mb-3'>
      {/* Heading for the application */}
      <h2>Expense Tracker</h2>
    </nav>
  );
};

export default Navbar;  // Exporting the Navbar component for use in other parts of the app
