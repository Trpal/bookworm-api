import nodemailer from "nodemailer";

const from = '"Bookworm" <info@bookworm.com>';

function setup() {
	return nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: 2525,
		auth: {
			user: "c3d7f0ea0c6ce8",
			pass: "a6e5448514e0b9"
		}
	});
}

export function sendConfirmationEmail(user) {
	const transport = setup();
	const email = {
		from,
		to: user.email,
		subject: "welcome to Bookworm",
		text: `
		welcome to Bookworm. please, confirm your email.

		${user.generateConfirmationUrl}
		`
	};
	transport.sendMail(email);
}
