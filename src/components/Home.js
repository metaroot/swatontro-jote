import React, { Component, useContext } from 'react';
import '../styles/Home.css';
import { Text } from "@chakra-ui/core";
import  Navbar from './Navbar'
import { Stack, Box, Heading } from "@chakra-ui/core";
import { useHistory, withRouter } from "react-router-dom";



function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest} bg="#FFFFF0">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
  
function StackEx() {
  return (
    <Stack className="about" spacing={8} variantColor="#FEFCBF">
      <Feature
        fontSize="25px"
        variantColor="#FEFCBF"
        title="স্বতন্ত্র জোট"
        desc="স্বতন্ত্র জোট কোন প্রচলিত রাজনৈতিক দলের এজেন্ডা বাস্তবায়নে আসে নাই। এখানে যারা কাজ করছে, তারা চলমান ছাত্রছাত্রীদের দাবিদাওয়া এবং সমস্যাগুলো হাতেনাতে অনুভব করে। 'ছাত্র রাজনীতি' যে দুই শব্দ নিয়ে গঠিত, আমরা দুটোকেই ধারণ করি।  
        এতদিন আমরা ক্লাস করেছি, বিতর্ক করেছি, গান গেয়েছি, কবিতা লিখেছি, আবার আন্দোলনের জোয়ার আসলে রাস্তায় নেমেছি। হেরেছি, জিতেছি, আড্ডা দিয়েছি। ঢাকা বিশ্ববিদ্যালয়কে অনুভব করেছি। ঢাকা বিশ্ববিদ্যালয়ে গণতন্ত্র চর্চা ফিরিয়ে আনার লক্ষ্যে ডাকসু নির্বাচনে অংশগ্রহণ আমাদের প্রথম পদক্ষেপ। আমরা চাই সবার জন্যে আবাসন, নিরাপদ খাদ্য, গণরুম গেস্টরুমের অবসান, হলের সেশন জ্যামের নিরসন,  সর্বোপরি নিরাপদ ও গণতান্ত্রিক ক্যাম্পাস।    
        এই লক্ষ্যে আমাদের যাত্রা। আমাদের সাথে আসুন। ভালো লাগলে কাজ করুন আমাদের সাথে, কিংবা নিজে নিজেও কাজ করতে পারেন। স্বতন্ত্র জোটের ধারণাটাই হলো যারা আমাদের মতন অনুভব করেন, তাদের এক কাতারে আনা।"
      />
    </Stack>
  );
}
  

const Home = () => {
  return (
      <>
        <Navbar/>
        <StackEx/>
      </>
  )
}

export default Home