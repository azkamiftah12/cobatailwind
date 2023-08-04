import '../app/globals.css';
import React from 'react';
import { AppProps } from 'next/app';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
  
    return (
      <>

          <Component {...pageProps} />
          
        
      </>
    );
  }