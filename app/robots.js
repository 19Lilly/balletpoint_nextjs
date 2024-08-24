export default function robots() {

    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${process.env.local.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    };
}
