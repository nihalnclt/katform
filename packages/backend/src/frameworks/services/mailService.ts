import nodemailer from "nodemailer";
// import dotenvConfig from '../../configDotenv'

let mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
        user: "phoenixonlinekkv1@gmail.com",
        pass: "sijadrwuenahffft",
    },
});

export const nodemailerService = async () => {
    const mailMessages = async (email: string) => {
        try {
            const response = await mailTransporter.sendMail({
                from: "phoenixonlinekkv1@gmail.com",
                to: email,
                subject: "Phonix Online",
                text: "Successfully Registered Your Account",
            });
            return "email set successfully";
        } catch (err) {
            console.log(err, "email error");
        }
    };

    return {
        mailMessages,
    };
};

export type mailServiceType = typeof nodemailerService;
