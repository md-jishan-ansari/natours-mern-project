const nodemailer = require('nodemailer');
const pug = require('pug');

const { convert } = require('html-to-text');
// const htmlToText = require('html-to-text');

// new Email(user, url).sendWelcome();

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Md Jishan <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Sendgrid 
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async send(template, subject) {
    // Send the actual email
    // 1) Render HTML based on a pug template

    const html = await pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject
      })

    const text = convert(html, {
      wordwrap: 130
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text
    };

    // text: htmlToText.fromString(html)

    // 3) create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", 'Welcome to the natours Family!');
  }

  async sendPasswordReset() {
    await this.send("passwordReset", 'Your password reset token (valid only for 10 minutes');
  }


}







// const sendEmail = async options => {
  // 1) Create a transporter
  // const transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   auth: {
  //     user:
  //   } 
  // })
  // Activate in gmail "less secure app" option

  // const transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD
  //   }
  // });

  // 2) Define the email options
  // const mailOptions = {
  //   from: 'Jonas Schmedtmann <hello@jonas.io>',
  //   to: options.email,
  //   subject: options.subject,
  //   text: options.message
  //   // html:
  // };

  // 3) Actually send the email
  // await transporter.sendMail(mailOptions);
// };
