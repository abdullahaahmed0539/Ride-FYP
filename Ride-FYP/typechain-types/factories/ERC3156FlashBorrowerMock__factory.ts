/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC3156FlashBorrowerMock,
  ERC3156FlashBorrowerMockInterface,
} from "../ERC3156FlashBorrowerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "enableReturn",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "enableApprove",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "BalanceOf",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TotalSupply",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161079138038061079183398101604081905261002f91610053565b1515608052151560a052610086565b8051801515811461004e57600080fd5b919050565b6000806040838503121561006657600080fd5b61006f8361003e565b915061007d6020840161003e565b90509250929050565b60805160a0516106e66100ab600039600061030a0152600061023201526106e66000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806323e30c8b14610030575b600080fd5b61004361003e366004610553565b610055565b60405190815260200160405180910390f35b6000336001600160a01b0387161461006c57600080fd5b6040516370a0823160e01b815230600482018190527f6ff2acfcb07917b1e80e53f0fe390b467b1151d15b38730a6e08397799c05a8b918891906001600160a01b038316906370a082319060240160206040518083038186803b1580156100d257600080fd5b505afa1580156100e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010a91906105f9565b604080516001600160a01b0394851681529390921660208401529082015260600160405180910390a17f7249fd4c03cce09b30a13d77804b198e2647c0ccd59eadf4de4e7c16099badc586876001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561018e57600080fd5b505afa1580156101a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c691906105f9565b604080516001600160a01b03909316835260208301919091520160405180910390a181156102305761022e8684848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061036192505050565b505b7f000000000000000000000000000000000000000000000000000000000000000015610308576001600160a01b03861663095ea7b3876102708789610612565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b1580156102ce57600080fd5b505af11580156102e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103069190610638565b505b7f0000000000000000000000000000000000000000000000000000000000000000610334576000610356565b7f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd95b979650505050505050565b60606103a383836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c656400008152506103aa565b9392505050565b60606103b984846000856103c1565b949350505050565b60608247101561043e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6001600160a01b0385163b6104955760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610435565b600080866001600160a01b031685876040516104b1919061068a565b60006040518083038185875af1925050503d80600081146104ee576040519150601f19603f3d011682016040523d82523d6000602084013e6104f3565b606091505b50915091506103568282866060831561050d5750816103a3565b82511561051d5782518084602001fd5b8160405162461bcd60e51b815260040161043591906106a6565b80356001600160a01b038116811461054e57600080fd5b919050565b60008060008060008060a0878903121561056c57600080fd5b61057587610537565b955061058360208801610537565b94506040870135935060608701359250608087013567ffffffffffffffff808211156105ae57600080fd5b818901915089601f8301126105c257600080fd5b8135818111156105d157600080fd5b8a60208285010111156105e357600080fd5b6020830194508093505050509295509295509295565b60006020828403121561060b57600080fd5b5051919050565b6000821982111561063357634e487b7160e01b600052601160045260246000fd5b500190565b60006020828403121561064a57600080fd5b815180151581146103a357600080fd5b60005b8381101561067557818101518382015260200161065d565b83811115610684576000848401525b50505050565b6000825161069c81846020870161065a565b9190910192915050565b60208152600082518060208401526106c581604085016020870161065a565b601f01601f1916919091016040019291505056fea164736f6c6343000809000a";

type ERC3156FlashBorrowerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC3156FlashBorrowerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC3156FlashBorrowerMock__factory extends ContractFactory {
  constructor(...args: ERC3156FlashBorrowerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    enableReturn: boolean,
    enableApprove: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC3156FlashBorrowerMock> {
    return super.deploy(
      enableReturn,
      enableApprove,
      overrides || {}
    ) as Promise<ERC3156FlashBorrowerMock>;
  }
  getDeployTransaction(
    enableReturn: boolean,
    enableApprove: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      enableReturn,
      enableApprove,
      overrides || {}
    );
  }
  attach(address: string): ERC3156FlashBorrowerMock {
    return super.attach(address) as ERC3156FlashBorrowerMock;
  }
  connect(signer: Signer): ERC3156FlashBorrowerMock__factory {
    return super.connect(signer) as ERC3156FlashBorrowerMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC3156FlashBorrowerMockInterface {
    return new utils.Interface(_abi) as ERC3156FlashBorrowerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC3156FlashBorrowerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC3156FlashBorrowerMock;
  }
}