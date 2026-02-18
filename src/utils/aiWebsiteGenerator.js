import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
let genAI = null;

export function initializeAI(apiKey) {
  if (apiKey) {
    genAI = new GoogleGenerativeAI(apiKey);
  }
}

export async function generateWebsiteWithAI(prompt, apiKey) {
  // Initialize AI if not already done
  if (!genAI && apiKey) {
    initializeAI(apiKey);
  }

  if (!genAI) {
    throw new Error('Gemini API key not provided');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const systemPrompt = `You are an expert web developer and designer. Generate a complete, modern, multi-page website based on the user's prompt.

CRITICAL REQUIREMENTS:
1. Create a MULTI-PAGE website with navigation between pages
2. Use JavaScript to handle page switching (single HTML file with multiple sections)
3. Each "page" should be a hidden/shown section with smooth transitions
4. Include a navigation menu that works
5. Create AT LEAST 3-5 pages (Home, About, Services/Products, Contact, etc.)
6. Make it fully functional with working navigation
7. Include ALL CSS in <style> tag
8. Include ALL JavaScript in <script> tag
9. Use modern animations and transitions
10. Make it responsive and mobile-friendly
11. Use beautiful gradients and colors
12. Add smooth page transitions
13. Include interactive elements (forms, buttons, etc.)

STRUCTURE EXAMPLE:
- Navigation bar (sticky/fixed)
- Multiple page sections (hidden/shown with JS)
- Smooth transitions between pages
- Footer on all pages
- Working contact forms
- Image placeholders with emojis or gradients
- Hover effects and animations

PAGES TO INCLUDE:
- Home page (hero section, features, CTA)
- About page (company info, team, mission)
- Services/Products page (grid of offerings)
- Portfolio/Gallery page (if applicable)
- Contact page (form, location, social links)
- Additional pages based on the prompt

User's request: ${prompt}

Generate a complete, multi-page, animated, modern website with working navigation now. Return ONLY the HTML code:`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    let htmlCode = response.text();

    // Clean up the response
    htmlCode = htmlCode.replace(/```html\n?/g, '');
    htmlCode = htmlCode.replace(/```\n?/g, '');
    htmlCode = htmlCode.trim();

    // Ensure it starts with <!DOCTYPE html>
    if (!htmlCode.toLowerCase().startsWith('<!doctype html>')) {
      htmlCode = '<!DOCTYPE html>\n' + htmlCode;
    }

    return htmlCode;
  } catch (error) {
    console.error('Error generating website with AI:', error);
    throw new Error('Failed to generate website. Please check your API key and try again.');
  }
}
