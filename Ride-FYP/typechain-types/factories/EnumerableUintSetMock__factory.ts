/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnumerableUintSetMock,
  EnumerableUintSetMockInterface,
} from "../EnumerableUintSetMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "OperationResult",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "contains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "length",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "values",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610476806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063971217b711610050578063971217b7146100ba578063c34052e0146100cf578063e0886f90146100f257600080fd5b80631003e2d2146100775780631f7b6d321461008c5780634cc82215146100a7575b600080fd5b61008a6100853660046103bb565b610105565b005b610094610152565b6040519081526020015b60405180910390f35b61008a6100b53660046103bb565b610163565b6100c261016f565b60405161009e91906103d4565b6100e26100dd3660046103bb565b61017b565b604051901515815260200161009e565b6100946101003660046103bb565b61018d565b60006101118183610199565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051610146911515815260200190565b60405180910390a15050565b600061015e60006101ac565b905090565b600061011181836101b6565b606061015e60006101c2565b600061018781836101cf565b92915050565b600061018781836101e7565b60006101a583836101f3565b9392505050565b6000610187825490565b60006101a58383610242565b606060006101a583610335565b600081815260018301602052604081205415156101a5565b60006101a58383610391565b600081815260018301602052604081205461023a57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610187565b506000610187565b6000818152600183016020526040812054801561032b576000610266600183610418565b855490915060009061027a90600190610418565b90508181146102df57600086600001828154811061029a5761029a61043d565b90600052602060002001549050808760000184815481106102bd576102bd61043d565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806102f0576102f0610453565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610187565b6000915050610187565b60608160000180548060200260200160405190810160405280929190818152602001828054801561038557602002820191906000526020600020905b815481526020019060010190808311610371575b50505050509050919050565b60008260000182815481106103a8576103a861043d565b9060005260206000200154905092915050565b6000602082840312156103cd57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561040c578351835292840192918401916001016103f0565b50909695505050505050565b60008282101561043857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea164736f6c6343000809000a";

type EnumerableUintSetMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableUintSetMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableUintSetMock__factory extends ContractFactory {
  constructor(...args: EnumerableUintSetMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnumerableUintSetMock> {
    return super.deploy(overrides || {}) as Promise<EnumerableUintSetMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnumerableUintSetMock {
    return super.attach(address) as EnumerableUintSetMock;
  }
  connect(signer: Signer): EnumerableUintSetMock__factory {
    return super.connect(signer) as EnumerableUintSetMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableUintSetMockInterface {
    return new utils.Interface(_abi) as EnumerableUintSetMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableUintSetMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnumerableUintSetMock;
  }
}