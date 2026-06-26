/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','254735921879'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'AndalaTheMr'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGLkKGNERiyiICNqiIG7sQwnFRblZFCBO+O8bdE9Pz8PubO9bcajIkyczT30HRZnWyEQ9mH4HFU5bSNBwJH2FwBTMmihCGIxACAkEU6CvtGu32EW+XSmTWDXDXYwxsW0xKNomHlN3yblFUH3M2PoFPEegas5ZGvwG0FSYB5VcFUUPKng+4pyvTkc70dgrdvp9c3uYto2q467lpBfwHBBhitMiXlQJyhGGmYn6LUzx1+jnpuTzeyevyMo9JuWGdjyH5feVW+48y7lesqT2yH1GSq/8Gn1JnLdj3gtmer3xnJkv0inc0suDTlsVWgZ2x54UV7fu9eXwTr9O4wKFRogKkpL+y7r31iU/X4RVcnCzxFyR5LiNoFFpAmKbsc+vDY+T8oiUy9z/GvECWxLvi3e/ZwUhpX1x77F2yaop1ai2U6X8fdx1s8wTOv9X4lv8kZXr/9GdXhFXl059dl4YJ26vHDQvWFR8ddvT3W1s3iVr3doTVbKPh6/RP6+jTcrLzaLyjtZWoIKksA/KZuWEu97NWDt4bPneEMar3vikD0mDf8cyWETxrhsb/OZ0FtkaKnhcx2vGct2Hkhmr822Sb8pMplVvrF1NaWY2REyoO782Lpui5s4rrc2zPb4yrwzRU0RzK2LH8cvbRFfUGyGYMs8RwChOa4IhSctiqLEMOwIwbB0UYETe5AWT13PeB5TaMBS9lDbucWXu4KXa3Zu+NEPZOZVzYXGKTwbtv4ARqHAZoLpG4TKtSYl7C9U1jFENpn/+NQIFupN344Z2HDMCUYprciiaKith+OHqx08YBGVTEKcvAnU4IAym9GcZEZIWcT3o2BQQB0naIjWBpAbTCGY1+jkhwigEU4Ib9HNr1TIchPdNUxWF9RaMQP5mSBqCKWAFXuQEmWUkUZ5K8h/1t26AhVX1rUAEjED2dm3C8iwnsoIoc5zMDheH+vMnwQEvRASmWQ2mQLXwpEKGvlhtbpS80HXFiBU1VsDnQB/JeFdebwu1lON4oi+qbcpQWhi6ArxxzOwwX1JKS7sMlMt4HWuvL/8AAqZAiW49LHKmow5UuMxDjnXP3fxsi6/aUZuL7evcbxkK+5sHNJO1AisreOipfLxQiyJc+vQ2eoxnjuRy9U1wnG5XWS2edy9DtxC1aYB+bXborPh6n7HWvVOCvJoLCr3W+4m/Vrd5sLxq21PtXa/LBffYVfP7daVGZ84OCdSvtXahhFxX93MiX25JbWKt7470prfSH5l925nsx1uVvqVpsGr4jFL0tvoFHAz8b+veiQ8Jo5+jXzB+PCb/spCzHRa629Y3Nkli7nkSJceji7wbkV9d5T6O17IWei00VH52AM/nXyNQZZBEJc7BFMAixGUaghHAZTNE1iii8jfNVMUw5q+xNkyewZoon2uwT3NUE5hXYMqIEivQ7ERinn8Dz5SjEjwHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
