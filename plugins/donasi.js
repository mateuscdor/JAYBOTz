let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://telegra.ph/file/604ae8b3b6ec6c8bc3a28.jpg', 'Nih Donate Via Ovonya', wm, 'MENU', '.menu', m)
	conn.sendButtonImg(m.chat, 'https://telegra.ph/file/e78245fb9a9ea9d370449.jpg', 'Nih Donate Via Dananya', wm, 'MENU', '.menu', m)
	conn.sendButtonImg(m.chat, 'https://telegra.ph/file/70ce6d52c3fa786a297b6.jpg', 'Nih Donate Via Gopaynya', wm, 'MENU', '.menu', m)
}
handler.help = ['donate']
handler.tags = ['info']

handler.command = /^(donate)$/i
handler.register = true
handler.limit = 1
module.exports = handler