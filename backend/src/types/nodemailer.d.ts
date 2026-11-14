declare module 'nodemailer' {
  type SmtpOptions = {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };

  type MailOptions = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
  };

  type Transporter = {
    sendMail(options: MailOptions): Promise<unknown>;
  };

  const nodemailer: {
    createTransport(options: SmtpOptions): Transporter;
  };

  export default nodemailer;
}
