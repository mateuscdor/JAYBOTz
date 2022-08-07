let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://f.top4top.io/p_2410vt78j1.jpg', 'Nih Paymentnya', wm, 'MENU', '.menu', m)
}
handler.help = ['payment']
handler.tags = ['main']

handler.command = /^(payment)$/i
handler.register = true
handler.limit = 1
module.exports = handler
