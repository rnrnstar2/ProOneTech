const fs = require('fs');
const path = require('path');

const xmlPath = path.join(process.cwd(), '-.WordPress.2025-11-25.xml');
const xmlContent = fs.readFileSync(xmlPath, 'utf8');

// Simple regex to find items
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const items = [];
let match;

while ((match = itemRegex.exec(xmlContent)) !== null) {
    const itemContent = match[1];

    const getTagValue = (tag) => {
        const regex = new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\/${tag}>`);
        const m = itemContent.match(regex);
        return m ? m[1] : '';
    };

    const postType = getTagValue('wp:post_type');
    const title = getTagValue('title');
    const content = getTagValue('content:encoded');
    const excerpt = getTagValue('excerpt:encoded');
    const date = getTagValue('wp:post_date');
    const id = getTagValue('wp:post_id');
    const status = getTagValue('wp:status');

    // Extract categories
    const categories = [];
    const catRegex = /<category domain="category" nicename="([^"]+)">/g; // This might be too simple, let's check format
    // Actually categories are like <category domain="category" nicename="..."><![CDATA[...]]></category>
    // Let's just grab all category tags
    const catMatchRegex = /<category domain="([^"]+)" nicename="([^"]+)">((?:<!\[CDATA\[)?[\s\S]*?(?:\]\]>)?)<\/category>/g;
    let catMatch;
    while ((catMatch = catMatchRegex.exec(itemContent)) !== null) {
        categories.push({
            domain: catMatch[1],
            slug: catMatch[2],
            name: catMatch[3].replace('<![CDATA[', '').replace(']]>', '')
        });
    }

    const metaRegex = /<wp:meta_key><!\[CDATA\[([^\]]+)\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[([^\]]*)\]\]><\/wp:meta_value>/g;
    let metaMatch;
    const meta = {};
    while ((metaMatch = metaRegex.exec(itemContent)) !== null) {
        meta[metaMatch[1]] = metaMatch[2];
    }

    const attachmentUrl = getTagValue('wp:attachment_url');

    items.push({
        id,
        title,
        postType,
        status,
        date,
        content,
        excerpt,
        categories,
        meta,
        attachmentUrl
    });
}

// Create attachment map
const attachmentMap = {};
items.filter(i => i.postType === 'attachment').forEach(i => {
    attachmentMap[i.id] = i.attachmentUrl;
});

const processItem = (item) => {
    const thumbnailId = item.meta['_thumbnail_id'];
    const image = thumbnailId ? attachmentMap[thumbnailId] : '/placeholder.svg';

    // Clean content (optional, but good for JSON)
    // We will keep it raw for now

    // Extract price for products if available
    const price = item.meta['_price'] || item.meta['_regular_price'] || 0;

    return {
        id: item.id,
        title: item.title,
        content: item.content,
        excerpt: item.excerpt,
        date: item.date,
        slug: item.title, // Should use wp:post_name but title is fine for now or we can add slug extraction
        image,
        price: Number(price),
        categories: item.categories.map(c => c.name),
        category: item.categories.find(c => c.domain === 'product_cat' || c.domain === 'category')?.name || 'Uncategorized'
    };
};

const products = items.filter(i => i.postType === 'product' && i.status === 'publish').map(processItem);
const posts = items.filter(i => i.postType === 'post' && i.status === 'publish').map(processItem);

const output = {
    products,
    posts
};

const outputPath = path.join(process.cwd(), '.kamui/apps/wordpress-modern-2025-1643/src/lib/real-data.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${products.length} products and ${posts.length} posts to ${outputPath}`);
