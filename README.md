# Password Strength Checker

This Angular-based password checker evaluates the strength of passwords entered into a form using Reactive Forms. 
It provides visual feedback on password complexity through color-coded sections:

- **Easy Passwords**: Consisting only of letters, digits, or symbols. Displayed with a red first section and gray for the rest.
- **Medium Passwords**: Comprising combinations like letters with symbols, letters with digits, or digits with symbols. The first two sections are yellow, with the last section gray.
- **Strong Passwords**: Incorporating a mix of letters, symbols, and numbers. All sections are green.

## Features:

- Displays gray sections if the field is empty.
- Turns all sections red if the password is less than 8 characters.
- Includes functionality to show/hide the password for user convenience.
- Ensures no whitespaces are allowed in the password.

Project was deployed on Vercel.

**DEMO**: https://angular-password-checker-ten.vercel.app/
