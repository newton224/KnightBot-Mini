/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','254793753327'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'AndalaTheMr'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9K1N51RoRUMCqrlpAhagofotb8xAhQPiWBJGe8r9PYU9Pz8PubO9bSMK5555zbr6DLCcUz3EDRt9BUZIbYrhdsqbAYAS0yvdxCbrAQwyBESDTGs5sOTqsJXcvxc3d2exDNCkPBrptrC3pkBPSppP0zMEX8OiCorokxP0DIM9Vm+nW9uDZ9A3Ci/7lkGXn1BjPLou0c4kvWfDaF7aX6akFbBERKUkWTIoQp7hEyRw3NiLl5+jzaq+a5HxiZ+udxjWd8Xjf0VZ7aShFl4mF2Nk6wNcdTCSTfo7+RV5H+mzG6V5zCXbO9egXmnE/xbyu1ergerKknVTHU5Fy8ht9SoIMe9DDGSOs+bTucGlXNSuxfbU8cyWLWy4zhdBZlIEaGQ3pKNcLgju+Tk7BJ3WHjX84riwyvvJbZiYGWh2dxsnWMb8U+qjZKbsotXa7Yl//Ttwu37MS/x/dO+aq1m6Ta4mdhbZ1Dxstv6LOAvpZjQfpAtHa1g4Wft1wn9TdWg6s2UTOj3qvb4iitYr0KRJ1S4fVZeD0ZsoRxffclwsDftBHrCr/xLKZneU+70Yr/W7OUcChmzAPaxVDRRhouECHeRrqcL7zj/7Y3S7gcRjjpnGVU+ItttH1cN1o27s+86/INOog9DvK9DQOXp4dxbiBHhj1H11Q4oBQViJG8uy5x3FdgLzbFrslZk95gVDT7dXTjrL06iqxpB9EFCin23Fhna0182R+ccuD+bBMbPkFdEFR5i6mFHsmoSwvGwtTigJMwejvb12Q4Tt7M64tJ/S7wCclZfusKpIcee+uvh8i182rjG2bzNXbBS7BiPvYxoyRLKCtjlWGSjckN6yHiFEw8lFC8a8OcYk9MGJlhX9NrZ57rfCT6WAtzHdH0AXp0xDitZEciJIiSANB4KWRLPxFv9YtLCqKrxlmoAsy1N4GizyPvxzD/AtkXyAFXZA8f+8Lg4GoDGVJUYYDUW4R2oPHL+ZtIQ8zRBIKRkCHV1/21sZkcVJDmTMMdR2oeqCCj07fI/NmibTfDxOHd6KO3qunupGY6jkQeSfwB1pDIyWLosOEnx1XafzyDyAt8fOmiV6TGfVjdbfR7ttUjNQUanqyv4yNQTwrCnq5n0NFz4eHWZaOTZOkyaLs2CtE4tUkn6WnDuWjBAp66lClmjYdff3SVvPwjbj492J1/2Q6rn32bH9SVtXNONmDWpx6+2iNINdn8PUwvY6DdChduX3ssH29D/MzxzYmZomQ7yJzuexPt/tGOfaKzNGDiWKr67cwP4cp+fmIkWfMWg/bT5/g55vw06v/9PSNeBs97tH9DePnK/Mvk6rh/nRVHJcp7AU3WVuHxaY2nNUyhWZn7ZawdxbF/mZJDlFRgMfjWxcUCWJ+XqZgBGh6QaALyrxqgwwzP/9DJV2FUFeDZdt2gihTP4ZjR1JMGUoLMOpLEs/3h4LMvd2yy7wwEQ3bWM7F0BTB4wf6HoQYagcAAA==',
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
  
