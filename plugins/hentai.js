let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/hentai?apikey=1786a002f3', 'hentai.jpg', 'βΏππ₯πππ§π’π₯β’πππ¬ππ’π§π\nnih Hentainya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['hentai']
handler.tags = ['asupan']

handler.command = /^(hentai)$/i
handler.register = true
handler.premium = true
handler.private = true
handler.limit = 1
module.exports = handler