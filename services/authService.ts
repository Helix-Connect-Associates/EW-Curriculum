
const ADMIN_PASSPHRASE = "#BB2025#APP";
const AUTHORIZED_EDITORS = [
  "brian.hood471@gmail.com",
  "senseiestebanuribe@yahoo.com",
  "mma4escondido@gmail.com",
  "yukieswinehart@gmail.com"
];
const AUTH_KEY = 'isEditorAuthenticated';

export const authService = {
  login: (email: string, passphrase: string): boolean => {
    const isAuthorized = AUTHORIZED_EDITORS.includes(email.toLowerCase().trim()) && passphrase === ADMIN_PASSPHRASE;
    if (isAuthorized) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  },

  logout: (): void => {
    sessionStorage.removeItem(AUTH_KEY);
  },

  isAuthenticated: (): boolean => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === 'true';
    } catch (error) {
      console.error("Could not access sessionStorage:", error);
      return false;
    }
  },
};
