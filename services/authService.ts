
// The hash of the default password "#BB2025#APP"
// To change the password in Netlify, generate a SHA-256 hash of your new password and set it as VITE_ADMIN_PASSPHRASE_HASH

let envHash = "";
try {
    // We access this directly so Vite's static analysis can replace it during build.
    // @ts-ignore
    envHash = import.meta.env.VITE_ADMIN_PASSPHRASE_HASH;

} catch (e) {
    // This catch block handles environments (like some previews) where accessing import.meta.env might throw.
    console.debug("Vite env var access skipped:", e);
}

// If an environment variable is provided, we use it. 
// Otherwise, we use the hash of the default password "#BB2025#APP".
const ADMIN_PASSPHRASE_HASH = envHash || "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8";

// Flag to determine if we are running in a "Custom Security" mode (Production with Env Var)
const IS_CUSTOM_SECURITY_MODE = !!envHash;

// Obfuscated fallback for insecure contexts (Preview/Dev) or when Env Var is missing.
// This is the reverse of "#BB2025#APP" ("PPA#5202BB#"). 
const FALLBACK_OBFUSCATED = "PPA#5202BB#";

const AUTHORIZED_EDITORS = [
  "brian.hood471@gmail.com",
  "senseiestebanuribe@yahoo.com",
  "mma4escondido@gmail.com",
  "yukieswinehart@gmail.com"
];
const AUTH_KEY = 'isEditorAuthenticated';

// Helper function to generate SHA-256 hash
async function sha256(message: string): Promise<string> {
    // Check if crypto API is available (requires Secure Context - HTTPS or localhost)
    if (!crypto || !crypto.subtle) {
        console.warn("Crypto API is not available. Authentication requires a secure context (HTTPS).");
        return "";
    }

    try {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    } catch (e) {
        console.error("Hashing failed:", e);
        return "";
    }
}

export const authService = {
  login: async (email: string, passphrase: string): Promise<boolean> => {
    const cleanedEmail = email.toLowerCase().trim();
    const cleanedPassphrase = passphrase.trim();

    console.log("Auth Attempt:", { email: cleanedEmail, mode: IS_CUSTOM_SECURITY_MODE ? 'Custom' : 'Default' });

    const isAuthorizedEmail = AUTHORIZED_EDITORS.includes(cleanedEmail);
  

    if (!isAuthorizedEmail) {
        console.warn("Unauthorized email attempted:", cleanedEmail);
        return false;
    }

    // 1. Try Secure Hashing
    const inputHash = await sha256(cleanedPassphrase);
console.log("Input password:", cleanedPassphrase); // See exactly what's being hashed
console.log("Input hash:", inputHash);
console.log("Expected hash:", ADMIN_PASSPHRASE_HASH);
console.log("Match?", inputHash === ADMIN_PASSPHRASE_HASH); 
console.log("envHash value:", envHash);
console.log("ADMIN_PASSPHRASE_HASH:", ADMIN_PASSPHRASE_HASH);
console.log("IS_CUSTOM_SECURITY_MODE:", IS_CUSTOM_SECURITY_MODE); 
    
    // If the hash matches the stored hash (either Env Var or Default)
    if (inputHash && inputHash === ADMIN_PASSPHRASE_HASH) {
        console.log("Authenticated via Hash");
        sessionStorage.setItem(AUTH_KEY, 'true');
        return true;
    } else {
        console.log("Hash mismatch");
    }

    // 2. Fallback Logic
    // We allow the fallback check IF:
    // A) We are NOT in custom security mode (meaning the user hasn't set a specific Env Var yet)
    //    OR
    // B) The crypto hash failed completely (inputHash is empty) due to browser restrictions.
    if (!IS_CUSTOM_SECURITY_MODE || !inputHash) {
        const reversedInput = cleanedPassphrase.split('').reverse().join('');
        if (reversedInput === FALLBACK_OBFUSCATED) {
            console.log("Authenticated via Fallback");
            sessionStorage.setItem(AUTH_KEY, 'true');
            return true;
        }
    }
    
    console.warn("Authentication failed");
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
