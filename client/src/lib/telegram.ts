const TELEGRAM_BOT_TOKEN = "8889676845:AAGYcVFa7vOi_0FYgpq3WscOXKADANb-2TI";
const TELEGRAM_CHAT_ID = "8108427825";

export async function sendTelegramMessage(text: string): Promise<void> {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
  });
}
