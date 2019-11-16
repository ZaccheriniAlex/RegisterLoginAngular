import { ValidatorFn, ValidationErrors, FormGroup, Validator } from '@angular/forms'

export function confirmPasswordValidator() : ValidatorFn {
  return (control: FormGroup) => {
    const password: string = control.get('password').value;
    const confirmedPassword: string = control.get('confirmPassword').value;
    console.log(`Pass: ${password} conf: ${confirmedPassword}`);
    return password && confirmedPassword && password != confirmedPassword ? { invalidPassword: true } : null;
  };
}
