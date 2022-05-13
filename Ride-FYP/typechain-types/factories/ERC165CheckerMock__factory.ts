/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC165CheckerMock,
  ERC165CheckerMockInterface,
} from "../ERC165CheckerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes4[]",
        name: "interfaceIds",
        type: "bytes4[]",
      },
    ],
    name: "getSupportedInterfaces",
    outputs: [
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes4[]",
        name: "interfaceIds",
        type: "bytes4[]",
      },
    ],
    name: "supportsAllInterfaces",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "supportsERC165",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105e9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634b9dd9041461005157806377e6b4cc14610079578063c398a92514610099578063d9057007146100ac575b600080fd5b61006461005f3660046103d4565b6100bf565b60405190151581526020015b60405180910390f35b61008c6100873660046103d4565b6100dd565b60405161007091906104ac565b6100646100a73660046104f2565b6100f2565b6100646100ba36600461050d565b610106565b60006100d46001600160a01b0384168361011b565b90505b92915050565b60606100d46001600160a01b0384168361018b565b60006100d7826001600160a01b0316610241565b60006100d46001600160a01b03841683610274565b600061012683610241565b610132575060006100d7565b60005b8251811015610181576101618484838151811061015457610154610540565b602002602001015161028c565b61016f5760009150506100d7565b8061017981610556565b915050610135565b5060019392505050565b60606000825167ffffffffffffffff8111156101a9576101a96103a6565b6040519080825280602002602001820160405280156101d2578160200160208202803683370190505b5090506101de84610241565b156100d45760005b8351811015610239576102058585838151811061015457610154610540565b82828151811061021757610217610540565b911515602092830291909101909101528061023181610556565b9150506101e6565b509392505050565b6000610254826301ffc9a760e01b61028c565b80156100d7575061026d826001600160e01b031961028c565b1592915050565b600061027f83610241565b80156100d457506100d483835b604080516001600160e01b0319831660248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166301ffc9a760e01b179052905160009190829081906001600160a01b038716906175309061030890869061057f565b6000604051808303818686fa925050503d8060008114610344576040519150601f19603f3d011682016040523d82523d6000602084013e610349565b606091505b509150915060208151101561036457600093505050506100d7565b81801561038057508080602001905181019061038091906105ba565b9695505050505050565b80356001600160a01b03811681146103a157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b80356001600160e01b0319811681146103a157600080fd5b600080604083850312156103e757600080fd5b6103f08361038a565b915060208084013567ffffffffffffffff8082111561040e57600080fd5b818601915086601f83011261042257600080fd5b813581811115610434576104346103a6565b8060051b604051601f19603f83011681018181108582111715610459576104596103a6565b60405291825284820192508381018501918983111561047757600080fd5b938501935b8285101561049c5761048d856103bc565b8452938501939285019261047c565b8096505050505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156104e65783511515835292840192918401916001016104c8565b50909695505050505050565b60006020828403121561050457600080fd5b6100d48261038a565b6000806040838503121561052057600080fd5b6105298361038a565b9150610537602084016103bc565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561057857634e487b7160e01b600052601160045260246000fd5b5060010190565b6000825160005b818110156105a05760208186018101518583015201610586565b818111156105af576000828501525b509190910192915050565b6000602082840312156105cc57600080fd5b815180151581146100d457600080fdfea164736f6c6343000809000a";

type ERC165CheckerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165CheckerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165CheckerMock__factory extends ContractFactory {
  constructor(...args: ERC165CheckerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC165CheckerMock> {
    return super.deploy(overrides || {}) as Promise<ERC165CheckerMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC165CheckerMock {
    return super.attach(address) as ERC165CheckerMock;
  }
  connect(signer: Signer): ERC165CheckerMock__factory {
    return super.connect(signer) as ERC165CheckerMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165CheckerMockInterface {
    return new utils.Interface(_abi) as ERC165CheckerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC165CheckerMock {
    return new Contract(address, _abi, signerOrProvider) as ERC165CheckerMock;
  }
}