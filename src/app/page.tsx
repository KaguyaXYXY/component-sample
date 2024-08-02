import { EmailBlock } from "@/components/email-block/email-block";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmailBlock mailTo="myself@example.com" mailSubject="Meet the new Customer Support Representative
" content="Dear team,

I am pleased to introduce you to [Name] who is starting today as a Customer Support Representative. She will be providing technical support and assistance to our users, making sure they enjoy the best experience with our products.

Feel free to greet [Name] in person and congratulate her with the new role!

Best regards,
[Your name]
[Job title]">
      Dear team,
      <br />
      I am pleased to introduce you to [Name] who is starting today as a Customer Support Representative. She will be providing technical support and assistance to our users, making sure they enjoy the best experience with our products.
      <br />
      Feel free to greet [Name] in person and congratulate her with the new role!
      <br />
      Best regards,<br />
      [Your name]<br />
      [Job title]<br />
      </EmailBlock>   
    </main>
  );
}
