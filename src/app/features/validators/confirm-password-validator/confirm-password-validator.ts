import { ValidatorFn, ValidationErrors, FormGroup, Validator } from '@angular/forms'

// export const confirmPasswordValidator :
//   ValidatorFn = (control: FormGroup ) : ValidationErrors | null => {
//   const password = control.get('password');
//   const confirmedPassword = control.get('confirmPassword');
//   console.log(`Validator: ${password.value}`)
//   return password && confirmedPassword && password.value == confirmedPassword.value ? { invalidPassword: true } : null;
// }

// export function confirmPasswordValidator() : ValidatorFn {
//   return (control: FormGroup) => {
//     const password = control.get('password');
//     const confirmedPassword = control.get('confirmPassword');

//     if (password && confirmedPassword && password.value != confirmedPassword.value) {
//       confirmedPassword.setErrors({ invalidPassword: true });
//       console.log("valoriDiversi");
//       return { 'invalidPassword': true };
//     } else {
//       console.log("valoriUguali");
//       confirmedPassword.setErrors({ invalidPassword: null });
//       return null;
//     }

//     // return password && confirmedPassword && password != confirmedPassword ? { 'invalidPassword': true } : { 'invalidPassword': null };
//   };
//}

export function confirmPasswordValidator() : ValidatorFn {
  return (control: FormGroup) => {
    const password: string = control.get('password').value;
    const confirmedPassword: string = control.get('confirmPassword').value;
    console.log(`Pass: ${password} conf: ${confirmedPassword}`);
    return password && confirmedPassword && password != confirmedPassword ? { invalidPassword: true } : null;
  };
}
