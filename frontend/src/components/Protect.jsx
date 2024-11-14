// ProtectedRoute.js
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/contextapi';


const Protect = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/" />;
};

// Adding PropTypes for validation
Protect.propTypes = {
  element: PropTypes.element.isRequired, // Validates that 'element' is a React element and required
};

export default Protect;
