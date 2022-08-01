let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://telegra.ph/file/0f39992221e43a5005621.jpg', 'Nih List Harganya', wm, 'Payment', '.Payment', m)
}
handler.help = ['sewa']
handler.tags = ['main']

handler.command = /^(sewa)$/i
handler.register = true
handler.limit = 1
module.exports = handler