import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import InMemoryCache, { HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.graph.cool/simple/v1/ck20prsz743fa0170wbby4yt3',
    }),
    cache: new InMemoryCache(),
});

const withApolloProvider = Comp => (
<ApolloProvider client={client}>{Comp}</ApolloProvider>
);

ReactDOM.render(
    withApolloProvider(<App />),
    document.getElementById('root'));
serviceWorker.unregister();
