import sanityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: '14waidjz',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.img