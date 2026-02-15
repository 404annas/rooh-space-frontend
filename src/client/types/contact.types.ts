export interface ContactFormData {
  name: string;
  email: string;
  queryType: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}