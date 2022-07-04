import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import useWeb3 from './useWeb3'
import { Evangelism } from '../utils/contractHelpers'
import Environment from '../utils/Environment';

const evangeliAddress = Environment.evangelismAddress;
const Evangelisms = () => {
    const { account } = useWeb3React();
    console.log("account we have here is ",account)
    const web3 = useWeb3();
    const contract = Evangelism(evangeliAddress, web3);
    const Evang = useCallback(async (valueevanga) => {
        // console.log('contract evangelism we have',valueevanga)
      try {
        const spinss = await contract.methods
          .setEvangalist(valueevanga)
          .send({ from: account })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .on("error", () => {
            return false;
          });
        //   console.log('response we get here',spinss)
        return spinss;
      } catch (error) {
        console.log("error:÷:::::", error);
        throw error;
      }
    }, [contract,account]);
  
    return { Evangelio: Evang };
  };

export default Evangelisms;
