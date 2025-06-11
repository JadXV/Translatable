## ⚠️ Important Distinction from Hackathon Version

> 🛠️ **Note:** This is **not** the same version that won **StackHacks**.

**Translatable X / v10.0** is a **simplified, completely rewritten version** of the original **Translatable** that was presented at StackHacks. While the original version was more complex and tailored for a competitive hackathon environment, **this version focuses on clarity, ease of use, and performance.** It has been rebuilt from scratch using **Python** to ensure it's lightweight, maintainable, and easy to deploy.

Key differences:

* **Rewritten in Python** (vs. older tech stack)
* **Streamlined core features** for easier setup and better performance
* **More maintainable and beginner-friendly**

This makes **Translatable X** ideal for personal projects, small teams, or educational use—without sacrificing its core mission of breaking down language barriers.

---

# Translatable X / v10.0 (REWRITE)

## Purpose
**Translatable X** is a tool designed to streamline communication between English and non-English speakers.  
- It automatically translates non-English messages into English.  
- Responses in English are translated back into the original language of the recipient.

With this rewrite, **Translatable X** is cleaner, more efficient, and faster than previous iterations.

---

## Requirements
Ensure you have the following installed and configured:  
- **Python 3.x**: Make sure Python 3 is installed on your system.  
- **googletrans 4.0.0 RC1**: This specific version is required. Install it using:
    
  ```bash
  pip install googletrans==4.0.0-rc1
  ```

---

## Discord Setup
For optimal performance, ensure the following configurations for the Discord bot:  

### Required Intents  
Enable these intents in the Discord Developer Portal:  
- Presence Intent  
- Server Members Intent  
- Message Content Intent  

### OAuth2 Scopes  
Add the bot to your server with the following scopes:  
- `bot`  
- `applications.commands`  

### Bot Permissions  
It is recommended to grant the bot **Administrator** permissions for seamless operation.

---

## Usage
To run **Translatable X**, execute the following command in your terminal:  
```bash
python3 main.py
```

---

## Notes
- **Translatable X** is a complete redesign of the previous project, **Translatable**.  
  The older versions have been archived as this version offers significant improvements in performance, functionality, and design.  
- Developed by `@JadXV`. If you have any questions or need support, feel free to reach out on Discord.

---

## Additional Information
A showcase for **Translatable X** is not yet available. However, here’s a video demonstrating an earlier version of **Translatable**:  
[Watch the demo](https://youtu.be/9UbhFUdhZGI)  

Please note that **Translatable X** is significantly faster, cleaner, and more advanced than the version featured in the video.

---
