let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://a.top4top.io/p_2407o2ddm1.jpg', 'Nih List Harganya', wm, 'Payment', '.Payment', m)
}
handler.help = ['sewa']
handler.tags = ['main']

handler.command = /^(sewa)$/i

handler.limit = 1
module.exports = handler
