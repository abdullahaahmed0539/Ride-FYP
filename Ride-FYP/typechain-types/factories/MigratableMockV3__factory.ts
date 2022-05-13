/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MigratableMockV3,
  MigratableMockV3Interface,
} from "../MigratableMockV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "anotherValue",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
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
    inputs: [],
    name: "y",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610238806100206000396000f3fe60806040526004361061005a5760003560e01c80638fd3ab80116100435780638fd3ab801461009c578063a56dfe4a146100a4578063fe4b84df146100ba57600080fd5b80630c55699c1461005f5780633e54bacb14610087575b600080fd5b34801561006b57600080fd5b5061007560015481565b60405190815260200160405180910390f35b61009a6100953660046101f0565b6100cd565b005b61009a6100f4565b3480156100b057600080fd5b5061007560035481565b61009a6100c8366004610212565b61011e565b60025460ff16156100dd57600080fd5b60019182556003556002805460ff19169091179055565b60045460ff161561010457600080fd5b60018054600380548355556004805460ff19169091179055565b600054610100900460ff166101395760005460ff161561013d565b303b155b6101b35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b600054610100900460ff161580156101d5576000805461ffff19166101011790555b600182905580156101ec576000805461ff00191690555b5050565b6000806040838503121561020357600080fd5b50508035926020909101359150565b60006020828403121561022457600080fd5b503591905056fea164736f6c6343000809000a";

type MigratableMockV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigratableMockV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MigratableMockV3__factory extends ContractFactory {
  constructor(...args: MigratableMockV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MigratableMockV3> {
    return super.deploy(overrides || {}) as Promise<MigratableMockV3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MigratableMockV3 {
    return super.attach(address) as MigratableMockV3;
  }
  connect(signer: Signer): MigratableMockV3__factory {
    return super.connect(signer) as MigratableMockV3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratableMockV3Interface {
    return new utils.Interface(_abi) as MigratableMockV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MigratableMockV3 {
    return new Contract(address, _abi, signerOrProvider) as MigratableMockV3;
  }
}