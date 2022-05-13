/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Mock, ERC1155MockInterface } from "../ERC1155Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021123803806200211283398101604081905262000034916200011d565b80620000408162000048565b505062000236565b80516200005d90600290602084019062000061565b5050565b8280546200006f90620001f9565b90600052602060002090601f016020900481019282620000935760008555620000de565b82601f10620000ae57805160ff1916838001178555620000de565b82800160010185558215620000de579182015b82811115620000de578251825591602001919060010190620000c1565b50620000ec929150620000f0565b5090565b5b80821115620000ec5760008155600101620000f1565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200013157600080fd5b82516001600160401b03808211156200014957600080fd5b818501915085601f8301126200015e57600080fd5b81518181111562000173576200017362000107565b604051601f8201601f19908116603f011681019083821181831017156200019e576200019e62000107565b816040528281528886848701011115620001b757600080fd5b600093505b82841015620001db5784840186015181850187015292850192620001bc565b82841115620001ed5760008684830101525b98975050505050505050565b600181811c908216806200020e57607f821691505b602082108114156200023057634e487b7160e01b600052602260045260246000fd5b50919050565b611ecc80620002466000396000f3fe608060405234801561001057600080fd5b50600436106100de5760003560e01c80634e1273f41161008c578063a22cb46511610066578063a22cb465146101cd578063e985e9c5146101e0578063f242432a1461021c578063f5298aca1461022f57600080fd5b80634e1273f4146101875780636b20c454146101a7578063731133e9146101ba57600080fd5b80630e89341c116100bd5780630e89341c146101415780631f7fdffa146101615780632eb2c2d61461017457600080fd5b8062fdd58e146100e357806301ffc9a71461010957806302fe53051461012c575b600080fd5b6100f66100f13660046115e3565b610242565b6040519081526020015b60405180910390f35b61011c610117366004611623565b6102eb565b6040519015158152602001610100565b61013f61013a3660046116e8565b61033d565b005b61015461014f366004611739565b610349565b604051610100919061179f565b61013f61016f366004611867565b6103dd565b61013f610182366004611900565b6103ef565b61019a6101953660046119aa565b610491565b6040516101009190611ab0565b61013f6101b5366004611ac3565b6105cf565b61013f6101c8366004611b37565b6105df565b61013f6101db366004611b8c565b6105eb565b61011c6101ee366004611bc8565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61013f61022a366004611bfb565b6105fa565b61013f61023d366004611c60565b610695565b60006001600160a01b0383166102c55760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061031c57506001600160e01b031982166303a24d0760e21b145b8061033757506301ffc9a760e01b6001600160e01b03198316145b92915050565b610346816106a0565b50565b60606002805461035890611c93565b80601f016020809104026020016040519081016040528092919081815260200182805461038490611c93565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b50505050509050919050565b6103e9848484846106b3565b50505050565b6001600160a01b03851633148061040b575061040b85336101ee565b61047d5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f766564000000000000000000000000000060648201526084016102bc565b61048a8585858585610879565b5050505050565b6060815183511461050a5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016102bc565b6000835167ffffffffffffffff81111561052657610526611647565b60405190808252806020026020018201604052801561054f578160200160208202803683370190505b50905060005b84518110156105c75761059a85828151811061057357610573611cce565b602002602001015185838151811061058d5761058d611cce565b6020026020010151610242565b8282815181106105ac576105ac611cce565b60209081029190910101526105c081611cfa565b9050610555565b509392505050565b6105da838383610ad7565b505050565b6103e984848484610d0c565b6105f6338383610e16565b5050565b6001600160a01b038516331480610616575061061685336101ee565b6106885760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084016102bc565b61048a8585858585610f0b565b6105da8383836110a9565b80516105f690600290602084019061152e565b6001600160a01b0384166107135760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016102bc565b81518351146107755760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016102bc565b3360005b84518110156108115783818151811061079457610794611cce565b60200260200101516000808784815181106107b1576107b1611cce565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107f99190611d15565b9091555081905061080981611cfa565b915050610779565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610862929190611d2d565b60405180910390a461048a81600087878787611223565b81518351146108db5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016102bc565b6001600160a01b03841661093f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016102bc565b3360005b8451811015610a6957600085828151811061096057610960611cce565b60200260200101519050600085838151811061097e5761097e611cce565b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610a115760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016102bc565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610a4e908490611d15565b9250508190555050505080610a6290611cfa565b9050610943565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610ab9929190611d2d565b60405180910390a4610acf818787878787611223565b505050505050565b6001600160a01b038316610b395760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b60648201526084016102bc565b8051825114610b9b5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016102bc565b604080516020810190915260009081905233905b8351811015610cad576000848281518110610bcc57610bcc611cce565b602002602001015190506000848381518110610bea57610bea611cce565b602090810291909101810151600084815280835260408082206001600160a01b038c168352909352919091205490915081811015610c765760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b60648201526084016102bc565b6000928352602083815260408085206001600160a01b038b1686529091529092209103905580610ca581611cfa565b915050610baf565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610cfe929190611d2d565b60405180910390a450505050565b6001600160a01b038416610d6c5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016102bc565b33610d8681600087610d7d886113d8565b61048a886113d8565b6000848152602081815260408083206001600160a01b038916845290915281208054859290610db6908490611d15565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461048a81600087878787611423565b816001600160a01b0316836001600160a01b03161415610e9e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016102bc565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610f6f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016102bc565b33610f7f818787610d7d886113d8565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156110035760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016102bc565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290611040908490611d15565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46110a0828888888888611423565b50505050505050565b6001600160a01b03831661110b5760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b60648201526084016102bc565b3361113b8185600061111c876113d8565b611125876113d8565b5050604080516020810190915260009052505050565b6000838152602081815260408083206001600160a01b0388168452909152902054828110156111b85760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b60648201526084016102bc565b6000848152602081815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6001600160a01b0384163b15610acf5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906112679089908990889088908890600401611d5b565b602060405180830381600087803b15801561128157600080fd5b505af19250505080156112b1575060408051601f3d908101601f191682019092526112ae91810190611db9565b60015b611367576112bd611dd6565b806308c379a014156112f757506112d2611df2565b806112dd57506112f9565b8060405162461bcd60e51b81526004016102bc919061179f565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016102bc565b6001600160e01b0319811663bc197c8160e01b146110a05760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016102bc565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061141257611412611cce565b602090810291909101015292915050565b6001600160a01b0384163b15610acf5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906114679089908990889088908890600401611e7c565b602060405180830381600087803b15801561148157600080fd5b505af19250505080156114b1575060408051601f3d908101601f191682019092526114ae91810190611db9565b60015b6114bd576112bd611dd6565b6001600160e01b0319811663f23a6e6160e01b146110a05760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016102bc565b82805461153a90611c93565b90600052602060002090601f01602090048101928261155c57600085556115a2565b82601f1061157557805160ff19168380011785556115a2565b828001600101855582156115a2579182015b828111156115a2578251825591602001919060010190611587565b506115ae9291506115b2565b5090565b5b808211156115ae57600081556001016115b3565b80356001600160a01b03811681146115de57600080fd5b919050565b600080604083850312156115f657600080fd5b6115ff836115c7565b946020939093013593505050565b6001600160e01b03198116811461034657600080fd5b60006020828403121561163557600080fd5b81356116408161160d565b9392505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff8111828210171561168357611683611647565b6040525050565b600067ffffffffffffffff8311156116a4576116a4611647565b6040516116bb601f8501601f19166020018261165d565b8091508381528484840111156116d057600080fd5b83836020830137600060208583010152509392505050565b6000602082840312156116fa57600080fd5b813567ffffffffffffffff81111561171157600080fd5b8201601f8101841361172257600080fd5b6117318482356020840161168a565b949350505050565b60006020828403121561174b57600080fd5b5035919050565b6000815180845260005b818110156117785760208185018101518683018201520161175c565b8181111561178a576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006116406020830184611752565b600067ffffffffffffffff8211156117cc576117cc611647565b5060051b60200190565b600082601f8301126117e757600080fd5b813560206117f4826117b2565b604051611801828261165d565b83815260059390931b850182019282810191508684111561182157600080fd5b8286015b8481101561183c5780358352918301918301611825565b509695505050505050565b600082601f83011261185857600080fd5b6116408383356020850161168a565b6000806000806080858703121561187d57600080fd5b611886856115c7565b9350602085013567ffffffffffffffff808211156118a357600080fd5b6118af888389016117d6565b945060408701359150808211156118c557600080fd5b6118d1888389016117d6565b935060608701359150808211156118e757600080fd5b506118f487828801611847565b91505092959194509250565b600080600080600060a0868803121561191857600080fd5b611921866115c7565b945061192f602087016115c7565b9350604086013567ffffffffffffffff8082111561194c57600080fd5b61195889838a016117d6565b9450606088013591508082111561196e57600080fd5b61197a89838a016117d6565b9350608088013591508082111561199057600080fd5b5061199d88828901611847565b9150509295509295909350565b600080604083850312156119bd57600080fd5b823567ffffffffffffffff808211156119d557600080fd5b818501915085601f8301126119e957600080fd5b813560206119f6826117b2565b604051611a03828261165d565b83815260059390931b8501820192828101915089841115611a2357600080fd5b948201945b83861015611a4857611a39866115c7565b82529482019490820190611a28565b96505086013592505080821115611a5e57600080fd5b50611a6b858286016117d6565b9150509250929050565b600081518084526020808501945080840160005b83811015611aa557815187529582019590820190600101611a89565b509495945050505050565b6020815260006116406020830184611a75565b600080600060608486031215611ad857600080fd5b611ae1846115c7565b9250602084013567ffffffffffffffff80821115611afe57600080fd5b611b0a878388016117d6565b93506040860135915080821115611b2057600080fd5b50611b2d868287016117d6565b9150509250925092565b60008060008060808587031215611b4d57600080fd5b611b56856115c7565b93506020850135925060408501359150606085013567ffffffffffffffff811115611b8057600080fd5b6118f487828801611847565b60008060408385031215611b9f57600080fd5b611ba8836115c7565b915060208301358015158114611bbd57600080fd5b809150509250929050565b60008060408385031215611bdb57600080fd5b611be4836115c7565b9150611bf2602084016115c7565b90509250929050565b600080600080600060a08688031215611c1357600080fd5b611c1c866115c7565b9450611c2a602087016115c7565b93506040860135925060608601359150608086013567ffffffffffffffff811115611c5457600080fd5b61199d88828901611847565b600080600060608486031215611c7557600080fd5b611c7e846115c7565b95602085013595506040909401359392505050565b600181811c90821680611ca757607f821691505b60208210811415611cc857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611d0e57611d0e611ce4565b5060010190565b60008219821115611d2857611d28611ce4565b500190565b604081526000611d406040830185611a75565b8281036020840152611d528185611a75565b95945050505050565b60006001600160a01b03808816835280871660208401525060a06040830152611d8760a0830186611a75565b8281036060840152611d998186611a75565b90508281036080840152611dad8185611752565b98975050505050505050565b600060208284031215611dcb57600080fd5b81516116408161160d565b600060033d1115611def5760046000803e5060005160e01c5b90565b600060443d1015611e005790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611e3057505050505090565b8285019150815181811115611e485750505050505090565b843d8701016020828501011115611e625750505050505090565b611e716020828601018761165d565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152611eb460a0830184611752565b97965050505050505056fea164736f6c6343000809000a";

type ERC1155MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Mock__factory extends ContractFactory {
  constructor(...args: ERC1155MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(uri, overrides || {}) as Promise<ERC1155Mock>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MockInterface {
    return new utils.Interface(_abi) as ERC1155MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}