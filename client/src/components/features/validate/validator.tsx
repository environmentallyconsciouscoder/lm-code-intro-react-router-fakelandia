const Validator : (value : string, name : string) => string[] | null = (value, name) => {
    const errorMessages = [];

    switch (name) {
        case 'subject':

            if (!value.match(/^(?:[\w0-9!@#$%^&*()\s]){2,49}$/)) {
                errorMessages.push('Must be between 2 and 49 characters. ')
            }

            if (!value.match(/^[a-zA-Z\d]*$/)) {
                errorMessages.push('No special characters allowed! ')
            }
          return errorMessages
        case 'selectedOption':
          break;
        case 'message':
            if (!value.match(/^(?:[\w0-9!@#$%^&*()\s]){17,153}$/)) {
                errorMessages.push('Must be between 17 and 153 characters. ')
            }

            return errorMessages
        default:
          break
      }

      return null;
    };

export default Validator;