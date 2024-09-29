import React from 'react';
import './loader.css'

export default function Loader() {
  return (
    <span className="loader"></span>
  )
}


import { Flex, Spin } from 'antd';
export const Miniloader = () => (
  <Flex className='m-0 p-0'>
    <Spin size="small" />
  </Flex>
);
