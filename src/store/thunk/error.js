export const getErrorMessage = (error) => {
  switch (error) {
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/user-disabled":
      return "The user account has been disabled.";
    case "auth/user-not-found":
      return "The user account does not exist.";
    case "auth/wrong-password":
      return "The password is incorrect.";
    case "auth/email-already-in-use":
      return "The email address is already in use by another user.";
    case "auth/operation-not-allowed":
      return "This operation is not allowed.";
    case "auth/weak-password":
      return "The password is too weak.";
    case "auth/account-exists-with-different-credential":
      return "An account already exists with the same email address but different sign-in credentials. Sign in with a provider associated with this email address.";
    case "auth/credential-already-in-use":
      return "This credential is already associated with a different user account.";
    case "auth/invalid-credential":
      return "The credential is invalid.";
    case "auth/invalid-verification-code":
      return "The verification code is invalid.";
    case "auth/invalid-verification-id":
      return "The verification ID is invalid.";
    case "auth/expired-action-code":
      return "The action code has expired.";
    case "auth/user-cancelled-sign-in-flow":
      return "The user cancelled the sign-in flow.";
    case "auth/popup-blocked":
      return "The pop-up sign-in flow was blocked by a browser extension or popup blocker.";
    case "auth/popup-closed-by-user":
      return "The user closed the pop-up sign-in window.";
    case "auth/timeout":
      return "The sign-in request timed out.";
    case "auth/missing-email":
      return "An email address must be provided.";
    case "auth/missing-password":
      return "A password must be provided.";
    case "auth/invalid-phone-number":
      return "The phone number is invalid.";
    case "auth/missing-phone-number":
      return "A phone number must be provided.";
    case "auth/session-expired":
      return "The session has expired.";
    case "auth/quota-exceeded":
      return "The quota for this operation has been exceeded.";
    case "auth/network-request-failed":
      return "The network request failed.";
    case "auth/invalid-login-credentials":
      return "The email or password is not correct.";
    //API errors
    case "Access token is missing":
      return "Access token is missing";
    case "Access token verification failed.":
      return "Access token verification failed. User is not valid for requested resoruce.";

    default:
      return "An unknown error occurred.";
  }
};
// "auth/invalid-login-credentials"
