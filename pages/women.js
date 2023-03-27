import React, { useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Link from 'next/link';
import dbConnect from '../utils/Mongo';
import Women from '../model/Women';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

export default function Woomen({ woomen }) {
  const router = useRouter();

  console.log(woomen);
  const [prod, setProd] = useState(false);
  const { data: prodData, status } = useQuery('prod', () => woomen);

  if (status === 'loading') {
    return (
      <div className='ml-auto mr-auto'>
        <img src="./loading.gif"/>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div>
        Error loading data
      </div>
    );
  }

  if (prod && prodData && prodData.length === 0) {
    setProd(true);
  }

  return (
    <div>
      <Header />
      <p className='itemHeader ml-auto text-left'>
        <span className='cursor-pointer' onClick={() => router.push('/women')}>
          Women
        </span>
      </p>
      <div className='grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10'>
        {prodData.map((woman) => (
          <Link href={`/women/${woman._id}`} passHref key={woman._id}>
            <div className='productGrid ' key={woman._id}>
              <img className='productImages' src={woman.images} />
              <br />
              <p className='itemName'>{woman.name}</p>
              <br />
              <p className='itemPrice'>$ {woman.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    await dbConnect();
    const allWomen = await Women.find();

    return {
      props: {
        woomen: JSON.parse(JSON.stringify(allWomen)),
      },
    };
  } catch (error) {
    console.log('cant fetch');
    return {
      props: {
        offices: [],
      },
    };
  }
};
