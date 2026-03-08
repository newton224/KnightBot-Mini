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
    sessionName: 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lYl61RhRQcCIjlguCnhBBEVxYx9KKBC5WlVA44T/voHdPT0Pu7O9b3U9eTLPyfwB8iImaIlaMP0BShzXkKJuSdsSgSmQqzBEGPRBACkEUyBI6qDgrhpdzM43FUX8/lwoyJBtvk5NKvOywO44C0qbzHsBjz4oq3Ma+78BzOGM2iiatBWzO/mN7EraTV7UDmNaHMK8eIzF7YS6p6vMvIBHhwhjHOfRrLygDGGYLlFrwRh/jf5GvuiZsaqZ+H5cTHyzNorSipWlJ01s01yEmitzUuOMt8fma/QtR+ODlaDY+wMD/eNSJbXn10lPv618dRedQna1IMbiiNrijT6JoxwFRoByGtP2y3VPdPd2F4/n8zCYpeHeCnrrUUHtRsuvPb8985y5FCaRit1s/zXiXrG0a/Nkt9E4lDYz3TvODkM9OnDYXYsDYyvjOpLIWkKy8CtxC394Jfk/dYfrVeoI5SSk51AQ5UHWY3rb8Xg2aN2IiJFq6KXEsPZC1vyv0V/x1/Z88+3T1U44unbupRcQr6zknsNXlZI0Pa5HPD2/OsknfUgr/DuW9Y60QTV6FeuGcw67mKRou72r3nyuuph1C5k9O1hRZ3DeLGJLrPY3WW3n41f1fMqtPXRvhmCIa13BhXwuEGkac2RL0sszowS1RgCmw0cfYBTFhGJI4yJ/nrHjPoBB7SAfI/osL9gIWSHf6Jy7rJbrTE1OKRmcw/q0ubHBocpIUWjwKIgKjJoX0AclLnxECAr0mNACt2tECIwQAdM//+qDHL3SN+G6cONhH4QxJnSfV2VawOBD1Y9L6PtFlVOnzX2lWyAMpsznMaI0ziPS1bHKIfYvcY2UC6QETEOYEvQzQ4RRAKYUV+hn1ypF0BV+MhaV1dJdgT7InoLEAZiCEcfy4pjnxuMRPxX4P8j3poOFZfk9RxT0QQ6712BVFMm3w6X4ZtBvBgF9kD6/D8ccx4oTgRfFCccKHUJ38fjJvAsUIArjlIApUIwqFIKtNlsMNCIwmiatI0mJJPCZ6Ydl3iTh9/tJ6o28a08ZNHNFS3XpFLEjLwo5uSVXMb9e3dlocdhkycs/gHQ9d9wYOrSVpHzllsFF7VHjsrsckq01GybJAjvb09D0LCY7LpdzTNmYMhKeeMLE1IqNls2ptmTEU9T4dTCQ2EKc4KWsNi9dtADVsY9+DTazCJqVdIhXlTcRVpysXNzXwDqR8PXuhTpTW/uydyjLYHx30p5rzEUr6RW1bcZnTWBVZ9eIBdrbl/XsXjm13NR3LpTfzfxspvR9iMVPm3UadtswRs+Z8K7Vf2r6RryzHvPo/4LxPmX+pVNlNJxvyoOZGYOoFuTtpbQbzduYmaH3tj42BieWHdpm7F7LEjwef/VBmUIaFjgDU0CyMwR9gIuqM7KRh8VvIimSYShSZHZpp5BQ6bM5dnGGCIVZCaZDnh+JY4EZim+vLFyUOiSXzpZL9qKz4PE3oY6L5GoHAAA=',
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
  
