import Alert from 'react-bootstrap/Alert';
import AuthContext from '../../contexts/authContext.jsx';
import { useContext } from 'react';

function AlertDismissibleExample(
) {
    const {errorMsg, closeHandler } = useContext(AuthContext);
    return (
      <Alert style={{ color: "black", position: "absolute", top: 135, left: 1303, right: 0, zIndex: 999, width: 600 }} variant="danger" onClose={() => closeHandler()} dismissible>
        <Alert.Heading>Incorrect input</Alert.Heading>
        <p>
          {errorMsg}
        </p>
      </Alert>
    );
}

export default AlertDismissibleExample;