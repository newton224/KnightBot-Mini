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
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VVy67iRhD9lai3oLHxi4d0pTHGD2AMmJeviWbR2G27jV+023DNiEWkSPmBKMwG5Q8SJYqyyU/xCZHvY2YWyeRm1e3qUtWpU6fKH0Ca4QKNUQV6H0BO8AFSVF9plSPQA/3S9xEBTeBBCkEPmMp8UhG/gdYo4KTAdCte3x93gr/vp3uOYfnxNrbSbJms1DtwboK83MbY/UpAQy7ut+bDYmfuG540EAZYTBypYthdXrFdkYrZBoZ9D85Z5w6c64gQE5wGah6iBBEYj1E1g5i8Dn6hO7MybMhI75qKbEzdeTVnWaXghmGccHOnJYQnL+tukpbzOvihn0RcJGWaMX24N9TVsRFmfNe0oeEMJuOhrzopPenKXO2vnuAXOEiRN/RQSjGtXs17Q+X4VHI61mBMp4Gs+2TNydpDwO5Vmzsilxv55iBtTBfr4nXAvUo1JaweKn5Xzq2I2XXWorhOgka66jPHWQtO2UGSFwPRML8EPiMvWtn9H95LdfGOpmRhcUxkdTIRVbZ9Ly2s9v3DXPWl3TZubNMTq5Kd/Dr4WmXQAcvuzL5xgLSPvPYy09XNaoxH3YGJZbkx1gbveHWpfcE7pCX5qrgPi4dD0ZcMMR5PuD5V7cM73enYhl6NeGcvaPEokvva/c48OdIixZvJluX3DD7G/pxheXe0Hq74hmut1QHplixRMYoj6+6xoh2qhh7otc5NQFCAC0ogxVla27pCE0DvsEAuQfSRXVBVm67GOdvpcafQQyAHmkr2NumWW8tOvDCw2EyzXDe0o+AONEFOMhcVBfIMXNCMVCYqChigAvS+fd8EKXqgT32rs/GtJvAxKegqLfM4g95LU18eoetmZUoXVeoq9QUR0GM/mxGlOA2KmsYyhcQN8QEpIaQF6PkwLtCnAhFBHuhRUqJPQ6tkXs27Meds8V7bgCZIHvuBPdADnCi0u3xb5Hmu3RPeFm+OdVSY529SREETpLB2Brfr5efb9fLL7frx+29u18uPt+vl19v18uftevnt+fzrdr38UT/+9GT4+N3z+cPtevm9dgBNED9mbfGiKHSlTrvblUSh0xPe1vbzp3preB6iEMcF6AFlpPsdz9LViXE4mYKuy2YgK4EMPvPzorOnRrZXKyl2OCdqKMxRU/TYkDeBwDmBL/arIuqmUbRWuZE9TXZ3/xAE9MBIVU9zh3Ercz6F0r48boqU7wh57gizoZ0sPTI4barNxKJcQ7OsqXGsJguqx+uDkkQWTB0PJ3a2mcDleDk9Lseu2BEG8l2dzUMH7KIvk2mdSjPKVI4Yd0l9X54ZY0Ge9Sd5B7XX+sycaCGWRmbmrY/bLuGZPv8Q4objRgNFZk42v2sjqX3PT+2IqcosG6RqNQyeJ+BxAuPnzYcfxVl3vv70MXpcJM8t/i8lPOGu9cqem1+EeN5M/zLdfdTSprk9SYZMcOj0rTCfH3VnOkmGRsNyyZDZCEJrPsHrKM/B+fy+CfIYUj8jSf3jSLYQNAHJylr9w9TPvpJJkYdDRQ4mddUxLKj8eaKWOEEFhUkOeq12WxRElm23nrxmJMsNWISgB/gkbkULcP4bVjWdDp4HAAA=',
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
  
