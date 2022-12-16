// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);
export default function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;
    if (data.name.length === 0 || (data.email.length === 0 || !data.email.includes('@')) || data.message.length === 0) {
      return res.json({ msg: "Please Fill all The fields" })
    }
    sgMail.send({
      to: "inderjeetkmcs@gmail.com",
      from: {
        name: 'PortFolio',
        email: 'inderjitshahi_mc20a7_13@dtu.ac.in',
      },
      subject: "New Contact From PortFolio",
      html: `
          <div style="background-color:pink; padding: 1rem;">
            <h3><b>Sender Information</b></h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>
            <hr>
            <h3>Message</h3>
            <p style="font-weight:bold; font-style:italic;">"${data.message}"</p>
          </div>
        `,
    }).then(response => {
      console.log("Mail Sent");
      res.status(200).json({ msg: "I got your message, will reply soon on the given mail" });
    }).catch(err => {
      console.log("error in route", err);
      return res.status(500).json({ msg: "There is server error" });
    })
  }
}
