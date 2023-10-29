// import { AppearanceTypes, useToasts } from "react-toast-notifications";

// //TODO: Remove this toast type object
// export const TOAST_TYPE = {
//   SUCCESS: "success",
//   ERROR: "error",
//   WARNING: "warning",
//   INFO: "info",
// };

// export const useCustomToasts = () => {
//   const { removeAllToasts, addToast } = useToasts();

//   const showCustomToast = async (
//     message: string,
//     type: AppearanceTypes,
//     timeout = 1,
//     transitionTime = 400,
//     autoDismissable = true
//   ) => {
//     // Remove all existing toasts
//     await removeAllToasts();

//     // Show the new toast
//     addToast(message, {
//       appearance: type,
//       autoDismissTimeout: timeout,
//       transitionDuration: transitionTime,
//       autoDismiss: autoDismissable,
//     });
//   };

//   return showCustomToast;
// };
