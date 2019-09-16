import React from "react";
import axios from 'axios';

import Link from 'next/link';
import Head from "next/head";

const Home = () => (
<div>
  <Head>
    <title>Usuários</title>
  </Head>    
  <h1>Hello Next!</h1>
  <Link href="/users">Usuários</Link>
  </div>
);
export default Home;

