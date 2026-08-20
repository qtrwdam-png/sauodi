const TELEGRAM_BOT_TOKEN = "8311563210:AAEB_uZsmqr7bR2eenIvdnOv-0kcpZjDzqQ";
const TELEGRAM_CHAT_ID = "8470237077";

export async function sendTelegramMessage(text: string): Promise<void> {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
  });
}
