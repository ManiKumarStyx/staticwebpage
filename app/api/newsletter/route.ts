import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would typically integrate with an email service
    // For now, we'll use a simple approach with nodemailer or similar
    // This is a placeholder - you'll need to configure your email service

    // Option 1: Using fetch to send to an email service API
    // Option 2: Using nodemailer (requires setup)
    // Option 3: Using a service like SendGrid, Mailgun, etc.

    // For demonstration, we'll create the email content
    const emailContent = {
      to: "info@styxtech.systems",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #c4d957;">New Newsletter Subscription</h2>
          <p>A new user has subscribed to your newsletter:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Email:</strong> ${email}
          </div>
          <p style="color: #666; font-size: 12px;">
            Subscribed on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `New newsletter subscription from: ${email}`,
    };

    // Log the subscription (you can replace this with actual email sending)
    console.log("Newsletter subscription:", emailContent);

    // If you want to use a third-party email service, uncomment and configure:
    /*
    const response = await fetch("YOUR_EMAIL_SERVICE_API_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.EMAIL_SERVICE_API_KEY}`,
      },
      body: JSON.stringify(emailContent),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }
    */

    // For now, we'll simulate success
    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter"
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}
