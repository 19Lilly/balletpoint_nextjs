export default function robots() {

    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`);
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${process.env.local.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    };
}
