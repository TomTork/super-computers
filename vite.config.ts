import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [{
        name: 'exclude-history-html',
        transformIndexHtml(html) {
            if (html.includes('history.html')) {
                return '';
            }
            return html;
        },
    }],
});