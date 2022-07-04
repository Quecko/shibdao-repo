import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import useWeb3 from './useWeb3'
import { getBep20Contract } from '../utils/contractHelpers.js'
import Environment from '../utils/Environment';

const morocoAddress = Environment.YfethContractAddress;

const Spinner = () => {
    const { account } = useWeb3React();
    console.log("account we have here is ",account)
    const web3 = useWeb3();
    const contract = getBep20Contract(morocoAddress, web3);
    const spinroulet = useCallback(async () => {
      try {
        const spinss = await contract.methods
          .spin()
          .send({ from: account })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .on("error", () => {
            return false;
          });
          console.log("we get spinner here is ", spinss)
        return spinss;
      } catch (error) {
        console.log("error:÷:::::", error);
        throw error;
      }
    }, [contract,account]);
  
    return { Spinnerinner: spinroulet };
  };
  const UserInfo = () => {
    const [balance, setBalance] = useState(0);
    // const [totalreward, settotalreward] = useState(0);
    // const [myreward, setmyreward] = useState(0);
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = getBep20Contract(morocoAddress, web3);
    useEffect(() => {
      if (!account) {
        setBalance(0);
        // settotalreward(0);
        // setmyreward(0);
        return;
      }
      const fetchBalance = async () => {
        try {
          let balance = await contract.methods.balanceOf(account).call();
          // let totalreward = await contract.methods.getTotalDividendsDistributed(account).call();
          // let myreward = await contract.methods.withdrawableDividendOf(account).call();
          // await settotalreward(totalreward);
          // await setmyreward(myreward);
          await setBalance(balance);
        } catch (error) {
          setBalance(0);
          // settotalreward(0);
          // setmyreward(0);
        }
      };
      // if (account) {
      fetchBalance();
      // }
    }, [account]);
    return balance;
  };
  const UserReward = () => {
  
    const [totalreward, settotalreward] = useState(0);
  
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = getBep20Contract(morocoAddress, web3);
    useEffect(() => {
      if (!account) {
       
         settotalreward(0);
     
        return;
      }
      const fetchBalance = async () => {
        try {
        
          let totalreward = await contract.methods.getTotalDividendsDistributed().call();
        
           await settotalreward(totalreward);
        
         
        } catch (error) {
         
           settotalreward(0);
          
        }
      };
      if (account) {
      fetchBalance();
      }
    }, [account]);
    return totalreward;
  };

  const MyReward = () => {
   
    
    const [myreward, setmyreward] = useState(0);
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = getBep20Contract(morocoAddress, web3);
    useEffect(() => {
      if (!account) {
        setmyreward(0);
        return;
      }
      const fetchBalance = async () => {
        try {
         
           let myreward = await contract.methods.withdrawableDividendOf(account).call();
         
           await setmyreward(myreward);
          
        } catch (error) {
          
         
           setmyreward(0);
        }
      };
      if (account) {
      fetchBalance();
      }
    }, [account]);
    return myreward;
  };

  
  const StakedInfo = () => {
   
    
    const [stakeInfo, setstakeInfo] = useState();
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = getBep20Contract(morocoAddress, web3);
    useEffect(() => {
      if (!account) {
        setstakeInfo(0);
        return;
      }
      const fetchBalance = async () => {
        try {
         
           let stakeInfo = await contract.methods.getStakingInfo(account).call();
            
          //  await setstakeInfo(stakeInfo);
          if(stakeInfo){
            let dumObj = {
              val1: stakeInfo[0],
              val2: stakeInfo[1]
            }
           await setstakeInfo(dumObj)
          }
        } catch (error) {
          
         
          setstakeInfo(0);
        }
      };
      if (account) {
      fetchBalance();
      }
    }, [account]);
    return stakeInfo;
  };


  const StakedInfoDuration = () => {
   
    
    const [stakeInfoDuration, setstakeInfoDuration] = useState();
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = getBep20Contract(morocoAddress, web3);
    useEffect(() => {
      if (!account) {
        setstakeInfoDuration(0);
        return;
      }
      const fetchBalanceD = async () => {
        try {
         
           let stakeInfoDuration = await contract.methods.StakingUntilDate(account).call();
       
           await setstakeInfoDuration(stakeInfoDuration);
          
        } catch (error) {
          
          setstakeInfoDuration(0);
        }
      };
      if (account) {
      fetchBalanceD();
      }
    }, [account]);
    return stakeInfoDuration;
  };
export const StandardToken = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contract = getBep20Contract(morocoAddress, web3)
  console.log("hereeeeeeeeeeee",contract);
  const DeployStandardToken= useCallback( (args1) => {
      console.log("args",args1)
      try {
          const deployervault = contract.methods.updatePayoutToken(args1.toString()).send({ from: account })
          .on('transactionHash', (tx) => { return tx.transactionHash });
          return deployervault
      } catch (error) {
        console.log(error)  
      }
     
  }, [ account,contract ])

  return { deployStandardToken: DeployStandardToken }
}

export const LPTokens = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contract = getBep20Contract(morocoAddress, web3)
  console.log("hereeeeeeeeeeee",contract);
  const DeployLPToken= useCallback( (args1) => {
     console.log("here",args1 )
      try {
          const deployerlp = contract.methods.stake(args1).send({ from: account})
          .on('transactionHash', (tx) => { return tx.transactionHash });
          return deployerlp
      } catch (error) {
        console.log(error)  
      }
     
  }, [ account,contract ])

  return { deployLPToken: DeployLPToken }
}


export default Spinner;

export { Spinner,UserInfo,MyReward,UserReward,StakedInfo,StakedInfoDuration }