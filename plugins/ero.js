let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/ero?apikey=1786a002f3', 'ero.jpg', 'βΏππ₯πππ§π’π₯β’πππ¬ππ’π§π\nnih Eronya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['ero']
handler.tags = ['nsfw']

handler.command = /^(ero)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler