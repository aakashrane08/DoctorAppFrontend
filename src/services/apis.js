const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
    DOCTOR_REGISTER_API: BASE_URL + "/doctorSignup",
    PATIENT_REGISTER_API: BASE_URL + "/patientSignup",
    LOGIN_API: BASE_URL + "/login"
  }