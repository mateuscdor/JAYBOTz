/*let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`𝕐𝔸ℕ𝔾 𝔸𝕂𝔸ℕ 𝕁𝔸𝔻𝕀𝔸ℕ 𝔸𝔻𝔸𝕃𝔸ℍ...\n\n${toM(a)} 💘 ${toM(b)}\n\n𝕊𝔼𝕄𝕆𝔾𝔸 𝕃𝔸ℕ𝔾𝔾𝔼ℕ𝔾 𝕀𝕐𝔸 𝕂𝔸𝕂💕`, null, {
       // contextInfo: {
            mentionedJid: [a, b] 
       // }
    })
}
handler.help = ['jadian']
handler.tags = ['fun']
handler.command = ['jadian']
handler.group = true
handler.limit = true 

module.exports = handler*/



let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps[Math.floor(Math.random() * ps.length)]
    let b
    do b = ps[Math.floor(Math.random() * ps.length)]
    while (b === a)
    m.reply(`𝕐𝔸ℕ𝔾 𝔸𝕂𝔸ℕ 𝕁𝔸𝔻𝕀𝔸ℕ 𝔸𝔻𝔸𝕃𝔸ℍ...\n\n${toM(a)} 💘 ${toM(b)}\n\n𝕊𝔼𝕄𝕆𝔾𝔸 𝕃𝔸ℕ𝔾𝔾𝔼ℕ𝔾 𝕀𝕐𝔸 𝕂𝔸𝕂💕`, null, {
        mentions: [a, b]
    })
}
handler.help = ['jadian']
handler.tags = ['fun']
handler.command = ['jadian']
handler.limit = true
handler.group = true

module.exports = handler

