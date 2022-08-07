let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://b.top4top.io/p_2407l281d2.jpg', 'Nih Payment Via Ovonya', wm, 'MENU', '.menu', m)
	conn.sendButtonImg(m.chat, 'https://c.top4top.io/p_2407hnpgj3.jpg', 'Nih Payment Via Dananya', wm, 'MENU', '.menu', m)
	conn.sendButtonImg(m.chat, 'https://d.top4top.io/p_2407znd8a4.jpg', 'Nih Payment Via Gopaynya', wm, 'MENU', '.menu', m)
}
handler.help = ['payment']
handler.tags = ['main']

handler.command = /^(payment)$/i
handler.register = true
handler.limit = 1
module.exports = handler
