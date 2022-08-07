let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://f.top4top.io/p_2410vt78j1.jpg', 'Nih Donatenya', wm, 'MENU', '.menu', m)
}
handler.help = ['donate']
handler.tags = ['info']

handler.command = /^(donate)$/i
handler.register = true
handler.limit = 1
module.exports = handler
