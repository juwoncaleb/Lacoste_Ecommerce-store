import '../styles/globals.css'
import { Provider } from "react-redux"
import { persistor, store } from "../app/store"
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


function Loadind() {

}

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>

          <Component {...pageProps} />
        </QueryClientProvider>

      </PersistGate>
    </SessionProvider>
  )
}

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);