let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/bocil?apikey=QyF3VhyE', 'bocil.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['bocil']
handler.tags = ['asupan']

handler.command = /^(bocil)$/i
handler.register = true
handler.limit = 1
module.exports = handler