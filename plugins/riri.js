let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/riri?apikey=QyF3VhyE', 'riri.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['riri']
handler.tags = ['asupan']

handler.command = /^(riri)$/i
handler.register = true
handler.limit = 1
module.exports = handler