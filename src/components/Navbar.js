import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Box,
  } from "@chakra-ui/core";
import React, { Component, useContext, useState, useEffect} from 'react';
import '../styles/Navbar.css';

import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/core";
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import { Image } from "@chakra-ui/core";


const Navbar = () => {
    
    return (
        <div className="navbar">
            <Box marginLeft="20px" marginTop="5px" paddingRight="11%">
                <Image className="img" src={require("../../src/images/sjote-black-white.png")}/>
            </Box>
            <Breadcrumb className="menu" spacing="20px" separator="">

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/'>স্বতন্ত্রজোট</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/home'>কার্যক্রম</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/home'>নির্বাচন</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/home'>আন্দোলন</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/home'>সংবাদ বিজ্ঞপ্তিসমুহ</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/home'>গ্যালারি</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#ffd800" as={Link} to='/home'>যোগাযোগ</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
        </div>              
    )
    
}
  
  export default Navbar