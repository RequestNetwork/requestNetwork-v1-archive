import { Web3Single } from './servicesExternal/web3-single';
import Ipfs from './servicesExternal/ipfs-service';

// Core -------------------------------------
import RequestCoreService from "../src/servicesCore/requestCore-service";

// Contract ---------------------------------
import RequestEthereumService from "../src/servicesContracts/requestEthereum-service";

// Synchrone Extension ----------------------
import RequestSynchroneExtensionEscrowService from "../src/servicesExtensions/requestSynchroneExtensionEscrow-service";


/**
 * The RequestNetwork class is the single entry-point into the requestNetwork.js library. It contains all of the library's functionality
 * and all calls to the library should be made through a RequestNetwork instance.
 */
export default class RequestNetwork {
    /**
     * An instance of the requestEthereumService class containing methods for interacting with the Ethereum currency contract
     */
    public requestEthereumService: RequestEthereumService;
    /**
     * An instance of the requestSynchroneExtensionEscrowService class containing methods for interacting with the Synchrone Extension Escrow
     */
    public requestSynchroneExtensionEscrowService: RequestSynchroneExtensionEscrowService;
    /**
     * An instance of the RequestCoreService class containing methods for interacting with the Request Core
     */
    public requestCoreService: RequestCoreService;
    /**
     * Instantiates a new RequestNetwork instance that provides the public interface to the requestNetwork.js library.
     * @param   provider        The Web3.js Provider instance you would like the requestNetwork.js library to use for interacting with
     *                          the Ethereum network.
     * @param   networkId       the Ethereum network ID.
     * @param   useIpfsPublic   use public ipfs node if true, private one specified in “src/config.json ipfs.nodeUrlDefault.private” otherwise (default : true)
     * @return  An instance of the requestNetwork.js RequestNetwork class.
     */
    constructor(provider? : any, networkId ? : number, useIpfsPublic : boolean = true) {
    	if(provider && !networkId)
    	{
    		throw Error('if you give provider you have to give the networkId too');
    	}
        // init web3 wrapper singleton
    	Web3Single.init(provider,networkId);
        // init ipfs wrapper singleton
        Ipfs.init(useIpfsPublic);
        // init interface services
    	this.requestCoreService = new RequestCoreService();
        this.requestEthereumService = new RequestEthereumService();
        this.requestSynchroneExtensionEscrowService = new RequestSynchroneExtensionEscrowService();
    }
}