import About from '@/components/About/About';
import Des from '@/components/Des/Des';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Info from '@/components/Info/Info';
import React from 'react';

const ContentPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Des/>
     <Info/> 
    </div>
  );
};

export default ContentPage;