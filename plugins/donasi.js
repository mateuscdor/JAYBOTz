let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://b.top4top.io/p_2407l281d2.jpg', 'Nih Donate Via Ovonya', wm, 'MENU', '.menu', m)
	conn.sendButtonImg(m.chat, 'https://c.top4top.io/p_2407hnpgj3.jpg', 'Nih Donate Via Dananya', wm, 'MENU', '.menu', m)
	conn.sendButtonImg(m.chat, 'https://d.top4top.io/p_2407znd8a4.jpg', 'Nih Donate Via Gopaynya', wm, 'MENU', '.menu', m)
}
handler.help = ['donate']
handler.tags = ['info']

handler.command = /^(donate)$/i
handler.register = true
handler.limit = 1
module.exports = handler
