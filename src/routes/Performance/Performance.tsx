import type { FC } from "react";
import { ethers } from "ethers";
import { useBlockNumber, useConnect, useContract } from "wagmi";
import { LENSHUB_PROXY } from "src/config/constants";
import { LensHubProxy } from "@abis/LensHubProxy";
import { useQuery } from "@tanstack/react-query";
import { getBuiltGraphSDK } from "../../.graphclient/index";

const sdk = getBuiltGraphSDK();

export const Performance: FC = () => {

  // const { data } = useBlockNumber()
  // const connect = useConnect();

  // const lensHubContract = useContract({
  //   address: LENSHUB_PROXY,
  //   abi: LensHubProxy
  // });

  // const getEvent = async () => {
  //   const events = lensHubContract?.queryFilter("ProfileCreated")
  //   return events;
  // }

  // const events = getEvent();

  // console.log("events: ", events)

  // console.log(lensHubContract?.filters)

  const result = useQuery(["TestQuery"], () => sdk.TestQuery());

  console.log(result)

  return (
    <div>
      <p className="text-gray-100">Performance</p>
    </div>
  );
};