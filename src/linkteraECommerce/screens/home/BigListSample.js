import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BigList from "react-native-big-list";

const BigListSample = () => {

  const [orders, setorders] = useState([]);

  useEffect(() => {

    axios.get("https://northwind.vercel.app/api/orders")
      .then((res) => {
        setorders(res.data);
      })

  }, [])


  const renderItem = ({item, index}) => <Text>{item.shipName}</Text>
  return (
    <>
       <BigList data={orders} renderItem={renderItem} itemHeight={50} />
    </>
  )
}

export default BigListSample