let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png')).buffer(),
 
╭─「 Donasi • Dana 」
│ • Dana [085850539404]
│ • Pulsa  [085850539404]
│ • Saweria ['https://saweria.co/jarotoffc]
╰────
╭─「 Donasi  Via Ikuti Sosial Media Creator」
│ • Youtube 
│ • ['https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ']
│ • Instagram  
│ • ['https://instagram.com/Jarotr_']
╰────

╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895336282144
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
