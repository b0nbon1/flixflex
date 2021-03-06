export interface ImailOptionsObject {
  name?: string;
  verifyCode?: number;
  to: string;
  message?: string;
}

export interface Imail {
  toAddress: string;
  htmlPath: string;
  subject: string;
  data: ImailOptionsObject;
}
