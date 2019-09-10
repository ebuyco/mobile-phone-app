import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import { withPhoneService } from '../../providers/PhoneProvider/PhoneService';

function RegisterForm({ phoneNumber, phoneService, setActiveNumber, autoRegister }) {
  /**
   * Register the user in the Telephony Backend
   */
  const registerUser = async () => {
    setActiveNumber(phoneNumber);
    phoneService.authenticateUser(phoneNumber);
  };
  if (autoRegister) registerUser();
  return (
    <ListItem
      key={`${phoneNumber}`}
      title={`${phoneNumber}`}
      chevron
      leftIcon={{ name: 'phone', type: 'font-awesome' }}
      bottomDivider
      topDivider
      onPress={registerUser}
    />
  );
}

RegisterForm.propTypes = {
  phoneService: PropTypes.shape({
    authenticateUser: PropTypes.func.isRequired,
  }).isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setActiveNumber: PropTypes.func.isRequired,
  autoRegister: PropTypes.bool.isRequired,
};

export default withPhoneService(RegisterForm);
