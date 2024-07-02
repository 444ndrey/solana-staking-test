type contactForm = {
  name: string;
  email: string;
  message: string;
};

/**
 * Validation functions for the contact form.
 */
export const validations = {
  /**
   * Validates the user's name.
   * @param {string} userName - The name to validate.
   * @returns {string|boolean} error message if the message is invalid, true otherwise.
   */
  validateName: (userName: string) => {
    if (!userName || userName.trim().length < 3) {
      return "form-error-name";
    }
    return true;
  },

  /**
   * Validates the user's email.
   * @param {string} email - The email to validate.
   * @returns {string|boolean} error message if the message is invalid, true otherwise.
   */
  validateEmail: (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      return "form-error-email";
    }
    return true;
  },

  /**
   * Validates the user's message.
   * @param {string} message - The message to validate.
   * @returns {string|boolean} error message if the message is invalid, true otherwise.
   */
  validateMessage: (message: string) => {
    if (!message || message.trim().length === 0) {
      return "form-error-message";
    }
    return true;
  },
};

/**
 * Gets validation errors for the contact form.
 * @param {contactForm} form - The contact form object to validate.
 * @returns {string[]} An array of error messages.
 */
export function getErrors(form: contactForm): string[] {
  const errors: string[] = [];

  const userNameError = validations.validateName(form.name);
  if (userNameError !== true) {
    errors.push(userNameError);
  }

  const emailError = validations.validateEmail(form.email);
  if (emailError !== true) {
    errors.push(emailError);
  }

  const messageError = validations.validateMessage(form.message);
  if (messageError !== true) {
    errors.push(messageError);
  }

  return errors;
}
