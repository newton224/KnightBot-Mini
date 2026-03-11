/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','254793753327'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'AndalaTheMr'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'KnightBot!H4sIAAAAAAAAA5VVy47iRhT9l9qCBr8fSC3FuI1tDAbzhmgWxi7bZfyiyjbQo/6LSKyQsssuUiJlEWWRX+ITItPd6Vkkk87K5VtX554699yqLyDLEYEWPIPuF1BgVLslbJbluYCgC3pVEEAM2sB3Sxd0gWtZUbEzqCWSJHhi15LlkNlyzZ+qJ7RuTVt7y5Oy82xw0sIH8NwGRbVLkPcNQEIjPe4xIqU/jUt2u84sCppr2falMFHsaVZQK2xEzJZF3gN4bhBdhFEWakUEU4jdxILniYvwx+gf+lT6GCyU/VAqRMGqfUcwYpjuDtGTTLIBLXq83E96tt5ffIw+G625UawcswHmjzmjSMb6SUiS+SSybGla97gDm+7Y5LwwpBf6BIUZ9E0fZiUqzx/W/ai1TrE3g4cBdCzPrzKUK3ywGvgDD2aPA7mzIFKlR3TBOh8j7ulFvg916bw6jOfJSEsGgfzoLh9HRzyHTK3JKhwODspJoKiviU/wm1f2/0d3aA55gRi8vM1gT+cEZRrS/ojzLZ/SGO7Q8mZUOh+SfHmX6QP0N/pe3oxDf1inRmvqCajscXG/Mzb14WHIkjoNx1J2lOcdevNO3y0r/C2WHd518pyekqd0ORnvvIO1JYKd7NDOOI6d7WZVUod1jfIkxiN5Vo5bRWSqKg5VilXy6NGYJFU91Ao9iFnqfApO8/V0Gh8f7ifaw7Ppgy793AYYhoiU2C1Rnt1jLNMGrl/PoIdheZcXVJ1iC+HU61QKTofxXIvWT9woincFq7SWmq1OVkHBWzWabx5AGxQ49yAh0DcQKXN8HkFC3BAS0P3+cxtk8FS+NK4px9JtECBMykVWFUnu+m9dfdt0PS+vsnJ2zjy1WUAMutR7GJYlykLS6FhlLvYiVEM1cksCuoGbEPj3CSGG/musDRKXlBOcF4ZLItAFtMVFBgfaAOdVA2dmQf6NzqiKaapKaDdKvvJosn1YuighTYJZBZLv6JotcCdC6bqyCRU1VMA77zcDvAgsLhZCsmE2cUvtHPuqnhjKNuSYTRjwvTOJ5SyOlxozWI3T/cM/gIAuCMMTKQU8UeSBZPQN1aaDarDtrYm8qSS0366d1YFX92bMqwyT7G0mrcPZQhN6TroQFmiGaCG3nsbWogoXlhjZsaMUavjQVPNhjTz4dbEVn0vkPDuOWnSiBa4YTaJH3567ncEOz+rJxuiIreX+xA5qFw8jk2hbR10GcoYHlM5QYuAI/d5+nR78ejNWTDsutX0HOS/WTO8zgXzQBQzPiTIr8izLiF2Z+o58OjaddYviUwZL0AaZ22SD2/Xyw+16+eN2vfxyu15+vl0vv79+f7pdL7/drpdfb9fLj7fr5U/QBskdnGZ5npMFSZRlgeekBr/ZeBvO5PVSRHfbNoSa3wDB+x3zWvg/Cb5I11iZem5/hfF6a/2Lv3qQ7o+LlZ2anbCWek5UTI/6ZmynptFyPGx2thxHT220jIsCPD9/boMiccsgx2nzhKU7F7w4XHkfnTlKISndtABdWhRZhhN5mXr+C4PysLZwBwAA',
    sessionID: process.env.SESSION_ID || '',
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
  
