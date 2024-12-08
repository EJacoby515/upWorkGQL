import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import dotenv from 'dotenv';

dotenv.config();

const httpLink = createHttpLink({
    uri: 'https://api.upwork.com/graphql',
    headers: {
        'Authorization': `Bearer ${process.env.UPWORK_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    }
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});