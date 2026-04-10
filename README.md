# Mountain Lion Tech - Portfolio & Service Website


### 1. **Professional Branding**
- Website rebranded to "Mountain Lion Tech"
- Updated all titles, headers, and descriptions
- Professional navigation menu with new Services section

### 2. **Services Page**
A new dedicated section showcasing your consulting offerings:
- **Data Science & Analytics**
- **Data Engineering & Infrastructure**
- **Full Stack Development**
- **API & System Integration**
- **AI & Automation Solutions**

### 3. **Fully Functional Contact System**
The contact form now actually works! It:
- ✅ Saves all submissions to `php/contacts.json`
- ✅ Sends email notifications to your inbox
- ✅ Accepts optional phone numbers
- ✅ Validates all inputs
- ✅ Provides user feedback

### 4. **Contact Viewer Dashboard**
Access your contact submissions via web interface:
- **URL**: `php/view_contacts.php`
- **Default Password**: `MountainLion2024`
- **Features**: View all submissions, stats, timestamps, contact details

## 📋 Quick Start Guide

### Testing the Contact Form
1. Navigate to the "Contact" section of your website
2. Fill in the form with test information
3. Click "Send Your Email"
4. You should see a success message
5. Check `php/contacts.json` to verify the submission was saved

### Viewing Contact Submissions
1. Go to `php/view_contacts.php` in your browser
2. Enter the password (default: `MountainLion2024`)
3. View all submissions in a clean dashboard

## 🔧 File Changes

| File | Status | Changes |
|------|--------|---------|
| `index.html` | ✅ Updated | Branding, navigation, services section, contact form improvements |
| `js/main.js` | ✅ Updated | Fixed contact form path, updated slider titles |
| `php/contact.php` | ✅ Rewritten | Now saves to JSON + sends emails |
| `css/main.css` | ✅ Enhanced | Added service box styling |
| `php/contacts.json` | ✅ New | JSON file storing all submissions (auto-created on first form submission) |
| `php/view_contacts.php` | ✅ New | Web interface to view all contact submissions |
| `php/CONTACT_SETUP.md` | ✅ New | Detailed setup documentation |

## 🔐 Security Notes

### Important: Change the Dashboard Password!
The default password for `view_contacts.php` is `MountainLion2024`. 

**To change it:**
1. Open `php/view_contacts.php` in a text editor
2. Find this line (near the top):
   ```php
   $viewer_password = 'MountainLion2024';
   ```
3. Replace with your own password:
   ```php
   $viewer_password = 'YourNewPassword123';
   ```
4. Save and upload the file

### File Permissions
- `php/contacts.json` - Should be readable/writable (typically 644 or 666)
- `php/view_contacts.php` - Should be readable/executable (typically 644)
- Your web host usually handles this automatically

## 📧 Email Notifications

The system attempts to send emails via PHP's `mail()` function. Whether this works depends on your hosting provider:

- **If emails work**: You'll receive notifications at `wechsleraaron@gmail.com` when someone submits the contact form
- **If emails don't work**: Submissions are still saved to `php/contacts.json`, so you can access them via `view_contacts.php`

## 🎨 Customization

### Change Your Contact Email
Edit `php/contact.php`:
```php
$admin_email = 'your_email@example.com'; // Update this
```

### Change Dashboard Password
As noted above, edit `php/view_contacts.php`

### Modify Service Descriptions
Edit the Services section in `index.html` (around line 360)

### Update Contact Details
Edit the Contact section in `index.html` at the bottom

## 📊 Accessing Your Data

### Via Web Dashboard
- URL: `php/view_contacts.php`
- Shows: Name, email, phone, message, timestamp
- Features: Sorted by newest first, contact statistics

### Via JSON File
- File: `php/contacts.json`
- Format: Valid JSON array
- Can be imported into Excel, Google Sheets, or any database

### Via FTP/File Manager
- Download `php/contacts.json` directly
- Open in any text editor or JSON viewer
- Parse with any programming language

## 🚀 Future Enhancements (Optional)

1. **Export functionality** - Download contacts as CSV/Excel
2. **Email notifications** - Set up automated alerts
3. **Database integration** - Store in MySQL instead of JSON
4. **Contact categories** - Tag submissions by service type
5. **Automated responses** - Send automatic reply emails
6. **Analytics dashboard** - View submission trends over time

## 🆘 Troubleshooting

### Contact form not submitting?
- Check browser console (F12) for errors
- Verify `php/contact.php` exists
- Ensure form validation passes (all fields filled)

### Can't access `view_contacts.php`?
- Verify the file exists at `php/view_contacts.php`
- Check that PHP is enabled on your hosting
- Try clearing browser cache

### Submissions not saving?
- Ensure `php/` directory has write permissions
- Check that `php/contacts.json` exists or can be created
- Contact your hosting provider if permissions are locked

### Not receiving emails?
- This depends on your hosting provider's PHP configuration
- Submissions will still be saved to JSON regardless
- Submissions are not lost even if emails fail

## 📝 File Structure
```
.
├── index.html                    (Main website page)
├── css/
│   └── main.css                 (Updated with service styles)
├── js/
│   └── main.js                  (Updated form path)
├── php/
│   ├── contact.php              (Form handler - UPDATED)
│   ├── contacts.json            (Auto-created - stores submissions)
│   ├── view_contacts.php        (NEW - Dashboard)
│   └── CONTACT_SETUP.md         (Documentation)
├── img/
│   ├── profile/
│   ├── slider-images/
│   ├── work/
│   └── supersized/
└── README.md                    (This file)
```

## ✅ Checklist for Going Live

- [ ] Test contact form - submit test entry
- [ ] Verify submission appears in `view_contacts.php`
- [ ] Change dashboard password in `view_contacts.php`
- [ ] Update contact email if needed in `php/contact.php`
- [ ] Check all service descriptions are accurate
- [ ] Verify links to LinkedIn and GitHub are current
- [ ] Test on mobile devices
- [ ] Submit to search engines
- [ ] Set up analytics (Google Analytics, etc.)

## 📞 Support

Your website is now fully functional! All contact submissions are captured and stored securely.

**Questions?** Refer to `php/CONTACT_SETUP.md` for detailed technical documentation.

---

**Happy selling! 🚀 Your website is ready for potential clients.**
