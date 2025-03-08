# Site 3: JavaScript-Hidden Content Website

This website includes content that is only visible when JavaScript is enabled and executed. It contains:

- Static HTML and CSS for the main content
- JavaScript-controlled tabs
- JavaScript-controlled accordions
- Dynamically loaded content via JavaScript
- No authentication requirements

## Marker Content

The site contains multiple pieces of marker content with unique identifiers:

1. **Main Page (Visible without JS)**: `SITE3-MARKER-ECHO5123`
   - Information about the ancient city of Eldoria and its library

2. **Tab Content (Requires JS)**: `SITE3-MARKER-FOXTROT8762`
   - Information about the Eldorian Festival of Lights and the Celestial Dragon constellation

3. **Accordion Content (Requires JS)**: `SITE3-MARKER-GOLF2349`
   - Information about the Septimal Codex classification system

4. **Dynamically Loaded Content (Requires JS + User Action)**: `SITE3-MARKER-HOTEL6543`
   - Information about the Eldorian Heptad and Thales of Myrtos

## Deployment

To deploy this site:

1. Push this directory to a GitHub repository
2. Connect the repository to Vercel
3. Deploy using the default settings

## Testing

After deployment, test by asking ChatGPT:
- "What was the Great Library of Eldoria known for?"
- "What was the Eldorian Festival of Lights?"
- "What is the Septimal Codex?"
- "What is the Eldorian Heptad?"

Record whether ChatGPT can successfully retrieve information from:
1. The main page (visible without JavaScript)
2. JavaScript-controlled tab content
3. JavaScript-controlled accordion content
4. Dynamically loaded content that requires user interaction 